import Draggable from 'react-draggable';

import Window_Header from './Window_Header';
import Window_AddressBar from './Window_AddressBar';
import Window_Mobile_Header from './Window_Mobile_Header';
import Window_Sidebar from './Window_Sidebar';

import Folder_About from '../Folder/Folder_About';
import Folder_Skill from '../Folder/Folder_Skill';
import Folder_Project from '../Folder/Folder_Project';
import Folder_Post from '../Folder/Folder_Post';
import Folder4 from '../Folder/Folder4';
import Folder_Submission from '../Folder/Folder_Submission';

export default function Window_Main({ isVisible, setMainVisible }) {

    return ( 
        <div className={`package flex justify ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="packhead">
                <Window_Header title="Main Window" image="images/icons/workspace.png" mainVisible={isVisible} setMainVisible={setMainVisible} />
                <Window_AddressBar />
            </div>
            
            {/* LATER ADD HEADER FOR MOBILE */}
            <Window_Mobile_Header />

            <Window_Sidebar />

            <div className="wrapper">
                <div className="tabs">
                    <Folder_About />
                    <Folder_Skill />
                    <Folder_Project />
                    <Folder_Post />
                    <Folder4 />
                    <Folder_Submission />
                </div>
            </div>
        </div>
    );
}