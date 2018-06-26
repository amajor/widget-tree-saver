# Trees Saved Wiget

This is a simple dashboard widget that can be used to display the number of
trees being saved based on the number of sheets passed into the component.

## Getting Started

From inside of your React project directory, run

```script
npm install @amajor/widget-tree-saver
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

<img src="./docs/images/horizontal.png" title="Horizontal Layout" />

### Vertical Layout

<img src="./docs/images/vertical.png" title="Vertical Layout" width="200px" />