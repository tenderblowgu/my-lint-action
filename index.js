const core = require('@actions/core');
const exec = require('@actions/exec');
const path = require('path');

async function run() {
  try {
    const workingDir = core.getInput('working-directory');
    const fix = core.getInput('fix') === 'true';

    core.info(`Running ESLint in ${workingDir}`);

    const args = ['eslint', '.', '--ext', '.js,.ts,.jsx,.tsx'];
    if (fix) args.push('--fix');

    let output = '';
    await exec.exec('npx', args, {
      cwd: path.resolve(workingDir),
      listeners: { stdout: (d) => { output += d.toString(); } },
      ignoreReturnCode: true,
    });

    const issueCount = (output.match(/problems?/g) || []).length;
    core.setOutput('issues-found', String(issueCount));
    core.info(`ESLint complete. Issues: ${issueCount}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
