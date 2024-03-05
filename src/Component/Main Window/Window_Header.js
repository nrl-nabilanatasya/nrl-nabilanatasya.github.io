// import { useState } from "react";

export default function Window_Header({ title, image, mainVisible, setMainVisible, searchVisible, setSearchVisible, imageVisible, setImageVisible, updateVisible, setUpdateVisible }) {
    const toggleVisibility = () => {
        if (mainVisible !== undefined && setMainVisible !== undefined) {
            setMainVisible(!mainVisible);
        }
        if (searchVisible !== undefined && setSearchVisible !== undefined) {
            setSearchVisible(!searchVisible);
        }
        if (imageVisible !== undefined && setImageVisible !== undefined) {
            setImageVisible(!imageVisible);
        }
        if (updateVisible !== undefined && setUpdateVisible !== undefined) {
            setUpdateVisible(!updateVisible);
        }
    };

    return (
        <div className="post-header flex justify center">
            <div className="winhead flex justify">
                <img src={image} draggable="false" alt="" />
                <div className="w-info flex center">
                    <span className="wti">{title}</span>
                </div>
            </div>
            <div className="post-btns">
                <i className="ti ti-minus min"></i>
                <i className="ti ti-rectangle win"></i>
                <i className="ti ti-x ex" onClick={toggleVisibility}></i>
            </div>
        </div>
    );
}