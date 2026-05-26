import * as repository from './auth.repository';

export const login = async (payload: {
  email: string;
  password: string;
}) => {

  const { email, password } = payload;

  if (!email || !password) {
    throw new Error('Email & Password required');
  }

  const user = await repository.findUserByEmail(email);

  if (!user) {
    throw new Error('User not found');
  }

  return {
    token: 'JWT_TOKEN'
  };
};