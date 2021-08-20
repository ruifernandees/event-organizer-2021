export class Lecture
{
    /**
     * @param string title 
     * @param number time 
     */
    constructor(title, timeInMinutes, rawTitle, hour = "")
    {
        this.title = title;
        this.timeInMinutes = timeInMinutes;
        this.rawTitle = rawTitle;
        this.hour = hour;
    }
}