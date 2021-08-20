import { OrganizeEventUseCase } from "../OrganizeEventUseCase";
import { event } from "./mocks/event";
import { lectures } from './mocks/lectures';

describe("Organize Event Use Case", () => {
    it ("Should return right result", () => {
        const organizeEventUseCase = new OrganizeEventUseCase();
        const result = organizeEventUseCase.execute(lectures);

        expect(result).toEqual(event);
    });
});