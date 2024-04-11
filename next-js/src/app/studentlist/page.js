"use client";
// import Link from "next/link";
// import Header from "../components/Header";
import { useState, useEffect } from "react";

const students = [
  {
    id: "01",
    name: "Samili",
    age: "27",
  },
  {
    id: "02",
    name: "Kayara",
    age: "34",
  },
  {
    id: "03",
    name: "buddy",
    age: "62",
  },
  {
    id: "04",
    name: "zara",
    age: "89",
  },
];

const StudentList = () => {
  //  client side component Api calling
  const [student, setStudentList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://dummyjson.com/users");
      const res = await data.json();
      setStudentList(res.users);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* Dynamic routing */}
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1>Student List</h1>
        {/* <ul>
          {students?.map((item, index) => (
            <li className="underline text-2xl text-blue-500 pb-5">
              <Link
                key={index}
                href={`/studentlist/${item.id}?name=${item.name}&age=${item.age}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul> */}

        {/* client side components */}
        <div className="mt-5">
          <h2>client side component Api calling</h2>
          <div>
            {student?.map((item, index) => (
              <>
                <h1 key={index}>
                  UserName:
                  {item.username}
                </h1>
                <h2 key={index} className="font-bold">
                  City:{item.address.city}
                </h2>
              </>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default StudentList;
