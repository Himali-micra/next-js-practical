"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mt-5 text-center text-orange-600 text-3xl pb-4">
        This is Home Page (Dynamic Routing)
      </h1>
      <Link className="underline text-2xl text-blue-500 pb-5" href="/login">
        Go to Login Page
      </Link>
      <br />
      <br />
      <Link className="underline text-2xl text-blue-500" href="/about">
        Go to About Page
      </Link>
      <br />

      <button
        className="md:w-[196px] md:py-4 py-[11px] border px-5 w-full border-blue-400  text-blue-500 font-semibold rounded-lg md:text-sm text-sm_18 sm:hover:shadow-[0px_4px_9px_0px_#FF4E0033]
                    sm:hover:bg-blue-500 transition-all ease-in-out duration-500 sm:hover:text-white mb-5"
        onClick={() => navigate("/login")}
      >
        Go to Login Page
      </button>
      <button
        className="md:w-[196px] md:py-4 py-[11px] border px-5 w-full border-blue-400  text-blue-500 font-semibold rounded-lg md:text-sm text-sm_18 sm:hover:shadow-[0px_4px_9px_0px_#FF4E0033]
                    sm:hover:bg-blue-500 transition-all ease-in-out duration-500 sm:hover:text-white"
        onClick={() => navigate("/about")}
      >
        Go to About Page
      </button>
    </main>
  );
}
