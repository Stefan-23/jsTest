
    //Init grid drag and drop library        
    var grid = GridStack.init();
    
    //Add li items form first project input form
    function addFirstTag(){

        let txtVal,listNode,liNode,txtNode;

            txtVal = document.getElementById('txtVal').value,
            listNode = document.getElementById('result'),
            liNode = document.createElement("LI"),
            txtNode = document.createTextNode(txtVal);
            
            liNode.appendChild(txtNode);
            listNode.appendChild(liNode);
    }
    //Add li items for second tag
    function addSecondTag(){

        let txtVal2,listNode2,liNode2,txtNode2;

            txtVal2 = document.getElementById('txtVal2').value,
            listNode2= document.getElementById('result2'),
            liNode2 = document.createElement("LI"),
            txtNode2 = document.createTextNode(txtVal2);
            
            liNode2.appendChild(txtNode2);
            listNode2.appendChild(liNode2);
    }

    //Ad li items for third tag
    function addThirdTag(){

        let txtVal3,listNode3,liNode3,txtNode3;

            txtVal3 = document.getElementById('txtVal3').value,
            listNode3= document.getElementById('result3'),
            liNode3 = document.createElement("LI"),
            txtNode3 = document.createTextNode(txtVal3);
            
            liNode3.appendChild(txtNode3);
            listNode3.appendChild(liNode3);
    }

    
       function getProjects() {
        const myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6IkRISGR6bkVBZFIiLCJpYXQiOjE1ODQ2NDU0NDQsImV4cCI6MTYxNjE4MTQ0NH0.2elgjfITAYtFArxidHap0QiI-wZEjNL2WsAtDMoyZ_8');

        return fetch('https://www.insidemaps.com/api/v2/sessionToken', {
            method: 'GET',
            mode: 'no-cors',
            headers: myHeaders,
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    }

getProjects();
    