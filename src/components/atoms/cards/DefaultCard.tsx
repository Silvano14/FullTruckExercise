import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { FC, ReactNode } from "react";

type DefaultCardProps = {
  className?: string;
  header?: ReactNode;
  children?: ReactNode;
};

export const DefaultCard: FC<DefaultCardProps> = ({
  header,
  children,
  className,
}) => {
  return (
    <Card className={`h-fit ${className}`}>
      {header ? (
        <CardHeader className="flex gap-3">{header}</CardHeader>
      ) : (
        <></>
      )}
      <CardBody>{children}</CardBody>
    </Card>
  );
};
