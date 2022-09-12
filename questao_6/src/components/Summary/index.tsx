import { faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './style.css'

const Header: React.FC = () => {
  return (
    <div className="resumo">
      <p className="textoMaior">Resumo</p>
      <p className="textoGestores">Gestores de área</p>

      <div className="colunasResumo">
        <div className="categoriasResumo" style={{ background: '#172643', color: 'white' }}>
          <p>Alimentação</p>
          <Form.Select size="sm" className="shadow-none">
            <option>Diário</option>
          </Form.Select>
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ cursor: 'pointer', color: '#b8e59c', height: '20px', marginRight: '10px' }}
          />
        </div>

        <div className="categoriasResumo" style={{ background: '#20365e', color: 'white' }}>
          <p>Cultura</p>
          <Form.Select size="sm" className="shadow-none">
            <option>Mensal</option>
          </Form.Select>
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ cursor: 'pointer', color: '#b8e59c', height: '20px', marginRight: '10px' }}
          />
        </div>

        <div className="categoriasResumo" style={{ background: '#005d80', color: 'white' }}>
          <p>Flexível</p>
          <Form.Select size="sm" className="shadow-none">
            <option>Quinzenal</option>
          </Form.Select>
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ cursor: 'pointer', color: '#b8e59c', height: '20px', marginRight: '10px' }}
          />
        </div>

        <div className="categoriasResumo" style={{ background: '#00979b', color: 'white' }}>
          <p>Home Office</p>
          <Form.Select size="sm" className="shadow-none">
            <option>Mensal</option>
          </Form.Select>
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ cursor: 'pointer', color: '#b8e59c', height: '20px', marginRight: '10px' }}
          />
        </div>

        <div className="categoriasResumo" style={{ background: '#59d091', color: 'black' }}>
          <p>Mobilidade</p>
          <Form.Select size="sm" className="shadow-none">
            <option>Mensal</option>
          </Form.Select>
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ cursor: 'pointer', color: '#334960', height: '20px', marginRight: '10px' }}
          />
        </div>

        <div className="categoriasResumo" style={{ background: '#e7fd7f', color: 'black' }}>
          <p>Saúde</p>
          <Form.Select size="sm" className="shadow-none">
            <option>Mensal</option>
          </Form.Select>
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ cursor: 'pointer', color: '#334960', height: '20px', marginRight: '10px' }}
          />
        </div>

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

export default Header
