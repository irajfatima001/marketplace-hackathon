import { type SchemaTypeDefinition } from 'sanity'

import hero from './landingPage-Sections/hero'
import landingPage from './landingPage-Sections/landingPage'
import ceramics from './landingPage-Sections/ceramics'
import popular from './landingPage-Sections/popular'
import studio from './landingPage-Sections/studio'
import productPage from './productPage-Section/productPage'
import main from './productPage-Section/main'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage, hero, ceramics, popular, studio, productPage, main],
}
