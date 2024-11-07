import { Question } from '../types/game';

export const questions: Question[] = [
  {
    id: '1',
    text: 'Name something you bring to the beach',
    category: 'Activities',
    difficulty: 'easy',
    answers: [
      { text: 'Sunscreen', points: 35, isRevealed: false },
      { text: 'Towel', points: 25, isRevealed: false },
      { text: 'Umbrella', points: 15, isRevealed: false },
      { text: 'Cooler', points: 10, isRevealed: false },
      { text: 'Beach Toys', points: 8, isRevealed: false },
      { text: 'Chair', points: 7, isRevealed: false },
    ],
  },
  {
    id: '2',
    text: 'Name a popular pizza topping',
    category: 'Food',
    difficulty: 'easy',
    answers: [
      { text: 'Pepperoni', points: 40, isRevealed: false },
      { text: 'Cheese', points: 30, isRevealed: false },
      { text: 'Mushrooms', points: 15, isRevealed: false },
      { text: 'Onions', points: 8, isRevealed: false },
      { text: 'Bell Peppers', points: 7, isRevealed: false },
    ],
  },
  // Add more questions as needed
]; 