import React, { ReactNode } from "react";

type DefaultParagraphProps = {
  className?: string;
  level?: number;
  children: ReactNode;
};

const DefaultTitle: React.FC<DefaultParagraphProps> = ({
  className,
  children,
  level = 1,
}) => {
  switch (level) {
    case 1:
      return <h1 className={className}>{children}</h1>;
    case 2:
      return <h2 className={className}>{children}</h2>;
    case 3:
      return <h3 className={className}>{children}</h3>;
    case 4:
      return <h4 className={className}>{children}</h4>;
    default:
      break;
  }
};

export default DefaultTitle;
