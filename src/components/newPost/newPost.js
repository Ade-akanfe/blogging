import { sendAction } from "@/lib/post";
import FormStateComponent from "../../utils/formState";

const NewPostComponent = () => {
  return (
    <div className="w-full flex -h-3.5rem lg:-h-5rem justify-center items-center">
      <FormStateComponent action={sendAction} />
    </div>
  );
};
export default NewPostComponent;
