// import logo from './logo.svg';
// import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useState, useRef, useEffect } from 'react';

import { SetTheme } from "../src/Helper";

import './Css/Root.css';
import './Css/Main.css';
import './Css/Mobile.css';
import './Css/Test.css';
import './Css/Page.css';

import Taskbar_Main from './Component/Taskbar/Taskbar_Main';
import Window_Main from './Component/Main Window/Window_Main';
import Window_Search from './Component/Other Window/Window_Search';
import Window_Image from './Component/Other Window/Window_Image';
import Window_Update from './Component/Other Window/Window_Update';

export default function App() {
    SetTheme();

    const [selectedButton, setSelectedButton] = useState('button_a'); // Initial selection
    const buttonARef = useRef(null);

    useEffect(() => {
        // Check button_a initially only if no other button is selected
        if (selectedButton === 'button_a') {
            buttonARef.current.checked = true;
        }
    }, [selectedButton, buttonARef]);
    const handleButtonChange = (event) => {
        setSelectedButton(event.target.id);
    };
    
    // show or hide window
    const [searchVisible, setSearchVisible] = useState(false);
    const [imageVisible, setImageVisible] = useState(false);
    const [updateVisible, setUpdateVisible] = useState(false);

    return (
            <div className="container">
                {/* later add radio button here */}
                <input type="radio" name="tabs-control" id="button_a" ref={buttonARef} onChange={handleButtonChange} hidden />
                <input type="radio" name="tabs-control" id="button_b" onChange={handleButtonChange} hidden />
                <input type="radio" name="tabs-control" id="button_c" onChange={handleButtonChange} hidden />
                <input type="radio" name="tabs-control" id="button_d" onChange={handleButtonChange} hidden />
                <input type="radio" name="tabs-control" id="button_e" onChange={handleButtonChange} hidden />
                
                {/* TASKBAR */}
                <Taskbar_Main searchVisible={searchVisible} setSearchVisible={setSearchVisible} imageVisible={imageVisible} setImageVisible={setImageVisible} updateVisible={updateVisible} setUpdateVisible={setUpdateVisible} />
                
                {/* MAIN WINDOW */}
                <Window_Main />
                
                {/* SEARCH WINDOW */}
                <Window_Search isVisible={searchVisible} setSearchVisible={setSearchVisible} />
                
                {/* Image Window */}
                <Window_Image isVisible={imageVisible} setImageVisible={setImageVisible} />
                
                {/* Update Window */}
                <Window_Update isVisible={updateVisible} setUpdateVisible={setUpdateVisible} />
                
                {/* Vercel Speed Insight */}
                <SpeedInsights />
            </div>
    );
}
