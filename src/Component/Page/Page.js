import { Link } from "react-router-dom";

import Window_Header from '../Main Window/Window_Header';
import Window_Content from '../Main Window/Window_Content';

export default function Page() {
    return (
        <div id="page">
            <div className="header flex justify center">
                <div className="return">
                    <Link to="/">
                        <i className="ti ti-arrow-narrow-left"></i>Return
                    </Link>
                </div>
            </div>
            
            <div className="container">
                <h1>Page</h1>
                <div className="content">
                    <Window_Header title="Page Window Title" image="https://win98icons.alexmeub.com/icons/png/event_log.png" />
                    <Window_Content content={content} />
                </div>
            </div>
        </div>
    );
}

// this page content value
const content = (
    <>
        Content
    </>
);