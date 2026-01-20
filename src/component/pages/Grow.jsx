import { useEffect, useState } from "react";
import API from "../../api/api";
import "./Grow.css";
import { Search } from "lucide-react";

const Grow = () => {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    API.get("/posts")
      .then((res) => {
        const musicPosts = res.data.filter((p) => p.music);
        setSongs(musicPosts);
      })
      .catch((err) => console.error(err));
  }, []);

  // 🔍 SEARCH FILTER
  const filteredSongs = songs.filter((post) => {
    const q = query.toLowerCase();
    return (
      post.text?.toLowerCase().includes(q) ||
      post.user?.fullName?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="grow-container">
      <h1>DE SONS VOICE</h1>

      {/* SEARCH BAR */}
      <div className="grow-search">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search songs or artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* GRID */}
      <div className="grow-grid">
        {filteredSongs.length === 0 && (
          <p className="grow-empty">No songs found</p>
        )}

        {filteredSongs.map((post) => (
          <div key={post._id} className="grow-card">
            {/* IMAGE */}
            <img
              src={post.image || "/music.jpg"}
              alt="cover"
              className="grow-image"
            />

            {/* BODY */}
            <div className="grow-body">
              <h4>{post.user?.fullName || "Unknown Artist"}</h4>
              {post.text && <p>{post.text}</p>}

              {/* PLAYER */}
              <audio controls src={post.music} />

              {/* DOWNLOAD */}
              <a
                href={post.music}
                download
                className="download-btn"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grow;
