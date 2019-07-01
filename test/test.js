import path from "path"

import pify from "pify"

const webpack = pify(require("webpack"))

it("should run", async () => {
  const name = "basic"
  const outputFolder = path.join(__dirname, "..", "dist", "test", name)
  await webpack({
    mode: "development",
    context: path.join(__dirname, name),
    entry: path.join(__dirname, name),
    output: {
      path: outputFolder,
    },
    module: {
      rules: [
        {
          test: /\.lines$/,
          loader: path.resolve(process.env.MAIN),
        },
      ],
    },
  })
  require(path.join(outputFolder, "main.js"))
})