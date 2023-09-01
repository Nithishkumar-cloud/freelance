let at="";
const sessionid=localStorage.getItem('sessionid');
window.onload=function(){
    let q=localStorage.getItem('requesttype');
     console.log(q);
document.getElementById('reqval').value=q;
};

function choose(){
      at = document.querySelector('input[name="amount"]:checked').value;
      console.log(at);
      let speech = new SpeechSynthesisUtterance("your Mode of Cost"+at+"selected successfully");
      speechSynthesis.speak(speech);
}
async function sub(){
    
    const userreq={
        sesid:localStorage.getItem('sessionid'),
        sub:document.getElementById('reqval').value,
        //cost:document.querySelector('input[name="amount"]:checked').value,
        at,
        des:document.getElementById('des').value,
        longdes:document.getElementById('longdes').value
    };
    
        
     if(userreq.sub===""){
        errordisplayreq("Nothing is selected Subject is Empty");
    }
    else if(userreq.at===""){
        errordisplayreq("Please Enter Your Mode of Cost");
    }
    else if(userreq.des===""){
        errordisplayreq("Please Enter Your Short Description");
    }
    else if(userreq.longdes===""){
        errordisplayreq("Please Enter Your Long Description");
    }
    else{
         let x=await axios.post("https://attractive-pear-apron.cyclic.app/req",{data:userreq});
    //console.log(x.data);
         localStorage.setItem('listdataid',x.data.reqt.UserId);
         location.assign('/requestlist');
    }
}

 async function logout() {
            var c = axios.post("https://attractive-pear-apron.cyclic.app/logout", { id: sessionid });
            
            c.then(function(result){
                console.log(result.data.logoutmsg);
                let speech = new SpeechSynthesisUtterance(result.data.logoutmsg);
                //  speech.lang = 'ta-IN';
                 speechSynthesis.speak(speech);
                 const timeout=setTimeout(()=>{
                 location.assign("/");
            },2000);
            
            });
            localStorage.removeItem("sessionid");
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            
           
           
        }

    function errordisplayreq(value) {
    document.getElementById('errreq').style.display = "block";
    document.getElementById('errreq').innerHTML = value;

    let speech = new SpeechSynthesisUtterance(value);
    //  speech.lang = 'ta-IN';
    speechSynthesis.speak(speech);
    console.log("work");
    const timeout = setTimeout(() => {
        document.getElementById("errreq").style.display = "none";
    }, 6000);

}
