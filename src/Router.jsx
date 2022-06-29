// React Router Dom
import { Routes, Route } from 'react-router-dom';

// Views
import Home from './views/Home';
import About from './views/About';
import Products  from './views/Products';
import Product  from './views/Products/Product';
import Counter from './views/Counter';
import NotFound from './views/NotFound';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/about" element={<About />} />  
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter;