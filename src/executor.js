const { spawn } = require("child_process");

module.exports = (command) => {
  console.log(` >Frontend CLI executing ${command}`);

  const child = spawn(command, [], { shell: true, stdio: "inherit" });
  child.on("error", function (err) {
    throw err;
  });
  process.on("SIGINT", () => {
    child.kill("SIGINT");
  });
};
