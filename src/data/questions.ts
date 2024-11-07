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
    {
      id: '3',
      text: 'Name a place where you have to wait in line.',
      category: 'General',
      difficulty: 'easy',
      answers: [
        { text: 'Supermarket', points: 30, isRevealed: false },
        { text: "Doctor's office", points: 25, isRevealed: false },
        { text: 'Bank', points: 20, isRevealed: false },
        { text: 'Post office', points: 15, isRevealed: false },
        { text: 'Airport', points: 8, isRevealed: false },
        { text: 'Theme Park', points: 2, isRevealed: false },
      ],
    },
    {
      id: '4',
      text: 'Name something you might do on a first date.',
      category: 'Dating',
      difficulty: 'easy',
      answers: [
        { text: 'Go to a café', points: 32, isRevealed: false },
        { text: 'Go for dinner', points: 25, isRevealed: false },
        { text: 'Go for a walk', points: 20, isRevealed: false },
        { text: 'Watch a movie', points: 12, isRevealed: false },
        { text: 'Go to a museum', points: 8, isRevealed: false },
        { text: 'Mini golf', points: 3, isRevealed: false },
      ],
    },
    {
      id: '5',
      text: 'Name something you associate with vampires.',
      category: 'Horror',
      difficulty: 'easy',
      answers: [
        { text: 'Fangs', points: 35, isRevealed: false },
        { text: 'Blood', points: 30, isRevealed: false },
        { text: 'Dracula', points: 15, isRevealed: false },
        { text: 'Garlic', points: 10, isRevealed: false },
        { text: 'Coffin', points: 7, isRevealed: false },
        { text: 'Bat', points: 3, isRevealed: false },
      ],
    },
    {
      id: '6',
      text: 'Name a European country that people often dream of visiting.',
      category: 'Travel',
      difficulty: 'easy',
      answers: [
        { text: 'Italy', points: 30, isRevealed: false },
        { text: 'France', points: 25, isRevealed: false },
        { text: 'Greece', points: 20, isRevealed: false },
        { text: 'Spain', points: 12, isRevealed: false },
        { text: 'Switzerland', points: 8, isRevealed: false },
        { text: 'Germany', points: 5, isRevealed: false },
      ],
    },
    {
      id: '7',
      text: 'Name a way people try to relieve stress.',
      category: 'Lifestyle',
      difficulty: 'easy',
      answers: [
        { text: 'Exercise', points: 30, isRevealed: false },
        { text: 'Take a walk', points: 25, isRevealed: false },
        { text: 'Listen to music', points: 20, isRevealed: false },
        { text: 'Read a book', points: 12, isRevealed: false },
        { text: 'Meditation', points: 8, isRevealed: false },
        { text: 'Watch TV', points: 5, isRevealed: false },
      ],
    },
    {
      id: '8',
      text: 'Name something you would bring to the beach.',
      category: 'Beach',
      difficulty: 'easy',
      answers: [
        { text: 'Towel', points: 35, isRevealed: false },
        { text: 'Sunscreen', points: 25, isRevealed: false },
        { text: 'Beach Chair', points: 15, isRevealed: false },
        { text: 'Cooler', points: 12, isRevealed: false },
        { text: 'Beach Toys', points: 8, isRevealed: false },
        { text: 'Book', points: 5, isRevealed: false },
      ],
    },
    {
      id: '9',
      text: 'Name a common breakfast food.',
      category: 'Food',
      difficulty: 'easy',
      answers: [
        { text: 'Eggs', points: 32, isRevealed: false },
        { text: 'Toast', points: 25, isRevealed: false },
        { text: 'Cereal', points: 20, isRevealed: false },
        { text: 'Bacon', points: 12, isRevealed: false },
        { text: 'Pancakes', points: 8, isRevealed: false },
        { text: 'Oatmeal', points: 3, isRevealed: false },
      ],
    },
    {
      id: '10',
      text: 'Name something you do to prepare for a job interview.',
      category: 'Career',
      difficulty: 'easy',
      answers: [
        { text: 'Research Company', points: 30, isRevealed: false },
        { text: 'Iron Clothes', points: 25, isRevealed: false },
        { text: 'Practice Questions', points: 20, isRevealed: false },
        { text: 'Print Resume', points: 12, isRevealed: false },
        { text: 'Get Haircut', points: 8, isRevealed: false },
        { text: 'Plan Route', points: 5, isRevealed: false },
      ],
    },
    {
      id: '11',
      text: 'Name something you might find in a kitchen drawer.',
      category: 'Home',
      difficulty: 'easy',
      answers: [
        { text: 'Utensils', points: 35, isRevealed: false },
        { text: 'Can Opener', points: 25, isRevealed: false },
        { text: 'Scissors', points: 15, isRevealed: false },
        { text: 'Dish Towels', points: 12, isRevealed: false },
        { text: 'Measuring Spoons', points: 8, isRevealed: false },
        { text: 'Rubber Bands', points: 5, isRevealed: false },
      ],
    },
    {
      id: '12',
      text: 'Name a popular superhero.',
      category: 'Entertainment',
      difficulty: 'easy',
      answers: [
        { text: 'Spider-Man', points: 30, isRevealed: false },
        { text: 'Batman', points: 25, isRevealed: false },
        { text: 'Superman', points: 20, isRevealed: false },
        { text: 'Iron Man', points: 12, isRevealed: false },
        { text: 'Wonder Woman', points: 8, isRevealed: false },
        { text: 'Captain America', points: 5, isRevealed: false },
      ],
    },
    {
      id: '13',
      text: 'Name something you might buy at a gas station.',
      category: 'Shopping',
      difficulty: 'easy',
      answers: [
        { text: 'Gas', points: 35, isRevealed: false },
        { text: 'Snacks', points: 25, isRevealed: false },
        { text: 'Drinks', points: 15, isRevealed: false },
        { text: 'Cigarettes', points: 12, isRevealed: false },
        { text: 'Ice', points: 8, isRevealed: false },
        { text: 'Lottery Tickets', points: 5, isRevealed: false },
      ],
    },
    {
      id: '14',
      text: 'Name a common reason for being late to work.',
      category: 'Work',
      difficulty: 'easy',
      answers: [
        { text: 'Traffic', points: 35, isRevealed: false },
        { text: 'Overslept', points: 25, isRevealed: false },
        { text: 'Car Problems', points: 15, isRevealed: false },
        { text: 'Weather', points: 12, isRevealed: false },
        { text: 'Public Transport', points: 8, isRevealed: false },
        { text: 'Lost Keys', points: 5, isRevealed: false },
      ],
    },
    {
      id: '15',
      text: 'Name something people collect as a hobby.',
      category: 'Hobbies',
      difficulty: 'easy',
      answers: [
        { text: 'Stamps', points: 30, isRevealed: false },
        { text: 'Coins', points: 25, isRevealed: false },
        { text: 'Comics', points: 20, isRevealed: false },
        { text: 'Baseball Cards', points: 12, isRevealed: false },
        { text: 'Action Figures', points: 8, isRevealed: false },
        { text: 'Rocks', points: 5, isRevealed: false },
      ],
    },
    {
      id: '16',
      text: 'Name something you might find in a hospital.',
      category: 'Medical',
      difficulty: 'easy',
      answers: [
        { text: 'Doctors', points: 30, isRevealed: false },
        { text: 'Nurses', points: 25, isRevealed: false },
        { text: 'Beds', points: 20, isRevealed: false },
        { text: 'Wheelchairs', points: 12, isRevealed: false },
        { text: 'Medicine', points: 8, isRevealed: false },
        { text: 'Waiting Room', points: 5, isRevealed: false },
      ],
    },
    {
      id: '17',
      text: 'Name a common wedding tradition.',
      category: 'Weddings',
      difficulty: 'easy',
      answers: [
        { text: 'Throwing Bouquet', points: 32, isRevealed: false },
        { text: 'First Dance', points: 25, isRevealed: false },
        { text: 'Cutting Cake', points: 20, isRevealed: false },
        { text: 'Something Blue', points: 12, isRevealed: false },
        { text: 'Rice Throwing', points: 8, isRevealed: false },
        { text: 'Garter Toss', points: 3, isRevealed: false },
      ],
    },
    {
      id: '18',
      text: 'Name something you might find in a school classroom.',
      category: 'Education',
      difficulty: 'easy',
      answers: [
        { text: 'Desks', points: 30, isRevealed: false },
        { text: 'Whiteboard', points: 25, isRevealed: false },
        { text: 'Books', points: 20, isRevealed: false },
        { text: 'Pencils', points: 12, isRevealed: false },
        { text: 'Clock', points: 8, isRevealed: false },
        { text: 'Globe', points: 5, isRevealed: false },
      ],
    },
    {
      id: '19',
      text: `Name a common New Year's resolution.`,
      category: 'Lifestyle',
      difficulty: 'easy',
      answers: [
        { text: 'Lose Weight', points: 35, isRevealed: false },
        { text: 'Exercise More', points: 25, isRevealed: false },
        { text: 'Save Money', points: 15, isRevealed: false },
        { text: 'Quit Smoking', points: 12, isRevealed: false },
        { text: 'Learn Something', points: 8, isRevealed: false },
        { text: 'Travel More', points: 5, isRevealed: false },
      ],
    },
    {
      id: '20',
      text: 'Name something you might find in a garden.',
      category: 'Outdoors',
      difficulty: 'easy',
      answers: [
        { text: 'Flowers', points: 32, isRevealed: false },
        { text: 'Plants', points: 25, isRevealed: false },
        { text: 'Birds', points: 18, isRevealed: false },
        { text: 'Bench', points: 12, isRevealed: false },
        { text: 'Fountain', points: 8, isRevealed: false },
        { text: 'Gnome', points: 5, isRevealed: false },
      ],
    },
    {
      id: '21',
      text: 'Name something people do at the gym.',
      category: 'Fitness',
      difficulty: 'easy',
      answers: [
        { text: 'Lift Weights', points: 30, isRevealed: false },
        { text: 'Run', points: 25, isRevealed: false },
        { text: 'Yoga', points: 20, isRevealed: false },
        { text: 'Cycling', points: 12, isRevealed: false },
        { text: 'Swimming', points: 8, isRevealed: false },
        { text: 'Stretching', points: 5, isRevealed: false },
      ],
    },
    {
      id: '22',
      text: 'Name something you might find at a birthday party.',
      category: 'Celebrations',
      difficulty: 'easy',
      answers: [
        { text: 'Cake', points: 35, isRevealed: false },
        { text: 'Presents', points: 25, isRevealed: false },
        { text: 'Balloons', points: 15, isRevealed: false },
        { text: 'Games', points: 12, isRevealed: false },
        { text: 'Party Hats', points: 8, isRevealed: false },
        { text: 'Candles', points: 5, isRevealed: false },
      ],
    },
    {
      id: '23',
      text: 'Name something you might see at the zoo.',
      category: 'Animals',
      difficulty: 'easy',
      answers: [
        { text: 'Lions', points: 30, isRevealed: false },
        { text: 'Monkeys', points: 25, isRevealed: false },
        { text: 'Elephants', points: 20, isRevealed: false },
        { text: 'Giraffes', points: 12, isRevealed: false },
        { text: 'Penguins', points: 8, isRevealed: false },
        { text: 'Zebras', points: 5, isRevealed: false },
      ],
    },
    {
      id: '24',
      text: 'Name something you take on a camping trip.',
      category: 'Outdoors',
      difficulty: 'easy',
      answers: [
        { text: 'Tent', points: 35, isRevealed: false },
        { text: 'Sleeping Bag', points: 25, isRevealed: false },
        { text: 'Flashlight', points: 15, isRevealed: false },
        { text: 'Food', points: 12, isRevealed: false },
        { text: 'First Aid Kit', points: 8, isRevealed: false },
        { text: 'Matches', points: 5, isRevealed: false },
      ],
    },
    {
      id: '25',
      text: 'Name something you might find in a movie theater.',
      category: 'Entertainment',
      difficulty: 'easy',
      answers: [
        { text: 'Popcorn', points: 32, isRevealed: false },
        { text: 'Seats', points: 25, isRevealed: false },
        { text: 'Screen', points: 20, isRevealed: false },
        { text: 'Drinks', points: 12, isRevealed: false },
        { text: 'Candy', points: 8, isRevealed: false },
        { text: 'Tickets', points: 3, isRevealed: false },
      ],
    },
    {
      id: '26',
      text: 'Name something that makes noise in the morning.',
      category: 'Daily Life',
      difficulty: 'easy',
      answers: [
        { text: 'Alarm Clock', points: 35, isRevealed: false },
        { text: 'Birds', points: 25, isRevealed: false },
        { text: 'Coffee Maker', points: 15, isRevealed: false },
        { text: 'Radio', points: 12, isRevealed: false },
        { text: 'Alarm', points: 8, isRevealed: false },
        { text: 'Clock', points: 5, isRevealed: false },
      ],
    },
]

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