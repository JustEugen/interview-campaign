import { socialMock } from './socialMock';
import { Social } from './social';

export class SocialRepository {
  static retrieveAll = async (): Promise<Social[]> => {
    return socialMock;
  };
}
