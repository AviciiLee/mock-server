const Mock = require("mockjs");

const Random = Mock.Random;
module.exports = [
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
