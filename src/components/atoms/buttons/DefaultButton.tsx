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
    <button
      onClick={onClick}
      className={`text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};
