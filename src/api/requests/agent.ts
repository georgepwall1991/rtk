import axios, {AxiosResponse} from "axios";
import { Repo } from "../../models/Repo";


axios.defaults.baseURL = "https://localhost:5001/";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody)
}

const Repository = {
    list: () => requests.get<Repo[]>('Repo'),
}

const agent = {
    Repository
}

export default agent;