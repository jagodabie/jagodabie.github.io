const stage = document.querySelector('#container');
const fragment = document.createDocumentFragment();
const grid = [20, 20]; 
const col = grid[0];
const row = grid[1]; 
const field = col*row;

//viewport 


function navHamburger() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

anime({
  targets: '.topnav,#icon',
  translateY: [-50, 0],
  easing: 'easeOutExpo',
  duration: 1000,
  delay: (el, i) => {
    return 800 + 100 * i;
  },
  opacity: [0, 1],
});


/*
anime({
  targets: 'h1',
  translateY: [-50, 0],
  easing: 'easeOutExpo',
  duration: 1500,
  delay: (el, i) => {
    return 1000 + 100 * i;
  },
  opacity: [0, 1],
})
anime({
  targets: 'p',
  translateY: [-50, 0],
  easing: 'easeOutExpo',
  duration: 1500,
  delay: (el, i) => {
    return 1200 + 100 * i;
  },
  opacity: [0, 1],
})
anime({
  targets: '.icon',
  translateY: [-50, 0],
  easing: 'easeOutExpo',
  duration: 1500,
  delay: (el, i) => {
    return 1400 + 100 * i;
  },
  opacity: [0, 1],
})

  targets: 'footer',
  translateY: [-50, 0],
  easing: 'easeOutExpo',
  duration: 1500,
  delay: (el, i) => {
    return 800 + 100 * i;
  },
  opacity: [0, 1],
})
anime({
  targets: '.Projects',
  translateY: [-50, 0],
  easing: 'easeOutExpo',
  duration: 1000,
  delay: (el, i) => {
    return 800 + 100 * i;
  },
  opacity: [0, 1],
})
*/


for (let i = 0; i < field; i ++ ){
    const div = document.createElement('div');
    fragment.appendChild(div);
    div.className ='tail';
}
stage.appendChild(fragment);

if (window.screen.width <= 360) {
  const stageAnimation = anime
  .timeline({
  targets: '.tail',
  easing: "easeInBack", 
  delay: anime.stagger(10, {from: "last"}),
  duration: 2000,
  endDelay: 1000, 
  loop: true, 
  autoplay: false,

  })
  .add({
      translateX: () => anime.random(-100,100),
      translateY: () => anime.random(-100,100),
      delay: anime.stagger(50, {grid: grid, from: 'last'
      }),
      scale: 0.5, 
      backgroundColor:'hsla(229, 48%, 54%, 0.432)',
      borderRadius:'50%'
  })
  .add({
      translateX: 0,
      translateY: 0,
      delay: anime.stagger(100, {grid: grid, from: 
      "center"}), 
      duration: 2000, 
      backgroundColor: 'hsla(271, 48%, 54%, 0.432)',
    }) 
    stageAnimation.play()
  }

const stageAnimation = anime
    .timeline({
    targets: '.tail',
    easing: "easeInBack", 
    delay: anime.stagger(10, {from: "last"}),
    duration: 2000,
    endDelay: 1000, 
    loop: true, 
    autoplay: false,

    })
    .add({
        translateX: () => anime.random(-200,200),
        translateY: () => anime.random(-200,200),
        delay: anime.stagger(50, {grid: grid, from: 'last'
        }),
        scale: 0.5, 
        backgroundColor:'hsla(229, 48%, 54%, 0.432)',
        borderRadius:'50%'
    })
    .add({
        translateX: 0,
        translateY: 0,
        delay: anime.stagger(100, {grid: grid, from: 
        "center"}), 
        duration: 2000, 
        backgroundColor: 'hsla(271, 48%, 54%, 0.432)',
      }) 

     
    stageAnimation.play()



