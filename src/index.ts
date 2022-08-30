#!/usr/bin/env node

import path from "node:path";

import { pathExists } from "fs-extra";
import { cyan } from "kolorist";
import { parse } from "tinyargs";

import { copyTemplate } from "./core";
import { log } from "./logging";

interface Cli {
  template: string;
  target: string;
  force: boolean;
}

(async () => {
  const cli = parse<Cli>(process.argv.slice(2), [
    {
      name: "template",
      type: String,
      positional: true,
    },
    {
      name: "target",
      type: String,
      positional: true,
    },
    {
      name: "force",
      flags: ["f"],
      type: Boolean,
    },
  ]);

  const sourceBasePath = path.join(__dirname, `../template-${cli.template}`);

  if (!(await pathExists(sourceBasePath))) {
    throw new Error("The template does not exist. ");
  }

  const targetPath = cli.target;

  if ((await pathExists(targetPath)) && !cli.force) {
    throw new Error(
      `Target path ${JSON.stringify(
        targetPath
      )} already exists. Use -f to overwrite.`
    );
  }

  await copyTemplate(sourceBasePath, targetPath, {
    project_name: path.basename(targetPath),
  });

  log("Project initialized at", cyan(targetPath));

  const afterCommands = [
    `cd ${targetPath}`,
    "git init",
    "pnpm i",
    "pnpm husky add .husky/pre-commit 'pnpm lint'",
  ];

  log(
    "Execute the following commands:\n" +
      afterCommands.map((c) => `  ${c}`).join("\n")
  );
})();

export {};
