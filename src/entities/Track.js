import { Lecture } from "./Lecture";

export class Track
{
    constructor(title, morning, afternoon)
    {
        this.title = title;
        this.morning = morning;
        this.afternoon = afternoon;

        this.startMorningHour = 9 * 60; 
        this.endMorningHour = 12 * 60; 

        this.startAfternoonHour = 13 * 60; 
        this.endAfternoonHour = 17 * 60;
    }

    setLectureHours()
    {
        let currentHour = 0;
        this.morning.lectures.map((lecture, index) => {
            if (index == 0)
            {
                currentHour += this.startMorningHour;
            }
    
            lecture.hour = this.numberToHour(currentHour);
    
            currentHour += lecture.timeInMinutes;
    
            return lecture;
        });

        currentHour = 720;

        this.morning.lectures.push(new Lecture(
            "Almoço",
            0,
            "Almoço",
            this.numberToHour(currentHour)
        ));
        
        currentHour = 0;        
        this.afternoon.lectures.map((lecture, index) => {
            if (index == 0)
            {
                currentHour += this.startAfternoonHour;
            }
            
            lecture.hour = this.numberToHour(currentHour);
            
            currentHour += lecture.timeInMinutes;

            return lecture;
        });

        if (currentHour < 960)
        {
            currentHour = 960;
        }

        this.afternoon.lectures.push(new Lecture(
            "Evento de Networking",
            0,
            "Evento de Networking",
            this.numberToHour(currentHour)
        ));
    }

    numberToHour(numberHour)
    {
        let hours = String(Math.floor(numberHour / 60));
        let minutes = numberHour % 60 || "00";

        if (minutes < 10 && minutes !== "00")
        {
            minutes = `0${minutes}`;
        }

        if (hours < 10)
        {
            hours = `0${hours}`;
        }

        return `${hours}:${minutes}`;
    }
}