import { useQuery } from '@tanstack/react-query';
import { useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import useArrowKeyNavigation from '../hooks/useArrow';

const ProductForm = ({ setTotalCount, setTotalQuan }) => {
    const idRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();
    const quanRef = useRef();
    const totalRef = useRef();
    const [productId, setProductId] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const parentRef = useArrowKeyNavigation({
        selectors: 'input',
    });

    const { data: product, refetch } = useQuery({
        queryKey: ['product', productId],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/products/${productId}`
            );
            const data = await res.json();
            return data;
        },
    });

    const handleChange = (e) => {
        setProductId(e.target.value);
    };

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
        setTotalQuan((prev) => [...prev, e.target.value]);
    };

    // handle delete product
    const handleDelete = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/products/${productId}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    // Removing the deleted amount
                    setTotalCount((prev) =>
                        [
                            ...new Set(
                                prev.filter(
                                    (item) => !isNaN(item) && item !== 0
                                )
                            ),
                        ].slice(0, -1)
                    );

                    // Removing the deleted quantity
                    setTotalQuan((prev) =>
                        [
                            ...prev.filter(
                                (item) => !isNaN(item) && item !== 0
                            ),
                        ].slice(0, -1)
                    );
                    refetch();
                    idRef.current.value = '';
                    descRef.current.value = '';
                    priceRef.current.value = '';
                    quanRef.current.value = '';
                    totalRef.current.value = '';
                    toast.success('Successfully Deleted!');
                }
            });
    };

    return (
        <div>
            <form ref={parentRef} className="space-x-2">
                <input
                    onChange={handleChange}
                    className="py-2 px-5 border rounded-lg w-52"
                    type="text"
                    placeholder="Enter Product Id"
                    value={productId || ''}
                    ref={idRef}
                />
                <input
                    readOnly
                    className="py-2 px-5 border rounded-lg w-52"
                    type="text"
                    placeholder="Description"
                    value={product?.desc}
                    ref={descRef}
                />
                <input
                    readOnly
                    className="py-2 px-5 border rounded-lg w-52"
                    type="text"
                    placeholder="Unit Price"
                    value={product?.price}
                    ref={priceRef}
                />
                <input
                    onChange={handleQuantity}
                    onKeyUp={setTotalCount((prev) => [
                        ...prev,
                        quantity * product?.price,
                    ])}
                    className="py-2 px-5 border rounded-lg w-52"
                    type="text"
                    placeholder="Enter Quantity"
                    ref={quanRef}
                />
                <input
                    className="py-2 px-5 border rounded-lg w-52"
                    type="text"
                    placeholder="Sub Total"
                    value={product && product?.price * quantity}
                    ref={totalRef}
                />
                <button
                    type="submit"
                    onClick={handleDelete}
                    className="py-2 px-4 bg-red-500 text-white rounded-lg"
                >
                    Delete
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
