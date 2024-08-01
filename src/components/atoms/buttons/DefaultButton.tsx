import { Button } from "@nextui-org/react";
import { FC, MouseEventHandler, ReactNode } from "react";

type DefaultButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: ReactNode;
};

export const DefaultButton: FC<DefaultButtonProps> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <Button onClick={onClick} color="primary" className={` ${className}`}>
      {children}
    </Button>
  );
};
