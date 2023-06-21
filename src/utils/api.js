import data from '../response/data.json';

class Api {
    constructor() {
        // this.url = адрес сервера
    }
    
    getData() {
        //Тут должно быть обращение к серверу для получения данных, пока что локальный JSON файл.
        // Возможно использование fetch/axios/др.
        const drivers_data = JSON.parse(JSON.stringify(data));
        return drivers_data.data;
    }
}

const api = new Api();

export default api;