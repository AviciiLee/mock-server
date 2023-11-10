import Mock from "mockjs";

const Random = Mock.Random;
export default [
  {
    path: "/api/demo",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          name: Random.cname(),
        },
      };
    },
  },
];
