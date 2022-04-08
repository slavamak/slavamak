export const siteQuery = `
  "site": {
    "meta": *[_type == "siteSettings"][0],
    "header": *[_type == "headerSettings"][0]{
      ...,
      menu->{
        items[]
      }
    },
    "footer": *[_type == "footerSettings"][0]
  }
`

export const modulesQuery = `
  _type == 'hero' => {
    _type,
    _key,
    content[],
    social_links[],
    photo
  },
  _type == 'collection' => {
    _type,
    _key,
    title,
    items[]->{
      _id,
      title,
      description,
      url,
      technologies[]
    }
  }
`

export const homeQuery = `
  *[_type == "homePage"] | order(_updatedAt desc)[0]{
    modules[]{
      ${modulesQuery}
    }
  }
`
