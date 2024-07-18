import "./Navbar.css";

const Navbar = ({ users }) => {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <h1 className="navbar-logo">CUser</h1>
        <h2 className="navbar-counter">
          {users ? `${users.length} users` : "no users"}
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
