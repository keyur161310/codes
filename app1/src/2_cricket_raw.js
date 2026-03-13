import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
class cricket extends React.Component{
    render(){
        return(
       <div className="container">
  {/* Batsmen section */}
  <div className="row g-3 mb-4">
    {/* Batsman 1 */}
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
  </div>{/* row batsmen */}
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
</div>
        );
    }
} 

root.render(<cricket />);