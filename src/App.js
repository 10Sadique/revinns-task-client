import ProductForm from './components/ProductForm';
import AddProduct from './components/AddProduct';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <div className="flex items-center justify-center my-20 flex-col">
            <h1 className="mb-5 text-xl font-bold text-gray-700">
                Add Product
            </h1>
            <AddProduct />
            <h1 className="mb-5 text-xl font-bold text-gray-700">
                Product List
            </h1>
            <ProductForm />

            {/* Toast component */}
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}

export default App;
