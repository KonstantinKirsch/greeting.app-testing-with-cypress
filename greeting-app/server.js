const express = require("express");
const PORT = process.env.PORT || 3000;
let app = express();
app.use(express.static("frontend"));
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
