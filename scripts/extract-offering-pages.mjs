import fs from "fs";
import path from "path";

const root = path.resolve("d:/Personal/WebSite");
const techSlugs = [
  "technology-ai-solution",
  "technology-angular-js",
  "technology-asp-dot-net",
  "technology-asp-dot-net-core",
  "technology-c-sharp",
  "technology-express-js",
  "technology-mongodb",
  "technology-node-js",
  "technology-webforms",
  "technology-winforms",
  "technology-winui",
  "technology-wpf",
  "technology-sharepoint",
  "technology-xamarin",
  "technology-dotnet",
];

const domainSlugs = ["domain-Engineering", "Healthcare", "domain-learning-management-system"];

function cleanHtml(text) {
  if (!text) return "";
  return text
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function get(html, re) {
  const m = html.match(re);
  return m ? cleanHtml(m[1]) : "";
}

function parseProConsItems(section) {
  const items = [];
  const re = /<h4 class="(pros|cons)">([^<]+)<\/h4>\s*<p class="\1">\s*([\s\S]*?)<\/p>/g;
  let m;
  while ((m = re.exec(section)) !== null) {
    items.push({ title: m[2].trim(), content: cleanHtml(m[3]) });
  }
  return items;
}

function extractTechnology(slug, html) {
  const prosSection = html.match(/<section id="pro-cons-section">([\s\S]*?)<\/section>/);
  let pros = [];
  let cons = [];
  let prosIntro = "";
  let consIntro = "";
  let prosHeading = "Pros:";
  let consHeading = "Cons:";

  if (prosSection) {
    const block = prosSection[1];
    const prosHeadingMatch = block.match(/<h3 class="pros[^>]*>([^<]+)<\/h3>/);
    const consHeadingMatch = block.match(/<h3 class="cons[^>]*>([^<]+)<\/h3>/);
    if (prosHeadingMatch) prosHeading = prosHeadingMatch[1].trim();
    if (consHeadingMatch) consHeading = consHeadingMatch[1].trim();

    const prosMatch = block.match(/<h3 class="pros[^>]*>[^<]+<\/h3>([\s\S]*?)(?:<h3 class="cons|<button class="C2A-btn)/);
    const consMatch = block.match(/<h3 class="cons[^>]*>[^<]+<\/h3>([\s\S]*?)<button class="C2A-btn/);
    if (prosMatch) {
      prosIntro = get(prosMatch[1], /<p class="pros first">\s*([\s\S]*?)<\/p>/);
      pros = parseProConsItems(prosMatch[1]);
    }
    if (consMatch) {
      consIntro = get(consMatch[1], /<p class="cons first">\s*([\s\S]*?)<\/p>/);
      cons = parseProConsItems(consMatch[1]);
    }
  }

  return {
    type: "technology",
    slug,
    metadata: {
      title: get(html, /<title>([^<]+)<\/title>/),
      description: get(html, /<meta name="description"\s+content="([^"]+)"/),
    },
    header: {
      title: get(html, /<h1 class="animate-on-load">([^<]+)<\/h1>/),
      breadcrumb: get(html, /<li>Offerings<\/li>\s*<li>([^<]+)<\/li>/),
      poster: get(html, /poster="images\/([^"]+)"/),
      video: get(html, /<source src="videos\/([^"]+)"/),
    },
    about: {
      heading: get(html, /<section id="about-section"[\s\S]*?<h2>([^<]+)<\/h2>/),
      image: get(html, /services-abt-grad[^>]*>\s*<img src="images\/([^"]+)"/),
      imageAlt: get(html, /services-abt-grad[^>]*>\s*<img[^>]+alt="([^"]+)"/),
      summary: get(
        html,
        /<section id="about-section"[\s\S]*?<h2>[^<]+<\/h2>\s*<p class="mb-2 text-justify">([\s\S]*?)<\/p>/
      ),
      details: get(html, /id="collapse-abt-text">\s*([\s\S]*?)<\/p>/),
      ctaText: get(html, /services-C2A-wrap[^>]*>[\s\S]*?<p class="text-center">([\s\S]*?)<\/p>/),
    },
    proCons: {
      prosHeading,
      consHeading,
      prosIntro,
      consIntro,
      pros,
      cons,
    },
  };
}

