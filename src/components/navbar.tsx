"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={"/"} className="text-white font-bold">
        Mongo-Next
      </Link>
      <Link href={"/add-topic"} className="bg-white p-2">
        Add Topic
      </Link>
      {/* <LoginLink>Sign in</LoginLink>

      <RegisterLink>Sign up</RegisterLink> */}
    </nav>
  );
};
