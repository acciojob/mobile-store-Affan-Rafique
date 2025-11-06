import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails({ products, setProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => products.find((p) => p.id === Number(id)), [products, id]);

  const [price, setPrice] = useState(product ? product.price : "");

  if (!product) return <h2>Product not found</h2>;

  const savePrice = () => {
    const val = Number(price);
    if (isNaN(val)) return;
    setProducts(products.map((p) => (p.id === product.id ? { ...p, price: val } : p)));
  };

  return (
    <div>
      <img src={product.image} alt={product.name} width="200" height="200" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3 data-testid="price">${product.price}</h3>

      <div style={{ margin: "12px 0" }}>
        <input
          className="form-control"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Update price"
          style={{ padding: 8, width: 180 }}
        />
        <button className="float-right" onClick={savePrice} style={{ marginLeft: 8 }}>
          Save
        </button>
      </div>

      <button className="btn" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}
