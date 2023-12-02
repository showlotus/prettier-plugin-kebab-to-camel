import { parsers as babelParsers } from "prettier/plugins/babel";
import { parsers as typescriptParsers } from "prettier/plugins/typescript";
import { preprocessor } from "./preprocessor";

const options = {
  attributeUnderKeys: {
    type: "path",
    category: "Global",
    array: true,
    default: [{ value: ["props"] }],
    description: "Provide a list of attributes for match",
  },
};

module.exports = {
  defaultOptions: {},
  parsers: {
    babel: {
      ...babelParsers.babel,
      preprocess: preprocessor,
    },
    typescript: {
      ...typescriptParsers.typescript,
      preprocess: preprocessor,
    },
  },
  options,
};
