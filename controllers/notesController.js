let notes = [];

const createNote = (req, res) => {
  const { title, content } = req.body;
if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
} else {
    const note = { id: Date.now(), title, content };
    notes.push(note);
    res.status(201).json(note);
}
};

const getAllNotes = (req, res) => {
  res.json(notes);
};

const getNoteById = (req, res) => {
  const note = notes.find(n => n.id == parseInt(req.params.id));
if (!note) {
    return res.status(404).json({ error: 'Note not found' });
} else {
    res.json(note);
}
};

const updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const noteIndex = notes.findIndex(n => n.id == parseInt(id));
if (noteIndex === -1) {
    return res.status(404).json({ error: 'Note not found' });
} else {
    notes[noteIndex] = { ...notes[noteIndex], title, content };
    res.json(notes[noteIndex]);
}
};

const deleteNote = (req, res) => {
  const { id } = req.params;
  const noteIndex = notes.findIndex(n => n.id == parseInt(id));
if (noteIndex == -1) {
    return res.status(404).json({ error: 'Note not found' });
} else {
    notes.splice(noteIndex, 1);
    res.status(204).send();
}
};

module.exports = { createNote, getAllNotes, getNoteById, updateNote, deleteNote };