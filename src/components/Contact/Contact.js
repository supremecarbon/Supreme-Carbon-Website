
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    const handleMapClick = () => {
        // Open Google Maps with the provided location
        window.open('https://www.google.com/maps?q=22.538788,70.733383', '_blank');
    };
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="contact" className="text-base-100  bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl" data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom">Contact</h2>
                </div>
                <footer className="text-base-100 py-8 px-4">
                    <div className="grid grid-cols-12">

                        <div className="col-span-12 lg:col-span-6">
                            {/*<div className="mb-6" data-aos="fade-right"*/}
                            {/*     data-aos-offset="300"*/}
                            {/*     data-aos-easing="ease-in-sine">*/}
                            {/*    <h3 className="text-lg font-bold mb-2">SUPREME CARBON</h3>*/}
                            {/*    <p>Mitana, Tankara 363650</p>*/}
                            {/*    <p>Gujarat (INDIA)</p>*/}
                            {/*    <a href="tel:+916353854737">Ph: (+91) 63538 54737</a>*/}
                            {/*</div>*/}
                            <div className="mb-6" data-aos="fade-right"
                                 data-aos-anchor-placement="center-bottom">
                                <h3 className="text-lg font-bold mb-2">Phone</h3>
                                <a href="tel:+916353854737">+(91) 63538 54737 – Harsh Sanja</a>
                                {/*<br/>*/}
                                {/*<a href="tel:+919825291830">+(91) 98252 91830 – Bharat Sanja</a>*/}
                            </div>
                            <div className="mb-6" data-aos="fade-right"
                                 data-aos-anchor-placement="top-bottom">
                                <h3 className="text-lg font-bold mb-2">Email</h3>
                                <a href = "mailto: admin@supremecarbon.in">admin@supremecarbon.in</a>
                                {/*<br/>*/}
                                {/*<a href = "mailto: harshsanja17@gmail.com">harshsanja17@gmail.com</a>*/}
                            </div>
                            <br/>
                            <div className="mb-6" data-aos="fade-right"

                                 data-aos-easing="ease-in-sine">

                                <h3 className="text-lg font-bold mb-2">Stay Connected.</h3>
                                <div className="flex space-x-6">
                                    <a href="https://www.linkedin.com/company/supreme-carbon/" target="_blank">
                                        <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 link" to="" fill="currentColor" viewBox="0 0 24 24" >
                                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/supreme.carbon.official/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="col-span-12 lg:col-span-6" >

                            <div className="md:w-1/3 mb-6" data-aos="fade-left"
                                 data-aos-offset="300"
                                 data-aos-easing="ease-in-sine">
                                <h3 className="text-lg font-bold mb-2">Location</h3>
                                <p className="cursor-pointer underline" onClick={handleMapClick}>
                                    Survey no. 245, near Deliciano,
                                    Hamirpar road at Mitana Tankara,
                                    Morbi 363650 Gujarat (INDIA)
                                </p>
                            </div>
                            <div className="md:w-2/3 mt-4 md:mt-0">
                                {/* Google Map Section */}
                                {/*<iframe*/}
                                {/*    className="w-full h-64 md:h-auto rounded-md"*/}
                                {/*    title="Google Map"*/}
                                {/*    src={`https://maps.app.goo.gl/aVH5XTvgzoZ1swdN8`}*/}
                                {/*    allowFullScreen=""*/}
                                {/*    loading="lazy"*/}
                                {/*></iframe>*/}

                                <iframe
                                    className="w-full h-64 md:h-auto rounded-md "
                                    data-aos="flip-right"
                                    data-aos-anchor-placement="bottom-bottom"
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7369.270178195539!2d70.74561075000001!3d22.5553384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c1c38874113f%3A0x533536c3698202f9!2sMitana%2C%20Gujarat%20363650%2C%20India!5e0!3m2!1sen!2sus!4v1710172214019!5m2!1sen!2sus"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>

                        </div>

                    </div>


                </footer>
            </div>
        </section>
    )
}

export default Contact;