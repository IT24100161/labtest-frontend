import { useEffect, useState } from "react";

function ViewItems() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await fetch(
        "https://labtest-backend-73kk.onrender.com/api/items",
      );
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.log("Error fetching items", err);
    }
  };

  const deleteItem = async (id) => {
    try {
      await fetch(`https://labtest-backend-73kk.onrender.com/api/items/${id}`, {
        method: "DELETE",
      });
      fetchItems();
    } catch (err) {
      console.log("Error deleting item", err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={styles.container}>
      <h2>All Items</h2>
      {items.length === 0 && <p>No items found. Add some!</p>}
      {items.map((item) => (
        <div key={item._id} style={styles.card}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>
            <strong>Price: ${item.price}</strong>
          </p>
          <button onClick={() => deleteItem(item._id)} style={styles.button}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { padding: "30px" },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "15px",
    maxWidth: "400px",
  },
  button: {
    padding: "8px 15px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default ViewItems;
