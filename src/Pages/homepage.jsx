import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../redux/productSlice";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";




const HomePage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProductsAsync = async () => {
        const items = await dispatch(fetchProducts());
        return items
    };
    fetchProductsAsync();
}, [dispatch]);

  const navigate = useNavigate();
  
  
  return (
    <div className="min-h-screen">
      <Header />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 md:px-12 lg:px-16 gap-6 mt-5">
        {
          products.map((item) => {
            return (
              <Card
                title={item.title}
                price={item.price}
                image={item.image}
                key={item.title}
                onClick={() => navigate(`/products/${item._id}`)}
              />
            );
          })
        }
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
