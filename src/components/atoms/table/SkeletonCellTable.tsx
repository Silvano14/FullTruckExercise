import { Skeleton } from "@nextui-org/react";
import { ReactNode } from "react";

type SkeletonType = { children: ReactNode; isLoaded: boolean };

export const SkeletonCellTable: React.FC<SkeletonType> = ({
  children,
  isLoaded,
}) => {
  return (
    <Skeleton className="rounded-lg mx-3" isLoaded={isLoaded}>
      {children}
    </Skeleton>
  );
};
