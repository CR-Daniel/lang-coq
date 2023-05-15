# CodeMirror 6 language package template

This is an example repository containing a minimal [CodeMirror](https://codemirror.net/6/) language support package. The idea is to clone it, rename it, and edit it to create support for a new language.

Things you'll need to do (see the [language support example](https://codemirror.net/6/examples/lang-package/) for a more detailed tutorial):

 * `git grep EXAMPLE` and replace all instances with your language name.

 * Rewrite the grammar in `src/syntax.grammar` to cover your language. See the [Lezer system guide](https://lezer.codemirror.net/docs/guide/#writing-a-grammar) for information on this file format.

 * Adjust the metadata in `src/index.ts` to work with your new grammar.

 * Adjust the grammar tests in `test/cases.txt`.

 * Build (`npm run prepare`) and test (`npm test`).

 * Rewrite this readme file.

 * Optionally add a license.

 * Publish. Put your package on npm under a name like `codemirror-lang-EXAMPLE`.

# Testing

- change the version number in package.json (increment it)
- ATTENTION: not doing the above, later at the installation process, npm install would ignore your file
- run "npm run prepare"
- run "npm pack"
- this creates a .tgz file
- go to the main SEP repo
- go to the branch "experimental/prosemirror-with-codemirror"
- put the .tgz file in the root folder, replacing the previous one
- change the version number in package.json for the file you just put in the root folder
- run "npm install"
- run "npm run serve"
- open the index.html file from the "src" folder
