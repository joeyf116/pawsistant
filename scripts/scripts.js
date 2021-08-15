// Open Nav Overlay
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

// Close Nav Overlay
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Scroll animation
function scroll(e) {
    console.log(e);
} 

function seeMore() {
  if(document.getElementById("services-list-see-more-tag").innerHTML === "See more!") {
    document.getElementById("services-list").style.display = "flex";
    document.getElementById("services-list").style.flexDirection = "column";
    document.getElementById("services-list-see-more-tag").innerHTML = "See Less"
    document.getElementById("services-list").animate([
      // keyframes
      { transform: 'translateY(100px)' },
      { transform: 'translateY(0px)' }
    ], {
      // timing options
      duration: 1000,
      iterations: 1
    });
  }
  else {
    document.getElementById("services-list").style.display = "none";
    document.getElementById("services-list-see-more-tag").innerHTML = "See more!"
    var anchor = document.querySelector('#instagram-services');
    anchor.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

function seeMore2() {
  if(document.getElementById("services-list-see-more-tag2").innerHTML === "See more!") {
    document.getElementById("services-list2").style.display = "flex";
    document.getElementById("services-list2").style.flexDirection = "column";
    document.getElementById("services-list-see-more-tag2").innerHTML = "See Less"
    document.getElementById("services-list2").animate([
      // keyframes
      { transform: 'translateY(100px)' },
      { transform: 'translateY(0px)' }
    ], {
      // timing options
      duration: 1000,
      iterations: 1
    });
  }
  else {
    document.getElementById("services-list2").style.display = "none";
    document.getElementById("services-list-see-more-tag2").innerHTML = "See more!"
    var anchor = document.querySelector('#instagram-services');
    anchor.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

// Get the modal
var modal = document.getElementById("myModal");

function displayModal(photoNum) {
  console.log(photoNum);
  var modalImg = document.getElementById(`img01`);
  var captionText = document.getElementById(`caption${photoNum}`);
  modal.style.display = "block";
  modalImg.src = `./images/portfolio/${photoNum}.png`;
  // captionText.innerHTML = this.alt;
}

// When the user clicks on <span> (x), close the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}