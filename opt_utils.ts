import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";
import { globSync } from "glob";

function writeToFile(filename: string, data: string) {
    writeFileSync(filename, data);
}

function gen_dot(llvm_ir_filename: string) {
    // given temp llvm ir filename, what's correct?
    try {
        execSync("rm *.dot .*.dot");
    } catch (err) {
    }
    execSync(`opt -dot-cfg "${llvm_ir_filename}" -disable-output -enable-new-pm=0`);
    const files = globSync(["*.dot", ".*.dot"]);
    return files.map((value, index, array) => {
        return [value, readFileSync(value).toString()];
    });
}

export function process_llvm_ir(data: string) {
    writeToFile("temp_ir.ll", data);
    return gen_dot("temp_ir.ll");
}
