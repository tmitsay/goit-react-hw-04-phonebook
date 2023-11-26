import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './contactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameIdInput = nanoid();
  const numberIdInput = nanoid();

  const handlerSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  return (
    <form className={css.form} onSubmit={handlerSubmit}>
      <label className={css.label} htmlFor={nameIdInput}>
        Name
        <input
          className={css.input_form}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label} htmlFor={numberIdInput}>
        Number
        <input
          className={css.input_form}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
