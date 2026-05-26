"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('Health API', () => {
    it('should return api running', async () => {
        const response = await (0, supertest_1.default)(app_1.default).get('/api/health');
        expect(response.status).toBe(200);
    });
});
