import { Rating } from '@mui/material';
import { FeaturedImage } from '../interfaces/featuted-image.interface'
import classes from './sass/card-product.module.scss'
import { useEffect, useState } from 'react';
import { Prices } from '../interfaces/prices/prices.interface';
import { NumericFormat } from 'react-number-format';


const CardProduct = ({ title, featuredImage, tags, prices } :{title:string, featuredImage: FeaturedImage, tags: string[], prices: Prices}) => {
    const [value, setValue] = useState<number | null>(2);

    useEffect(() => {
        rateAverage(tags);
    }, [tags])
    

      const rateAverage = (tags: string[]) => {
        //filter tags numerics
        const filteredArray: number[] = [];
        tags.map((tag) => {
            if (tag.match(/^-?\d+$/)) {
                filteredArray.push(Number(tag))
            }
            if(filteredArray.length >= 2) {
                const average = filteredArray.reduce((a, b) => a + b, 0) / filteredArray.length;
               return setValue(average/100)
            }
            return setValue(Math.round(filteredArray[0]/100))
        });
      };
      
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
                    onChange={(newValue) => {
                        setValue(Number(newValue));
                    }}
                    readOnly
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
