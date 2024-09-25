"use client";
import LoveIcon from "@/assets/love";
import { likePost } from "@/lib/post";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const PostCard = (props) => {
  const userId = 1;
  const btnRef = useRef();

  const newVal = props.likes.length > 0 && props.likes.split(",");
  const exist = newVal ? newVal.includes(userId.toString()) : false;

  const [like, setLike] = useState(exist);

  const clicked = () => {
    btnRef.current.click();
    setLike((prev) => !prev);
  };
  return (
    <div className="flex flex-col w-3/12 h-60 shadow-sm shadow-red-700 justify-center items-center">
      <div className="relative h-3/4 w-full">
        <Image src={`/${props.image}`} fill />
      </div>
      <div className="h-1/4 flex flex-col justify-center items-center w-11/12">
        <div className="flex flex-row justify-between w-full">
          <span className="block text-base">{props.title}</span>
          <form className={`${!like && "bg-gray-500"}`} action={likePost}>
            <LoveIcon fill={like ? "red" : "white"} clicked={clicked} />
            <input hidden value={props.id} name="postId" onChange={() => {}} />
            <button hidden ref={btnRef}></button>
          </form>
        </div>
        <div className="w-full flex justify-between mt-2">
          <span className="text-left w-full text-xs">
            {props.description.length > 30
              ? `${props.description.slice(1, 30)} .....`
              : props.description}
          </span>
          <button className="auto text-xs text-right w-8/12 text-red-900 cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
