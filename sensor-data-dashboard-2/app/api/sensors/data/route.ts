import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const data = await request.json()

        // In a real app, you would save this to a database (InfluxDB, MongoDB, PostgreSQL, etc.)
        console.log('Received Sensor Data:', data)

        return NextResponse.json({ success: true, message: 'Data received' }, { status: 200 })
    } catch (error) {
        console.error('Error processing sensor data:', error)
        return NextResponse.json({ success: false, message: 'Invalid data format' }, { status: 400 })
    }
}
