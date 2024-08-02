import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { FC, useState } from "react";
import ContentAvatar from "./ContentAvatar";

const DefaultAvatar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      shadow="lg"
      size="lg"
      placement="bottom"
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger className="cursor-pointer">
        <Avatar name="Silvano" />
      </PopoverTrigger>
      <PopoverContent className="p-2">
        <ContentAvatar onClose={() => setIsOpen(false)} />
      </PopoverContent>
    </Popover>
  );
};

export default DefaultAvatar;
