import axios, { AxiosResponse } from "axios";
import { MultiEntityRes } from "../shared/multi-entity-res";
import { Reward } from "./reward.model";
import { apiConfig } from "../api-config";

export class RewardsApiService {
  static getAllRewards = async (): Promise<AxiosResponse<MultiEntityRes<Reward>>> => {
    return axios.get(`${apiConfig.base}/v1/rewards`);
  };
}
