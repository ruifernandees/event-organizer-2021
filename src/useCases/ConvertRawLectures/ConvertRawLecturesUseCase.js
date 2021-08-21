import { Lecture } from "../../entities/Lecture";

/**
 * Class ConvertRawLecturesUseCase
 */
export class ConvertRawLecturesUseCase
{
    /**
     * ConvertRawLecturesUseCase constructor
     */
    constructor() {}

    /**
     * @param string[] rawLectures 
     * @returns Lecture[]
     */
    execute(rawLectures)
    {
        const lectures = [];

        for (const rawLecture of rawLectures) {
            const stringLightningMinutes = rawLecture.replace(/lightning/, "5min");
            let minutesString = stringLightningMinutes.match(/\d+min/);

            if (minutesString) {
                minutesString = minutesString[0];
                let minutes = minutesString.match(/\d+/);

                if (minutes) {
                    minutes = Number(minutes[0]);

                    const lectureTitle = stringLightningMinutes.split(minutesString)[0].trim();

                    const lecture = new Lecture(lectureTitle, minutes, rawLecture);
                    lectures.push(lecture);
                }
            }

        }

        return lectures;
    }
}