import projects from '~/data/projects'

export default (slug) => {
  const filtered = projects.filter((item) => {
    return item.slug == slug
  })

  return (filtered.length == 1) ? filtered[0] : null
}