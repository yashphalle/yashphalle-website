import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Projects from "../../containers/projects/Projects";
import Experience from "../../containers/experienceAccordion/ExperienceAccordion";
import Achivement from "../../containers/achievement/Achievement";
class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Experience theme={this.props.theme} />
        <Projects theme={this.props.theme} />
        <Achivement theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
