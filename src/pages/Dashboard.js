import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <header className="w-full bg-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Notes</h1>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Login</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Signup</button>
        </div>
      </header>
      <main className="w-full max-w-4xl p-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Create New Note</h2>
        </div>
        <form className="bg-white p-4 rounded shadow-md mb-4">
          <textarea className="w-full p-2 border rounded mb-4" rows="4" placeholder="Write your note here..."></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
        </form>
        <div>
          <h2 className="text-xl font-bold mb-4">Your Notes</h2>
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <p className="text-gray-700">Note content goes here...</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <p className="text-gray-700">Note content goes here...</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <p className="text-gray-700">Note content goes here...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
