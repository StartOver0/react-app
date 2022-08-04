
const fs = require('fs');
const folderName = process.argv[2];

fs.mkdirSync(folderName);
const str = `import './${folderName}.css';

export default function ${folderName}(){
  return(
    <p>You are in ${folderName}</p>
  );
}
`;

fs.writeFileSync(`${folderName}/${folderName}.css`, "")
fs.writeFileSync(`${folderName}/${folderName}.js`, str)


