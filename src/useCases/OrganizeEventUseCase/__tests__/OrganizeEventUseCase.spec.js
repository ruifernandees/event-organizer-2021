import { OrganizeEventUseCase } from "../OrganizeEventUseCase";
import { event } from "./mocks/event";
import { lectures } from './mocks/lectures';
import { lecturesShuffled } from "./mocks/lecturesShuffled";

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
});