import axios from 'axios';
import config from './config-api.json';
import { MakeScenarioParmasType, MakeScenarioResponseType } from './types';

const env = import.meta.env.PROD;
let { apiInfo } = config;

if (!env) {
  apiInfo = config.apiInfo_dev;
}

// GET Scenario
export const makeScenarioAPI = async (info: MakeScenarioParmasType) => {
  const response = await axios.post<MakeScenarioResponseType>(
    `${apiInfo.api_url}/make/scenario/`,
    {
      story: info.story,
      character: info.character,
      page_cnt: info.page_cnt,
    },
  );
  return response.data;
};
