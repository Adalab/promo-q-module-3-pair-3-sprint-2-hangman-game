import SolutionLetters from "./SolutionLetters";
import ErrorLetters from "./ErrorLetters";
import Form from './Form';
import Dummy from './Dummy'
import PropTypes from 'prop-types';

const Main = (props) => {
  return (
    <main className='main'>
      <section>
        <SolutionLetters
          word={props.word}
          userLetters={props.userLetters}
        />
        <ErrorLetters userLetters={props.userLetters}
          word={props.word} />

        <Form lastLetter={props.lastLetter} handleChange={props.handleChange} />
      </section>
      <Dummy numberOfErrors={props.getNumberOfErrors} />

    </main>
  )
}

Main.propTypes = {
  word: PropTypes.string,
  userLetters: PropTypes.array,
  lastLetter: PropTypes.string,
  handleChange: PropTypes.func,
  getNumberOfErrors: PropTypes.func,

}


export default Main;