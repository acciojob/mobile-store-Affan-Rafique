import React from "react";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  return (
    <div>
      <h2>Available Mobiles</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            className="card"
            style={{ border: "1px solid #ddd", padding: 12, textAlign: "center" }}
          >
            <img src={p.image} alt={p.name} width="150" height="150" />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <Link to={`/products/${p.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
