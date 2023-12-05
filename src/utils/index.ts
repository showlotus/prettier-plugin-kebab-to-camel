export const camelize = (str: string) => {
  return str.replace(/(-[^\s])/g, (str) => str[1].toUpperCase())
}

export const isKebabStyle = (str: string) => {
  return /^[^-].*[^-]$/.test(str) && /([^-])+-([^-])+/.test(str)
}

export const transformer = (node: any) => {
  if (node.type === "SpreadElement") return
  if (isKebabStyle(node.key.name)) {
    node.key.name = camelize(node.key.name)
  } else if (isKebabStyle(node.key.value)) {
    node.key.value = camelize(node.key.value)
  }
}
