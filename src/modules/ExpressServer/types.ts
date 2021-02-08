import { Express } from 'express';

export type TExpressServerConstructor = (options?: Options) => TExpressServer;

export type Options = {
  port?: string;
};

export type TExpressServer = {
  init: TInit;
};

export type TInit = (cb?: TCallback) => void;

export type TCallback = (app: Express) => void;
