/**
 * VIDL Companies - Site JS
 * Site interactions, animations, and utilities
 * Dependencies: Lenis (loaded separately)
 */

(function () {
  "use strict";

  // ─── Feature Detection ───
  const html = document.documentElement;
  html.classList.add("w-mod-js");
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    html.classList.add("w-mod-touch");
  }

  // ─── Lenis Smooth Scroll ───
  let lenis;
  function initLenis() {
    if (typeof Lenis === "undefined") return;
    lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.7,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.querySelectorAll("[data-lenis-start]").forEach(function (el) {
      el.addEventListener("click", function () { lenis.start(); });
    });
    document.querySelectorAll("[data-lenis-stop]").forEach(function (el) {
      el.addEventListener("click", function () { lenis.stop(); });
    });
    document.querySelectorAll("[data-lenis-toggle]").forEach(function (el) {
      el.addEventListener("click", function () {
        el.classList.toggle("stop-scroll");
        if (el.classList.contains("stop-scroll")) {
          lenis.stop();
        } else {
          lenis.start();
        }
      });
    });
  }

  // ─── Loader ───
  function initLoader() {
    var loader = document.querySelector(".loader");
    if (!loader) return;
    window.addEventListener("load", function () {
      setTimeout(function () {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";
        setTimeout(function () {
          loader.style.display = "none";
        }, 500);
      }, 200);
    });
  }

  // ─── Transparent Nav on Home ───
  function initTransparentNav() {
    if (!document.body.classList.contains("is-home")) return;
    var navBar = document.querySelector(".nav-bar");
    if (!navBar) return;

    function onScroll() {
      if (window.scrollY > 50) {
        navBar.classList.add("nav-scrolled");
      } else {
        navBar.classList.remove("nav-scrolled");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ─── Progress Bar ───
  function initProgressBar() {
    var bar = document.querySelector(".progress-bar");
    if (!bar) return;
    bar.style.width = "0%";
    bar.style.position = "absolute";
    bar.style.top = "0";
    bar.style.left = "0";
    bar.style.zIndex = "10";
    window.addEventListener("scroll", function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + "%";
    });
  }

  // ─── Mobile Nav Toggle ───
  function initMobileNav() {
    var menuBtn = document.querySelector(".button-menu");
    var mobileNav = document.querySelector(".mobile-nav-content");
    var navBar = document.querySelector(".nav-bar");
    if (!menuBtn || !mobileNav) return;

    var isOpen = false;
    menuBtn.addEventListener("click", function () {
      isOpen = !isOpen;
      if (isOpen) {
        mobileNav.style.display = "flex";
        mobileNav.style.opacity = "0";
        mobileNav.style.transform = "translateY(-10px)";
        requestAnimationFrame(function () {
          mobileNav.style.transition = "opacity 0.4s ease, transform 0.4s ease";
          mobileNav.style.opacity = "1";
          mobileNav.style.transform = "translateY(0)";
        });
        menuBtn.classList.add("is-open");
        if (navBar) navBar.classList.add("nav-open");
        document.body.style.overflow = "hidden";
        if (lenis) lenis.stop();
      } else {
        mobileNav.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        mobileNav.style.opacity = "0";
        mobileNav.style.transform = "translateY(-10px)";
        setTimeout(function () {
          mobileNav.style.display = "";
        }, 300);
        menuBtn.classList.remove("is-open");
        if (navBar) navBar.classList.remove("nav-open");
        document.body.style.overflow = "";
        if (lenis) lenis.start();
      }
    });
  }

  // ─── Scroll Animations (IntersectionObserver) ───
  function initScrollAnimations() {
    var animatedElements = document.querySelectorAll(
      ".animation-up-0-1, .animation-up-0-2, .animation-left-0-1, " +
      ".animation-left-0-2, .animation-left-0-3, .animation-fade-in"
    );

    if (!animatedElements.length) return;

    // Set initial states
    animatedElements.forEach(function (el) {
      var classes = el.className;
      if (classes.indexOf("animation-left") !== -1) {
        el.style.opacity = "0";
        el.style.transform = "translateX(20px)";
      } else if (classes.indexOf("animation-up") !== -1) {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
      } else if (classes.indexOf("animation-fade-in") !== -1) {
        el.style.opacity = "0";
        el.style.transform = "translateY(32px)";
      }
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = 0;
            var classes = el.className;
            // Stagger delay based on class suffix
            if (classes.indexOf("-0-2") !== -1) delay = 150;
            if (classes.indexOf("-0-3") !== -1) delay = 300;

            setTimeout(function () {
              el.style.opacity = "1";
              el.style.transform = "translateX(0) translateY(0)";
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ─── Hero Logo Reveal Animation ───
  function initHeroAnimations() {
    var heroLogo = document.querySelector(".big-logo-image-wrapper");
    if (!heroLogo) return;

    setTimeout(function () {
      heroLogo.style.transition = "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      heroLogo.style.transform = "translate3d(0, 0, 0)";
    }, 500);

    // Display heading reveal
    var displayWrappers = document.querySelectorAll(".display-font-wrapper");
    displayWrappers.forEach(function (wrapper) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              wrapper.style.transition = "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
              wrapper.style.transform = "translate3d(0, 0, 0)";
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(wrapper);
    });
  }

  // ─── About Page Image Reveal (slide curtains apart) ───
  function initImageReveal() {
    var wrapper = document.querySelector(".image-reveal-wrapper");
    if (!wrapper) return;

    var left = wrapper.querySelector(".slide.left");
    var right = wrapper.querySelector(".slide.right");
    if (!left || !right) return;

    // Set initial state: slides cover the image
    left.style.transform = "translateX(0%)";
    right.style.transform = "translateX(0%)";
    left.style.transition = "transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)";
    right.style.transition = "transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)";

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // Slide left panel off to the left, right panel off to the right
            left.style.transform = "translateX(-100%)";
            right.style.transform = "translateX(100%)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(wrapper);
  }

  // ─── Parallax / Image Hover Effects ───
  function initImageEffects() {
    // Image zoom on hover for components
    var components = document.querySelectorAll(".component");
    components.forEach(function (comp) {
      var img = comp.querySelector(".image-zoom");
      if (!img) return;
      img.style.transition = "transform 0.6s ease";
      comp.addEventListener("mouseenter", function () {
        img.style.transform = "scale(1.05)";
      });
      comp.addEventListener("mouseleave", function () {
        img.style.transform = "scale(1)";
      });
    });

    // Frame animation on hover
    var hoverComponents = document.querySelectorAll(".component.hover-over");
    hoverComponents.forEach(function (comp) {
      var frame = comp.querySelector(".frame-animate");
      if (!frame) return;
      comp.addEventListener("mouseenter", function () {
        frame.classList.add("is-active");
      });
      comp.addEventListener("mouseleave", function () {
        frame.classList.remove("is-active");
      });
    });
  }

  // ─── Button Hover Animations ───
  function initButtonEffects() {
    // Arrow button hover - slide animation
    var buttons = document.querySelectorAll(".secondary-button, .button");
    buttons.forEach(function (btn) {
      var hoverArrow = btn.querySelector(".arrow-icon.hover");
      var normalArrow = btn.querySelector(".arrow-icon:not(.hover)");
      if (!hoverArrow || !normalArrow) return;

      hoverArrow.style.transition = "transform 0.3s ease";
      normalArrow.style.transition = "transform 0.3s ease";

      btn.addEventListener("mouseenter", function () {
        hoverArrow.style.transform = "translateX(100%)";
        normalArrow.style.transform = "translateX(100%)";
      });
      btn.addEventListener("mouseleave", function () {
        hoverArrow.style.transform = "translateX(0)";
        normalArrow.style.transform = "translateX(0)";
      });
    });

    // Underline hover for minimal buttons
    var minButtons = document.querySelectorAll(".minimal-button");
    minButtons.forEach(function (btn) {
      var fill = btn.querySelector(".line-fill");
      if (!fill) return;
      fill.style.transition = "width 0.3s ease";
      fill.style.width = "0%";
      btn.addEventListener("mouseenter", function () {
        fill.style.width = "100%";
      });
      btn.addEventListener("mouseleave", function () {
        fill.style.width = "0%";
      });
    });

    // Social link hover
    var socialLinks = document.querySelectorAll(".social-link");
    socialLinks.forEach(function (link) {
      var icon = link.querySelector(".social-link-icon");
      if (!icon) return;
      icon.style.transition = "transform 0.3s ease";
      link.addEventListener("mouseenter", function () {
        icon.style.transform = "translateX(4px)";
      });
      link.addEventListener("mouseleave", function () {
        icon.style.transform = "translateX(0)";
      });
    });
  }

  // ─── Logo Grid Sequential Reveal ───
  function initLogoReveal() {
    var logos = document.querySelectorAll(".logo-reveal");
    if (!logos.length) return;

    logos.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // Animate all logos sequentially with staggered delays
            logos.forEach(function (el, i) {
              setTimeout(function () {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 60);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe the parent container
    var wrapper = document.querySelector(".logos-wrapper");
    if (wrapper) observer.observe(wrapper);
  }

  // ─── Cursor Circle (Desktop Only) ───
  function initCursorCircle() {
    if (window.innerWidth <= 1024) return;

    var circle = document.createElement("div");
    circle.classList.add("cursor-circle");
    document.body.appendChild(circle);

    document.addEventListener("mousemove", function (e) {
      circle.style.transform =
        "translate(" + e.clientX + "px, " + e.clientY + "px)";
    });

    var hoverElements = document.querySelectorAll("button, a");
    hoverElements.forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        circle.classList.add("hover-effect");
      });
      el.addEventListener("mouseleave", function () {
        circle.classList.remove("hover-effect");
      });
    });
  }

  // ─── Divider Animation ───
  function initDividers() {
    var dividers = document.querySelectorAll(".divider:not(.dark)");
    dividers.forEach(function (div) {
      if (div.style.width === "0%") {
        var observer = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                div.style.transition = "width 1.2s ease";
                div.style.width = "100%";
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(div);
      }
    });
  }

  // ─── Contact Form Handler ───
  function initContactForm() {
    var form = document.querySelector("#vidl-contact-form") || document.querySelector(".contact-form");
    if (!form) return;

    var successMsg = document.querySelector(".vidl-form-success") || document.querySelector(".form-message-success");
    var errorMsg = document.querySelector(".vidl-form-error") || document.querySelector(".form-message-error");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Honeypot check — bots fill hidden fields, humans don't
      var hp1 = form.querySelector('[name="website"]');
      var hp2 = form.querySelector('[name="phone_confirm"]');
      if ((hp1 && hp1.value) || (hp2 && hp2.value)) {
        // Fake success so bot thinks it worked
        form.style.display = "none";
        if (successMsg) successMsg.style.display = "block";
        return;
      }

      var formData = new FormData(form);
      var data = {};
      formData.forEach(function (value, key) {
        if (key !== "website" && key !== "phone_confirm") {
          data[key] = value;
        }
      });

      // Send to Cloudflare Worker endpoint
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(function (response) {
          if (response.ok) {
            form.style.display = "none";
            if (successMsg) successMsg.style.display = "block";
          } else {
            throw new Error("Form submission failed");
          }
        })
        .catch(function () {
          if (errorMsg) errorMsg.style.display = "block";
        });
    });
  }

  // ─── Team Bio Toggle ───
  function initBioToggle() {
    var toggles = document.querySelectorAll(".vidl-team-bio-toggle");
    if (!toggles.length) return;

    toggles.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var targetId = btn.getAttribute("data-target");
        var bio = document.getElementById(targetId);
        if (!bio) return;

        var isOpen = bio.classList.contains("is-open");
        bio.classList.toggle("is-open");
        btn.classList.toggle("is-open");
      });
    });
  }

  // ─── Lottie Animation (404 page) ───
  function initLottie() {
    var lottieElements = document.querySelectorAll('[data-animation-type="lottie"]');
    if (!lottieElements.length) return;

    // Load lottie-player dynamically
    var script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js";
    script.onload = function () {
      lottieElements.forEach(function (el) {
        var src = el.getAttribute("data-src");
        var loop = el.getAttribute("data-loop") === "1";
        var autoplay = el.getAttribute("data-autoplay") === "1";

        var player = document.createElement("lottie-player");
        player.setAttribute("src", src);
        if (autoplay) player.setAttribute("autoplay", "");
        if (loop) player.setAttribute("loop", "");
        player.style.width = "100%";
        player.style.height = "100%";
        el.appendChild(player);
      });
    };
    document.head.appendChild(script);
  }

  // ─── Nav Text Hover Animation ───
  function initNavHover() {
    var navLinks = document.querySelectorAll(".nav-link-desktop .nav-text-wrapper");
    navLinks.forEach(function (wrapper) {
      var texts = wrapper.querySelectorAll(".nav-text");
      if (texts.length < 2) return;
      texts[0].style.transition = "transform 0.3s ease";
      texts[1].style.transition = "transform 0.3s ease";

      wrapper.parentElement.addEventListener("mouseenter", function () {
        texts[0].style.transform = "translateY(-100%)";
        texts[1].style.transform = "translateY(-100%)";
      });
      wrapper.parentElement.addEventListener("mouseleave", function () {
        texts[0].style.transform = "translateY(0)";
        texts[1].style.transform = "translateY(0)";
      });
    });
  }

  // ─── Video Background ───
  function initBackgroundVideo() {
    var videoContainers = document.querySelectorAll(".w-background-video");
    videoContainers.forEach(function (container) {
      var video = container.querySelector("video");
      if (!video) return;
      video.setAttribute("playsinline", "");
      video.setAttribute("muted", "");
      video.muted = true;
      video.play().catch(function () {
        // Autoplay blocked, that's ok
      });
    });
  }

  // ─── Password Page (401) ───
  function initPasswordPage() {
    var passForm = document.querySelector(".w-password-page form");
    if (!passForm) return;
    // Remove legacy auth endpoint
    passForm.removeAttribute("action");
  }

  // ─── Initialize Everything ───
  document.addEventListener("DOMContentLoaded", function () {
    initLenis();
    initTransparentNav();
    initLoader();
    initProgressBar();
    initMobileNav();
    initScrollAnimations();
    initHeroAnimations();
    initImageReveal();
    initImageEffects();
    initButtonEffects();
    initLogoReveal();
    initCursorCircle();
    initDividers();
    initContactForm();
    initBioToggle();
    initLottie();
    initNavHover();
    initBackgroundVideo();
    initPasswordPage();
  });
})();
