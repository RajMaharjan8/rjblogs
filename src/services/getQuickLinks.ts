export const getQuickLinks=()=>{
    return `
    query getQuickLinks
    {
        allFooterLists {
            id
            label
            link
        }
    }
    `
}