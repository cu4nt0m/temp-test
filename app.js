//npm init for package.json creation
//npm init -y for package.json creation automatically

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems);