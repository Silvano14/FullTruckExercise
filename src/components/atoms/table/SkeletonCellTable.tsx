type SkeletonCellTableProps = {};

export const SkeletonCellTable: React.FC<SkeletonCellTableProps> = ({}) => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-6 bg-slate-700 rounded"></div>
      </div>
    </div>
  );
};
