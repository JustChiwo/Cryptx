import help from "../../assets/help.svg";
import Bell from "../../assets/notification.svg";
import search from "../../assets/search-normal.svg";

const pfp = "https://avatars.githubusercontent.com/u/257549674?v=4";

function Header() {
  return (
    <header className="flex  items-center justify-between gap-4 px-8 py-5 border-b border-gray-100 bg-white">
      {/* Search */}
      <div className="flex items-center gap-2 w-full max-w-xs rounded-lg border border-gray-200 px-4 py-2.5">
        <input
          type="text"
          placeholder="Search type of keywords"
          className="outline-none bg-transparent flex-1 text-sm text-gray-600 placeholder:text-gray-400"
        />
        <img src={search} alt="" className="w-4 h-4 shrink-0" />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <button type="button" className="cursor-pointer">
          <img src={Bell} alt="Notifications" className="w-5 h-5" />
        </button>
        <button type="button" className="cursor-pointer">
          <img src={help} alt="Help" className="w-5 h-5" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
          <img
            src={pfp}
            alt="Chiwo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-800">Chiwo</p>
            <p className="text-xs text-gray-400">@Just.Chiwo</p>
          </div>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
