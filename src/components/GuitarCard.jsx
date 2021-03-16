import React from 'react'
import {Card, Icon, Image, Button} from 'semantic-ui-react'

const GuitarCart = (guitar) => {
    const { title, mark, price, image, AddToCart, addedCount } = guitar;
   return (
        <Card>
            <Image src= {image}  />
            <Card.Content>
                <Card.Header>
                    {title}
                </Card.Header>
                <Card.Meta>
                <span className='date'>
                    {mark}
                </span>
                </Card.Meta>

            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='dollar' />
                    {price}
                </a>
            </Card.Content>
            <Button onClick={AddToCart.bind(this, guitar )} >
                Add to basket
                {addedCount > 0 && `(${addedCount})`}</Button>
        </Card>
    );
};

export default GuitarCart;