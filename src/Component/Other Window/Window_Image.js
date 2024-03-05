import Draggable from 'react-draggable';

import Window_Header from '../Main Window/Window_Header';
import Window_Content from '../Main Window/Window_Content';

export default function Window_Image({ isVisible, setImageVisible }) {
    return (
        <Draggable>
            <div className={`image-wrap${isVisible ? ' visible' : ' hidden'}`}>
                <article>
                    <Window_Header title="Image" image="images/icons/image.png" imageVisible={isVisible} setImageVisible={setImageVisible} />
                    <Window_Content content={content} />
                </article>
            </div>
        </Draggable>
    );
}

// this folder content value
const content = (
    <>
        <img src="images/nurul/nurul.jpg" alt='' />
    </>
);