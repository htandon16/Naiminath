import { NextRequest, NextResponse } from "next/server";

export interface MyRequestBody {
    name: string;
    email:string;
    comments:string;
  }
  
export async function POST(req: NextRequest,res:NextResponse):Promise<void |Response> {
    
    try{

      const body: MyRequestBody | null =  req.body as MyRequestBody | null; 

      console.log(body);
      
      let nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'salman.khandvl@gmail.com',
          pass: 'devlups@123',
        },
        secure: true,
      })  
      const mailData = {
        from: `${body?.email}`,
        to: 'salman.khandvl@gmail.com',
        subject: `Message From ${body?.name}`,
        text: `${body?.comments} | Sent from: ${body?.email}`,
        html: `<div>${body?.comments}</div><p>Sent from:
        ${body?.email}</p>`
      }  
      transporter.sendMail(mailData, function (err: any, info: any) {
        if(err)
          console.log('akjkadad======',err)
        else
          console.log(info)
      })
      return new Response(`${res.ok}`);
    }catch(e){
      return new Response(`Error:${e}`);
    } 
}