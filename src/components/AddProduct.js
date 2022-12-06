import toast from 'react-hot-toast';

const AddProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const productId = e.target.productId.value;
        const desc = e.target.desc.value;
        const price = e.target.price.value;
        // const quantity = e.target.quantity.value;
        // const total = e.target.total.value;

        const product = { productId, desc, price };

        // sending data to the server
        fetch(`http://localhost:5000/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product Added Successfully');
                    e.target.reset();
                }
                if (data.acknowledged === false) {
                    toast.error('Product Already Exists');
                    e.target.reset();
                }
            });
    };

    return (
        <div className="mb-10">
            <form onSubmit={handleAddProduct} className="space-x-2">
                <input
                    className="py-2 px-5 border rounded-lg w-52"
                    type="text"
                    placeholder="Enter Product Id"
                    name="productId"
                />
                <input
                    className="py-2 px-5 border rounded-lg w-52"
                    type="text"
                    placeholder="Description"
                    name="desc"
                />
                <input
                    className="py-2 px-5 border rounded-lg w-52"
                    type="text"
                    placeholder="Unit Price"
                    name="price"
                />
                <button
                    type="submit"
                    className="py-2 px-4 bg-green-500 text-white rounded-lg"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
