import React, { Component } from "react";
import Header from "../../components/header/Header";
import NewsBanner from "../../containers/newsBanner/NewsBanner";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Projects from "../../containers/projects/Projects";
import Experience from "../../containers/experienceAccordion/ExperienceAccordion";
import EventsEtherealCarousel from "../../containers/achievement/EventsEtherealCarousel";

class Home extends Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location?.state?.scrollToProjects &&
      prevProps.location?.state !== this.props.location?.state
    ) {
      const el = document.getElementById("projects");
      if (el) {
        setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          100
        );
      }
      this.props.history.replace({ pathname: "/home", state: {} });
    }
  }

  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <NewsBanner theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Experience theme={this.props.theme} />
        <Projects theme={this.props.theme} />
        <EventsEtherealCarousel theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
