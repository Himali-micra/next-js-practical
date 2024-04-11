"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  //   Navigation
  const navigate = (page) => {
    router.push("/login/" + page);
  };
  return (
    <>
      <h1 className="mt-5 text-center text-orange-600 text-3xl pb-4">
        Login Page
      </h1>
      <Link className="underline text-2xl text-blue-500 pb-5" href="/">
        Go to Home Page
      </Link>

      <button
        className="md:w-[196px] md:py-4 py-[11px] border px-5 w-full border-blue-400  text-blue-500 font-semibold rounded-lg md:text-sm text-sm_18 sm:hover:shadow-[0px_4px_9px_0px_#FF4E0033]
                    sm:hover:bg-blue-500 transition-all ease-in-out duration-500 sm:hover:text-white mb-5"
        onClick={() => navigate("loginstudent")}
      >
        Go to Student Login Page
      </button>

      <button
        className="md:w-[196px] md:py-4 py-[11px] border px-5 w-full border-blue-400  text-blue-500 font-semibold rounded-lg md:text-sm text-sm_18 sm:hover:shadow-[0px_4px_9px_0px_#FF4E0033]
                    sm:hover:bg-blue-500 transition-all ease-in-out duration-500 sm:hover:text-white"
        onClick={() => navigate("loginteacher")}
      >
        Go to Teacher Login Page
      </button>
    </>
  );
};

export default Login;
