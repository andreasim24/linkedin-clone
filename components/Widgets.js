import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import Image from "next/image";

import React from "react";

function Widgets({ articles }) {
  return (
    <div className="hidden xl:inline space-y-2">
      {/* News */}
      <div className="bg-white dark:bg-[#1D2226] py-2.5 rounded-lg space-y-2 w-11/12 overflow-hidden border border-gray-300 dark:border-none">
        <div className="flex items-center justify-between font-bold px-2.5">
          <h4>LinkedIn News</h4>
          <InfoRoundedIcon className="h-5 w-5" />
        </div>

        <div className="space-y-1">
          <div className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 dark:hover:bg-black/20 px-2.5 py-1">
            <FiberManualRecordRoundedIcon className="!h-2 !w-2" />
            <div>
              <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                Tarika Barrett, Ph.D. has spent her career fighting inequities
                in education. In 2016
              </h5>
              {/* <TimeAgo
                  datetime={article.publishedAt}
                  className="text-xs mt-0.5 dark:text-white/75 opacity-80"
                /> */}
              <p className="text-xs dark:text-white/75 opacity-50">
                4d ago · 1.2k views
              </p>
            </div>
          </div>
          <div className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 dark:hover:bg-black/20 px-2.5 py-1">
            <FiberManualRecordRoundedIcon className="!h-2 !w-2" />
            <div>
              <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                On Wednesday, LinkedIn News published its 2022 Guide to
                Kickstarting Your Career, the sixth annual edition of the list.
              </h5>
              {/* <TimeAgo
                  datetime={article.publishedAt}
                  className="text-xs mt-0.5 dark:text-white/75 opacity-80"
                /> */}
              <p className="text-xs dark:text-white/75 opacity-50">
                1w ago · 15k views
              </p>
            </div>
          </div>
          <div className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 dark:hover:bg-black/20 px-2.5 py-1">
            <FiberManualRecordRoundedIcon className="!h-2 !w-2" />
            <div>
              <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                Apple announced that it will increase compensation for its
                employees. Find out more below. #TrendingNow
              </h5>
              {/* <TimeAgo
                  datetime={article.publishedAt}
                  className="text-xs mt-0.5 dark:text-white/75 opacity-80"
                /> */}
              <p className="text-xs dark:text-white/75 opacity-50">
                1d ago · 7.3k views
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Ads */}
      <div className="bg-white dark:bg-[#1D2226] w-11/12 h-64 rounded-lg sticky top-20 border border-gray-300 dark:border-none cursor-pointer">
        <div className="relative w-full h-full">
          <Image
            src="https://rb.gy/kbfeaa"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
