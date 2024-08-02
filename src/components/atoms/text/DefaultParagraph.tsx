import React, { ReactNode } from "react";

type DefaultParagraphProps = {
  className?: string;
  title?: string;
  children: ReactNode;
};

const DefaultParagraph: React.FC<DefaultParagraphProps> = ({
  className,
  children,
  title,
}) => {
  return (
    <p title={title} className={`${className}`}>
      {children}
    </p>
  );
};

export default DefaultParagraph;
