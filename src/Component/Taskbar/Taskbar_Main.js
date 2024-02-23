import Taskbar_Left from './Taskbar_Left';
import Taskbar_Right from './Taskbar_Right';

export default function Taskbar_Main({ searchVisible, setSearchVisible, imageVisible, setImageVisible, updateVisible, setUpdateVisible }) {
    return ( 
        <div className="taskbar flex justify">
            <Taskbar_Left searchVisible={searchVisible} setSearchVisible={setSearchVisible} imageVisible={imageVisible} setImageVisible={setImageVisible} updateVisible={updateVisible} setUpdateVisible={setUpdateVisible} />

            <Taskbar_Right />
        </div>
    );
}