export async function json(request, response, next) {
  const buffers = [];

  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString("utf8"));
  } catch {
    request.body = {};
  }

  response.setHeader("Content-type", "application/json");
}
