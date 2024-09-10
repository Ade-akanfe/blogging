"use-client";

const NewPostComponent = () => {
  return (
    <div className="w-full flex -h-3.5rem lg:-h-5rem justify-center items-center">
      <form className="shadow-md shadow-red-900 w-11/12 lg:w-2/4 max-w-xl h-auto flex justify-start items-center flex-col py-5">
        <div className="flex flex-row w-4/5 h-16 justify-center gap-2 text-xl font-semibold text-red-900">
          New Post
        </div>
        <div className=" w-full flex justify-center items-center flex-col gap-5">
          <div className="flex flex-row w-5/6 h-10 justify-center gap-2 items-center">
            <label className="h-full hidden lg:flex text-red-950 text-lg w-1/5 max-w-48 items-center text-left font-medium">
              Title
            </label>
            <input
              placeholder="Enter Title of Post"
              className="flex h-full outline-none border-red-900 border-2 w-11/12 lg:w-4/5 max-w-96 text-red-900 px-2"
            />
          </div>
          <div className="flex flex-row w-5/6 h-auto justify-center gap-2 items-center">
            <label className="h-full hidden lg:flex text-red-950 text-lg w-1/5 max-w-48 items-center text-left font-medium">
              Description
            </label>
            <textarea
              placeholder="Enter Post Description"
              className="flex h-auto outline-none border-red-900 border-2 w-11/12 lg:w-4/5 max-w-96 text-red-900 px-2"
              rows={"5"}
            />
          </div>
          <div className="flex flex-row w-5/6 h-auto justify-center gap-2 items-center">
            <label className="h-full hidden lg:flex text-red-950 text-lg w-1/5 max-w-48 items-center text-left font-medium">
              Image
            </label>
            <div  className="relative flex h-auto outline-none border-red-900 border-2 w-11/12 lg:w-4/5 max-w-96 text-red-900 px-2">
                <span>Click here to select an Image</span>
            </div>
          </div>

          <button className="shadow-red-900 w-1/3 shadow-md rounded-md lg:shadow-xl bg-red-900 py-2 font-medium text-white max-w-56">
            FINISH
          </button>
        </div>
      </form>
    </div>
  );
};
export default NewPostComponent;
