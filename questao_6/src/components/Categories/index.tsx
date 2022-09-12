import React from 'react'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'

import './style.css'

const Header: React.FC = () => {
  return (
    <div className="categoria">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
        <p className="textoMaior">Categorias</p>

        <Form.Select
          className="shadow-none"
          style={{ width: '300px', backgroundColor: '#eaecf0', color: 'black', border: 'none' }}
        >
          <option>Selecione um Grupo</option>
        </Form.Select>
      </div>

      <Table style={{ textAlign: 'center' }} rules="none">
        <thead>
          <tr className="tabelaEstilizada">
            <th>Categoria</th>
            <th>Frequência</th>
            <th>Valor</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alimentação</td>
            <td>Mensal</td>
            <td>R$ 752,25</td>
            <td>R$ 248.242,50</td>
          </tr>

          <tr>
            <td>Combustível</td>
            <td>Mensal</td>
            <td>R$ 100,00</td>
            <td>R$ 6.600,00</td>
          </tr>

          <tr>
            <td>Cultura</td>
            <td>Mensal</td>
            <td>R$ 100,00</td>
            <td>R$ 33.000,00</td>
          </tr>

          <tr>
            <td>Educação</td>
            <td>Anual</td>
            <td>R$ 1000,00</td>
            <td>R$ 330.000,00</td>
          </tr>

          <tr>
            <td>Flexível</td>
            <td>Mensal</td>
            <td>R$ 120,00</td>
            <td>R$ 000.000,00</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Header
