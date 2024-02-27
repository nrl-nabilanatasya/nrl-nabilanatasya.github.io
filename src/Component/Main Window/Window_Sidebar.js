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
        { fors: 'button_a', className: 'folder_a', image: 'images/icon/user-icon.png', folder_name: 'Folder 1' },
        { fors: 'button_b', className: 'folder_b', image: 'https://win98icons.alexmeub.com/icons/png/wia_img_check-1.png', folder_name: 'Folder 2' },
        { fors: 'button_c', className: 'folder_c', image: 'https://64.media.tumblr.com/7f4b9ef020ec48b13553a78a078016d6/97f209bfb9e8bd92-81/s2048x3072/ada77b7d682db085dcbe6c27749bb85fe4971101.png', folder_name: 'Folder 3' },
        { fors: 'button_d', className: 'folder_d', image: 'images/icon/folder-icon.png', folder_name: 'Folder 4' },
        { fors: 'button_e', className: 'folder_e', image: 'images/icon/question-icon.png', folder_name: 'Folder 5' }
    ];
    
    return (
        <div className="sidebar">
            <div className="sidebox">
                <div className="folders">
                    <a className="fold flex justify center" href="/" style={{ marginBottom: '3px' }}>
                        <img src="images/icon/computer-icon.png" draggable="false" alt="" />
                        <div className="fold-info flex center">
                            <div className="fold-name">test.exe</div>
                        </div>
                    </a>
                    <div className="folds">
                        {FolderData.map((folder) => (
                            <Folders key={folder.className} {...folder} />
                        ))}

                        {/* ABOUT FOLDER */}
                        {/* <label htmlFor="button_a" className="folder_a">
                            <img src="images/icon/folder-icon.png" draggable="false" alt="" />Folder 1
                        </label>

                        <label htmlFor="button_b" className="folder_b">
                            <img src="images/icon/folder-icon.png" draggable="false" alt="" />Folder 2
                        </label>

                        <label htmlFor="button_c" className="folder_c">
                            <img src="images/icon/folder-icon.png" draggable="false" alt="" />Folder 3
                        </label> */}
                        
                        {/* LINKS */}
                        <Link to="/page">
                            <img src="images/icon/folder2-icon.png" draggable="false" alt="" />Page
                        </Link>
                        <a href="/" target="_blank">
                            <img src="images/icon/folder2-icon.png" draggable="false" alt="" />Link
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}