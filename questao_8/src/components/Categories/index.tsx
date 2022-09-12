import React from 'react'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'

import './style.css'

const Header: React.FC<Props> = ({ categorias }) => {
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
          {categorias.map((categoria) => {
            const formatter = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })

            const newValor = formatter.format(categoria.valor)
            const newValorTotal = formatter.format(categoria.valor_total)

            return (
              <tr key={categoria.categoria}>
                <td>{categoria.categoria}</td>
                <td>{categoria.recorrencia}</td>
                <td>{newValor}</td>
                <td>{newValorTotal}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

interface Categoria {
  categoria: string
  qtde_beneficiarios: number
  recorrencia: string
  valor: number
  valor_total: number
}

interface Props {
  categorias: Categoria[]
}

export default Header
