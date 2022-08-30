import fs from "node:fs/promises";
import path from "path";

import { outputFile, emptyDir } from "fs-extra";
import glob from "glob";

const ignoredFiles = ["pnpm-lock.yaml"];

const renames: Record<string, string> = {
  _gitignore: ".gitignore",
};

export const copyTemplate = async (
  from: string,
  to: string,
  data: Record<string, string>
) => {
  const files = glob.sync(from + "/{!(node_modules)/**/*,*}", { dot: true });

  await emptyDir(to);

  for (const file of files) {
    if ((await fs.stat(file)).isDirectory()) {
      continue;
    }

    let targetPath = path.join(to, path.relative(from, file));

    if (ignoredFiles.includes(path.basename(targetPath))) {
      continue;
    }

    if (renames[path.basename(targetPath)]) {
      targetPath = path.join(
        path.dirname(targetPath),
        renames[path.basename(targetPath)]
      );
    }

    const content = (await fs.readFile(file)).toString();
    const transformedContent = transformFile(content, data);

    await outputFile(targetPath, transformedContent);
  }
};

export const transformFile = (
  content: string,
  data: Record<string, string>
) => {
  for (const [key, value] of Object.entries(data)) {
    content = content.replaceAll("__" + key.toUpperCase() + "__", value);
  }

  return content;
};
