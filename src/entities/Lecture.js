/**
 * Class Lecture
 */
export class Lecture
{
    /**
     * @param string title 
     * @param number timeInMinutes
     * @param string rawTitle 
     * @param string hour 
     */
    constructor(title, timeInMinutes, rawTitle, hour = "")
    {
        this.title = title;
        this.timeInMinutes = timeInMinutes;
        this.rawTitle = rawTitle;
        this.hour = hour;
    }
}