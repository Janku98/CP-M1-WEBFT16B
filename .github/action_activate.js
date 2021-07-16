const fs = require("fs");
const path = require("path");
const simpleGit = require("simple-git");
const gitRemoteOriginUrl = require("git-remote-origin-url");
const GitUrlParse = require("git-url-parse");
const chalk = require("chalk");
gitRemoteOriginUrl()
  .then((remote) => {
    const { owner: github, name: repo } = GitUrlParse(remote);
    if (github === "soyHenry") {
      throw new Error(
        `ERROR EN EL REPOSITORIO
Debes clonar el mismo desde tu cuenta y no desde http://github.com/${github}/${repo}
te recomendamos volver a clonar desde la cuenta correcta o contacta a tu instructor.`
      );
    }
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
  })
  .catch((err) => {
    console.log(chalk.white.bgRed.bold(err.message));
    process.exit(1);
  });
