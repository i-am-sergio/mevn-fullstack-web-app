import app from './app';
import { startConnection } from './database'

const PORT = 5000;

startConnection();
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});