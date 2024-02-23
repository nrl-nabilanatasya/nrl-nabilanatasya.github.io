import Window_Header from './Window_Header';
import Window_AddressBar from './Window_AddressBar';
import Window_Sidebar from './Window_Sidebar';

import Folder1 from '../Folder/Folder1';
import Folder2 from '../Folder/Folder2';
import Folder3 from '../Folder/Folder3';
import Folder4 from '../Folder/Folder4';

export default function Window_Main() {
    return ( 
        <div className="package flex justify">
            <div className="packhead">
                <Window_Header title="Window_Main" image="images/cat.png" />
                <Window_AddressBar />
            </div>
            
            {/* LATER ADD HEADER FOR MOBILE */}

            <Window_Sidebar />

            <div className="wrapper">
                <div className="tabs">
                    <Folder1 />
                    <Folder2 />
                    <Folder3 />
                    <Folder4 />
                </div>
            </div>
        </div>
    );
}