export type TMessage = (...args: any[]) => void;

export type TMessagesType = 'success' | 'error' | 'warning' | 'text';

export type TConsoleMessage = Record<TMessagesType, TMessage>;
