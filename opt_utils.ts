import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";
import { globSync } from "glob";

function writeToFile(filename: string, data: string) {
    writeFileSync(filename, data);
}

function gen_dot(llvm_ir_filename: string, pass: string) {
    execSync(`opt ${pass} "${llvm_ir_filename}" -disable-output -enable-new-pm=0`);
    const files = globSync(["*.dot", ".*.dot"]);
    let ret = files.map((value, index, array) => {
        return [value, readFileSync(value).toString()];
    });
    try {
        execSync("rm *.dot .*.dot");
    } catch (err) {
    }
    return ret;
}

export function process_llvm_ir(data: string, pass: string="-dot-cfg") {
    writeToFile("temp_ir.ll", data);
    return gen_dot("temp_ir.ll", pass);
}
