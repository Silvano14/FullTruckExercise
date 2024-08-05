import { Skeleton } from "@nextui-org/react";
import { FC } from "react";

type BarChartSkeletonProps = {
  isLoaded?: boolean;
};

export const BarChartSkeleton: FC<BarChartSkeletonProps> = ({ isLoaded }) => {
  return (
    <div className="w-full flex flex-col gap-2 px-28 py-16">
      <div className="flex gap-2">
        <Skeleton
          isLoaded={isLoaded}
          className="h-36 w-full rounded-lg"
        ></Skeleton>
        <Skeleton
          isLoaded={isLoaded}
          className="h-36 w-full rounded-lg"
        ></Skeleton>
        <Skeleton
          isLoaded={isLoaded}
          className="h-36 w-full rounded-lg"
        ></Skeleton>
        <Skeleton
          isLoaded={isLoaded}
          className="h-36 w-full rounded-lg"
        ></Skeleton>
        <Skeleton
          isLoaded={isLoaded}
          className="h-36 w-full rounded-lg"
        ></Skeleton>
        <Skeleton
          isLoaded={isLoaded}
          className="h-36 w-full rounded-lg"
        ></Skeleton>
        <Skeleton
          isLoaded={isLoaded}
          className="h-36 w-full rounded-lg"
        ></Skeleton>
      </div>
      <Skeleton
        isLoaded={isLoaded}
        className="h-3 w-full rounded-lg"
      ></Skeleton>
    </div>
  );
};
