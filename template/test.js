async function test() {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    r_id: 1,
  });

  let response = await fetch("http://localhost:3333/mobile/test_permissions", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  console.log(data);
}
test();
