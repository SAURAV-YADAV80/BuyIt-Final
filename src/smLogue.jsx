import React from "react";

const SmLogue = ({ product, quantity, onRemove, onChange }) => {
  const handleRemove = () => {
    onRemove(product.id);
  };

  const handleChange = (event) => {
    const newQuantity = +event.target.value;
    onChange(newQuantity, product.id);
  };

  const subtotal = (product.price * quantity).toFixed(2);

  return (
    <div className="mt-4 flex flex-col md:flex-row bg-white border-gray-300 border p-3 space-y-4 md:space-y-0">
      <button className="p-4 self-start" onClick={handleRemove}>
        {/* SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col md:flex-row items-center md:items-start w-full">
        <img
          className="w-full md:w-80 h-auto p-3 py-[4px]"
          src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt={product.title}
        />
        <div className="flex flex-col justify-between p-3 w-full space-y-2">
          <div className="font-semibold text-lg">{product.title}</div>
          <div className="text-gray-700">${product.price}</div>
          <div className="flex items-center">
            <span className="mr-2">Quantity:</span>
            <input
              className="w-16 h-8 text-center border-gray-200 border"
              type="number"
              value={quantity}
              min = "1"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center">
            <span className="mr-2">SubTotal:</span>
            <span className="text-center">${subtotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmLogue;