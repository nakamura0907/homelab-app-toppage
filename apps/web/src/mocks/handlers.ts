import { http, HttpResponse } from 'msw';

const MOCK_SERVER_URL = 'https://example.com';
const makeMockServerUrl = (path: string) => {
    return `${MOCK_SERVER_URL}${path}`;
};

export const handlers = [
    http.get(makeMockServerUrl('/users'), () => {
        return HttpResponse.json({
            id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
            firstName: 'John',
            lastName: 'Maverick',
        });
    }),
];
