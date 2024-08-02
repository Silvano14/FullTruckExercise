import React, { ReactNode } from "react";

type DefaultParagraphProps = {
  className?: string;
  children: ReactNode;
};

const DefaultTitle: React.FC<DefaultParagraphProps> = ({
  className,
  children,
}) => {
  return <h1 className={`${className}`}>{children}</h1>;
};

export default DefaultTitle;
