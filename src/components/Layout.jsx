import { Link, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore.ts";

const Layout = () => {
  const { isAuthenticated, logout } = useAuthStore();
  return (
    <div>
      <header>
        <h1>My Website</h1>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            {isAuthenticated ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p> 2024 my website</p>
      </footer>
    </div>
  );
};

export default Layout;
