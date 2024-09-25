"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImageComponent({ label, name }) {
  const inputRef = useRef(null);
  const [imageProp, setImageProp] = useState(null);
  const ImageChanged = (event) => {
    const img = event.target.files[0];
    if (!img) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImageProp(fileReader.result);
    };
    fileReader.readAsDataURL(img);
  };
  const Clicked = () => {
    inputRef.current.click();
  };
  return (
    <div
      className="w-full h-full relative flex justify-center items-center cursor-pointer"
      onClick={(event) => Clicked(event)}
    >
      <input
        className="hidden"
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg"
        
        name={name}
        onChange={ImageChanged}
      />
      <span className="relative z-10">{label}</span>
      {imageProp && (
        <div className="absolute  z-20 top-0 left-0 w-full h-full">
          <Image fill alt="image picked" src={imageProp} />
        </div>
      )}
    </div>
  );
}
