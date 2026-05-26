"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const index_1 = __importDefault(require("./routes/index"));
const swagger_1 = __importDefault(require("./config/swagger"));
const rateLimit_middleware_1 = require("./shared/middleware/rateLimit.middleware");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(rateLimit_middleware_1.apiLimiter);
app.use('/api', index_1.default);
//
// SWAGGER DOCS
//
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
//
// HEALTH API
//
app.get('/api/health', (req, res) => {
    res.json({
        status: true,
        message: 'API Running'
    });
});
exports.default = app;
