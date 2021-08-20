import { ConvertRawLecturesUseCase } from '../ConvertRawLecturesUseCase';
import { rawLectures } from './mocks/rawLectures';
import { lectures } from './mocks/lectures';

describe('Convert Raw Lectures Use Case', () => {
    it ('Should be array of Lecture entities', () => {
        const convertRawLecturesUseCase = new ConvertRawLecturesUseCase();
        const result = convertRawLecturesUseCase.execute(rawLectures);

        expect(result).toEqual(lectures);
    });
});