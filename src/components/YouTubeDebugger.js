import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}> Click Me! I'm a bitrate enhancer! </button>
        <button className="resolution" onClick={this.handleResolution}> Click Me! I change your resolution!</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
