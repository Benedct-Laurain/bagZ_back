import { useEffect, useState } from "react";

import Loader from "../components/Loader";
import { fetchStudents } from "../services/restStudents";


const Home = () => {
const [students, setStudents] = useState(null);
const [isLoading, setIsLoading] = useState(true); 
const [errorMessage, setErrorMessage] = useState(''); 

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchStudents(); 
        setStudents(response);
      } catch (error) {
        setErrorMessage(error.message); 
      } finally {
        setIsLoading(false); 
      }
    })(); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const renderMainContent = () => {
    if (isLoading) {
      return <Loader />;
    } 
    if (errorMessage) {
      return errorMessage; 
    }
    if (!students?.length) {
      return "pas d'étudiants"
    }
    return (
      <div>
        {students?.map((student) => <p key={student.firstName} className={{color: '#000'}}>{student.firstName}</p>)}
      </div>
    )
  }

  return (
  <> 
    {renderMainContent()}
  </>
  )
}

export default Home;