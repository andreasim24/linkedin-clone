import { Avatar, IconButton } from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { useEffect, useState } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

const Post = ({ body, likes, time, avatar, name, modalPost }) => {
  const [liked, setLiked] = useState(false);
  const contractProcessor = useWeb3ExecuteFunction();

  useEffect(() => {
    if (liked) {
      let options = {
        contractAddress: "0x3Aab333A4bBA368Abfb3D52866bfD0FA373eeDd5",
        functionName: "claim",
        abi: [
          {
            inputs: [],
            name: "claim",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          {
            stateMutability: "payable",
            type: "receive"
          }
        ]
      };
      contractProcessor.fetch({
        params: options
      });
    }
  }, [liked]);

  return (
    <div
      className={`bg-white dark:bg-[#1D2226] ${
        modalPost ? "rounded-r-lg" : "rounded-lg"
      }  pt-3.5 border border-gray-300 dark:border-none`}
    >
      <div className="flex items-center px-3.5 cursor-pointer mb-5">
        <Avatar src={avatar} className="!h-10 !w-10 cursor-pointer" />
        <div className="mr-auto ml-2 leading-none">
          <h6 className=" hover:text-blue-500 hover:underline">{name}</h6>
          <p className="text-xs dark:text-white/75 opacity-50 ">
            3.512 followers
          </p>
          <div className="flex flex-row">
            <p className="text-xs dark:text-white/75 opacity-50">{time} ·</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM3 8C3 6.91815 3.35089 5.86548 4 5L4.55 5.55C4.69233 5.68951 4.80544 5.85599 4.8827 6.03971C4.95996 6.22342 4.99984 6.4207 5 6.62V7.69C5.00018 7.88885 5.07931 8.07948 5.22 8.22L5.78 8.78C5.92052 8.92069 6.11116 8.99983 6.31 9H7V9.69C7.00018 9.88884 7.07931 10.0795 7.22 10.22L7.78 10.78C7.9207 10.9205 7.99983 11.1112 8 11.31V13C6.67392 13 5.40215 12.4732 4.46447 11.5355C3.52679 10.5979 3 9.32608 3 8ZM9.24 12.83L11.24 10.37C11.3295 10.259 11.3855 10.1248 11.4014 9.9831C11.4174 9.84141 11.3926 9.69811 11.33 9.57L10.75 8.41C10.6805 8.27433 10.5719 8.16269 10.4381 8.08957C10.3044 8.01646 10.1517 7.98525 10 8H7V7.81C7.00096 7.71654 7.02758 7.62513 7.07696 7.54577C7.12634 7.46641 7.19658 7.40215 7.28 7.36L7.66 7.17C7.76509 7.11564 7.88169 7.08727 8 7.08727C8.11832 7.08727 8.23491 7.11564 8.34 7.17L9 7.5L9.38 6.8C9.45958 6.65258 9.50084 6.48753 9.5 6.32V5.47C9.50062 5.27316 9.57564 5.08384 9.71 4.94L10.78 3.85C11.5827 4.38684 12.2127 5.14463 12.594 6.03181C12.9753 6.91899 13.0916 7.8976 12.9287 8.84942C12.7658 9.80124 12.3308 10.6855 11.6762 11.3955C11.0217 12.1054 10.1755 12.6106 9.24 12.85V12.83Z"
                fill="#666666"
                fillOpacity="0.6"
              />
            </svg>
          </div>

          {/* <TimeAgo
            datetime={post.createdAt}
            className="text-xs dark:text-white/75 opacity-80"
          /> */}
        </div>

        <IconButton>
          <MoreHorizRoundedIcon className="dark:text-white/75 h-7 w-7" />
        </IconButton>
      </div>

      <div className="px-3.5 pb-3 break-all md:break-normal">
        <h4 className="text-xs">{body}</h4>
      </div>

      <img
        src="https://media.istockphoto.com/photos/slave-hands-broken-chains-with-bird-flying-picture-id1296601764?b=1&k=20&m=1296601764&s=170667a&w=0&h=0hjKKZZYp2Wl1BRxopegdWrJwTwi1Vlbs_aXdmhhr_o="
        alt=""
        className="w-full cursor-pointer"
      />

      <div className="flex items-center dark:border-t border-gray-600/80 text-black/60 dark:text-white/75">
        <button
          className={`postButton group ${liked && "text-white bg-blue-400"}`}
          onClick={() => setLiked(!liked)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.46 11L15.55 7.08999C14.7815 6.32035 14.2028 5.38221 13.86 4.34999L13.37 2.87999C13.1861 2.33314 12.8353 1.85769 12.3672 1.52047C11.899 1.18326 11.337 1.00123 10.76 0.999988C10.3989 0.998672 10.041 1.0685 9.70687 1.20549C9.37272 1.34247 9.06882 1.54393 8.81253 1.79837C8.55624 2.0528 8.35258 2.35522 8.21317 2.68837C8.07375 3.02151 8.00132 3.37885 8.00001 3.73999V4.85999C8.00224 5.82829 8.15749 6.79015 8.46001 7.70999L8.89001 8.99999H4.12001C3.55775 8.99999 3.01852 9.22334 2.62095 9.62092C2.22337 10.0185 2.00001 10.5577 2.00001 11.12C2.00139 11.4656 2.08566 11.8057 2.24575 12.112C2.40583 12.4182 2.63706 12.6816 2.92001 12.88C2.6368 13.0734 2.405 13.333 2.2447 13.6361C2.08439 13.9393 2.0004 14.277 2.00001 14.62C1.99207 15.0425 2.10938 15.4579 2.33717 15.8138C2.56496 16.1697 2.89303 16.4502 3.28001 16.62C3.10026 16.9229 3.00367 17.2678 3.00001 17.62C2.99914 18.1621 3.20595 18.6839 3.57794 19.0782C3.94992 19.4725 4.45881 19.7093 5.00001 19.74V19.88C5.00001 20.4422 5.22337 20.9815 5.62095 21.3791C6.01852 21.7766 6.55775 22 7.12001 22H14.61C15.852 21.9989 17.0771 21.7114 18.19 21.16L18.5 21H21V11H19.46ZM19 19H18L17.27 19.37C16.4328 19.7816 15.5129 19.9971 14.58 20H7.72001C7.49687 20.0089 7.27717 19.9428 7.09594 19.8123C6.91471 19.6818 6.78237 19.4944 6.72001 19.28L6.47001 18.41L5.62001 18C5.42424 17.9202 5.25877 17.7805 5.14738 17.6008C5.03598 17.4212 4.98439 17.2108 5.00001 17L5.17001 16L4.41001 15.26C4.24466 15.0985 4.14036 14.8847 4.11483 14.655C4.08931 14.4253 4.14414 14.1938 4.27001 14L4.93001 12.91L4.20001 11.81C4.15824 11.7592 4.12712 11.7006 4.10849 11.6375C4.08986 11.5745 4.0841 11.5083 4.09157 11.443C4.09903 11.3777 4.11956 11.3146 4.15194 11.2573C4.18431 11.2001 4.22787 11.15 4.28001 11.11C4.37496 11.0309 4.49675 10.9915 4.62001 11H11.67L10.36 7.07999C10.1211 6.36423 9.99958 5.61455 10 4.85999V3.74999C10.0051 3.55267 10.0857 3.36483 10.2253 3.22526C10.3649 3.08569 10.5527 3.00505 10.75 2.99999C10.9068 3.00011 11.0596 3.04937 11.187 3.14085C11.3144 3.23233 11.4098 3.36143 11.46 3.50999L12 4.99999C12.4315 6.3149 13.1604 7.5126 14.13 8.49999L18.63 13H19V19Z"
              fill="none"
              className={`fill-blue-400 group-hover:fill-white ${
                liked && "fill-white"
              }`}
            />
          </svg>
          <h4 className="font-light text-sm">Like</h4>
        </button>

        <button className="postButton group">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 9H17V10H7V9ZM7 13H14V12H7V13ZM23 11C23.0148 12.0949 22.7643 13.1772 22.2697 14.1541C21.7751 15.1311 21.0512 15.9738 20.16 16.61L12 22V18H8C6.14348 18 4.36301 17.2625 3.05025 15.9497C1.7375 14.637 1 12.8565 1 11C1 9.14348 1.7375 7.36301 3.05025 6.05025C4.36301 4.7375 6.14348 4 8 4H16C17.8565 4 19.637 4.7375 20.9497 6.05025C22.2625 7.36301 23 9.14348 23 11ZM21 11C21 9.67392 20.4732 8.40215 19.5355 7.46447C18.5979 6.52678 17.3261 6 16 6H8C6.67392 6 5.40215 6.52678 4.46447 7.46447C3.52678 8.40215 3 9.67392 3 11C3 12.3261 3.52678 13.5979 4.46447 14.5355C5.40215 15.4732 6.67392 16 8 16H14V18.28L19 15C19.6336 14.5463 20.1469 13.9448 20.4955 13.2477C20.844 12.5507 21.0172 11.7791 21 11Z"
              fill="#666666"
              className="group-hover:fill-white"
              fillOpacity="0.6"
            />
          </svg>
          <h4 className="font-light text-sm">Comment</h4>
        </button>

        <button className="postButton group">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 12L18.39 19H16L20 13H8C7.48519 12.9894 6.97333 13.0803 6.49367 13.2676C6.014 13.4548 5.57593 13.7347 5.20448 14.0913C4.83302 14.4479 4.53546 14.8742 4.32879 15.3458C4.12212 15.8175 4.0104 16.3252 4 16.84V17C3.99772 17.4208 4.06184 17.8392 4.19 18.24L5.12 21H3L2.27 18.78C2.09089 18.1831 1.99993 17.5632 2 16.94C2.01581 15.3591 2.65492 13.8484 3.77843 12.7361C4.90194 11.6238 6.41904 10.9999 8 11H20L16 5H18.39L23 12Z"
              fill="#666666"
              className=" group-hover:fill-white"
              fillOpacity="0.6"
            />
          </svg>
          <h4 className="font-light text-sm">Share</h4>
        </button>

        <button className="postButton group">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 3L0 10L7.66 14.26L16 8L9.74 16.34L14 24L21 3Z"
              fill="#666666"
              className=" group-hover:fill-white"
              fillOpacity="0.6"
            />
          </svg>
          <h5 className="font-light text-sm">Send</h5>
        </button>
      </div>
    </div>
  );
};

export default Post;
