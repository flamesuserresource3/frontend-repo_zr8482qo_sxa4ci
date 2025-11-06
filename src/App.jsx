import { useState } from "react";
import Header from "./components/Header";
import Composer from "./components/Composer";
import Feed from "./components/Feed";

function App() {
  const [newPosts, setNewPosts] = useState([]);

  function handlePost(post) {
    setNewPosts((prev) => [post, ...prev]);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-20 space-y-3">
            <Card>
              <h3 className="font-semibold mb-2">Shortcuts</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Friends</li>
                <li>Groups</li>
                <li>Marketplace</li>
                <li>Memories</li>
              </ul>
            </Card>
          </div>
        </aside>

        <section className="lg:col-span-6 space-y-4">
          <Composer onPost={handlePost} />
          <Feed newPosts={newPosts} />
        </section>

        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-20 space-y-3">
            <Card>
              <h3 className="font-semibold mb-2">Sponsored</h3>
              <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100" />
            </Card>
            <Card>
              <h3 className="font-semibold mb-2">Contacts</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Alex Johnson</li>
                <li>Maria Garcia</li>
                <li>Liam Wong</li>
                <li>Priya Patel</li>
              </ul>
            </Card>
          </div>
        </aside>
      </main>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      {children}
    </div>
  );
}

export default App;
