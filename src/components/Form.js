import PropTypes from 'prop-types';

function Form(props) {

    const handleSubmit = (ev) => {
        ev.preventDefault();
    };
    const handleKeyDown = (ev) => {
        ev.target.setSelectionRange(0, 1);
    };

    return (<form className='form' onSubmit={handleSubmit}>
        <label className='title' htmlFor='last-letter'>
            Escribe una letra:
        </label>
        <input
            autoFocus
            autoComplete='off'
            className='form__input'
            maxLength='1'
            type='text'
            name='last-letter'
            id='last-letter'
            value={props.lastLetter}
            onKeyDown={handleKeyDown}
            onChange={props.handleChange}
        />
    </form>)
}

Form.propTypes = {
    lastLetter: PropTypes.string,
    handleChange: PropTypes.func,
}

export default Form;