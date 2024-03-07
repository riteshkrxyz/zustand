import { useAuthStore } from "../store/authStore.ts";

const LoginComponent = () => {
  const { login } = useAuthStore();
  return (
    <div>
      <input type="text" name="" id="" />
      <input type="text" name="" id="" />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default LoginComponent;
