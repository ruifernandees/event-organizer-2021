import path from 'path';
import fs from 'fs';
import { ConvertRawLecturesUseCase } from '../useCases/ConvertRawLectures/ConvertRawLecturesUseCase';
import { OrganizeEventUseCase } from '../useCases/OrganizeEventUseCase/OrganizeEventUseCase';

export class EventsController
{
    async store(request, response)
    {
        const { file } = request;

        const filePath = path.resolve(__dirname, '..', '..', 'tmp', 'uploads', file.filename);

        const fileContent = fs
            .readFileSync(filePath)
            .toString();

        try {
            fs.unlinkSync(filePath);
        } catch (error) {
            console.log(error);
            response.status(400).json({ error: "Unexpected error deleting temp txt file" })
        }

        const rawLectures = fileContent
            .split('\n')
            .filter(element => !(element.trim() === ""));

        const convertRawLecturesUseCase = new ConvertRawLecturesUseCase();
        const organizeEventUseCase = new OrganizeEventUseCase();

        const lectures = convertRawLecturesUseCase.execute(rawLectures);

        const event = organizeEventUseCase.execute(lectures);

        response.json(event);
    }
}