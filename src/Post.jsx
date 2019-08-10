import React from 'react';
import {css, cx} from 'emotion';

const postClassName = css(`
    height: 300px; 
    display: grid;
    grid-template-rows: 75% [bottom] auto;
    text-decoration: none;
    color: #FFFFFF;
`);

const postTitleWrapperClassName = css(`
    grid-row: bottom;
    height: 100%;
    opacity: 1;
    background-image: linear-gradient( 
        rgba(0,0,0, 0.08), 
        rgba(0,0,0, 1));
    position: relative;
`);

const postTitleClassName = css(`
    text-align: left;
    position: absolute;
    left: 0;
    bottom: 0;
`)


class Post extends React.Component {
    render() {
        const {post} = this.props;
        if(post.data.is_self || post.data.thumbnail === 'nsfw') {
            // ignore self posts && nsfw posts for now
            return null;
        }
        let thumb = post.data.thumbnail;
        // Figure out why higher res previews aren't available...
        /*
        console.log(post.data.preview)
        if (post.data.preview && post.data.preview.images) {
            const image = post.data.preview.images[0].resolutions.find(image => {
                console.log(image)
                return image.width > 500;
            });
            thumb = image ? image.url : thumb;
        }
        */
        const postBackgroundClassName = cx(postClassName, css(`
            background: url(${thumb}) center;
            background-repeat: no-repeat;
            background-size: cover;
        `));

        return (
            <a className={postBackgroundClassName} href={`https://reddit.com/${post.data.permalink}`} target='_blank' rel="noopener noreferrer">
                {/* <img src={post.data.thumbnail}/> */}
                <div className={postTitleWrapperClassName}>
                    <span className={postTitleClassName}>{post.data.title}</span>
                </div>
            </a>
        )
    }
}

export default Post;