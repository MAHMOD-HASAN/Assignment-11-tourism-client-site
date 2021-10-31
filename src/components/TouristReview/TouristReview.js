import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TouristReview = () => {
  return (

     <Container>

       <h2 className='text-center fw-bold'><span className='text-danger'>Tourist</span>
        &nbsp;<span className='text-warning'>Feedback</span></h2>

       <Row lg={3}>

      {/*column number one */}
         <div>

          <Col className='border border-secondary py-4 px-2 mb-3'  
          style={{backgroundColor : 'rgb(226, 213, 235)'}}>

              <img src="https://i.ibb.co/4M3q7Np/tourist1.jpg"
              style={{margin:'0 auto', display:'block', borderRadius:'50%', marginBottom:'20px', width : '120px'}}
              alt="" />
              <p className='text-center text-info fw-bold'>I'm Devit</p>
              <p className='text-center'><small>It was a great jouerney in my life. Because safe trouble agency volunteer are friendly. They served healthy food for us. And they have best tourist spot to travel. So i think safe travel agency is best choice to travel</small></p>

          </Col>

          </div>


        {/*column number two */}
         <div>

            <Col className='border border-secondary py-4 px-2 mb-3'
            style={{backgroundColor : 'rgb(226, 213, 235)'}}
            >
              <img src="https://i.ibb.co/37NcyvZ/tourist2.jpg"
              style={{margin:'0 auto', display:'block', borderRadius:'50%', marginBottom:'20px', width : '120px'}}
              alt="" />
              <p className='text-center text-info fw-bold'>I'm Marya</p>
              <p className='text-center'><small>It was a great jouerney in my life. Because safe trouble agency volunteer are friendly. They served healthy food for us. And they have best tourist spot to travel. So i think safe travel agency is best choice to travel</small></p>
          </Col>

       </div>


       {/*column number three */}
         <div>

          <Col className='border border-secondary py-4 px-2 mb-3'
          style={{backgroundColor : 'rgb(226, 213, 235)'}}
          >
              <img src="https://i.ibb.co/XZs32mF/tourist3.jpg"
              style={{margin:'0 auto', display:'block', borderRadius:'50%', marginBottom:'20px', width : '120px'}}
              alt="" />
              <p className='text-center text-info fw-bold'>I'm Jhon</p>
              <p className='text-center'><small>It was a great jouerney in my life. Because safe trouble agency volunteer are friendly. They served healthy food for us. And they have best tourist spot to travel. So i think safe travel agency is best choice to travel</small></p>

          </Col>

          </div>


       </Row>


     </Container>
  );
};

export default TouristReview;



  