import { useState } from "react";

import { TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import linkedin from "../assets/linkedin-logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { register } from "../services/userService";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    setLoading(true);

    register(email, password, name, photoURL)
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
        onSubmit={handleRegister}
        className="w-full flex flex-col bg-white rounded-lg px-8 py-10 shadow-md"
      >
        <TextField
          required
          label="Full Name"
          margin="normal"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          label="Photo of Profile (URL)"
          margin="normal"
          value={photoURL}
          onChange={e => setPhotoURL(e.target.value)}
        />
        <TextField
          required
          label="Email"
          margin="normal"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          required
          label="Password"
          margin="normal"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white flex items-center justify-center rounded-full cursor-pointer text-base h-12 w-full mt-8 ml-auto"
        >
          Register
          {loading && (
            <CircularProgress
              style={{ height: 25, width: 25, color: "white", marginLeft: 10 }}
            />
          )}
        </button>
      </form>
      <p className="mt-5 text-black">
        Already on My LinkedIn?
        <button
          className="cursor-pointer px-4 text-blue-400 hover:text-blue-500"
          onClick={() => router.push("/login")}
        >
          Sign in
        </button>
      </p>
    </div>
  );
};

export default Register;
