import dict from '../../helpers/dict';
import { Organizer } from "../../entities/Organizer/Organizer";
import { Track } from "../../entities/Track";

/**
 * Class OrganizeEventUseCase
 */
export class OrganizeEventUseCase
{
    /**
     * OrganizeEventUseCase constructor
     */
    constructor() {}

    /**
     * @param Lecture[] lectures 
     * @returns Track[]
     */
    execute(lectures)
    {
        const maxMinutesMorning = 180;
        const maxMinutesAfternoon = 240;

        let organizer = new Organizer(lectures, maxMinutesMorning);

        const event = [];

        let iterator = 0;

        while (organizer.lectures.length > 0)
        {
            const resultMorning = organizer.getBestCombination(0, organizer.maxMinutes);
            
            let diff = organizer.lectures.filter(lecture => !resultMorning.lectures.includes(lecture));
            
            organizer.maxMinutes = maxMinutesAfternoon;
            organizer.lectures = diff;
            
            const resultAfternoon = organizer.getBestCombination(0, organizer.maxMinutes);

            diff = organizer.lectures.filter(lecture => !resultAfternoon.lectures.includes(lecture));

            organizer.maxMinutes = maxMinutesMorning; // Fim
            organizer.lectures = diff;

            const track = new Track(`Track ${dict[iterator]}`, resultMorning, resultAfternoon);
            event.push(track);
            iterator++;
        }

        for (let track of event)
        {
            track.setLectureHours();
        }

        return event;
    }
}