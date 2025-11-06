import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

export default function PostCard({ post }) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={post.author.avatar} alt={post.author.name} className="h-10 w-10 rounded-full" />
            <div>
              <p className="font-medium leading-tight">{post.author.name}</p>
              <p className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
            </div>
          </div>
          <button className="h-8 w-8 grid place-items-center rounded-full hover:bg-gray-100">
            <MoreHorizontal size={18} />
          </button>
        </div>
        {post.content && <p className="mt-3 text-gray-800 whitespace-pre-wrap">{post.content}</p>}
      </div>

      {post.image && (
        <div className="max-h-[560px] overflow-hidden">
          <img src={post.image} alt="post" className="w-full object-cover" />
        </div>
      )}

      <div className="px-4 py-2 text-sm text-gray-600">
        {post.likes} likes · {post.comments} comments
      </div>

      <div className="px-4 pb-3">
        <div className="grid grid-cols-3 gap-2">
          <ActionButton Icon={Heart} label="Like" />
          <ActionButton Icon={MessageCircle} label="Comment" />
          <ActionButton Icon={Share2} label="Share" />
        </div>
      </div>
    </article>
  );
}

function ActionButton({ Icon, label }) {
  return (
    <button className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
      <Icon size={18} />
      {label}
    </button>
  );
}
