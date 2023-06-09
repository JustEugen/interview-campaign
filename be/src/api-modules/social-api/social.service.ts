import { SocialRepository } from '../../entity-modules/social-entity/social.repository';

export class SocialService {
  static getAll = async () => {
    return SocialRepository.retrieveAll();
  };
}
