import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import BlogsContainer from "../../containers/blogs/Blogs";
import "./BlogsComponent.css";

class Blogs extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="blogs-main">
        <Header theme={this.props.theme} />
        <div className="basic-blogs">
          <div className="heading-div">
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Blogs
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                My thoughts and experiences in AI, Robotics, and Technology
              </h3>
            </div>
          </div>
        </div>
        <BlogsContainer theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Blogs;
