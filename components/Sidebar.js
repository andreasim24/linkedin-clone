import { Avatar } from "@mui/material";
import Image from "next/image";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import profileBanner from "../assets/ProfileBanner.png";
import { PremiumIcon, SaveIcon, CollapseDownIcon } from "./Icons";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  return (
    <div className="space-y-2 min-w-max max-w-lg md:w-[270px] ">
      {/* Top */}
      <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
        <div className="relative w-full h-14">
          <Image src={profileBanner} layout="fill" priority />
        </div>
        <Avatar
          src={user.photoURL}
          className="!h-16 !w-16 !border-2 !absolute !top-4 !cursor-pointer"
        />
        <div className="mt-5 py-4 space-x-0.5">
          <h4 className="hover:underline decoration-purple-700 underline-offset-1 cursor-pointer">
            {user.displayName}
          </h4>
          <p className="text-black/60 dark:text-white/75 text-sm">
            Front end Developer
          </p>
        </div>

        <div className="w-full hidden md:inline text-left dark:text-white/75 text-sm">
          <div className="sidebarButton space-y-2">
            <div className="flex justify-between space-x-2">
              <div>
                <h4 className="text-gray-400 leading-4">Connections</h4>
                <h4>Grow your network</h4>
              </div>
              <span className="text-blue-700 font-semibold text-xs">321</span>
            </div>
            <div className="flex justify-between items-center space-x-2">
              <h4 className="text-gray-400 leading-4">Followers</h4>
              <span className="text-blue-700 font-semibold text-xs">1,892</span>
            </div>
          </div>

          <div className="sidebarButton">
            <h4 className="leading-4 text-gray-400 w-40 mb-2">
              Access exclusive tools & insights
            </h4>
            <div className="flex">
              <PremiumIcon />
              <h5 className="dark:text-white ml-1">Try Premium for free</h5>
            </div>
          </div>

          <div className="sidebarButton flex items-center space-x-1.5 mb-2">
            <SaveIcon className="!-ml-1" />
            <h4 className="dark:text-white ">My items</h4>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="hidden md:flex bg-white dark:bg-[#1D2226] text-black/70 dark:text-white/75 rounded-lg overflow-hidden flex-col space-y-4 py-3 px-2 sticky top-20 border border-gray-300 dark:border-none">
        <div className="flex items-center justify-between">
          <p className="sidebarItem">Connections</p>
          <div className="mr-1">
            <CollapseDownIcon />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="sidebarLink">Groups</p>
          <div className="mr-1">
            <CollapseDownIcon />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="sidebarLink">Events</p>
          <AddRoundedIcon className="!h-5 text-gray-400" />
        </div>
        <div className="flex items-center justify-between">
          <p className="sidebarLink">Pages</p>
          <AddRoundedIcon className="!h-5 text-gray-400" />
        </div>

        <div className="sidebarButton text-center">
          <h4 className="dark:text-white text-sm text-gray-400">
            Discover More
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
