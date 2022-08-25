import SolutionLetters from "./SolutionLetters";
import ErrorLetters from "./ErrorLetters";
import Form from './Form';
import Dummy from './Dummy'

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

export default Main;