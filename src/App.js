import Logo from './logo.jsx';
//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    /* this.handleDirection = this.handleDirection.bind(this);*/
    this.state = {
      estado: 'App-logo',
      direction: '',
      fill: '#61DAFB',
      eclipse: '45',
      color: '',
      time: 0,
      defaultButton: 'Start',
      disabled: 'yes',
      theme: 'App-header-light',
    };
  }
  handleDirection = () => {
    this.setState({ direction: '-reverse' });
    this.setState({ disabled: '' });
  };

  handleRDirection = () => {
    this.setState({ direction: '' });
    this.setState({ disabled: '' });
  };

  handleFill = (e) => {
    this.setState({ fill: e.target.value });
  };

  handleEclipse = (e) => {
    this.setState({ eclipse: e.target.value });
    this.setState({ color: e.target.value >= 90 && 'black' });
  };

  handleTime = (e) => {
    this.setState({ time: e.target.value });
  };

  handleStartBreak = () => {
    this.setState({ time: 5000 });
    this.setState({ defaultButton: 'Break' });
    this.setState({ disabled: '' });
  };

  handleThemeLight = () => {
    this.setState({ theme: 'App-header-light' });
  };

  handleThemeDark = () => {
    this.setState({ theme: 'App-header-dark' });
  };

  render() {
    const { estado, direction, fill, eclipse, color, time, defaultButton, disabled, theme } = this.state;
    return (
      <div className="App">
        <header className={theme}>
          <Logo
            estado={`${estado} |${direction}`}
            direction={direction}
            fill={fill}
            eclipse={eclipse}
            color={color}
            time={time}
          />

          <button
            onClick={this.handleStartBreak}
            onDoubleClick={() => {
              this.setState({ defaultButton: 'Start' });
              this.setState({ time: 0 });
              this.setState({ disabled: 'yes' });
            }}
          >
            <code>Motion {defaultButton}</code>
          </button>

          <label htmlFor="">
            <code>Direction</code>
          </label>
          <span>
            <button onClick={this.handleDirection} disabled={disabled}>
              <code>Left</code>
            </button>

            <button onClick={this.handleRDirection} disabled={disabled}>
              <code>Right</code>
            </button>
          </span>

          <label htmlFor="">
            <code>theme</code>
          </label>
          <span>
            <button onClick={this.handleThemeLight}>
              <code>Light</code>
            </button>

            <button onClick={this.handleThemeDark}>
              <code>Dark</code>
            </button>
          </span>

          <label htmlFor="color-input">
            <code>Color</code>
          </label>
          <input onChange={this.handleFill} type="color" id="color-input" />

          <label htmlFor="eclipse">
            <code>Eclipse</code>
          </label>
          <input onChange={this.handleEclipse} type="number" id="eclipse" min={45} max="240" placeholder="45-240" />

          <label htmlFor="time">
            <code>Time[ms]</code>
          </label>
          <input
            onInput={this.handleTime}
            type="number"
            id="eclipse"
            min={200}
            max="2000"
            placeholder="200-2000"
            disabled={disabled}
          />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
