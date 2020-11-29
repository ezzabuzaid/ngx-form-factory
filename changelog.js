const child = require("child_process");
const fs = require("fs");

const output = child
    .execSync(`git log --format=%B%H----DELIMITER----`)
    .toString("utf-8");

const commitsArray = output
    .split("----DELIMITER----\n")
    .map(commit => {
        const [message, sha] = commit.split("\n");

        return { sha, message };
    })
    .filter(commit => Boolean(commit.sha));

const currentChangelog = fs.readFileSync("./CHANGELOG.md", "utf-8");
const currentVersion = require('./projects/ngx-form-factory/package.json').version;
let newChangelog = `# Version ${currentVersion} (${
    new Date().toISOString().split("T")[0]
    })\n\n`;

const features = [];
const chores = [];
const fix = [];
const ci = [];
const build = [];

commitsArray.forEach(commit => {
    accumlateCommits(chores, commit, 'chore');
    accumlateCommits(features, commit, 'feat');
    accumlateCommits(fix, commit, 'fix');
    accumlateCommits(ci, commit, 'ci');
    accumlateCommits(build, commit, 'build');
});

function accumlateCommits(commits, commit, commitType) {
    if (commit.message.startsWith(`${commitType}: `)) {
        commits.push(
            `* ${commit.message.replace(`${commitType}: `, "")} ([${commit.sha.substring(
                0,
                6
            )}](https://github.com/ezzabuzaid/ngx-form-factory/commit/${
            commit.sha
            }))\n`
        );
    }
}

function format(commits, type) {
    if (commits.length) {
        newChangelog += `## ${type}\n`;
        commits.forEach(commit => {
            newChangelog += commit;
        });
        newChangelog += '\n';
    }
}
format(ci, 'CI');
format(fix, 'Fix');
format(build, 'Build');
format(features, 'Features');
format(chores, 'Chores');

// prepend the newChangelog to the current one
fs.writeFileSync("./CHANGELOG.md", `${newChangelog}${currentChangelog}`);