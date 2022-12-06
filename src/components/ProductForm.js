const ProductForm = () => {
    return (
        <div>
            <form className="space-x-2">
                <input
                    className="py-2 px-5 border rounded-lg w-52"
                    type="text"
                    placeholder="Enter Product Id"
                />
                <input
                    readOnly
                    className="py-2 px-5 border rounded-lg w-52"
                    type="text"
                    placeholder="Description"
                />
                <input
                    readOnly
                    className="py-2 px-5 border rounded-lg w-52"
                    type="text"
                    placeholder="Unit Price"
                />
                <input
                    className="py-2 px-5 border rounded-lg w-52"
                    type="text"
                    placeholder="Quantity"
                />
                <input
                    className="py-2 px-5 border rounded-lg w-52"
                    type="text"
                    placeholder="Sub Total"
                />
                <button className="py-2 px-4 bg-red-500 text-white rounded-lg">
                    Delete
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
