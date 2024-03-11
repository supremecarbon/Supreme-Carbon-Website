
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
                        data-aos-easing="ease-in-sine">About Us</h2>
                </div>

                <div className="col-span-12 lg:col-span-5" data-aos="fade-right" data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
                    <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                        WELCOME TO SUPREME CARBON
                    </h3>
                    <div className="divider"></div>
                    <p>
                        Supreme Carbon is one of the prominent manufacturers and suppliers of Activated Carbon, based in India. At Supreme Carbon, we work as a team with our partners and our vendors as one firm to serve our clients wherever they need us.  Our Company manufactures and supplies high grade Activated Carbon with the base material of Coconut Shell, Wood and Coal.
                    </p>
                    <br/>
                    <p>
                        Supreme Carbon is one of the most experienced manufacturers and exporter of Activated Carbon and we offer our customers a complete range of products and support. We have a well-equipped, modern testing laboratory and each material is tested several times during intermediate stages of production and then before dispatch. Testing procedures can be supplied on request. Raw material can also be tested while put into process. Testing procedure done as per JWWA, BIS, ASTM and JIS standards.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-2"></div>
                <br className="lg:hidden"/>
                <div className="col-span-12 lg:col-span-5" data-aos="fade-left" data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
                    <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                        WHY TO CHOOSE SUPREME CARBON ?
                    </h3>
                    <div className="divider"></div>
                    <p>
                        Supreme Carbon’s production unit manufactures tonnes of activated carbon every year. Our team having vast experience in marketing and production. We follow strict quality standards and comply with all international norms of quality. We give our utmost technical support to our clients and help them getting satisfactory response and solve their ambiguities.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;