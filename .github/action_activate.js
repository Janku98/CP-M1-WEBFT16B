const fs = require("fs");
const path = require("path");
const simpleGit = require("simple-git");
try {
  const pathName = path.join(__dirname, "wf");
  const pathNameRenamed = path.join(__dirname, "workflows");
  const pathToAdd = path.join(pathNameRenamed, "node.js.yml");
  if (fs.existsSync(pathName) && !fs.existsSync(pathNameRenamed)) {
    fs.renameSync(pathName, pathNameRenamed);
    const git = simpleGit();
    git.add([pathToAdd]);
  }
} catch {}
