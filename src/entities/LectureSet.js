export class LectureSet
{
    constructor()
    {
        this.lectures = [];
        this.timeOfLectures = 0;
    }

    increaseTime(time)
    {
        this.timeOfLectures += time;
    }

    addLecture(lecture)
    {
        this.lectures.push(lecture);
    }

    concatLectures(lectures)
    {
        this.lectures = [].concat(this.lectures, lectures);
    }
}