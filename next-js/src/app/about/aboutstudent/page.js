import UserDetail from "./components/UserDetail";

/* --------------------- Server side rendering componets -------------------- */
const studentlist = async () => {
  let data = await fetch("https://dummyjson.com/users");
  const studentData = data.json();

  return studentData;
};

const AboutStudent = async () => {
  let student = await studentlist();
  // console.log(student, "student");
  return (
    <div>
      <h1>About Page for Student</h1>
      {student.users?.map((item, index) => (
        <>
          <p key={index}>UserName: {item.username}</p>
          {/* client side rendering */}
          <UserDetail Age={item.age} />
        </>
      ))}
    </div>
  );
};

export function generateMetadata() {
  return {
    title: "student page",
    description: "Student page description ",
  };
}

export default AboutStudent;
