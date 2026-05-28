import prisma from '../../../config/db.js';

export const findUserByEmail = async (email: string) => {

  return prisma.auth_details.findUnique({
    where: {
      email
    }
  });

};