function extractDomainOfferings(html) {
  const offerings = [];
  const section = html.match(/id="OfferingsSection"([\s\S]*?)(?:<!-- (?:More Offerings|Contact|FAQ)|<section[^>]*id="contact)/i);
  if (!section) return offerings;

  const blocks = section[1].split(/<!-- \d+(?:st|nd|rd|th) Offering -->/);
  for (const block of blocks) {
    const title = get(block, /<h3 class="offeringsTextHeading[^"]*">([^<]+)<\/h3>/);
    if (!title) continue;
    const image = get(block, /<img src="images\/([^"]+)"/);
    const imageAlt = get(block, /<img[^>]+alt="([^"]+)"/);
    const summary = get(block, /<h3 class="offeringsTextHeading[^"]*">[^<]+<\/h3>\s*<p>\s*([\s\S]*?)<\/p>/);
    const details = get(block, /id="collapseOffering\d+">\s*<p>\s*([\s\S]*?)<\/p>/);
    const reversed = block.includes("flex-row-reverse");
    offerings.push({ title, image, imageAlt, summary, details, reversed });
  }
  return offerings;
}

function extractDomain(slug, html) {
  const titleClass = slug === "domain-Engineering" ? "domains-title" : slug === "Healthcare" ? "" : "lms-title";
  const h1Match = html.match(/<h1 class="main-title[^"]*">([^<]+)<\/h1>/);

  return {
    type: "domain",
    slug,
    metadata: {
      title: get(html, /<title>([^<]+)<\/title>/),
      description: get(html, /<meta name="description"\s+content="([^"]+)"/),
    },
    header: {
      title: h1Match ? h1Match[1].trim() : "",
      tagline: get(html, /<p class="healthCare-tagline[^"]*">([^<]+)<\/p>/),
      titleClass,
      image: get(html, /services-abt-grad[^>]*>\s*<img src="images\/([^"]+)"/),
      imageAlt: get(html, /services-abt-grad[^>]*>\s*<img[^>]+alt="([^"]+)"/),
      imageClass: get(html, /class="img-fluid ([^"]+)"/) || "",
      intro: get(
        html,
        /text-col[\s\S]*?<div>\s*<p class="mb-2 text-justify">\s*([\s\S]*?)<\/p>\s*<\/div>/
      ),
      hasIntroSection: html.includes("services-about-section-container"),
    },
    offeringsHeading: get(html, /offeringsMainHeading[\s\S]*?<h2 class="fs-1[^"]*">([^<]+)<\/h2>/),
    offerings: extractDomainOfferings(html),
  };
}

const technologyPages = {};
for (const slug of techSlugs) {
  const file = path.join(root, `${slug}.html`);
  if (fs.existsSync(file)) {
    technologyPages[slug] = extractTechnology(slug, fs.readFileSync(file, "utf8"));
  }
}

const domainPages = {};
for (const slug of domainSlugs) {
  const file = path.join(root, `${slug}.html`);
  if (fs.existsSync(file)) {
    domainPages[slug] = extractDomain(slug, fs.readFileSync(file, "utf8"));
  }
}

const outDir = path.resolve("d:/Personal/WebSite/HIS_NextJS/his-web-app/lib/offering-pages");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, "technology-pages.json"),
  JSON.stringify(technologyPages, null, 2)
);
fs.writeFileSync(path.join(outDir, "domain-pages.json"), JSON.stringify(domainPages, null, 2));

console.log("Technology pages:", Object.keys(technologyPages).length);
console.log("Domain pages:", Object.keys(domainPages).length);
for (const [slug, page] of Object.entries(domainPages)) {
  console.log(`  ${slug}: ${page.offerings.length} offerings`);
}
