import Draggable from 'react-draggable';

import Window_Header from '../Main Window/Window_Header';
import Window_Content from '../Main Window/Window_Content';

export default function Window_Update({ isVisible, setUpdateVisible }) {
    return (
        <Draggable>
            <div className={`up-wrap${isVisible ? ' visible' : ' hidden'}`}>
                <article>
                    <Window_Header title="Memo" image="images/icons/paper.png" updateVisible={isVisible} setUpdateVisible={setUpdateVisible} />
                    <Window_Content content={content}/>
                </article>
            </div>
        </Draggable>
    );
}

// this folder content value
const content = (
    <>
        Site under construction.
    </>
);