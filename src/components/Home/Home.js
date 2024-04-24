
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../Navbar/SupremeCarbonLogo.png";
import {Link} from "react-scroll";

function Home() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="home" className=" text-primary bg-base-100">
            <div className="grid grid-cols-12 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

                <div className="divider col-span-12"></div>

                <div className="mx-auto col-span-12 text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl" data-aos="zoom-in-up" data-aos-offset="300"
                        data-aos-easing="ease-in-sine">Welcome to Supreme Carbon – Your Premier Destination for Exceptional Activated Carbon Solutions!
                    </h2>
                </div>

                <div className="mt-8 col-span-12 text-center" data-aos="zoom-in-up">



                    Supreme Carbon is an industry-leading producer and provider of standard and customized activated carbons. Supreme Carbon is an prominent producer and provider of top-grade enacted carbon items from chosen grades of coconut, wood, and coal. We are known for our tremendous item run and extraordinary quality. Supreme Carbon has set up itself as a chief producer of activated carbons totally different grades and sizes such as powdered, granular and pelletized to title some

                    <br/>
                    <br/>
                    At Supreme Carbon, we take pride in being at the forefront of the industry, offering a diverse range of
                    standard and customized activated carbon products. With our relentless commitment to excellence, we
                    stand out as a leading producer and provider of premium activated carbon derived from carefully selected
                    grades of coconut, wood, and coal.
                </div>

                <div className="m-4 mt-8  col-span-4 text-center" data-aos="zoom-out-left">
                    <div className="max-w-2xl">
                        <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                            Setting the Standard for Activated Carbon Excellence
                        </h3>
                        <p className="text-primary mt-3 max-w-xl" >
                            What sets Supreme Carbon apart is our dedication to delivering products of unparalleled quality and
                            versatility. Our extensive product range encompasses various grades and sizes, including powdered,
                            granular, and pelletized activated carbon. From air and gas treatment to pharmaceuticals, gold recovery,
                            and soil remediation, our activated carbon solutions are tailored to meet the diverse needs of industries
                            worldwide.                        </p>
                    </div>



                </div>
                <div className="m-4 mt-8  col-span-4 text-center" data-aos="zoom-out-right">
                    <div className="max-w-2xl" data-aos="zoom-out-left">
                        <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                            Driving Innovation in Carbon Activation
                        </h3>
                        <p className="text-primary mt-3 max-w-xl">
                            Our manufacturing process employs cutting-edge techniques to ensure the highest quality activated
                            carbon. Whether through chemical activation or steam activation, we harness the power of advanced
                            technology to create activated carbon with a vast network of pores and an exceptionally high surface area.
                            This enables supreme adsorption capabilities, making our products highly effective in removing
                            contaminants from gases or liquids.                        </p>
                    </div>


                </div>
                <div className="m-4 mt-8  col-span-4 text-center" data-aos="zoom-out-right">
                    <div className="max-w-2xl">
                        <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                            Empowering Industries with Tailored Solutions
                        </h3>
                        <p className="text-primary mt-3 max-w-xl" >
                            At Supreme Carbon, we understand that one size does not fit all. That's why we offer customized
                            activated carbon solutions to cater to the unique requirements of each industry we serve. From granular
                            activated carbon (GAC) for air and gas treatment to powdered activated carbon (PAC) for pharmaceutical
                            applications, our products are meticulously engineered to deliver optimal performance and efficiency.
                        </p>
                    </div>


                </div>
                <div className="divider col-span-12"></div>
            </div>
        </section>
    )
}

export default Home;