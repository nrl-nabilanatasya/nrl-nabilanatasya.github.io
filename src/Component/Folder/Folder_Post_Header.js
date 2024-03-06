export default function Folder_Post_Header({ title, image, description }) {
    return (
        <>
        <div className="post-header flex justify center">
            <div className="winhead flex justify">
                <img src={image} draggable="false" alt="" />
                <div className="w-title">
                    <span className="wti">{title}</span><span className="ww"> — </span>
                    <span className="wname">{description}</span>
                </div>
            </div>
            <div className="post-btns">
                <i className="ti ti-minus min"></i>
                <i className="ti ti-rectangle win"></i>
                <i className="ti ti-x ex"></i>
            </div>
        </div>
        <div className="bar flex center">
            <a className="btn-p">File</a>
            <a className="btn-p">Edit</a>
            <a>View</a>
        </div>
        </>
    );
}