import { it } from "vitest"
import prettier from "prettier"
import fs from "fs/promises"

const _case = "ts"
const ext = "ts"

it(_case, async ({ expect }) => {
  const text = await fs.readFile(`tests/${_case}/input.${ext}`, {
    encoding: "utf-8",
  })
  const options = await prettier.resolveConfig(".prettierrc.js")
  options!.parser = "typescript"
  const formatted = await prettier.format(text, options!)
  expect(formatted).toMatchFileSnapshot(`./output.${ext}`)
})
