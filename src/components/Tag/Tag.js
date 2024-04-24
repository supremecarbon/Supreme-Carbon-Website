
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Tag() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="tag" className="text-primary bg-base-300 ">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

                <div className="mx-auto col-span-12 text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl animate-pulse ">Experience the Supreme Carbon Advantage Today</h2>
                </div>
            </div>
        </section>
    )
}

export default Tag;