import Draggable from 'react-draggable';

import Window_Header from '../Main Window/Window_Header';
import Window_Content from '../Main Window/Window_Content';

export default function Window_Popup() {
    return (
        <Draggable>
            <div className={`popup-wrap visible`}>
                <article>
                    <Window_Header title="Popup" image="images/icons/folder.png" />
                    <Window_Content content={content} />
                </article>
            </div>
        </Draggable>
    );
}

// this folder content value
const content = (
    <>
        This is popup.
    </>
);