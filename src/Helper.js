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
    const d = new Date();
    const hours = d.getHours() % 12; // Use 12-hour format
    const minutes = d.getMinutes().toString().padStart(2, '0'); // Add leading zero
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
}

export function updateTheme() {
    
}

export function toggleWindow(leftButtonData) {
    console.log('clicked!');
    console.log(leftButtonData);

    // return !isActive;

    // const seaButton = leftButtonData.find(
    //     button => button.className.toLowerCase() === 'sea'.toLowerCase() // Ensure case-insensitivity
    //   );
    //   if (seaButton) {
    //     seaButton.active = !seaButton.active;
    //     console.log('Clicked and toggled active state:', seaButton);
    //   }
}



// export { updateDate, updateTime, updateTheme, toggleWindow };
