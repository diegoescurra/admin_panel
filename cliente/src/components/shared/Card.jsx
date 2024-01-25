const Card = ({ title, content, className }) => {
  return (
    <div className={`flex flex-col justify-between h-full rounded-lg shadow-md border border-gray-200 ${className}`}>
      <header className="px-5 py-4">
        <h3 className="text-sm lg:text-lg font-semibold ">{title}</h3>
      </header>
      <div className="flex-1 px-5 py-4 flex flex-col justify-center items-center text-center">
        <p className="text-xl md:text-2xl xl:text-4xl font-bold ">{content}</p>
      </div>
    </div>
  );
};

export default Card;
