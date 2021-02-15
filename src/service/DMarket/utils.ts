import tweetnacl from 'tweetnacl';

import { DEFAULT_CACHE_HEADER, MAIN_KEYS } from '__constants/d-market';

import { Method } from '__modules/Request/enums';

import { MAX_SIGN_LENGTH } from './constants';
import { Path } from './enums';
import {
  TByteToHexString,
  TConvertQueryToString,
  TFilterEmptyField,
  TFilterEmptyStrings,
  TGetHeaders,
  TGetTimestamp,
  THexStringToByte,
  TIsSet,
  TQuery,
  TQueryPair,
  TQueryValues,
  TRemoveEmptyProps,
} from './types';
import { mapQueryPairToString } from './mappers';

const publicKey: string = MAIN_KEYS[0];

export const byteToHexString: TByteToHexString = (uint8arr: Uint8Array): string => {
  if (!uint8arr) {
    return '';
  }

  let hexStr: string = '';
  const radix: number = 16;
  const magicNumber: number = 0xff;

  for (let i: number = 0; i < uint8arr.length; i++) {
    let hex: string = ((uint8arr[i] as number) & magicNumber).toString(radix);
    hex = hex.length === 1 ? '0' + hex : hex;
    hexStr += hex;
  }

  return hexStr;
};

export const getTimestamp: TGetTimestamp = (): string => {
  return Math.floor(new Date().getTime() / 1000).toString();
};

export const hexStringToByte: THexStringToByte = (str: string): Uint8Array => {
  const twoNum: number = 2;
  const radix: number = 16;

  const stringLength = str.length;
  const uInt8Arr: Uint8Array = new Uint8Array(stringLength / twoNum);

  for (let i: number = 0, j: number = 0; i < stringLength; i += twoNum, j++) {
    uInt8Arr[j] = parseInt(str.substr(i, twoNum), radix);
  }

  return uInt8Arr;
};

const privateKeyAsByte: Uint8Array = hexStringToByte(MAIN_KEYS[1]);

export const convertQueryToString: TConvertQueryToString = (query: TQuery): string => {
  const queryWithoutEmpty: TQuery = removeEmptyProps(query);
  const pairs: ReadonlyArray<TQueryPair> = Object.entries<TQueryValues>(queryWithoutEmpty);

  const queryString: string = pairs.map<string>(mapQueryPairToString).join('&');

  return `?${queryString}`;
};

export const removeEmptyProps: TRemoveEmptyProps = (query: TQuery): TQuery => {
  const filterEmptyField: TFilterEmptyField = (pair: TQueryPair): boolean => {
    const value: TQueryValues = pair[1];

    return (
      (typeof value === 'number' && !Number.isNaN(value)) ||
      (typeof value === 'string' && value.length > 0) ||
      typeof value === 'boolean' ||
      typeof value === 'undefined'
    );
  };

  const filteredEntries: ReadonlyArray<[string, TQueryValues]> = Object.entries(query).filter(filterEmptyField);

  return Object.fromEntries(filteredEntries);
};

export const getHeaders: TGetHeaders = (
  method: Method,
  path: Path,
  queryAsString: string | null,
  bodyAsString: string | null
) => {
  const queryString: string | null = queryAsString === null ? '' : queryAsString;
  const bodyString: string | null = bodyAsString === null ? '' : bodyAsString;
  const timestamp: string = getTimestamp();

  const encodedSignature: Uint8Array = new TextEncoder().encode(
    `${method}${path}${queryString}${bodyString}${timestamp}`
  );

  const signatureAsBytes: Uint8Array = tweetnacl.sign(encodedSignature, privateKeyAsByte);

  const signature: string = byteToHexString(signatureAsBytes).substr(0, MAX_SIGN_LENGTH);

  return {
    'X-Api-Key': publicKey,
    'X-Request-Sign': `dmar ed25519 ${signature}`,
    'X-Sign-Date': timestamp,
    'Cache-Control': DEFAULT_CACHE_HEADER,
  };
};

export const isSet: TIsSet = <T = any>(value: any): value is Set<T> => {
  return !!value && (value as Set<T>).toString() === '[object Set]';
};

export const filterEmptyStrings: TFilterEmptyStrings = (value: string): value is string => value.length > 0;
