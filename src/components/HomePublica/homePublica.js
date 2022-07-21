import React, { Component } from "react";
// import Navbar from "../../components/Navbar";
// import { Link } from "react-router-dom";
// import { LoginService } from "../../services/loginService";
import Menu from "../Menu";
import BannerPr from "../Banners/bannerPr";
import Hr_divisao from "../Linhas/hr_divisao";
import Banner2 from "../Banners/banner2";
import Titulo_texto from "../Titulos/titulo_texto";
import TableHomePr from "../Tabela/TableHomePr";
import Ranking from "../Ranking/ranking";
import Banner3Somos from "../Banners/banner3Somos";
import Rodape from "../Rodape/rodape";

export default class HomePublica extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <div className="geral">
          <Menu />
        </div>

        <div>
          <BannerPr/>
        </div>

        <div>
          <Hr_divisao/>
        </div>

        <div>
          <Titulo_texto />
        </div>

        <div>
          <TableHomePr />
        </div>

        <div>
          <Banner2 />
        </div>

        <div>
        <Ranking />
        </div>
        
        <div>
        <Banner3Somos />
        </div>

        <div>
        <Rodape/>
        </div>

      </div>
      
    );
  }
}