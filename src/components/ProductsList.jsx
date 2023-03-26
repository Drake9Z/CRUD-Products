import React, { useState } from "react";
import axios from "axios";

const ProductsList = ({
  products,
  setPForm,
  selectProduct,
  newProduct,
  setPopUp,
  deletedProduct
}) => {
  const deletePruduct = (product) => {
    axios
      .delete(`https://products-crud.academlo.tech/products/${product.id}/`)
      .then(() => newProduct());

    setPopUp(true);

    deletedProduct(product)
  };

  return (
    <div className="productList">
      <div className="productList_title">
        <div className="productList_title-legend">
          <h1>Listado de productos</h1>
          <h3>
            Productos en sistema: <span>{products.length}</span>
          </h3>
        </div>
        <button onClick={() => setPForm(true)}>
          Producto Nuevo<i className="bx bx-plus"></i>
        </button>
      </div>
      <div className="products_container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="product_title">
                <h3>
                <span>Product: </span>
                {product.name}
                </h3>
            </div>
            <div className="description_container">
                <div className="product_description">
                    <h4>
                    <span>Categoría: <br /></span>
                    {product.category}
                    </h4>
                    <h4>
                    <span>Price:<br /></span>
                    {product.price}
                    </h4>
                    <h4>
                    <span>Disponibilidad: </span>
                    {product.isAvailable ? "si" : "no"}
                    </h4>
                </div>
                <div className="product_icon">
                    <div onClick={() => deletePruduct(product)}
                    >
                        <i className="bx bxs-x-square"></i>
                    </div>
                    <div onClick={() => selectProduct(product)}>
                        <i className="bx bx-pencil"></i>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
