import Note from '../model/Note.js';

// GET /api/notes
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json({ notes });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// POST /api/notes
export const createNote = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  try {
    const note = await Note.create({
      user: req.user.id,
      title,
      content,
    });
    res.status(201).json({ note });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// PUT /api/notes/:id
export const updateNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ error: 'Note not found' });

    if (note.user.toString() !== req.user.id)
      return res.status(403).json({ error: 'Not authorized' });

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;

    const updated = await note.save();
    res.json({ note: updated });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// DELETE /api/notes/:id
export const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ error: 'Note not found' });

    if (note.user.toString() !== req.user.id)
      return res.status(403).json({ error: 'Not authorized' });

    await note.deleteOne();
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
