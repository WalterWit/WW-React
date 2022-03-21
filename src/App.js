import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import {Header} from './components/Header.js';
import {Banner1, Banner2} from './components/Banner';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from 'react-router-dom';
import { Main } from './components/Main';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Main/>
            <ToastContainer/>
        </BrowserRouter>
    );
}

export {App}