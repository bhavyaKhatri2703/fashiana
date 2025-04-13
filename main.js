import twilio from "twilio";
import dotenv from 'dotenv';


dotenv.config();


const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = twilio(accountSid, authToken);


async function createMessage(text) {
    const message = await client.messages.create({
      body: text,
      from: "whatsapp:+14155238886",
      to: "whatsapp:+918005987704",
    });
  
  }
  
  export default createMessage
