import { Button } from "./ui/button";

export const EditTopicForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2"
      />
      <Button className="bg-green-600 font-bold text-white py-3 px-6 w-fit rounded-none">
        Update Topic
      </Button>
    </form>
  );
};
