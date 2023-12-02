export const camelize = (str: string) => {
  if (str.startsWith('-') || str.endsWith('-')) {
    return str;
  }
  return str.replace(/(-[^\s])/g, str => str[1].toUpperCase());
};

export const transformKey = (node: any) => {
  if (node.key.name) {
    node.key.name = camelize(node.key.name);
  } else if (node.key.value) {
    node.key.value = camelize(node.key.value);
  }
};
