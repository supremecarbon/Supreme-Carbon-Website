
import React from "react";

function Contact() {
    const handleMapClick = () => {
        // Open Google Maps with the provided location
        window.open('https://www.google.com/maps?q=22.538788,70.733383', '_blank');
    };

    return (
        <section id="contact" className="text-base-100  bg-secondary">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">Contact</h2>
                </div>
                <footer className="text-base-100 py-8 px-4">
                    <div className="grid grid-cols-12">

                        <div className="col-span-12 lg:col-span-6">
                            <div className="mb-6">
                                <h3 className="text-lg font-bold mb-2">SUPREME CARBON</h3>
                                <p>Mitana, Tankara 363650</p>
                                <p>Gujarat (INDIA)</p>
                                <a href="tel:+916353854737">Ph: (+91) 63538 54737</a>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-lg font-bold mb-2">Phone</h3>
                                <a href="tel:+916353854737">+(91) 63538 54737 – Harsh Sanja</a>
                                <br/>
                                <a href="tel:+919825291830">+(91) 98252 91830 – Bharat Sanja</a>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-lg font-bold mb-2">Email</h3>
                                <a href = "mailto: supremecarbon1801@gmail.com">supremecarbon1801@gmail.com</a>
                                <br/>
                                <a href = "mailto: harshsanja17@gmail.com">harshsanja17@gmail.com</a>
                            </div>

                        </div>

                        <div className="col-span-12 lg:col-span-6">

                            <div className="md:w-1/3 mb-6">
                                <h3 className="text-lg font-bold mb-2">Location</h3>
                                <p className="cursor-pointer underline" onClick={handleMapClick}>
                                    Survey no. 245, near Deliciano,
                                    Hamirpar road at Mitana Tankara,
                                    Morbi 363650 Gujarat (INDIA)
                                </p>
                            </div>
                            <div className="md:w-2/3 mt-4 md:mt-0">
                                {/* Google Map Section */}
                                <iframe
                                    className="w-full h-64 md:h-auto rounded-md"
                                    title="Google Map"
                                    src={`https://maps.app.goo.gl/aVH5XTvgzoZ1swdN8`}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>

                        </div>

                    </div>


                </footer>
            </div>
        </section>
    )
}

export default Contact;