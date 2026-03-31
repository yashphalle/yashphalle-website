import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { usePortfolio } from "../../context/PortfolioContext";
import CertificationCard from "../../components/certificationCard/CertificationCard";

function Certifications(props) {
  const theme = props.theme;
  const { certifications } = usePortfolio();
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {(certifications?.certifications || []).map((cert, index) => {
          return (
            <CertificationCard key={index} certificate={cert} theme={theme} />
          );
        })}
      </div>
    </div>
  );
}

export default Certifications;
