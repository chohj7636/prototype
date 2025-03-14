import { MakeScenarioPayload } from '@/api/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ScenarioResultWrapperProps {
  pageSize: number;
  synopsys: MakeScenarioPayload['synopsys'];
  scenarioPage: MakeScenarioPayload['scenario'];
}

const ScenarioResultWrapper = ({
  pageSize,
  synopsys,
  scenarioPage,
}: ScenarioResultWrapperProps) => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div id="header" className="flex w-full flex-col items-center">
        <p className="text-2xl font-semibold">
          {`요청하신 내용으로 ${pageSize}페이지 분량의 시나리오를 작성했습니다.`}
        </p>
        <p>AI와 함께 시나리오를 수정하면서 원하는 내용으로 바꿔보세요.</p>
      </div>

      <div className="flex w-full gap-5">
        <div className="h-[600px] w-[540px] flex-col rounded-[10px] border border-[#d9d9d9] px-10 py-20">
          <div className="flex h-full w-full flex-col gap-5">
            <div className="flex items-center gap-4">
              <p className="min-w-[80px] font-bold">제목</p>
              <p>{synopsys.title}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="min-w-[80px] font-bold">장르</p>
              <p>{synopsys.genre}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="min-w-[80px] font-bold">주제</p>
              <p>{synopsys.topic}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="min-w-[80px] font-bold">프롤로그</p>
              <p>{synopsys.prologue}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-x-hidden rounded-[10px] border border-[#d9d9d9] p-4">
          <Carousel className="w-full">
            <CarouselContent className="h-full w-full">
              {scenarioPage.map((element) => {
                return (
                  <CarouselItem
                    key={element.page_num}
                    className="h-full w-full px-20"
                  >
                    <p>{element.page_num} 페이지</p>
                    <div className="flex h-full items-center justify-center">
                      <div className="max-h-full w-full overflow-y-auto">
                        <p className="break-words whitespace-pre-wrap">
                          {element.script}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ScenarioResultWrapper;
