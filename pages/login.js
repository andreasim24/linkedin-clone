import { useState } from "react";

import TextField from "@mui/material/TextField";
import linkedin from "../assets/linkedin-logo.png";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import { useRouter } from "next/router";

import { login } from "../services/userService";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginToApp = e => {
    e.preventDefault();
    setLoading(true);

    login(email, password)
      .then(() => {
        setLoading(false);
        router.push("/");
      })
      .catch(error => {
        setLoading(false);
        alert(error);
      });
  };

  return (
    <div className="grid w-96 mx-auto place-items-center py-10">
      <Image
        className="h-16 my-6 object-contain"
        src={linkedin}
        width={150}
        height={100}
      />
      <form
        onSubmit={loginToApp}
        className="w-full flex flex-col bg-white rounded-lg px-8 py-10 shadow-md"
      >
        <TextField
          required
          label="Email"
          value={email}
          margin="normal"
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          required
          label="Password"
          value={password}
          margin="normal"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white flex items-center justify-center rounded-full cursor-pointer text-base h-12 w-full mt-8 ml-auto"
        >
          Sign In
          {loading && (
            <CircularProgress
              style={{ height: 25, width: 25, color: "white", marginLeft: 10 }}
            />
          )}
        </button>
      </form>
      <p className="mt-5">New to My LinkedIn?</p>
      <button
        className="cursor-pointer px-4 text-blue-400 hover:text-blue-500"
        onClick={() => router.push("/register")}
      >
        Register
      </button>
    </div>
  );
}

export default Login;
