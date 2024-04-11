"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function Student({ params, query }) {
  const { get } = useSearchParams();
  const name = get("name");
  const age = get("age");
  //segment ways route
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Student Details</h1>
      <h3>Id : {params.student}</h3>
      <h3>Name : {name}</h3>
      <h3>age : {age}</h3>
    </main>
  );
}

