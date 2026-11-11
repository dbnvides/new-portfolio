import type { MetadataRoute } from 'next'
import { projects } from '@/content/projects'
import { caseStudies } from '@/content/case-studies'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    ...projects.map((p) => ({ url: `${siteUrl}/projetos/${p.slug}`, priority: 0.7 })),
    ...projects
      .filter((p) => p.deploy?.startsWith('/'))
      .map((p) => ({ url: `${siteUrl}${p.deploy}`, priority: 0.6 })),
    ...caseStudies.map((cs) => ({ url: `${siteUrl}/sap-b1/${cs.slug}`, priority: 0.8 })),
  ]
}
