import sharp from "sharp";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const webps = path.join(root, "src/assets/webps");
const projects = path.join(root, "src/assets/projects");

const jobs = [
  { file: path.join(webps, "profile.webp"), width: 560 },
];

for (const { file, width } of jobs) {
  try {
    const input = await readFile(file);
    const before = await sharp(input).metadata();
    const output = await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer();
    await writeFile(file, output);
    const after = await sharp(output).metadata();
    console.log(
      `${path.basename(file)}: ${before.width}x${before.height} ${Math.round(input.length / 1024)}KB -> ${after.width}x${after.height} ${Math.round(output.length / 1024)}KB`
    );
  } catch (e) {
    console.warn(`skip ${path.basename(file)}: ${e.message}`);
  }
}
