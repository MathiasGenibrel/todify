import { CardProps } from '../components/Project/Card/Card';

export const mockProjectData: CardProps[] = [
  {
    title: 'Client Review & Feedback',
    subtitle: 'Crypto Wallet Redesign',
    date: new Date('2024-12-05'),
    goal: 0,
    status: { name: 'open' },
  },
  {
    title: 'Client Review & Feedback',
    subtitle: 'Crypto Wallet Redesign',
    date: new Date('2023-12-15'),
    goal: 58,
    status: { name: 'todo' },
  },
  {
    title: 'React Native Application',
    subtitle: 'Trello Copy',
    date: new Date('2022-12-04'),
    goal: 22,
    status: { name: 'open' },
  },
  {
    title: 'Un Rêve Arrive Bientôt',
    subtitle: 'MT09 À Récupérer',
    date: new Date('2022-12-20'),
    goal: 90,
    status: { name: 'so close', iconName: 'rocket-outline', color: '#00ccff' },
  },
  {
    title: 'Client Review & Feedback',
    subtitle: 'Crypto Wallet Redesign',
    date: new Date('2022-11-29'),
    goal: 100,
    status: { name: 'close' },
  },
  {
    title: 'Client Review & Feedback',
    subtitle: 'Crypto Wallet Redesign',
    date: new Date('2022-11-16'),
    goal: 100,
    status: { name: 'close' },
  },
  {
    title: 'Client Review & Feedback',
    subtitle: 'Crypto Wallet Redesign',
    date: new Date('2022-11-09'),
    goal: 100,
    status: { name: 'close' },
  },
];
