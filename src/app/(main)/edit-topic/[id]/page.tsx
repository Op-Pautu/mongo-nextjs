import { EditTopicForm } from "@/components/edit-topic-form";
import { Button } from "@/components/ui/button";
import React from "react";

const EditTopicPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const getTopicById = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/topics/${id}`,
        { cache: "no-store" }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }

      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopicPage;
