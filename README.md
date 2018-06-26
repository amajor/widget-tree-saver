# Trees Saved Wiget

This is a simple ReactJS dashboard-type widget used to display the number of
trees saved based on the number of sheets passed into the component.

## Getting Started

From inside of your React project directory, run

```script
npm install @amajor/widget-tree-saver
```

Once installed, include it in your application by importing the file and
inserting the component with your desired props.

```js
import React, { Component } from 'react';
import TreeSaver from '@amajor/widget-tree-saver';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <h1 className="App-title">Your App</h1>
          <h2 className="App-title">With the tree saverwidget below.</h2>
        </header>

        <TreeSaver numberOfPages={9500} interval="month" />

      </div>
    );
  }
}

export default App;
```

## Configure

This component only accepts two properties at this time:

* `numberOfPages` _(number)_ - for example "2300"
* `interval` _(string)_ - for example "week" or "year"

It will automatically calculate the number of trees saved based on the number of
sheets entered, with the assumption that a single tree provides 8333.3 sheets.

When entered in, the component will flow horizontally, or if given less space,
will collapse into a column. We use the grid from Bootstrap to manage this.

### Horizontal Layout

<img src="https://github.com/amajor/widget-tree-saver/blob/master/docs/images/horizontal.png" title="Horizontal Layout" />

### Vertical Layout

<img src="https://github.com/amajor/widget-tree-saver/blob/master/docs/images/vertical.png" title="Vertical Layout" width="200px" />
