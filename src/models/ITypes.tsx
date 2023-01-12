export interface ITime {
    id: string;
    time: any;
    status: string;
    original: number;
}

export interface IMessage {
    message: any;
    status: any;
}

export interface IStoreLocalStorage {
    storageKey: string;
    value: any;
}
export interface IGetLocalStorage {
    storageKey: string;
}