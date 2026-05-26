"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailToQueue = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const sqs = new aws_sdk_1.default.SQS({
    region: process.env.AWS_REGION
});
//
// ========================================
// SEND EMAIL TO QUEUE
// ========================================
//
const sendEmailToQueue = async (payload) => {
    try {
        const params = {
            QueueUrl: process.env.EMAIL_QUEUE_URL,
            MessageBody: JSON.stringify(payload)
        };
        const result = await sqs.sendMessage(params).promise();
        console.log('✅ Email added to queue');
        return result;
    }
    catch (err) {
        console.log('❌ Email Queue Error');
        console.log(err);
        throw err;
    }
};
exports.sendEmailToQueue = sendEmailToQueue;
