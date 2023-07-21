import fsPromises from 'fs/promises';
import path from 'path';
import {NextResponse} from 'next/server'


const dataFilePath = path.join(process.cwd(), 'json/data.json');

export async function POST(request:Request, response: Response) {
    try {
        const jsonData = await fsPromises.readFile(dataFilePath);
        const data = JSON.parse(jsonData.toString());

        // Get the data from the request body
        const body = await request.json();

        // Add new item
        data.push(
            {
                id: data.length + 1,
                name: body.itemText
            }
        )

        // Convert the object back to a JSON string
        const updatedData = JSON.stringify(data);
        // Save data in data.json
        await fsPromises.writeFile(dataFilePath, updatedData);
        // Send a success response
        return NextResponse.json({status: 200, message: 'Item added successfully'});
    } catch (error) {
        console.error(error);
        // Send an error response
        return NextResponse.json({status: 500, message: 'Error storing data'});
    }
}