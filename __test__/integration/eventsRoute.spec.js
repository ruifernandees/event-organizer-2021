import request from 'supertest';

import app from '../../src/app';

describe('File upload', () => {
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