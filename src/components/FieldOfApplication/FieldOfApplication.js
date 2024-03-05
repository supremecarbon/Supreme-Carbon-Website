import React from "react";
import cosmetics from "./Cosmetics.jpeg";
import airGasTreatment from "./airAndGasTreatment.jpg";
import foodBeverages from "./foodAndBeverage.jpg";
import goldRecovery from "./goldRecovery.jpg";
import mercuryRemoval from "./mercuryRemoval.jpeg";
import petroChemicalCatalyst from "./petroChemicalCatalyst.jpg";
import pharmaceuticals from "./pharamaceuticals.jpg";
import soilRemediation from "./soilRemediation.jpg";
import "./FieldOfApplication.css";

function FieldOfApplication() {
    return (
        <section id="fieldofapplication" className="text-primary bg-base-100">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">
                        Field of Application
                    </h2>
                </div>

                <br />

                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-4 m-4">
                        <a className="group relative block h-64 sm:h-64 lg:h-64 ">
                            <span className="absolute inset-0 border-2 border-dashed border-white"></span>

                            <div className="relative flex justify-center h-full transform items-end border-2 border-base-100 bg-base-100 transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
                                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                                    <img
                                        src={airGasTreatment}
                                        alt="Air and Gas Treatment"
                                        className="w-full h-48 sm:h-48 lg:h-48 border-2 border-white object-cover object-center rounded-lg shadow-md"
                                    />
                                </div>

                                <div className="grid grid-rows-6 absolute h-64 sm:h-64 lg:h-64 p-4 opacity-0 transition-opacity bg-base-300 border-2 border-white group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                                    <h3 className=" row-span-1 text-xl font-medium sm:text-2xl">
                                        Air & Gas Treatment
                                    </h3>

                                    <p className="mt-2  row-span-5 text-sm sm:text-base  overflow-auto">
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
                        </a>
                    </div>

                    <div className="col-span-12 lg:col-span-4 m-4">
                        <a className="group relative block h-64 sm:h-64 lg:h-64 ">
                            <span className="absolute inset-0 border-2 border-dashed border-white"></span>

                            <div className="relative flex justify-center h-full transform items-end border-2 border-base-100 bg-base-100 transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
                                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                                    <img
                                        src={pharmaceuticals}
                                        alt="Pharmaceuticals"
                                        className="w-full h-48 sm:h-48 lg:h-48 border-2 border-white object-cover object-center rounded-lg shadow-md"
                                    />
                                </div>

                                <div className="grid grid-rows-6 absolute h-64 sm:h-64 lg:h-64 p-4 opacity-0 transition-opacity bg-base-300 border-2 border-white group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                                    <h3 className=" row-span-1 text-xl font-medium sm:text-2xl">
                                        Pharmaceuticals
                                    </h3>

                                    <p className="mt-2  row-span-5 text-sm sm:text-base  overflow-auto">
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
                        </a>
                    </div>

                    <div className="col-span-12 lg:col-span-4 m-4">
                        <a className="group relative block h-64 sm:h-64 lg:h-64">
                            <span className="absolute inset-0 border-2 border-dashed border-white"></span>

                            <div className="relative flex justify-center h-full transform items-end border-2 border-base-100 bg-base-100 transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
                                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                                    <img
                                        src={goldRecovery}
                                        alt="Gold Recovery"
                                        className="w-full h-48 sm:h-48 lg:h-48 border-2 border-white object-cover object-center rounded-lg shadow-md"
                                    />
                                </div>

                                <div className="grid grid-rows-6 absolute h-64 sm:h-64 lg:h-64 p-4 opacity-0 transition-opacity bg-base-300 border-2 border-white group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                                    <h3 className=" row-span-1 text-xl font-medium sm:text-2xl">
                                        Gold Recovery
                                    </h3>

                                    <p className="mt-2  row-span-5 text-sm sm:text-base  overflow-auto">
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
                        </a>
                    </div>
                </div>


                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-4 m-4">
                        <a className="group relative block h-64 sm:h-64 lg:h-64">
                            <span className="absolute inset-0 border-2 border-dashed border-white"></span>

                            <div className="relative flex justify-center h-full transform items-end border-2 border-base-100 bg-base-100 transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
                                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                                    <img
                                        src={mercuryRemoval}
                                        alt="Mercury Removal"
                                        className="w-full h-48 sm:h-48 lg:h-48 border-2 border-white object-cover object-center rounded-lg shadow-md"
                                    />
                                </div>

                                <div className="grid grid-rows-6 absolute h-64 sm:h-64 lg:h-64 p-4 opacity-0 transition-opacity bg-base-300 border-2 border-white group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                                    <h3 className=" row-span-1 text-xl font-medium sm:text-2xl">
                                        Mercury Removal
                                    </h3>

                                    <p className="mt-2  row-span-5 text-sm sm:text-base  overflow-auto">
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
                        </a>
                    </div>

                    <div className="col-span-12 lg:col-span-4 m-4">
                        <a className="group relative block h-64 sm:h-64 lg:h-64">
                            <span className="absolute inset-0 border-2 border-dashed border-white"></span>

                            <div className="relative flex justify-center h-full transform items-end border-2 border-base-100 bg-base-100 transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
                                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                                    <img
                                        src={foodBeverages}
                                        alt="Food and Beverages"
                                        className="w-full h-48 sm:h-48 lg:h-48 border-2 border-white object-cover object-center rounded-lg shadow-md"
                                    />
                                </div>

                                <div className="grid grid-rows-6 absolute h-64 sm:h-64 lg:h-64 p-4 opacity-0 transition-opacity bg-base-300 border-2 border-white group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                                    <h3 className=" row-span-1 text-xl font-medium sm:text-2xl">
                                        Food and Beverages
                                    </h3>

                                    <p className="mt-2  row-span-5 text-sm sm:text-base  overflow-auto">
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
                        </a>
                    </div>

                    <div className="col-span-12 lg:col-span-4 m-4">
                        <a className="group relative block h-64 sm:h-64 lg:h-64">
                            <span className="absolute inset-0 border-2 border-dashed border-white"></span>

                            <div className="relative flex justify-center h-full transform items-end border-2 border-base-100 bg-base-100 transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
                                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                                    <img
                                        src={soilRemediation}
                                        alt="Soil Remediation"
                                        className="w-full h-48 sm:h-48 lg:h-48 border-2 border-white object-cover object-center rounded-lg shadow-md"
                                    />
                                </div>

                                <div className="grid grid-rows-6 absolute h-64 sm:h-64 lg:h-64 p-4 opacity-0 transition-opacity bg-base-300 border-2 border-white group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                                    <h3 className=" row-span-1 text-xl font-medium sm:text-2xl">
                                        Soil Remediation
                                    </h3>

                                    <p className="mt-2  row-span-5 text-sm sm:text-base  overflow-auto">
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
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-4 m-4">
                        <a className="group relative block h-64 sm:h-64 lg:h-64">
                            <span className="absolute inset-0 border-2 border-dashed border-white"></span>

                            <div className="relative flex justify-center h-full transform items-end border-2 border-base-100 bg-base-100 transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
                                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                                    <img
                                        src={petroChemicalCatalyst}
                                        alt="Petrochemical Catalyst"
                                        className="w-full h-48 sm:h-48 lg:h-48 border-2 border-white object-cover object-center rounded-lg shadow-md"
                                    />
                                </div>

                                <div className="grid grid-rows-6 absolute h-64 sm:h-64 lg:h-64 p-4 opacity-0 transition-opacity bg-base-300 border-2 border-white group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                                    <h3 className=" row-span-1 text-xl font-medium sm:text-2xl">
                                        Petrochemical Catalyst
                                    </h3>

                                    <p className="mt-2  row-span-5 text-sm sm:text-base  overflow-auto">
                                        Supreme Carbon is a reputable player in the field of
                                        Activated Carbon for petrochemical catalyst production. As a
                                        spearheading manufacturer of activated carbon for catalyst
                                        support, we are well-versed with the legislative constraints
                                        and ever-increasing market competition. By deploying modern
                                        technologies, we have constantly rendered innovative
                                        catalytic solutions to our prestigious clientele across the
                                        world.{" "}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-span-12 lg:col-span-4 m-4">
                        <a className="group relative block h-64 sm:h-64 lg:h-64">
                            <span className="absolute inset-0 border-2 border-dashed border-white"></span>

                            <div className="relative flex justify-center h-full transform items-end border-2 border-base-100 bg-base-100 transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
                                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                                    <img
                                        src={cosmetics}
                                        alt="Cosmetics"
                                        className="w-full h-48 sm:h-48 lg:h-48 border-2 border-white object-cover object-center rounded-lg shadow-md"
                                    />
                                </div>

                                <div className="grid grid-rows-6 absolute h-64 sm:h-64 lg:h-64 p-4 opacity-0 transition-opacity bg-base-300 border-2 border-white group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                                    <h3 className=" row-span-1 text-xl font-medium sm:text-2xl">
                                        Cosmetics
                                    </h3>

                                    <p className="mt-2  row-span-5 text-sm sm:text-base  overflow-auto">
                                        Activated carbon powder made from coconut shells is being
                                        used by many to treat skin infections. Activated charcoal
                                        may have an antibacterial effect by absorbing harmful
                                        microbes from wounds. Activated charcoal–when used in a face
                                        mask–binds to dirt and helps pull it out of your pores,
                                        making them less visible.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default FieldOfApplication;
