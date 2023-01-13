import fs from "fs";

export const createFile = (content) => {
  try {
    if (fs.existsSync("./files/filename.txt")) {
      fs.truncate("./files/filename.txt", (err) => {
        if (err) throw err;
        console.log("File cleared");
      });
    }
    fs.writeFile(
      "./files/filename.txt",
      content + "\n",
      { flag: "a" },
      (err) => {
        if (err) throw err;
        console.log("File created successfully");
      }
    );
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/html" });
    return res.end("Error creating file");
  }
};
