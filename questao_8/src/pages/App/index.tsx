import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Categories from '../../components/Categories'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Summary from '../../components/Summary'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App: React.FC = () => {
  const [categories, setCategories] = useState([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (mounted) {
      axios.get('https://avaliacao-tecnica-niky-production.up.railway.app/categorias').then(({ data }) => {
        setCategories(data)
      })
    }
  }, [mounted])

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
                  <Categories categorias={categories} />
                </Col>

                <Col xs={5} className="containerResumo">
                  <Summary categorias={categories} />
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
