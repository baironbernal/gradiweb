import classes from './sass/footer.module.scss'

const Footer = () => {
  return (
    <div>
      <footer className={classes.footer} style={{backgroundImage: `url("background-footer.png")`}}>
        <h3>Join the green revolution without commitment commitment</h3>
        <p>
            If you are missing something and don't want to miss future promotions or our future products
        </p>
      </footer>
    </div>
  )
}

export default Footer
