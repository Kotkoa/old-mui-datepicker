import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstDate: undefined,
      secondDate: undefined,
      autoOk: true,
    };
  }

  handleChangeFirstDate = (event, date) => {
    this.setState({
      firstDate: date,
    });
    this.setState({
      secondDate: new Date(date.getFullYear(), date.getMonth(), 1),
    });
  };

  handleChangeSecondDate = (event, date) => {
    this.setState({
      secondDate: date,
    });
  };

  render() {
    console.log(this.state.firstDate);

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="wrapper">
          <DatePicker
            floatingLabelText="First Date"
            autoOk={this.state.autoOk}
            value={this.state.firstDate}
            onChange={this.handleChangeFirstDate}
          />

          <DatePicker
            key={this.state.secondDate}
            floatingLabelText="Second Date"
            autoOk={this.state.autoOk}
            onChange={this.handleChangeSecondDate}
            defaultDate={this.state.secondDate}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
