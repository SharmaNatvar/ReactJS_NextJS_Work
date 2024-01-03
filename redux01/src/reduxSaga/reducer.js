import { ADD_TO_CART, EMPTY_TO_CART, REMOVE_TO_CART } from "./constant";

export const userInputData = ( inputData = [] , action) =>{
    // if(action.type === "ADD_TO_CARD"){
    //     console.log("reducer",action);
    //     return"hay"
    // }
    // else{
    //     return"abc"
    // }

    switch(action.type){
        case ADD_TO_CART :
            console.log("reducer",action)
            return [action.inputData, ...inputData];

        case REMOVE_TO_CART :
            console.log("reducer",action);
            inputData.length ? inputData.length = inputData.length  - 1 : inputData = [];
            return [...inputData];

        case EMPTY_TO_CART :
            console.log("reducer",action);
            inputData = []
            return inputData;

        default :
            console.log("not data");
            return inputData;
    }
}