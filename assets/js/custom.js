(function ($) {
  "use strict";

  // Header Type = Fixed
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  $(".loop").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    margin: 0,
    responsive: {
      1200: {
        items: 5,
      },
      992: {
        items: 3,
      },
      760: {
        items: 2,
      },
    },
  });

  // Acc
  $(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .addClass("active");

      var listItemHeight = $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .innerHeight();
      $(".naccs ul").height(listItemHeight + "px");
    }
  });

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(document).on("click", ".menu-trigger", function (e) {
      e.preventDefault();
      var $trigger = $(this);
      var $header = $trigger.closest(".header-area");
      $trigger.toggleClass("active");
      $header.toggleClass("menu-open");
      $header.find(".nav").toggleClass("is-open");
    });
  }

  // Menu elevator animation
  $(".scroll-to-section a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $(".menu-trigger").removeClass("active");
          $(".header-area").removeClass("menu-open");
          $(".header-area .nav").removeClass("is-open");
        }
        $("html,body").animate(
          {
            scrollTop: target.offset().top + 1,
          },
          700,
        );
        return false;
      }
    }
  });

  $(document).ready(function () {
    $(document).on("scroll", onScroll);

    var i18n = {
      vi: {
        title: "Ngoc Son | Kỹ sư phần mềm chuyên nghiệp",
        nav: [
          "Trang chủ",
          "Dịch vụ",
          "Ads & Maps",
          "Dự án",
          "Chứng chỉ",
          "Liên hệ",
        ],
        menu: "Trình đơn",
        heroEyebrow: "Kỹ sư phần mềm • Chuyên gia Full-Stack",
        heroTitle: "Xây dựng sản phẩm số tin cậy cho doanh nghiệp thực tế",
        heroDesc:
          "Xin chào, tôi là Ngoc Son - Kỹ sư phần mềm tại Việt Nam. Tôi tập trung vào phát triển full-stack, kiến trúc mở rộng và các giải pháp thực tiễn giúp đội ngũ triển khai nhanh hơn với chất lượng tốt hơn.",
        heroButtons: ["Xem dự án", "Xem CV online"],
        metrics: [
          "Dự án đã triển khai",
          "Web, API, tích hợp Mobile",
          "Phản hồi nhanh cho yêu cầu mới",
        ],
        heroLinks: ["Facebook", "Email", "Gọi ngay"],
        servicesEyebrow: "Năng lực",
        servicesTitle: "Những gì tôi có thể mang lại",
        servicesDesc:
          "Dịch vụ phát triển phần mềm đầu-cuối, tập trung vào chất lượng sản phẩm, hiệu năng và khả năng bảo trì dài hạn.",
        serviceTitles: [
          "Phát triển ứng dụng Web",
          "Phát triển ứng dụng Mobile",
          "Phát triển API",
          "Phát triển phần mềm theo yêu cầu",
        ],
        serviceDescs: [
          "Xây dựng hệ thống web bảo mật, hiệu năng cao, responsive với kiến trúc sạch.",
          "Phát triển trải nghiệm mobile thực tế với tích hợp API chặt chẽ và vận hành ổn định.",
          "Thiết kế và triển khai API mạnh mẽ với hợp đồng rõ ràng, luồng dữ liệu tối ưu và dễ bảo trì.",
          "Xây dựng giải pháp phần mềm theo đúng bài toán doanh nghiệp, hỗ trợ tự động hóa và mở rộng vận hành.",
        ],
        serviceBtns: [
          "Xem công việc",
          "Xem công việc",
          "Xem công việc",
          "Liên hệ ngay",
        ],
        adsEyebrow: "Dịch vụ Marketing",
        adsTitle: "Dịch vụ Google Ads & Google Maps",
        adsDesc:
          "Tôi cung cấp giải pháp tăng trưởng local thực chiến cho doanh nghiệp: chạy quảng cáo Google Ads tập trung hiệu suất và tối ưu Google Maps để tăng cuộc gọi, chỉ đường và khách hàng tiềm năng chất lượng.",
        adsCards: ["Quản lý Google Ads", "Tối ưu Google Maps"],
        adsCardDesc: [
          "Triển khai và tối ưu toàn bộ chiến dịch Search theo nhu cầu địa phương, bám sát KPI.",
          "Tối ưu hồ sơ doanh nghiệp chuyên nghiệp để tăng hiển thị local và độ tin cậy với khách hàng gần khu vực.",
        ],
        adsBullets: [
          [
            "Chiến lược từ khóa và cấu trúc chiến dịch",
            "Nội dung quảng cáo + tiện ích mở rộng thu hút",
            "Kiểm soát ngân sách và tối ưu chuyển đổi",
          ],
          [
            "Thiết lập hồ sơ doanh nghiệp và danh mục chuẩn",
            "Đồng bộ NAP và tín hiệu địa phương",
            "Tăng trưởng review và chiến lược nội dung bài đăng",
          ],
        ],
        process: [
          "Đánh giá hiện trạng và xác định mục tiêu",
          "Thiết lập chiến dịch/hồ sơ theo hướng chuyển đổi",
          "Tối ưu hằng tuần và báo cáo minh bạch",
        ],
        freeConsult: "Nhận tư vấn miễn phí",
        portfolioEyebrow: "Dự án nổi bật",
        portfolioTitle: "Dự án tiêu biểu",
        portfolioDesc:
          "Các dự án kết hợp nhu cầu kinh doanh thực tế với kiến trúc sạch, hiệu năng tốt và khả năng bảo trì dài hạn.",
        visitWebsite: "Xem website",
        projectTypes: [
          "Website doanh nghiệp",
          "Website chi nhánh doanh nghiệp",
          "Nền tảng dịch vụ",
          "Website kinh doanh công nghiệp",
          "Trung tâm đào tạo",
          "Website chi nhánh khu vực",
          "Website thương hiệu F&B",
          "Nền tảng cứu hộ giao thông",
          "Cần giải pháp tương tự?",
        ],
        projectCtaTitle: "Hãy trao đổi về dự án của bạn",
        projectCtaDesc:
          "Tôi cũng tham gia phát triển hệ thống nội bộ doanh nghiệp, tự động hóa quy trình và bảo trì sản phẩm dài hạn.",
        certEyebrow: "Thành tựu",
        certTitle: "Chứng chỉ chuyên môn & năng lực",
        certDesc:
          "Các cột mốc học tập đã được xác thực trong lĩnh vực kỹ thuật phần mềm, bảo mật, DevOps và phát triển sản phẩm số.",
        certSummary: ["Chứng chỉ", "Bảo mật & Cloud", "Học tập liên tục"],
        certGroups: ["Chứng chỉ nổi bật", "Tất cả chứng chỉ"],
        viewCredential: "Xem chứng chỉ",
        footerEyebrow: "Liên hệ",
        footerTitle: "Cùng xây dựng sản phẩm tuyệt vời",
        footerDesc:
          "Sẵn sàng cho dự án freelance, hợp tác dài hạn và tư vấn giải pháp sản phẩm.",
        startConversation: "Bắt đầu trao đổi",
        quickLinks: "Liên kết nhanh",
        profiles: "Hồ sơ",
        footerNav: ["Trang chủ", "Ads & Maps", "Dự án", "Chứng chỉ", "Liên hệ"],
        copyright: "Bản quyền © 2026 Ngoc Son Developer. Đã đăng ký mọi quyền.",
      },
      en: {
        title: "Ngoc Son | Professional Software Engineer",
        nav: [
          "Home",
          "Services",
          "Ads & Maps",
          "Projects",
          "Certificates",
          "Contact",
        ],
        menu: "Menu",
        heroEyebrow: "Software Engineer • Full-Stack Specialist",
        heroTitle: "Building Reliable Digital Products for Real Business",
        heroDesc:
          "Hello, I am Ngoc Son - a Software Engineer from Vietnam. I focus on full-stack web development, scalable architecture, and practical solutions that help teams ship faster with better quality.",
        heroButtons: ["View Projects", "View My CV Online"],
        metrics: [
          "Delivered Projects",
          "Web, API, Mobile Integration",
          "Fast Response for New Requests",
        ],
        heroLinks: ["Facebook", "Email", "Call"],
        servicesEyebrow: "Capabilities",
        servicesTitle: "What I Can Deliver",
        servicesDesc:
          "End-to-end software development services designed for product quality, performance, and long-term maintainability.",
        serviceTitles: [
          "Web Application Development",
          "Mobile App Development",
          "API Development",
          "Custom Software Development",
        ],
        serviceDescs: [
          "Develop responsive, secure, and high-performance web systems using modern frameworks and clean architecture.",
          "Build practical mobile experiences with strong API integration, smooth UI, and stable release process.",
          "Design and implement robust APIs with clear contracts, scalable data flow, and maintainable documentation.",
          "Build tailored software aligned with your business workflow, helping teams automate and scale operations.",
        ],
        serviceBtns: ["View Work", "View Work", "View Work", "Contact Me"],
        adsEyebrow: "Marketing Services",
        adsTitle: "Google Ads & Google Maps Services",
        adsDesc:
          "I provide practical local growth services for businesses: running performance-focused Google Ads campaigns and optimizing Google Maps profiles to increase calls, directions, and qualified leads.",
        adsCards: ["Google Ads Management", "Google Maps Optimization"],
        adsCardDesc: [
          "End-to-end campaign setup and optimization for Search and local intent keywords with clear KPI tracking.",
          "Professional profile optimization to improve local visibility and trust for nearby customers.",
        ],
        adsBullets: [
          [
            "Keyword strategy and ad structure",
            "Compelling ad copy + extensions",
            "Budget control and conversion optimization",
          ],
          [
            "Business profile setup and category optimization",
            "NAP consistency and location signals",
            "Review growth and post content strategy",
          ],
        ],
        process: [
          "Audit current performance and define goals",
          "Build campaign/profile with conversion-first setup",
          "Weekly optimization and transparent reporting",
        ],
        freeConsult: "Get a Free Consultation",
        portfolioEyebrow: "Portfolio",
        portfolioTitle: "Selected Projects",
        portfolioDesc:
          "Projects that combine practical business requirements with clean architecture, strong performance, and long-term maintainability.",
        visitWebsite: "Visit Website",
        projectTypes: [
          "Corporate Website",
          "Enterprise Branch Site",
          "Service Platform",
          "Industrial Business Site",
          "Training Center",
          "Regional Branch Site",
          "F&B Brand Website",
          "Roadside Assistance Platform",
          "Need a Similar Solution?",
        ],
        projectCtaTitle: "Let's Discuss Your Project",
        projectCtaDesc:
          "I also contribute to internal enterprise systems, automation workflows, and long-term product maintenance.",
        certEyebrow: "Achievements",
        certTitle: "Professional Certificates & Credentials",
        certDesc:
          "Verified learning milestones in software engineering, security, DevOps, and digital product development.",
        certSummary: [
          "Certificates",
          "Security & Cloud",
          "Continuous Learning",
        ],
        certGroups: ["Top Credentials", "All Certificates"],
        viewCredential: "View credential",
        footerEyebrow: "Contact",
        footerTitle: "Let's Build Something Great Together",
        footerDesc:
          "Available for freelance projects, long-term collaboration, and product consulting.",
        startConversation: "Start a Conversation",
        quickLinks: "Quick Links",
        profiles: "Profiles",
        footerNav: [
          "Home",
          "Ads & Maps",
          "Projects",
          "Certificates",
          "Contact",
        ],
        copyright: "Copyright © 2026 Ngoc Son Developer. All rights reserved.",
      },
    };

    function setText(selector, value) {
      var el = document.querySelector(selector);
      if (el) el.textContent = value;
    }

    function setHtml(selector, value) {
      var el = document.querySelector(selector);
      if (el) el.innerHTML = value;
    }

    function applyLanguage(lang) {
      var t = i18n[lang] || i18n.vi;
      document.documentElement.lang = lang;
      document.title = t.title;

      document
        .querySelectorAll(".nav > li.scroll-to-section > a")
        .forEach(function (a, i) {
          if (t.nav[i]) a.textContent = t.nav[i];
        });
      setText(".menu-trigger span", t.menu);

      setText(".main-banner .eyebrow", t.heroEyebrow);
      setText(".main-banner .left-content h2", t.heroTitle);
      setText(".main-banner .left-content p", t.heroDesc);
      setHtml(
        ".main-banner .gradient-button a",
        t.heroButtons[0] + ' <i class="fa fa-arrow-right"></i>',
      );
      setHtml(
        ".main-banner .border-button a",
        t.heroButtons[1] + ' <i class="fab fa-google-play"></i>',
      );
      document
        .querySelectorAll(".hero-metrics .metric-card span")
        .forEach(function (el, i) {
          if (t.metrics[i]) el.textContent = t.metrics[i];
        });
      document.querySelectorAll(".hero-links a").forEach(function (el, i) {
        if (t.heroLinks[i]) {
          var icon = el.querySelector("i");
          if (icon) {
            el.innerHTML = icon.outerHTML + " " + t.heroLinks[i];
          } else {
            el.textContent = t.heroLinks[i];
          }
        }
      });

      setText("#services .section-heading .eyebrow", t.servicesEyebrow);
      setHtml(
        "#services .section-heading h4",
        lang === "vi"
          ? "Những gì tôi có thể <em>mang lại</em>"
          : "What I Can <em>Deliver</em>",
      );
      setText("#services .section-heading p", t.servicesDesc);
      document
        .querySelectorAll("#services .service-item h4")
        .forEach(function (el, i) {
          if (t.serviceTitles[i]) el.textContent = t.serviceTitles[i];
        });
      document
        .querySelectorAll("#services .service-item p")
        .forEach(function (el, i) {
          if (t.serviceDescs[i]) el.textContent = t.serviceDescs[i];
        });
      document
        .querySelectorAll("#services .service-item .text-button a")
        .forEach(function (el, i) {
          if (t.serviceBtns[i])
            el.innerHTML =
              t.serviceBtns[i] + ' <i class="fa fa-arrow-right"></i>';
        });

      setText("#ads-maps .section-heading .eyebrow", t.adsEyebrow);
      setHtml(
        "#ads-maps .section-heading h4",
        lang === "vi"
          ? "Dịch vụ Google <em>Ads</em> & Google <em>Maps</em>"
          : "Google <em>Ads</em> & Google <em>Maps</em> Services",
      );
      setText("#ads-maps .section-heading p", t.adsDesc);
      document
        .querySelectorAll("#ads-maps .ads-card h5")
        .forEach(function (el, i) {
          if (t.adsCards[i]) el.textContent = t.adsCards[i];
        });
      document
        .querySelectorAll("#ads-maps .ads-card p")
        .forEach(function (el, i) {
          if (t.adsCardDesc[i]) el.textContent = t.adsCardDesc[i];
        });
      document
        .querySelectorAll("#ads-maps .ads-card ul")
        .forEach(function (ul, idx) {
          var lis = ul.querySelectorAll("li");
          lis.forEach(function (li, i) {
            if (t.adsBullets[idx] && t.adsBullets[idx][i])
              li.textContent = t.adsBullets[idx][i];
          });
        });
      document.querySelectorAll(".ads-step p").forEach(function (el, i) {
        if (t.process[i]) el.textContent = t.process[i];
      });
      setHtml(
        "#ads-maps .gradient-button a",
        '<i class="fa fa-headphones"></i> ' + t.freeConsult,
      );

      setText("#project .section-heading .eyebrow", t.portfolioEyebrow);
      setHtml(
        "#project .section-heading h4",
        lang === "vi"
          ? "Dự án <em>tiêu biểu</em>"
          : "Selected <em>Projects</em>",
      );
      setText("#project .section-heading p", t.portfolioDesc);
      document
        .querySelectorAll("#project .project-type")
        .forEach(function (el, i) {
          if (t.projectTypes[i]) el.textContent = t.projectTypes[i];
        });
      document
        .querySelectorAll("#project .project-card > a")
        .forEach(function (el) {
          el.innerHTML = t.visitWebsite + ' <i class="fa fa-arrow-right"></i>';
        });
      setText("#project .project-card-cta h5", t.projectCtaTitle);
      setText("#project .project-card-cta p", t.projectCtaDesc);

      setText("#certificate .section-heading .eyebrow", t.certEyebrow);
      setHtml(
        "#certificate .section-heading h4",
        lang === "vi"
          ? "Chứng <em>chỉ</em> chuyên môn & năng lực"
          : "Professional <em>Certificates</em> & Credentials",
      );
      setText("#certificate .section-heading p", t.certDesc);
      document.querySelectorAll(".cert-summary span").forEach(function (el, i) {
        if (t.certSummary[i]) {
          var strong = el.querySelector("strong");
          if (strong) {
            if (i === 0) {
              el.innerHTML =
                "<strong>" +
                strong.textContent +
                "</strong> " +
                t.certSummary[i];
            } else {
              el.innerHTML = "<strong>" + t.certSummary[i] + "</strong>";
            }
          }
        }
      });
      document.querySelectorAll(".cert-group-title").forEach(function (el, i) {
        if (t.certGroups[i]) el.textContent = t.certGroups[i];
      });
      document
        .querySelectorAll("#certificate .border-button a")
        .forEach(function (el) {
          el.textContent = t.viewCredential;
        });

      setText(".footer-cta .eyebrow", t.footerEyebrow);
      setText(".footer-cta h4", t.footerTitle);
      setText(".footer-cta p", t.footerDesc);
      setText(".footer-cta-btn", t.startConversation);
      setText(".footer-main .col-lg-3 .footer-widget h4", t.quickLinks);
      setText(".footer-main .col-lg-4 .footer-widget h4", t.profiles);
      document
        .querySelectorAll(".footer-main .col-lg-3 .footer-widget ul li a")
        .forEach(function (el, i) {
          if (t.footerNav[i]) el.textContent = t.footerNav[i];
        });
      setText(
        ".footer-main .col-lg-4 .footer-widget ul li:nth-child(2) span",
        lang === "vi" ? "Hồ sơ CV" : "Curriculum Vitae",
      );
      setText(
        ".footer-main .col-lg-4 .footer-widget ul li:nth-child(3) a",
        lang === "vi"
          ? "Đại học Quốc tế Miền Đông"
          : "Eastern International University",
      );
      setText(".footer-bottom p", t.copyright);

      document.querySelectorAll(".lang-btn").forEach(function (btn) {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
      });
    }

    var savedLang = localStorage.getItem("site_lang") || "vi";
    applyLanguage(savedLang);

    $(document).on("click", ".lang-btn", function () {
      var lang = $(this).data("lang");
      if (!i18n[lang]) return;
      localStorage.setItem("site_lang", lang);
      applyLanguage(lang);
    });

    //smoothscroll
    $('.scroll-to-section a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $(".scroll-to-section a").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      var target = this.hash,
        menu = target;
      var target = $(this.hash);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top + 1,
          },
          500,
          "swing",
          function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          },
        );
    });

    // Certificate gallery with Fancybox
    if (window.Fancybox) {
      $(
        "#certificate .pricing-item-regular img, #certificate .pricing-item-pro img",
      ).each(function () {
        var $img = $(this);
        if ($img.parent("a[data-fancybox='certificates']").length) {
          return;
        }

        var imageSrc = $img.attr("src");
        var imageAlt = $img.attr("alt") || "Certificate";
        var $anchor = $("<a></a>")
          .attr("href", imageSrc)
          .attr("data-fancybox", "certificates")
          .attr("data-caption", imageAlt)
          .attr("aria-label", "View certificate image");

        $img.wrap($anchor);
      });

      Fancybox.bind("[data-fancybox='certificates']", {
        Thumbs: false,
        Toolbar: {
          display: {
            left: [],
            middle: [],
            right: ["zoomIn", "zoomOut", "toggle1to1", "slideshow", "close"],
          },
        },
      });
    }
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $(".nav a").each(function () {
      var currLink = $(this);
      var href = currLink.attr("href");

      // Ignore non-anchor or placeholder links like "#"
      if (!href || href === "#" || href.charAt(0) !== "#") {
        return;
      }

      var refElement = $(href);
      if (!refElement.length) {
        return;
      }

      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav ul li a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }

  // Acc
  $(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .addClass("active");

      var listItemHeight = $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .innerHeight();
      $(".naccs ul").height(listItemHeight + "px");
    }
  });

  // Page loading animation
  $(window).on("load", function () {
    $("#js-preloader").addClass("loaded");
  });

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $(".submenu").on("click", function () {
      if (width < 767) {
        $(".submenu ul").removeClass("active");
        $(this).find("ul").toggleClass("active");
      }
    });
  }
})(window.jQuery);
