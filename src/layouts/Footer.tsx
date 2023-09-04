import classes from './sass/footer.module.scss'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'


const Footer = () => {
 

 const { register, handleSubmit } = useForm();
 const onSubmit = () => {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Newsletter send '
    })
 }

  return (
    <div>
      <footer className={classes.footer} style={{backgroundImage: `url("background-footer.png")`}}>
        <h3>Join the green revolution without <br />commitment</h3>
        <p>
            If you are missing something and don't want to miss future promotions or our future products
        </p>
        <form className={classes.footer__form} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="email" {...register("email")}
                    placeholder="Your Email" name="email"></input>
                </div>
                <button type="submit">Enviar</button>
            </form>
      </footer>
      
    </div>
  )
}

export default Footer
