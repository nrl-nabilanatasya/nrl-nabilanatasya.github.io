import Draggable from 'react-draggable';

import Window_Header from '../Main Window/Window_Header';
import Window_Content from '../Main Window/Window_Content';

export default function Window_Search({ isVisible, setSearchVisible }) {
    return (
        <Draggable>
            <div className={`search-wrap${isVisible ? ' visible' : ' hidden'}`}>
                <article>
                    <Window_Header title="Search" image="images/icons/searching.png" searchVisible={isVisible} setSearchVisible={setSearchVisible} />
                    <Window_Content />
                </article>
            </div>
        </Draggable>
    );
}