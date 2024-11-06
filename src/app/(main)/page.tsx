import { TopicsList } from "@/components/topics-list";
import dbConnect from "@/lib/mongodb";
import { Product } from "@/models/Product";
import React from "react";

const HomePage = async () => {
  // Query the products collection

  return <TopicsList />;
};

export default HomePage;
