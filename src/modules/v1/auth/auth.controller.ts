import { Request, Response } from 'express';

import * as service from './auth.service';

export const login = async (
  req: Request,
  res: Response
): Promise<Response> => {

  try {

    const result = await service.login(req.body);

    return res.json({
      status: true,
      result
    });

  } catch (err: any) {

    return res.status(400).json({
      status: false,
      message: err.message
    });

  }
};