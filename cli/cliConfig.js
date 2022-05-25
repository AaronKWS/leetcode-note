const path = require("path");
const fs = require("fs-extra");
const chalk = require("chalk");

module.exports = function (creator, options, dirPath, callback) {
    const { name, num } = options;

    // 获取当前命令执行的目录
    const currentCWDPath = process.cwd();

    // 模版文件内相关文件引用路径
    const projectPath = path.join(
        currentCWDPath,
        "script",
        dirPath,
        `../${name}`
    );

    // 同步创建目录
    fs.mkdirSync(projectPath);

    // 将文件添加到内存
    creator.copyTpl("index.js", path.join(projectPath, "index.js"));
    creator.copyTpl(
        "leetcode-1.md",
        path.join(projectPath, `leetcode-${num}.md`)
    );

    creator.fsEditorStore.commit(() => {
        console.log();
        console.log(`${chalk.grey(`创建项目: ${name}`)} ${chalk.green("✔ ")}`);
        console.log(
            `${chalk.grey(`创建文件: ${name}/index.js`)} ${chalk.green("✔ ")}`
        );
        console.log(
            `${chalk.grey(
                `创建文件: ${name}/leetcode-${num}.md`
            )} ${chalk.green("✔ ")}`
        );

        callback();
    });
};
