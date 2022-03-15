import {Fragment} from 'react';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import {Header} from './components/Header.js';
import {Banner} from './components/Banner';

function App() {
    return (
        <Fragment>
            <Header />
            <Banner/>
            <ItemListContainer greeting="Cascos"/>
            <ItemDetailContainer greeting="Descripcion"/>
        </Fragment>
    );
}

export {App}