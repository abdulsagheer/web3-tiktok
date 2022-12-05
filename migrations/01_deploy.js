const Tiktok = artifacts.require("TikTok");

module.exports = async function (deployer) {
  await deployer.deploy(Tiktok);
};
