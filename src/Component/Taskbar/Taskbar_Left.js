// import { useState } from "react";

function WindowButton({ title, image, className, active, handleClick}) {
    const activeClass = active ? ' act' : ''; // Add 'act' className if active is true

    // console.log(active)
    
    return (
        <button className={`btn ${className}${activeClass}`} onClick={handleClick}>
            <div className="linfo flex center">
                <div className="ltitle">
                    <img src={image} draggable={false} alt={title} />
                    {title}
                </div>
            </div>
        </button>
    );
}

export const WindowButtonData = [
    { title: 'Start', image: 'images/icon/computer-icon.png', className: 'start' },
    { title: 'Nuwa', image: 'images/cat.png', className: 'posts act' },
    { title: 'Search', image: 'images/icon/search-icon.png', className: 'sea' },
    { title: 'Image', image: 'images/icon/search-icon.png', className: 'imej' },
    { title: 'Update', image: 'images/icon/search-icon.png', className: 'up' },
];

function MobileButton({ button, className, title, image }) {
    return (
        <label htmlFor={button} className={className}>
            <div className="linfo flex center">
                <div className="ltitle">
                    <img src={image} draggable="false" alt="" />{title}
                </div>
            </div>
        </label>
    );
}

export const MobileButtonData = [
    { button: 'button_a', className: 'btn_a', title: 'Folder 1', image:'images/icon/folder-icon.png' },
    { button: 'button_b', className: 'btn_b', title: 'Folder 2', image:'images/icon/folder-icon.png' },
    { button: 'button_c', className: 'btn_c', title: 'Folder 3', image:'images/icon/folder-icon.png' },
]

export default function Taskbar_Left({ searchVisible, setSearchVisible, imageVisible, setImageVisible, updateVisible, setUpdateVisible }) {
    // const [searchVisible, setSearchVisibleLocal] = useState(true);
    // const [imageVisible, setImageVisibleLocal] = useState(true);

    const toggleSearch = () => {
        // setSearchVisibleLocal(!searchVisible);
        setSearchVisible(!searchVisible);
    };

    const toggleImage = () => {
        // setImageVisibleLocal(!imageVisible);
        setImageVisible(!imageVisible);
    };

    const toggleUpdate = () => {
        // setImageVisibleLocal(!imageVisible);
        setUpdateVisible(!updateVisible);
    };

    return (
        <div className="tasks flex">
            {WindowButtonData.map((button) => (
                <WindowButton key={button.title}
                active={(button.className === 'sea' && searchVisible) || (button.className === 'imej' && imageVisible) || (button.className === 'up' && updateVisible)}
                {...button}
                handleClick={button.className === 'sea' ? toggleSearch : button.className === 'imej' ? toggleImage : button.className === 'up' ? toggleUpdate : null}
                />
            ))}

            {/* LATER ADD BUTTON FOR MOBILE HERE */}
            {MobileButtonData.map((button) => (
                <MobileButton key={button.title}
                // active={(button.className === 'sea' && searchVisible) || (button.className === 'imej' && imageVisible) || (button.className === 'up' && updateVisible)}
                {...button}
                // handleClick={button.className === 'sea' ? toggleSearch : button.className === 'imej' ? toggleImage : button.className === 'up' ? toggleUpdate : null}
                />
            ))}
        </div>
    );
}