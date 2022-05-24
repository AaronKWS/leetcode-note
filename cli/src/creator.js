const path = require("path");
const fs = require("fs-extra");
const chalk = require("chalk");
const inquirer = require("inquirer");
const memFs = require("mem-fs");
const memFsEditor = require("mem-fs-editor");
const figlet = require("figlet");
const ora = require("ora");

const text = figlet.textSync("Demo Cli");

const projectDir = process.argv[2];

if (!projectDir) {
    const spinner = ora();

    spinner.fail(chalk.red("请指定项目生成位置\n"));
    console.log(`   npm run new ${chalk.cyan("script/hot-100/xxx")}`);
    process.exit();
}

let projectPath = path.resolve(projectDir);

if (!isSafeToCreateProjectIn(projectPath)) {
    const spinner = ora();

    spinner.fail(
        `该文件夹（${chalk.green(projectPath)}）已经存在，且存在导致冲突的文件.`
    );
    process.exit();
}

console.log(chalk.green(text));

class Creator {
    constructor() {
        const fsStore = memFs.create();
        this.fsEditorStore = memFsEditor.create(fsStore);

        this.options = {
            name: "leetcode",
            desc: "A demo of leetcode",
        };
    }

    // 初始化操作
    init() {
        console.log(chalk.green("demo app😼："));
        this.ask().then((result) => {
            this.options = { ...this.options, ...result };

            this.write();
        });
    }

    // 构建前用户需要输入
    ask() {
        const prompt = [];

        // 问题1: 输入文件名
        prompt.push({
            type: "input",
            message: "请输入题目",
            name: "name",
            default: path.basename(projectPath), // 默认值
            validate: (name) => {
                if (!name) {
                    return "请输入题目";
                }

                if (fs.existsSync(name)) {
                    return "题目重复!";
                }

                return true;
            },
        });

        // 问题2: 输入题号
        prompt.push({
            type: "input",
            message: "请输入题号",
            name: "num",
            default: "1", // 默认值
        });

        return inquirer.prompt(prompt);
    }

    // 写入文件操作
    write() {
        const spinner = ora(chalk.green("demo app 构建开始")).start();
        console.log();
        const buildDir = require("../cliConfig");

        buildDir(this, this.options, projectDir, () => {
            console.log(chalk.green("🔨创建完成🎉🎉🎉"));
            spinner.stop();
        });
    }

    getFilePath(file) {
        return path.resolve(__dirname, "../template", file);
    }

    // 拷贝template文件（携带ejs语法）
    copyTpl(file, to, option = {}, isEjs = false) {
        const filePath = this.getFilePath(file);
        console.log(chalk.green("create: "), filePath);

        if (isEjs) {
            this.fsEditorStore.copyTpl(filePath, to, option);
        } else {
            this.fsEditorStore.copy(filePath, to);
        }
    }
}

module.exports = new Creator();

function isSafeToCreateProjectIn(root) {
    var validFiles = [
        ".DS_Store",
        "Thumbs.db",
        ".git",
        ".gitignore",
        ".idea",
        "README.md",
        "LICENSE",
    ];

    return (
        !fs.existsSync(root) ||
        fs.readdirSync(root).every(function (file) {
            return validFiles.indexOf(file) >= 0;
        })
    );
}
