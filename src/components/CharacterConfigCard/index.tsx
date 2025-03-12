import { Input } from '../ui/input';

const CharacterConfigCard = () => {
  return (
    <div className="flex w-full max-w-[640px] flex-col gap-2 rounded-[10px] border border-[#d9d9d9] p-[10px]">
      <div className="flex w-full items-center gap-2">
        <p className="text-[16px] font-semibold">캐릭터 이름</p>
        <Input
          className="w-[500px]"
          placeholder="캐릭터 이름을 입력해주세요."
        />
      </div>
      <div className="flex w-full items-center gap-2">
        <p className="text-[16px] font-semibold">캐릭터 외형</p>
        <Input
          className="w-[500px]"
          placeholder="캐릭터 외형을 입력해주세요."
        />
      </div>
      <div className="flex w-full items-center gap-2">
        <p className="text-[16px] font-semibold">캐릭터 특징</p>
        <Input
          className="w-[500px]"
          placeholder="캐릭터 특징을 입력해주세요."
        />
      </div>
    </div>
  );
};

export default CharacterConfigCard;
