import React from 'react';
import Post from './Post';
import { css } from 'emotion';

const postListClassName = css(`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    grid-auto-rows: minmax(min-content, max-content);
    grid-column-gap: 5px;
    grid-row-gap: 15px;
`);
class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subReddit: props.sub ? props.sub : 'youtubehaiku',
            dataLoaded: false,
            posts: [],
        };
    }

    async componentDidMount() {
        await this.fetchPosts();
    }

    fetchPosts = async () => {
        const response = await fetch(`https://www.reddit.com/r/${this.state.subReddit}.json?limit=100`);
        const json = await response.json();
        if(json && json.data) {
            this.setState({
                posts: json.data.children,
                dataLoaded: true
            });
        }
    }

    async componentDidUpdate(prevProps) {
        if (this.props.subReddit !== this.state.subReddit) {
            this.setState({subReddit: this.props.subReddit}, async () => {
                await this.fetchPosts();
            });
        }
    }

    render() {
        return (
            <div className={postListClassName}>
            {this.state.posts.map((post, i) => {
                return <Post key={`Post-${i}`} post={post}/>
            })}
            </div>
        )
    }
}

export default PostList;