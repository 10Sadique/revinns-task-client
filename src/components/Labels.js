import React from 'react';

const Labels = () => {
    return (
        <div className="flex items-center justify-between gap-2">
            <p className="py-2 font-semibold text-gray-700 rounded-lg w-52">
                Product Id
            </p>
            <p className="py-2 font-semibold text-gray-700 rounded-lg w-52">
                Description
            </p>
            <p className="py-2 font-semibold text-gray-700 rounded-lg w-52">
                Unit Price
            </p>
            <p className="py-2 font-semibold text-gray-700 rounded-lg w-52">
                Quantity
            </p>
            <p className="py-2 font-semibold text-gray-700 rounded-lg w-52">
                Sub Total
            </p>
            <p className="py-2 font-semibold text-gray-700 rounded-lg">
                Actions
            </p>
        </div>
    );
};

export default Labels;
