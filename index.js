const core = require('@actions/core');
const github = require('@actions/github');
const FortuneCookie = require("./fortune-cookie");

try {
  let fortuneCookie = new FortuneCookie();
  let fortune = fortuneCookie.get();
  console.log("Your fortune cookie says: " + fortune);
} catch (error) {
  core.setFailed(error.message);
}
