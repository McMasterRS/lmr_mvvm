import fsPromises from 'fs/promises';
import path from 'path';
import {NextResponse} from 'next/server'


const dataFilePath = path.join(process.cwd(), 'json/data.json');
export async function GET(request:Request, response: Response){
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData.toString());
    return NextResponse.json(objectData)
}