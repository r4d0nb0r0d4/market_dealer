import { TCallback } from '__utils';

export type TExpressServerConstructor = () => TExpressServer;

export type TExpressServer = {
  init: TInit;
};

export type TInit = (cb?: TCallback) => void;
