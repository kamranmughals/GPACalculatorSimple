



 let mul, i, total = parseFloat();
//  Grade Slection-area
 let sel1 = document.getElementsByName("grade1[]");
 let sel2 = document.getElementsByName("grade2[]");
 let sel3 = document.getElementsByName("grade3[]");
 let sel4 = document.getElementsByName("grade4[]");
 let sel5 = document.getElementsByName("grade5[]");
 let sel6 = document.getElementsByName("grade6[]");
// Grade Array
let gradelist = document.getElementById("grade-selector[]")
//  Points-areas
 let output1 = document.getElementsByName("point1[]")
 let output2 = document.getElementsByName("point2[]")
 let output3 = document.getElementsByName("point3[]")
 let output4 = document.getElementsByName("point4[]")
 let output5 = document.getElementsByName("point5[]")
 let output6 = document.getElementsByName("point6[]")
// Credit Hour Array
let credit_hour = document.getElementsByName("credit_hour[]");
// Total Credits
 let cred = document.getElementsByName("credit1[]");
 let cred2 = document.getElementsByName("credit2[]");
 let cred3 = document.getElementsByName("credit3[]");
 let cred4 = document.getElementsByName("credit4[]");
 let cred5 = document.getElementsByName("credit5[]");
 let cred6 = document.getElementsByName("credit6[]");
// Total Points
 let points1 = document.getElementsByName("points1[]")
 let points2 = document.getElementsByName("points2[]")
 let points3 = document.getElementsByName("points3[]")
 let points4 = document.getElementsByName("points4[]")
 let points5 = document.getElementsByName("points5[]")
 let points6 = document.getElementsByName("points6[]")
//  Sum of all
 let sum = document.getElementsByName("sum[]");
 let sum2 = document.getElementsByName("sum2[]");
 let sum3 = document.getElementsByName("sum3[]");
let sum4 = document.getElementsByName("sum4[]");
// let gpa = document.getElementById("gpa")
// let credit = document.getElementById("cred")
// let add = document.getElementById("sum")
let btn_cal = document.getElementById("btn-cal")
// Current Gpa and Credit
let Current_Gpa = document.getElementById("cr-gpa")
let Current_Cred = document.getElementById("cr-cred")

function mygrade(){
    // let gradelist = document.getElementById("grade-selector");
    for(i = 0; i < gradelist.length; i++){
        let a = sel1[i];
        let b = sel2[i];
        let c = sel3[i];
        let d = sel4[i];
        let e = sel5[i];
        let f = sel6[i];
        let dis1 = a.options[a.selectedIndex].value;
        let dis2 = b.options[b.selectedIndex].value;
        let dis3 = c.options[c.selectedIndex].value;
        let dis4 = d.options[d.selectedIndex].value;
        let dis5 = e.options[e.selectedIndex].value;
        let dis6 = f.options[f.selectedIndex].value;
        output1[i].value = dis1;
        output2[i].value = dis2;
        output3[i].value = dis3;
        output4[i].value = dis4;
        output5[i].value = dis5;
        output6[i].value = dis6;
    }
    
}
function mycal(){
    for(i = 0; i < credit_hour.length; i++){
        let a = cred[i];
        let b = cred2[i];
        let c = cred3[i];
        let d = cred4[i];
        let e = cred5[i];
        let f = cred6[i];
        let dis1 = a.options[a.selectedIndex].value;
        let dis2 = b.options[b.selectedIndex].value;
        let dis3 = c.options[c.selectedIndex].value;
        let dis4 = d.options[d.selectedIndex].value;
        let dis5 = e.options[e.selectedIndex].value;
        let dis6 = f.options[f.selectedIndex].value;
        points1[i].value = dis1 * output1[i].value
        points2[i].value = dis2 * output2[i].value
        points3[i].value = dis3 * output3[i].value
        points4[i].value = dis4 * output4[i].value
        points5[i].value = dis5 * output5[i].value
        points6[i].value = dis6 * output6[i].value;
        total = parseFloat(dis1) + parseFloat(dis2) + parseFloat(dis3) + parseFloat(dis4) + parseFloat(dis5) + parseFloat(dis6);
    }
}

btn_cal.onclick = function(){
    //Total Gpa
    for(i = 0; i < sum.length; i++){
        sum[i].value = (parseFloat(points1[i].value) + parseFloat(points2[i].value) + parseFloat(points3[i].value) + parseFloat(points4[i].value) + parseFloat(points5[i].value) + parseFloat(points6[i].value))/total;
        let round = parseFloat(sum[i].value).toFixed(2);
        sum[i].value = round;
        gpa = sum[i].value;
    }
    // Total Sum of all points
    for(i = 0;i < sum2.length; i++){
        sum2[i].value = (parseFloat(points1[i].value) + parseFloat(points2[i].value) + parseFloat(points3[i].value) + parseFloat(points4[i].value) + parseFloat(points5[i].value) + parseFloat(points6[i].value))
        let round = parseFloat(sum2[i].value).toFixed(2);
        sum2[i].value = round;
    }
    // total number of credit hours
    for(i = 0; i < sum3.length; i++){
        sum3[i].value = total;
    }
    // Calculate Cummulative Grade Per Average
    for(i = 0;i < sum4.length; i++){
       let c_gpa = Current_Cred.value * Current_Gpa.value;
       let new_gpa = gpa * sum3[i].value;
       let addcred = parseFloat(Current_Cred.value) + parseFloat(sum3[i].value);
       sum4[i].value = (c_gpa + new_gpa) / addcred;
       let round = parseFloat(sum4[i].value).toFixed(2);
       sum4[i].value = round;
    }
}