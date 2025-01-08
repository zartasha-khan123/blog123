import {  commentSchema } from './comments'
import { type SchemaTypeDefinition } from 'sanity'
import cardsection from './landingpages/cardsection'
import landing from './landingpages/landing'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [commentSchema,landing,

    cardsection,


  ],
}
