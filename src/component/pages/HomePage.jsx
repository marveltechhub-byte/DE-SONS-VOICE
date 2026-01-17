import React, { useEffect, useState } from "react";
import "./Home.css";
import { Search, ArrowRight } from "lucide-react";
import Grow from "./Grow";
import API from "../../api/api";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get("/posts");
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch posts", err);
      }
    };

    fetchPosts();
  }, []);

  // 🎵 only music posts
  const musicPosts = posts.filter((p) => p.music);

  // 🔍 live search
  const searchResults = musicPosts.filter((post) => {
    const q = query.toLowerCase();
    return (
      post.text?.toLowerCase().includes(q) ||
      post.user?.fullName?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="home-page-container">
      <div className="home">
        <div className="home-content">
          <h1>
            Search and download over 1,500+ <br />
            sermons, songs, and books by your <br />
            favorite preacher.
          </h1>

          {/* SEARCH */}
          <div className="search-box">
            <Search className="search-icon" />
            <input
              placeholder="Search sermons, songs, books..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-btn">
              <ArrowRight />
            </button>
          </div>

          {/* 🔍 SEARCH RESULTS */}
          {query && (
            <div className="search-results">
              {searchResults.length === 0 && (
                <p className="empty-text">No results found</p>
              )}

              {searchResults.map((post) => (
                <div key={post._id} className="search-item">
                  <img
                    src={post.image || "/music.jpg"}
                    alt="cover"
                  />

                  <div className="search-item-body">
                    <h4>{post.text || "Untitled Audio"}</h4>
                    <span>{post.user?.fullName}</span>

                    <audio controls src={post.music} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* DEFAULT VIEW (ONLY FIRST 2) */}
          {/* {!query && (
            <div className="messages-scroll">
              {musicPosts.slice(0, 2).map((post) => (
                <div key={post._id} className="home-post-card">
                  {post.image && (
                    <img
                      src={post.image}
                      alt="cover"
                      className="home-post-image"
                    />
                  )}

                  <div className="home-post-body">
                    <h4>{post.user?.fullName}</h4>
                    {post.text && <p>{post.text}</p>}

                    <div className="music-player glass-audio">
                      <audio controls src={post.music} className="audio" />
                      <a href={post.music} download>
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )} */}
        </div>
      </div>

      <Grow />
    </div>
  );
};

export default HomePage;
