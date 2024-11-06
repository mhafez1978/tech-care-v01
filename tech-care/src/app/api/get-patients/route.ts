export async function GET() {
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;
  const auth = btoa(`${username}:${password}`);

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
