const execa = require("execa");
  const fs = require("fs");

  (async () => {
    try {
      await execa("git", ["checkout", "--orphan", "gh-pagen"]);
      console.log("Building...");
      await execa("npm", ["run", "build"]);
      // Understand if it's dist or build folder
      const folderName = fs.existsSync("dist") ? "dist" : "build";
      await execa("git", ["--work-tree", folderName, "add", "--all"]);
      await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pagen"]);
      console.log("Pushing to gh-pagen...");
      await execa("git", ["push", "origin", "HEAD:gh-pagen", "--force"]);
      await execa("git", ["checkout", "-f", "master"]);
      await execa("git", ["branch", "-D", "gh-pagen"]);
      console.log("Successfully deployed");
    } catch (e) {
      console.log(e.message);
      process.exit(1);
    }
  })();