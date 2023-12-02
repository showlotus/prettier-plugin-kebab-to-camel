function foo(data?: any[]): any {
  const a: number = 20
  const b: string = 'xx'
  const str = 'aa-bb-cc-dd' as string

  return {
    props: {
      str,
      name: "zs",
      props: {
        "-one-two": 12,
        "thr-fou-": 34,
        "-fiv-six-": 56,
        "name-one": "ts",
      },
      "before-page-change"() { },
    },

    fn() { },
  };
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
  };
}

export default function (...args: any[]): any {
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
      }
    },
  };
}
