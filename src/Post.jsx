import React from 'react';
import {css, cx} from 'emotion';

const postClassName = css(`
    height: 300px; 
    display: grid;
    grid-template-rows: 75% [bottom] auto;
    text-decoration: none;
    color: #FFFFFF;
`);


//    background: rgba(80, 80, 80, 0.5);
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
            console.log(post.data.type);
            return null;
        }
        const postBackgroundClassName = cx(postClassName, css(`
            background: url(${post.data.thumbnail}) center;
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