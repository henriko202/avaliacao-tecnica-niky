import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Categories from '../../components/Categories'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Summary from '../../components/Summary'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <Header />
            <div className="containerConteudo">
              <Row>
                <Col xs={7} className="containerCategoria no-gutters">
                  <Categories />
                </Col>

                <Col xs={5} className="containerResumo">
                  <Summary />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
