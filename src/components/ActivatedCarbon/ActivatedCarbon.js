
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import flowProcess from "./flow-process.jpg"
import steamActivation from "./Steam activated carbon.png"
import airGasTreatment from "../FieldOfApplication/airAndGasTreatment.jpg";

function ActivatedCarbon() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="activatedcarbon" className="text-primary bg-base-100">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl" data-aos="zoom-in-up" data-aos-offset="300"
                        data-aos-easing="ease-in-sine">Activated Carbon</h2>
                </div>
                <div className="mt-8 text-center" data-aos="zoom-in-down">
                    Activated  carbon can be made from a wide extend of source materials such as coal, coconut shells and wood. The material is frequently charred to achieve carbon, followed by chemical activation or activation by high temperature steam. This produces an activated carbon with an extensive network of pores and an extremely high surface area. The pores provide sites for the adsorption of chemical contaminants in gases or liquids.
                    <br/>
                    Material such as wood, coconut shells or coal that is activated by steam is first carbonised to create charcoal. The carbonisation is performed at a temperature at approximately 550 degC in an oxygen free atmosphere. This process drives off all of the volatile organic compounds and leaves behind the carbon and the minerals (ash).
                </div>

                <br/>

                <div className="divider"></div>

                <br/>


                <div className="max-w-screen-xl items-center mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
                    <div className="sm:hidden lg:block lg:max-w-xl" data-aos="fade-right">
                        <img src={steamActivation} alt="Steam Activated Carbon" className="rounded-lg" />
                    </div>
                    <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block" data-aos="zoom-out-left">
                        <div className="max-w-2xl">
                            <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                                Chemical Activated Carbon
                            </h3>
                            <p className="text-secondary mt-3 max-w-xl" >
                                Activation of the charcoal can be carried out by the use of chemicals other than steam. Examples of activation atmospheres are nitrogen (N2) and carbon dioxide (CO2) with or without involving strong acids (eg. hydrochloric acid) or bases (potassium hydroxide). Different chemicals create different activated carbon characteristics.
                            </p>
                        </div>

                        <div className="divider"></div>

                        <div className="max-w-2xl" data-aos="zoom-out-left">
                            <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                                Steam Activated Carbon
                            </h3>
                            <p className="text-secondary mt-3 max-w-xl">The steam activation of the charcoal is then carried out an even higher temperature (up to 1000 degC) in a steam atmosphere. The activation reaction between charcoal and steam can be described as follows:
                                <br/>
                                C + H2O => CO + H2
                                <br/>
                                C + CO2 => 2 CO
                                <br/>
                                The activation process can be controlled to produce specific product characteristics. Steam concentrations, temperature, activation time and CO2 concentrations influence pore development, which in turn affect pore size distributions and the level of activity.
                            </p>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="divider"></div>

                <br/>

                <div className="card grid grid-cols-12 lg:card-side bg-base-100 shadow-xl" data-aos="flip-up">
                    <figure className="col-span-12 lg:col-span-4 p-4"><img className="rounded-xl" src={flowProcess} alt="Album"/></figure>
                    <div className="card-body col-span-12 lg:col-span-8">
                        <h3 className="card-title self-center text-primary text-3xl font-semibold sm:text-4xl">
                            Forms of activated Carbon
                        </h3>
                        <br/>
                        <h2 className="font-bold"> Granular Activated Carbon (GAC) </h2>
                        <p>The activated carbon is milled and sieved to achieve particles in the range of 0.2 to 5 mm. Typically the drinking water industry uses an 8 x 30 mesh (effective size of 0.80-1.0 mm), or a 12 x 40 mesh (effective size of 0.5 - 0.7 mm). GAC is used in both liquid and gas phase applications.</p>
                        <br/>
                        <h2 className="font-bold"> Powdered Activated Carbon (PAC) </h2>
                        <p>Powdered activated carbon is also milled and sieved and has a smaller particle size than the GAC. The PAC particles are mainly less than 0.18 mm (US Mesh 80) usually with a median diameter of 15 to 30 microns. PACs are generally used in liquid phase applications and for flue gas treatment.</p>
                        <br/>
                        <h2 className="font-bold"> Pelletised/Extruded Activated Carbon  </h2>
                        <p>The activated carbon has been extruded into cylindrical shaped pellets with diameters ranging from 0.8 to 5 mm. These are mainly used for gas phase applications because of their low pressure drop, high mechanical strength and low dust content.</p>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default ActivatedCarbon;