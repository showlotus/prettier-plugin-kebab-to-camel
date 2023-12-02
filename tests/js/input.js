function foo() {
  return {
    props: {
      name: "zs",
      "-one-two": 12,
      "thr-fou-": 34,
      "-fiv-six-": 56,
      props: {
        "name-one": "ts",
      },
      "before-page-change"() {},
    },

    fn() {},
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

export default function () {
  return {
    props: {
      "prop-one": 1,
      "prop-two": 2,
      "prop-three": 3,
      "prop-four": 4,
    },
  };
}
