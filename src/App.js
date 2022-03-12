import {Fragment} from 'react';
import {ItemListContainer} from './components/ItemListContainer';
import {Header} from './components/Header.js';
import {Banner} from './components/Banner'

function App() {
    return (
        <Fragment>
            <Header />
            <Banner/>
            <ItemListContainer greeting="Cascos"/>
        </Fragment>
    );
}

export {App}