
function DropdownMenu2(text) {
    let maptext = text.split(' ')
    let display = maptext[0]
    let arrow = maptext[1]

    if (display != null) {
        document.getElementById(display).style.display == "block"
            ?
            document.getElementById(display).style.display = "none"
            :
            document.getElementById(display).style.display = "block"
            ;
    }
    if (arrow != null) {
        document.getElementById(arrow).style.transform == "rotate(0deg)"
            ?
            document.getElementById(arrow).style.transform = "rotate(90deg)"
            :
            document.getElementById(arrow).style.transform = "rotate(0deg)"
            ;
    }

}


function DropdownMenu3(text) {
    let maptext = text.split(' ')
    let display = maptext[0]
    let arrow = maptext[1]

    if (display != null) {
        document.getElementById(display).style.display == "block"
            ?
            document.getElementById(display).style.display = "none"
            :
            document.getElementById(display).style.display = "block"
            ;
    }
    if (arrow != null) {
        document.getElementById(arrow).style.transform == "rotate(0deg)"
            ?
            document.getElementById(arrow).style.transform = "rotate(90deg)"
            :
            document.getElementById(arrow).style.transform = "rotate(0deg)"
            ;
    }
}

function checkdivid(textimport) {
    let a = document.querySelectorAll(textimport)
    // console.log(a.length)
    // console.log(document.getElementById(a[0].id).checked)
    if (document.getElementById(a[0].id).checked == true) {
        for (let i = 0; i < a.length; i++) {

            if (a[i] != null) {
                console.log(a[i].id)
                document.getElementById(a[i].id).checked = false


            }
        }
    } else {
        for (let i = 0; i < a.length; i++) {
            console.log(a[i].id)
            if (a[i] != null) {
                document.getElementById(a[i].id).checked = true
            }
        }

    }
}


function handleClickcheckbox(checkText) {
    console.log(checkText)
    let splitText = checkText.split(" ")
    if (document.getElementById(splitText[0]).checked == false || document.getElementById(splitText[1]).checked == false) {
        document.getElementById(splitText[0]).checked = true
        document.getElementById(splitText[1]).checked = true
    } else if (document.getElementById(splitText[0]).checked == true || document.getElementById(splitText[1]).checked == true) {
        document.getElementById(splitText[0]).checked = true
        document.getElementById(splitText[1]).checked = false
    } else if (document.getElementById(splitText[0]).checked == true || document.getElementById(splitText[1].checked == false)) {
        document.getElementById(splitText[1]).checked = true
    }


}
function handleClickAble(checkText) {
    console.log(checkText)
    document.getElementById(checkText).checked == true
        ?
        document.getElementById(checkText).checked = false
        :
        document.getElementById(checkText).checked = true
        ;

}
async function test() {

    let headersList = {
        "Accept": "*/*",
    }

    let response = await fetch("http://localhost:3333/mobile/test_permissions", {
        method: "POST",
        headers: headersList
    });

    let data = await response.json();
    console.log(data);
    // console.log(data.data[1])
    for (let i = 0; i < data.data.length; i++) {
        // console.log(data.data[i].p_id)
        let checkAccess = data.data[i].access
        let checkCreate = data.data[i].create
        let checkDelete = data.data[i].delete
        // let checkpid = data.data[i].p_id
        let checkcategory = data.data[i].category_type
        let checkArrayID =  i
        // console.log("CHECK_ID:"+i+"_"+checkcategory)
        // console.log(data.data[i].category_type)
        
        document.getElementById("array_"+checkArrayID) != null 
        ?
        document.getElementById("array_"+checkArrayID).textContent = data.data[i].category_type
        :
         console.log("false");
        // if (checkArrayID != null || checkArrayID != undefined) {
        //     // document.getElementById("array_"+checkArrayID).textContent = data.data[i].category_type;
        //     // console.log("check :: "+setarray)
        //     if(checkArrayID==i){
        //         document.getElementById("array_"+checkArrayID).textContent = data.data[i].category_type;

        //     }

        // }

        let checkPID = data.data[i].p_id
        if (checkPID != null && checkPID != undefined) {
            if (checkAccess == true) {
                let setaccess = document.getElementById('pid' + checkPID+"_access");
                if (setaccess != null && setaccess != undefined) {
                    // setaccess.checked = true
                    // document.getElementById('pid' + checkArrayID+"_access");
                }
            }
            if(checkCreate == true) {
                let setcreate = document.getElementById('pid' + checkPID+"_create");
                if (setcreate != null && setcreate != undefined) {
                    setcreate.checked = true
                }
            }
            // if(checkDelete == true) {
            //     let setcreate = document.getElementById('pid' + checkPID+"_delete");
            //     if (setcreate != null && setcreate != undefined) {
            //         setcreate.checked = true
            //     }
            // }
        }
        // if(data.data[i].access == true){
        //     document.getElementById('pid2').checked = true
        //    }
    }

    // console.log(data.data[1].access)

}
test()

