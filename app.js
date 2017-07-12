// TODO

let HotDog = () => (
  <li>Hot Dog</li>
);

let NotHotDog = () => (
  <li>Not Hot Dog</li>
);



class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  
  onListItemHover(){
    this.setState({
      done: !this.state.done});
  }
  
  render() {
    
    let style = {fontWeight: this.state.done ? 'bold' : 'normal'};
    return (<li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.val}</li>);
  }
}

let GroceryList = (props) => (
  <ul>
    <h2>Grocery List</h2>
    {props.list.map(val => 
      <GroceryListItem val={val}/>)}
  </ul>
);

let App = () => (
  <div>
    <GroceryList list={['Hot Dog', 'Not Hot Dog']}/>
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));