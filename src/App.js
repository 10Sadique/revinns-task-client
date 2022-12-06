import { Toaster } from 'react-hot-toast';
import AddProduct from './components/AddProduct';
import Labels from './components/Labels';
import ShowForm from './components/ShowForm';

function App() {
    return (
        <div className="flex items-center justify-center my-20 flex-col">
            {/* Add product */}
            <h1 className="mb-5 text-xl font-bold text-gray-700">
                Add Product
            </h1>
            <AddProduct />

            {/* Display product */}
            <h1 className="mb-5 text-xl font-bold text-gray-700">
                Product List
            </h1>
            <Labels />
            <ShowForm />

            {/* Toast component */}
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}

export default App;
