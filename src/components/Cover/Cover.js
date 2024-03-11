import React, { useState } from "react";
import logo from "../Navbar/SupremeCarbonLogo.png";
import "./Cover.css";
import { Link } from "react-scroll";

function Cover(props, ref) {
    const [rotateImage, setRotateImage] = useState(false);

    const handleGetStartedClick = () => {
        setRotateImage(true);

        // Scroll to the home section after a delay
        setTimeout(() => {
            window.scrollTo({
                top: document.getElementById("home").offsetTop,
                behavior: "smooth"
            });
        }, 1500);
    };




    return (
        <section className="bg-base-100 text-white" ref={ref}>
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center" style={{ textAlign: "-webkit-center" }}>
                    <img
                        src={logo}
                        className={rotateImage ? "col-span-2 animate-spin-slow w-96 max-h-max" : "w-96 max-h-max"}
                        alt="Your Image"
                    ></img>
                    <p className="text-white  col-span-12 text-6xl bg-base-100 font-bold text-center self-center">
                        SUPREME CARBON
                    </p>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">Carbon - The Backbone of Life!</p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button
                            className="block w-full rounded border border-primary bg-neutral px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            onClick={handleGetStartedClick}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.forwardRef(Cover);
