import React from "react";

const Flow = () => {
  return (
    <div className="flow-section">
      <div className="container mx-auto section">
        <h2 className="main-title">Steps of application</h2>
        <div className="flow-wrapper">
          <div className="flow-card">
            <h1>01</h1>
            <div className="flow-content">
              <div className="flow-content-head">
                <img src="/assets/images/steps/step1.svg" alt="" />
                <h2>Assessment of Application</h2>
              </div>
              <div className="horizontal-line"></div>
              <p>University and course selection</p>
              <p>Deposit payment for processing</p>
              <p>All required documents submission</p>
            </div>
          </div>

          <div className="flow-card">
            <h1>02</h1>
            <div className="flow-content">
              <div className="flow-content-head">
                <img src="/assets/images/steps/step2.svg" alt="" />
                <h2>Application Submission</h2>
              </div>
              <div className="horizontal-line"></div>
              <p>Apply to multiple universities.</p>
              <p>Fulfill any conditions if required</p>
            </div>
          </div>
          <div className="flow-card">
            <h1>03</h1>
            <div className="flow-content">
              <div className="flow-content-head">
                <img src="/assets/images/steps/step3.svg" alt="" />
                <h2>Enrollment Application</h2>
              </div>
              <div className="horizontal-line"></div>
              <p>Unconditional offer</p>
              <p>University deposit payment</p>
              <p>Interview</p>
            </div>
          </div>
          <div className="flow-card">
            <h1>04</h1>
            <div className="flow-content">
              <div className="flow-content-head">
                <img src="/assets/images/steps/step4.svg" alt="" />
                <h2>Pre-CAS Application</h2>
              </div>
              <div className="horizontal-line"></div>
              <p>Prepare Bank statement / Education loan</p>
              <p>Get Tuberculosis report</p>
            </div>
          </div>
          <div className="flow-card">
            <h1>05</h1>
            <div className="flow-content">
              <div className="flow-content-head">
                <img src="/assets/images/steps/step5.svg" alt="" />
                <h2>CAS Issued</h2>
              </div>
              <div className="horizontal-line"></div>
              <p>Confirmation of Acceptance for Studies (CAS) gets issued </p>
            </div>
          </div>
          <div className="flow-card">
            <h1>06</h1>
            <div className="flow-content">
              <div className="flow-content-head">
                <img src="/assets/images/steps/step6.svg" alt="" />
                <h2>Visa Application</h2>
              </div>
              <div className="horizontal-line"></div>
              <p>IHS Payment</p>
              <p>UKVI Payment</p>
              <p>VFS Booking</p>
              <p>Visa Status</p>
            </div>
          </div>
          <div className="flow-card">
            <h1>07</h1>
            <div className="flow-content">
              <div className="flow-content-head">
                <img src="/assets/images/steps/step7.svg" alt="" />
                <h2>Post Visa</h2>
              </div>
              <div className="horizontal-line"></div>
              <p>University enrollment</p>
              <p>Flight tickets</p>
              <p>Room arrangements</p>
              <p>Airport pick-up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flow;
