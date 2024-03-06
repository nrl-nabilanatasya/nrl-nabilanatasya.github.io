import { SetMobileButton } from "../../Helper";

function WindowButton({ title, image, className, active, handleClick}) {
    const activeClass = active ? ' act' : ''; // Add 'act' className if active is true
    
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
    { title: 'Start', image: 'images/icons/power-button.png', className: 'start' },
    { title: 'Main Window', image: 'images/icons/workspace.png', className: 'posts' },
    { title: 'Search', image: 'images/icons/searching.png', className: 'sea' },
    { title: 'Image', image: 'images/icons/image.png', className: 'imej' },
    { title: 'Memo', image: 'images/icons/paper.png', className: 'up' },
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
    { button: 'button_a', className: 'btn_a', title: 'Main Window', image:'images/icons/workspace.png' },
    { button: 'button_b', className: 'btn_b', title: 'Skill', image:'images/icons/elearning.png' },
    { button: 'button_c', className: 'btn_c', title: 'Experience', image:'images/icons/growth.png' },
    { button: 'button_d', className: 'btn_d', title: 'Projects', image:'images/icons/project.png' },
    { button: 'button_e', className: 'btn_e', title: 'Post', image:'images/icons/blog.png' },
    { button: 'button_f', className: 'btn_f', title: 'Folder 4', image:'images/icons/folder.png' },
    { button: 'button_g', className: 'btn_g', title: 'Folder 5', image:'images/icons/folder.png' },
]

export default function Taskbar_Left({ startVisible, setStartVisible, mainVisible, setMainVisible, searchVisible, setSearchVisible, imageVisible, setImageVisible, updateVisible, setUpdateVisible }) {
    const toggleStart = () => {
        setStartVisible(!startVisible);
    };

    const toggleMain = () => {
        setMainVisible(!mainVisible);
    };
    
    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    const toggleImage = () => {
        setImageVisible(!imageVisible);
    };

    const toggleUpdate = () => {
        setUpdateVisible(!updateVisible);
    };

    SetMobileButton();

    return (
        <div className="tasks flex">
            {WindowButtonData.map((button) => (
                <WindowButton key={button.title}
                active={(button.className === 'start' && startVisible) || (button.className === 'posts' && mainVisible) || (button.className === 'sea' && searchVisible) || (button.className === 'imej' && imageVisible) || (button.className === 'up' && updateVisible)}
                {...button}
                handleClick={button.className === 'start' ? toggleStart : button.className === 'posts' ? toggleMain : button.className === 'sea' ? toggleSearch : button.className === 'imej' ? toggleImage : button.className === 'up' ? toggleUpdate : null}
                />
            ))}

            {/* LATER ADD BUTTON FOR MOBILE HERE */}
            {MobileButtonData.map((button) => (
                <MobileButton key={button.title}
                {...button}
                />
            ))}
        </div>
    );
}