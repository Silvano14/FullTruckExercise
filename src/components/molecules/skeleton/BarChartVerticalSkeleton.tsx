import { Skeleton } from "@nextui-org/react";
import { FC } from "react";

type BarChartVerticalProps = {
  isLoaded?: boolean;
};

const skeletonStyle = "h-4 w-full rounded-lg";
export const BarChartVerticalSkeleton: FC<BarChartVerticalProps> = ({
  isLoaded,
}) => {
  return (
    <div className="w-full flex gap-2 px-28 py-16">
      <Skeleton isLoaded={isLoaded} className="h-68 w-4 rounded-lg"></Skeleton>
      <div className="flex gap-2 flex-col w-full">
        <Skeleton isLoaded={isLoaded} className={skeletonStyle}></Skeleton>
        <Skeleton isLoaded={isLoaded} className={skeletonStyle}></Skeleton>
        <Skeleton isLoaded={isLoaded} className={skeletonStyle}></Skeleton>
        <Skeleton isLoaded={isLoaded} className={skeletonStyle}></Skeleton>
        <Skeleton isLoaded={isLoaded} className={skeletonStyle}></Skeleton>
        <Skeleton isLoaded={isLoaded} className={skeletonStyle}></Skeleton>
        <Skeleton isLoaded={isLoaded} className={skeletonStyle}></Skeleton>
      </div>
    </div>
  );
};
