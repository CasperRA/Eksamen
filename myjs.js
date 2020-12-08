

function expandpwho() {
    document.getElementById("pwhoid").innerHTML = "Hey! I'm Casper and I'm a student at Zealand Academy, currently studying multimedia design & communication. <br> <br> I live in Slagelse with my girlfriend and I currently work at Coop Danmark in Albertslund, as a front office assisent to support myself financially while i study. After I'm done studying multimedia, I'm gonna continue studying web development as I'm currently working towards becoming a great web dev.";
    document.getElementById("pwhoid").style.height = "23rem"
    document.getElementById("pwhoidshorten").style.display = "block"
    document.getElementById("pwhoidexpand").style.display = "none"
    document.getElementById("borderbot").style.top = "55.25rem"
    document.getElementById("borderright").style.top = "52.25rem"
}

function shortenpwho() {
    document.getElementById("pwhoid").innerHTML = "Hey! I'm Casper and I'm a student at Zealand Academy, currently studying multimedia design & communication.";
    document.getElementById("pwhoid").style.height = "7rem"
    document.getElementById("pwhoidshorten").style.display = "none"
    document.getElementById("pwhoidexpand").style.display = "block"
    document.getElementById("borderbot").style.top = "39.25rem"
    document.getElementById("borderright").style.top = "36.25rem"
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 200 + 30 * i
  });
