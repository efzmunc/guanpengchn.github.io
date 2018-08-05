// import BlogArticles from './components/BlogArticles'
// import WorklogArticles from './components/WorklogArticles'
// import StudyArticles from './components/StudyArticles'
import { convertBlogArticle, convertWorklogArticle, convertStudyArticle } from './helper'

const t = ['dce402a0470d048d0633', '44009c681a559cc1cb21']
export const accessToken = `${t[0]}${t[1]}`

export const owner = 'guanpengchn'

export const keepAliveComps = [
  // BlogArticles.name,
  // WorklogArticles.name,
  // StudyArticles.name,
]

export const navsRepo = {
  blog: { key: 'blog', name: 'article', route: '/article', icon: 'fa-chrome', repo: 'monine.github.io', resolveArticle: convertBlogArticle },
  worklog: { key: 'worklog', name: 'worklog', route: '/worklog', icon: 'fa-internet-explorer', repo: 'worklog', resolveArticle: convertWorklogArticle },
  study: { key: 'study', name: 'study', route: '/study', icon: 'fa-firefox', repo: 'study', resolveArticle: convertStudyArticle },
  home: { name: 'about me', route: '/', icon: 'fa-github', exact: true },
}
