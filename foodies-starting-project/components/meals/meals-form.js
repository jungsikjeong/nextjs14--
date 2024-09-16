'use client';

import classes from './meals-form.module.css';

import { shareMeal } from '@/lib/actions';
import ImagePicker from './image-picker';
import MealsFormSubmit from './meals-form.submit';

export default function MealsForm() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    // 서버 액션에 formData 전달
    await shareMeal(formData);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.row}>
        <p>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' name='name' required />
        </p>
        <p>
          <label htmlFor='email'>Your email</label>
          <input type='email' id='email' name='email' required />
        </p>
      </div>
      <p>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' required />
      </p>
      <p>
        <label htmlFor='summary'>Short Summary</label>
        <input type='text' id='summary' name='summary' required />
      </p>
      <p>
        <label htmlFor='instructions'>Instructions</label>
        <textarea
          id='instructions'
          name='instructions'
          rows='10'
          required
        ></textarea>
      </p>

      <ImagePicker label='Your image' name='image' />

      <p className={classes.actions}>
        <MealsFormSubmit />
      </p>
    </form>
  );
}
