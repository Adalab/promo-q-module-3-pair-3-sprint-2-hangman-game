import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import '../styles/Dummy.scss';
import '../styles/Letters.scss';
import '../styles/Form.scss';
import '../styles/Header.scss';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Instructions from './Instructions';
import Options from './Options';
import Loading from './Loading';


function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setIsLoading(false);
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
  const handleForm = (word) => {
    setWord(word);
  }

  // Loading 

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='page'>
      <Routes>

        <Route path="/" element={
          <>
            <Loading isLoading={isLoading} />
            <Header />
            <Main
              word={word}
              userLetters={userLetters}
              lastLetter={lastLetter}
              handleChange={handleChange}
              numberOfErrors={getNumberOfErrors}
            />
            <Footer />
          </>}></Route>
        <Route path="/instructions" element={<><Instructions /><Dummy /><Footer /></>}></Route>
        <Route path="/options" element={<><Options setWord={setWord} handleForm={handleForm} /><Dummy /><Footer /></>}></Route>
      </Routes>



    </div >
  );
}

export default App;
