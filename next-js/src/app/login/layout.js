"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* conditional routing */}
      {pathName !== "/login/loginteacher" ? (
        <ul className="flex">
          <li className="ms-6  text-2xl ">
            <h4 className="m-0">Logo</h4>
          </li>
          <li className="ms-5 text-2xl">
            <Link href="/login">Login Main</Link>
          </li>
          <li className="ms-5  text-2xl">
            <Link href="/login/loginstudent">Student Login </Link>
          </li>
          <li className="ms-5 text-2xl">
            <Link href="/login/loginteacher">Teacher Login </Link>
          </li>
        </ul>
      ) : (
        <Link href="/login">Go to main Login Page</Link>
      )}

      {children}
    </main>
  );
}
