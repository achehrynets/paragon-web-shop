const { expect } = require("chai");
const request = require('supertest');
const User = require("../../../../src/api/components/users/model");
const authService = require("../../../../src/services/auth/auth");
const backend = require('../../../../src/api/server');
const utility = require('../../../../src/services/utility');

jest.mock('../../../../src/api/components/users/model');
jest.mock('../../../../src/services/auth/auth');
jest.mock('../../../../src/services/utility');

describe('AuthController', () => {
    describe('POST /api/v1/auth/login', () => {
        it('should return a token if given valid credentials', async () => {
            const mockUser = {
                id: 1,
                email: 'test@example.com',
                password: 'hashedPassword'
            };
            User.findOne.mockResolvedValue(mockUser);
            authService.createToken.mockReturnValue('fakeToken');
            utility.verifyPassword.mockReturnValue(true);

            const response = await request(backend)
                .post('/api/v1/auth/login')
                .send({
                    email: 'test@example.com',
                    password: 'password123'
                });

            expect(response.status).eq(200);
            expect(response.body.token).eq('fakeToken');
        });

        it('should return an error if given invalid credentials', async () => {
            User.findOne.mockResolvedValue(null);
            utility.verifyPassword.mockReturnValue(false);

            const response = await request(backend)
                .post('/api/v1/auth/login')
                .send({
                    email: 'test@example.com',
                    password: 'password123'
                });

            expect(response.status).eq(401);
            expect(response.body.error).eq('Invalid credentials');
        });
    });
});