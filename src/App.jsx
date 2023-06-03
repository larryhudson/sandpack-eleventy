import './App.css'
import {SandpackProvider, SandpackLayout, SandpackFileExplorer, SandpackCodeEditor, SandpackPreview, SandpackConsole} from "@codesandbox/sandpack-react";

function App() {
  const files = {
'.eleventy.js': `module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: 'src',
      output: '_site',
    }
  }
}`,
    'src/_includes/layout.njk': `<html>
  <head>
    <title>My Eleventy starter</title>
  </head>
  <body>
    <p>Edit the layout content in <code>src/_includes/layout.njk</code></p>
    {{content|safe}}
  </body>
</html>`,
'src/index.md': `---
layout: layout.njk
---

# Edit the page content in \`src/index.md\``,
    'index.js': {code: '// I don\'t know how to remove this file', hidden: true},
    'package.json': JSON.stringify(
      {dependencies: {
        "@11ty/eleventy": "^2.0.0"
      },
        scripts: {
          "start": "eleventy --watch --serve"
        }})
  }
  return (
    <>
    <h1>Sandpack + Eleventy</h1>
    <p>This is an attempt to make CodeSandbox's <a href="https://sandpack.codesandbox.io/">Sandpack</a> work with <a href="https://www.11ty.dev/">Eleventy</a>.</p>
    <p>It mostly works, but the automatic reloading doesn't work. You need to click the first 'refresh' button to rerun the build command to see the preview update.</p>
<p>You can <a href="https://github.com/larryhudson/sandpack-eleventy">find the source code on GitHub</a>.</p>

    <SandpackProvider
    files={files} 
    theme="light" 
    template="node"
    options={{
      activeFile: 'src/index.md',
    }}
    customSetup={{
      dependencies: {
        '@11ty/eleventy': '^2.0.0'
      },
    }}
    >
    <SandpackLayout>
      <SandpackFileExplorer />
      <SandpackCodeEditor closableTabs showTabs />
      <SandpackPreview />
    </SandpackLayout>
    </SandpackProvider>
    </>
  )
}

export default App
