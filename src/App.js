import {Header} from './components/Header.js';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from 'react-router-dom';
import { Main } from './components/Main';
import MiNube from './components/CartContext.js';


function App() {
    return (
        <MiNube>
            <BrowserRouter>
            <Header/>
            <Main/>
            <ToastContainer/>
            </BrowserRouter>
        </MiNube>
    );
}

export {App}