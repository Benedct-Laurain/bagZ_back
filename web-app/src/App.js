import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import Home from './screens/Home';
import Partners from './screens/Partners';
import Student from './screens/Student';
import Volunteer from './screens/Volunteer';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/student' element={<Student/>} />
        <Route path='/volunteer' element={<Volunteer/>} />
        <Route path='/partners' element={<Partners />} />
      </Routes>
    </div>
  );
}

export default App;
