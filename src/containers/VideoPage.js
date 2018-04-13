import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Player from '../components/Player';
import { Link } from "react-router-dom";


class VideoPage extends Component {

    static propTypes = {
        videos: PropTypes.array.isRequired
    }

    render() {
        const video = this.props.videos.find(vid => vid.id === this.props.match.params.id);
        if (video) {
            return (
                <div>
                    <Link to="/">&lt;&lt; Home</Link>
                    <h3>{video.title}</h3>
                    <Player path={video.path} />
                </div>
            );
        }
        return (
            <h3>Video does not exist</h3>
        );
    }
};

const mapStateToProps = videos => ({videos});

export default connect(mapStateToProps)(VideoPage);