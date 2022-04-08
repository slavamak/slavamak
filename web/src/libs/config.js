const sanityConfig = {
  dataset: process.env.SANITY_PROJECT_DATASET || "production",
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-04-08",
}

export default sanityConfig
