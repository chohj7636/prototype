import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface MakeScenarioState {
  // 캐릭터 설정 영역
  characterConfig: {
    name: string | null;
    style: string | null;
    feature: string | null;
  }[];
  setCharacterConfig: (
    index: number,
    key: keyof MakeScenarioState['characterConfig'][number],
    value: string | null,
  ) => void;

  addCharacterConfig: () => void;
  deleteCharacterConfig: (index: number) => void;

  // 스토리 작성 영역
  story: string;
  setStory: (story: string) => void;

  // 페이지 사이즈 선택
  pageSize: number;
  setPageSize: (pageSize: number) => void;
}

const useMakeScenarioStore = create<MakeScenarioState>()(
  devtools((set) => ({
    characterConfig: [
      {
        name: null,
        style: null,
        feature: null,
      },
    ],
    /**
     * 사용 예시
     * setCharacterConfig(0, 'name', '홍길동');
     * 첫 번째 카드의 캐릭터의 이름을 "홍길동"으로 설정
     */
    setCharacterConfig: (
      index: number,
      key: keyof MakeScenarioState['characterConfig'][number],
      value: string | null,
    ) =>
      set((state) => ({
        characterConfig: state.characterConfig.map((config, i) =>
          i === index ? { ...config, [key]: value } : config,
        ),
      })),
    // 캐릭터 추가
    addCharacterConfig: () =>
      set((state) => ({
        characterConfig: [
          ...state.characterConfig,
          {
            name: null,
            style: null,
            feature: null,
          },
        ],
      })),
    // 삭제하려는 인덱스가 아닌 요소만 남기고 삭제
    deleteCharacterConfig: (index: number) =>
      set((state) => ({
        characterConfig: state.characterConfig.filter((_, i) => i !== index),
      })),

    // 스토리 작성
    story: '',
    setStory: (story: string) => set({ story }),

    // 페이지 사이즈 선택
    pageSize: 12,
    setPageSize: (pageSize: number) => set({ pageSize }),
  })),
);

export default useMakeScenarioStore;
