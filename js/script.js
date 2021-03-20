const tl = gsap.timeline({defaults : {ease: 'power1.out'}})

tl.to('.text',{y:"0%", duration:0.3,stagger:0.3});
tl.to('.slider',{y:"-100%", duration: 0.2,delay:0.5});
tl.to('.intro',{y:"-100%",duration:1});
tl.fromTo('nav',{opacity:0},{opacity:1,duration:1})
tl.fromTo('.big-text',{opacity:0},{opacity:1,duration:1})