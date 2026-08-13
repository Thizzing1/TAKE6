import "./LocationSearch.css";

import {
    useState,
    useEffect,
    useRef,
    useCallback,
} from "react";

import {
    useNavigate,
    useLocation,
} from "react-router-dom";

import {
    MapPin,
    Search,
    FlaskConical,
} from "lucide-react";

import Map from "../components/Map/Map";

import FloatingButtons
    from "../components/FloatingButtons/FloatingButtons";

import { useDebounce }
    from "../hooks/useDebounce";


/* ==================================================
   FALLBACK LOCATION
================================================== */

const FALLBACK_CENTER = {
    lat: 6.5244,
    lng: 3.3792,
};


/* ==================================================
   LOCATION SEARCH
================================================== */

function LocationSearch() {

    const navigate = useNavigate();

    const location = useLocation();

    const routeState = location.state;


    /* ==================================================
       SEARCH
    ================================================== */

    const [query, setQuery] = useState("");

    const [suggestions, setSuggestions] = useState([]);

    const [showSuggestions, setShowSuggestions] =
        useState(false);

    const [loadingSuggestions, setLoadingSuggestions] =
        useState(false);


    /* ==================================================
       SELECTED LOCATION
    ================================================== */

    const [selectedPlace, setSelectedPlace] =
        useState(null);


    /* ==================================================
       LIVE LOCATION
    ================================================== */

    const [isLiveTracking, setIsLiveTracking] =
        useState(
            () => Boolean(routeState?.auto)
        );


    /* ==================================================
       DEBOUNCE
    ================================================== */

    const debouncedQuery =
        useDebounce(query, 400);


    /* ==================================================
       SEARCH BOX REF
    ================================================== */

    const suggestionBoxRef = useRef(null);


    /* ==================================================
       REVERSE GEOCODING
       
       Coordinates
       ↓
       Mapbox
       ↓
       Address
    ================================================== */

    const reverseGeocode = useCallback(
        async (lat, lng) => {

            try {

                const response = await fetch(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`
                );

                if (!response.ok) {
                    throw new Error(
                        "Reverse geocoding failed"
                    );
                }

                const data =
                    await response.json();

                const place =
                    data.features?.[0];

                return (
                    place?.place_name ||
                    "Current Location"
                );

            } catch (error) {

                console.error(
                    "LABLY reverse geocoding error:",
                    error
                );

                return "Current Location";
            }
        },
        []
    );


    /* ==================================================
       WHEN MARKER MOVES
       
       This is called by Map.jsx.

       Marker moves
       ↓
       New coordinates
       ↓
       Reverse geocode
       ↓
       Address input changes
    ================================================== */

    const handleMapLocationChange =
        useCallback(
            async ({ lat, lng }) => {

                const address =
                    await reverseGeocode(
                        lat,
                        lng
                    );


                /* Update address */

                setQuery(address);


                /* Update selected location */

                setSelectedPlace({
                    lat,
                    lng,
                    address,
                });


                /* Stop GPS mode */

                setIsLiveTracking(false);


                /* Clear suggestions */

                setSuggestions([]);

                setShowSuggestions(false);

            },
            [reverseGeocode]
        );


    /* ==================================================
       INITIAL LOCATION
       
       If another page sends coordinates,
       reverse geocode them.
    ================================================== */

    useEffect(() => {

        if (
            routeState?.lat == null ||
            routeState?.lng == null
        ) {
            return;
        }

        let ignore = false;


        async function loadAddress() {

            const address =
                await reverseGeocode(
                    routeState.lat,
                    routeState.lng
                );


            if (ignore) {
                return;
            }


            setQuery(address);


            setSelectedPlace({
                lat: routeState.lat,
                lng: routeState.lng,
                address,
            });
        }


        loadAddress();


        return () => {
            ignore = true;
        };

    }, [
        routeState,
        reverseGeocode,
    ]);


    /* ==================================================
       MAPBOX ADDRESS SEARCH
    ================================================== */

    useEffect(() => {

        if (!debouncedQuery) {

            setSuggestions([]);

            setLoadingSuggestions(false);

            return;
        }


        /* Don't search the already selected address */

        if (
            selectedPlace &&
            debouncedQuery ===
                selectedPlace.address
        ) {
            return;
        }


        let ignore = false;


        async function fetchSuggestions() {

            setLoadingSuggestions(true);


            try {

                const response = await fetch(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(debouncedQuery)}.json?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}&autocomplete=true&limit=5`
                );


                if (!response.ok) {
                    throw new Error(
                        "Address search failed"
                    );
                }


                const data =
                    await response.json();


                if (!ignore) {

                    setSuggestions(
                        data.features || []
                    );

                }

            } catch (error) {

                console.error(
                    "LABLY address search error:",
                    error
                );


                if (!ignore) {
                    setSuggestions([]);
                }

            } finally {

                if (!ignore) {
                    setLoadingSuggestions(false);
                }

            }

        }


        fetchSuggestions();


        return () => {
            ignore = true;
        };

    }, [
        debouncedQuery,
        selectedPlace,
    ]);


    /* ==================================================
       INPUT CHANGE
    ================================================== */

    const handleInputChange = (event) => {

        const value =
            event.target.value;


        setQuery(value);


        setShowSuggestions(true);


        /* User is changing address */

        setSelectedPlace(null);


        /* Stop live tracking */

        if (isLiveTracking) {
            setIsLiveTracking(false);
        }


        if (!value) {
            setSuggestions([]);
        }

    };


    /* ==================================================
       SELECT SEARCH RESULT
    ================================================== */

    const handleSelectSuggestion =
        (feature) => {

            const [
                lng,
                lat
            ] = feature.center;


            const address =
                feature.place_name;


            setSelectedPlace({
                lat,
                lng,
                address,
            });


            setQuery(address);


            setSuggestions([]);

            setShowSuggestions(false);


            /* Search result is now the selected location */

            setIsLiveTracking(false);

        };


    /* ==================================================
       CLOSE SUGGESTIONS
    ================================================== */

    useEffect(() => {

        function handleClickOutside(event) {

            if (
                suggestionBoxRef.current &&
                !suggestionBoxRef.current.contains(
                    event.target
                )
            ) {

                setShowSuggestions(false);

            }

        }


        document.addEventListener(
            "mousedown",
            handleClickOutside
        );


        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, []);


    /* ==================================================
       SUGGESTED / SAVED
    ================================================== */

    const suggestedPills = [
        "Suggested",
    ];

    const savedPills = [
        "Saved",
    ];


    /* ==================================================
       MAP CENTER
    ================================================== */

    const mapCenter =
        selectedPlace
            ? {
                lat: selectedPlace.lat,
                lng: selectedPlace.lng,
            }
            : FALLBACK_CENTER;


    /* ==================================================
       LOCATION CONFIRMED
    ================================================== */

    const isLocationConfirmed =
        Boolean(selectedPlace);


    /* ==================================================
       GET TESTED
    ================================================== */

    const handleGetTested = () => {

        if (!isLocationConfirmed) {
            return;
        }


        navigate(
            "/book-test",
            {
                state: {

                    lat:
                        selectedPlace.lat,

                    lng:
                        selectedPlace.lng,

                    address:
                        selectedPlace.address,

                },
            }
        );

    };


    /* ==================================================
       UI
    ================================================== */

    return (

        <div className="location-search-page">


            {/* ==================================================
                MAP
            ================================================== */}

            <Map

                longitude={
                    mapCenter.lng
                }

                latitude={
                    mapCenter.lat
                }


                /* ----------------------------------------------
                   MAP ZOOM
                   
                   14 = farther
                   15 = normal
                   16 = closer
                   17 = very close
                ---------------------------------------------- */

                zoom={10}


                /* ----------------------------------------------
                   GPS ZOOM
                ---------------------------------------------- */

                locationZoom={19}


                /* ----------------------------------------------
                   MARKER SIZE
                   
                   Change this number to make your SVG bigger
                   or smaller.

                   50
                   60
                   70
                   80
                   100
                ---------------------------------------------- */

                markerSize={250}


                showMarker={
                    isLocationConfirmed
                }


                live={
                    isLiveTracking
                }


                /* ----------------------------------------------
                   MARKER MOVEMENT
                   
                   Marker
                   ↓
                   Coordinates
                   ↓
                   Reverse geocoding
                   ↓
                   Address changes
                ---------------------------------------------- */

                onLocationChange={
                    handleMapLocationChange
                }

            />


            {/* ==================================================
                FLOATING BUTTONS
            ================================================== */}

            <FloatingButtons
                variant="search"
                onBack={() => navigate(-1)}
            />


            {/* ==================================================
                SEARCH OVERLAY
            ================================================== */}

            <div className="location-search-overlay">


                {/* ==================================================
                    SEARCH BOX
                ================================================== */}

                <div
                    className="location-search-box"
                    ref={suggestionBoxRef}
                >

                    <div
                        className=
                            "location-search-input-wrapper"
                    >

                        <MapPin
                            size={20}
                            className=
                                "location-search-pin"
                        />


                        <input

                            type="text"

                            placeholder=
                                "Enter your address"

                            value={query}

                            onChange={
                                handleInputChange
                            }

                            onFocus={() =>
                                setShowSuggestions(
                                    true
                                )
                            }

                            className=
                                "location-search-input"

                        />


                        {isLiveTracking && (

                            <span
                                className=
                                    "location-live-badge"
                            >
                                Live
                            </span>

                        )}

                    </div>


                    {/* ==================================================
                        SUGGESTIONS
                    ================================================== */}

                    {showSuggestions &&
                        query.length > 0 && (

                            <div
                                className=
                                    "location-suggestions"
                            >


                                {loadingSuggestions && (

                                    <p
                                        className=
                                            "location-suggestions-empty"
                                    >
                                        Searching...
                                    </p>

                                )}


                                {!loadingSuggestions &&
                                    suggestions.length === 0 && (

                                        <p
                                            className=
                                                "location-suggestions-empty"
                                        >
                                            No matches found
                                        </p>

                                    )}


                                {suggestions.map(
                                    (feature) => (

                                        <button

                                            type="button"

                                            key={
                                                feature.id
                                            }

                                            className=
                                                "location-suggestion-item"

                                            onClick={() =>
                                                handleSelectSuggestion(
                                                    feature
                                                )
                                            }

                                        >

                                            <MapPin
                                                size={16}
                                            />

                                            <span>
                                                {
                                                    feature.place_name
                                                }
                                            </span>

                                        </button>

                                    )
                                )}

                            </div>

                        )}

                </div>


                {/* ==================================================
                    LOCATION PILLS
                ================================================== */}

                <div className="location-pills">

                    {suggestedPills.map(
                        (label) => (

                            <button
                                type="button"
                                className=
                                    "location-pill location-pill-suggested"
                                key={label}
                            >
                                {label}
                            </button>

                        )
                    )}


                    {savedPills.map(
                        (label) => (

                            <button
                                type="button"
                                className=
                                    "location-pill location-pill-saved"
                                key={label}
                            >
                                {label}
                            </button>

                        )
                    )}

                </div>

            </div>


            {/* ==================================================
                FOOTER
            ================================================== */}

            <div
                className=
                    "location-search-footer"
            >

                <button

                    type="button"

                    className=
                        "get-tested-btn"

                    disabled={
                        !isLocationConfirmed
                    }

                    onClick={
                        handleGetTested
                    }

                >

                    <Search
                        size={20}
                    />


                    <span>
                        Get Tested
                    </span>


                    <FlaskConical
                        size={20}
                    />

                </button>

            </div>

        </div>

    );
}


export default LocationSearch;