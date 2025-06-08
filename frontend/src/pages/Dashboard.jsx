import React, { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import NoteForm from '../components/NoteForm';
import { fetchNotes, createNote, updateNote, deleteNote } from '../api/noteApi';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load notes from API
  const loadNotes = async () => {
    try {
      const res = await fetchNotes();
      setNotes(res.data.notes || []);
    } catch (err) {
      console.error('Error fetching notes:', err);
      setNotes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  // Create or update note
  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (editingNote) {
        await updateNote(editingNote._id, values);
      } else {
        await createNote(values);
      }
      await loadNotes();
      setShowForm(false);
      setEditingNote(null);
      resetForm();
    } catch (err) {
      console.error('Error saving note:', err);
    }
  };

  // Delete note
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;
    try {
      await deleteNote(id);
      await loadNotes();
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Your Notes</h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            setShowForm(true);
            setEditingNote(null);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          + Add Note
        </button>
      </div>

      {showForm && (
        <NoteForm
          initialValues={editingNote || { title: '', content: '' }}
          onSubmit={handleSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingNote(null);
          }}
        />
      )}

      {!showForm && (
        loading ? (
          <p className="text-center text-gray-500">Loading notes...</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            {notes.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full">
                There are no available tasks yet.
              </p>
            ) : (
              notes.map((note) => (
                <NoteCard
                  key={note._id}
                  note={note}
                  onEdit={() => {
                    setEditingNote(note);
                    setShowForm(true);
                  }}
                  onDelete={handleDelete}
                />
              ))
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Dashboard;
