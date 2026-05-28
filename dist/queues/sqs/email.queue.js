import AWS from 'aws-sdk';
const sqs = new AWS.SQS({
    region: process.env.AWS_REGION
});
//
// ========================================
// SEND EMAIL TO QUEUE
// ========================================
//
export const sendEmailToQueue = async (payload) => {
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
