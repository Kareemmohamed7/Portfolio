// Start Header
const header = document.getElementById("header");
const toHome = document.getElementById("toHome");

window.onscroll = function() {
    if(window.scrollY > 300){
        header.classList.add("headerFixed");
        toHome.classList.add("btnShow");
        // toHome.setAttribute("id" , "toHome");
        
    }
    else{
        header.classList.remove("headerFixed");
        toHome.classList.remove("btnShow");
    }
}
toHome.addEventListener("click" , function(){
    window.scroll({
        top:0
    })
})
// 




// Start Section About  
    const elements = document.querySelectorAll('.img-about, .text-about');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        // لو عايزها تختفي تاني لما تطلع من الشاشة شيل الكومنت اللي تحت
        // else {
        //   entry.target.classList.remove('show');
        // }
        });
    }, { threshold: 0.3 }); // يعني يبدأ الأنيميشن لما 30% من العنصر يظهر

    elements.forEach(el => observer.observe(el));

// 





// 
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.querySelector('nav ul');

    bar.onclick = () => {
        nav.classList.add('active');
        bar.style.display = 'none';
        close.style.display = 'block';
    }

    close.onclick = () => {
        nav.classList.remove('active');
        bar.style.display = 'block';
        close.style.display = 'none';
    }



// 

    // const sections = document.querySelectorAll("section");
    // const navLinks = document.querySelectorAll("nav ul li a");

    // window.addEventListener("scroll", () => {
    //     let current = "";

    //     sections.forEach((section) => {
    //     const sectionTop = section.offsetTop;
    //     const sectionHeight = section.clientHeight;
    //     if (scrollY >= sectionTop - sectionHeight / 3) {
    //         current = section.getAttribute("id");
    //     }
    //     });

    //     navLinks.forEach((link) => {
    //     link.classList.remove("active");
    //     if (link.getAttribute("href") === "#" + current) {
    //         link.classList.add("active");
    //     }
    //     });
    // });

    // // أول ما الموقع يفتح: خليه دايمًا على Home
    // window.addEventListener("load", () => {
    //     navLinks.forEach(link => link.classList.remove("active"));
    //     document.querySelector('a[href="#home"]').classList.add("active");
    // });

// 



 const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#navbar a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;

      // ✅ أضفنا شرط خاص لآخر سكشن (Contact)
      if (
        scrollY >= sectionTop &&
        (scrollY < sectionTop + sectionHeight || index === sections.length - 1)
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // أول ما الموقع يفتح
  window.addEventListener("load", () => {
    navLinks.forEach(link => link.classList.remove("active"));
    document.querySelector('a[href="#home"]').classList.add("active");
  });