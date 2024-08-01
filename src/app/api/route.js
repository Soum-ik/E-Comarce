import { NextResponse } from "next/server";


export async function GET(req, res) {
    try {
        return NextResponse.json({ status: 'Success', });
    } catch (error) {
        console.error('Error occurred:', error);
        return NextResponse.json({ status: 'fail', error: error });
    }
}