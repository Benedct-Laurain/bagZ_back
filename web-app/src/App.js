import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import Home from './screens/Home';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/recettes' element={<Recettes/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
