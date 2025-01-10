import colors from "../RAL.mjs";
import fs from "fs";
import path from "path";

// TODO: Dump `colors` into a file.
const outputPath = path.resolve("./output/colors.json");

function rgb2Hex(rgb) {
  const rgbVal = rgb.split(",");
  return (
    "#" +
    rgbVal
      .map((val) => {
        const hex = parseInt(val).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

function getContrastYIQ(hexColor) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "light" : "dark";
}

colors.forEach((color) => {
  color.hex = rgb2Hex(color.rgb);
});

colors.forEach((color) => {
  color.mode = getContrastYIQ(color.hex);
});

fs.writeFileSync(outputPath, JSON.stringify(colors, null, 2), "utf-8");
console.log(`Colors have been dumped to ${outputPath}`);
