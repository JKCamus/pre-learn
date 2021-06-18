import React, { memo } from "react";
import { connect } from "dva";
import ProductList from "../../components/ProductList";

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: "products/delete",
      payload: id,
    });
  }
  return (
    <>
      <h2>list of products </h2>
      <ProductList onDelete={handleDelete} products={products}></ProductList>
    </>
  );
};
// export default memo(Products);
export default connect(({ products }) => ({ products }))(memo(Products));
