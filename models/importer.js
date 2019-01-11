import {emitter} from "../common/event-emitter";
import {DirWatcher} from "./dirwatcher";
import csv from "convert-csv-to-json";

export class Importer {
    constructor(){
        this.dirwatcher = new DirWatcher();
        emitter.on('​dirwatcher:changed', this.importData.bind(this));
    }
    importData(files) {
        const data = this.getFilesContent(files);
        console.log(data, "data");
        return new Promise(resolve => resolve(data));

    }
    getFilesContent(files) {
        const output = [];

        files.forEach(file => {
            const fileName = file.name;
            console.log(file.path, "file.path")
            const data = csv.getJsonFromCsv(file.path);

            output.push({
                fileName,
                data
            });
        });
        return output;
    }
}