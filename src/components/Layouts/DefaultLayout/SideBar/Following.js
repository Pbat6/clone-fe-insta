function Following({name}) {
  return (
    <div className="grid grid-cols-12 cursor-pointer hover:bg-slate-100 py-2">
      <div className="col-start-1 col-span-2 w-12 h-12">
        <img
          className="w-12 h-12 rounded-[50%] object-cover"
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        />
      </div>
      <div className="col-start-3 col-span-10">
        <span className="text-sm font-medium">
          {name} <span className="font-normal">started following you</span>
        </span>
      </div>
    </div>
  );
}

export default Following;
