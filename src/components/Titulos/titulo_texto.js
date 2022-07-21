import React from "react";

class Titulo_texto extends React.Component {


    render() {
        return (
            <div id='doacoes' style={{
                marginTop: '100px',
                textAlign: 'center',
                fontFamily: 'Cagliostro'
                
            }}>
                <div>
                    <h1 id='tituloDoacao'>Doações Disponíveis</h1>
                </div>
                <div>
                    <hr style={{
                        margin: '35px 520px',
                        marginBottom: '50px',
                        width: '300px',
                        borderTop: '4px solid #AECFDF',
                    }}></hr>
                </div>
            </div>
        );
    }
}

export default Titulo_texto;