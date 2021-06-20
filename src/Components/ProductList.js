import '../styles/productsStyle.scss'

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, retrieveProducts} from "../actions/Products";

const ProductList = () => {

    const [currentProduct, setCurrentProduct] = useState(null);

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(retrieveProducts());        
    }, []);    

    const refreshData = () => {
        setCurrentProduct(null);
    };

    const calculateTotalValues = (p) => {
        let all_totals = {
            subTotal: 0,
            tax: 0, 
            total: 0
        }
        let i = 0;
        while (i < p.length){
            all_totals.subTotal += p[i].price * p[i].quantity;
            i++;
        }
        all_totals.subTotal = Number(all_totals.subTotal.toFixed(2))
        all_totals.tax = Number((all_totals.subTotal*0.05).toFixed(2));
        all_totals.total = Number((Number(all_totals.tax)  + Number(all_totals.subTotal)).toFixed(2));
        return all_totals;
    };

    const removeProduct = (id) => {
        dispatch(deleteProduct(id))
        .then(() => {
            refreshData();
        })
        .catch(e => {
            console.log(e);
        });
    };

    return (
        <>
            <table className="table3">
                <thead>
                    <tr>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Amount</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>                    
                    {products &&
                     products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.description}</td>
                            <td>{ "$ " + product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{ "$ " + Number((product.price * product.quantity).toFixed(2))}</td>
                            <td><button className="btnDelete" onClick={() => removeProduct(product.id)}>DELETE</button></td>
                        </tr>
                    ))} 
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="3">Subtotal</td>
                        <td colSpan="1">{'$ ' + calculateTotalValues(products).subTotal}</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Tax(5%)</td>
                        <td colSpan="1">{'$ ' + calculateTotalValues(products).tax}</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Total</td>
                        <td colSpan="1">{'$ ' + calculateTotalValues(products).total}</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Balance Due</td>
                        <td colSpan="1">{'$ ' + calculateTotalValues(products).total}</td>
                    </tr>
                </tfoot>
            </table> 
        </>
    );
};

export default ProductList;
