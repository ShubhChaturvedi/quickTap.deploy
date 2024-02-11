import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { generate } from "./helpers/generate";
import { simpleGit } from 'simple-git';
import path from 'path'
import { getAllFilesFromDir } from './helpers/files'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.post('/deploy', async (req , res) =>{
    const repoUrl : string = req.body.repoUrl;
    const id : String = generate();
    await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));
    const allFiles: string[] = getAllFilesFromDir(path.join(__dirname, `output/${id}`))

    console.log(allFiles);

    res.send({
        deployId : id
    })
})


app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})
