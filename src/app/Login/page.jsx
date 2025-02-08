 import LayoutAuth from "../../../containers/LayoutAuth/LayoutAuth";

export const metadata = {
    title: "Login",
    description: "Created by Kasra Torabi",
    Image: "./favicon.ico",
  };
  
  
  const Login = () => {
    return (
      <div>
        <LayoutAuth>
          Ultimate project
        <h1>
          Login
        </h1>
        </LayoutAuth>
      </div>
    );
  }
  
  export default Login;
  