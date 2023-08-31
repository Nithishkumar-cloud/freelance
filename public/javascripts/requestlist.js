const sessionid=localStorage.getItem('sessionid');
let q=localStorage.getItem('listdataid');
console.log("dsjdh");
let r=axios.post("http://localhost:21021/rqtdatalist",{datalist:q});

let htmlcode=``;
        
        r.then(function(result){
            datas=result.data.list;
            console.log(datas);
             result.data.list.map((res)=>{
                //console.log(res);
                let a=res.createdAt;
                console.log(a);
                console.log(a.toLocaleString("en-AU"));
                let c=a.slice(10,24);
                //console.log(c.toUTCString());
                let b=a.slice(0,10);
                console.log(b);
 
        htmlcode=htmlcode+`
            <div class="card mt-5 shadow rounded rounded-5 bg-light">
            <div class="card-body">
                
             <div class="row d-flex flex-column">
                <div class="col d-flex justify-content-between align-items-center">
                  
                    <div class="">
                        <div id="datetime">${b}</div>
                    </div>
                   
                </div>
                 <div class="col p-2">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="fw-semibold fst-italic">Request Type</div>
                            <div >${res.RequestType}</div>
                        </div>
                    </div>
                <div class="col p-2">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="fw-semibold fst-italic">Subject</div>
                        <div >${res.Subject}</div>
                    </div>
                </div>
                <div class="col p-2">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="fw-semibold fst-italic">Cost</div>
                        <div >${res.Cost}</div>
                    </div>
                </div>
                
                <div class="col p-2">
                        <div class="d-flex flex-column ">
                            <div class="fw-semibold fst-italic">Short Description</div>
                            <div >${res.Description}</div>
                        </div>
                  </div><div class="col p-2">
                        <div class="d-flex flex-column">
                            <div class="fw-semibold fst-italic">Long Description</div>
                            <div >${res.Longdes}</div>
                        </div>
                  </div>
                
            </div>
                   
            </div>
        </div>
        
            `;
          });
             const alldata=document.querySelector(".allcards");
             alldata.innerHTML=htmlcode;
 });
           
         
          async function logout() {
            var c = axios.post("http://localhost:21021/logout", { id: sessionid });
            
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
        