import Draggable from 'react-draggable';

import Window_Header from '../Main Window/Window_Header';
import Window_Content from '../Main Window/Window_Content';

export default function Window_Start({ isVisible, setStartVisible }) {
    return (
        <Draggable>
            <div className={`start-wrap${isVisible ? ' visible' : ' hidden'}`}>
            {/* <div className={`start-wrap visible`}> */}
                <article>
                    <Window_Header title="Start" image="images/icons/power-button.png" startVisible={isVisible} setStartVisible={setStartVisible} />
                    {/* <Window_Content content={content} /> */}
                    <div className="cover">
                        <img src="https://assets.tumblr.com/images/x.gif?v=1" draggable="false" />
                    </div>
                    <div className="padding">
                        <div className="por flex center square ">
                            <img src="images/icons/power-button.png" draggable="false" />
                        </div>
                        <div className="desc">
                            Some description here and 
                            <a href="/" target="_blank">
                                <b> links</b>
                            </a>.
                            <p><b>Bold</b>. <i>Italics</i>. <u>Underline</u>.</p> 
                        </div>
                    </div>
                    <div className="pref">
                        <a href="LINK URL">Discord</a>
                        <a href="LINK URL">Twitch</a>
                        <a href="LINK URL">Steam</a>
                    </div>
                </article>
            </div>
        </Draggable>
    );
}

// this folder content value
// const content = (
//     <>
//         Start Content Here.
//     </>
// );