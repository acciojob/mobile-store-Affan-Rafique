import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import { initialProducts } from "./data";

export default function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <Router>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        {/* Cypress uses :nth-child(1) > a and :nth-child(2) > a */}
        <Link to="/">Home</Link>
        <Link to="/admin">Admin Panel</Link>
      </nav>

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
