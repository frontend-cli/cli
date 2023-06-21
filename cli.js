#! /usr/bin/env node
const { available, commands } = require("./src/framworks");
const executor = require("./src/executor");

const args = process.argv.slice(2);
const command = args[0];
const appName = args[1];

if (!available.includes(command)) {
  console.log("Framework not supported!");
  return;
}

const finalCommand = `${commands[command]} ${appName ?? ""}`;

executor(finalCommand);
