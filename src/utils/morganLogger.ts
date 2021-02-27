
import { createWriteStream, existsSync, mkdirSync } from "fs";
import { join } from "path";

const dir = join(__dirname, "../logs");

if (!existsSync(dir)) mkdirSync(dir);

export const accessLogger = createWriteStream(
    join(__dirname, "../logs", "access.log"),
    {
        flags: "a",
    }
);