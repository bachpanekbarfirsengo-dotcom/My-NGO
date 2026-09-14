// ══════════════════════════════════════════
//   BACHPAN EK BAR FIRSE FOUNDATION
//   script.js
// ══════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {

  // ── NAVBAR SCROLL ──
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });

  // ── HAMBURGER ──
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  // ── DRUG HARMS TABS ──
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    });
  });

  // ── CONTACT FORM ──
  const form = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.style.display = "none";
      formSuccess.classList.add("show");
      setTimeout(() => {
        formSuccess.classList.remove("show");
        form.style.display = "";
        form.reset();
      }, 6000);
    });
  }

  // ── SCROLL REVEAL ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, i * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    ".mission-card, .contact-card, .harm-item, .children-step, .timeline-step, .gov-card, .dt-item, .recovery-imgs img"
  ).forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // ── SMOOTH SCROLL ──
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
      }
    });
  });

  // ── ACTIVE NAV LINK ──
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    document.querySelectorAll(".nav-links a").forEach(a => {
      a.classList.toggle("active-link", a.getAttribute("href") === "#" + current);
    });
  });

});
