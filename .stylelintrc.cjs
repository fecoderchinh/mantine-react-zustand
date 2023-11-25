// https://stylelint.io/user-guide/rules/list

module.exports = {
    "extends": [
      "stylelint-config-recommended",
      "stylelint-config-standard"
    ],
    "rules": {
      "at-rule-no-unknown": [ true, {
        "ignoreAtRules": [
          "extends",
          "tailwind",
          "layer"
        ]
      }],
      "block-no-empty": null,
      "media-query-no-invalid": false
    }
  }