import React from "react";
import Input from "./Input";
import Post from "./Post";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/userSlice";
import { save, posts as getPosts } from "../services/postService";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getPosts().then(response => {
      setPosts(response);
    });
  }, [message]);

  const handlePostSend = e => {
    e.preventDefault();
    save(user, message);
    setMessage("");
  };

  console.log(user);

  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input
        handlePostSend={handlePostSend}
        message={message}
        setMessage={setMessage}
      />

      {posts.map(({ id, body, likes, time, userPhoto, userName }) => (
        <Post
          key={id}
          name={userName}
          avatar={userPhoto}
          likes={likes}
          body={body}
          time={time}
        />
      ))}
    </div>
  );
}

export default Feed;
