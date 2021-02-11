const core = require('@actions/core');
const github = require('@actions/github');

try {
    const inputStr = core.getInput('string').replace(/krogertechnology\//g, '');
    console.log(`Manipulating string: ${inputStr}`);

    const lowercase = inputStr.toLowerCase();
    console.log(`lowercase: ${lowercase}`);
    core.setOutput("lowercase", lowercase);

    const uppercase = inputStr.toUpperCase();
    console.log(`uppercase: ${uppercase}`);
    core.setOutput("uppercase", uppercase.replace(/-/g, '_'));

    const capitalized = inputStr.charAt(0).toUpperCase() + inputStr.slice(1).toLowerCase();
    console.log(`capitalized: ${capitalized}`);
    core.setOutput("capitalized", capitalized);
} catch (error) {
    core.setFailed(error.message);
}
