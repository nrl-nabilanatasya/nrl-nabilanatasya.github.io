import { useState, useEffect } from 'react';
import { updateDate, updateTime } from '../../Helper';

export default function Taskbar_Right() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        setDate(updateDate());
        const timeInterval = setInterval(() => setTime(updateTime()), 1000);
    
        return () => {
            clearInterval(timeInterval);
        };
    }, []);

    console.log(time)

    return (
        <div className="tasks2 flex">
            <div className="clock-wrap flex center">
                <div className="linfo flex center">
                    <img src="images/icons/schedule.png" draggable="false" alt="" />
                    <div id="date">{date}</div>
                </div>
            </div>
            
            <div className="clock-wrap flex center">
                <div className="linfo flex center">
                    <div className="ltitle">
                        <img src="images/icons/digital-clock.png" draggable="false" alt=""/>
                        <div id="clock">{time}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}