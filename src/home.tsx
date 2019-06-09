import * as React from "react";
import { Button, Table } from 'reactstrap';

// load testUtils to provide fron-end/back-end communication
// with socket.io features...
const testUtils = require('./utils/testUtils.js');

interface MyComponentProps { 
    title: string; 
    framework: string; 
}
  
interface MyComponentState {
    value : string;
}

class Home extends React.Component<MyComponentProps, MyComponentState> {

    state: MyComponentState;

    constructor(props: MyComponentProps){
        super(props);
        this.state = {
            value: 'cmon!'
        };
    }

//React life cycle methods below:

    // example function, loadIndex(), will try to send 
    // packets of data throught the wire.
    loadIndex(){
        console.log("loading...");
        testUtils.send();
    }

    componentWillMount(){
        this.onChange();
        var indexInfo = this.state.value;
        console.log("index info: " + this.state.value);
    }

    componentDidMount() {        
        this.onChange();
    }

    componentWillUnmount(){
        this.onChange();
    }

    onChange(){
         this.setState(this.state);
    }

/**************************************************/

    render() {
        const list = this.state.value;
        return (
          <div id="serverList">
              <div id="consoleMsg" className="fullSize" style={{width:'55%', height:'40%'}}/>
              <div id="toolbar">
                  <Button color="primary" onClick={this.loadIndex}>Load</Button>
                  <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>{list}</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                  </Table>
              </div>
          </div>
        );
    }
}

export default Home