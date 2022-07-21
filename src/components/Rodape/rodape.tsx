import React from "react";
import icon1 from '../../img/socialmidia1.png';
import icon2 from '../../img/socialmidia2.png';
import icon3 from '../../img/socialmidia3.png';
import style from '../../css/rodapeStyle.module.css'


class Rodape extends React.Component{

    render(){
        return(
            <div>
                <div className="card text-white bg-dark">
                    <div className="card-header">Juntos</div>
                    <div className="card-body">
                        <img src={icon1} className={style.icon} alt="con1"></img>
                        <img src={icon2} className={style.icon} alt="con2"></img>
                        <img src={icon3} className={style.icon} alt="con3"></img>
                        <h5 className="card-title">Rua Manuel Veiga, 1005</h5>
                        <p className="card-text">CEP: 03790-220</p>
                        <p className="card-text">São Paulo - SP</p>
                        <p className="card-text">Tel: 2201 - 0567 | 2201 - 6709</p>
                        <p className="card-text">informacoes@juntos.com.br</p>
                    </div>
            </div>           
            </div>
        );
    }
    
}

export default Rodape;