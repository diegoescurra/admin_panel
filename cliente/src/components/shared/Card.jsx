const Card = ({ title, content, className }) => {
  return (
    <div className={`flex flex-col justify-between h-full rounded-lg shadow-md border border-gray-200 w-56 md:w-full  ${className}`}>
      <header className="px-5 py-4">
        <h3 className="text-xl lg:text-lg font-semibold ">{title}</h3>
      </header>
      <div className="flex-1 px-5 py-4 flex flex-col justify-center items-center text-center">
        <p className="text-sm md:text-sm  ">{content}</p>
      </div>
    </div>
  );
};

export default Card;
