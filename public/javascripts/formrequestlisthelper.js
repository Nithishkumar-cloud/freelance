let datas="";
const sessionidhelper=localStorage.getItem('sessionidhelper');
window.onload=function(){
    
     let q=localStorage.getItem('sessionidhelper');
     let x=axios.post(" https://attractive-pear-apron.cyclic.app/reqlisthelper",{list:q});
     
      let htmlcode=``;
     x.then((result)=>{
         document.getElementById('cards').style.display='block';
         document.getElementById('carddet').style.display='none';
           datas=result.data.lists;
          //console.log(datas);
          result.data.lists.map((res)=>{
              let a=res.createdAt;
//                console.log(a);
//                console.log(a.toLocaleString("en-AU"));
//                let c=a.slice(10,24);
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
                        <div class="fw-semibold fst-italic">Username</div>
                        <div >${res.Username}</div>
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
                  </div>
                  
               <div class="col p-2 d-flex justify-content-end">
                   <button class="btn btn-warning rounded rounded-4 fw-semibold" id="${res._id}" onclick="help(id)">Ready To Help</button>
                </div>
            </div>
                   
            </div>
        </div>
        
            `;
          });
             const alldata=document.querySelector(".allcards");
             alldata.innerHTML=htmlcode;
 });
     
};

    async function logout() {
                var c=axios.post(" https://attractive-pear-apron.cyclic.app/logout",{id:sessionidhelper});
                localStorage.removeItem("sessionidhelper");
               document.cookie = "tokenhelper=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
                location.assign("/");
            };


function help(id){
     document.getElementById('cards').style.display='none';
     document.getElementById('carddet').style.display='block';
     
     
     let code=``;
     
          console.log(datas);
          //console.log(datas);
          datas.map((res)=>{
              
              console.log(id);
              console.log(res._id);
             if(res._id===id){
                 let a=res.createdAt;
//                console.log(a);
//                console.log(a.toLocaleString("en-AU"));
//                let c=a.slice(10,24);
                //console.log(c.toUTCString());
                let b=a.slice(0,10);
                console.log(b);
              code=code+`  
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
                        <div class="fw-semibold fst-italic">Username</div>
                        <div >${res.Username}</div>
                    </div>
                </div>
                <div class="col p-2">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="fw-semibold fst-italic">Phone</div>
                        <div >${res.Phone}</div>
                    </div>
                </div>
                 <div class="col p-2">
                        <div class="d-flex flex-column">
                           <div class="fw-semibold fst-italic">Long Description</div>
                            <div >${res.Longdes}</div>
                        </div>
                 </div>
                  <div class="col p-2 d-flex justify-content-end">
                   <button class="btn btn-warning rounded rounded-4 fw-semibold">Accept</button>
                </div>
            </div>
`;
             }
 
              

          });
            const alldata=document.querySelector(".carddetail");
             alldata.innerHTML=code;

 }
