import { useState } from "react";

import { TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import linkedin from "../assets/linkedin-logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="grid w-96 mx-auto place-items-center py-10">
      <Image
        className="h-16 my-6 object-contain"
        src={linkedin}
        width={150}
        height={100}
      />
      <form className="w-full flex flex-col bg-white rounded-lg px-8 py-10 shadow-md">
        <TextField required label="Full Name" margin="normal" />
        <TextField label="Photo of Profile (URL)" margin="normal" />
        <TextField required label="Email" margin="normal" type="email" />
        <TextField required label="Password" margin="normal" type="password" />
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
      <p className="mt-5">
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
