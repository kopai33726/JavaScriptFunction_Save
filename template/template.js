async function test() {
    let headersList = {
        Accept: "*/*",
    };

    let response = await fetch("http://localhost:3333/mobile/test_permissions", {
        method: "POST",
        headers: headersList,
    });

    let resdata = await response.json();
    let data = resdata.data;

    console.log(data);
    //crate ELEMENT

    //
    async function LenderAllElement() {
        let levelarray = 0;
        const svgArrow = "./arrow_left.svg";
        var templateID = await document.getElementsByClassName(
            "Adminstator_menu"
        )[0];
        if (templateID != null) {
            var DivContentTemplate = await document.createElement("div");
            DivContentTemplate.id = "content_menumain";
            DivContentTemplate.className = "ct_mn";
            templateID.appendChild(DivContentTemplate);
        }

        // Fetch Level
        for (let i = 0; i < data.length; i++) {
            let importDiv = document.getElementById("content_menumain");
            if (importDiv != null) {
                if (data[i].level == 1) {
                    const menumain = document.createElement("div");
                    menumain.id = "A_LV1_" + data[i].p_id;
                    menumain.className = "cm_l1_tp";
                    importDiv.appendChild(menumain);

                    const divIndiv = document.getElementById(menumain.id);

                    const divCreate = document.createElement("div");
                    divCreate.className = "l1_container";
                    divCreate.id = "l1_content_" + data[i].p_id;
                    divIndiv.appendChild(divCreate);

                    const spaceDiv = document.createElement("div");
                    spaceDiv.id = "SPACE_" + data[i].p_id;
                    spaceDiv.className = "cm_space";
                    divIndiv.appendChild(spaceDiv);



                    const divInCreate = document.getElementById(divCreate.id);

                    const divSVG = document.createElement("img");
                    divSVG.src = svgArrow;
                    divSVG.className = "svgImg";
                    divInCreate.appendChild(divSVG);

                    const divCreateinDiv = document.createElement("div");
                    divCreateinDiv.className = "l1_content";
                    divCreateinDiv.textContent = data[i].name;
                    divCreateinDiv.id = "A_" + data[i].p_id;
                    divInCreate.appendChild(divCreateinDiv);

                    const choiceindiv = document.getElementById(spaceDiv.id);
                    const divChoicemain = document.createElement("div");
                    divChoicemain.className = "choice_menumain";
                    divChoicemain.id = "choice_" + data[i].p_id
                    divChoicemain.textContent = ''
                    choiceindiv.appendChild(divChoicemain);
                    const useSwitch = data[i].use_switch
                    const useAcces = data[i].access
                    const useCreate = data[i].create
                    const useDelete = data[i].delete
                    const useModify = data[i].modify
                    if (useSwitch == true) {
                        // console.log(data[i].name)
                        // console.log("switch : " + useSwitch)
                        // console.log("==============================")
                        const choice_switch = document.getElementById(divChoicemain.id)

                        const divChoicemainw = document.createElement("div");
                        divChoicemainw.className = "choice_main";
                        divChoicemainw.id = "checkswitch_" + data[i].p_id
                        choice_switch.appendChild(divChoicemainw)


                        const getElementSwitch = document.getElementById(divChoicemainw.id)
                        const divChoicemain_switch = document.createElement("input");
                        const textContent = document.createElement("span");
                        divChoicemain_switch.className = "choicez";
                        divChoicemain_switch.id = "switch_" + data[i].p_id
                        divChoicemain_switch.value = "checkbox_" + data[i].p_id
                        divChoicemain_switch.setAttribute("type", "checkbox");
                        textContent.textContent = "ใช้งาน"
                        getElementSwitch.appendChild(divChoicemain_switch);
                        getElementSwitch.appendChild(textContent);
                    }
                    if (useAcces != null) {
                        // console.log(useAcces)
                        const choice_assces = document.getElementById(divChoicemain.id)
                        const divChoicemain_assces = document.createElement("div");
                        divChoicemain_assces.className = "choice_main";
                        divChoicemain_assces.id = "checkacces_" + data[i].p_id
                        choice_assces.appendChild(divChoicemain_assces)
                        
                        const getDivchoicemain = document.getElementById(divChoicemain_assces.id)
                        const divChoiceaccessinput = document.createElement("input");
                        const textaccess = document.createElement("span");
                        divChoiceaccessinput.className = "choicez"
                        divChoiceaccessinput.id = "access_" + data[i].p_id
                        divChoiceaccessinput.value = "checkbox_" + data[i].p_id
                        divChoiceaccessinput.setAttribute("type", "checkbox");
                        textaccess.textContent = "เข้าถึง"
                        getDivchoicemain.appendChild(divChoiceaccessinput);
                        getDivchoicemain.appendChild(textaccess);

                    }
                    if (useCreate != null) {
                        // console.log(usecreate)
                        const choice_create = document.getElementById(divChoicemain.id)
                        const divChoicemain_create = document.createElement("div");
                        divChoicemain_create.className = "choice_main";
                        divChoicemain_create.id = "checkcreate_" + data[i].p_id
                        choice_create.appendChild(divChoicemain_create)
                        
                        const getDivchoicemain = document.getElementById(divChoicemain_create.id)
                        const divChoicecreatesinput = document.createElement("input");
                        const textcreates = document.createElement("span");
                        divChoicecreatesinput.className = "choicez"
                        divChoicecreatesinput.id = "create_" + data[i].p_id
                        divChoicecreatesinput.value = "checkbox_" + data[i].p_id
                        divChoicecreatesinput.setAttribute("type", "checkbox");
                        textcreates.textContent = "สร้าง"
                        getDivchoicemain.appendChild(divChoicecreatesinput);
                        getDivchoicemain.appendChild(textcreates);

                    }
                    if (useModify != null) {
                        // console.log(usemodify)
                        const choice_modify = document.getElementById(divChoicemain.id)
                        const divChoicemain_modify = document.createElement("div");
                        divChoicemain_modify.className = "choice_main";
                        divChoicemain_modify.id = "checkmodify_" + data[i].p_id
                        choice_modify.appendChild(divChoicemain_modify)
                        
                        const getDivchoicemain = document.getElementById(divChoicemain_modify.id)
                        const divChoicemodifysinput = document.createElement("input");
                        const textmodifys = document.createElement("span");
                        divChoicemodifysinput.className = "choicez"
                        divChoicemodifysinput.id = "modify_" + data[i].p_id
                        divChoicemodifysinput.value = "checkbox_" + data[i].p_id
                        divChoicemodifysinput.setAttribute("type", "checkbox");
                        textmodifys.textContent = "แก้ไข"
                        getDivchoicemain.appendChild(divChoicemodifysinput);
                        getDivchoicemain.appendChild(textmodifys);

                    }
                    if (useDelete != null) {
                        // console.log(usedelete)
                        const choice_delete = document.getElementById(divChoicemain.id)
                        const divChoicemain_delete = document.createElement("div");
                        divChoicemain_delete.className = "choice_main";
                        divChoicemain_delete.id = "checkdelete_" + data[i].p_id
                        choice_delete.appendChild(divChoicemain_delete)
                        
                        const getDivchoicemain = document.getElementById(divChoicemain_delete.id)
                        const divChoicedeletesinput = document.createElement("input");
                        const textdeletes = document.createElement("span");
                        divChoicedeletesinput.className = "choicez"
                        divChoicedeletesinput.id = "delete_" + data[i].p_id
                        divChoicedeletesinput.value = "checkbox_" + data[i].p_id
                        divChoicedeletesinput.setAttribute("type", "checkbox");
                        textdeletes.textContent = "ลบ"
                        getDivchoicemain.appendChild(divChoicedeletesinput);
                        getDivchoicemain.appendChild(textdeletes);

                    }



                }
            }
        }
        // Fetch Level 2

        for (let z = 0; z < data.length; z++) {
            const parent = await document.querySelector("#A_" + z);
            const divSpace = document.querySelector("#SPACE_" + z);

            if (parent != null) {
                for (let i = 0; i < data.length; i++) {
                    addText();
                    async function addText() {
                        if (data[i].p_id != null || data[i].p_id != undefined) {
                            if (data[i].level == 2) {
                                if (parent.textContent != null) {
                                    let ss = parent.textContent;

                                    let zz = data[i].category_type;
                                    if (ss === zz) {
                                       
                                        // const pindivspace = document.querySelector("#B_SPACE_" + z);
                                       

                                        const p = document.createElement("div");
                                        p.className = "cm_l2_tp";
                                        p.id = "B_" + data[i].p_id;

                                        divSpace.appendChild(p);

                                        const divContainerlv2 = document.getElementById(p.id)
                                        const createDivlv2 = document.createElement("div");
                                        createDivlv2.className = "l2_container";
                                        createDivlv2.id = "l2_container_" + data[i].p_id
                                        divContainerlv2.appendChild(createDivlv2);

                                        const divInCreate = document.getElementById(createDivlv2.id);
                                        const divSVG = document.createElement("img");
                                        divSVG.src = svgArrow;
                                        divSVG.className = "svgImg";
                                        divInCreate.appendChild(divSVG);

                                        // const inConainerLv2 = document.getElementById(createDivlv2.id)
                                        const contentlv2 = document.createElement("span")
                                        // content.textContent = data[i].name
                                        contentlv2.id = "contentlv2_" + data[i].p_id;
                                        divInCreate.appendChild(contentlv2)
                                        let ele = document.getElementById(
                                            contentlv2.id
                                        );
                                        if (ele != null) {
                                            ele.innerHTML += data[i].name;
                                        }

                                        const createDivlv3 = document.createElement("div")
                                        createDivlv3.className = "l3_container";
                                        createDivlv3.id = "l3_container_" + data[i].p_id
                                        divContainerlv2.appendChild(createDivlv3)

                                        const divCheckboxlv2 = document.createElement("div")
                                        divCheckboxlv2.className = "checkbox_container";
                                        divCheckboxlv2.id = "checkbox_container_" + data[i].p_id
                                        createDivlv3.appendChild(divCheckboxlv2)
                                        const divCheckboxlv3 = document.createElement("div")
                                        divCheckboxlv3.className = "checkbox_container";
                                        divCheckboxlv3.id = "checkbox_incontent_" + data[i].p_id
                                        createDivlv3.appendChild(divCheckboxlv3)
                                        const useSwitch = data[i].use_switch
                                        const useAcces = data[i].access
                                        const useCreate = data[i].create
                                        const useDelete = data[i].delete
                                        const useModify = data[i].modify
                                        if (useSwitch == true) {
                                            // console.log(data[i].name)
                                            // console.log("switch : " + useSwitch)
                                            // console.log("==============================")
                                            const choice_switch = document.getElementById(divCheckboxlv2.id)
                    
                                            const divCheckboxlv2w = document.createElement("div");
                                            divCheckboxlv2w.className = "choice_main";
                                            divCheckboxlv2w.id = "checkswitch_" + data[i].p_id
                                            choice_switch.appendChild(divCheckboxlv2w)
                    
                    
                                            const getElementSwitch = document.getElementById(divCheckboxlv2w.id)
                                            const divCheckboxlv2_switch = document.createElement("input");
                                            const textContent = document.createElement("span");
                                            divCheckboxlv2_switch.className = "choicez";
                                            divCheckboxlv2_switch.id = "switch_" + data[i].p_id
                                            divCheckboxlv2_switch.value = "checkbox_" + data[i].p_id
                                            divCheckboxlv2_switch.setAttribute("type", "checkbox");
                                            textContent.textContent = "ใช้งาน"
                                            getElementSwitch.appendChild(divCheckboxlv2_switch);
                                            getElementSwitch.appendChild(textContent);
                                        }
                                        if (useAcces != null) {
                                            // console.log(useAcces)
                                            const choice_assces = document.getElementById(divCheckboxlv2.id)
                                            const divCheckboxlv2_assces = document.createElement("div");
                                            divCheckboxlv2_assces.className = "choice_main";
                                            divCheckboxlv2_assces.id = "checkacces_" + data[i].p_id
                                            choice_assces.appendChild(divCheckboxlv2_assces)
                                            
                                            const getdivCheckboxlv2 = document.getElementById(divCheckboxlv2_assces.id)
                                            const divChoiceaccessinput = document.createElement("input");
                                            const textaccess = document.createElement("span");
                                            divChoiceaccessinput.className = "choicez"
                                            divChoiceaccessinput.id = "access_" + data[i].p_id
                                            divChoiceaccessinput.value = "checkbox_" + data[i].p_id
                                            divChoiceaccessinput.setAttribute("type", "checkbox");
                                            textaccess.textContent = "เข้าถึง"
                                            getdivCheckboxlv2.appendChild(divChoiceaccessinput);
                                            getdivCheckboxlv2.appendChild(textaccess);
                    
                                        }
                                        if (useCreate != null) {
                                            // console.log(usecreate)
                                            const choice_create = document.getElementById(divCheckboxlv2.id)
                                            const divCheckboxlv2_create = document.createElement("div");
                                            divCheckboxlv2_create.className = "choice_main";
                                            divCheckboxlv2_create.id = "checkcreate_" + data[i].p_id
                                            choice_create.appendChild(divCheckboxlv2_create)
                                            
                                            const getdivCheckboxlv2 = document.getElementById(divCheckboxlv2_create.id)
                                            const divChoicecreatesinput = document.createElement("input");
                                            const textcreates = document.createElement("span");
                                            divChoicecreatesinput.className = "choicez"
                                            divChoicecreatesinput.id = "create_" + data[i].p_id
                                            divChoicecreatesinput.value = "checkbox_" + data[i].p_id
                                            divChoicecreatesinput.setAttribute("type", "checkbox");
                                            textcreates.textContent = "สร้าง"
                                            getdivCheckboxlv2.appendChild(divChoicecreatesinput);
                                            getdivCheckboxlv2.appendChild(textcreates);
                    
                                        }
                                        if (useModify != null) {
                                            // console.log(usemodify)
                                            const choice_modify = document.getElementById(divCheckboxlv2.id)
                                            const divCheckboxlv2_modify = document.createElement("div");
                                            divCheckboxlv2_modify.className = "choice_main";
                                            divCheckboxlv2_modify.id = "checkmodify_" + data[i].p_id
                                            choice_modify.appendChild(divCheckboxlv2_modify)
                                            
                                            const getdivCheckboxlv2 = document.getElementById(divCheckboxlv2_modify.id)
                                            const divChoicemodifysinput = document.createElement("input");
                                            const textmodifys = document.createElement("span");
                                            divChoicemodifysinput.className = "choicez"
                                            divChoicemodifysinput.id = "modify_" + data[i].p_id
                                            divChoicemodifysinput.value = "checkbox_" + data[i].p_id
                                            divChoicemodifysinput.setAttribute("type", "checkbox");
                                            textmodifys.textContent = "แก้ไข"
                                            getdivCheckboxlv2.appendChild(divChoicemodifysinput);
                                            getdivCheckboxlv2.appendChild(textmodifys);
                    
                                        }
                                        if (useDelete != null) {
                                            // console.log(usedelete)
                                            const choice_delete = document.getElementById(divCheckboxlv2.id)
                                            const divCheckboxlv2_delete = document.createElement("div");
                                            divCheckboxlv2_delete.className = "choice_main";
                                            divCheckboxlv2_delete.id = "checkdelete_" + data[i].p_id
                                            choice_delete.appendChild(divCheckboxlv2_delete)
                                            
                                            const getdivCheckboxlv2 = document.getElementById(divCheckboxlv2_delete.id)
                                            const divChoicedeletesinput = document.createElement("input");
                                            const textdeletes = document.createElement("span");
                                            divChoicedeletesinput.className = "choicez"
                                            divChoicedeletesinput.id = "delete_" + data[i].p_id
                                            divChoicedeletesinput.value = "checkbox_" + data[i].p_id
                                            divChoicedeletesinput.setAttribute("type", "checkbox");
                                            textdeletes.textContent = "ลบ"
                                            getdivCheckboxlv2.appendChild(divChoicedeletesinput);
                                            getdivCheckboxlv2.appendChild(textdeletes);
                    
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        // Fetch Level 3

        for (let y = 0; y < data.length; y++) {
            let sss = data[y].p_id;
            let zzz = sss.toString();
            let io;
            let parent = await document.getElementById("contentlv2_" + zzz);
            if (parent != null) {
                io = parent.textContent.replace(/\s/g, "");
                // console.log(io)
                for (let i = 0; i < data.length; i++) {
                    if (data[i].level == 3) {
                        let spliteCategory = data[i].category_type.split("-");
                        if (spliteCategory[1] != null) {
                            if (spliteCategory[1] == io) {
                                const divll3 = document.getElementById("checkbox_incontent_" + data[y].p_id)
                                let ceateDiv = document.createElement("div");
                                // ceateDiv.textContent = data[i].name;
                                ceateDiv.id = "C_" + data[i].p_id;
                                ceateDiv.className = "cm_l3_tp";
                                divll3.appendChild(ceateDiv);

                                const textlv3 = document.createElement("li");
                                textlv3.textContent = data[i].name;
                                textlv3.className = "cm_l3_name";
                                textlv3.id = "name_" + data[i].p_id;
                                ceateDiv.appendChild(textlv3);
                                
                                const checkboxlv3 = document.createElement('div')
                                checkboxlv3.className = "cm_lv3_checkbox";
                                checkboxlv3.id = "div_" + data[i].p_id;
                                ceateDiv.appendChild(checkboxlv3);

                                const useSwitch = data[i].use_switch
                                const useAcces = data[i].access
                                const useCreate = data[i].create
                                const useDelete = data[i].delete
                                const useModify = data[i].modify
                                if (useSwitch == true) {
                                    // console.log(data[i].name)
                                    // console.log("switch : " + useSwitch)
                                    // console.log("==============================")
                                    const choice_switch = document.getElementById(checkboxlv3.id)

                                    const checkboxlv3w = document.createElement("div");
                                    checkboxlv3w.className = "choice_main";
                                    checkboxlv3w.id = "checkswitch_" + data[i].p_id
                                    choice_switch.appendChild(checkboxlv3w)


                                    const getElementSwitch = document.getElementById(checkboxlv3w.id)
                                    const checkboxlv3_switch = document.createElement("input");
                                    const textContent = document.createElement("span");
                                    checkboxlv3_switch.className = "choicez";
                                    checkboxlv3_switch.id = "switch_" + data[i].p_id
                                    checkboxlv3_switch.value = "checkbox_" + data[i].p_id
                                    checkboxlv3_switch.setAttribute("type", "checkbox");
                                    textContent.textContent = "ใช้งาน"
                                    getElementSwitch.appendChild(checkboxlv3_switch);
                                    getElementSwitch.appendChild(textContent);
                                }
                                if (useAcces != null) {
                                    // console.log(useAcces)
                                    const choice_assces = document.getElementById(checkboxlv3.id)
                                    const checkboxlv3_assces = document.createElement("div");
                                    checkboxlv3_assces.className = "choice_main";
                                    checkboxlv3_assces.id = "checkacces_" + data[i].p_id
                                    choice_assces.appendChild(checkboxlv3_assces)
                        
                                    const getcheckboxlv3 = document.getElementById(checkboxlv3_assces.id)
                                    const divChoiceaccessinput = document.createElement("input");
                                    const textaccess = document.createElement("span");
                                    divChoiceaccessinput.className = "choicez"
                                    divChoiceaccessinput.id = "access_" + data[i].p_id
                                    divChoiceaccessinput.value = "checkbox_" + data[i].p_id
                                    divChoiceaccessinput.setAttribute("type", "checkbox");
                                    textaccess.textContent = "เข้าถึง"
                                    getcheckboxlv3.appendChild(divChoiceaccessinput);
                                    getcheckboxlv3.appendChild(textaccess);

                                }
                                if (useCreate != null) {
                                    // console.log(usecreate)
                                    const choice_create = document.getElementById(checkboxlv3.id)
                                    const checkboxlv3_create = document.createElement("div");
                                    checkboxlv3_create.className = "choice_main";
                                    checkboxlv3_create.id = "checkcreate_" + data[i].p_id
                                    choice_create.appendChild(checkboxlv3_create)
                        
                                    const getcheckboxlv3 = document.getElementById(checkboxlv3_create.id)
                                    const divChoicecreatesinput = document.createElement("input");
                                    const textcreates = document.createElement("span");
                                    divChoicecreatesinput.className = "choicez"
                                    divChoicecreatesinput.id = "create_" + data[i].p_id
                                    divChoicecreatesinput.value = "checkbox_" + data[i].p_id
                                    divChoicecreatesinput.setAttribute("type", "checkbox");
                                    textcreates.textContent = "สร้าง"
                                    getcheckboxlv3.appendChild(divChoicecreatesinput);
                                    getcheckboxlv3.appendChild(textcreates);

                                }
                                if (useModify != null) {
                                    // console.log(usemodify)
                                    const choice_modify = document.getElementById(checkboxlv3.id)
                                    const checkboxlv3_modify = document.createElement("div");
                                    checkboxlv3_modify.className = "choice_main";
                                    checkboxlv3_modify.id = "checkmodify_" + data[i].p_id
                                    choice_modify.appendChild(checkboxlv3_modify)
                        
                                    const getcheckboxlv3 = document.getElementById(checkboxlv3_modify.id)
                                    const divChoicemodifysinput = document.createElement("input");
                                    const textmodifys = document.createElement("span");
                                    divChoicemodifysinput.className = "choicez"
                                    divChoicemodifysinput.id = "modify_" + data[i].p_id
                                    divChoicemodifysinput.value = "checkbox_" + data[i].p_id
                                    divChoicemodifysinput.setAttribute("type", "checkbox");
                                    textmodifys.textContent = "แก้ไข"
                                    getcheckboxlv3.appendChild(divChoicemodifysinput);
                                    getcheckboxlv3.appendChild(textmodifys);

                                }
                                if (useDelete != null) {
                                    // console.log(usedelete)
                                    const choice_delete = document.getElementById(checkboxlv3.id)
                                    const checkboxlv3_delete = document.createElement("div");
                                    checkboxlv3_delete.className = "choice_main";
                                    checkboxlv3_delete.id = "checkdelete_" + data[i].p_id
                                    choice_delete.appendChild(checkboxlv3_delete)
                        
                                    const getcheckboxlv3 = document.getElementById(checkboxlv3_delete.id)
                                    const divChoicedeletesinput = document.createElement("input");
                                    const textdeletes = document.createElement("span");
                                    divChoicedeletesinput.className = "choicez"
                                    divChoicedeletesinput.id = "delete_" + data[i].p_id
                                    divChoicedeletesinput.value = "checkbox_" + data[i].p_id
                                    divChoicedeletesinput.setAttribute("type", "checkbox");
                                    textdeletes.textContent = "ลบ"
                                    getcheckboxlv3.appendChild(divChoicedeletesinput);
                                    getcheckboxlv3.appendChild(textdeletes);

                                }
                            }
                        }
                    }
                }
            }
        }

        const styles_Adminstator_menu = `
            display: block;
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
        `;
        document.querySelectorAll(".Adminstator_menu").forEach((item) => {
            styles_Adminstator_menu.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
        });
        const styles_ct_mn = `
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        width: 100%;
        height: auto;
    `;
        document.querySelectorAll(".ct_mn").forEach((item) => {
            styles_ct_mn.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
        });
        const styles_l1_content = `
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: auto;
    `;
        document.querySelectorAll(".l1_container").forEach((item) => {
            styles_l1_content.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
        });
        const styles_checkbox_container = `
        display: flex;
        
        justify-content: flex-start;
        flex-direction: column;
        width: auto;
        height: auto;
    `;
        document.querySelectorAll(".checkbox_container").forEach((item) => {
            styles_checkbox_container.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
        });
        document.querySelectorAll(".l2_container").forEach((item) => {
            styles_l1_content.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
        });
        const styles_svgImg = `
        width: 20px;
        height: 20px;
        display:flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    `;
        document.querySelectorAll(".svgImg").forEach((item) => {
            styles_svgImg.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
        });
        const styles_choice_menumain = `
        width: auto;
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-right: 10px;

    `;
        document.querySelectorAll(".choice_menumain").forEach((item) => {
            styles_choice_menumain.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
        });
        const styles_choice_input = `
        // pointer-events: none;
    `;
        document.querySelectorAll(".choice_main").forEach((item) => {
            styles_choice_input.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
        });
        const styles_choicez = `
       margin-right: 10px;
    `;
        document.querySelectorAll(".choicez").forEach((item) => {
            styles_choicez.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
        });
        const styles_cm_l1_tp = `
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        padding: 20px 15px;
        box-shadow: 0 1px 0 rgba(0,0,0,0.2);
        cursor: pointer;
    `;
        document.querySelectorAll(".cm_l1_tp").forEach((item) => {
            styles_cm_l1_tp.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
        });
        const styles_cm_space = `
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        padding: 10px 25px;
    `;
        document.querySelectorAll(".cm_space").forEach((item) => {
            styles_cm_space.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
            item.style.display == "flex"
                ? (item.style.display = "none")
                : (item.style.display = "flex");
        });
        const styles_cm_l2_tp = `
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        padding: 10px 25px;
    `;
        document.querySelectorAll(".cm_l2_tp").forEach((item) => {
            styles_cm_l2_tp.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
        });
        const styles_l3_container = `
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding : 10px 30px;
        
    `;
        document.querySelectorAll(".l3_container").forEach((item) => {
            styles_l3_container.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
            item.style.display == "flex"
                ? (item.style.display = "none")
                : (item.style.display = "flex");
        });
        
        const styles_cm_l3_tp = `
        
        padding : 10px 30px;
        
    `;
        document.querySelectorAll(".cm_l3_tp").forEach((item) => {
            styles_cm_l3_tp.split(";").forEach((style) => {
                if (style.trim() !== "") {
                    const [prtoperty, value] = style
                        .split(":")
                        .map((part) => part.trim());
                    item.style.setProperty(prtoperty, value);
                }
            });
        });
        
    }
    await LenderAllElement();
    ////////////////////////////////////////////////////////////////
    //  onCLick
    ////////////////////////////////////////////////////////////////
    const myDiv = document.querySelectorAll(".cm_l1_tp");
    Array.from(myDiv).forEach((element) => {
        const clickelm = element.querySelector(".l1_container");

        clickelm.addEventListener("click", function () {
            console.log(element);

            const asd = element.querySelectorAll(".cm_space > div");
            const showFlex = element.querySelector(".cm_space");
            const rotateArrow = element.querySelector(".svgImg");
            if (asd) {
                // console.log(showFlex)
                showFlex.style.display == "flex"
                    ? (showFlex.style.display = "none")
                    : (showFlex.style.display = "flex");
                rotateArrow.style.transform == "rotate(90deg)"
                    ? (rotateArrow.style.transform = "rotate(0deg)")
                    : (rotateArrow.style.transform = "rotate(90deg)");
            } else {
                console.log("none");
            }
        });
    });
    // onClick lv2 open lv3 //
    const myDivlv2 = document.querySelectorAll(".cm_l2_tp");
    Array.from(myDivlv2).forEach((element) => {
        const clickelm = element.querySelector(".l2_container");
        const elemdisplay = element.querySelector(".l3_container");
        
        clickelm.addEventListener("click", function () {
            console.log(element);
            
            // const asd = element.querySelectorAll("cm_l3_tp");
            // const showFlex = element.querySelector(".cm_space");
            const rotateArrow = element.querySelector(".svgImg");
            if (elemdisplay) {
                // console.log(showFlex)
                elemdisplay.style.display == "flex"
                    ? (elemdisplay.style.display = "none")
                    : (elemdisplay.style.display = "flex");
                rotateArrow.style.transform == "rotate(90deg)"
                    ? (rotateArrow.style.transform = "rotate(0deg)")
                    : (rotateArrow.style.transform = "rotate(90deg)");
            } else {
                console.log("none");
            }
        });
    });

    const ArrayChoice = document.querySelectorAll(".choice_main")
    Array.from(ArrayChoice).forEach((items) => {
        const choice_pid = items.querySelector(".choice_main > input")
        const choice_name = items.querySelector(".choice_main> span")

        choice_name.addEventListener("click", function () {
            console.log(choice_pid.id)
            choice_pid.click()
        })
    })
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    async function fetchupdates() {
        
    }
    fetchupdates();
}

test();