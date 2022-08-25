import { useEffect, useState } from 'react';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import '../styles/Dummy.scss';
import '../styles/Letters.scss';
import '../styles/Form.scss';
import '../styles/Header.scss';
 import Header from './Header';
/*import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form'; */
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';


function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };
  const handleChange = (ev) => {
    let re = /[a-zA-Z]/; //add regular pattern - lesson 3.3 exercise 2
    if (re.test(ev.target.value)) {
      handleLastLetter(ev.target.value);
    }
  };

  return (
    <div className='page'>
      <Routes>
        <Route path="/" element={<Header />}  /> */
        <Route path="/instructions" element={<Main
          word={word}
          userLetters={userLetters}
          lastLetter={lastLetter}
          handleChange={handleChange}
          numberOfErrors={getNumberOfErrors}
        />}/>
       </Routes>    
          
      <Footer/>
     
    </div>
  );
}

export default App;
