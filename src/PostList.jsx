import React from 'react';

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
        const response = await fetch(`https://www.reddit.com/r/${this.state.subReddit}.json?limit=100`);
        const json = await response.json();
        if(json) {
            this.setState({
                posts: json.data.children
            });
        }
    }

    render() {
        return (
            <div>
            {this.state.posts.map((post, i) => {
                console.log(post);
                return (
                    <a href={`https://reddit.com/${post.data.permalink}`} target='_blank'>
                        <img key={`Post-Image-${i}`} src={post.data.thumbnail}/>
                    </a>
                )
            })}
            </div>
        )
    }
}

export default PostList;