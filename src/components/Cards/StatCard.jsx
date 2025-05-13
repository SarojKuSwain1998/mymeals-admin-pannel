const StatCard = ({ number, icon, title, percentage }) => {
  return (
    <>
      <div className="rounded-lg border  bg-white px-6 w-48 py-6 ">
        <div className="flex gap-4">
          <div className="h-12 w-16 text-white  rounded-xl bg-brand-950/10 ">
            {icon}
          </div>
          <div className="flex items-center justify-between">
            <div>
              {/* <h4 className="text-2xl font-bold text-slate-950 dark:text-white">
                {number}
              </h4> */}
              <span className="text-sm font-medium dark:text-white text-slate-600">
                {title}
              </span>
              <span className="flex items-center gap-1 dark:text-white text-sm font-medium text-slate-600">
                {percentage}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatCard;
