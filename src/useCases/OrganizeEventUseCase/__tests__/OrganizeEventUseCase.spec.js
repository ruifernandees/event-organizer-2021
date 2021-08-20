import { Lecture } from "../../../entities/Lecture";
import { OrganizeEventUseCase } from "../OrganizeEventUseCase";
import { event } from "./mocks/event";
import { lectures } from './mocks/lectures';
import { lecturesShuffled } from "./mocks/lecturesShuffled";
import duplicatedLectures from './mocks/duplicatedLectures.json';

describe("Organize Event Use Case", () => {
    it ("Should return right result", () => {
        const organizeEventUseCase = new OrganizeEventUseCase();
        const result = organizeEventUseCase.execute(lectures);

        expect(result).toEqual(event);
    });
    
    it ("Should have the right time", () => {
        const organizeEventUseCase = new OrganizeEventUseCase();
        const result = organizeEventUseCase.execute(lectures);
        
        const times = [];

        for (let track of result)
        {
            times.push(track.morning.timeOfLectures);
            times.push(track.afternoon.timeOfLectures);
        }

        expect(times).toEqual([180, 240, 180, 185]);
    });

    it ("Should have the same time", () => {
        const organizeEventUseCase = new OrganizeEventUseCase();
        const result = organizeEventUseCase.execute(lecturesShuffled);
        
        const times = [];

        for (let track of result)
        {
            times.push(track.morning.timeOfLectures);
            times.push(track.afternoon.timeOfLectures);
        }

        expect(times).toEqual([180, 240, 180, 185]);
    });

    it ("Should return correct event with duplicated lectures", () => {
        const organizeEventUseCase = new OrganizeEventUseCase();

        const newLectures = lectures.map((lecture) => {
            const newLecture = new Lecture(
                lecture.title + " v2",
                lecture.timeInMinutes,
                lecture.rawTitle + " v2",
                lecture.hour
            );
            return newLecture;
        });

        
        const result = organizeEventUseCase.execute(lectures.concat(newLectures));

        expect(JSON.stringify(result)).toBe(JSON.stringify(duplicatedLectures));
    });
});