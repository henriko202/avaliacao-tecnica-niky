import { faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './style.css'

const Header: React.FC<Props> = ({ categorias, handleRemovedCategory }) => {
  const colors = ['#172643', '#20365e', '#005d80', '#00979b', '#59d091', '#e7fd7f', '#f9c80e']
  const contrast = '#334960'

  return (
    <div className="resumo">
      <p className="textoMaior">Resumo</p>
      <p className="textoGestores">Gestores de área</p>

      <div className="colunasResumo">
        {categorias.map((categoria, index) => (
          <div
            key={categoria.categoria}
            className="categoriasResumo"
            style={{ background: colors[index], color: 'white' }}
          >
            <p
              style={{
                color: index >= 4 ? contrast : 'white',
              }}
            >
              {categoria.categoria}
            </p>
            <Form.Select size="sm" className="shadow-none">
              <option>{categoria.recorrencia}</option>
            </Form.Select>
            <FontAwesomeIcon
              onClick={() => handleRemovedCategory(index)}
              icon={faTrashCan}
              style={{
                cursor: 'pointer',
                color: index < 4 ? '#b8e59c' : contrast,
                height: '20px',
                marginRight: '10px',
              }}
            />
          </div>
        ))}

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button size="lg" className="botaoResumo">
            <FontAwesomeIcon icon={faCheck} />
            Ativar Categoria
          </Button>
          <Button size="lg" className="botaoResumo" disabled>
            Salvar Alterações
          </Button>
        </div>
      </div>
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
  handleRemovedCategory: (index: number) => void
}

export default Header
