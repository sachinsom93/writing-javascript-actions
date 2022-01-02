const core = require("@actions/core");
const github = require("@actions/github");

async function run () {
    try {
        // Inputs
        const jokeBody = core.getInput("joke");
        const repoToken = core.getInput("repo-token");
        const issueTitle = core.getInput("issue-title");

        // Create octokit
        const octokit = new github.getOctokit(repoToken);

        // Create Issue
        const newIssue = await octokit.issues.create({
            repo: github.context.repo.repo,
            owner: github.context.repo.owner,
            title: issueTitle,
            body: jokeBody
        })
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

run();