import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const VideosList = props =>
    <ul>
        {props.videos.map((vid) =>
            <li key={vid.id}>
                <Link to={`/${vid.id}`}>{vid.title}</Link>
            </li>
        )}
    </ul>;

VideosList.propTypes = {
    videos: PropTypes.array.isRequired
}

export default VideosList;