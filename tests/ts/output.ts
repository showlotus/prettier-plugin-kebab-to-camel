import { reactive, toRefs } from "vue-demi"
type F = (...args: any[]) => Record<string, any>
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean
  }
}
const enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let directions = [Direction.Up, Direction.Down, Direction.Left, Direction.Right]
const list1 = [] as any[]
const obj = {
  props: [list1],
}
export function useMergeProps(useFn: F, outerProps: any) {
  return function (props?: any, context?: any) {
    const allProps = reactive({
      ...toRefs(props),
      ...outerProps,
    })
    return useFn(allProps, context)
  }
}
function foo(data?: any[]): any {
  const a: number = 20
  const b: string = "xx"
  const str = "aa-bb-cc-dd" as string
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
  }
}
