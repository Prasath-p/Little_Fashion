let bg_img = document.getElementById("img");
let cont = document.getElementById("con");
let para = document.getElementById("para");
let btn = document.getElementById("btn");

let btn1_col = document.getElementById("cir1");
let btn2_col = document.getElementById("cir2");
let btn3_col = document.getElementById("cir3");

setTimeout(() => { btn_two(); }, 3000);
setTimeout(() => { btn_three(); }, 6000);

var clk = false;
var a = 6000, i = 1;
if (clk == false) {
    while (i <= 10) {
        setTimeout(() => { if (clk == false) { btn_one(); } }, a + 3000);
        setTimeout(() => { if (clk == false) { btn_two(); } }, a + 6000);
        setTimeout(() => { if (clk == false) { btn_three(); } }, a + 9000);
        a = a + 9000;
        i++;
    }
}

btn1_col.addEventListener('click', function () {
    clk = true;
});

btn2_col.addEventListener('click', function () {
    clk = true;
});

btn3_col.addEventListener('click', function () {
    clk = true;
});

btn_one = () => {
    let bg_img = document.getElementById("img");
    let cont = document.getElementById("con");
    let para = document.getElementById("para");
    let btn = document.getElementById("btn");

    let btn1_col = document.getElementById("cir1");
    let btn2_col = document.getElementById("cir2");
    let btn3_col = document.getElementById("cir3");


    btn1_col.style = "opacity:1";
    btn2_col.style = "opacity:0.7";
    btn3_col.style = "opacity:0.7";
    btn.innerHTML = "LEARN MORE ABOUT US";
    cont.innerHTML = "Cool Fashion";
    para.innerHTML = "little fashion template comes with total 8 html pages provided by tooplate website.";
    bg_img.style = ' background-image: url("medium-shot-business-women-high-five.jpeg"); animation-name:example;';
}
btn_two = () => {
    let bg_img = document.getElementById("img");
    let cont = document.getElementById("con");
    let para = document.getElementById("para");
    let btn = document.getElementById("btn");
    let btn1_col = document.getElementById("cir1");
    let btn2_col = document.getElementById("cir2");
    let btn3_col = document.getElementById("cir3");
    btn2_col.style = "opacity:1";
    btn1_col.style = "opacity:0.7";
    btn3_col.style = "opacity:0.7";
    btn.innerHTML = "EXPLORE PRODUCTS";
    cont.innerHTML = "New Design";
    para.innerHTML = "Please share this little fashion template to your friends.Thank you for supporting us.";
    bg_img.style = 'background-image:url("team-meeting-renewable-energy-project.jpeg"); animation-name:example2;';

}

btn_three = () => {
    let bg_img = document.getElementById("img");
    let cont = document.getElementById("con");
    let para = document.getElementById("para");
    let btn = document.getElementById("btn");
    let btn1_col = document.getElementById("cir1");
    let btn2_col = document.getElementById("cir2");
    let btn3_col = document.getElementById("cir3");

    btn3_col.style = "opacity:1";
    btn1_col.style = "opacity:0.7";
    btn2_col.style = "opacity:0.7";
    btn.innerHTML = "WORK WITH US";
    cont.innerHTML = "Talk to us";
    para.innerHTML = "Tooplate is one of the best HTML CSS template websites for everyone"
    bg_img.style = 'background-image:url("two-business-partners-working-together-office-computer.jpeg"); animation-name:example3;';
}

var cont_cur_one = document.getElementById("l-link1");
var lin_cur_one = document.getElementById("lin-cur1");
var cont_cur_two = document.getElementById("l-link2");
var lin_cur_two = document.getElementById("lin-cur2");
var cont_cur_three = document.getElementById("l-link3");
var lin_cur_three = document.getElementById("lin-cur3");

var cur_one = true;
var cur_two = true;
var cur_three = true;

cont_cur_one.addEventListener('mouseover', function () {
    lin_cur_one.style = "background-color:red;";
    if (cur_two == true) {
        lin_cur_two.style = "background-color: rgb(207, 207, 207);";
    }
    if (cur_three == true) {
        lin_cur_three.style = "background-color: rgb(207, 207, 207);"
    }
});
cont_cur_one.addEventListener('mouseout', function () { if (cur_one == true) { lin_cur_one.style = "background-color: rgb(207, 207, 207);"; } });

cont_cur_one.addEventListener('click', function () {
    cur_one = false;
    cur_two = true;
    cur_three = true;
    lin_cur_one.style = "background-color:red;";
    lin_cur_two.style = "background-color: rgb(207, 207, 207);"
    lin_cur_three.style = "background-color: rgb(207, 207, 207);"
    cont_cur_one.style = "color:red;"
    cont_cur_two.style = "color: rgb(207, 207, 207);"
    cont_cur_three.style = "color: rgb(207, 207, 207);"
});


cont_cur_two.addEventListener('mouseover', function () {
    lin_cur_two.style = "background-color:red;";
    if (cur_one == true) {
        lin_cur_one.style = "background-color: rgb(207, 207, 207);";
    }
    if (cur_three == true) {
        lin_cur_three.style = "background-color: rgb(207, 207, 207);";
    }

});
cont_cur_two.addEventListener('mouseout', function () { if (cur_two == true) { lin_cur_two.style = "background-color: rgb(207, 207, 207);"; } });
cont_cur_two.addEventListener('click', function () {
    cur_two = false;
    cur_three = true;
    cur_one = true;
    lin_cur_two.style = "background-color:red;";
    lin_cur_one.style = "background-color: rgb(207, 207, 207);"
    lin_cur_three.style = "background-color: rgb(207, 207, 207);"
    cont_cur_two.style = "color:red;"
    cont_cur_one.style = "color: rgb(207, 207, 207);"
    cont_cur_three.style = "color: rgb(207, 207, 207);"
});


cont_cur_three.addEventListener('mouseover', function () {
    lin_cur_three.style = "background-color:red;";
    if (cur_one == true) {
        lin_cur_one.style = "background-color: rgb(207, 207, 207);";
    }
    if (cur_two == true) {
        lin_cur_two.style = "background-color: rgb(207, 207, 207);";
    }
});
cont_cur_three.addEventListener('mouseout', function () { if (cur_three == true) { lin_cur_three.style = "background-color: rgb(207, 207, 207);"; } });
cont_cur_three.addEventListener('click', function () {
    cur_three = false;
    cur_one = true;
    cur_two = true;
    lin_cur_three.style = "background-color:red;";
    lin_cur_one.style = "background-color: rgb(207, 207, 207);"
    lin_cur_two.style = "background-color: rgb(207, 207, 207);"
    cont_cur_three.style = "color:red;"
    cont_cur_one.style = "color: rgb(207, 207, 207);"
    cont_cur_two.style = "color: rgb(207, 207, 207);"
});



cont_cur_one.addEventListener('click', function () {
    lin_cur_one.style = "background-color:red;";
    cont_cur_one.style = "color:red";
});
cont_cur_two.addEventListener('click', function () {
    lin_cur_two.style = "background-color:red;";
    cont_cur_two.style = "color:red";
});
cont_cur_three.addEventListener('click', function () {
    lin_cur_three.style = "background-color:red;";
    cont_cur_three.style = "color:red";
});
