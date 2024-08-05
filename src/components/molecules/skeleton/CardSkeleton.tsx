import { Skeleton } from "@nextui-org/react";
import { FC } from "react";

type CardSkeletonProps = {
  isLoaded?: boolean;
};

const skeletonStyle = "h-56 w-[700px] rounded-lg";
export const CardSkeleton: FC<CardSkeletonProps> = ({ isLoaded }) => {
  return (
    <>
      <Skeleton isLoaded={isLoaded} className={skeletonStyle}></Skeleton>
      <Skeleton isLoaded={isLoaded} className={skeletonStyle}></Skeleton>
      <Skeleton isLoaded={isLoaded} className={skeletonStyle}></Skeleton>
      <Skeleton isLoaded={isLoaded} className={skeletonStyle}></Skeleton>
    </>
  );
};
