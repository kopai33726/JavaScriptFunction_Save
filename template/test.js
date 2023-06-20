
for (let i = 0; i < data.length; i++) {
    if (data[i].level == 2) {
      let importDiv = document.getElementsByClassName("A_" + i)[0];
      for (let j = 0; j < data.length; j++) {
        if (importDiv != null || importDiv != undefined) {
          if (importDiv.textContent === data[j].category_type) {
            let textpid2 = data[j].p_id;
            let conpid2 = textpid2.toString();
            let menumain2 = document.createElement("div");
            menumain2.id = "B_" + conpid2;
            // menumain2.textContent = data[j].name ;
          
            importDiv.appendChild(menumain2);
            //    var addText =  document.getElementById(menumain2.id);
            console.log("idadd : " + menumain2.id);
            console.log(i+" : " + j)
            //   addText.innerHTML += "asd";
            let textDSS =  document.getElementById(menumain2.id)
            textDSS.innerHTML = "asd"
            console.log(
              ":>>" + data[j].category_type + "_____" + importDiv.textContent + "]]"+data[j].name
            );
            // }
          }
        }
      }
    }
  }
  