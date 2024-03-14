//
// import React,{useEffect} from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
//
// function Export() {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//
//     return (
//         <section id="export" className="text-primary bg-base-100">
//             <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//                 <div className="mx-auto max-w-lg text-center">
//                     <h2 className="text-3xl font-bold lg:text-5xl" data-aos="zoom-in-up" data-aos-offset="300"
//                         data-aos-easing="ease-in-sine">Export</h2>
//                 </div>
//
//             </div>
//         </section>
//     )
// }
//
// export default Export;

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Export.css"
import Datamap from 'datamaps'; // Import Datamap library
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Export() {
    useEffect(() => {
        AOS.init();

        // Initialize and configure the map
        const dataSet = {
            IND: {
                active: {
                    value: '1,408',
                    percent: '19.2',
                    isGrown: true
                },
                new: {
                    value: '392',
                    percent: '11.1',
                    isGrown: true
                },
                fillKey: 'MAJOR',
                short: 'in'
            }, USA: {
                active: {
                    value: '392',
                    percent: '0.9',
                    isGrown: true
                },
                new: {
                    value: '1,408',
                    percent: '2.2',
                    isGrown: true
                },
                fillKey: 'MAJOR',
                short: 'us',
                customName: 'United States'
            },
            LKA: {
                active: {
                    value: '500',
                    percent: '0.1',
                    isGrown: false
                },
                new: {
                    value: '20',
                    percent: '0.5',
                    isGrown: false
                },
                fillKey: 'MAJOR',
                short: 'lk',
                customName: 'Sri Lanka'
            },
            BEL: {
                active: {
                    value: '800',
                    percent: '0.2',
                    isGrown: false
                },
                new: {
                    value: '50',
                    percent: '0.3',
                    isGrown: true
                },
                fillKey: 'MAJOR',
                short: 'be',
                customName: 'Belgium'
            },
            DEU: {
                active: {
                    value: '8,408',
                    percent: '5.4',
                    isGrown: false
                },
                new: {
                    value: '1001',
                    percent: '5.1',
                    isGrown: true
                },
                fillKey: 'MAJOR',
                short: 'de',
                customName: 'Germany'
            },
            CHN: {
                active: {
                    value: '10,101',
                    percent: '13.7',
                    isGrown: true
                },
                new: {
                    value: '509',
                    percent: '0.1',
                    isGrown: false
                },
                fillKey: 'MAJOR',
                short: 'cn',
                customName: 'China'
            },
            TUR: {
                active: {
                    value: '1200',
                    percent: '2.1',
                    isGrown: true
                },
                new: {
                    value: '70',
                    percent: '1.5',
                    isGrown: true
                },
                fillKey: 'MAJOR',
                short: 'tr',
                customName: 'Turkey'
            },
            KOR: {
                active: {
                    value: '700',
                    percent: '1.2',
                    isGrown: false
                },
                new: {
                    value: '30',
                    percent: '0.8',
                    isGrown: true
                },
                fillKey: 'MAJOR',
                short: 'kr',
                customName: 'South Korea'
            },
            CAN: {
                active: {
                    value: '1500',
                    percent: '2.5',
                    isGrown: true
                },
                new: {
                    value: '100',
                    percent: '2.3',
                    isGrown: true
                },
                fillKey: 'MAJOR',
                short: 'ca',
                customName: 'Canada'
            }
        };

        const dataMap = new Datamap({
            element: document.querySelector('#hs-users-datamap'),
            projection: 'mercator',
            responsive: true,
            fills: {
                defaultFill: '#ffffff',
                MAJOR: '#FAB561'
            },
            data: dataSet,
            geographyConfig: {
                borderColor: 'rgba(0, 0, 0, .09)',
                highlightFillColor: '#494949',
                highlightBorderColor: '#FAB561',
                popupOnHover: true, // Display popup on hover
                popupTemplate: function (geo, data) {
                    return `<div class="bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] w-[150px] p-3">
                        <div class=" mb-1">
                            <div class="me-2">
                                <div class="size-4 rounded-full bg-no-repeat bg-center bg-cover" style="background-image:url(https://www.countryflags.io/${geo.id}/flat/64.png)"></div>
                            </div>
                            <span class="text-sm text-black font-medium">${data.customName || geo.properties.name}</span>
                        </div>
                    </div>`;
                }
            }
        });

        // Resize map on window resize
        window.addEventListener('resize', function () {
            dataMap.resize();
        });
    }, [])

    return (
        <section id="export" className="text-primary bg-base-100">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl" data-aos="zoom-in-up" data-aos-offset="300"
                        data-aos-easing="ease-in-sine">Export</h2>
                </div>
                <br/>
                <br/>
                <div className="grid grid-cols-12">
                    <div className="col-span-4 self-center">
                        <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
                            We Are Reachable Anywhere in the World
                        </h3>
                        <p className="text-primary mt-3 max-w-xl">
                            A team of highly skilled specialists oversees all of our international deliveries. Our network of worldwide agents and distribution are managed by a dedicated division. We also provide timely shipping of our items to other countries.
                        </p>
                        <br/>
                        <div className="grid grid-cols-12">
                            <span className="fi fi-in col-span-2 m-2"></span>
                            <span className="fi fi-us col-span-2 m-2"></span>
                            <span className="fi fi-cn col-span-2 m-2"></span>
                            <span className="fi fi-ca col-span-2 m-2"></span>
                            <span className="fi fi-kr col-span-2 m-2"></span>
                            <span className="fi fi-de col-span-2 m-2"></span>
                            <span className="fi fi-tr col-span-2 m-2"></span>
                            <span className="fi fi-lk col-span-2 m-2"></span>
                            <span className="fi fi-be col-span-2 m-2"></span>

                        </div>

                    </div>
                    <div className="col-span-8" id="hs-users-datamap" style={{ width: '100%', height: '500px' }}></div> {/* Map container */}
                </div>
            </div>
        </section>
    )
}

export default Export;