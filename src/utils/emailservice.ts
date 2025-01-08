import emailjs from 'emailjs-com';

export const sendEmail = async (templateParams:Record<string,string>) => {

    try{
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

        const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
        return response;
    }
    catch(err){
        console.error("FAILED TO SEND EMAIL", err);
        throw err;
    }
}