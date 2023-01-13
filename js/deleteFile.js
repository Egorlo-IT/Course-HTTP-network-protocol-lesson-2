import fs from "fs";

export const deleteFile = (filePath) => {
  try {
    console.log("deleteFile:", filePath);
    fs.unlink(filePath, (err) => {
      if (err && err.code == "ENOENT") {
        console.info("Error! File doesn't exist.");
      } else if (err) {
        console.error("Something went wrong. Please try again later.");
      } else {
        console.info(`Successfully removed file with the path of ${filePath}`);
      }
    });
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/html" });
    return res.end("Error delete file");
  }
};
