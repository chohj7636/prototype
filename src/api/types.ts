export interface CharacterType {
  name: string;
  style: string;
  feature: string;
}

export interface ScenarioType {
  page_num: number;
  script: string;
}

export interface MakeScenarioParmasType {
  story: string;
  character: CharacterType[];
  page_cnt: number;
}

export interface MakeScenarioResponseType {
  code: string;
  message: string;
  payload: MakeScenarioPayload;
}

export interface MakeScenarioPayload {
  synopsys: {
    title: string;
    genre: string;
    topic: string;
    prologue: string;
  };
  scenario: ScenarioType[];
  page_cnt: number;
}
