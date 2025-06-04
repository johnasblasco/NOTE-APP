export const getNotes = (req, res) => {
  res.json({ message: 'Get all notes' });
};

export const createNote = (req, res) => {
  res.json({ message: 'Create note' });
};

export const updateNote = (req, res) => {
  res.json({ message: 'Update note' });
};

export const deleteNote = (req, res) => {
  res.json({ message: 'Delete note' });
};
