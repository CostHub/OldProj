import React, { Component } from 'react'
import {Container} from "semantic-ui-react";
import axios from 'axios';
import GuitarCard from '../containers/GuitarCard';
import Filter from "../containers/Filter";
import Menu from "../containers/Menu";
import {Card} from "semantic-ui-react";



import 'semantic-ui-css/semantic.min.css'

import '../App.css' ;
import '../footer.css';

import Header from "./Header";
import StickyFooter from "./Footer"


class App extends Component {



    componentWillMount() {
        const { setGuitars } = this.props
        axios.get('/guitars.json').then(({ data }) => {
            setGuitars(data);
        });
    }

    render() {
        const { guitars, isReady } = this.props;
        return(
            <>
                    <Header />,

                    <Container>

                        <Menu />
                        <Filter />
                        <Card.Group itemsPerRow={3}>
                            {!isReady ? 'Loading...' : guitars.map((guitar, i) => <GuitarCard key={i}{...guitar} />)}
                        </Card.Group>

                    </Container>
                <StickyFooter />

                </>


        );
    }

}

export default App;


