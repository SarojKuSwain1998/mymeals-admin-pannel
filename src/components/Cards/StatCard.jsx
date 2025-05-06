const StatCard = ({ number, icon, title, percentage }) => {
  return (
    <>
      <div className="border-stroke rounded-lg border bg-white px-8 py-6 shadow shadow-brand-950/10">
        <div className="flex gap-4">
          <div className=" border bg-sky-500  h-10 w-12 text-white  rounded-lg bg-brand-950/10 ">
            {icon}
          </div>
          <div className="flex items-center justify-between">
            <div>
              {/* <h4 className="text-2xl font-bold text-slate-950 dark:text-white">
                {number}
              </h4> */}
              <span className="text-sm font-medium text-slate-600">
                {title}
              </span>
              <span className="flex items-center gap-1 text-sm font-medium text-slate-600">
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
