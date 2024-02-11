import { bool } from 'aws-sdk/clients/signer';
import fs from 'fs';
import path from 'path';


export function getAllFilesFromDir(folderPath : string) : string[] {
    let response: string[] = [];

    const allFilesAndFolders = fs.readdirSync(folderPath);
    
    allFilesAndFolders.forEach(file => {
        const fullFilePath = path.join(folderPath, file);

        if(fs.statSync(fullFilePath).isDirectory()){
            const dirCheck : boolean = fullFilePath.split('/')[fullFilePath.split('/').length - 1] !== 'node_modules';
            if(dirCheck) response = response.concat(getAllFilesFromDir(fullFilePath));
        }
        else response.push(fullFilePath);


    })

    return response;
}