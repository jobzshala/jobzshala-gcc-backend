import prisma from '../../../config/db.js';
export const findUserByEmail = async (email) => {
    return prisma.auth_details.findUnique({
        where: {
            email
        }
    });
};
