# TechBar AngularJs and TypeScript - the 'right' way

-----------------------
Setup JavaScript only 
-----------------------

Install node: http://www.nodejs.org

Install gulp: npm install gulp -g

from a console prompt:

npm install

(change Visual Studio Code settings, see below)

Run Task: 'build-js' (just copies to the artifact folder)

run 'node TodoWebService.js' to start the server.

browse to: http://localhost:3000/build/index.html

-----------------------
Setup With TypeScript
-----------------------

Install node: http://www.nodejs.org

Install gulp: npm install gulp -g

Install tsd: npm install tsd -g

from a console prompt:

npm install

tsd install

(change Visual Studio Code settings, see below)

Run Task: 'build-ts'

run 'node TodoWebService.js' to start the server.

browse to: http://localhost:3000/build/index.html

-----------------------
Visual Studio Code
-----------------------

if you want to use a local copy of the typescript compiler
edit the file settings.json and specify the correct absolute path for "typescript.tsdk" 

Tricks:

- if you place a *tsconfig.json* file on the root VSCode will internally pick that and use it. 
  This way any .ts and .d.ts will be read and compiled and there will be no need to add /// <reference path="tsd.d.ts" /> all around.
  No comments are allowed in this file with TypeScript 1.7 and earlier versions.
  The settings should match when you have in the build script of your task runner (gulpfile.js).
  
- if you place a *jsconfig.json* file on the root VSCode will internally pick that and use it to provide some JavaScript goodies.

Suggested Plugins to install (ext install ...):
tslint
Visual Studio Light Theme

-----------------------
Update definitions:
-----------------------
tsd update -s -o
tsd rebundle

ncu --upgradeAll
npm install

-----------------------
Purge global caches:
-----------------------

tsd purge


-----------------------
Fix to the samples
-----------------------

In the 'tagged' version there were some mistakes on some files, here are the fix to apply to run each step properly:

**Fix the jsconfig.json​**
Add the right exclude paths, otherwise whenever you build the application even the files inside the 'build' artifact folder will be compiled by the editor.​

The fix is:​

"exclude": [​
"./build",​
"./typings",​
"build",​
"typings"​
]

**Fix the Gullpfile.js​**
I forgot the 'return' statement on all the gulp tasks, without that operations in every task are run concurrently (if you have task that depends on them they will be started in the correct order, but gulp will not wait for the dependent task to end):​
http://stackoverflow.com/questions/24619290/making-gulp-write-files-synchronously-before-moving-on-to-the-next-task​

The fix is:​

Add a 'return' statement to every task.​