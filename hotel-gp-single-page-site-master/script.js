// const navBtn = document.getElementById('nav-btn');
// const cancelBtn = document.getElementById('cancel-btn');
// const sideNav = document.getElementById('sidenav');
// const modal = document.getElementById('modal');

// navBtn.addEventListener('click', function(){
//     sideNav.classList.add('show');
//     modal.classList.add('showModal');
// });

// cancelBtn.addEventListener('click', function(){
//     sideNav.classList.remove('show');
//     modal.classList.remove('showModal');
// });

// window.addEventListener('click', function(event){
//     if(event.target === modal){
//         sideNav.classList.remove('show');
//         modal.classList.remove('showModal');
//     }
// });

// function openForm() {
//     console.log("hi");
//     document.getElementByClass("book-form").style.display = "block";
    
//   }


  
//   function sendEmail() {

//     console.log("rishabh");

//       var params={
//            checkInDate : document.getElementById("chekin-date").value,
//            checkOutDate : document.getElementById("chekout-date").value,
//            adultCount : document.getElementById("adult").value,
//            children : document.getElementById("children").value,
//            rooms : document.getElementById("rooms").value
//       };  
//       const serviceId = "service_lyd9e3e";
//       const templateId = "template_ehob37j";
//       emailjs.send(serviceId, templateId, params)
//       .then(
//          (res) => {

//             console.log( document.getElementById("chekin-date").value);

//               document.getElementById("chekin-date").value="";
//               document.getElementById("chekout-date").value="";
//               document.getElementById("adult").value="";
//               document.getElementById("rooms").value="";
//               console.log("hi");
//               alert("msg sent !!");
//               console.log(res);
//               alert("msg sent !!");
//           }
//       ).catch(err=>console.log(err));     
//       // console.log(checkInDate);
//       // document.writeln("children" + children);
//       // sendEmail(); reset() ; return false;
//   }
  

