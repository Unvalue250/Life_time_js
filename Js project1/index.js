
let isDOBOpen=false;
let dateOfBirth;
const settingcogEl=document.getElementById("settingIcon");
const settingcontentEl=document.getElementById("setting-content");
const initialTextEl=document.getElementById("initialText");
const afterDOBButton=document.getElementById("afterDOBbutton");
const dobButtonEl=document.getElementById("dobButton");
const dobInputEl=document.getElementById("dobInput");

const yearEl=document.getElementById('year');
const monthEl=document.getElementById('month');
const dayEl=document.getElementById('day');
const hourEl=document.getElementById('hour');
const minuteEl=document.getElementById('minute');
const secondEl=document.getElementById('second');



const makeTwoDigitNumber=(number)=>{
    return number>9 ? number:`0${number}`;
}

const toggleDateOfBirthSelector=()=> {

    if(isDOBOpen){
        settingcontentEl.classList.add("hide");

    }
    else{
        settingcontentEl.classList.remove("hide");
    }
    isDOBOpen=!isDOBOpen;
    console.log("Toggle",isDOBOpen);
};

const updateAge=()=>{
const currentDate=new Date();
const dateDiff=currentDate-dateOfBirth;
const year=Math.floor(dateDiff/(1000*60*60*24*365));
const month=Math.floor(dateDiff/(1000*60*60*24*365))%1;
const day=Math.floor(dateDiff/(1000*60*60*24))%30;
const hour=Math.floor(dateDiff/(1000*60*60))%24;
const minute=Math.floor(dateDiff/(1000*60))%60;                                                                                                                                                                                                                                                                                                         
const second=Math.floor(dateDiff/(1000))%60;

yearEl.innerHTML=makeTwoDigitNumber(year);
monthEl.innerHTML=makeTwoDigitNumber(month);                                                                                                                                                                        
dayEl.innerHTML=makeTwoDigitNumber(day);
hourEl.innerHTML=makeTwoDigitNumber(hour);
minuteEl.innerHTML=makeTwoDigitNumber(minute)                                                                                         ;
secondEl.innerHTML=makeTwoDigitNumber(second);


};

const localStorageGetter=()=>{
    const year =localStorage.getItem("year");
    const month =localStorage.getItem("month");
    const date =localStorage.getItem("date");
    
    if(year && month && date ){
        dateOfBirth=new Date(year,month, date);
    }
updateAge();
};
const contentToggler=()=>{
updateAge();
    if(dateOfBirth){
        initialTextEl.classList.add("hide");
        afterDOBButton.classList.remove("hide");     
    }
    else{   
        afterDOBButton.classList.add("hide");
        initialTextEl.classList.remove("hide");
      
       
    }
    
};


const setDOBHandler=()=>{
const dateString=dobInputEl.value;
dateOfBirth=dateString? new Date(dateString):null;



if(dateOfBirth){
    localStorage.setItem("year",dateOfBirth.getFullYear());
    localStorage.setItem("month",dateOfBirth.getMonth());
    localStorage.setItem("date",dateOfBirth.getDate());

}


 
    setInterval(()=>updateAge(),1000);
    contentToggler(); 
};

localStorageGetter();
setDOBHandler();
settingcogEl.addEventListener("click", toggleDateOfBirthSelector);
dobButtonEl.addEventListener("click", setDOBHandler);