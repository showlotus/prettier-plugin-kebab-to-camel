function foo(data?: any[]): any {
  const a: number = 20;
  const b: string = "xx";
  const str = "aa-bb-cc-dd" as string;
  return {
    props: {
      str,
      name: "zs",
      props: {
        "-one-two": 12,
        "thr-fou-": 34,
        "-fiv-six-": 56,
        nameOne: "ts",
      },
      beforePageChange() {},
    },
    fn() {},
  };
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
  };
}
export default function (...args: any[]): any {
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
  };
}
