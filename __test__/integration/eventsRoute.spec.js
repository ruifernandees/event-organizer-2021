import request from 'supertest';

import app from '../../src/app';
import { event } from '../mocks/event';
import duplicatedLecturesEvent from '../mocks/duplicatedLecturesEvent.json';

describe('File upload', () => {
    it('Should return event correctly', async () => {
        const response = await request(app)
            .post('/events')
            .attach('file', '__test__/files/proposals.txt');

        expect(JSON.stringify(response.body)).toBe(JSON.stringify(event));
    });

    it('Should return event with duplicated lectures correctly', async () => {
        const response = await request(app)
            .post('/events')
            .attach('file', '__test__/files/proposalsDuplicated.txt');
        
        expect(JSON.stringify(response.body)).toBe(JSON.stringify(duplicatedLecturesEvent));
    });

    it('Should return status 200 when upload a text/plain file', async () => {
        const response = await request(app)
            .post('/events')
            .attach('file', '__test__/files/proposals.txt');
        
        expect(response.status).toBe(200);
    });

    it('Should return status 500 when upload a non text/plain file', async () => {
        const response = await request(app)
            .post('/events')
            .attach('file', '__test__/files/image.jpg');
        
        expect(response.status).toBe(500);
    });
});