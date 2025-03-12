import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useMakeScenarioStore from '@/hooks/useMakeScenario';

export const ScenarioPageSizeSelect = () => {
  const PAGE_SIZE = [12, 14, 16];
  const { pageSize, setPageSize } = useMakeScenarioStore();

  return (
    <Select defaultValue={pageSize.toString()}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {PAGE_SIZE.map((element) => {
            return (
              <SelectItem
                key={element}
                value={element.toString()}
                onClick={() => setPageSize(element)}
              >
                {element} 페이지
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
