import React from 'react';

const PopUp = ({setPopUp, productSelected}) => {

    return (
        <div className='popUp'>
            <div className='popUp_card'>
                <div className='close_form' onClick={() => setPopUp(false)}>
                        <i className='bx bxs-x-square'></i>
                </div>
                <h2>Producto eliminado</h2>
                <p>El producto <span>{productSelected.name}</span> se ha eliminado con éxito</p>
                <button onClick={() => setPopUp(false)}>Aceptar</button>
            </div>
        </div>
    );
};

export default PopUp;