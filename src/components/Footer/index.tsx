import React from "react";
import "./styles.scss";
import Socials from "../Socials";
import Social from "../../interfaces/Social.interface";
import instagram from "../../img/social/instagram.svg";
import linkedin from "../../img/social/linkedin.svg";
import medium from "../../img/social/medium.svg";
import pinkLogo from '../../img/pink-logo.svg';

function Footer() {
  const iconColor = '#fd71ea';
  const iconSize = 2;
  const socials: Social[] = [
    { name: "Instagram", link: "#", iconUrl: instagram, iconSize, iconColor },
    { name: "Linkedin", link: "#", iconUrl: linkedin, iconSize, iconColor },
    { name: "Medium", link: "#", iconUrl: medium, iconSize, iconColor },
  ];

  return (
    <footer>
      <div className="container">
        <div className="top">
          <img className="logo" src={pinkLogo} alt="Bitwise logo" />
          <p className="about">
            Acreditamos no valor da tecnologia e no impacto positivo que a
            transformação digital exerce sobre a sociedade, mudando o nosso dia
            a dia, facilitando atividades comuns e acelerando os negócios.
          </p>
          <address className="addresses">
            <div className="country-address">
              <p className="country-title">Brasil</p>
              <p>
                R. Raphael Dias da Silva, 75 3º andar • Sala 306 e 308 Campolim
                • Sorocaba/SP
              </p>
            </div>
            <div className="country-address">
              <p className="country-title">Canadá</p>
              <p>830, Av. Ernest-Gagnon, Bureau 315, Sala 609 Quebec</p>
            </div>
          </address>
        </div>
        <div className="divider"></div>
        <div className="bottom">
          <p>Todos os direitos reservados - 2020</p>
          <Socials socials={socials} />
          <a href="#" className="back-to-top">Voltar ao topo</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
