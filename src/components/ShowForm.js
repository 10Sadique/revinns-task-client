import React, { useState } from 'react';
import ProductForm from './ProductForm';
import { v4 as uuid } from 'uuid';

const ShowForm = () => {
    const [totalCount, setTotalCount] = useState([]);
    const [totalQuan, setTotalQuan] = useState([]);
    const [forms, setForms] = useState([
        <ProductForm
            key={uuid()}
            setTotalCount={setTotalCount}
            setTotalQuan={setTotalQuan}
        />,
    ]);

    let count = [
        ...new Set(totalCount.filter((item) => !isNaN(item) && item !== 0)),
    ];

    let quanCount = [...totalQuan.filter((item) => !isNaN(item) && item !== 0)];

    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            const confirm = window.confirm(
                'Do you want to add new input field?'
            );
            if (confirm) {
                setForms((prev) => [
                    ...prev,
                    <ProductForm
                        key={uuid()}
                        setTotalCount={setTotalCount}
                        setTotalQuan={setTotalQuan}
                    />,
                ]);
            }
        }
    };

    return (
        <>
            <div onKeyDown={handleKeyDown} className="space-y-2 mb-5">
                {forms}
            </div>

            {/* Total bill amount */}
            <p className="font-semibold text-xl text-gray-700">
                Total Bill:{' '}
                {count.length ? count.reduce((acc, val) => acc + val, 0) : '0'}
            </p>

            {/* Total quantity */}
            <p className="font-semibold text-xl text-gray-700">
                Total Quantity:{' '}
                {quanCount.length
                    ? quanCount.reduce((acc, val) => acc + parseInt(val), 0)
                    : '0'}
            </p>
        </>
    );
};

export default ShowForm;
