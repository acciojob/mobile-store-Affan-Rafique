import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

export default function App() {
  // 🔹 The product data moved here directly
  const initialProducts = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      description: "A16 Bionic. Pro cameras.",
      image: "https://via.placeholder.com/150",
      price: 1299,
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      description: "200MP camera, powerhouse.",
      image: "https://via.placeholder.com/150",
      price: 1199,
    },
    {
      id: 3,
      name: "OnePlus 11",
      description: "Snapdragon 8 Gen 2, smooth.",
      image: "https://via.placeholder.com/150",
      price: 899,
    },
    {
      id: 4,
      name: "Google Pixel 8",
      description: "Tensor and awesome camera.",
      image: "https://via.placeholder.com/150",
      price: 999,
    },
    {
      id: 5,
      name: "Xiaomi 13 Pro",
      description: "Leica camera system.",
      image: "https://via.placeholder.com/150",
      price: 799,
    },
    {
      id: 6,
      name: "Realme GT Neo 5",
      description: "240W charging.",
      image: "https://via.placeholder.com/150",
      price: 699,
    },
    {
      id: 7,
      name: "Vivo X90 Pro",
      description: "Zeiss optics, night king.",
      image: "https://via.placeholder.com/150",
      price: 849,
    },
    {
      id: 8,
      name: "Asus ROG Phone 7",
      description: "Gaming beast.",
      image: "https://via.placeholder.com/150",
      price: 1099,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  return (
    <Router>
      {/* Top Navigation */}
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        {/* Cypress tests use nth-child(1) > a and nth-child(2) > a */}
        <Link to="/">Home</Link>
        <Link to="/admin">Admin Panel</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetails products={products} setProducts={setProducts} />}
        />
        <Route
          path="/admin"
          element={<AdminPanel products={products} setProducts={setProducts} />}
        />
      </Routes>
    </Router>
  );
}

