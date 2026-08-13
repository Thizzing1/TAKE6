import { useEffect, useRef, useState } from "react";

import Map, {
    NavigationControl,
    Marker,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import "./Map.css";

import MarkerIcon from "../../assets/svg/marker.svg";


function MapComponent({

    longitude = 3.3792,

    latitude = 6.5244,

    zoom = 17,

    locationZoom = 17,

    showMarker = true,

    live = false,

    /*
    ==================================================
    MARKER SIZE

    Change this from LocationSearch.jsx:

    markerSize={70}

    Examples:

    50  = small
    70  = normal
    100 = large
    130 = very large
    160 = huge
    ==================================================
    */

    markerSize = 200,

    /*
    ==================================================
    SONAR SETTINGS
    ==================================================
    */

    sonarSize = 2,

    sonarExpansion = 2.8,

    sonarDuration = 2.5,

    sonarDelay = 1.25,

    sonarBorderWidth = 2,

    sonarColor = "123, 46, 255",

    sonarOpacity = 0.45,

    /*
    ==================================================
    CALLBACK

    Sends marker coordinates back to LocationSearch.jsx
    ==================================================
    */

    onLocationChange,

}) {


    /* ==================================================
       MAP REF
    ================================================== */

    const mapRef = useRef(null);


    /* ==================================================
       LIVE GPS COORDINATES
    ================================================== */

    const [liveCoords, setLiveCoords] =
        useState(null);


    /* ==================================================
       MANUAL MARKER COORDINATES
    ================================================== */

    const [markerCoords, setMarkerCoords] =
        useState({

            lng: longitude,

            lat: latitude,

        });


    /* ==================================================
       LIVE GPS TRACKING
    ================================================== */

    useEffect(() => {

        if (
            !live ||
            !("geolocation" in navigator)
        ) {

            return;

        }


        const watchId =
            navigator.geolocation.watchPosition(

                (position) => {

                    const coords = {

                        lng:
                            position.coords.longitude,

                        lat:
                            position.coords.latitude,

                    };


                    setLiveCoords(coords);

                    setMarkerCoords(coords);


                    /*
                    ------------------------------------------
                    Send GPS location to parent.
                    ------------------------------------------
                    */

                    if (onLocationChange) {

                        onLocationChange(coords);

                    }

                },


                (error) => {

                    console.error(
                        "LABLY live location error:",
                        error
                    );

                },


                {

                    enableHighAccuracy: true,

                    maximumAge: 5000,

                    timeout: 10000,

                }

            );


        return () => {

            navigator.geolocation.clearWatch(
                watchId
            );

        };

    }, [

        live,

        onLocationChange,

    ]);


    /* ==================================================
       UPDATE MARKER WHEN PARENT LOCATION CHANGES
    ================================================== */

    useEffect(() => {

        /*
        If we're currently using live GPS,
        GPS controls the marker.
        */

        if (live) {

            return;

        }


        setMarkerCoords({

            lng: longitude,

            lat: latitude,

        });

    }, [

        longitude,

        latitude,

        live,

    ]);


    /* ==================================================
       ACTIVE COORDINATES
    ================================================== */

    const activeLng =

        live && liveCoords

            ? liveCoords.lng

            : markerCoords.lng;


    const activeLat =

        live && liveCoords

            ? liveCoords.lat

            : markerCoords.lat;


    /* ==================================================
       MOVE MAP TO LIVE LOCATION
    ================================================== */

    useEffect(() => {

        if (
            !live ||
            !liveCoords ||
            !mapRef.current
        ) {

            return;

        }


        mapRef.current.flyTo({

            center: [

                liveCoords.lng,

                liveCoords.lat,

            ],

            zoom: locationZoom,

            duration: 1000,

            essential: true,

        });

    }, [

        liveCoords,

        live,

        locationZoom,

    ]);


    /* ==================================================
       DRAG MARKER
    ================================================== */

    const handleMarkerDragEnd =
        async (event) => {


            const {

                lng,

                lat,

            } = event.lngLat;


            const coords = {

                lng,

                lat,

            };


            /*
            ------------------------------------------
            Update marker immediately.
            ------------------------------------------
            */

            setMarkerCoords(coords);


            /*
            ------------------------------------------
            Stop using old GPS position.
            ------------------------------------------
            */

            setLiveCoords(null);


            /*
            ------------------------------------------
            Tell LocationSearch.jsx.

            LocationSearch will then:

            coordinates
                    ↓
            Mapbox reverse geocoding
                    ↓
            address
                    ↓
            input field
            ------------------------------------------
            */

            if (onLocationChange) {

                onLocationChange(coords);

            }

        };


    /* ==================================================
       MARKER CSS VARIABLES
    ==================================================

       This is the important part.

       Your CSS expects:

       --marker-size

       --sonar-size

       etc.

       We provide all of them here.
    ================================================== */

    const markerStyle = {

        "--marker-size":
            `${markerSize}px`,

        "--sonar-size":
            sonarSize,

        "--sonar-expansion":
            sonarExpansion,

        "--sonar-duration":
            `${sonarDuration}s`,

        "--sonar-delay":
            `${sonarDelay}s`,

        "--sonar-border-width":
            `${sonarBorderWidth}px`,

        "--sonar-color":
            sonarColor,

        "--sonar-opacity":
            sonarOpacity,

    };


    /* ==================================================
       RENDER
    ================================================== */

    return (

        <Map

            ref={mapRef}

            mapboxAccessToken={
                import.meta.env.VITE_MAPBOX_TOKEN
            }


            initialViewState={{

                longitude:
                    activeLng,

                latitude:
                    activeLat,

                zoom,

            }}


            mapStyle=
                "mapbox://styles/mapbox/streets-v12"


            className="map-container"

        >


            {/* ==================================================
                NAVIGATION CONTROL
            ================================================== */}

            <NavigationControl
                position="bottom-right"
            />


            {/* ==================================================
                MARKER
            ================================================== */}

            {showMarker && (

                <Marker

                    longitude={
                        activeLng
                    }

                    latitude={
                        activeLat
                    }

                    anchor="bottom"

                    draggable={true}

                    onDragEnd={
                        handleMarkerDragEnd
                    }

                >

                    {/* ==================================================
                        MARKER WRAPPER
                    ================================================== */}

                    <div

                        className="marker-wrapper"

                        style={
                            markerStyle
                        }

                    >


                        {/* ==================================================
                            ACTUAL SVG
                        ================================================== */}

                        <img

                            src={MarkerIcon}

                            alt="Selected location"

                            className={

                                live

                                    ? "custom-marker custom-marker-live"

                                    : "custom-marker"

                            }

                            draggable={false}

                        />

                    </div>

                </Marker>

            )}

        </Map>

    );

}


export default MapComponent;