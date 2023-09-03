import Footer from './layouts/Footer'
import Header from './layouts/Header'
import ProductPage from './pages/ProductPage'
import "./styles/app.scss"

function App() {

  return (
    <div className="container">
       <Header/>
      <ProductPage />
      <Footer />
    </div>
  )
}

export default App
