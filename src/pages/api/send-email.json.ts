export const prerender = false; //This will not work without this line

import type { APIRoute } from "astro";
import { experimental_AstroContainer } from "astro/container";
import { Resend } from "resend";
import UserEmailTemplate from "../../components/UserEmailTemplate.astro";
import AdminEmailTemplate from "../../components/AdminEmailTemplate.astro";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  console.log("Request Headers:", request.headers);
  console.log("Request Method:", request.method);
  const container = await experimental_AstroContainer.create();

  const data = await request.formData();
  console.log("Form Data:", Array.from(data.entries())); // Logs the entries in the formData
  const name = data.get("firstName") as string;
  const email = data.get("email") as string;
  const message = data.get("message") as string; // Validate the data - making sure values are not empty

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: `Fill out all fields.`,
      }),
      {
        status: 404,
        statusText: "Did not provide the right data",
      }
    );
  } // Sending information to Resend

  const emailAdminHtml = await container.renderToString(AdminEmailTemplate, {
    props: { firstName: name, message },
  });

  const emailUserHtml = await container.renderToString(UserEmailTemplate, {
    props: { firstName: name, message },
  });

  const sendUserResend = await resend.emails.send({
    from: "Nifty <veblabs90@gmail.com>",
    to: `${email}`,
    subject: `Hi ${name}`,
    html: emailUserHtml,
  }); // If the message was sent successfully, return a 200 response

  const sendAdminEmail = await resend.emails.send({
    from: "veblabs90@gmail.com",
    to: `veblabs90@gmail.com`,
    subject: `Submission from ${name}`,
    html: emailAdminHtml,
  }); // If the message was sent successfully, return a 200 response

  if (sendUserResend.data && sendAdminEmail) {
    return new Response(
      JSON.stringify({
        message: `Messages successfully sent!`,
      }),
      {
        status: 200,
        statusText: "OK",
      }
    ); // If there was an error sending the message, return a 500 response
  } else {
    console.log("User:", sendUserResend);
    console.log("Admin:", sendAdminEmail);
    return new Response(
      JSON.stringify({
        message: `Messages failed to send: User- ${JSON.stringify(sendUserResend.error)} Admin-${JSON.stringify(sendAdminEmail.error)} `,
      }),
      {
        status: 500,
        statusText: `Internal Server Error: User- ${JSON.stringify(sendUserResend.error)} Admin-${JSON.stringify(sendAdminEmail.error)} `,
      }
    );
  }
};
