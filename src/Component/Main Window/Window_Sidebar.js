import { Link } from "react-router-dom";

function Folders({fors, className, image, folder_name}) {
    return (
        <label htmlFor={`${fors}`} className={`${className}`}>
            <img src={image} draggable="false" alt="" />{folder_name}
        </label>
    );
}

export default function WindowSidebar() {
    const FolderData = [
        { fors: 'button_a', className: 'folder_a', image: 'images/icons/virtual-meeting.png', folder_name: 'About' },
        { fors: 'button_b', className: 'folder_b', image: 'images/icons/elearning.png', folder_name: 'Skill' },
        { fors: 'button_e', className: 'folder_e', image: 'images/icons/growth.png', folder_name: 'Experience' },
        { fors: 'button_c', className: 'folder_c', image: 'images/icons/project.png', folder_name: 'Projects' },
        { fors: 'button_d', className: 'folder_d', image: 'images/icons/folder.png', folder_name: 'Folder 4' },
    ];
    
    return (
        <div className="sidebar">
            <div className="sidebox">
                <div className="folders">
                    <div className="fold flex justify center" href="/" style={{ marginBottom: '3px' }}>
                        <img src="images/icons/workspace.png" draggable="false" alt="" />
                        <div className="fold-info flex center">
                            <div className="fold-name">nabilanatasya.exe</div>
                        </div>
                    </div>
                    <div className="folds">
                        {FolderData.map((folder) => (
                            <Folders key={folder.className} {...folder} />
                        ))}

                        {/* ABOUT FOLDER */}
                        {/* <label htmlFor="button_a" className="folder_a">
                            <img src="images/icon/folder-icon.png" draggable="false" alt="" />Folder 1
                        </label> */}
                        
                        {/* LINK */}
                        <Link to="/page">
                            <img src="images/icons/hyperlink.png" draggable="false" alt="" />Page Link
                        </Link>

                        <label htmlFor='button_f' className='folder_f'>
                            <img src="images/icons/conversation.png" draggable="false" alt="" />Folder 5 
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}