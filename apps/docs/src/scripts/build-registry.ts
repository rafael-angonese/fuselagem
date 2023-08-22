import fs from "fs";
import path, { basename } from "path";
import { rimraf } from "rimraf";

import { registry } from "../registry/registry";
import { registrySchema } from "../registry/schema";

const REGISTRY_PATH = path.join(process.cwd(), "public/registry");

const result = registrySchema.safeParse(registry);

if (!result.success) {
  console.error(result.error);
  process.exit(1);
}

// ----------------------------------------------------------------------------
// Build registry/ui/[name].json.
// ----------------------------------------------------------------------------

const targetPath = path.join(REGISTRY_PATH, "ui");

// Create directory if it doesn't exist.
if (!fs.existsSync(targetPath)) {
  fs.mkdirSync(targetPath, { recursive: true });
}

for (const item of result.data) {
  if (item.type !== "components:ui") {
    continue;
  }

  const files = item.files?.map((file) => {
    const content = fs.readFileSync(
      path.join(process.cwd(), "src/registry", file),
      "utf8"
    );

    return {
      name: basename(file),
      content,
    };
  });

  const payload = {
    ...item,
    files,
  };

  fs.writeFileSync(
    path.join(targetPath, `${item.name}.json`),
    JSON.stringify(payload, null, 2),
    "utf8"
  );
}

// ----------------------------------------------------------------------------
// Build registry/index.json.
// ----------------------------------------------------------------------------
const names = result.data.filter((item) => item.type === "components:ui");
const registryJson = JSON.stringify(names, null, 2);
rimraf.sync(path.join(REGISTRY_PATH, "index.json"));
fs.writeFileSync(path.join(REGISTRY_PATH, "index.json"), registryJson, "utf8");

console.log("✅ Done!");
