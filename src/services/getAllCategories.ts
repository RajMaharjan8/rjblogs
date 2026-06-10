export const getCategories=()=>{
    return `
        query getAllCategories
        {
            allCategories {
                slug
                id
                title
            }
        }
    `;
}