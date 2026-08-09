import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "范范的数字花园",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "fan-xinghui.github.io/MyGarden",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
  theme: {
  typography: {
    header: "Noto Sans SC",
    body: "Noto Sans SC",
    code: "JetBrains Mono",
  },

  colors: {
    lightMode: {
      light: "#FFF9F5",
      lightgray: "#F3EEE8",
      gray: "#78909C",
      darkgray: "#455A64",
      dark: "#263238",
      secondary: "#55B9E8",
      tertiary: "#FFD97D",
      highlight: "#FFEAF0",
      textHighlight: "#FFF2A8",
    },

    darkMode: {
      light: "#171B26",
      lightgray:"#242A38",
      gray:"#AAB4C0",
      darkgray:"#CFD8DC",
      dark:"#ECEFF4",
      secondary:"#8ED8F8",
      tertiary:"#FFE59A",
      highlight:"#302936",
      textHighlight:"#FFF2A8",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
