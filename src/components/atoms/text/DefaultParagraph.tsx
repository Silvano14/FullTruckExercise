import React, { ReactNode } from "react";

type DefaultParagraphProps = {
  className?: string;
  children: ReactNode;
};

const DefaultParagraph: React.FC<DefaultParagraphProps> = ({
  className,
  children,
}) => {
  return <p className={`${className}`}>{children}</p>;
};

export default DefaultParagraph;
