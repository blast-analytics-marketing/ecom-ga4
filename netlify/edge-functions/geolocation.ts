import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  // Here's what's available on context.geo

  // context: {
  //   geo: {
  //     city?: string;
  //     country?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     subdivision?: {
  //       code?: string;
  //       name?: string;
  //     },
  //   }
  // }

  // return context.json({
  //   geo: context.geo,
  //   header: request.headers.get("x-nf-geo"),
  // });

    // Get the page content
    const response = await context.next();
    const page = await response.text();
  
    // Search for the placeholder
    const regex = /INCLUDE_PRICE_INFO/i;
  
    // Replace the content
    const pricingContent = context.geo.city;
    const updatedPage = page.replace(regex, pricingContent!);
    return new Response(updatedPage, response);
};