import { Component } from "react";


export class CarEditRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      make: props.car.make,
      model: props.car.model,
      year: props.car.year,
      color: props.car.color,
      price: props.car.price
    }

    // this.change = this.change.bind(this);
  }

  // change(e) {
  change = e => {
    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? parseInt(e.target.value, 10)
        : e.target.value,
    });
  }

  saveCar = () => {
    this.props.onSaveCar({ ...this.state, id: this.props.car.id });
  }; 

  render() {

    return (
      <tr>
        <td>{this.props.car.id}</td>
        <td><input type="text" name="make" value={this.state.make} onChange={this.change} /></td>
        <td><input type="text" name="model" value={this.state.model} onChange={this.change} /></td>
        <td><input type="number" name="year" value={this.state.year} onChange={this.change} /></td>
        <td><input type="text" name="color" value={this.state.color} onChange={this.change} /></td>
        <td><input type="number" name="price" value={this.state.price} onChange={this.change} /></td>
        <td>
          <button type="button"
            onClick={this.saveCar}>Save</button>
          <button type="button"
            onClick={this.props.onCancelCar}>Cancel</button>
        </td>
      </tr>
    );

  }

}