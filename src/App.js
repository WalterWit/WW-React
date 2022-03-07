import {Fragment} from 'react';
import {ItemListContainer} from './components/ItemListContainer';
import {Header} from './components/Header.js';

function App() {
    return (
        <Fragment>
            <Header />
            <ItemListContainer greeting="Casco AGV Pista Carbon"/>
        </Fragment>
    );
}

export {App}