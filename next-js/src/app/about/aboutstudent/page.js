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
    <div className="container mt-4">
      <h1>About Page for Student</h1>
      {student.users?.map((item, index) => (
        <>
          <p key={index}>Id: {item.id}</p>
          <p>UserName: {item.username}</p>

          {/* client side rendering */}
          <UserDetail Age={item.age} />
        </>
      ))}
    </div>
  );
};

// add meta data in about page
export function generateMetadata() {
  return {
    title: "student page",
    description: "Student page description ",
  };
}

export default AboutStudent;
