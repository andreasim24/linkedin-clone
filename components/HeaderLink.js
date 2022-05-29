import { DownArrowIcon } from "../components/Icons";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { logout as logoutApp } from "../store/slices/userSlice";
import { auth } from "../services/firebaseService";
import { useDispatch } from "react-redux";
import { useMoralis } from "react-moralis";

function HeaderLink({ Icon, text, feed, active, avatar, hidden, theme, work }) {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout
  } = useMoralis();

  const logOutApp = async () => {
    setAnchorEl(null);
    dispatch(logoutApp());
    await logout();
    auth.signOut();
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const loginMetamask = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div
      className={`${
        hidden && "hidden md:inline-flex"
      } cursor-pointer flex flex-col justify-center items-center ${
        feed
          ? "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5 space-y-1 "
          : "text-gray-500 hover:text-gray-700"
      } ${active && "!text-black dark:!text-white"}`}
    >
      {avatar ? (
        <>
          <div
            className="relative block items-center cursor-pointer"
            onClick={handleClick}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="!h-7 !w-7 lg:!-mb-0 "
            />
            <h4
              className={`text-sm ${
                feed && "hidden lg:flex justify-center w-full mx-auto"
              } items-center`}
            >
              {text}
              <DownArrowIcon theme={theme} />
            </h4>
          </div>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem>Setting</MenuItem>
            <MenuItem onClick={loginMetamask}>Connect Metamask</MenuItem>
            <MenuItem onClick={logOutApp}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <Icon theme={theme} />
      )}

      {!work && !avatar && (
        <h4
          className={`text-sm ${
            feed && "hidden lg:flex justify-center w-full mx-auto"
          }`}
        >
          {text}
        </h4>
      )}

      {work ? <DownArrowIcon theme={theme} /> : null}

      {active && (
        <span className="hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full" />
      )}
    </div>
  );
}

export default HeaderLink;
