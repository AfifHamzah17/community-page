import React from 'react';
import './community.css'; // Assuming your CSS is in community.css

const Community = () => {
  return (
    <div className="community-container">
      <h2>Community FAQ</h2>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-header" id="headingOne">
            <button className="accordion-button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is the community about?
            </button>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="accordion-body">
              Our community is all about sharing knowledge, fostering collaboration, and helping one another grow in our respective fields. 
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <div className="accordion-header" id="headingTwo">
            <button className="accordion-button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              How can I join the community?
            </button>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="accordion-body">
              To join, simply register through our contact support and you will gain access to all of our resources, forums, and events.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header" id="headingThree">
            <button className="accordion-button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Can I contribute to the community?
            </button>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div className="accordion-body">
              Absolutely! We encourage members to contribute by creating content, leading discussions, or helping others with their questions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
