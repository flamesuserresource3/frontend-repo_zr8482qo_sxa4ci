import { ImagePlus, Smile, Send } from "lucide-react";
import { useState } from "react";

export default function Composer({ onPost }) {
  const [text, setText] = useState("");

  function submit(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onPost?.({
      id: Date.now(),
      author: {
        name: "You",
        avatar: "https://i.pravatar.cc/100?img=1",
      },
      content: trimmed,
      image: null,
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString(),
    });
    setText("");
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <form onSubmit={submit} className="flex items-start gap-3">
        <img
          src="https://i.pravatar.cc/100?img=1"
          alt="avatar"
          className="h-10 w-10 rounded-full"
        />
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's on your mind?"
            rows={2}
            className="w-full resize-none rounded-xl bg-gray-100 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ToolbarButton Icon={ImagePlus} label="Photo" />
              <ToolbarButton Icon={Smile} label="Feeling" />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition"
            >
              <Send size={16} /> Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function ToolbarButton({ Icon, label }) {
  return (
    <button type="button" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm">
      <Icon size={16} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
