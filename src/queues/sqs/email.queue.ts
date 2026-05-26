import AWS from 'aws-sdk';

const sqs = new AWS.SQS({

    region: process.env.AWS_REGION

});

export interface EmailQueuePayload {

    to: string;

    subject: string;

    body: string;

    attachments?: string[];

}

//
// ========================================
// SEND EMAIL TO QUEUE
// ========================================
//

export const sendEmailToQueue = async (

    payload: EmailQueuePayload

): Promise<AWS.SQS.SendMessageResult> => {

    try {

        const params: AWS.SQS.SendMessageRequest = {

            QueueUrl: process.env.EMAIL_QUEUE_URL as string,

            MessageBody: JSON.stringify(payload)

        };

        const result = await sqs.sendMessage(params).promise();

        console.log('✅ Email added to queue');

        return result;

    } catch (err) {

        console.log('❌ Email Queue Error');

        console.log(err);

        throw err;

    }

};