import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ProductsList from './components/ProductsList'
import ProductsForm from './components/ProductsForm'
import PopUp from './components/PopUp'

function App() {

  const [products, setProducts] = useState([])
  const [pForm,setPForm] = useState(false)
  const [productSelected, setProductSelected] = useState(null)
  const [popUp, setPopUp] = useState (false)
  
  useEffect(() => {
    newProduct()
  },[])
  
  const newProduct = () => {
    axios.get('https://products-crud.academlo.tech/products/')
      .then(resp => setProducts(resp.data))
  }

  const selectProduct = product => {
    setPForm(true)
    setProductSelected(product)
  }

  const deletedProduct = product => {
    setProductSelected(product)
  }

  return (
    <div className="App">
      {pForm && <ProductsForm
      setPForm={setPForm}
      newProduct={newProduct}
      productSelected={productSelected}
      setProductSelected={setProductSelected}
      /> }
      <ProductsList
      products={products}
      setPForm={setPForm}
      selectProduct={product => selectProduct(product)}
      newProduct={newProduct}
      deletedProduct={product => deletedProduct (product)}
      setPopUp={setPopUp}
      />

      { popUp && <PopUp
      setPopUp={setPopUp}
      productSelected={productSelected}
      />}

    <footer className='footer'>
      <h3>Hecho por: <span>Andrés Alfonso</span>  <i className='bx bx-collapse-alt'></i></h3>
    </footer>

    </div>
  )
}

export default App
