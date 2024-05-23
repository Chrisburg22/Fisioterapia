import customAxios from "./customAxios"

const ENDPOINT = 'sendgrid'

interface SendEmail {
    To: string;
    Text: String;
    Subject: string;
}
export const sendEmail = async ({ Subject, Text, To }: SendEmail) => {
    try {
        const { data } = await customAxios.post(`${ENDPOINT}/feedback`, {
            To,
            Subject,
            Text,
        })

        return data;
    } catch (error) {
        throw new Error(`Something gas wrong try to send email`)
    }
}