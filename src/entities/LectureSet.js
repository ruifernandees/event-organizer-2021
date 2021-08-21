/**
 * Class LectureSet
 */
export class LectureSet
{
    /**
     * LectureSet constructor
     */
    constructor()
    {
        this.lectures = [];
        this.timeOfLectures = 0;
    }

    /**
     * @param number time 
     */
    increaseTime(time)
    {
        this.timeOfLectures += time;
    }

    /**
     * @param Lecture lecture 
     */
    addLecture(lecture)
    {
        this.lectures.push(lecture);
    }

    /**
     * @param Lecture[] lectures 
     */
    concatLectures(lectures)
    {
        this.lectures = [].concat(this.lectures, lectures);
    }
}