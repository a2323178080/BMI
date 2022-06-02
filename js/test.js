

// ----------------------其他--------------------------------------------------------------------
const data = JSON.parse(localStorage.getItem('BMIData')) || [];

const dt = new Date()
const year = dt.getFullYear()
const month = dt.getMonth()+1
const day = dt.getDate()






// --------------------------M--------------------------------------------------------------------
const saveInput = document.querySelector(".saveInput");
const list =document.querySelector(".list");
const clear = document.querySelector(".clear")
// const view = document.querySelector(".view")








// --------------------------E-------------------------------------
saveInput.addEventListener('click',addData);

updataList(data);


clear.addEventListener('click',clearData);
// view.addEventListener('click',returnBtn);














// --------------------------V-------------------------------------

// 建立localStorage
function addData(e){
    e.preventDefault();
    const weight = document.querySelector('.weight').value;
    const height = document.querySelector('.height').value;
    const BMI = weight/((height)*(height)/10000);
    let objBMI = Math.round(BMI*100)/100;
    const todo = {
        objBMI : objBMI,
        weight : weight,
        height : height,
        Year : year,
        Month : month,
        Day : day
    };
    if (weight === "" || height === ""){return}
    data.push(todo);

    
    localStorage.setItem('BMIData',JSON.stringify(data))
    document.querySelector('.weight').value = "" ;
    document.querySelector('.height').value = "" ;
    updataList(data);
};



// 更新網頁內容
function updataList(item){
    let str ='';
    const len = item.length;
    for ( var i = 0 ; len >i ;i++){
        const BMI = data[i].objBMI;
        // 過輕
        if ( BMI <= 18.5){
            str += `
            <li class="list-box bleft-blue" data-num="${i}">
                <h3>過輕</h3>
                <p class="BMI"><span>BMI</span>${item[i].objBMI}</p>
                <p class="BMI-weight"><span>weight</span>${item[i].weight}kg</p>
                <p class="BMI-height"><span>height</span>${item[i].height}cm</p>
                <p class="date"><span>${item[i].Year}-${item[i].Month}-${item[i].Day}</span></p>
                
            </li>`
        
            
            // save.innerHTML = ''
        }
        // 理想
        else if ( 18.5<BMI && BMI<=25){
            str += '<li class="list-box bleft-green" data-num="'+i+'"><h3>理想</h3><p class="BMI"><span>BMI</span>'+ BMI +'</p><p class="BMI-weight"><span>weight</span>'+item[i].weight+'kg</p><p class="BMI-height"><span>height</span>'+item[i].height+'cm</p><p class="date"><span>'+item[i].Year + '-' + item[i].Month + '-' +item[i].Day +'</span></p></li>';
            list.innerHTML = str ;
            
        }
        // 過重
        else if ( 25<BMI && BMI<=30 ){
            str +=`<li class="list-box bleft-FF982D" data-num="${i}">
            <h3>過重</h3>
            <p class="BMI"><span>BMI</span>${item[i].objBMI}</p>
            <p class="BMI-weight"><span>weight</span>${item[i].weight}kg</p>
            <p class="BMI-height"><span>height</span>${item[i].height}cm</p>
            <p class="date"><span>${item[i].Year}-${item[i].Month}-${item[i].Day}</span></p>
            </li>`;
            list.innerHTML = str ;;
        }
        // 輕度肥胖
        else if ( 30<BMI && BMI<=35 ){
            str += '<li class="list-box bleft-FF6C03" data-num="'+i+'"><h3>輕度肥胖</h3><p class="BMI"><span>BMI</span>'+ BMI +'</p><p class="BMI-weight"><span>weight</span>'+item[i].weight+'kg</p><p class="BMI-height"><span>height</span>'+item[i].height+'cm</p><p class="date"><span>'+item[i].Year + '-' + item[i].Month + '-' +item[i].Day +'</span></p></li>';
            list.innerHTML = str ;
        }
        // 中度肥胖
        else if ( 35<BMI && BMI<=40 ){
            str += '<li class="list-box bleft-FF6C03" data-num="'+i+'"><h3>中度肥胖</h3><p class="BMI"><span>BMI</span>'+ BMI +'</p><p class="BMI-weight"><span>weight</span>'+item[i].weight+'kg</p><p class="BMI-height"><span>height</span>'+item[i].height+'cm</p><p class="date"><span>'+item[i].Year + '-' + item[i].Month + '-' +item[i].Day +'</span></p></li>';
            list.innerHTML = str ;
        }
        // 重度肥胖
        else if ( BMI>40 ){
            str += '<li class="list-box bleft-FF1200" data-num="'+i+'"><h3>重度肥胖</h3><p class="BMI"><span>BMI</span>'+ BMI +'</p><p class="BMI-weight"><span>weight</span>'+item[i].weight+'kg</p><p class="BMI-height"><span>height</span>'+item[i].height+'cm</p><p class="date"><span>'+item[i].Year + '-' + item[i].Month + '-' +item[i].Day +'</span></p></li>';
            list.innerHTML = str ;
        }
    }
    list.innerHTML = str ;
}
// function returnBtn(e){
//     if (e.target.nodeName == "IMG" || e.target.nodeName == "BUTTON"){
//         view.innerHTML = '<input type="button" value="看結果" class="saveInput">'
//         document.querySelector('.weight').value = "" ;
//         document.querySelector('.height').value = "" ;
//         return;
//     }
// }
// function clearData(e){
//     e.preventDefault();
//     let len=data.length
//     data.splice(0,len);
//     updataList(data);
//     localStorage.removeItem('BMIData');
//     list.innerHTML="";
// }


function clearData(e){
    e.preventDefault();
    data.splice(0);
    localStorage.setItem('BMIData',JSON.stringify(data))
    updataList(data);
    list.innerHTML="";
}


