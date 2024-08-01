import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEventHandler } from "react";

type DefaultSelectProps = {
  label?: string;
  items: Array<string>;
  selectedKeys?: string[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export const DefaultSelect: React.FC<DefaultSelectProps> = ({
  label,
  items,
  selectedKeys,
  onChange,
}) => {
  return (
    <Select label={label} selectedKeys={selectedKeys} onChange={onChange}>
      {items.map((val) => (
        <SelectItem textValue={val.toString()} key={val}>
          {val}
        </SelectItem>
      ))}
    </Select>
  );
};
