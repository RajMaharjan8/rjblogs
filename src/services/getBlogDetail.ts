export const blogDetail = (slug: string) => {
  return `
    query getBlogDetail

    {
        blog(filter: {slug: {eq: "${slug}"}}) {
            id
            title
            thumbnail {
            title
            url
            }
            author {
                name
                id
                profile {
                    title
                    url
                }
                slug
            }
            category {
            id
            slug
            title
            }
            description {
            value
            }
            slug
            faqs {
            id
            question
            answer
            }
            gallery {
            url
            title
            id
            }
            quote {
                id
                quote
                author
            }
            _createdAt
        }
    }
    `;
};
