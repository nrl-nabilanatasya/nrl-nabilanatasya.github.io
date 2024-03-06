export default function Window_Start_Content() {
    return (
        <>
            <div className="cover">
                <img src="https://assets.tumblr.com/images/x.gif?v=1" draggable="false" />
            </div>
            <div className="padding">
                <div className="por flex center square ">
                    <img src="images/icons/power-button.png" draggable="false" />
                </div>
                <div className="desc">
                    Some description here and <a href="/" target="_blank"><b> links</b></a>.
                    <p><b>Bold</b>. <i>Italics</i>. <u>Underline</u>.</p> 
                </div>
            </div>
            <div className="pref">
                <a href="LINK URL">Discord</a>
                <a href="LINK URL">Twitch</a>
                <a href="LINK URL">Steam</a>
            </div>
        </>
    );
}