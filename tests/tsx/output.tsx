function foo(data?: any[]): any {
  const a: number = 20
  const b: string = "xx"
  const str = "aa-bb-cc-dd" as string
  return {
    props: {
      str,
      name: "zs",
      props: {
        nameOne: "ts",
        "-one-two": 12,
        "thr-fou-": 34,
        "-fiv-six-": 56,
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
function Child() {
  return {
    render(h) {
      return h("div", {})
    },
  }
}
export default function (...args: any[]): any {
  const A = () => (
    <Child
      props={{
        "one-two-": "zs",
      }}
    >
      {" "}
    </Child>
  )
  const B = () => (
    <Child
      props={{
        props: {
          aaBbCc: 3,
          useOneTwo() {},
          useThrFou: () => {},
        },
      }}
    >
      {" "}
    </Child>
  )
  return {
    props: {
      propOne: 1,
      propTwo: 2,
      propThree: 3,
      propFour: 4,
      props: {
        propOne: 1,
        propTwo: 2,
        propThree: 3,
        propFour: 4,
      },
    },
  }
}
