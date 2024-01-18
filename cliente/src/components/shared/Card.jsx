const Card = ({ title, content, footer }) => {
  return (
    <div className="flex flex-col justify-between h-full rounded-lg border bg-white shadow-xl">
      <header className="px-5 py-4 border-b">
        <h3 className="text-md font-semibold text-gray-800">{title}</h3>
      </header>
      <div className="flex-1 px-5 py-4">
        <p className="text-2xl font-bold text-gray-900">{content}</p>
      </div>
      <footer className="px-5 py-4 bg-gray-50">
        <div className="text-lg font-medium text-indigo-600 flex items-center justify-center">
          <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M3 3v18h18"></path>
            <path d="M18.5 14.5l-13-13"></path>
            <path d="M3.5 14.5l13-13"></path>
          </svg>
          {footer}
        </div>
      </footer>
    </div>
  );
};




export default Card;
