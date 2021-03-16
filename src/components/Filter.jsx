import React from 'react'
import {Input, Menu } from "semantic-ui-react";


const Filter = ({ setFilter, FilterBy, searchQuery, setSearchQuery} ) => (
    <Menu secondary>
        <Menu.Item
            active={FilterBy === 'all'}
            onClick={setFilter.bind(this, 'all')}
        > All </Menu.Item>
        <Menu.Item
            active={FilterBy === 'popular'}
            onClick={setFilter.bind(this, 'popular')}
        > Popular  </Menu.Item>
        <Menu.Item
            active={FilterBy === 'price_high'}
            onClick={setFilter.bind(this, 'price_high')}
        > Price (expensive) </Menu.Item>
        <Menu.Item
            active={FilterBy === 'price_low'}
            onClick={setFilter.bind(this, 'price_low')}
        > low cost </Menu.Item>
        <Menu.Item
            active={FilterBy === 'mark'}
            onClick={setFilter.bind(this, 'mark')}
        >
                Label
        </Menu.Item>
            <Menu.Item>
                    <Input icon="search"
                           onChange={e => setSearchQuery(e.target.value)}
                           value = {searchQuery}
                           placeholder = "Search for guitars..."/>
            </Menu.Item>
    </Menu>
);





export default Filter;
