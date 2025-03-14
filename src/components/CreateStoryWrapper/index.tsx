import useMakeScenarioStore from '@/hooks/useMakeScenario';
import { makeScenarioAPI } from '@/api/api';
import { useMutation } from '@tanstack/react-query';
import CharacterConfigCard from '../CharacterConfigCard';
import { ScenarioPageSizeSelect } from '../ScenarioPageSizeSelect';
import { Textarea } from '../ui/textarea';
import ScenarioResultWrapper from '../ScenarioResultWrapper';

const CreateStoryWrapper = () => {
  const {
    characterConfig,
    addCharacterConfig,
    deleteCharacterConfig,
    story,
    setStory,
    pageSize,
  } = useMakeScenarioStore();

  const { mutate, data, isPending } = useMutation({
    mutationFn: () =>
      makeScenarioAPI({
        story,
        character: characterConfig,
        page_cnt: pageSize,
      }),
    retry: false,
  });

  const printCard = () => {
    return (
      <div className="flex flex-col items-center gap-4">
        {/* 이 부분이 반복 */}
        {characterConfig.map((_, index) => {
          return (
            <div key={index} className="flex items-center gap-4">
              <CharacterConfigCard index={index} />
              <button
                id="delete"
                className="rounded-[8px] border border-[#d9d9d9] px-2 py-1"
                onClick={() => deleteCharacterConfig(index)}
              >
                del
              </button>
            </div>
          );
        })}
        <button
          id="add"
          className="rounded-[8px] border border-[#d9d9d9] px-2 py-1"
          onClick={() => addCharacterConfig()}
        >
          add
        </button>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <div id="make-area" className="w-full">
        <div className="flex w-full justify-center gap-20">
          <div className="flex w-1/2 flex-col gap-3">
            <div id="header" className="flex w-full flex-col items-center">
              <p className="text-2xl font-semibold">
                자유롭게 떠오르는 스토리를 적어보세요.
              </p>
              <p>
                입력한 내용을 바탕으로 더욱 풍부한 시나리오를 완성할 수
                있습니다.
              </p>
            </div>
            <Textarea
              className="h-[255px]"
              placeholder="스토리를 입력해주세요."
              value={story}
              onChange={(e) => setStory(e.target.value)}
            />
            <div className="flex items-center gap-2">
              <p className="text-[20px] font-semibold">페이지 설정</p>
              <p className="text-[16px]">
                시나리오 페이지를 설정하면 분량에 맞게 시나리오를 작성합니다.
              </p>
            </div>
            <ScenarioPageSizeSelect />
          </div>

          <div className="flex max-h-[800px] w-1/2 flex-col items-start overflow-y-auto">
            <div className="flex items-center gap-2">
              <p className="text-[20px] font-semibold">캐릭터 설정</p>
              <p className="text-[16px]">
                주요 캐릭터 정보를 설정하면 AI 이미지 생성에 더욱 도움이 됩니다.
              </p>
            </div>
            {printCard()}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <button
          id="make-button"
          className="w-[200px] cursor-pointer rounded-[8px] border border-[#bdbdbd] p-2"
          onClick={() => mutate()}
        >
          시나리오 생성
        </button>
      </div>

      {isPending && <p className="text-[18px] font-bold">Loading ... </p>}

      {data && !isPending && (
        <ScenarioResultWrapper
          pageSize={data.payload.page_cnt}
          synopsys={data.payload.synopsys}
          scenarioPage={data.payload.scenario}
        />
      )}
    </div>
  );
};

export default CreateStoryWrapper;
