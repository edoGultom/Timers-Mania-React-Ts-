import { showMessage } from "../showMessage";

interface PropsStore {
    storageKey: string;
    value: any;
}
interface PropsGet {
    key: string;
}
export const storeData = async ({ storageKey, value }: PropsStore) => {
    try {
        // await localStorage.setItem(storageKey, value)
        localStorage.setItem(storageKey, JSON.stringify(value));
    } catch (e) {
        return showMessage({ message: 'Gagal menyimpan di local storage', type: 'danger' });
    }
}
export const getData = async ({ key }: PropsGet) => {
    try {
        const jsonValue = localStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        return showMessage({ message: 'Gagal mengambil data di local storage', type: 'danger' });
    }
}