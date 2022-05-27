const express = require(`express`);
const cors = require(`cors`);

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4004;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
