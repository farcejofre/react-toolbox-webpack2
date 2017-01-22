import React, { Component } from 'react';
import { ProgressBar } from 'react-toolbox/lib/progress_bar';
import { Checkbox } from 'react-toolbox/lib/checkbox';

export default class TestComponent extends Component {
  state = { check1: true, check2: false };

  handleChange = (field, value) => { return (value) => { var st = {}; st[field] = value; this.setState(st) }; };

  render() {
    return (
      <div>
        <h1>React-Toolbox 2 Test</h1>
        <ProgressBar type="circular" mode="indeterminate" multicolor />
        <Checkbox checked={this.state.check1} label="Checked" onChange={this.handleChange("check1")} />
        <Checkbox checked={this.state.check2} label="Unchecked" onChange={this.handleChange("check2")} />
      </div>
    );
  }
}
