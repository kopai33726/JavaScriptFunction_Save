async function test_roles() {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    r_id: 1,
  });

  let response = await fetch("http://localhost:3333/mobile/test_roles", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });
  let dataA = await response.json();
  let data = dataA.data;
  console.log(data);
  //  create div
  const styles_rolesdata = `
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding : 20px 30px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
    cursor: pointer;
    `;
  const ElementRes = document.getElementById("roles_res");
  for (let i = 0; i < data.length; i++) {
    const DataRespon = document.createElement("div");
    DataRespon.className = "roles_data";
    DataRespon.id = "rolesdata_" + data[i].r_id;
    // DataRespon.href = "/pages/showroles.html";
    DataRespon.innerHTML =
      "<div class='data_id' id=" +
      data[i].r_id +
      ">" +
      data[i].role_name +
      "</div>";
    DataRespon.style.cssText = styles_rolesdata;
    ElementRes.appendChild(DataRespon);
    // console.log(DataRespon);
  }
  const elements = document.querySelectorAll('.roles_data');

  elements.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        const elementinside = element.querySelector(".data_id")

        const params = new URLSearchParams();
        params.append("r_id", elementinside.id);
  
        const nextPageUrl = "/pages/showroles.html?" + params.toString();

        window.location.href = nextPageUrl;
        console.log('Element ID:', element.id);
      });
  });

}
test_roles();
