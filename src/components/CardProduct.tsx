import { Rating } from '@mui/material';
import { FeaturedImage } from '../interfaces/featuted-image.interface'
import classes from './sass/card-product.module.scss'
import { useState } from 'react';
import { Prices } from '../interfaces/prices/prices.interface';
import { NumericFormat } from 'react-number-format';


const CardProduct = ({ title, featuredImage, tags, prices } :{title:string, featuredImage: FeaturedImage, tags: string[], prices: Prices}) => {
    const [value, setValue] = useState<number | null>(2);


    const ratingMedia = ({tags}: {tags: string[]}) => {
        
    } 

  return (
    <article className={classes.cardProduct}>
        <div className={classes.cardProduct__image} style={{
            backgroundImage: `url(${featuredImage.url})`,
            borderRadius: '25px'
        }}>

            <div className={classes.cardProduct__button}>
                <span>See More</span>
            </div>

        </div>
        <div className={classes.cardProduct__info}>
            <h3>{title}</h3>
            <div className={classes.cardProduct__infoFeatures}>
                <div className={classes.cardProduct__rating}>
                    <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    />
                </div>
                <div className={classes.cardProduct__prices}>
                    <span>
                        <NumericFormat value={prices.min.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </span>
                    <b>
                    <NumericFormat value={prices.max.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </b>
                </div>
                
            </div>
        </div>
    
        
    </article>
  )
}

export default CardProduct
