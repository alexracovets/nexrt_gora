import { NextRequest, NextResponse } from 'next/server';
import { transporter, mailOptions } from '../../../config/nodemailer';

export async function POST(req: NextRequest) {
    const data = await req.json();

    if (!data.name || !data.email || !data.message) {
        return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: data.subject || 'No subject',
            text: "This is test",
            html: `
                <h1>Test Title</h1>
                <p>Some TEST</p>
            `,
        });
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.log(err);
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
