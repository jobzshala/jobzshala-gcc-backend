"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("../modules/v1/auth/auth.routes"));
const router = express_1.default.Router();
router.use('/v1/auth', auth_routes_1.default);
router.get('/health', (req, res) => {
    return res.json({
        status: true,
        message: 'API Running'
    });
});
exports.default = router;
