import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hls from 'hls.js';

export default class Player extends Component {

    static propTypes = {
        path: PropTypes.string.isRequired
    };

    state = {
        playLabel: 'Pause',
        volumeLabel: 'Mute',
        error: null
    };

    video = React.createRef();

    render() {
        return (
            <div>
                <h4>{this.state.error ? `Error: ${this.state.error}` : ''}</h4>
                <video style={{ maxWidth: '100%' }} ref={this.video}></video>
                <br />
                <button onClick={this.togglePlay}>{this.state.playLabel}</button>
                <button onClick={this.toggleVolume}>{this.state.volumeLabel}</button>
            </div>
        );
    }

    componentDidMount() {
        if (Hls.isSupported()) {
            let hls = new Hls();
            hls.loadSource(this.props.path);
            hls.attachMedia(this.video.current);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                this.video.current.play();
            });
            hls.on(Hls.Events.ERROR, (event, data) => {
                if (data.fatal) {
                    switch (data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            this.setState({ error: 'fatal network error encountered' });
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            this.setState({ error: 'fatal media error encountered' });
                            break;
                        default:
                            this.setState({ error: 'Unknown error occurred' });
                            break;
                    }
                }
            });
        }
        else if (this.video.current.canPlayType('application/vnd.apple.mpegurl')) {
            this.video.current.src = this.props.path;
            this.video.current.addEventListener('canplay', () => {
                this.video.current.play();
            });
        } else {
            this.setState({ error: 'Hls not supported' });
        }
    }

    togglePlay = () => {
        this.video.current.paused ? this.video.current.play() : this.video.current.pause();
        this.setState({ playLabel: this.video.current.paused ? 'Play' : 'Pause' });
    };

    toggleVolume = () => {
        this.video.current.volume = this.video.current.volume ? 0 : 1;
        this.setState({ volumeLabel: this.video.current.volume ? 'Mute' : 'Unmute' });
    };
};
