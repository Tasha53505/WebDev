// Modules Mountain
const inlineScripts = "Inline scripts with a script type tag - the problem is the lack of code reusuibilty and the pollution of the global name space. For example, a wouldn't be able to be used again"

const scriptTags = "Next was script tags- script text/js src = '' - the problem with script tags, you'd still have to copy and paste the script tags. Also the dependency resolution - You're respinsible to make sure the scripts are added in the right order. Global name space is also still a problem  "


const IIFE = "Immediately invoked function expression, Wraps a function in brackets - meaning it wouldn't pollute the global name space. The order of the files were still lack of dependecy reoslution. "


const browserify = "It used CommonsJS - for the eirst js file, you wanted function add, module.exports  but on the second js2 file, you would use add and require tag. It used a module bundler which means it would run  the files before you loaded the website and complied the scripts into one script. Usually something like mondal.js"

const ES6 = "export and import. i.e for 1 file you can just export default. to sue the add function, you'd say import { add } from './add"

const Webpack = "module bundler (bundles js files)- meaning you can use ES6 in all browsers."

