import React, { useState, useEffect } from 'react';
import api from '../api/api';

function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/notes', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setNotes(response.data);
      } catch (error) {
        console.error('Failed to fetch notes', error);
      }
    };

    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await api.post('/notes', { content }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotes([...notes, response.data]);
      setContent('');
    } catch (error) {
      console.error('Failed to create note', error);
    }
  };

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
        <form className="bg-white p-4 rounded shadow-md mb-4" onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 border rounded mb-4"
            rows="4"
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
        </form>
        <div>
          <h2 className="text-xl font-bold mb-4">Your Notes</h2>
          {notes.map(note => (
            <div key={note._id} className="bg-white p-4 rounded shadow-md mb-4">
              <p className="text-gray-700">{note.content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;