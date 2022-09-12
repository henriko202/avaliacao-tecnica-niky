import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

import Categories from '../../components/Categories'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Summary from '../../components/Summary'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App: React.FC = () => {
  const [categories, setCategories] = useState<Categoria[]>([])
  const [mounted, setMounted] = useState(false)
  const [show, setShow] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [atual, setAtual] = useState(0)

  const handleClose = () => {
    setShow(false)
    setAtual(0)
  }

  const handleShow = () => setShow(true)

  const handleRemove = () => {
    setShow(false)

    const newCategories = [...categories]
    newCategories.splice(atual, 1)
    setCategories(newCategories)
    setAtual(0)
  }

  const handleRemovedCategory = (index: number) => {
    handleShow()

    if (categories[index].recorrencia === 'Mensal') {
      setAtual(0)
      setShow(false)
      setShowToast(true)
    }

    setAtual(index)
  }

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
                  <Summary categorias={categories} handleRemovedCategory={handleRemovedCategory} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja excluir essa categoria?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleRemove}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer className="p-3" position="middle-end">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={4500} autohide bg="danger">
          <Toast.Header>
            <strong className="me-auto">Erro</strong>
          </Toast.Header>
          <Toast.Body>Não é possível excluir uma categoria com recorrência mensal!</Toast.Body>
        </Toast>
      </ToastContainer>
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

export default App
