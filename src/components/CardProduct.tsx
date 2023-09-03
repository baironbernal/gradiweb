import { FeaturedImage } from '../interfaces/featuted-image.interface'
import classes from './sass/card-product.module.scss'


const CardProduct = ({ title, featuredImage } : {title:string, featuredImage: FeaturedImage}) => {

  return (
    <article className={classes.cardProduct}>
        <div className={classes.cardProduct__image} style={{
            backgroundImage: `url(${featuredImage.url})`
        }}>

            <div className={classes.cardProduct__button}>
                <span>See More</span>
            </div>

        </div>
    <>
        <h1>{title}</h1>
        
    </>
    </article>
  )
}

export default CardProduct
