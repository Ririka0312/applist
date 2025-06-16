import express from "express";
import path from "path";
import { readFile, writeFile } from "fs/promises";

export const app = express();

const __dirname = import.meta.dirname;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// /api/flashcards に GETリクエストが来たら "flashcards.json" の内容を返す
//ルートを定義
app.get("/api/flashcards",async(req,res)=>{
    //JSON ファイルを読み込むためにファイルへのパスを定義
    const flashcardsJsonPath = path.join(__dirname,"data","flashcards.json")
    const data = await readFile(flashcardsJsonPath);
    //読み込んだデータを JSON 形式でレスポンスとして返す
    const flashcardsList = JSON.parse(data);
    res.json(flashcardsList);
})


///api/flashcards に POSTリクエストが来たら "flashcards.json" に追加し、追加したデータを返す
