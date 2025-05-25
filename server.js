import express from 'express';
import cors from 'cors';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Path to wishes.json
const wishesPath = join(__dirname, 'src', 'data', 'wishes.json');

// Get all wishes
app.get('/api/wishes', async (req, res) => {
  try {
    const data = await fs.readFile(wishesPath, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading wishes:', error);
    res.status(500).json({ error: 'Failed to read wishes' });
  }
});

// Add a new wish
app.post('/api/wishes', async (req, res) => {
  try {
    const { name, message } = req.body;
    
    // Read current wishes
    const data = await fs.readFile(wishesPath, 'utf8');
    const wishes = JSON.parse(data);
    
    // Add new wish
    const newWish = {
      id: Date.now(),
      name,
      message
    };
    
    wishes.wishes.push(newWish);
    
    // Write back to file
    await fs.writeFile(wishesPath, JSON.stringify(wishes, null, 2));
    
    res.status(201).json(newWish);
  } catch (error) {
    console.error('Error adding wish:', error);
    res.status(500).json({ error: 'Failed to add wish' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 