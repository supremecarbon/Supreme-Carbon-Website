import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import cosmetics from "./Cosmetics.jpeg";
import airGasTreatment from "./airAndGasTreatment.jpg";
import foodBeverages from "./foodAndBeverage.jpg";
import goldRecovery from "./goldRecovery.jpg";
import mercuryRemoval from "./mercuryRemoval.jpeg";
import petroChemicalCatalyst from "./petroChemicalCatalyst.jpg";
import pharmaceuticals from "./pharamaceuticals.jpg";
import soilRemediation from "./soilRemediation.jpg";
import food from "./food.jpg";
import alcoholPoisoning from "./alcohol-poisoning.jpg"
import "./FieldOfApplication.css";

function FieldOfApplication() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="fieldofapplication" className="text-primary bg-base-100">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl" data-aos="zoom-in-up" data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        Field of Application
                    </h2>
                </div>

                <br />

                <div data-aos="flip-left" data-aos-duration="1000" className="card lg:card-side m-5 border-2 border-gray-500 hover:border-white hover:shadow-gray-700 hover:shadow-lg bg-base-100 shadow-xl ">
                    <figure className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"><img
                        src={airGasTreatment}
                        alt="Air and Gas Treatment" className="object-cover w-full h-full" /></figure>
                    <div className="card-body bg-base-300 rounded-xl">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Air and Gas Treatment
                        </h4>
                        <p className="block mb-8 font-sans text-white antialiased font-normal leading-relaxed text-gray-700">
                            Activated Carbon products have very wide application in Air
                            Purification and related processes. Our Activated Carbon
                            products have high Adsorption capacities so that impurities
                            can be absorbed by it easily using either Chemisorption or
                            Physical Adsorption. Our Activated Carbon products have the
                            necessary quantities of an accessible surface area and also
                            the required amount of active sites. This ensures that both
                            physical as well as the chemical process can be conducted
                            simultaneously for added efficiency in the Air purification
                            and related functions with our Activated Carbon Products.
                        </p>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-duration="1000" className="card lg:card-side m-5 border-2 border-gray-500 hover:border-white hover:shadow-gray-700 hover:shadow-lg bg-base-100 shadow-xl ">
                    <figure className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"><img
                        src={pharmaceuticals}
                        alt="Pharmaceuticals" className="object-cover w-full h-full" /></figure>
                    <div className="card-body bg-base-300 rounded-xl">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Pharmaceuticals
                        </h4>
                        <p className="block mb-8 font-sans text-white antialiased font-normal leading-relaxed text-gray-700">
                            Activated carbons are copiously used in the pharmaceutical
                            industry for the manufacturing of a whole slew of
                            pharmaceutical compounds. Activated carbons are used in
                            either powder or granular form. At Supreme Carbon, we offer
                            top-grade activated carbons for pharmaceutical industry that
                            are used in a number of applications including the
                            purification of amino acids, mineral acids, biodiesel
                            glycerine, and APIs. The unique properties of specific
                            activated carbons from Supreme Carbon provide superior
                            removal of colour compounds, odour compounds, proteins and
                            other contaminants that could be present in the raw
                            materials, or that form during production.
                        </p>
                    </div>
                </div>

                <div data-aos="flip-left" data-aos-duration="1000" className="card lg:card-side m-5 border-2 border-gray-500 hover:border-white hover:shadow-gray-700 hover:shadow-lg bg-base-100 shadow-xl ">
                    <figure className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"><img
                        src={goldRecovery}
                        alt="Gold Recovery" className="object-cover w-full h-full" /></figure>
                    <div className="card-body bg-base-300 rounded-xl">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Gold Recovery
                        </h4>
                        <p className="block mb-8 font-sans text-white antialiased font-normal leading-relaxed text-gray-700">
                            Since 1970 most of the Gold mines around the world have
                            shifted to Activated Carbon based Gold recovery systems and
                            discontinued chemical extraction. The use of activated
                            carbon for gold mining isn’t new at all and owing to its
                            outstanding performance and minimum attrition loss
                            properties, it is considered perfect for gold recovery. Our
                            high-end technology allows us to manufacture high density
                            carbons with particle to particle consistency. Owing to
                            these properties you achieve desired results in various
                            applications including- •CIP (Carbon-in-Pulp) •CIL
                            (Carbon-in-Leach) •CIC (Carbon-in-Column)
                        </p>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-duration="1000" className="card lg:card-side m-5 border-2 border-gray-500 hover:border-white hover:shadow-gray-700 hover:shadow-lg bg-base-100 shadow-xl ">
                    <figure className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"><img
                        src={mercuryRemoval}
                        alt="Mercury Removal" className="object-cover w-full h-full" /></figure>
                    <div className="card-body bg-base-300 rounded-xl">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Mercury Removal
                        </h4>
                        <p className="block mb-8 font-sans text-white antialiased font-normal leading-relaxed text-gray-700">
                            Activated Carbon products are finding more and more uses in
                            the Industrial sector and Mercury removal from the Liquid
                            Hydrocarbons like Liquefied Natural Gas is the most
                            important among them. Mercury emissions occurring from
                            coal-fired generators, industrial boilers, and cement
                            production plants have always posed a threat to
                            environmental balance. Whether you are looking for granular,
                            powdered, or pelletized activated carbon for mercury
                            adsorption, EcoFriend Carbon has you covered. Being a
                            trusted player in the field of mercury removal, we offer
                            products specifically tailored to your needs. Industries Our
                            Activated carbon for mercury removal is used in several
                            industries including- •Plastic industry •Pulp industry
                            •Cement industry •Oil refinery
                        </p>
                    </div>
                </div>

                <div data-aos="flip-left" data-aos-duration="1000" className="card lg:card-side m-5 border-2 border-gray-500 hover:border-white hover:shadow-gray-700 hover:shadow-lg bg-base-100 shadow-xl ">
                    <figure className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"><img
                        src={foodBeverages}
                        alt="Food and Beverages" className="object-cover w-full h-full" /></figure>
                    <div className="card-body bg-base-300 rounded-xl">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Food and Beverages
                        </h4>
                        <p className="block mb-8 font-sans text-white antialiased font-normal leading-relaxed text-gray-700">
                            Activated carbon is used to remove odor and colored
                            compounds to produce quality foods and beverages. Beverages
                            to be liked by their customers must not only look good but
                            also smell and taste good. The Activated Carbon is used by
                            the Beverage Industry for achieving • Complete removal of
                            bad tastes • Removal of bad odors • Long term Color
                            Stability • Removal of Disinfectants • Removal of degrading
                            products from water used in the production of the Beverages
                        </p>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-duration="1000" className="card lg:card-side m-5 border-2 border-gray-500 hover:border-white hover:shadow-gray-700 hover:shadow-lg bg-base-100 shadow-xl ">
                    <figure className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"><img
                        src={soilRemediation}
                        alt="Soil Remediation" className="object-cover w-full h-full" /></figure>
                    <div className="card-body bg-base-300 rounded-xl">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Soil Remediation
                        </h4>
                        <p className="block mb-8 font-sans text-white antialiased font-normal leading-relaxed text-gray-700">
                            The removal of undesired organic pollutants from the soil
                            and groundwater is essential for the purpose. Activated
                            carbon filters are used in conjunction with sand filters to
                            clean up contaminated sites. VOCs and odorous compounds are
                            removed by using carbon filters. Activated carbon for soil
                            bioremediation is needed to achieve this purpose. We offer
                            granular activated carbon (GAC) for liquid phase soil
                            amendment and extruded pellets which are used for the
                            removal of VOCs and odors.
                        </p>
                    </div>
                </div>

                <div  data-aos="flip-left" data-aos-duration="1000" className="card lg:card-side m-5 border-2 border-gray-500 hover:border-white hover:shadow-gray-700 hover:shadow-lg bg-base-100 shadow-xl ">
                    <figure className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"><img
                        src={petroChemicalCatalyst}
                        alt="Petrochemical Catalyst" className="object-cover w-full h-full" /></figure>
                    <div className="card-body bg-base-300 rounded-xl">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Petrochemical Catalyst
                        </h4>
                        <p className="block mb-8 font-sans text-white antialiased font-normal leading-relaxed text-gray-700">
                            Supreme Carbon is a reputable player in the field of
                            Activated Carbon for petrochemical catalyst production. As a
                            spearheading manufacturer of activated carbon for catalyst
                            support, we are well-versed with the legislative constraints
                            and ever-increasing market competition. By deploying modern
                            technologies, we have constantly rendered innovative
                            catalytic solutions to our prestigious clientele across the
                            world.
                        </p>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-duration="1000" className="card lg:card-side m-5 border-2 border-gray-500 hover:border-white hover:shadow-gray-700 hover:shadow-lg bg-base-100 shadow-xl ">
                    <figure className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"><img
                        src={cosmetics}
                        alt="Cosmetics" className="object-cover w-full h-full" /></figure>
                    <div className="card-body bg-base-300 rounded-xl">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Cosmetics
                        </h4>
                        <p className="block mb-8 font-sans text-white antialiased font-normal leading-relaxed text-gray-700">
                            Activated carbon powder made from coconut shells is being
                            used by many to treat skin infections. Activated charcoal
                            may have an antibacterial effect by absorbing harmful
                            microbes from wounds. Activated charcoal–when used in a face
                            mask–binds to dirt and helps pull it out of your pores,
                            making them less visible.
                        </p>
                    </div>
                </div>

                <div data-aos="flip-left" data-aos-duration="1000" className="card lg:card-side m-5 border-2 border-gray-500 hover:border-white hover:shadow-gray-700 hover:shadow-lg bg-base-100 shadow-xl ">
                    <figure className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"><img
                        src={food}
                        alt="food" className="object-cover w-full h-full" /></figure>
                    <div className="card-body bg-base-300 rounded-xl">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Black Carbon Food at International Hotels
                        </h4>
                        <p className="block mb-8 font-sans text-white antialiased font-normal leading-relaxed text-gray-700">
                            Activated Carbon application started with food processing as a detox, though not very appealing to look at. It was started off to cleanse and remove impurities for fresh juices, smoothies, and other soft drinks.

                            Charcoal is edible in some forms and tastes better with the right combination of food. Charcoal powder made from the extract of Bamboo is claimed to be one pure form that tastes delicious when mixed with the rice batter. Executive Chefs at International Hotels and restaurants try out the charcoal combination and delight their guests.

                            When spoken to Health Experts, Activated Charcoal added to food is natural, pure and healthy and has the power to fight chronic diseases and provide great relief for other common ailments. Moreover, it is also used for treating for poisoning and drug overdose.

                            Chefs are very much interested in this beautiful concept to include activated charcoal in consumables. So alluring to see those sweet potatoes garnished with purple hues. Ice cream waffles made of charcoal. Pizza crust infused with charcoal is now well and good for guests. More dishes are made of charcoal like charcoal fish fry.
                        </p>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-duration="1000" className="card lg:card-side m-5 border-2 border-gray-500 hover:border-white hover:shadow-gray-700 hover:shadow-lg bg-base-100 shadow-xl ">
                    <figure className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"><img
                        src={alcoholPoisoning}
                        alt="Alcohol Poisoning" className="object-cover w-full h-full" /></figure>
                    <div className="card-body bg-base-300 rounded-xl">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Reducing the impact of alcohol poisoning
                        </h4>
                        <p className="block mb-8 font-sans text-white antialiased font-normal leading-relaxed text-gray-700">
                            Alcohol poisoning, could be very serious and potentially deadly, caused due to the consumption of too much alcohol within a short amount of time, which doesn’t allow your liver enough time to filter out all the toxins from your body.

                            To help alleviate the effects of alcohol poisoning, Activated Charcoal has been used to bind to and remove the chemicals and toxins from the body. While it doesn’t actually absorb the alcohol itself, it can definitely help flush out the toxins and keep someone from getting severely ill. People should absolutely call 911 if they suspect anyone may have alcohol poisoning.

                            In addition, studies have shown that taking Activated Charcoal during the consumption of alcohol can reduce the effect of alcohol on the blood. This may result in reduced hangover symptoms from alcohol consumption, but it’s definitely not something that should be used in place of drinking responsibly and must not be tried without a certified physician consultation.
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default FieldOfApplication;
