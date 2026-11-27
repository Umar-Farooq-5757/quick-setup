#!/usr/bin/env node

import { program } from "commander";

program
  .name("quick-setup")
  .description("A CLI tool to help you setup your project")
  .version("0.0.1");

program
  .command("just-testing")
  .action(() => console.log("Output: Yeah, working perfectly"));

program.parse();
