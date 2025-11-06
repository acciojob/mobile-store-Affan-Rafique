import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminPanel({ products, setProducts }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });
  const [editId, setEditId] = useState(null);

  const onAdd = () => {
    if (!form.name || !form.price) return;
    const nextId = products.length
      ? Math.max(...products.map((p) => p.id)) + 1
      : 1;
    setProducts([...products, { ...form, id: nextId, price: Number(form.price) }]);
    setForm({ name: "", description: "", image: "", price: "" });
  };

  const onDelete = (id) => setProducts(products.filter((p) => p.id !== id));

  const onEdit = (id) => {
    const p = products.find((x) => x.id === id);
    if (!p) return;
    setForm({
      name: p.name,
      description: p.description,
      image: p.image,
      price: String(p.price),
    });
    setEditId(id);
  };

  const onSave = () => {
    setProducts(
      products.map((p) =>
        p.id === editId ? { ...p, ...form, price: Number(form.price) } : p
      )
    );
    setEditId(null);
    setForm({ name: "", description: "", image: "", price: "" });
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <div className="form" style={{ marginBottom: 16 }}>
        <input
          className="form-control"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        {editId ? (
          <button className="float-right" onClick={onSave}>
            Save
          </button>
        ) : (
          <button onClick={onAdd}>Add</button>
        )}
      </div>

      <div
        className="grid"
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
            <Link to={`/products/${p.id}`}>View</Link>
            <button className="float-right" onClick={() => onDelete(p.id)}>
              Delete
            </button>
            <button className="float-right" onClick={() => onEdit(p.id)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
