import { ProjectData } from '../types/firebaseDB.types';

type MockProjectData = {
  [key: string]: {
    projects: ProjectData[];
  };
};

export const mockProjectData: MockProjectData = {
  K9RQaKu1znT3CcIi7qkWFCkZBkh2: {
    projects: [
      {
        id: '09be8ab7-ae86-4b95-85c3-adcad1cd4d6b',
        title: 'Client Review & Feedback',
        subtitle: 'Crypto Wallet Redesign',
        date: new Date('2024-12-05'),
        goal: 0,
        status: { name: 'open' },
        tasks: [
          {
            id: '6db1130f-d5c2-45a6-8d71-43d1001a16b5',
            name: 'See client',
            isDone: false,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            isDone: true,
          },
          {
            id: '16480136-5199-4098-8fe7-dc78288d6e93',
            name: "Livraison d'une r7",
            isDone: false,
          },
          {
            id: 'b91aa0c3-df29-4f76-a2ba-fdff7720a360',
            name: 'See client',
            isDone: true,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            isDone: false,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            isDone: false,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            isDone: true,
          },
        ],
      },
      {
        id: 'c1ad9a19-c29f-4caa-91bc-f8ca2f5f292d',
        title: 'Git init',
        subtitle: 'initial repo project',
        date: new Date('2023-12-15'),
        goal: 10,
        status: { name: 'todo' },
        tasks: [
          {
            id: '6db1130f-d5c2-45a6-8d71-43d1001a16b5',
            name: 'See client',
            isDone: false,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            isDone: true,
          },
          {
            id: '16480136-5199-4098-8fe7-dc78288d6e93',
            name: "Livraison d'une r7",
            isDone: false,
          },
          {
            id: 'b91aa0c3-df29-4f76-a2ba-fdff7720a360',
            name: 'See client',
            isDone: true,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            isDone: false,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            isDone: false,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            isDone: true,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            isDone: false,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            isDone: false,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            isDone: true,
          },
        ],
      },
      {
        id: '1548a515-bc22-4857-a096-9f892c79d513',
        title: 'React Native Application',
        subtitle: 'Trello Copy',
        date: new Date('2022-12-04'),
        goal: 22,
        status: { name: 'open' },
        tasks: [
          {
            id: '6db1130f-d5c2-45a6-8d71-43d1001a16b5',
            name: 'See client',
            isDone: false,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            isDone: true,
          },
          {
            id: '16480136-5199-4098-8fe7-dc78288d6e93',
            name: "Livraison d'une r7",
            isDone: false,
          },
          {
            id: 'b91aa0c3-df29-4f76-a2ba-fdff7720a360',
            name: 'See client',
            isDone: true,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            isDone: false,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            isDone: false,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            isDone: true,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            isDone: false,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            isDone: false,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            isDone: true,
          },
        ],
      },
      {
        id: '759b6c9b-d854-4559-8ddd-b7c70d16b5a6',
        title: 'Un Rêve Arrive Bientôt',
        subtitle: 'MT09 À Récupérer',
        date: new Date('2022-12-20'),
        goal: 90,
        status: {
          name: 'so close',
          iconName: 'rocket-outline',
          color: '#00ccff',
        },
        tasks: [
          {
            id: '6db1130f-d5c2-45a6-8d71-43d1001a16b5',
            name: 'See client',
            isDone: false,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            isDone: true,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            isDone: true,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            isDone: true,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            isDone: true,
          },
          {
            id: '16480136-5199-4098-8fe7-dc78288d6e93',
            name: "Livraison d'une r7",
            isDone: false,
          },
          {
            id: 'b91aa0c3-df29-4f76-a2ba-fdff7720a360',
            name: 'See client',
            isDone: true,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            isDone: false,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            isDone: false,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            isDone: true,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            isDone: false,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            isDone: false,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            isDone: true,
          },
        ],
      },
      {
        id: '3942554c-5f86-487f-9742-339c89cdaac3',
        title: 'Client Review & Feedback',
        subtitle: 'Crypto Wallet Redesign',
        date: new Date('2022-11-29'),
        goal: 100,
        status: { name: 'close' },
        tasks: [
          {
            id: '6db1130f-d5c2-45a6-8d71-43d1001a16b5',
            name: 'See client',
            isDone: true,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            isDone: true,
          },
          {
            id: '16480136-5199-4098-8fe7-dc78288d6e93',
            name: "Livraison d'une r7",
            isDone: true,
          },
          {
            id: 'b91aa0c3-df29-4f76-a2ba-fdff7720a360',
            name: 'See client',
            isDone: true,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            isDone: true,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            isDone: true,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            isDone: true,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            isDone: true,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            isDone: true,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            isDone: true,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            isDone: true,
          },
        ],
      },
      {
        id: 'f202c2d9-c026-4a4a-aa9d-b18eae9b910e',
        title: 'Client Review & Feedback',
        subtitle: 'Crypto Wallet Redesign',
        date: new Date('2022-11-16'),
        goal: 100,
        status: { name: 'close' },
        tasks: [
          {
            id: '6db1130f-d5c2-45a6-8d71-43d1001a16b5',
            name: 'See client',
            isDone: false,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            isDone: true,
          },
          {
            id: '16480136-5199-4098-8fe7-dc78288d6e93',
            name: "Livraison d'une r7",
            isDone: false,
          },
          {
            id: 'b91aa0c3-df29-4f76-a2ba-fdff7720a360',
            name: 'See client',
            isDone: true,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            isDone: false,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            isDone: false,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            isDone: true,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            isDone: true,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            isDone: true,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            isDone: false,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            isDone: false,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            isDone: true,
          },
        ],
      },
      {
        id: 'b83a7684-6780-4103-887e-f7b1c5dcfb6b',
        title: 'Client Review & Feedback',
        subtitle: 'Crypto Wallet Redesign',
        date: new Date('2022-11-09'),
        goal: 100,
        status: { name: 'close' },
      },
    ],
  },
};
