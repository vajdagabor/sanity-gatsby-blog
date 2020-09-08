export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f579e8813bdb13c9eab1d67',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gyntntey',
                  apiId: '13182c8a-fae7-42c6-b83e-b40efd0b1fbc'
                },
                {
                  buildHookId: '5f579e8813bdb13a91ab16a2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-n5ajujv7',
                  apiId: '7f354a1b-39ec-4d44-b1c8-dd708490c2b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vajdagabor/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-n5ajujv7.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
