import { IGetLocalStorage, IStoreLocalStorage } from "../../models/ITypes";
import { showMessage } from "../showMessage";

type PropsStore = IStoreLocalStorage;
type PropsGet = IGetLocalStorage;

export const storeData = async ({ storageKey, value }: PropsStore) => {
    try {
        // await localStorage.setItem(storageKey, value)
        localStorage.setItem(storageKey, JSON.stringify(value));
    } catch (e) {
        return showMessage({ message: 'Gagal menyimpan di local storage', status: 'danger' });
    }
}
export const getData = async ({ storageKey }: PropsGet) => {
    try {
        const jsonValue = localStorage.getItem(storageKey);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        return showMessage({ message: 'Gagal mengambil data di local storage', status: 'danger' });
    }
}