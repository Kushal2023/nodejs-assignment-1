const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  try {
    await fs.writeFile(fileName, fileContent);
    console.log(`Data written successfully`);
  } catch (err) {
    console.log(err);
  }
};

const myFileReader = async (fileName) => {
  try {
    const data = await fs.readFile(fileName, "utf-8");
    console.log(`Data: ${data}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

const myFileUpdater = async (fileName, fileContent) => {
  try {
    await fs.appendFile(fileName, fileContent);
    console.log("File updated successfully");
  } catch (err) {
    console.log(err);
  }
};

const myFileDeleter = async (fileName) => {
  try {
    await fs.unlink(fileName);
    console.log("File deleted successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
