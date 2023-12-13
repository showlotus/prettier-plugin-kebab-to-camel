const obj = {}

function foo() {
  return {
    props: {
      ...obj,
      name: "zs",
      "-one-two": 12,
      "thr-fou-": 34,
      "-fiv-six-": 56,
      props: {
        nameOne: "ts",
      },
      beforePageChange() {},
    },
    fn() {},
  }
}

function bar() {
  const obj = {
    "aaa-bbb": 32,
    props: {
      bbbCcc: 12,
      props: {
        cccDdd: "",
      },
    },
  }
}

export default function () {
  return {
    props: {
      propOne: 1,
      propTwo: 2,
      propThree: 3,
      propFour: 4,
    },
  }
}
