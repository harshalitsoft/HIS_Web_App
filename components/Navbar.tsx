"use client";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const CLOSING_DELAY_MS = 250;
    /** Match `stellarnav.js` / ContactUs.html `breakpoint: 960` and `@media (max-width: 960px)` in CSS */
    const VIEWPORT_DESKTOP_MIN = 961;

    const rootMenu = nav.querySelector(":scope > ul") as HTMLElement | null;
    if (!rootMenu) return;

    let menuToggle = nav.querySelector(":scope > .menu-toggle") as HTMLAnchorElement | null;
    if (!menuToggle) {
      menuToggle = document.createElement("a");
      menuToggle.href = "#";
      menuToggle.className = "menu-toggle full";
      menuToggle.innerHTML = '<span class="bars"><span></span><span></span><span></span></span>';
      nav.insertBefore(menuToggle, rootMenu);
    }

    const menuLinks = Array.from(nav.querySelectorAll("li > a"));
    menuLinks.forEach((link) => {
      const parentLi = link.parentElement;
      if (!parentLi) return;

      const childList = parentLi.querySelector(":scope > ul");
      if (!childList) return;

      parentLi.classList.add("has-sub");
      let ddToggle = parentLi.querySelector(":scope > .dd-toggle") as HTMLAnchorElement | null;
      if (!ddToggle) {
        ddToggle = document.createElement("a");
        ddToggle.href = "#";
        ddToggle.className = "dd-toggle";
        ddToggle.innerHTML = '<span class="icon-plus"></span>';
        parentLi.appendChild(ddToggle);
      }
    });

    const syncShadow = () => {
      if (window.pageYOffset > 0) {
        nav.classList.add("mainNavShadow");
      } else {
        nav.classList.remove("mainNavShadow");
      }
    };

    /** Same as stellarnav.js `windowCheck` mobile branch: remove mega inline layout */
    const clearMegaMenuInlineStyles = () => {
      nav.querySelectorAll("li.mega > ul").forEach((ul) => {
        ul.removeAttribute("style");
        Array.from(ul.children).forEach((child) => {
          (child as HTMLElement).removeAttribute("style");
        });
      });
    };

    const closeMobileOpenItems = () => {
      nav.classList.remove("active");
      nav.querySelectorAll("li.open, li.activeMenuLi").forEach((item) => {
        item.classList.remove("open", "activeMenuLi");
      });
      nav.querySelectorAll("ul ul").forEach((list) => {
        (list as HTMLElement).style.display = "";
      });
    };

    /**
     * Replicates stellarnav.js desktop mega-menu positioning (normally applied by jQuery
     * `.stellarNav({ breakpoint: 960 })` on ContactUs.html).
     */
    const syncMegaMenuLayout = () => {
      if (window.innerWidth < VIEWPORT_DESKTOP_MIN) return;

      const topItems = nav.querySelectorAll(":scope > ul > li");
      let navWidth = 0;
      topItems.forEach((item) => {
        navWidth += item.getBoundingClientRect().width;
      });
      navWidth = Math.round(navWidth);

      nav.querySelectorAll("li.mega").forEach((megaLi) => {
        const megaUl = megaLi.querySelector(":scope > ul") as HTMLElement | null;
        if (!megaUl) return;

        megaUl.style.left = "0";
        megaUl.style.right = "0";
        megaUl.style.margin = "0px auto";
        megaUl.style.maxWidth = `${navWidth}px`;

        const raw =
          megaLi.getAttribute("data-columns") ?? megaLi.getAttribute("data-column");
        const numCols = raw ? parseInt(raw, 10) : NaN;

        if (numCols === 2) {
          megaLi.querySelectorAll("li.has-sub").forEach((el) => {
            (el as HTMLElement).style.width = "50%";
          });
          return;
        }

        let widthPct = 25;
        if (numCols === 3) widthPct = 33.33;
        else if (numCols === 4) widthPct = 25;
        else if (numCols === 5) widthPct = 20;
        else if (numCols === 6) widthPct = 16.66;
        else if (numCols === 7) widthPct = 14.28;
        else if (numCols === 8) widthPct = 12.5;

        const visibleColumns = Array.from(megaUl.children).filter(
          (child) => !(child as HTMLElement).classList.contains("navtech-section2"),
        );
        const colWidth = visibleColumns.length > 0 ? 100 / visibleColumns.length : widthPct;
        visibleColumns.forEach((child) => {
          (child as HTMLElement).style.width = `${colWidth}%`;
        });
        const hiddenColumn = megaUl.querySelector(":scope > .navtech-section2") as HTMLElement | null;
        if (hiddenColumn) hiddenColumn.style.width = "0";
      });
    };

    const attachDesktopHoverTriggers = () => {
      const cleanupFns: Array<() => void> = [];
      const leaveTimers = new Map<Element, number>();
      const topLevelItems = Array.from(nav.querySelectorAll(":scope > ul > li"));

      const showDirectSubmenu = (li: Element) => {
        const submenu = li.querySelector(":scope > ul") as HTMLElement | null;
        if (!submenu) return;
        const timer = leaveTimers.get(li);
        if (timer) {
          window.clearTimeout(timer);
          leaveTimers.delete(li);
        }
        submenu.style.display = "block";
        if (li.classList.contains("mega")) {
          li.querySelectorAll(".offeringsSubList").forEach((list) => {
            (list as HTMLElement).style.display = "block";
          });
        }
      };

      const hideDirectSubmenu = (li: Element, withDelay: boolean) => {
        const submenu = li.querySelector(":scope > ul") as HTMLElement | null;
        if (!submenu) return;
        const hide = () => {
          submenu.style.display = "none";
          leaveTimers.delete(li);
        };
        if (withDelay) {
          const timer = window.setTimeout(hide, CLOSING_DELAY_MS);
          leaveTimers.set(li, timer);
        } else {
          hide();
        }
      };

      topLevelItems.forEach((li) => {
        const onEnterTop = () => showDirectSubmenu(li);
        const onLeaveTop = () => hideDirectSubmenu(li, li.classList.contains("mega") ? false : true);
        li.addEventListener("mouseenter", onEnterTop);
        li.addEventListener("mouseleave", onLeaveTop);
        cleanupFns.push(() => {
          li.removeEventListener("mouseenter", onEnterTop);
          li.removeEventListener("mouseleave", onLeaveTop);
        });
      });

      const nestedHasSubItems = Array.from(
        nav.querySelectorAll(":scope > ul > li li.has-sub"),
      ).filter((li) => !li.closest("li.mega > ul"));
      nestedHasSubItems.forEach((li) => {
        const onEnterNested = () => showDirectSubmenu(li);
        const onLeaveNested = () => hideDirectSubmenu(li, true);
        li.addEventListener("mouseenter", onEnterNested);
        li.addEventListener("mouseleave", onLeaveNested);
        cleanupFns.push(() => {
          li.removeEventListener("mouseenter", onEnterNested);
          li.removeEventListener("mouseleave", onLeaveNested);
        });
      });

      return () => {
        cleanupFns.forEach((fn) => fn());
        leaveTimers.forEach((timer) => window.clearTimeout(timer));
        leaveTimers.clear();
      };
    };

    let cleanupDesktopHover = () => {};
    let desktopHoverBound = false;

    const syncViewportMode = () => {
      const isMobile = window.innerWidth < VIEWPORT_DESKTOP_MIN;
      nav.classList.toggle("mobile", isMobile);
      nav.classList.toggle("desktop", !isMobile);

      if (isMobile) {
        if (desktopHoverBound) {
          cleanupDesktopHover();
          desktopHoverBound = false;
        }
        clearMegaMenuInlineStyles();
      } else {
        if (!desktopHoverBound) {
          cleanupDesktopHover = attachDesktopHoverTriggers();
          desktopHoverBound = true;
        }
        closeMobileOpenItems();
        syncMegaMenuLayout();
      }
    };

    const onNavClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const toggleBtn = target.closest(".menu-toggle");
      if (toggleBtn && nav.contains(toggleBtn)) {
        e.preventDefault();
        nav.classList.toggle("active");
        return;
      }

      const ddToggle = target.closest(".dd-toggle");
      if (!ddToggle || !nav.contains(ddToggle)) return;
      e.preventDefault();

      const parentLi = ddToggle.parentElement;
      if (!parentLi) return;
      const childList = parentLi.querySelector(":scope > ul") as HTMLElement | null;
      if (!childList) return;

      const isOpen = parentLi.classList.contains("open");
      parentLi.classList.toggle("open", !isOpen);
      parentLi.classList.toggle("activeMenuLi", !isOpen);
      childList.style.display = isOpen ? "none" : "block";
    };

    const onResize = () => {
      syncViewportMode();
    };

    window.addEventListener("scroll", syncShadow, { passive: true });
    window.addEventListener("resize", onResize);
    nav.addEventListener("click", onNavClick);
    syncShadow();
    syncViewportMode();

    return () => {
      cleanupDesktopHover();
      window.removeEventListener("scroll", syncShadow);
      window.removeEventListener("resize", onResize);
      nav.removeEventListener("click", onNavClick);
    };
  }, []);

  return (
    <nav className="fixed-top">
        <div className="stellarNavLogo"></div>
        <div className="stellarnav light" ref={navRef}>
            <ul className="navLeftMobile">
                <li className="navLogoStyle">
                    <a href="/" className="text-left align-items-center justify-content-center">
                        <img src="images/HIS_Logo_1.png" alt="Harshal IT Soft logo — Driving innovation through code"
                            className="stellarNavbarLogo" /><span className="svgTitle">
                                <img src="images/SubTitleLogo.png" alt="Harshal IT Soft logo — Driving innovation through code" />
                        </span>
                    </a>
                </li>

                <li><a href="/" className="menuItems activeMenu">Home</a></li>
                <li>
                    <a className="menuItems" role="button" aria-label="View services">Services</a>
                    <ul className="sub-list">
                        <li><a href="/ai-application-development-service">AI Solutions</a></li>
                        <li><a href="/web-application-development-service">Web Application</a></li>
                        <li><a href="/cloud-application-development-service">Cloud Application</a></li>
                        <li><a href="/mobile-application-development-service">Mobile Application</a></li>
                        <li><a href="/desktop-application-development-service">Desktop Application</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/careers-page" className="menuItems  no-expand-function-mobile">Careers</a>
                    <ul className="sub-list">
                         {/* <li><a href="wpf-developer-openings.html">DotNet Developer</a></li>  */}
                        {/* <li><a href="dot-net-tech-lead-openings.html">DotNet Tech Lead</a></li> */}
                        {/* <li><a href="quality-analyst-openings.html">Quality Analyst</a></li> */}
                    </ul>
                </li>
                <li className="mega" data-columns="3">
                    <a href="#" className="menuItems" role="button" aria-label="View Offerings">Offerings</a>
                    <ul className="nav-offerings justify-content-center text-center">
                        <li className="offeringsSubListHeading">
                            <a className="text-left noHoverEffect" role="heading"
                                aria-label="Technology header">Technology</a>
                            <ul className="no-shadow offeringsSubList">
                                <li><a href="/technology-ai-solution">Ai Solution</a></li>
                                <li><a href="/technology-angular-js">Angular</a></li>
                                <li><a href="/technology-asp-dot-net">Asp.net</a></li>
                                <li><a href="/technology-asp-dot-net-core">Asp.net core</a></li>
                                <li><a href="/technology-c-sharp">C#</a></li>
                                <li><a href="/technology-express-js">Express JS</a></li>
                                <li><a href="/technology-mongodb">MongoDB</a></li>
                                <li className="navtech-section1"><a href="/technology-node-js">Node.js</a></li>
                                <li className="navtech-section1"><a href="/technology-webforms">WebForms</a></li>
                                <li className="navtech-section1"><a href="/technology-winforms">WinForms</a></li>
                                <li className="navtech-section1"><a href="/technology-winui">WinUI</a></li>
                                <li className="navtech-section1"><a href="/technology-wpf">WPF</a></li>
                                <li className="navtech-section1"><a href="/technology-sharepoint">Sharepoint</a></li>
                                <li className="navtech-section1"><a href="/technology-xamarin">Xamarin</a></li>
                            </ul>
                        </li>
                        <li className="offeringsSubListHeading navtech-section2">
                            <a className="text-left noHoverEffect" role="complementary" aria-label="Space">&nbsp;</a>
                            <ul className="no-shadow offeringsSubList nav-divider">
                                <li><a href="/technology-dotnet">.Net</a></li>
                                <li><a href="/technology-node-js">Node.js</a></li>
                                <li><a href="/technology-webforms">WebForms</a></li>
                                <li><a href="/technology-winforms">WinForms</a></li>
                                <li><a href="/technology-winui">WinUI</a></li>
                                <li><a href="/technology-wpf">WPF</a></li>
                                <li><a href="/technology-sharepoint">Sharepoint</a></li>
                            </ul>
                        </li>

                        <li className="offeringsSubListHeading ourDomains">
                            <a className="noHoverEffect" role="heading" aria-label="Domains header">Our Domains</a>
                            <ul className="no-shadow offeringsSubList">
                                <li><a href="/domain-Engineering">Construction</a></li>
                                <li><a href="/Healthcare" className="">Healthcare</a></li>
                                <li><a href="/domain-learning-management-system">Learning Management System</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                {/* <li><a href="https://blog.digitalinfobytes.com/" target="_blank"
                        className="menuItems no-expand-function-mobile">Blog</a></li> */}
                <li><a href="/contactus" className="menuItems no-expand-function-mobile">Contact Us</a></li>
                {/* <li className="share-button-wrap">
                    <div className="share-dropdown">
                        <button className="share-dropbtn" id="share-dropbtn" aria-label="Share this page"></button>
                        <div className="share-dropdown-content d-none">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//digitalinfobytes.com/"
                                className="share-fb-icon" target="_blank"></a>
                            <a href="https://twitter.com/intent/tweet?text=https%3A//digitalinfobytes.com/"
                                className="share-twitter-icon" target="_blank"></a>
                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//digitalinfobytes.com/"
                                className="share-linkedin-icon" target="_blank"></a>
                        </div>
                    </div>
                </li>
                <li className="nav-linkedin-tag">
                    <script type="IN/FollowCompany" data-id="13215901" data-counter="right"></script>
                </li> */}
            </ul>
        </div>
    </nav>

  );
}