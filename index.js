const core = reuire('@actions/core')

try {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello', ${nameToGreet}!`);
    core.setOutput("time", time);
} catch (error) {
    core.setFailed(error.message);
}