#!/usr/bin/env node

import { add } from "@/commands/add";
import { init } from "@/commands/init";
import { Command } from "commander";
import figlet from "figlet";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  console.log(figlet.textSync("FUSELAGEM"));

  const program = new Command()
    .name("fuselagem-ui")
    .description("add components and dependencies to your project")
    .version("1.0.0", "-v, --version", "display the version number");

  program
    .command("lala [log]")
    .description("Adiciona console.log")
    .action((log) => {
      console.log(log);
    });

  program.addCommand(init).addCommand(add);

  program.parse(process.argv);
}

main();
