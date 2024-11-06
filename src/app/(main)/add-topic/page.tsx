"use client";

import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import React, { FormEventHandler, useState } from "react";

const AddTopicPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/topics`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, description }),
        }
      );

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2"
      />
      <Button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit rounded-none"
      >
        Add Topic
      </Button>
    </form>
  );
};

export default AddTopicPage;
