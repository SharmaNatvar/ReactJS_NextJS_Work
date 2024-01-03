import { PRODUCT_LIST } from "./constant";

export const productList = async() =>{
    let data = await fetch('https://jsonplaceholder.typicode.com/posts');
    data = await data.json()
    console.log('productAction ', data);

    return{
        type: PRODUCT_LIST,
        data
    }
}