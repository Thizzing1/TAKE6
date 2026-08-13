import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import "./Home.css";

import Map from "../components/Map/Map";
import FloatingButtons from "../components/FloatingButtons/FloatingButtons";
import BottomSheet from "../components/BottomSheet/BottomSheet";
import LocationCard from "../components/LocationCard/LocationCard";
import { createClient } from "@supabase/supabase-js";

const supabaseurl=import.meta.env.VITE_supabaseurl;
const supabasekey=import.meta.env.VITE_supabasekey;

const supabase=createClient(supabaseurl,supabasekey);



function Home(){


    const navigate = useNavigate();

    const [showLocationCard, setShowLocationCard] = useState(false);

    const [checkingPermission, setCheckingPermission] = useState(true);
    const [isSigningOut, setIsSigningOut] = useState(false);
    const [logoutError, setLogoutError] = useState("");



    const handleSignOut = async () => {
        setLogoutError("");
        setIsSigningOut(true);

        const { data, error } = await supabase.auth.signOut();

        setIsSigningOut(false);

        if (error) {
            console.log(`Error from signing out ${error}`);
            setLogoutError(error.message || "Unable to sign out. Please try again.");
            return;
        }

        console.log(`Logging user out ${data}`);
        navigate("/login");
    };




    useEffect(() => {

        let ignore = false;

        async function checkExistingPermission() {

            // Safari doesn't support querying geolocation permission state
            // ahead of time — in that case we just fall through to the
            // normal card flow below instead of guessing.

            if (!("geolocation" in navigator) || !navigator.permissions) {

                if (!ignore) setCheckingPermission(false);

                return;

            }

            try {

                const status = await navigator.permissions.query({ name: "geolocation" });

                if (status.state === "granted") {

                    navigator.geolocation.getCurrentPosition(

                        (pos) => {

                            if (ignore) return;

                            navigate("/location-search", {

                                state: {

                                    lat: pos.coords.latitude,

                                    lng: pos.coords.longitude,

                                    auto: true,

                                },

                            });

                        },

                        () => {

                            if (!ignore) setCheckingPermission(false);

                        }

                    );

                } else {

                    if (!ignore) setCheckingPermission(false);

                }

            } catch {

                if (!ignore) setCheckingPermission(false);

            }

        }

        checkExistingPermission();

        return () => {

            ignore = true;

        };

    }, [navigate]);


    const handleUseMyLocation = () => {

        if (!("geolocation" in navigator)) return;

        navigator.geolocation.getCurrentPosition(

            (pos) => {

                navigate("/location-search", {

                    state: {

                        lat: pos.coords.latitude,

                        lng: pos.coords.longitude,

                        auto: true,

                    },

                });

            },

            () => {

                // Permission denied or error — let them continue

                // and enter their address manually instead.

                navigate("/location-search");

            }

        );

    };


    const handleSkip = () => {

        navigate("/location-search");

    };


    if (checkingPermission) {

        return <div className="home-loading" />;

    }


    return(

        <div className="home">

        <button onClick={handleSignOut} disabled={isSigningOut}>
            {isSigningOut ? "Signing out..." : "Sign out"}
        </button>

            {logoutError && <p className="auth-error">{logoutError}</p>}

            <Map/>

            <FloatingButtons/>


            {
                showLocationCard ?

                <LocationCard 
                    onClose={()=>
                        setShowLocationCard(false)
                    }
                    onUseLocation={handleUseMyLocation}
                    onSkip={handleSkip}
                />

                :

                <BottomSheet
                    onClick={()=>
                        setShowLocationCard(true)
                    }
                />

            }


        </div>

    )

}


export default Home;