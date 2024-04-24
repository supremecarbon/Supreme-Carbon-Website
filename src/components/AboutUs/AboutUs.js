
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../Navbar/SupremeCarbonLogo.png";

function AboutUs() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="aboutus" className="text-primary bg-base-100">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 grid grid-cols-12">
                <div className="mx-auto mb-12 max-w-lg text-center col-span-12">
                    <h2 className="text-3xl font-bold lg:text-5xl" data-aos="zoom-in-up"  data-aos-offset="300"
                        data-aos-easing="ease-in-sine">Why to choose Supreme Carbon?</h2>
                </div>

                <div className="col-span-12 lg:col-span-6 m-4" data-aos="fade-right" data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
                    <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                        Unmatched Quality Assurance
                    </h3>
                    <div className="divider"></div>
                    <p>
                        We pride ourselves on delivering activated carbon products of
                        unrivaled quality. Our stringent quality control measures ensure that every batch meets the highest
                        standards, guaranteeing superior performance and reliability.                    </p>
                </div>

                <div className="col-span-12 lg:col-span-6 m-4" data-aos="fade-left" data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
                    <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                        Customized Solutions, Tailored to Your Needs
                    </h3>
                    <div className="divider"></div>
                    <p>
                        We believe in the power of customization. Our
                        team works closely with clients to understand their specific requirements and provide tailored activated
                        carbon solutions that precisely meet their needs. From product formulation to packaging, we are dedicated
                        to exceeding expectations.                    </p>
                </div>

                <div className="col-span-12 lg:col-span-6 m-4" data-aos="fade-right" data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
                    <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                        Cutting-Edge Technology
                    </h3>
                    <div className="divider"></div>
                    <p>
                        Innovation is at the heart of what we do. We leverage the latest
                        advancements in technology and manufacturing processes to stay ahead of the curve. Our state-of-the-art
                        facilities and equipment enable us to produce activated carbon products of exceptional quality and
                        consistency.                    </p>
                </div>

                <div className="col-span-12 lg:col-span-6 m-4" data-aos="fade-left" data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
                    <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                        Industry Expertise
                    </h3>
                    <div className="divider"></div>
                    <p>
                        With years of experience in the activated carbon industry, we have developed a
                        deep understanding of our clients' industries and requirements. Our team of experts is always available to
                        offer professional advice and support, ensuring seamless integration of our products into your processes.                    </p>
                </div>

                <div className="col-span-12 lg:col-span-6 m-4" data-aos="fade-right" data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
                    <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                        Sustainable Practices                    </h3>
                    <div className="divider"></div>
                    <p>
                        Sustainability is not just a buzzword for us; it's a way of life. We are
                        committed to minimizing our environmental footprint through responsible sourcing, efficient production
                        methods, and recycling initiatives. By choosing Supreme Carbon, you're not just getting superior products
                        – you're also contributing to a greener, more sustainable future.                    </p>
                </div>

                <div className="col-span-12 lg:col-span-6 m-4" data-aos="fade-left" data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
                    <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                        Global Reach, Local Presence
                    </h3>
                    <div className="divider"></div>
                    <p>
                        With a global network of partners and distributors, we have the
                        ability to serve clients worldwide. Whether you're located down the street or across the globe, you can
                        count on Supreme Carbon to deliver prompt, reliable service wherever you are.                    </p>
                </div>

                <div className="col-span-12 lg:col-span-6 m-4" data-aos="fade-right" data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
                    <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                        Exceptional Customer Service
                    </h3>
                    <div className="divider"></div>
                    <p>
                        At Supreme Carbon, customer satisfaction is our top priority. From
                        initial inquiries to after-sales support, our dedicated team is committed to providing prompt, courteous
                        service at every step of the process. We value your business and are always here to help.                   </p>
                </div>

                <div className="col-span-12 lg:col-span-6 m-4" data-aos="fade-left" data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
                    <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                        Proven Track Record
                    </h3>
                    <div className="divider"></div>
                    <p>
                        Don't just take our word for it – our track record speaks for itself. Over the
                        years, we have earned the trust and loyalty of countless clients across a diverse range of industries. Our
                        testimonials and case studies stand as a testament to the quality and reliability of our products and
                        services.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;