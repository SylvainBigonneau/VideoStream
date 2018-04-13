import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VideosList from '../components/VideosList';

class IndexPage extends Component {

    static propTypes = {
        videos: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <h3>Videos list</h3>
                <VideosList videos={this.props.videos} />
            </div>
        );
    }
};

const mapStateToProps = videos => ({videos});

export default connect(mapStateToProps)(IndexPage);