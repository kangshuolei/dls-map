import fs from "fs";
import { resolve } from "path";
import { pkgPath } from "./paths";
//保留的文件
const stayFile = ["package.json", "README.md"];

const delPath = async (path: string) => {
    let files: string[] = [];

    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);

        for (const file of files) {
            let curPath = resolve(path, file);

            if (fs.statSync(curPath).isDirectory()) {
                // recurse
                if (file != "node_modules") await delPath(curPath);
            } else {
                // delete file
                if (!stayFile.includes(file)) {
                    fs.unlinkSync(curPath);
                }
            }
        }

        if (path != `${pkgPath}/dls`) fs.rmdirSync(path);
    }
};
export default delPath;
