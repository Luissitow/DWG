particlesJS("particles-js", {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#f0ff00", "#ffffff"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2.5,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 130,
      color: "#ffffff",
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      out_mode: "bounce"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  retina_detect: true
});
