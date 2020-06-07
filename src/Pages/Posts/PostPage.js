import React from 'react';
import renderHTML from 'react-render-html';
import emptyImage from '../../emptyImage.png';

var articlesData = [
    {
        postID: "1",
        postTitle: "Blog post #1",
        postImage: emptyImage,
        postPreviewText: `My <b>first blog post</b> is all about my <font color="red"> blog post</font> and how to write a new post in my blog, you can find it <a href="#">here</a>.text text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text text`,
        postPublishedTime: "2 days ago",
        postAuther: "Lidor"
    },
    {
        postID: "2",
        postTitle: "Blog post #2",
        postImage: emptyImage,
        postPreviewText: "My <b>second blog post</b> is all about my blog post. <br>\n" +
            "\t\t\t\ttext text text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text .",
        postPublishedTime: "a week ago",
        postAuther: "Lidor"
    },
    {
        postID: "3",
        postTitle: "Blog post #3",
        postImage: emptyImage,
        postPreviewText: "My <b>third blog post</b> is all about my blog post. <br>\n" +
            "\t\t\t\ttext text text text text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text texttext text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text .",
        postPublishedTime: "2 months ago",
        postAuther: "Avi"
    }
];


function PostPage(props){
        let articlesObjects = articlesData.map((item,key) => (
            <article className="mainColumn">
                <h1>{item.postTitle}</h1>

                    {renderHTML(item.postPreviewText)}
                    <p className="postFooter">Published {item.postPublishedTime} by {item.postAuther}</p>
            </article>

        ));

        return articlesObjects[props.match.params.id-1];
}

export default PostPage;