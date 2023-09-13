import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ActivatedCarbon from "./components/ActivatedCarbon/ActivatedCarbon";
import FieldOfApplication from "./components/FieldOfApplication/FieldOfApplication";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";


function App() {
    return (
        <div className=" bg-neutral  h-screen grid grid-cols-12">
            <div className="h-full  col-span-12">
                <header className="sticky absolute top-0 left-0 right-0 col-span-12 z-30">
                    <Navbar/>
                </header>
            </div>
            <ActivatedCarbon/>
            <FieldOfApplication/>
            <AboutUs/>
            <Contact/>
        </div>

    );
}

export default App;
