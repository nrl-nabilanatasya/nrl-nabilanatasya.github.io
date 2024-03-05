import { useEffect } from "react";

export function updateDate() {
    const d = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const week = days[d.getDay()];
    const month = months[d.getMonth()];
    const day = d.getDate();
    const formattedDate = `${week}, ${month} ${day}`;
    return formattedDate;
}

export function updateTime() {
    // const d = new Date();
    // const hours = d.getHours() % 12; // Use 12-hour format
    // const minutes = d.getMinutes().toString().padStart(2, '0'); // Add leading zero
    // const ampm = hours >= 12 ? 'PM' : 'AM';
    // const formattedTime = `${hours}:${minutes} ${ampm}`;
    // return formattedTime;

    var t = new Date();
    var e = t.getHours();
    var a = t.getMinutes();
    var l = e < 12 ? "AM" : "PM";
    var s = +(e = 0 == (e = e > 12 ? e - 12 : e) ? 12 : e) + ":" + (a = (a < 10 ? "0" : "") + a) + " " + l;

    return s;
}

export function SetTheme() {
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
}

export function SetMobileButton() {
    useEffect(() => {
        const classNames = ["th", "fo", "fi", "si", "se", "ei"];
        const buttons = document.querySelectorAll("[class^='btn_']");
        const count = buttons.length;
        const index = Math.min(count, classNames.length) - 1;
        buttons.forEach(button => button.classList.add(classNames[index]));
    }, []);
}