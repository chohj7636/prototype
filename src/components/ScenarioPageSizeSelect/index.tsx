import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

export const ScenarioPageSizeSelect = () => {
  const PAGE_SIZE = [12, 14, 16];
  const [selectedPageSize, setSelectedPageSize] = useState(PAGE_SIZE[0]);
  return (
    <Select defaultValue={selectedPageSize.toString()}>
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
                onClick={() => setSelectedPageSize(element)}
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
