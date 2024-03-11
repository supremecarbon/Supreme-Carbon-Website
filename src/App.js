import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ActivatedCarbon from "./components/ActivatedCarbon/ActivatedCarbon";
import FieldOfApplication from "./components/FieldOfApplication/FieldOfApplication";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Cover from "./components/Cover/Cover";
import {useEffect, useState, useRef} from "react";


function App() {
    const [showNavbar, setShowNavbar] = useState(false);
    const coverRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const coverHeight = coverRef.current.offsetHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= coverHeight) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <div className=" bg-neutral  h-screen grid grid-cols-12">
                <div className="h-full  col-span-12">

                    <Cover ref={coverRef} />
                    <header style={{ opacity: showNavbar ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }} className="navbar sticky absolute p-0 top-0 left-0 right-0 col-span-12 z-30">
                        <Navbar />
                    </header>
                    <Home />
                    <ActivatedCarbon />
                    <FieldOfApplication />
                    <AboutUs />
                    <Contact />
                </div>

            </div>
    );
}

export default App;
