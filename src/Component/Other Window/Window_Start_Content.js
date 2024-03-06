export default function Window_Start_Content({ content }) {
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
                    {content}
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