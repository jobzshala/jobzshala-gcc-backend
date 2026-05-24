import prisma from '../../config/db.js';

export const findUserByEmail = async (email) => {

    return prisma.users.findUnique({
        where: {
            email
        }
    });

};