import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Item Manager</h2>
      <div>
        <Link style={styles.link} to="/">
          View Items
        </Link>
        <Link style={styles.link} to="/add">
          Add Item
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    backgroundColor: "#333",
    color: "white",
  },
  logo: { margin: 0, color: "white" },
  link: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Navbar;
