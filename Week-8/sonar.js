const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    options: {
      "sonar.login": "admin",
      "sonar.password": "Neillah-4life99",
      "sonar.projectName": "Sonar-Test",
      "sonar.projectDescription": 'Description for "Sonar-Test" project...',
      "sonar.sources": ".",
      "sonar.tests": ".",
      "sonar.inclusions": ".",
      "sonar.testExecutionReportPaths": "coverage/test-reporter.xml",
    },
  },
  () => process.exit()
);
