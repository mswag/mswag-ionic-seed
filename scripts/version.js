const { spawnSync } = require('child_process');

let branch = spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD']);
let revision = spawnSync('git', ['log', '-1', '--pretty=format:%h']);
let date = spawnSync('git', ['log', '-1', '--pretty=format:%ad', '--date=format:%Y-%m-%d %H:%M:%S']);
let author = spawnSync('git', ['log', '-1', '--pretty=format:%an']);
let tag = spawnSync('git', ['describe', '--tags']);

let version = {
  branch: '',
  revision: '',
  date: '',
  author: '',
  tag: '',
};

// branch
version.branch = branch.stdout.toString().trim();

if (branch.stderr.length > 0) {
  console.log('branch error: ' + branch.stderr.toString().trim());
  console.log('branch process exited with code ' + branch.status.toString().trim());
  console.log('---------');
}

// revision
version.revision = revision.stdout.toString().trim();

if (revision.stderr.length > 0) {
  console.log('revision error: ' + revision.stderr.toString().trim());
  console.log('revision process exited with code ' + revision.status.toString().trim());
  console.log('---------');
}

// date
version.date = date.stdout.toString().trim();

if (date.stderr.length > 0) {
  console.log('date error: ' + date.stderr.toString().trim());
  console.log('date process exited with code ' + date.status.toString().trim());
  console.log('---------');
}

// author
version.author = author.stdout.toString().trim();

if (author.stderr.length > 0) {
  console.log('author error: ' + author.stderr.toString().trim());
  console.log('author process exited with code ' + author.status.toString().trim());
  console.log('---------');
}

// tag
version.tag = tag.stdout.toString().split('-')[0];

if (tag.stderr.length > 0) {
  if (tag.stderr.toString().trim() !== 'fatal: No names found, cannot describe anything.') {
    console.log('tag error: ' + tag.stderr.toString().trim());
    console.log('tag process exited with code ' + tag.status.toString().trim());
    console.log('---------');
  }
}

console.log(JSON.stringify(version));
process.env.VERSION = JSON.stringify(version);

module.exports = version;
