const core = require('@actions/core');
const github = require('@actions/github');
const cowsay = require("cowsay");
const FortuneCookie = require("./fortune-cookie");

try {
  let fortuneCookie = new FortuneCookie();
  let fortune = fortuneCookie.get();
  console.log(cowsay.say({
    text: fortune,
  }));
} catch (error) {
  core.setFailed(error.message);
}
