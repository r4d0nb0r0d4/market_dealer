import { TCallback } from '__utils';

export type TExpressServerConstructor = (options?: Options) => TExpressServer;

export type Options = {
  port?: string;
};

export type TExpressServer = {
  init: TInit;
};

export type TInit = (cb?: TCallback) => void;
