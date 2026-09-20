import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import fastApiImg from './images/fast-api.png';
import sqlImg from './images/sql.png'
import playwrightImg from './images/playwright.png'
import typescriptImg from './images/typescript.png';
import tailwindImg from './images/tailwind.png'
import dockerImg from './images/docker.png'

function LandingPage() {
    const navigate = useNavigate();

    const [walkthroughClicked, setWalkthroughClicked] = useState<boolean>(false);
    const [architectureClicked, setArchitectureClicked] = useState<boolean>(false);

    const clickWalkthrough = (): void => {
        setWalkthroughClicked(!walkthroughClicked)
        navigate('/app');
    }

    const clickArchitecture = (): void => {
        setArchitectureClicked(!architectureClicked)
    }

    return (
        <div className="flex flex-col items-center gap-10">

            {/* TITLE AND DESCRIPTION */}
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center w-min mt-2">
                    <h1 className="font-bold text-[80px] whitespace-nowrap">
                        FULL STACK BUILD
                    </h1>
                    <p className="font-light text-[20px] text-center mt-2">
                        A simple full-stack project that brings together{" "}
                        <span className="text-[#05988A]">FastAPI</span>,{" "}
                        <span className="text-[#DB7533]">SQL</span>,{" "}
                        <span className="text-[#C04B41]">Playwright</span>,{" "}
                        <span className="text-[#017ACC]">TypeScript</span>,{" "}
                        <span className="text-[#2298BD]">Tailwind CSS</span>, and{" "}
                        <span className="text-[#2496ED]">Docker</span>{" "}
                        to create a cohesive end-to-end application.
                    </p>
                </div>
            </div>

            {/* IMAGES */}
            <div className="w-[50%] flex flex-col gap-10">
                <div className="flex justify-center items-center gap-12">
                    <img src={fastApiImg} alt="FastAPI" className="h-10 w-auto object-contain" />
                    <img src={sqlImg} alt="SQL" className="h-17 w-auto object-contain" />
                    <img src={playwrightImg} alt="Playwright" className="h-12 w-auto object-contain" />
                </div>
                <div className="flex justify-center items-center gap-12">
                    <img src={typescriptImg} alt="Typescript" className="h-12 w-auto object-contain" />
                    <img src={tailwindImg} alt="Tailwind" className="h-10 w-auto object-contain" />
                    <img src={dockerImg} alt="Docker" className="h-12 w-auto object-contain" />
                </div>
                
            </div>

            {/* BUTTONS */}
            <div className='flex gap-x-7 my-17'>
                <button 
                    className='w-[220px] p-5 border font-semibold text-white rounded-4xl bg-[#000A4B] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#000A4B] hover:bg-white hover:text-black'
                    onClick={clickWalkthrough}
                >
                    THE WALKTHROUGH
                </button>
                <button 
                    className='w-[220px] p-5 border font-semibold text-white rounded-4xl bg-[#3B0059] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3B0059] hover:bg-white hover:text-black'
                    onClick={clickArchitecture}
                >
                    THE ARCHITECTURE
                </button>
            </div>
        </div>
    );
}

export default LandingPage