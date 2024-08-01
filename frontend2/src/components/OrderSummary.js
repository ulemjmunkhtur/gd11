import React from 'react';

const OrderSummary = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-2xl font-semibold mb-4">Захиалгын мэдээлэл</div>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div>
            <div className="text-lg">{item.name}</div>
            <div className="text-gray-500">x{item.quantity}</div>
          </div>
          <div className="text-xl font-semibold">{item.price * item.quantity} ₮</div>
        </div>
      ))}
      <div className="flex justify-between items-center border-t pt-4 mt-4">
        <div className="text-xl font-semibold">Нийт</div>
        <div className="text-xl font-semibold">{total} ₮</div>
      </div>
      <button className="w-full mt-4 bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
        ХУДАЛДАН АВАХ
      </button>
    </div>
  );
};

export default OrderSummary;
