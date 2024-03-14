
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Packaging() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="Packaging" className="text-primary bg-base-100">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl" data-aos="zoom-in-up" data-aos-offset="300"
                        data-aos-easing="ease-in-sine">Packaging Details</h2>
                </div>

            </div>
        </section>
    )
}

export default Packaging;