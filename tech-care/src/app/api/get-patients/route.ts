import { NextResponse } from "next/server";

export async function GET(req: Request) {
  let username = "coalition";
  let password = "skills-test";
  let auth = btoa(`${username}:${password}`);

  const myHeaders = { Authorization: `Basic ${auth}` };
  const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
  try {
    const data = await fetch(url, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });
    const response = await data.text();
    console.log(response);
    return new Response(response);
  } catch (err) {
    console.log(err);
  }
}
