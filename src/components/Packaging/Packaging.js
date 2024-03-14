
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import pack1 from './packaging-1.jpg'
import pack2 from './packaging-2.jpg'
import pack3 from './packaging-3.jpg'

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
                <div className="mt-8 col-span-12 text-center p-4" data-aos="zoom-in-up">
                    <p>We provide activated charcoal in container options of 25 kg, 30 kg, 50 kg, and 500 kg.  </p>
                    <p>                    Additionally, we provide bespoke packaging choices based on the needs of our clients.
                    </p>
                </div>


                <br/>

                <div className="grid grid-cols-12 justify-items-center">
                    <div className="col-span-4">
                        <img className="rounded-xl" src={pack1} alt="pack1" />
                    </div>
                    <div className="col-span-4">
                        <img className="rounded-xl" src={pack2} alt="pack2" />
                    </div>
                    <div className="col-span-4">
                        <img className="rounded-xl" src={pack3} alt="pack3" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Packaging;