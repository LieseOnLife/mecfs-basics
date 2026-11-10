import { componentRegistry } from "./quartz/components/registry"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

// Sidebar: the lessons in reading order, then FAQ and Glossary. Source pages and
// PDFs are reached through the citations, so their folders are hidden.
// These functions run in the browser as source text, so the list must be inline,
// and they can't declare named inner functions (the bundler wraps those in a
// helper the browser doesn't have). Keep the list in step with the home page's
// "Suggested reading path"; pages missing from it sort after it, alphabetically.
componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  filterFn: (node: { slugSegment: string }) =>
    !["tags", "sources", "files"].includes(node.slugSegment),
  sortFn: (
    a: { slugSegment: string; displayName: string },
    b: { slugSegment: string; displayName: string },
  ) => {
    const order = [
      "what-me-cfs-is",
      "post-exertional-malaise",
      "daily-life-and-caring-at-home",
      "diagnosis-and-getting-care",
      "reading-the-research",
      "faq",
      "glossary",
    ]
    const [rankA, rankB] = [a, b].map((node) =>
      order.includes(node.slugSegment) ? order.indexOf(node.slugSegment) : order.length,
    )
    return rankA - rankB || (a.displayName || "").localeCompare(b.displayName || "")
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
