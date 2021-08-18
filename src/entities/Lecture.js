export class Lecture
{
    /**
     * @param string title 
     * @param number time 
     */
    constructor(title, timeInMinutes, rawTitle)
    {
        this.title = title;
        this.timeInMinutes = timeInMinutes;
        this.rawTitle = rawTitle;
        this.hour = 0;
    }
}