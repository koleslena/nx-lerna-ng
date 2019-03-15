module.exports = {
  name: "nx-lerna-ng",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/nx-lerna-ng/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
