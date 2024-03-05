import Draggable from 'react-draggable';

import Window_Header from './Window_Header';
import Window_AddressBar from './Window_AddressBar';
import Window_Sidebar from './Window_Sidebar';

import Folder_About from '../Folder/Folder_About';
import Folder_Skill from '../Folder/Folder_Skill';
import Folder_Project from '../Folder/Folder_Project';
import Folder4 from '../Folder/Folder4';
import Folder5 from '../Folder/Folder5';

export default function Window_Main({ isVisible, setMainVisible }) {
    return ( 
        <Draggable>
        <div className={`package flex justify ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="packhead">
                <Window_Header title="Main Window" image="images/icons/workspace.png" mainVisible={isVisible} setMainVisible={setMainVisible} />
                <Window_AddressBar />
            </div>
            
            {/* LATER ADD HEADER FOR MOBILE */}

            <Window_Sidebar />

            <div className="wrapper">
                <div className="tabs">
                    <Folder_About />
                    <Folder_Skill />
                    <Folder_Project />
                    <Folder4 />
                    <Folder5 />
                </div>
            </div>
        </div>
        </Draggable>
    );
}