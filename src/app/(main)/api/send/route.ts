import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template";




export async function POST() {

    // const body = await req.json();
    // // const { name, email, message } = body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const {data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ["mailhome.henry@gmail.com"],
            subject: "Hello world",
            react: EmailTemplate({ firstName: "Jerry"}),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
  
}
