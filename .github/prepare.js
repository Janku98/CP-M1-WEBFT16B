global.XMLHttpRequest = undefined;
const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const Fs = require("fs");
const Path = require("path");

const files = [
  "01.test.js",
  "02.test.js",
  "03.test.js",
  "04.test.js",
  "05.test.js",
  "06.test.js",
  "07.test.js",
  "08.test.js",
  "09.test.js",
  "10.test.js",
];

function download(files) {
  const path = createPathIfNotExist(Path.resolve(__dirname, "..", "tests"));
  const gets = files.map((file) =>
    downloadFile(
      `https://learning.soyhenry.com/toolbox/secure-downloads/cp-m1-yoda/${file}`,
      Path.resolve(path, file)
    )
  );
  return Promise.all(gets);
}

function createPathIfNotExist(path) {
  if (!Fs.existsSync(path)) {
    Fs.mkdirSync(path);
  }
  return path;
}

function downloadFile(url, path) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: { githubsha: process.env.GITHUB_SHA },
        responseType: "stream",
      })
      .then(
        (response) => {
          const writer = Fs.createWriteStream(path);
          response.data.pipe(writer);
          return new Promise((resolve, reject) => {
            writer.on("finish", resolve);
            writer.on("error", reject);
          });
        },
        (error) => console.log(error.response?.status)
      )
      .then((r) => {
        resolve(r);
      });
  });
}

download(files).then(() => {
  console.log("Prepare finished...");
});
