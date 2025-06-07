import React from 'react'

const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <div className='bg-white border p-4 rounded shadow'>
      <h3 className="font-bold text-lg">{note.title}</h3>
      <p className="text-gray-700 mt-2">{note.content}</p>
      <div className="flex justify-end gap-2 mt-4">
        <button onClick={() => onEdit(note)} className="text-blue-600">Edit</button>
        <button onClick={() => onDelete(note._id)} className="text-red-600">Delete</button>
      </div>
    </div>
  )
}

export default NoteCard
    