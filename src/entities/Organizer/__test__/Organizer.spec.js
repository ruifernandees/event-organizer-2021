import { Organizer } from "../Organizer";
import { lectures } from "./mocks/lectures";
import { track1Morning } from "./mocks/track1Morning";

describe('Organize Event Use Case', () => {
    it ('Should return the morning events of track 1', () => {
        const maxMinutesMorning = 180;
        
        const organizer = new Organizer(lectures, maxMinutesMorning);
        
        const result = organizer.getBestCombination(0, organizer.maxMinutes);

        expect(result.lectures).toEqual(track1Morning);
    });
});