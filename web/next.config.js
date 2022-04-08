const { createClient } = require("next-sanity")

const sanityConfig = {
  dataset: process.env.SANITY_PROJECT_DATASET || "production",
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-04-08",
}

const sanityClient = createClient(sanityConfig)

async function fetchSanityRedirects() {
  const data = await sanityClient.fetch(
    `*[_type == "redirect"]{ from, to, isPermanent }`
  )

  const redirects = data.map((redirect) => ({
    source: `${redirect.from}`,
    destination: `${redirect.to}`,
    permanent: redirect.isPermanent,
  }))

  return redirects
}

module.exports = {
  env: {
    SANITY_PROJECT_DATASET: process.env.SANITY_PROJECT_DATASET,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    const sanityRedirects = await fetchSanityRedirects()
    return sanityRedirects
  },
}
