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
        status: { name: 'open', iconName: 'ellipse-outline', color: '#777380' },
        tasks: [
          {
            id: '6db1130f-d5c2-45a6-8d71-43d1001a16b5',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'Review',
              iconName: 'search-circle-outline',
              color: '#cc0000',
            },
            isDone: true,
            dateTarget: new Date(),
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'close',
              iconName: 'checkmark-circle-outline',
              color: '#5b9e42',
            },
            isDone: true,
            dateTarget: new Date(),
          },
          {
            id: '16480136-5199-4098-8fe7-dc78288d6e93',
            name: "Livraison d'une r7",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'todo',
              iconName: 'timer-outline',
              color: '#FFB41F',
            },
            isDone: false,
            dateTarget: new Date(),
          },
          {
            id: 'b91aa0c3-df29-4f76-a2ba-fdff7720a360',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
        ],
      },
      {
        id: 'c1ad9a19-c29f-4caa-91bc-f8ca2f5f292d',
        title: 'Git init',
        subtitle: 'initial repo project',
        date: new Date('2023-12-15'),
        goal: 10,
        status: {
          name: 'todo',
          iconName: 'timer-outline',
          color: '#FFB41F',
        },
        tasks: [
          {
            id: '6db1130f-d5c2-45a6-8d71-43d1001a16b5',
            name: 'On va en finir',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '16480136-5199-4098-8fe7-dc78288d6e93',
            name: "Livraison d'une r7",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: 'b91aa0c3-df29-4f76-a2ba-fdff7720a360',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
        ],
      },
      {
        id: '1548a515-bc22-4857-a096-9f892c79d513',
        title: 'React Native Application',
        subtitle: 'Trello Copy',
        date: new Date('2022-12-04'),
        goal: 22,
        status: { name: 'open', iconName: 'ellipse-outline', color: '#777380' },
        tasks: [
          {
            id: '6db1130f-d5c2-45a6-8d71-43d1001a16b5',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '16480136-5199-4098-8fe7-dc78288d6e93',
            name: "Livraison d'une r7",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: 'b91aa0c3-df29-4f76-a2ba-fdff7720a360',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
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
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'todo',
              iconName: 'timer-outline',
              color: '#FFB41F',
            },
            isDone: false,
            dateTarget: new Date(),
          },
          {
            id: '8de0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'close',
              iconName: 'checkmark-circle-outline',
              color: '#5b9e42',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'close',
              iconName: 'checkmark-circle-outline',
              color: '#5b9e42',
            },
            isDone: true,
            dateTarget: new Date('2022-11-28'),
          },
          {
            id: '8gh0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '8dgj185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '16480136-5199-4098-8fe7-dc78288d6e93',
            name: "Livraison d'une r7",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: 'b91aa0c3-df29-4f76-a2ba-fdff7720a360',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
        ],
      },
      {
        id: '3942554c-5f86-487f-9742-339c89cdaac3',
        title: 'Client Review & Feedback',
        subtitle: 'Crypto Wallet Redesign',
        date: new Date('2022-11-29'),
        goal: 100,
        status: {
          name: 'close',
          iconName: 'checkmark-circle-outline',
          color: '#5b9e42',
        },
        tasks: [
          {
            id: '6db1130f-d5c2-45a6-8d71-43d1001a16b5',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '16480136-5199-4098-8fe7-dc78288d6e93',
            name: "Livraison d'une r7",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: 'b91aa0c3-df29-4f76-a2ba-fdff7720a360',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
        ],
      },
      {
        id: 'f202c2d9-c026-4a4a-aa9d-b18eae9b910e',
        title: 'Client Review & Feedback',
        subtitle: 'Crypto Wallet Redesign',
        date: new Date('2022-11-16'),
        goal: 100,
        status: {
          name: 'close',
          iconName: 'checkmark-circle-outline',
          color: '#5b9e42',
        },
        tasks: [
          {
            id: '6db1130f-d5c2-45a6-8d71-43d1001a16b5',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '8db0185e-f507-4015-b9c7-05ceee545e97',
            name: 'Attendre le Drakkar intrépide dans la tour',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '16480136-5199-4098-8fe7-dc78288d6e93',
            name: "Livraison d'une r7",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: 'b91aa0c3-df29-4f76-a2ba-fdff7720a360',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
          {
            id: '3b7e19b1-8978-44be-9bb7-3cfdfdcded6c',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '97466012-7eb6-4b0e-8368-4057a41d2eb1',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: false,
            dateTarget: null,
          },
          {
            id: '841ee9f9-83a9-4c24-9272-8f18a9800eef',
            name: 'See client',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: {
              name: 'open',
              iconName: 'ellipse-outline',
              color: '#777380',
            },
            isDone: true,
            dateTarget: null,
          },
        ],
      },
      {
        id: 'b83a7684-6780-4103-887e-f7b1c5dcfb6b',
        title: 'Client Review & Feedback',
        subtitle: 'Crypto Wallet Redesign',
        date: new Date('2022-11-09'),
        goal: 100,
        status: {
          name: 'close',
          iconName: 'checkmark-circle-outline',
          color: '#5b9e42',
        },
      },
    ],
  },
};
