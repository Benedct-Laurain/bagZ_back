import { useEffect, useState } from "react";
import Loader from "../components/Loader";


const Home = () => {
const [students, setStudents] = useState(null);
const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/students'); 
      const data= await response.json(); 
      setStudents(data); 
      console.log(students); 
      setIsLoading(false); 
    })(); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 


  return (
  <div> 
    {isLoading? (
        <Loader />
    ):(
      <div>
      {students.length > 0 ? 
      (students.map((student) => <p key={student.firstName} className={{color: '#000'}}>{student.firstName}</p>
      )):(
      <p>"pas d'étudiants"</p>
      )}
      </div>
      )
    }
  </div>
  )
}

export default Home;