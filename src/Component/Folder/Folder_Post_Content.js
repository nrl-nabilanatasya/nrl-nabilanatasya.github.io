export default function Folder_Post_Content({ content }) {
    return (
        <>
        <div className="padding">
            <div className="p-wrap none">
                <a><i className="ti ti-clock"></i>February 13, 2024</a>
                <a><i className="ti ti-file-text"></i>292,854 notes</a>
            </div>
            <div className="inner-padding">
                <p>Hello world!</p>
            </div>
        </div>
        <div className="t-wrap flex center ">
            <div className="tags">
                <a>#first</a>
                <a>#post</a>
            </div>
        </div>
        <div className="post-footer">
            <div className="post-foot flex justify center">
                <div className="post-info1 flex center">
                    <div className="pinfo flex center">
                        <div className="pnotes">
                            <a>1 day ago</a>
                        </div>
                    </div>
                </div>
                <div className="time-info flex center">
                    <div className="pinfo flex center">
                        <div className="pnotes">
                            <a>9:30 AM</a>
                        </div>
                    </div>
                </div>
                <div className="post-info2 flex center">
                    <div className="pinfo flex center">
                        <div className="pnotes">
                            <a><span className="notecount">292854 MB</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}