import { TMapQueryPairToString, TQueryPair } from './types';

export const mapQueryPairToString: TMapQueryPairToString = (pair: TQueryPair) => {
  const [key, value]: TQueryPair = pair;

  return `${key}=${value}`;
};
