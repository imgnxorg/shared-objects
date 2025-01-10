const { default: palette } = await import("./palette.js");
const colorGenerator = await import("@imgnx/random-color");
const path = await import("path");
const fs = await import("fs");

const header = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RAL Colors</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1>RAL Colors</h1>
  <p>RAL colors are standardized colors created by RAL gemeinnützige GmbH. They are used in many industries, including
    architecture, automotive, and glazing.</p>
  <div class="flex flex-row flex-wrap">
    `,
  footer = `
  </div>
</body>
</html>`;

let html = `${header}`;

const generateHtml = async function (colors) {
  console.log("COLORS", colors);

  await colors.map((color) => {
    const html2 = `<div class="flex items-center justify-center">
    <div class="p-2" style="color: ${color.mode === "light" ? "#080808" : "#fafafa"}; background: ${color.hex}">
      <div><small>${color.id}</small></div>
      <div><big>${color.name}</big></div>
    </div>
  </div>`;
    html = html.concat(html2);
    // End of list.
  });

  html = html.concat(footer);
  return html;
};

html = await generateHtml(palette);

const outputPath = path.resolve(import.meta.dirname, "out/colors.html");

fs.writeFileSync(outputPath, html, "utf-8");
console.log(`HTML was written to ${outputPath}`);
