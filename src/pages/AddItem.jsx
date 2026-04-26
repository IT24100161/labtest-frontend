import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddItem() {
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage("✅ Item added successfully!");
        setForm({ name: "", description: "", price: "" });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (err) {
      setMessage("❌ Error adding item");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add New Item</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          placeholder="Item Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          style={styles.input}
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <input
          style={styles.input}
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <button style={styles.button} type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: { padding: "30px" },
  form: { display: "flex", flexDirection: "column", maxWidth: "400px" },
  input: { marginBottom: "10px", padding: "10px", fontSize: "16px" },
  button: {
    padding: "10px",
    backgroundColor: "#333",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default AddItem;
