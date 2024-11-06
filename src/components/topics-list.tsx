import {
  Edit,
  Edit2Icon,
  PencilIcon,
  Trash,
  Trash2,
  TrashIcon,
} from "lucide-react";
import Link from "next/link";

export const TopicsList = () => {
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <p>Topic Description</p>
        </div>
        <div className="flex gap-2">
          <Trash2 size={24} className="text-red-400" />
          <Link href={"/edit-topic"}>
            <Edit size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};
