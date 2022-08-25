import PropTypes from 'prop-types';

const Options = (props) => {

    const handleForm = (ev) => {

        ev.preventDefault();
        const word = ev.target.value;
        props.setWord(word);
    }

    return (
        <form>
            <label className="title" htmlFor="word">
                Escribe aquí la palabra que hay que adivinar:
            </label>
            <input
                autoFocus
                autoComplete="off"
                className="form__input"
                maxLength="15"
                type="text"
                id="word"
                name="word"
                onChange={handleForm}

            />
        </form>)
};

Options.propType = {
    setWord: PropTypes.func,

}

export default Options;