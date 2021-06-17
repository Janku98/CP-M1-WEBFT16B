const { createClient } = require("@supabase/supabase-js");

const gitRemoteOriginUrl = require("git-remote-origin-url");
const GitUrlParse = require("git-url-parse");

module.exports = function report(data) {
  const supabaseUrl = "https://xezlkjddhfzkqchdwhxc.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjQxNzM1MywiZXhwIjoxOTMxOTkzMzUzfQ.hMtXLyFhbhz7HiVvX_ogquA1kTKTdCABLs2EKZCsLX0";
  const supabase = createClient(supabaseUrl, supabaseKey);
  try {
    const {
      numTotalTests: totalTests,
      numPendingTests: pendingTests,
      numFailedTests: failedTests,
      numPassedTests: passedTests,
      testResults,
    } = data;
    if (totalTests > 0)
      gitRemoteOriginUrl()
        .then((remote) => {
          const { name: repo, owner: github } = GitUrlParse(remote);
          return supabase.from("evaluationTests").insert([
            {
              totalTests,
              pendingTests,
              failedTests,
              passedTests,
              remote: process.env.GITHUB_ACTIONS || false,
              testResults: testResults.reduce((result, { testResults }) => {
                const mapResult = testResults.map(({ status, title }) => ({
                  status,
                  title,
                }));
                return [...result, ...mapResult];
              }, []),
              repo,
              github,
            },
          ]);
        })
        .then((results) => {})
        .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
  return data;
};
