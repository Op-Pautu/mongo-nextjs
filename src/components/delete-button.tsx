"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  id: string;
}

export const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const removeTopic = async (id: string) => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/topics?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <Trash2
      onClick={() => removeTopic(id)}
      size={24}
      className="text-red-400 cursor-pointer"
    />
  );
};
