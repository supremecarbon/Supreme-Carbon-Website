
import React from "react";
import logo from "../Navbar/SupremeCarbonLogo.png";

function AboutUs() {
    return (
        <section id="aboutus" className="text-primary bg-base-100">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 grid grid-cols-12">
                <div className="mx-auto max-w-lg text-center col-span-4 mt-8 self-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">About Us</h2>
                </div>
                <div className="mt-8 col-span-8 text-center">
                    <li><a className="text-center normal-case text-2xl font-bold"><img src={logo} alt="Supreme Carbon" className="hover:animate-spin h-44"></img></a></li>
                    Supreme Carbon is an industry-leading producer and provider of standard and customized activated carbons. Supreme Carbon is an prominent producer and provider of top-grade enacted carbon items from chosen grades of coconut, wood, and coal. We are known for our tremendous item run and extraordinary quality. Supreme Carbon has set up itself as a chief producer of activated carbons totally different grades and sizes such as powdered, granular and pelletized to title some
                </div>
            </div>
        </section>
    )
}

export default AboutUs;