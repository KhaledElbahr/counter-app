import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { getProducts } from './../../redux/features/productsSlice';

const Products = () => {

  const dispatch = useDispatch();

  useEffect(() => {
  //   fetchProducts();
    dispatch(getProducts())
  }, []);

  const products = useSelector(state => state.productSlice.products);
  const loading = useSelector(state => state.productSlice.loading);

  return (
    <div className="prosucts-wrapper">
      <h2 className="my-5">Products</h2>
      <div className="container">
        {!loading ? (
          <div className="products row justify-content-center">
            {products.map((product, i) => {
              return (
                <Link to={`/products/${product.id}`} key={i} className="col-3 p-2 m-2 border">
                  <img
                    style={{ width: "60%" }}
                    src={product.image}
                    alt={product.title}
                  />
                  <h3
                    className="my-5"
                    style={{ fontSize: "15px", color: "#000" }}
                  >
                    {product.title}
                  </h3>
                  <p>{product.description}</p>
                  <h4 className="flex-end">{product.price}$</h4>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-center">loading...</p>
        )}
      </div>
    </div>
  );
};

export default Products;
