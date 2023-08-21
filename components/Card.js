const Card = (props) => {
  const { name, description } = props;
  return (
    <div className="flex min-w-fit sdm:min-w-[224px] sdm:min-h-[192px] max-w-[250px] flex-col justify-center gap-1 rounded-2xl border border-blue-200 bg-white p-3">
      <span>
        <svg
          className="mb-2  h-7 w-7  sdm:h-9 sdm:w-9 rounded-full bg-gray-700 p-2"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      </span>
      <span className="text-xs sdm:text-md font-extrabold text-orange-600 ">
        {name}
      </span>
      <span className="text-[8px] sdm:text-xs text-gray-700">
        {description}
      </span>
    </div>
  );
};

export default Card;
