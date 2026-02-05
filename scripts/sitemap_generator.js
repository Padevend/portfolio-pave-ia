import fs from "fs"

const blog = JSON.parse(
  fs.readFileSync("./src/data/articles.json", "utf-8")
)
const BASE_URL = "https://www.mbah-ndam.dev"

const staticRoutes = [
  "",
  "skills",
  "experiences",
  "projects",
  "contact",
  "blog"
]

const buildUrl = (path, lastmod = null, priority = 0.8) => `
  <url>
    <loc>${BASE_URL}/${path}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    <priority>${priority}</priority>
  </url>
`

let urls = []

// pages statiques
urls.push(buildUrl("", null, 1.0))

staticRoutes.slice(1).forEach(r => {
  urls.push(buildUrl(r))
})

// articles dynamiques
blog.forEach(article => {
  urls.push(
    buildUrl(
      `blog/${article.slug}`,
      article.date,
      0.7
    )
  )
})

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`

fs.writeFileSync("./public/sitemap.xml", sitemap)

console.log("✅ sitemap.xml généré")
