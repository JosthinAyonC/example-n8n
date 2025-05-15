import { Request, Response } from 'express';

export const sayHi = (_req: Request, res: Response) => {
  try {
    res.json('Hello!');
  } catch (error) {
    res.status(500).json({ message: 'An error was appeared', error });
  }
};
