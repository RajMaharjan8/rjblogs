export const getAllBlogs = (total: number, search: string | null, cat_id: string | null) => {
  const conditions: string[] = [];

  if (search) {
    conditions.push(`OR: [
      { title:       { matches: { pattern: "${search}" } } },
      { description: { matches: { pattern: "${search}" } } },
      { excerpt:     { matches: { pattern: "${search}" } } }
    ]`);
  }
  if (cat_id) {
    conditions.push(`category: { allIn: "${cat_id}" }`);
  }
  
  const filter = conditions.length
    ? `filter: { ${conditions.join(", ")} }`
    : "";

  return `
    query getAllBlogs
    {
        allBlogs(
        orderBy: _createdAt_DESC, 
        first: ${total}
        ${filter}
        ) {
            id
            slug
            title
            excerpt {
            value
            }
            _status
            _createdAt
             author {
                name
                id
                profile {
                  title
                  url
                }
                slug
            }
            thumbnail {
            url
            title
            }
            isMain
            category {
            id
            title
            slug
            }
        }
    }
    
    `;
};
