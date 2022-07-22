import React, {useState} from 'react';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import style from '../../css/tableStyle.module.css';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
// import Button from 'react-bootstrap/Button';
import style1 from '../../css/pesquisacepStyle.module.css';
import api from '../../services/Api';
import Table from 'react-bootstrap/Table';
// import { threadId } from 'worker_threads';
// import Data from '../../mock-data-doacoes.json'

class TableHomePr extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            filmes: [],
            busca: ''
        };
      }

    async componentDidMount(){
        const res = await api('');
        this.setState({filmes: res.data});
    } 

    render() {
        const divStyle = {
            overflow: 'auto',
            width: '55%', 
            height: '250px',
            marginLeft:'330px',
            marginBottom: '50px'
          };
        const {filmes} = this.state;
        // const [busca, setBusca] = useState({busca: this.state.busca});
        // const filmesBusca = filmes
        // .filter((filme) => filme.starstsWith(busca));
        return (
        
        <div>
            {console.log(filmes)}

            <div className={style1.pesquisacep}>
                
                <InputGroup>
                    <Form.Control 
                    id="cep"
               //     value={busca}
                    placeholder="  Digite o CEP para achar doações" 
                //    onChange={(ev) => setBusca(ev.target.value)}
                    />
                    {/* <Button type="submit" 
                    variant="outline-info" 
                    onClick={this.buscar} 
                    id="button-addon2">
                    Buscar
                    </Button> */}
                </InputGroup>
            </div>
            
            {/* <div className={style.styleTable} > */}
            <div style={divStyle}> 
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Doação</th>
                            <th>Bairro de destino</th>
                            <th>CEP</th>
                        </tr>
                    </thead>
                    <tbody>
                    {filmes.map(filme => (
                        <tr key={filme.show.id}>
                            <td> {filme.show.name}</td>
                            <td>{filme.show.type}</td>
                            <td>{filme.show.language}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>          
            </div>
        </div>
        );
    }
}

export default TableHomePr;