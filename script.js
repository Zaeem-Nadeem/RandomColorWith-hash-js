const randomcolor=()=>{
    const random=Math.floor(Math.random()*16777215);
    const color="#"+random.toString(16);
    document.body.style.backgroundColor=color;
    document.getElementById("color-code").innerText=color;
}
const button=document.getElementById("btn");
button.addEventListener(("click"),randomcolor);

// fun try


    // function fun(){
    //     const random=Math.floor(Math.random()*16777215);
    //     const color="#"+random.toString(16);
    //     document.body.style.backgroundColor=color;
    //     document.getElementById("color-code").innerText=color;
    // }
    // setInterval(() => {
    //     fun()
    // }, 500);