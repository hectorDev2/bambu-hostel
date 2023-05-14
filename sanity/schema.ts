import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import room from './schemas/room'
import author from './schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [room, author, category, blockContent]
}
