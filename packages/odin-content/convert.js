const fs = require("fs");
const path = require("path");

const processDirectory = (directory) => {
  fs.readdirSync(directory, { withFileTypes: true }).forEach((dirent) => {
    const fullPath = path.join(directory, dirent.name);
    if (dirent.isDirectory()) {
      processDirectory(fullPath); // Recursive call for subdirectories
    } else if (path.extname(fullPath) === ".mdx") {
      const mdFilePath = fullPath.replace(".mdx", ".md");
      fs.renameSync(fullPath, mdFilePath);
      console.log(`Renamed ${fullPath} to ${mdFilePath}`);
    }
  });
};

processDirectory("./curriculum"); // Replace with your directory path
