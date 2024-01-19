import React from 'react';
import {Dish} from "../../types";

const noImageAvailable = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019';

interface Props {
    dish: Dish;
}
const DishItem: React.FC<Props> = ({dish}) => {

    const image = dish.image || noImageAvailable;
    const imageStyle = {
        background: `url(${image}) no-repeat center center / cover`,
    }

    return (
        <div className='card mb-2'>
            <div className='row g-0'>
                <div className='col-sm-4 rounded-start' style={imageStyle}/>
                    <div className='col-sm-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{dish.name}</h5>
                            <p className='card-text small'>{dish.description}</p>
                            <p className='card-text'>{dish.price} KGS</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default DishItem;