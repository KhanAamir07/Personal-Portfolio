import React, {useState} from "react";
import "./BlogCard.scss";

export default function BlogCard({blog, isDark}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {}
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <div
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>

          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>

          <button className="read-more-btn" onClick={() => setOpen(true)}>
            Read More
          </button>

          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </div>

      {}
      {open && (
        <div className="blog-modal-overlay" onClick={() => setOpen(false)}>
          <div
            className={`blog-modal ${isDark ? "dark-mode" : ""}`}
            onClick={e => e.stopPropagation()}
          >
            <h2>{blog.title}</h2>

            {Array.isArray(blog.content) &&
              blog.content.map((para, i) => <p key={i}>{para}</p>)}

            <button className="close-btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
