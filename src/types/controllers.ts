import { Request, Response } from 'express';

export type BaseController = (request: Request, response: Response) => void;
