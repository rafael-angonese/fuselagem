const path = require("path");

const shell = require("shelljs");

const rootDir = path.join(__dirname, ".");
const contentDir = path.join(rootDir, "content");
const docsDir = path.join(contentDir, "docs");
const componentsDocsDir = path.join(docsDir, "components");
const guidesDocsDir = path.join(docsDir, "guide");
const frameworksDocsDir = path.join(docsDir, "frameworks");
const customizationDocsDir = path.join(docsDir, "customization");

const getFolderNames = (dir) => {
  const names = shell
    .ls("-R", dir)
    .map((file) => path.join(process.cwd(), dir, file))
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.basename(file, ".mdx"));

  return names;
}

const getFolderRoutes = (names = [], prefix = "") => {
  return names.map((name) => {
    return {
      source: `/${name}`,
      destination: `/docs/${prefix}/${name}`,
      permanent: true,
    };
  });
}

async function redirect() {
  const componentsName =getFolderNames(componentsDocsDir);
  const guidesName = getFolderNames(guidesDocsDir);
  const frameworksName = getFolderNames(frameworksDocsDir);
  const  customizationName = getFolderNames(customizationDocsDir);

  return [
    ...getFolderRoutes(componentsName, "components"),
    ...getFolderRoutes(guidesName, "guide"),
    ...getFolderRoutes(frameworksName, "frameworks"),
    ...getFolderRoutes(customizationName, "customization"),
    {
      source: "/docs",
      destination: "/docs/getting-started/introduction",
      permanent: true,
    },
    {
      source: "/docs/intro",
      destination: "/docs/getting-started/introduction",
      permanent: true,
    },
    {
      source: "/intro",
      destination: "/docs/getting-started/introduction",
      permanent: true,
    },
    {
      source: "/docs/installation",
      destination: "/docs/getting-started/installation",
      permanent: true,
    },
    {
      source: "/docs/getting-started",
      destination: "/docs/getting-started/introduction",
      permanent: true,
    },
    {
      source: "/docs/introduction",
      destination: "/docs/getting-started/introduction",
      permanent: true,
    },
    {
      source: "/getting-started",
      destination: "/docs/getting-started/introduction",
      permanent: true,
    },
    {
      source: "/learn",
      destination: "/docs/getting-started/introduction",
      permanent: true,
    },
    {
      source: "/theme",
      destination: "/docs/customization/theme",
      permanent: true,
    },
    {
      source: "/docs/theme",
      destination: "/docs/customization/theme",
      permanent: true,
    },
    {
      source: "/components/:path*",
      destination: "/docs/components/:path*",
      permanent: true,
    },
    {
      source: "/docs/components",
      destination: "/docs/components/button",
      permanent: true,
    },
    {
      source: "/components",
      destination: "/docs/components/button",
      permanent: true,
    },
  ];
}

module.exports = redirect;
