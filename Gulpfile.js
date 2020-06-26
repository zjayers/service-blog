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
