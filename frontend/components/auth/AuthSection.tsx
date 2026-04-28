"use client";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { useState } from "react";
import { getTabClass } from "@/lib/utils";

export default function AuthSection() {
  const [tab, setTab] = useState<"login" | "register">("login");

  return (
    <>
      <div className="flex w-full border-b border-outline-variant/30 mb-5 sm:mb-6">
        <button
          onClick={() => setTab("login")}
          className={`${getTabClass(tab === "login")} flex-1 py-3 sm:py-4 text-sm sm:text-base`}
        >
          Login
        </button>

        <button
          onClick={() => setTab("register")}
          className={`${getTabClass(tab === "register")} flex-1 py-3 sm:py-4 text-sm sm:text-base`}
        >
          Register
        </button>
      </div>

      {tab === "login" ? <LoginForm /> : <RegisterForm />}
    </>
  );
}
