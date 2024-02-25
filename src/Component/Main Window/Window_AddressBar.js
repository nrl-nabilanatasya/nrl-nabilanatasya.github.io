import { useEffect } from "react";

export default function Window_AddressBar() {
    useEffect(() => {
        const checkbox = document.querySelector('.modus');
        const mode = localStorage.getItem("theme");
        const isLightMode = mode === "daynight";

        checkbox.checked = isLightMode;
        document.documentElement.setAttribute("data-theme", isLightMode ? "daynight" : "normal");
        document.body.classList.toggle("night", isLightMode);

        const switchTheme = (event) => {
            const isNight = event.target.checked;
            document.documentElement.setAttribute("data-theme", isNight ? "daynight" : "normal");
            document.body.classList.toggle("night", isNight);
            localStorage.setItem("theme", isNight ? "daynight" : "normal");
        };

        checkbox.addEventListener("change", switchTheme);

        // Clean up the event listener
        return () => {
            checkbox.removeEventListener("change", switchTheme);
        };
    }, []);

    return (
        <div className="address-bar flex justify center">
            {/* PAGE RELOAD */}
            <a href="/"><i className="ti ti-reload"></i></a>

            {/* DAY/NIGHT MODE */}
            <label className="dn">
                <input className="modus" type="checkbox" />
                <div className="diem">
                    <a className="diemnox moon" title="Enable Dark Mode"><i className="ti ti-moon"></i></a>
                    <a className="diemnox none" title="Disable Dark Mode"><i className="ti ti-sun"></i></a>
                </div>
                <div className="nox">
                    <a className="diemnox moon" title="Enable Light Mode"><i className="ti ti-sun"></i></a>
                    <a className="diemnox none" title="Disable Light Mode"><i className="ti ti-moon"></i></a>
                </div>
            </label>

            {/* ADDRESS */}
            <div className="address flex center">
                <div className="a-info flex center">
                    <div className="a-name"> https://test.com </div>
                </div>
            </div>

            {/* BACK TO TOP */}
            <div className="to-top">
                <a className="scroll" title="Back to top">
                    <i className="ti ti-arrow-up"></i>
                </a>
                <i className="ti ti-arrow-up"></i>
            </div>

            {/* BACK TO TOP BUTTON FOR MOBILE */}
            <div className="m-to-top">
                <a className="m-scroll" title="Back to top">
                    <i className="ti ti-arrow-up"></i>
                </a>
                <i className="ti ti-arrow-up"></i>
            </div>

            {/* THREE DOT */}
            <div className="tc">
                <a className="tbtn">
                    <span className="close" title="Show"><i className="ti ti-dots-vertical"></i></span>
                    <span className="close none act" title="Close"><i className="ti ti-dots-vertical"></i></span>
                </a>
            </div>

            {/* THREE DOT FOR MOBILE */}
            <div className="dc">
                <i className="ti ti-dots-vertical"></i>
            </div>
        </div>
    );
}