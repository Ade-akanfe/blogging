"use client";

import { useFormState } from "react-dom";
import ImageComponent from "./image";
import FormStatus from "@/utils/formstatus";

const FormStateComponent = ({ action }) => {
  const [state, CallableAction] = useFormState(action, {});
  return (
    <>
      <form
        action={CallableAction}
        className="shadow-md shadow-red-900 w-11/12 lg:w-2/4 max-w-xl h-auto flex justify-start items-center flex-col py-5"
      >
        <div className="flex flex-row w-4/5 h-16 justify-center gap-2 text-xl font-semibold text-red-900">
          New Post
        </div>
        {state.error && (
          <div className="w-full text-center text-red-500 ">
            <span className="text-base">{state.error}</span>
          </div>
        )}
        <div className=" w-full flex justify-center items-center flex-col gap-5">
          <div className="flex flex-row w-5/6 h-10 justify-center gap-2 items-center">
            <label className="h-full hidden lg:flex text-red-950 text-lg w-1/5 max-w-48 items-center text-left font-medium">
              Title
            </label>
            <input
              required
              name="title"
              placeholder="Enter Title of Post"
              className="flex h-full outline-none border-red-900 border-2 w-11/12 lg:w-4/5 max-w-96 text-red-900 px-2"
            />
          </div>
          <div className="flex flex-row w-5/6 h-auto justify-center gap-2 items-center">
            <label className="h-full hidden lg:flex text-red-950 text-lg w-1/5 max-w-48 items-center text-left font-medium">
              Description
            </label>
            <textarea
              required
              name="description"
              placeholder="Enter Post Description"
              className="flex h-auto outline-none border-red-900 border-2 w-11/12 lg:w-4/5 max-w-96 text-red-900 px-2"
              rows={"5"}
            />
          </div>
          <div className="flex flex-row w-5/6 h-auto justify-center gap-2 items-center">
            <label className="h-full hidden lg:flex text-red-950 text-lg w-1/5 max-w-48 items-center text-left font-medium">
              Image
            </label>
            <div className="relative flex justify-center items-center h-32  border-red-900 border-2 w-11/12 lg:w-4/5 max-w-96 text-red-900 px-2">
              <ImageComponent label={"Pick an Image"} name="image" />
            </div>
          </div>
          <FormStatus />
        </div>
      </form>
    </>
  );
};
export default FormStateComponent;
