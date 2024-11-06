import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { DeleteButton } from "./delete-button";

interface Topic {
  _id: string;
  title: string;
  description: string;
}

const getTopics = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    const data = await res.json();
    return data?.topics || [];
  } catch (error) {
    console.log("Error loading topics", error);
    return [];
  }
};

export const TopicsList = async () => {
  const topics = await getTopics();

  return (
    <>
      {topics.map((topic: Topic) => (
        <div
          key={topic._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <p>{topic.description}</p>
          </div>
          <div className="flex gap-2">
            <DeleteButton id={topic._id} />
            <Link href={`/edit-topic/${topic._id}`}>
              <Edit size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
