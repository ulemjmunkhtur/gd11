import React from 'react';
import OrderSummary from '../components/OrderSummary';
import SignIn from '../components/SignIn';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Kona',
      color: 'мөнхжүүлсэн-хөх',
      availability: 3,
      price: 121900,
      quantity: 1,
      imageUrl: 'path/to/image.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto flex space-x-4">
        <div className="w-2/3 bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-semibold mb-4">Миний сагс</div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="ml-4">
                  <div className="text-xl font-semibold">{item.name}</div>
                  <div className="text-gray-500">Color: {item.color}</div>
                  <div className="text-red-500">Боломжит үлдэгдэл: {item.availability}</div>
                </div>
              </div>
              <div className="text-xl font-semibold">{item.price} ₮</div>
              <div className="flex items-center">
                <button className="px-3 py-1 border border-gray-300 rounded">-</button>
                <input type="text" value={item.quantity} className="w-12 text-center border border-gray-300 mx-2 rounded" readOnly />
                <button className="px-3 py-1 border border-gray-300 rounded">+</button>
              </div>
              <div className="text-xl font-semibold">{item.price * item.quantity} ₮</div>
              <div className="flex items-center space-x-4">
                <button className="text-green-500">Хадгалах</button>
                <button className="text-red-500">Устгах</button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/3 space-y-6">
          <SignIn />
          <OrderSummary cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
