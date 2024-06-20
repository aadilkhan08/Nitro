


function start(){
    function locomotive(){
        gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      multiplier:.2
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
    }
    
    locomotive()
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })
    
    function files(index) {
        var data = `
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479694/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00000.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479695/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00001.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479695/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00002.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479695/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00003.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479696/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00004.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479696/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00005.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479696/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00006.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479696/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00007.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479696/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00008.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479697/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00009.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479697/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00010.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479697/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00011.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479697/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00012.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479697/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00013.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479697/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00014.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479698/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00015.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479698/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00016.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479698/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00017.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479698/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00018.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479698/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00019.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479699/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00020.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479699/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00021.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479699/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00022.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479699/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00023.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479699/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00024.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479700/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00025.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479700/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00026.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479700/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00027.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479700/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00028.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479700/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00029.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479700/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00030.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479700/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00031.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479700/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00032.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479701/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00033.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479701/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00034.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479701/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00035.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479701/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00036.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479701/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00037.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479701/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00038.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479701/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00039.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479701/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00040.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479702/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00041.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479702/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00042.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479702/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00043.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479702/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00044.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479702/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00045.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479703/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00046.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479703/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00047.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479703/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00048.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479704/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00049.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479704/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00050.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479704/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00051.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479705/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00052.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479705/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00053.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479705/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00054.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479705/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00055.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479705/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00056.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479705/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00057.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479706/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00058.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479706/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00059.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479706/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00060.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479706/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00061.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479706/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00062.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479706/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00063.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479707/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00064.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479707/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00065.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479707/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00066.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479707/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00067.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479707/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00068.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479707/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00069.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479707/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00070.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479707/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00071.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479707/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00072.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479707/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00073.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479708/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00074.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479708/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00075.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479708/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00076.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479709/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00077.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479709/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00078.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479709/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00079.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479709/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00080.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479709/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00081.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479710/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00082.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479710/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00083.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479710/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00084.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479710/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00085.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479710/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00086.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479711/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00087.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479711/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00088.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479711/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00089.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479711/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00090.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479712/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00091.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479712/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00092.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479712/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00093.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479712/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00094.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479713/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00095.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479713/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00096.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479713/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00097.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479713/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00098.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479714/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00099.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479714/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00100.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479715/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00101.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479715/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00102.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479715/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00103.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479716/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00104.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479716/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00105.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479716/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00106.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479717/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00107.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479717/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00108.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479717/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00109.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479717/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00110.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479718/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00111.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479718/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00112.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479718/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00113.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479718/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00114.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479718/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00115.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479719/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00116.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479719/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00117.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479719/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00118.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479719/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00119.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479719/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00120.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479719/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00121.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479720/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00122.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479720/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00123.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479720/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00124.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479720/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00125.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479721/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00126.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479721/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00127.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479721/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00128.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479721/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00129.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479722/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00130.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479722/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00131.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479722/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00132.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479722/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00133.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479723/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00134.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479723/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00135.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479723/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00136.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479723/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00137.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479723/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00138.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479724/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00139.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479724/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00140.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479724/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00141.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479724/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00142.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479725/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00143.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479725/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00144.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479725/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00145.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479725/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00146.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479725/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00147.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479726/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00148.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479726/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00149.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479726/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00150.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479726/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00151.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479726/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00152.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479726/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00153.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479726/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00154.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479726/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00155.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479726/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00156.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479726/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00157.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479727/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00158.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479727/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00159.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479727/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00160.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479727/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00161.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479727/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00162.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479727/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00163.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479728/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00164.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479728/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00165.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479728/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00166.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479728/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00167.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479728/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00168.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479728/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00169.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479728/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00170.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479729/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00171.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479729/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00172.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479729/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00173.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479729/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00174.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479729/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00175.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479729/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00176.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479729/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00177.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479729/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00178.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479729/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00179.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479730/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00180.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479733/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00181.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479733/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00182.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479733/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00183.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479734/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00184.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479734/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00185.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479734/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00186.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479734/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00187.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479734/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00188.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479734/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00189.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479735/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00190.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479735/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00191.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479735/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00192.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479735/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00193.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479735/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00194.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479736/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00195.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479736/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00196.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479736/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00197.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479736/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00198.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479736/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00199.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479736/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00200.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479736/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00201.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479736/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00202.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479737/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00203.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479737/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00204.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479737/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00205.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479737/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00206.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479737/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00207.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479737/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00208.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479737/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00209.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479737/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00210.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479737/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00211.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479737/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00212.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479737/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00213.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479737/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00214.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479738/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00215.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479738/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00216.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479738/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00217.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479738/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00218.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479738/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00219.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479738/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00220.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479738/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00221.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479738/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00222.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479738/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00223.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479738/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00224.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479738/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00225.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479739/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00226.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479739/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00227.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479739/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00228.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479739/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00229.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479739/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00230.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479739/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00231.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479739/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00232.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479739/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00233.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479739/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00234.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479739/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00235.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479739/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00236.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479739/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00237.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479739/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00238.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479740/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00239.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479740/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00240.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479740/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00241.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479740/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00242.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479740/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00243.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479740/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00244.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479740/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00245.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479740/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00246.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479740/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00247.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479740/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00248.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479740/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00249.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479740/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00250.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479740/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00251.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479741/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00252.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479741/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00253.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479741/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00254.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479741/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00255.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479741/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00256.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479741/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00257.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479741/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00258.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479741/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00259.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479741/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00260.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479741/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00261.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479741/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00262.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479741/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00263.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479741/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00264.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479742/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00265.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479742/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00266.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479742/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00267.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479742/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00268.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479742/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00269.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479742/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00270.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479742/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00271.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479742/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00272.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479742/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00273.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479743/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00274.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479743/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00275.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479743/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00276.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479743/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00277.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479743/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00278.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479743/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00279.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479743/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00280.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479744/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00281.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479744/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00282.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479744/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00283.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479744/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00284.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479744/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00285.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479745/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00286.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479745/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00287.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479745/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00288.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479745/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00289.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479745/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00290.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479745/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00291.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479746/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00292.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479746/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00293.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479746/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00294.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479746/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00295.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479746/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00296.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479746/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00297.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479747/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00298.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479747/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00299.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479747/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00300.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479747/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00301.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479747/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00302.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479747/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00303.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479748/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00304.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479748/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00305.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479748/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00306.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479748/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00307.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479748/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00308.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479749/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00309.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479749/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00310.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479749/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00311.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479749/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00312.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479749/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00313.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479749/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00314.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479749/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00315.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479749/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00316.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479750/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00317.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479750/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00318.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479750/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00319.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479750/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00320.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479750/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00321.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479750/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00322.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479750/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00323.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479750/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00324.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479750/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00325.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479750/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00326.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479750/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00327.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479751/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00328.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479751/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00329.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479751/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00330.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479751/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00331.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479751/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00332.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479751/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00333.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479751/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00334.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479751/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00335.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479751/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00336.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479751/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00337.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479751/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00338.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479752/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00339.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479752/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00340.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479752/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00341.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479752/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00342.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479752/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00343.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479752/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00344.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479752/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00345.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479752/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00346.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479752/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00347.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479752/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00348.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479752/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00349.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479753/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00350.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479753/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00351.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479753/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00352.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479753/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00353.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479753/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00354.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479753/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00355.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479753/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00356.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479753/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00357.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479753/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00358.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479753/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00359.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479753/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00360.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479753/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00361.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479753/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00362.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479754/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00363.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479754/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00364.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479754/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00365.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479754/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00366.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479754/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00367.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479754/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00368.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479754/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00369.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479754/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00370.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479754/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00371.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479755/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00372.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479755/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00373.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479755/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00374.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479755/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00375.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479755/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00376.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479755/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00377.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479755/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00378.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479756/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00379.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479756/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00380.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479756/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00381.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479756/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00382.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479756/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00383.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479756/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00384.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479756/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00385.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479756/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00386.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479757/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00387.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479757/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00388.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479757/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00389.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479757/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00390.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479757/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00391.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479757/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00392.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479757/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00393.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479757/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00394.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479757/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00395.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479757/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00396.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479757/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00397.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479757/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00398.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00399.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00400.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00401.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00402.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00403.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00404.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00405.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00406.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00407.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00408.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00409.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00410.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00411.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00412.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00413.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479758/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00414.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00415.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00416.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00417.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00418.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00419.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00420.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00421.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00422.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00423.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00424.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00425.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00426.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00427.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479759/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00428.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00429.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00430.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00431.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00432.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00433.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00434.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00435.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00436.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00437.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00438.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00439.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00440.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00441.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00442.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479760/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00443.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00444.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00445.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00446.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00447.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00448.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00449.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00450.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00451.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00452.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00453.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00454.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00455.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00456.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00457.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00458.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479761/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00459.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479762/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00460.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479762/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00461.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479762/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00462.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479762/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00463.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479762/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00464.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479762/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00465.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479762/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00466.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479762/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00467.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479762/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00468.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479762/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00469.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479762/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00470.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479762/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00471.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479762/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00472.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00473.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00474.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00475.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00476.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00477.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00478.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00479.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00480.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00481.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00482.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00483.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00484.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00485.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00486.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479763/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00487.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00488.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00489.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00490.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00491.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00492.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00493.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00494.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00495.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00496.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00497.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00498.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00499.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00500.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00501.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00502.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479764/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00503.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00504.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00505.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00506.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00507.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00508.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00509.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00510.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00511.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00512.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00513.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00514.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00515.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00516.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479765/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00517.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479766/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00518.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479766/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00519.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479766/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00520.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479766/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00521.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479766/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00522.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479766/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00523.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479766/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00524.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479766/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00525.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479766/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00526.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479766/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00527.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479766/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00528.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479766/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00529.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479766/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00530.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00531.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00532.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00533.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00534.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00535.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00536.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00537.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00538.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00539.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00540.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00541.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00542.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00543.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00544.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00545.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479767/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00546.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00547.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00548.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00549.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00550.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00551.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00552.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00553.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00554.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00555.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00556.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00557.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00558.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00559.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00560.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479768/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00561.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479769/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00562.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479769/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00563.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479769/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00564.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479769/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00565.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479770/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00566.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479770/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00567.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479770/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00568.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479770/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00569.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479770/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00570.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479770/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00571.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479770/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00572.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479770/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00573.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479771/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00574.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479771/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00575.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479771/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00576.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479771/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00577.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479771/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00578.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479771/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00579.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479771/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00580.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479771/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00581.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479771/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00582.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479771/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00583.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479771/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00584.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479771/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00585.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479771/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00586.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479772/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00587.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479772/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00588.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479772/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00589.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479772/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00590.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479772/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00591.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479772/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00592.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479772/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00593.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479772/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00594.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479772/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00595.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479772/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00596.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479772/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00597.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479772/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00598.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479772/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00599.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00600.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00601.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00602.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00603.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00604.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00605.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00606.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00607.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00608.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00609.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00610.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00611.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00612.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479773/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00613.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00614.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00615.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00616.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00617.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00618.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00619.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00620.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00621.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00622.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00623.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00624.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00625.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00626.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00627.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479774/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00628.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00629.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00630.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00631.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00632.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00633.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00634.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00635.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00636.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00637.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00638.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00639.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00640.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00641.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479775/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00642.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00643.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00644.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00645.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00646.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00647.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00648.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00649.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00650.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00651.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00652.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00653.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00654.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00655.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00656.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479776/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00657.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00658.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00659.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00660.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00661.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00662.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00663.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00664.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00665.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00666.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00667.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00668.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00669.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00670.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479777/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00671.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00672.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00673.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00674.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00675.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00676.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00677.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00678.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00679.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00680.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00681.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00682.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00683.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00684.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00685.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479778/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00686.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00687.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00688.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00689.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00690.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00691.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00692.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00693.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00694.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00695.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00696.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00697.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00698.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00699.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00700.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00701.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479779/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00702.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00703.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00704.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00705.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00706.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00707.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00708.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00709.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00710.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00711.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00712.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00713.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00714.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00715.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00716.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00717.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479780/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00718.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00719.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00720.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00721.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00722.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00723.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00724.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00725.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00726.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00727.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00728.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00729.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00730.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00731.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479781/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00732.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00733.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00734.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00735.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00736.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00737.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00738.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00739.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00740.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00741.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00742.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00743.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00744.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00745.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00746.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479782/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00747.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00748.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00749.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00750.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00751.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00752.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00753.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00754.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00755.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00756.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00757.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00758.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00759.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00760.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00761.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00762.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479783/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00763.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00764.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00765.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00766.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00767.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00768.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00769.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00770.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00771.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00772.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00773.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00774.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00775.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00776.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00777.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479784/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00778.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00779.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00780.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00781.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00782.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00783.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00784.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00785.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00786.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00787.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00788.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00789.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00790.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00791.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00792.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00793.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479785/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00794.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479786/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00795.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479786/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00796.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479786/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00797.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479786/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00798.webp
        https://res.cloudinary.com/hdsdev/image/upload/c_fill,g_center,h_1080,q_70,w_1920/v1678905479786/deviate2-webspecial/sequences/fireglow/deviate-2_animation_00799.webp
     `;
        return data.split("\n")[index];
    }
    
    const frameCount = 799;
    
    const images = [];
    const imageSeq = {
        frame: 1
    };
    
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }
    
    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub:.15,
            trigger:`#home`,
            start:`top top`,
            end:`700% top`,
            scroller:`#main`
        },
        onUpdate: render
    });
    
    images[1].onload = render;
    
    function render() {
        scaleImage(images[imageSeq.frame], context)
    }
    
    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }
    ScrollTrigger.create({
        trigger:"#home",
        pin:true,
        // markers:true,
        scroller:`#main`,
        start:`top top`,
        end:`700% top`,
    })
    
    gsap.to(`#home>#text>h1`,{
        scrollTrigger:{
        trigger:`#home>#text>h1`,
        scroller:`#main`,
        start:`top 67%`,
        // markers:true,
        end:`bottom 65%`,
        scrub:.15
        },
        width:`35%`,
    })
    gsap.to(`#home>#text>h2`,{
        scrollTrigger:{
        trigger:`#home>#text>h2`,
        scroller:`#main`,
        start:`top 75%`,
        // markers:true,
        end:`bottom 73%`,
        scrub:.15
        },
        width:`35%`,
    })
    
    gsap.to("#home>#text>h1",{
        scrollTrigger:{
            trigger:`#home>#text>h1`,
            scroller:`#main`,
            start:`top 55%`,
            end:`bottom 52%`,
            // markers:true,
            scrub:.15,
        },
        opacity:0,
        ease: Expo.easeInOut
    })
    gsap.to("#home>#text>h2",{
        scrollTrigger:{
            trigger:`#home>#text>h2`,
            scroller:`#main`,
            start:`top 63%`,
            end:`bottom 61%`,
            // markers:true,
            scrub:.15,
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    
    
    gsap.to(`#home>#text1>h1`,{
        scrollTrigger:{
        trigger:`#home>#text1>h1`,
        scroller:`#main`,
        start:`top 39%`,
        // markers:true,
        end:`bottom 37%`,
        scrub:.15
        },
        width:`32.5%`,
    })
    gsap.to("#home>#text1>h1",{
        scrollTrigger:{
            trigger:`#home>#text1>h1`,
            scroller:`#main`,
            start:`top 20%`,
            end:`bottom 10%`,
            // markers:true,
            scrub:.15,
        },
        opacity:0,
        ease: Expo.easeInOut
    })
    
    gsap.to("#nitro",{
        scrollTrigger:{
            trigger:`#nitro`,
            scroller:`#main`,   
            start:`55% top`,
            end:`60% top`,
            // markers:true,
            scrub:.15
        },
        rotate:`0deg`,
        opacity:1
    })
    gsap.to("#nitro>h1",{
        scrollTrigger:{
            trigger:`#nitro>h1`,
            scroller:`#main`,   
            start:`10% top`,
            end:`25% top`,
            // markers:true,
            scrub:.15
        },
        scale:2,
        opacity:0
    })
    
    gsap.to(`#home>#text2>h1`,{
        scrollTrigger:{
        trigger:`#home>#text2>h1`,
        scroller:`#main`,
        start:`1150% top`,
        // markers:true,
        end:`1190% top`,
        scrub:.15
        },
        width:`30%`,
        ease: Expo.easeInOut
    })
    gsap.to(`#home>#text2>h2`,{
        scrollTrigger:{
        trigger:`#home>#text2>h2`,
        scroller:`#main`,
        start:`1040% top`,
        // markers:true,
        end:`1080% top`,
        scrub:.15
        },
        width:`29%`,
        ease: Expo.easeInOut
    })
    gsap.to(`#home>#text2>h3`,{
        scrollTrigger:{
        trigger:`#home>#text2>h3`,
        scroller:`#main`,
        start:`950% top`,
        // markers:true,
        end:`990% top`,
        scrub:.15
        },
        width:`24.3%`,
        ease: Expo.easeInOut
    })
    
    
    
    gsap.to(`#home>#text2>h1`,{
        scrollTrigger:{
        trigger:`#home>#text2>h1`,
        scroller:`#main`,
        start:`1500% top`,
        // markers:true,
        end:`1540% top`,
        scrub:.15
        },
        opacity:0,
        ease: Expo.easeInOut
    })
    
    gsap.to(`#home>#text2>h2`,{
        scrollTrigger:{
        trigger:`#home>#text2>h2`,
        scroller:`#main`,
        start:`1390% top`,
        // markers:true,
        end:`1430% top`,
        scrub:.15
        },
        opacity:0,
        ease: Expo.easeInOut
    })
    
    gsap.to(`#home>#text2>h3`,{
        scrollTrigger:{
        trigger:`#home>#text2>h3`,
        scroller:`#main`,
        start:`1350% top`,
        // markers:true,
        end:`1400% top`,
        scrub:.15
        },
        opacity:0,
        ease: Expo.easeInOut
    })
    
    
    gsap.to("#home>#text3>h1",{
        scrollTrigger:{
            trigger:`#home>#text3>h1`,
            scroller:`#main`,
            start:`1850% top`,
            // markers:true,
            end:`1900% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`19.5%`
    })
    gsap.to("#home>#text3>h2",{
        scrollTrigger:{
            trigger:`#home>#text3>h2`,
            scroller:`#main`,
            start:`1720% top`,
            // markers:true,
            end:`1790% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`31%`
    })
    
    
    gsap.to("#home>#text3>h1",{
        scrollTrigger:{
            trigger:`#home>#text3>h1`,
            scroller:`#main`,
            start:`2060% top`,
            // markers:true,
            end:`2100% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    gsap.to("#home>#text3>h2",{
        scrollTrigger:{
            trigger:`#home>#text3>h2`,
            scroller:`#main`,
            start:`2000% top`,
            // markers:true,
            end:`2040% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    
    
    
    
    gsap.to("#home>#text4>h1",{
        scrollTrigger:{
            trigger:`#home>#text4>h1`,
            scroller:`#main`,
            start:`2700% top`,
            // markers:true,
            end:`2750% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`26%`
    })
    gsap.to("#home>#text4>h2",{
        scrollTrigger:{
            trigger:`#home>#text4>h2`,
            scroller:`#main`,
            start:`2600% top`,
            // markers:true,
            end:`2650% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`22%`
    })
    gsap.to("#home>#text4>h3",{
        scrollTrigger:{
            trigger:`#home>#text4>h3`,
            scroller:`#main`,
            start:`2550% top`,
            // markers:true,
            end:`2600% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`19%`
    })
    gsap.to("#home>#text4>h4",{
        scrollTrigger:{
            trigger:`#home>#text4>h4`,
            scroller:`#main`,
            start:`2500% top`,
            // markers:true,
            end:`2550% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`19%`
    })
    gsap.to("#home>#text4>h5",{
        scrollTrigger:{
            trigger:`#home>#text4>h5`,
            scroller:`#main`,
            start:`2450% top`,
            // markers:true,
            end:`2500% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`25%`
    })
    
    gsap.to("#pwr",{
        scrollTrigger:{
            trigger:`#pwr`,
            scroller:`#main`,   
            start:`100% top`,
            end:`105% top`,
            // markers:true,
            scrub:.15
        },
        rotate:`0deg`,
        opacity:1
    })
    gsap.to("#pwr>h1",{
        scrollTrigger:{
            trigger:`#pwr>h1`,
            scroller:`#main`,   
            start:`180% top`,
            end:`200% top`,
            // markers:true,
            scrub:.15
        },
        scale:2,
        opacity:0
    })
    
    
    
    
    gsap.to("#home>#text4>h1",{
        scrollTrigger:{
            trigger:`#home>#text4>h1`,
            scroller:`#main`,
            start:`3100% top`,
            // markers:true,
            end:`3150% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    gsap.to("#home>#text4>h2",{
        scrollTrigger:{
            trigger:`#home>#text4>h2`,
            scroller:`#main`,
            start:`3000% top`,
            // markers:true,
            end:`3050% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    gsap.to("#home>#text4>h3",{
        scrollTrigger:{
            trigger:`#home>#text4>h3`,
            scroller:`#main`,
            start:`3000% top`,
            // markers:true,
            end:`3050% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    gsap.to("#home>#text4>h4",{
        scrollTrigger:{
            trigger:`#home>#text4>h4`,
            scroller:`#main`,
            start:`2950% top`,
            // markers:true,
            end:`3000% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    gsap.to("#home>#text4>h5",{
        scrollTrigger:{
            trigger:`#home>#text4>h5`,
            scroller:`#main`,
            start:`2900% top`,
            // markers:true,
            end:`2950% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    
    
    
    
    gsap.to("#home>#text5>h1",{
        scrollTrigger:{
            trigger:`#home>#text5>h1`,
            scroller:`#main`,
            start:`3800% top`,
            // markers:true,
            end:`3850% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`16.8%`
    })
    gsap.to("#home>#text5>h2",{
        scrollTrigger:{
            trigger:`#home>#text5>h2`,
            scroller:`#main`,
            start:`3800% top`,
            // markers:true,
            end:`3850% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`16.8%`
    })
    
    
    
    
    
    
    gsap.to("#home>#text5>h1",{
        scrollTrigger:{
            trigger:`#home>#text5>h1`,
            scroller:`#main`,
            start:`4300% top`,
            // markers:true,
            end:`4350% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    gsap.to("#home>#text5>h2",{
        scrollTrigger:{
            trigger:`#home>#text5>h2`,
            scroller:`#main`,
            start:`4200% top`,
            // markers:true,
            end:`4250% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    
    
    
    gsap.to("#home>#text6>h1",{
        scrollTrigger:{
            trigger:`#home>#text6>h1`,
            scroller:`#main`,
            start:`4500% top`,
            // markers:true,
            end:`4550% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`22.5%`
    })
    gsap.to("#home>#text6>h2",{
        scrollTrigger:{
            trigger:`#home>#text6>h2`,
            scroller:`#main`,
            start:`4400% top`,
            // markers:true,
            end:`4450% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`26.5%`
    })
    
    
    
    
    gsap.to("#home>#text6>h1",{
        scrollTrigger:{
            trigger:`#home>#text6>h1`,
            scroller:`#main`,
            start:`4800% top`,
            // markers:true,
            end:`4850% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    gsap.to("#home>#text6>h2",{
        scrollTrigger:{
            trigger:`#home>#text6>h2`,
            scroller:`#main`,
            start:`4700% top`,
            // markers:true,
            end:`4750% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    
    
    
    gsap.to("#home>#text7>h1",{
        scrollTrigger:{
            trigger:`#home>#text7>h1`,
            scroller:`#main`,
            start:`5200% top`,
            // markers:true,
            end:`5250% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`30.5%`
    })
    gsap.to("#home>#text7>h2",{
        scrollTrigger:{
            trigger:`#home>#text7>h2`,
            scroller:`#main`,
            start:`5100% top`,
            // markers:true,
            end:`5150% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`24.5%`
    })
    gsap.to("#home>#text7>h3",{
        scrollTrigger:{
            trigger:`#home>#text7>h3`,
            scroller:`#main`,
            start:`5000% top`,
            // markers:true,
            end:`5050% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`19.5%`
    })
    gsap.to("#home>#text7>h4",{
        scrollTrigger:{
            trigger:`#home>#text7>h4`,
            scroller:`#main`,
            start:`4900% top`,
            // markers:true,
            end:`4950% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`24%`
    })
    
    
    
    
    gsap.to("#home>#text7>h1",{
        scrollTrigger:{
            trigger:`#home>#text7>h1`,
            scroller:`#main`,
            start:`5800% top`,
            // markers:true,
            end:`5850% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    gsap.to("#home>#text7>h2",{
        scrollTrigger:{
            trigger:`#home>#text7>h2`,
            scroller:`#main`,
            start:`5750% top`,
            // markers:true,
            end:`5800% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    gsap.to("#home>#text7>h3",{
        scrollTrigger:{
            trigger:`#home>#text7>h3`,
            scroller:`#main`,
            start:`5600% top`,
            // markers:true,
            end:`5650% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    gsap.to("#home>#text7>h4",{
        scrollTrigger:{
            trigger:`#home>#text7>h4`,
            scroller:`#main`,
            start:`5500% top`,
            // markers:true,
            end:`5600% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    
    
    
    gsap.to("#grip",{
        scrollTrigger:{
            trigger:`#grip`,
            scroller:`#main`,   
            start:`148% top`,
            end:`150% top`,
            // markers:true,
            scrub:.15
        },
        rotate:`0deg`,
        opacity:1
    })
    gsap.to("#grip>h1",{
        scrollTrigger:{
            trigger:`#grip>h1`,
            scroller:`#main`,   
            start:`320% top`,
            end:`330% top`,
            // markers:true,
            scrub:.15
        },
        scale:2,
        opacity:0
    })
    // gsap.to("#grip>h1",{
    //     scrollTrigger:{
    //         trigger:`#grip>h1`,
    //         scroller:`#main`,   
    //         start:`180% top`,
    //         end:`200% top`,
    //         markers:true,
    //         scrub:.15
    //     },
    //     scale:2,
    //     opacity:0
    // })
    
    
    
    
    
    gsap.to("#home>#text8>h1",{
        scrollTrigger:{
            trigger:`#home>#text8>h1`,
            scroller:`#main`,
            start:`6300% top`,
            // markers:true,
            end:`6350% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`11.5%`
    })
    gsap.to("#home>#text8>h2",{
        scrollTrigger:{
            trigger:`#home>#text8>h2`,
            scroller:`#main`,
            start:`6300% top`,
            // markers:true,
            end:`6350% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`21.5%`
    })
    
    
    
    gsap.to("#home>#text8>h1",{
        scrollTrigger:{
            trigger:`#home>#text8>h1`,
            scroller:`#main`,
            start:`6600% top`,
            // markers:true,
            end:`6650% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    gsap.to("#home>#text8>h2",{
        scrollTrigger:{
            trigger:`#home>#text8>h2`,
            scroller:`#main`,
            start:`6600% top`,
            // markers:true,
            end:`6650% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    
    
    
    
    
    
    gsap.to("#home>#text9>h1",{
        scrollTrigger:{
            trigger:`#home>#text9>h1`,
            scroller:`#main`,
            start:`7000% top`,
            // markers:true,
            end:`7050% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`28%`
    })
    gsap.to("#home>#text9>h2",{
        scrollTrigger:{
            trigger:`#home>#text9>h2`,
            scroller:`#main`,
            start:`6950% top`,
            // markers:true,
            end:`7000% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`22%`
    })
    
    
    gsap.to("#home>#text9>h1",{
        scrollTrigger:{
            trigger:`#home>#text9>h1`,
            scroller:`#main`,
            start:`7500% top`,
            // markers:true,
            end:`7550% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    gsap.to("#home>#text9>h2",{
        scrollTrigger:{
            trigger:`#home>#text9>h2`,
            scroller:`#main`,
            start:`7450% top`,
            // markers:true,
            end:`7500% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    
    
    
    
    gsap.to("#home>#text10>h1",{
        scrollTrigger:{
            trigger:`#home>#text10>h1`,
            scroller:`#main`,
            start:`7600% top`,
            // markers:true,
            end:`7650% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`34%`
    })
    gsap.to("#home>#text10>h2",{
        scrollTrigger:{
            trigger:`#home>#text10>h2`,
            scroller:`#main`,
            start:`7650% top`,
            // markers:true,
            end:`7700% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`11%`
    })
    
    
    
    gsap.to("#home>#text10>h1",{
        scrollTrigger:{
            trigger:`#home>#text10>h1`,
            scroller:`#main`,
            start:`8050% top`,
            // markers:true,
            end:`8100% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    gsap.to("#home>#text10>h2",{
        scrollTrigger:{
            trigger:`#home>#text10>h2`,
            scroller:`#main`,
            start:`8100% top`,
            // markers:true,
            end:`8150% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        opacity:0
    })
    
    
    
    
    
    gsap.to("#home>#text11>h1",{
        scrollTrigger:{
            trigger:`#home>#text11>h1`,
            scroller:`#main`,
            start:`9200% top`,
            // markers:true,
            end:`9250% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`19%`
    })
    gsap.to("#home>#text11>h2",{
        scrollTrigger:{
            trigger:`#home>#text11>h2`,
            scroller:`#main`,
            start:`9150% top`,
            // markers:true,
            end:`9200% top`,
            scrub:.15
        },
        ease: Expo.easeInOut,
        width:`18.5%`
    })
    
    
    
    
    gsap.to("#circle",{
        scrollTrigger:{
            trigger:`#circle`,
            scroller:`#main`,
            start:`24.2% top`,
            end:`35% top`,
            // markers:true,
            scrub:.15
        },
        scale:5,
        opacity:0,
    })
    
    
    
    
}
start()

document.addEventListener("DOMContentLoaded", function() {
    // Ensure the entire page is loaded, not just DOMContentLoaded
    window.addEventListener("load", function() {
        // Hide the loader
        var loader = document.getElementById('loader');
        loader.style.display = 'none';

        // Show the content
        var content = document.getElementById('content');
        content.style.display = 'initial';
    });
});