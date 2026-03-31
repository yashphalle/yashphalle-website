import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import ProjectDetail from "../pages/projectDetail/ProjectDetail";
import Blogs from "../pages/blogs/BlogsComponent";
import Gallery from "../pages/gallery/GalleryComponent";
import { usePortfolio } from "../context/PortfolioContext";
import Error404 from "../pages/errors/error404/Error";

export default function Main(props) {
  const { settings } = usePortfolio();

  if (settings?.isSplash) {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(routeProps) => (
                <Splash {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/home"
              render={(routeProps) => (
                <Home {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(routeProps) => (
                <Experience {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/education"
              render={(routeProps) => (
                <Education {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/opensource"
              render={(routeProps) => (
                <Opensource {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/contact"
              render={(routeProps) => (
                <Contact {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/splash"
              render={(routeProps) => (
                <Splash {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/projects"
              render={(routeProps) => (
                <Projects {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/project/:slug"
              render={(routeProps) => (
                <ProjectDetail {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="*"
              render={(routeProps) => (
                <Error404 {...routeProps} theme={props.theme} />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(routeProps) => (
                <Home {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/home"
              render={(routeProps) => (
                <Home {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(routeProps) => (
                <Experience {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/education"
              render={(routeProps) => (
                <Education {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/opensource"
              render={(routeProps) => (
                <Opensource {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/contact"
              render={(routeProps) => (
                <Contact {...routeProps} theme={props.theme} />
              )}
            />
            {/* <Route
              path="/splash"
              render={(routeProps) => (
                <Splash {...routeProps} theme={props.theme} />
              )}
            /> */}
            <Route
              path="/projects"
              render={(routeProps) => (
                <Projects {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/project/:slug"
              render={(routeProps) => (
                <ProjectDetail {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/blogs"
              render={(routeProps) => (
                <Blogs {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="/gallery"
              render={(routeProps) => (
                <Gallery {...routeProps} theme={props.theme} />
              )}
            />
            <Route
              path="*"
              render={(routeProps) => (
                <Error404 {...routeProps} theme={props.theme} />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
