const gulp = require("gulp");
const exec = require("child_process").exec;

gulp.task(
  "check",
  async () =>
    await exec("ps -ax | grep service-blog", (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
    })
);

gulp.task(
  "kill",
  async () =>
    await exec("pkill -f service-blog", (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
    })
);

gulp.task(
  "kill:depl",
  async () =>
    await exec(
      "k delete deployments client-depl comments-depl eventbus-depl moderation-depl posts-clusterip-depl posts-depl" +
        " query-depl",
      (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
      }
    )
);

gulp.task(
  "kill:srv",
  async () =>
    await exec(
      "k delete services client-srv comments-srv eventbus-srv moderation-srv posts-clusterip-srv posts-srv query-srv",
      (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
      }
    )
);
