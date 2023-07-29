const CFAQ = ({ question, answer, open, changeOpen, id }) => {
  return (
    <>
      <div class="flex flex-col gap-1 mb-3 cursor-pointer">
        <div
          onClick={() => changeOpen(id)}
          className="bg-primary py-3 px-4 rounded-md flex gap-3 items-center"
        >
          <span
            className={`${
              open && "rotate-90"
            } flex-2 w-3 text-white duration-200 transition-transform`}
          >
            <svg
              viewBox="0 0 10 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.53613 12.5L7.56038 7.5L4.53613 2.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <p className="flex-1 text-white md:text-lg lg:text-xl">{question}</p>
        </div>
        {open && <p className="text-base lg:text-lg">{answer}</p>}
      </div>
    </>
  );
};

export default CFAQ;
