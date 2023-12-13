import { ParserOptions, parse as babelParser } from "@babel/parser"
import generate from "@babel/generator"
import traverse from "@babel/traverse"
import { transformer } from "./utils"
import { PluginConfig } from "../types"

export function preprocessor(code: string, options: PluginConfig) {
  const { attributeUnderKeys } = options
  const parserOptions: ParserOptions = {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  }
  const ast = babelParser(code, parserOptions)
  traverse(ast, {
    ObjectExpression(path: any) {
      for (const node of path.node.properties) {
        if (
          node.type !== "SpreadElement" &&
          attributeUnderKeys.includes(node.key.name)
        ) {
          node.value.properties?.forEach(transformer)
        }
      }
    },
  })

  return generate(ast, { retainLines: true }).code
}
