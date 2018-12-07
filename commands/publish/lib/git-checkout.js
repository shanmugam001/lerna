"use strict";

const log = require("libnpm/log");
const childProcess = require("@lerna/child-process");

module.exports = gitCheckout;

function gitCheckout(files, opts) {
  log.silly("gitCheckout", files);

  return childProcess.exec("git", ["checkout", "--"].concat(files), opts);
}
