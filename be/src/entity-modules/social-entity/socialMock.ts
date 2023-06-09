import { Social } from './social';
import { actionMock } from '../action-entity/action.mock';

export const socialMock: Social[] = [
  {
    id: 1,
    name: 'Spotify',
    createdAt: '2023-05-08T21:41:05Z',
    updatedAt: '2023-05-08T21:41:05Z',
    actions: [actionMock[0], actionMock[1]],
  },
  {
    id: 2,
    name: 'Twitter',
    createdAt: '2023-05-08T21:41:05Z',
    updatedAt: '2023-05-08T21:41:05Z',
    actions: [actionMock[2]],
  },
];
