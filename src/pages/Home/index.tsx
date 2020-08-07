import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";
import SearchBar from "../../components/SearchBar";
import Socials from "../../components/Socials";
import Social from "../../interfaces/Social.interface";
import socialContacts from '../../socials';
import polygonImg from "../../img/polygon.png";
import illustration from "../../img/illustration.svg";

function HomePage() {
  const history = useHistory();

  const searchHandler = (username: string) => {
    history.push(`/search/${username}`);
  };

  const iconSize = 2;
  const iconColor = '#fd71ea';
  const socials: Social[] = socialContacts.map(social => ({
    ...social, iconSize, iconColor 
  }));

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
