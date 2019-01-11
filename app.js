import {User, Product, DirWatcher, Importer} from "./models/index";
import configJSON  from './config/config';

new User();
new Product();
console.log(configJSON.name);

var dirWatcher_1 = new DirWatcher();
var path = __dirname + "\\data";
const importer = new Importer();
dirWatcher_1.watch(path, 3000);






