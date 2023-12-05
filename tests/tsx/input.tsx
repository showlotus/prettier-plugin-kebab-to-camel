function foo(data?: any[]): any {
  const a: number = 20
  const b: string = "xx"
  const str = "aa-bb-cc-dd" as string

  return {
    props: {
      str,
      name: "zs",
      props: {
        "name-one": "ts",
        "-one-two": 12,
        "thr-fou-": 34,
        "-fiv-six-": 56,
      },
      "before-page-change"() {},
    },

    fn() {},
  }
}

function bar() {
  const obj = {
    "aaa-bbb": 32,
    props: {
      "bbb-ccc": 12,
      props: {
        "ccc-ddd": "",
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
  const A = () => <Child props={{ "one-two-": "zs" }}> </Child>
  const B = () => (
    <Child
      props={{
        props: { "aa-bb-cc": 3, "use-one-two"() {}, "use-thr-fou": () => {} },
      }}
    >
      {" "}
    </Child>
  )
  return {
    props: {
      "prop-one": 1,
      "prop-two": 2,
      "prop-three": 3,
      "prop-four": 4,
      props: {
        "prop-one": 1,
        "prop-two": 2,
        "prop-three": 3,
        "prop-four": 4,
      },
    },
  }
}
