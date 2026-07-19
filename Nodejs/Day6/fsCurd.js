const fs=require('fs');
// fs.writeFileSync("files/banana.txt", "kela khabe?");
// fs.unlinkSync("files/apple.txt");

// fs.appendFileSync("files/banana.txt","khabe na ki?");
// const data=fs.readFileSync("files/banana.txt", "utf-8");
// console.log(data);

const operation = process.argv[2];

if (operation === "write") {
    const name = process.argv[3];
    const content = process.argv[4];

    const fullName = `files/${name}.txt`;

    fs.writeFileSync(fullName, content);
    console.log("File created successfully.");
}

else if (operation === "read") {
    const name = process.argv[3];
    const fullName = `files/${name}.txt`;

    if (fs.existsSync(fullName)) {
        const data = fs.readFileSync(fullName, "utf-8");
        console.log(data);
    } else {
        console.log("File does not exist.");
    }
}

else if (operation === "append") {
    const name = process.argv[3];
    const content = process.argv[4];

    const fullName = `files/${name}.txt`;

    if (fs.existsSync(fullName)) {
        fs.appendFileSync(fullName, "\n" + content);
        console.log("Content appended.");
    } else {
        console.log("File does not exist.");
    }
}

else if (operation === "delete") {
    const name = process.argv[3];
    const fullName = `files/${name}.txt`;

    if (fs.existsSync(fullName)) {
        fs.unlinkSync(fullName);
        console.log("File deleted.");
    } else {
        console.log("File not found.");
    }
}

else if (operation === "rename") {
    const oldName = process.argv[3];
    const newName = process.argv[4];

    const oldFile = `files/${oldName}.txt`;
    const newFile = `files/${newName}.txt`;

    if (fs.existsSync(oldFile)) {
        fs.renameSync(oldFile, newFile);
        console.log("File renamed.");
    } else {
        console.log("File not found.");
    }
}

else if (operation === "copy") {
    const source = process.argv[3];
    const destination = process.argv[4];

    const sourceFile = `files/${source}.txt`;
    const destinationFile = `files/${destination}.txt`;

    if (fs.existsSync(sourceFile)) {
        fs.copyFileSync(sourceFile, destinationFile);
        console.log("File copied.");
    } else {
        console.log("Source file not found.");
    }
}

else if (operation === "list") {

    const files = fs.readdirSync("files");

    console.log("Files:");

    files.forEach((file, index) => {
        console.log(`${index + 1}. ${file}`);
    });

}

else if (operation === "exists") {
    const name = process.argv[3];
    const fullName = `files/${name}.txt`;

    if (fs.existsSync(fullName)) {
        console.log("File exists.");
    } else {
        console.log("File does not exist.");
    }
}

else {
    console.log(`
Available Commands

node index.js write filename "content"

node index.js read filename

node index.js append filename "new content"

node index.js delete filename

node index.js rename oldFile newFile

node index.js copy sourceFile destinationFile

node index.js list

node index.js exists filename
`);
}