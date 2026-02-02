import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <div className="container">
      <div className="square">
        <div className="blog-card-image-container">
          <img src={blog.image} alt={blog.title} className="blog-card-image" />
        </div>
        <div className="blog-card-content">
          <h3 className="blog-card-title">{blog.title}</h3>
          <p className="blog-card-subtitle">{blog.description}</p>
          <div className="blog-card-button-container">
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
