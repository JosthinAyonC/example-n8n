import { Request, Response } from 'express';

export const sayHi = (_req: Request, res: Response) => {
  try {
    const response = {
      message: 'Hello World',
      status: 'success',
    };
    console.log('Req', _req.query);
    console.info('Someone is consulting the API');
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'An error was appeared', error });
  }
};
