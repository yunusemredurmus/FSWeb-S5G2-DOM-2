import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
    alert("Bana tıkladın!")
});


// Kodlar buraya gelecek!

document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        alert("Kayıtlarımız 19.04.2023 tarihinden sonra tekrardan açılacak");
    });
});

document.querySelector(".img-content").addEventListener("mouseover", function (e) {
    this.style.transform = "scale(1.3)";
})

document.querySelector(".img-content").addEventListener("mouseout", function (a) {
    this.style.transform = "scale(1)";
});

document.querySelector(".intro img").addEventListener("mouseover", function (e) {
    this.style.transform = "scale(1.3)";
})


document.querySelector(".intro img").addEventListener("mouseout", function (a) {
    this.style.transform = "scale(1)";
});


document.querySelector(".img-fluid.rounded").addEventListener("mouseover", function (e) {
    this.style.transform = "scale(1.3)";
})


document.querySelector(".img-fluid.rounded").addEventListener("mouseout", function (a) {
    this.style.transform = "scale(1)";
});


document.querySelector("body").addEventListener("wheel", function (e) {
    document.body.style.backgroundColor = "whitesmoke";
    if(e.deltaY === 0){
        document.body.style.backgroundColor = "white";
    }
});

const navBar = document.querySelectorAll(".nav a" );
navBar.forEach(function(navElement) {
  navElement.addEventListener("mouseover", function() {
    this.style.border = "1px solid black";
    this.style.borderRadius = "10px";
    this.style.padding = "3px";
    this.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    navBar.style.fontSize = "3px";

  });
  navElement.addEventListener("mouseout", function() {
    this.style.border = "";
    this.style.borderRadius = "";
    this.style.padding = "";
    this.style.boxShadow = "";
  });
});