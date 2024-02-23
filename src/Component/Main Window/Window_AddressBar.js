import { useEffect } from "react";

export default function Window_AddressBar() {
    useEffect(() => {
        const checkbox = document.querySelector('.modus');
        const mode = localStorage.getItem("theme") || "normal";
        const isNightMode = mode === "daynight";

        checkbox.checked = isNightMode;
        document.documentElement.setAttribute("data-theme", isNightMode ? "daynight" : "normal");
        document.body.classList.toggle("night", isNightMode);

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

            {/* LATER ADD BACK TO TOP BUTTON FOR MOBILE */}

            {/* THREE DOT */}
            <div className="tc">
                <a className="tbtn">
                    <span className="close" title="Show"><i className="ti ti-dots-vertical"></i></span>
                    <span className="close none act" title="Close"><i className="ti ti-dots-vertical"></i></span>
                </a>
            </div>

            {/* LATER ADD THREE DOT FOR MOBILE */}
        </div>
    );
}