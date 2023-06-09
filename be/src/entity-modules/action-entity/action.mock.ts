import { Action } from './action.entity';
import { actionParamMock } from '../action-param-entity/action-param.mock';

export const actionMock: Action[] = [
  {
    id: 1,
    name: 'Listen to a song',
    // Spotify
    socialId: 1,
    createdAt: '2023-05-08T21:41:05Z',
    updatedAt: '2023-05-08T21:41:05Z',
    actionParams: [actionParamMock[0], actionParamMock[1]],
  },
  {
    id: 2,
    name: 'Listen to a whole album',
    // Spotify
    socialId: 1,
    createdAt: '2023-05-08T21:41:05Z',
    updatedAt: '2023-05-08T21:41:05Z',
    actionParams: [actionParamMock[0], actionParamMock[1]],
  },
  {
    id: 3,
    name: 'Follow on Twitter',
    // Twitter
    socialId: 2,
    createdAt: '2023-05-08T21:41:05Z',
    updatedAt: '2023-05-08T21:41:05Z',
    actionParams: [actionParamMock[3]],
  },
];
