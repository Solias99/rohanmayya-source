import React from 'react';

const AllPosts = ({data}) =>{ 
    console.log(data)
return(
<div>
    Hello
</div>
 )
}
export const query = graphql`
    query AllPostsPageQuery{
        allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date]}
        ){
            edges{
                node{
                    frontmatter{
                        title
                        path
                        date
                        excerpt
                    }
                }
            }
        }
    }
`

export default AllPosts;