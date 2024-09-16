'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
  return !text.title || text.title.trim() === '';
}

export async function shareMeal(preveState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input',
    };
  }

  await saveMeal(meal);
  // nextjs가 해당 페이지에 연관된 캐싱된 캐시들을 비움
  revalidatePath('/meals', 'page'); // 디폴트 값으로 '/meals' 페이지만 유효성을 재검사한다는 뜻
  // revalidatePath('/meals', 'layout'); // layout로해두면 중첩된 모든 페이지를 재검사함
  redirect('/meals');
}
