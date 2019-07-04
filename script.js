function convert() {

    //welcome
    document.getElementById("dearName").innerHTML = "Hello " + document.getElementById("name").value + ",\n";

    //option1
    if (document.getElementById("option1").checked == true) {
        document.getElementById("topicOption1").innerHTML = "<b><ins>Regarding your ticket: </ins></b>" + document.getElementById("ticketNumber").value + "<b><ins> - you have not linked any KA to this ticket.</ins></b>" + "\n";
        document.getElementById("contentOption1").innerHTML = document.getElementById("content1").innerHTML + "\n";
    } else {
        document.getElementById("topicOption1").innerHTML = "";
        document.getElementById("contentOption1").innerHTML = "";
    }

    //option2
    if (document.getElementById("option2").checked == true && document.getElementById("option1").checked == false) {
        document.getElementById("topicOption2").innerHTML = "<b><ins>Regarding your ticket: </ins></b>" + document.getElementById("ticketNumber").value + "<b><ins> - you have not provided admin rights for installation of </ins></b>" + document.getElementById("appName").value + ".\n";

        document.getElementById("contentOption2").innerHTML = document.getElementById("content2").innerHTML + "\n";
    } else if (document.getElementById("option2").checked == true && document.getElementById("option1").checked == true) {
        document.getElementById("topicOption2").innerHTML = "<b><ins>And also you have not provided admin rights for installation of </ins></b>" + document.getElementById("appName").value + ".\n";
        document.getElementById("contentOption2").innerHTML = document.getElementById("content2").innerHTML + "\n";
    } else {
        document.getElementById("topicOption2").innerHTML = "";
        document.getElementById("contentOption2").innerHTML = "";
    }

    //option3
    if (document.getElementById("option3").checked == true && document.getElementById("option1").checked == false && document.getElementById("option2").checked == false) {
        document.getElementById("topicOption3").innerHTML = "<b><ins>Regarding your ticket: </ins></b>" + document.getElementById("ticketNumber").value + "<b><ins> - you have not provided anough data in a description. </ins></b>" + "\n";

        document.getElementById("contentOption3").innerHTML = document.getElementById("content3").innerHTML + "\n";
    } else if (document.getElementById("option3").checked == true && (document.getElementById("option1").checked == true || document.getElementById("option2").checked == true)) {
        document.getElementById("topicOption3").innerHTML = "<b><ins>And also you have not provided anough data in a description.</ins></b>" + "\n";
        document.getElementById("contentOption3").innerHTML = document.getElementById("content3").innerHTML + "\n";
    } else {
        document.getElementById("topicOption3").innerHTML = "";
        document.getElementById("contentOption3").innerHTML = "";
    }

    //option4
    if (document.getElementById("option4").checked == true && document.getElementById("option1").checked == false && document.getElementById("option2").checked == false && document.getElementById("option3").checked == false) {
        document.getElementById("topicOption4").innerHTML = "<b><ins>Regarding your ticket: </ins></b>" + document.getElementById("ticketNumber").value + "<b><ins> - you have linked a KA on a Core profile to a ticket where you should use one on an Assisted profile.</ins></b>" + "\n";

        document.getElementById("contentOption4").innerHTML = document.getElementById("content4").innerHTML + "\n";

    } else if (document.getElementById("option4").checked == true && (document.getElementById("option1").checked == true || document.getElementById("option2").checked == true || document.getElementById("option3").checked == true)) {
        document.getElementById("topicOption4").innerHTML = "<b><ins>And also you have linked a KA on a Core profile to a ticket where you should use one on an Assisted profile.</ins></b>" + "\n";

        document.getElementById("contentOption4").innerHTML = document.getElementById("content4").innerHTML + "\n";
    } else {
        document.getElementById("topicOption4").innerHTML = "";
        document.getElementById("contentOption4").innerHTML = "";
    }

    //closure & buttons
    document.getElementById("closure").style.display = "block";
    document.getElementById("generatedEmail").style.display = "block";
}

function sendEmail() {
    document.getElementById("sendTo").href = "mailto:" + document.getElementById("mailToInput").value + "?body=" + encodeURIComponent(document.getElementById("test").textContent);
}
