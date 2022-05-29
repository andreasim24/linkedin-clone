import Head from "next/head";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/userSlice";
import { fetchUser } from "../services/userService";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    fetchUser().catch(() => {
      router.push("/home");
    });
  }, []);

  if (user)
    return (
      <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
        <Head>
          <title>Feed | LinkedIn</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />

        <main className="flex justify-center gap-x-5 px-4 sm:px-12">
          <div className="flex flex-col md:flex-row gap-5">
            <Sidebar />
            <Feed />
          </div>
          <Widgets />
        </main>
      </div>
    );
  else return null;
}
