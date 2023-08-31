const sessionid=localStorage.getItem('sessionid');
window.onload=function(){
    let q=localStorage.getItem('requesttype');
     console.log(q);
document.getElementById('reqval').value=q;
};

async function sub(){
    
    const userreq={
        sesid:localStorage.getItem('sessionid'),
        sub:document.getElementById('reqval').value,
        cost:document.querySelector('input[name="amount"]:checked').value,
        des:document.getElementById('des').value,
        longdes:document.getElementById('longdes').value
    };
    
    let x=await axios.post("https://attractive-pear-apron.cyclic.app/req",{data:userreq});
    //console.log(x.data);
    localStorage.setItem('listdataid',x.data.reqt.UserId);
location.assign('/requestlist');
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
