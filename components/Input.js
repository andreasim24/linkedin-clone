import { Avatar } from "@mui/material";
import { PhotoIcon, VideoIcon, EventIcon, ArticleIcon } from "./Icons";

function Input({ handlePostSend, message, setMessage }) {
  return (
    <div className="bg-white dark:bg-[#1D2226] rounded-lg px-3 pt-3 space-y-2 border border-gray-300 dark:border-none">
      <div className="flex items-center space-x-2">
        <Avatar
          src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="!h-10 !w-10 cursor-pointer"
        />

        <form className="w-full" onSubmit={handlePostSend}>
          <input
            rows="4"
            placeholder="Start a post"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="rounded-full border border-gray-400 py-2.5 px-3 opacity-80 hover:opacity-100 w-full text-left text-sm"
          />
        </form>
      </div>
      <div className="flex items-center flex-wrap justify-center">
        <button className="inputButton group">
          <PhotoIcon />
          <h4 className="opacity-80 group-hover:opacity-100 text-sm font-light">
            Photo
          </h4>
        </button>
        <button className="inputButton group">
          <VideoIcon />
          <h4 className="opacity-80 group-hover:opacity-100 text-sm font-light">
            Video
          </h4>
        </button>
        <button className="inputButton group">
          <EventIcon />
          <h4 className="opacity-80 group-hover:opacity-100 text-sm font-light">
            Events
          </h4>
        </button>
        <button className="inputButton group">
          <ArticleIcon />
          <h4 className="opacity-80 group-hover:opacity-100 text-sm font-light whitespace-nowrap">
            Write Article
          </h4>
        </button>
      </div>
    </div>
  );
}

export default Input;
