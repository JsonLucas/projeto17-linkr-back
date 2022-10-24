import { app } from "./src/utils/app";
import { port } from "./src/utils/env";

app.listen(port, () => console.log(`server running at port ${port}`));