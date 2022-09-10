const express = require("express");
import { CategoryRoutes } from "./routes/category.routes";

const app = express();

app.use(express.json());

app.use(CategoryRoutes);

app.listen(3000, () => console.log("Server is running on PORT 3000"));
