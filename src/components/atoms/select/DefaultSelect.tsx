import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEventHandler } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <Select label={label} selectedKeys={selectedKeys} onChange={onChange}>
      {items.map((val) => (
        <SelectItem textValue={t(val.toString())} key={val}>
          {val}
        </SelectItem>
      ))}
    </Select>
  );
};
