import axios from "axios";
import { BASE_URL, GET_ENDPOINT } from "../../constant";


export function getApiData() {
    // console.log(action , 'api');
    return (
        axios.get(BASE_URL + GET_ENDPOINT)
            .then((res) => {
                const { data, status } = res;
                return {
                    data, status
                }
            })
            .catch((e)=>console.log(e,'get api'))
    )
} 