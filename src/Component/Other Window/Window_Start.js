import Draggable from 'react-draggable';

import Window_Header from '../Main Window/Window_Header';
import Window_Start_Content from './Window_Start_Content';

export default function Window_Start({ isVisible, setStartVisible }) {
    return (
        <Draggable>
            <div className={`start-wrap${isVisible ? ' visible' : ' hidden'}`}>
                <article>
                    <Window_Header title="Start" image="images/icons/power-button.png" startVisible={isVisible} setStartVisible={setStartVisible} />
                    <Window_Start_Content content={content} />
                </article>
            </div>
        </Draggable>
    );
}

// this folder content value
const content = (
    <>
        Best viewed on a larger screen.
    </>
);