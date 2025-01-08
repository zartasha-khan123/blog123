
  
const cardSection =
 {
    title: 'card section',
    name: 'cardsection',
    type: 'object',
    fields: [
      {
        title: 'card sections', 
        name: 'cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { title: 'Image', name: 'image', type: 'image' },
              { title: 'date', name: 'date', type: 'date' },
              { title: 'Heading', name: 'heading', type: 'string' },
              { title: 'Description', name: 'description', type: 'string' },
              { title: 'Link', name: 'link', type: 'string' }
            ]
          }
        ]
      }
    ]
  }

export default cardSection;