import { Home, Search, Bell, MessageSquare, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 mr-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">f</div>
          <span className="hidden sm:block text-xl font-semibold">Flamebook</span>
        </div>

        <div className="flex-1 max-w-lg">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search Flamebook"
              className="w-full rounded-full bg-gray-100 pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        <nav className="flex items-center gap-2 sm:gap-3">
          <IconButton icon={<Home size={18} />} label="Home" />
          <IconButton icon={<MessageSquare size={18} />} label="Messages" />
          <IconButton icon={<Bell size={18} />} label="Notifications" />
          <div className="h-8 w-px bg-gray-200 mx-1" />
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white grid place-items-center">
            <User size={18} />
          </div>
        </nav>
      </div>
    </header>
  );
}

function IconButton({ icon, label }) {
  return (
    <button
      aria-label={label}
      className="h-9 w-9 grid place-items-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
    >
      {icon}
    </button>
  );
}
