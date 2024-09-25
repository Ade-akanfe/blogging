"use client";
import { useFormStatus } from "react-dom";

const FormStatus = () => {
  const status = useFormStatus();
  const word = status.pending ? "SUBMITTING" : "FINISH";
  return (
    <>
      <button className="shadow-red-900 w-1/3 shadow-md rounded-md lg:shadow-xl bg-red-900 py-2 font-medium text-white max-w-56">
        {word}
      </button>
    </>
  );
};

export default FormStatus;
