import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";
import SearchBar from "../../components/SearchBar";
import Socials from "../../components/Socials";
import polygonImg from "../../img/polygon.png";
import illustration from "../../img/illustration.svg";
import instagram from "../../img/social/instagram.svg";
import linkedin from "../../img/social/linkedin.svg";
import medium from "../../img/social/medium.svg";

function HomePage() {
  const history = useHistory();

  const searchHandler = (username: string) => {
    history.push(`/search/${username}`);
  };

  const iconSize = 2;
  const iconColor = '#fd71ea';
  const socials = [
    { name: "Instagram", link: "#", iconUrl: instagram, iconSize, iconColor },
    { name: "Linkedin", link: "#", iconUrl: linkedin, iconSize, iconColor },
    { name: "Medium", link: "#", iconUrl: medium, iconSize, iconColor },
  ];

  return (
    <main>
      <img className="polygon" src={polygonImg} />
      <div className="intro">
        <div className="left">
          <p>
            Buscar um usuário no <strong>Github</strong>
            <br /> ficou muito <strong>fácil!</strong>
          </p>
          <SearchBar onSearch={searchHandler} />
        </div>
        <img src={illustration} alt="Illustration" />
      </div>
      <Socials 
         socials={socials}
      />
    </main>
  );
}

export default HomePage;
