export type TMessage = (...args: any[]) => void;

export type TMessagesType = 'good' | 'error' | 'warning' | 'text';

export type TConsoleMessage = Record<TMessagesType, TMessage>;
