import { ChangeEvent, useState } from 'react'
import classes from './sass/footer.module.scss'

const Footer = () => {
  const [data, setData] = useState({
    email: '',
})

  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    setData({
        ...data,
        [event.target.name] : event.target.value
    })
}

  const sendEmail = (event:ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    console.log('enviando data...' + data.email)
}

  return (
    <div>
      <footer className={classes.footer} style={{backgroundImage: `url("background-footer.png")`}}>
        <h3>Join the green revolution without <br />commitment</h3>
        <p>
            If you are missing something and don't want to miss future promotions or our future products
        </p>
        <form className={classes.footer__form} onSubmit={()=>sendEmail}>
                <div className="col-md-3">
                    <input type="email" placeholder="Your Email" 
                     onChange={handleInputChange} name="email"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
      </footer>
      
    </div>
  )
}

export default Footer
