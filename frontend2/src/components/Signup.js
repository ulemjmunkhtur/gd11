import React from 'react';

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Sign Up</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block mb-2 text-lg font-medium">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-lg font-medium">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-lg font-medium">First Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-lg font-medium">Last Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-lg font-medium">Phone</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-lg font-medium">Address Line 1</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-lg font-medium">District</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
                required
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
