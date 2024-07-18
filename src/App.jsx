// style
import "./App.css";

import { useState } from "react";
// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import UserList from "./components/UserList/UserList";
import NewUserForm from "./components/NewUser/NewUser";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  // delete user
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  // add user
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };

  // close modal
  const closeModal = (e) => {
    if (e.target.classList.value === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar users={users} />
      <main>
        {!users.length && (
          <div className="no-users">
            <h2>No users</h2>
          </div>
        )}
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      <Footer />
      {showModal && <NewUserForm addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
    </div>
  );
}

export default App;
