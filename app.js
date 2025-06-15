const express = require('express');
const noteRoutes = require('./routes/notes');

const app = express();
app.use(express.json());
app.use('/api/notes', noteRoutes);
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});