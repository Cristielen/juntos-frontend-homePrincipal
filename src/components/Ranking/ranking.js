import React , {useState} from "react";
import ranking1 from '../../img/ranking1.png'
import ranking2 from '../../img/ranking2.png'
import ranking3 from '../../img/ranking3.png'
import style from '../../css/rankingFotos.module.css'
import Table from 'react-bootstrap/Table'
import api from '../../services/Api';

class Ranking extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
            filmes: []
        };
      }

      async componentDidMount(){
        const res = await api('');
        this.setState({filmes: res.data});
    } 

    render(){
        const divStyle = {
            marginTop: '80px',
            overflow: 'auto',
            width: '55%', 
            height: '250px',
            marginLeft:'330px',
            marginBottom: '50px'
          };
          const {filmes} = this.state;
        return(
            <div style={divStyle}>
                

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Posição</th>
                        <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                    {filmes.map(filme => (
                        <tr key={filme.show.id}>
                        <td>{filme.show.name}</td>
                        <td>{filme.show.language}</td>
                        </tr>
                    ))}
                    </tbody>
                    </Table>
               
            </div>
        );
    }
}

export default Ranking; 