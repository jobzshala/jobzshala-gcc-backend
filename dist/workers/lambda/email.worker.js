//
// ========================================
// EMAIL WORKER
// ========================================
//
export const handler = async (event) => {
    try {
        for (const record of event.Records) {
            await processEmail(record);
        }
        return {
            statusCode: 200,
            body: JSON.stringify({
                status: true,
                message: 'Emails processed successfully'
            })
        };
    }
    catch (err) {
        console.log('❌ Email Worker Error');
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                status: false,
                message: err.message
            })
        };
    }
};
//
// ========================================
// PROCESS EMAIL
// ========================================
//
const processEmail = async (record) => {
    try {
        const body = JSON.parse(record.body);
        console.log('📧 Processing Email');
        console.log(body);
        //
        // EMAIL LOGIC HERE
        //
        // Example:
        // - SES
        // - Nodemailer
        // - SendGrid
        // - Mailgun
        //
        console.log(`✅ Email Sent To: ${body.to}`);
    }
    catch (err) {
        console.log('❌ Failed Processing Email');
        console.log(err);
        throw err;
    }
};
