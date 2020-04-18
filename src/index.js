const core = require('@actions/core');
const github = require('@actions/github');
const cowsay = require("cowsay2");
const FortuneCookie = require("./fortune-cookie");

try {
  let fortuneCookie = new FortuneCookie();
  let fortune = fortuneCookie.get();
  console.log(cowsay.say(fortune));
} catch (error) {
  core.setFailed(error.message);
}
