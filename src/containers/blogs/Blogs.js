import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";

export default function Blogs() {
  return (
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">{blogSection.title}</h1>
        <p className="subTitle blog-subtitle">{blogSection.subtitle}</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {blogSection.blogs.map((blog, index) => {
            return (
              <BlogCard
                key={index}
                blog={{
                  url: blog.url,
                  image: blog.image,
                  title: blog.title,
                  description: blog.description,
                }}
              />
            );
          })}
        </div>
      </div>
      {/* Coming Soon Section */}
      {blogSection.comingSoonMessage && (
        <div className="coming-soon-section">
          <div className="coming-soon-card">
            <div className="coming-soon-icon">📝</div>
            <h3 className="coming-soon-title">More Coming Soon!</h3>
            <p className="coming-soon-message">
              {blogSection.comingSoonMessage}
            </p>
            <div className="coming-soon-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
