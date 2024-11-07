import { Question } from '../types/game';

// Function to parse and format questions from train.jsonl
function parseTrainData(jsonlData: string): Question[] {
  // Split the file into lines and parse each line
  const questions = jsonlData
    .split('\n')
    .filter(line => line.trim())
    .map(line => {
      try {
        const data = JSON.parse(line);
        
        // Format answers into our Question type structure
        const answers = Object.entries(data.answers.raw)
          .map(([text, count]) => ({
            text,
            points: typeof count === 'number' ? count : 0,
            isRevealed: false
          }))
          .sort((a, b) => b.points - a.points); // Sort by points in descending order

        return {
          id: data.metadata.id,
          text: data.question.original,
          category: 'General', // You can add categories if needed
          difficulty: 'medium' as const,
          answers
        };
      } catch (e) {
        console.error('Error parsing question:', e);
        return null;
      }
    })
    .filter(q => q !== null) as Question[];

  return questions;
}

// For now, let's create some sample questions
export const questions: Question[] = [
  {
    id: '1',
    text: 'Name something that might protect you from sun at the beach',
    category: 'Beach',
    difficulty: 'easy',
    answers: [
      { text: 'Umbrella', points: 38, isRevealed: false },
      { text: 'Sunscreen', points: 36, isRevealed: false },
      { text: 'Sun Hat', points: 14, isRevealed: false },
      { text: 'Sunglasses', points: 5, isRevealed: false },
      { text: 'Cover Up', points: 3, isRevealed: false },
      { text: 'Shade', points: 3, isRevealed: false },
    ],
  },
  {
    id: '2',
    text: 'After a week of camping, what luxury of home are you most excited to have again?',
    category: 'Home',
    difficulty: 'easy',
    answers: [
      { text: 'Bed', points: 35, isRevealed: false },
      { text: 'Shower', points: 25, isRevealed: false },
      { text: 'TV', points: 13, isRevealed: false },
      { text: 'Toilet', points: 11, isRevealed: false },
      { text: 'Electricity', points: 4, isRevealed: false },
      { text: 'Air Conditioner', points: 4, isRevealed: false },
    ],
  },
  // Add more questions as needed
];

// Function to get a random question
export function getRandomQuestion(): Question {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Function to get multiple random questions
export function getRandomQuestions(count: number): Question[] {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}