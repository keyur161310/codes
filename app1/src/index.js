import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

const ZERO_VALUE = 0;
const ONE_VALUEe = 1;
const TWO_VALUE = 2;
const THREE_VALUE = 3;
const FOUR_VALUE = 4;
const FIVE_VALUE = 5;
const SIX_VALUE = 6;

class score extends React.Component{
    constructor(props)
    {
        super(props);
        this.name = props.name;

        this.state =
        {
     zero:0,
      one:0,
      two:0,
      three:0,
      four:0,
      five:0,
      six:0,
      total:0,
      nrr:0,
      balls:0
        }
    }
      updateTotal = () => {
        console.log('updatetotal method is called.');
        this.setState({
            total: ((this.state.zero * ZERO_VALUE) +
                (this.state.one * ONE_VALUEe) +
                (this.state.two * TWO_VALUE) +
                (this.state.three * THREE_VALUE) +
                (this.state.four * FOUR_VALUE)+
                (this.state.five * FIVE_VALUE)+
                (this.state.six * SIX_VALUE)).toFixed(2)                
        });
    }
         updatezero = () => {        
        this.setState({
            zero: this.state.zero + 1,
        }, () => this.updateTotal());
    }

          updateone = () => {        
        this.setState({
            one: this.state.one + 1,
        }, () => this.updateTotal());
    }
          updatetwo = () => {        
        this.setState({
            two: this.state.two + 1,
        }, () => this.updateTotal());
    }
          updatethree = () => {        
        this.setState({
            three: this.state.three + 1,
        }, () => this.updateTotal());
    }
          updatefour = () => {        
        this.setState({
            four: this.state.four + 1,
        }, () => this.updateTotal());
    }
          updatefive = () => {        
        this.setState({
            five: this.state.five + 1,
        }, () => this.updateTotal());
    }
          updatesix = () => {        
        this.setState({
            six: this.state.six + 1,
        }, () => this.updateTotal());
    }

    render(){
        return(
       <>
  {/* Batsmen section */}
  <div className="row g-3 mb-4">
    {/* Batsman 1 */}
        <div className="col-12 col-lg-6">
            <div className="border border-success rounded-3 p-3 bg-white shadow-sm">
            <div className="d-flex justify-content-between border-bottom border-success-subtle pb-2 mb-3">
            <div className="fw-bold fs-5 text-success">{this.name}</div>
          <div>
            <span className="badge text-bg-success rounded-pill px-3 py-2">4s = 0</span>
            <span className="badge text-bg-warning rounded-pill px-3 py-2 ms-2">6s = 0</span>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="border border-success-subtle rounded p-2 bg-success-subtle text-success-emphasis">
            <strong>Total:</strong> {this.state.total}<br />
            <strong>Ball:</strong> 0<br />
            <strong>NRR:</strong> 0.00
          </div>
          <div className="text-center">
            <div className="mb-2 fw-bold text-muted">Runs on balls</div>
            <div>
              <button onClick={this.updatezero} type="button" className="btn btn-outline-secondary run-btn">{this.state.zero}</button>
              <button onClick={this.updateone}  type="button" className="btn btn-outline-secondary run-btn">{this.state.one}</button>
              <button onClick={this.updatetwo}  type="button" className="btn btn-outline-secondary run-btn">{this.state.two}</button>                
              <button onClick={this.updatethree}  type="button" className="btn btn-outline-secondary run-btn">{this.state.three}</button>
              <button onClick={this.updatefour}  type="button" className="btn btn-outline-secondary run-btn">{this.state.four}</button>
              <button onClick={this.updatefive}  type="button" className="btn btn-outline-secondary run-btn">{this.state.five}</button>
              <button onClick={this.updatesix}  type="button" className="btn btn-outline-secondary run-btn">{this.state.six}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Batsman 2 */}
     <div className="col-12 col-lg-6">
            <div className="border border-success rounded-3 p-3 bg-white shadow-sm">
            <div className="d-flex justify-content-between border-bottom border-success-subtle pb-2 mb-3">
            <div className="fw-bold fs-5 text-success">Player name</div>
          <div>
            <span className="badge text-bg-success rounded-pill px-3 py-2">4s = 0</span>
            <span className="badge text-bg-warning rounded-pill px-3 py-2 ms-2">6s = 0</span>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="border border-success-subtle rounded p-2 bg-success-subtle text-success-emphasis">
            <strong>Total:</strong> 0<br />
            <strong>Ball:</strong> 0<br />
            <strong>NRR:</strong> 0.00
          </div>
          <div className="text-center">
            <div className="mb-2 fw-bold text-muted">Runs on balls</div>
            <div>
              <button type="button" className="btn btn-outline-secondary run-btn">0</button>
              <button type="button" className="btn btn-outline-secondary run-btn">1</button>
              <button type="button" className="btn btn-outline-secondary run-btn">2</button>                
              <button type="button" className="btn btn-outline-secondary run-btn">3</button>
              <button type="button" className="btn btn-outline-secondary run-btn">4</button>
              <button type="button" className="btn btn-outline-secondary run-btn">5</button>
              <button type="button" className="btn btn-outline-secondary run-btn">6</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Bowler section */}
  <div className="row">
    <div className="col-12">
      <div className="border border-danger rounded-3 p-3 bg-white shadow-sm">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div className="fw-bold fs-5 text-danger">Bowler name</div>
          <div className="d-flex gap-4 flex-wrap">
            <span className="badge text-bg-info px-3 py-2">Total over: 0.0</span>
            <span className="badge text-bg-secondary px-3 py-2">NRR: 0.00</span>
            <span className="badge text-bg-danger px-3 py-2">Wickets=Runs(Balls): 0-00 (00)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
        );
    }
} 

root.render(<score />);