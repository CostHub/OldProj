import React from 'react'
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react'

const CartComponent = ({title, id, image, RemoveFromCart }) => (


    <List selection divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button onClick={RemoveFromCart.bind(this, id)} color = "red"> Remove </Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>
        </List.Item>

    </List>
);


const MenuComponent = ({totalPrice, count, items}) => (
    <Menu>
        <Menu.Item name='browse' //onClick={this.handleItemClick}
        >
            Product
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='signup' //onClick={this.handleItemClick}
            >
                Total: &nbsp; <b>{totalPrice}</b> &nbsp; $
            </Menu.Item>

            <Menu.Item name='help' //onClick={this.handleItemClick}//
            >
               Shopping basket (<b>{count}</b>)
            </Menu.Item>

            <Popup
                trigger={
                    <Menu.Item name = "help" //onClick={ this.handleItemClick}
                    >
                        Shop basket (<b>{count}</b>)
                    </Menu.Item>
                }
                content= {items.map(guitar => <CartComponent {...guitar}/> )}
                on = "click"
                hideOnScroll
                />

        </Menu.Menu>
    </Menu>
);


export default MenuComponent;