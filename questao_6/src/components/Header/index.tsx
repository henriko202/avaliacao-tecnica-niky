import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'

import './style.css'

const Header: React.FC = () => {
  return (
    <div className="header">
      <Form noValidate>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" className="mt-3 ms-4 formPesquisar">
            <InputGroup>
              <Form.Control placeholder="Pesquisar" />
              <Button variant="outline-secondary" className="botaoPesquisar">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </InputGroup>
          </Form.Group>
        </Row>
      </Form>
    </div>
  )
}

export default Header
