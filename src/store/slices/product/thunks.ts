import { productsApi } from "../../../api/productsApi";
import { setProducts, startLoadProducts } from "./product"
import { Dispatch } from 'redux';


export const getProducts = () => {
    return async function (dispatch:Dispatch) {
        dispatch(startLoadProducts);

        const { data } = await productsApi.get('/products/all');
        
        dispatch(setProducts({ nodes: data.products.nodes }));
    }
}
