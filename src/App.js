import {Fragment} from 'react';
import {ItemListContainer} from './components/ItemListContainer';
import {Header} from './components/Header.js';

function App() {
    return (
        <Fragment className="App">
            <Header />
            <ItemListContainer greeting="Indumentaria para motos"/>
        </Fragment>
    );
}

export {App}