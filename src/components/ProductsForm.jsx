import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';

const ProductsForm = ({setPForm, newProduct, productSelected, setProductSelected}) => {

    const { register, reset, handleSubmit} = useForm();

    const emptyProduct = { name: "", gategory: "", price: "", isAvailable: false}

    useEffect(() => {
        if (productSelected) {
            reset(productSelected)
        }else{
            reset(emptyProduct)
        }
    },[productSelected])

    const submit = data => {

        if (productSelected) {
           axios.put(`https://products-crud.academlo.tech/products/${productSelected.id}/
           `, data) 
            .then(() => {newProduct(), close()})
        }else{
            axios.post(`https://products-crud.academlo.tech/products/`, data)
                .then(() => {newProduct(), close()})
        }
    }

    const close =  () => {
        setPForm(false)
        setProductSelected(null)
    }

    return (
        <div className='form_container'>
            <div className='form'>
                <div className='close_form' onClick={() => close()}>
                    <i className="bx bxs-x-square"></i>
                </div>
                <h2>{productSelected? "Actualizar producto" : "Crear producto"}</h2>
                <form className='form_inputs' action="" onSubmit={ handleSubmit( submit ) }>
                    <div className='box_input'>
                        <label htmlFor="name">Nombre: </label>
                        <input 
                        type="text" 
                        id='name'
                        { ...register("name")}
                        />
                    </div>   
                    <div className='box_input'>
                        <label htmlFor="category">Categoría</label>
                        <input 
                        type="text" 
                        id='category'
                        { ...register("category")}
                        />
                    </div>
                    <div className='box_input'>
                        <label htmlFor="price">Precio: $</label>
                        <input 
                        type="number" 
                        id='price'
                        { ...register("price")}
                        />
                    </div>

                    <div className='check'>
                        <label htmlFor="isAvailable">Disponibilidad</label>
                        <input 
                        type="checkbox" 
                        id='isAvailable'
                        { ...register("isAvailable")}
                        />
                    </div>

                    <button type="submit">{productSelected? "Actualizar" : "Crear producto"}</button>
                </form>
            </div>
        </div>
    );
};

export default ProductsForm;