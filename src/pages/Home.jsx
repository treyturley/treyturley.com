import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <section id='main' className='text-center'>
            <h1>Hi, I'm Trey</h1>
            <p>
              For the past eight years I worked in performance engineering. Now
              I'm diving into full stack web development and creating simple
              performant websites.
            </p>
          </section>
        </Col>
      </Row>

      <section id='projects'>
        <Row xs={1} md={2} className='g-5'>
          <Col className='d-flex align-items-stretch'>
            <Card>
              <Card.Body>
                <Card.Title>Skull King</Card.Title>

                <Card.Text>
                  Scorekeeping in Skull King can be tricky, but this scoring app
                  makes it a breeze. One player acts as the scorekeeper and
                  inputs each player's bid, tricks, and bonus points for each
                  round. The remaining players can watch scores update in
                  realtime and see everyones bid for the current round.
                </Card.Text>

                <div className='mb-4'>
                  <Row className='text-center'>
                    <Col sm={{ span: 4, offset: 0 }}>
                      <i className='fa-brands fa-react fa-2xl'></i>
                    </Col>
                    <Col sm={{ span: 4, offset: 0 }}>
                      <i className='fa-brands fa-node-js fa-2xl'></i>
                    </Col>
                    <Col sm={{ span: 4, offset: 0 }}>
                      <i className='fa-brands fa-bootstrap fa-2xl'></i>
                    </Col>
                  </Row>
                  <Row className='text-center'>
                    <Col sm={{ span: 4, offset: 0 }}>React</Col>
                    <Col sm={{ span: 4, offset: 0 }}>Node.js</Col>
                    <Col sm={{ span: 4, offset: 0 }}>Bootstrap</Col>
                  </Row>
                </div>

                <div className='d-grid gap-2'>
                  <Row className='text-center'>
                    <Col sm={{ span: 3, offset: 3 }}>
                      <Card.Link
                        as={Button}
                        variant='dark'
                        href='https://treyturley.com/skullking-scorecard'
                      >
                        Live
                      </Card.Link>
                    </Col>
                    <Col sm={{ span: 3 }}>
                      <Card.Link
                        as={Button}
                        variant='dark'
                        href='https://github.com/treyturley/sk-scorecard-react'
                      >
                        Code
                      </Card.Link>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col className='d-flex align-items-stretch'>
            <Card>
              <Card.Body>
                <Card.Title>Yahtzee Scorecard</Card.Title>

                <Card.Text>
                  A digital scorecard for Yahtzee. Calculates score totals for
                  the upper and lower sections as well as the overall score.
                  This is a vanilla HTML/CSS/Javascript project.
                </Card.Text>

                <div className='d-flex flex-column'>
                  <div className='mb-4'>
                    <Row className='text-center'>
                      <Col sm={{ span: 4, offset: 0 }}>
                        <i className='fa-brands fa-html5 fa-2xl icon'></i>
                      </Col>
                      <Col sm={{ span: 4, offset: 0 }}>
                        <i className='fa-brands fa-css3-alt fa-2xl icon'></i>
                      </Col>
                      <Col sm={{ span: 4, offset: 0 }}>
                        <i className='fa-brands fa-square-js fa-2xl icon'></i>
                      </Col>
                    </Row>
                    <Row className='text-center'>
                      <Col sm={{ span: 4, offset: 0 }}>HTML</Col>
                      <Col sm={{ span: 4, offset: 0 }}>CSS</Col>
                      <Col sm={{ span: 4, offset: 0 }}>JS</Col>
                    </Row>
                  </div>

                  <div className='d-grid gap-2'>
                    <Row className='text-center'>
                      <Col sm={{ span: 3, offset: 3 }}>
                        <Card.Link
                          as={Button}
                          variant='dark'
                          href='https://treyturley.com/yahtzee-scorecard'
                        >
                          Live
                        </Card.Link>
                      </Col>
                      <Col sm={{ span: 3 }}>
                        <Card.Link
                          as={Button}
                          variant='dark'
                          href='https://github.com/treyturley/yahtzee-scorecard'
                        >
                          Code
                        </Card.Link>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <section id='resume'>
            <h1>Resume</h1>
            <a href='https://my.indeed.com/p/treyt-q42vckn'>
              Checkout my resume!
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus adipisci officiis error, suscipit quam asperiores.
            </p>
          </section>
        </Col>
      </Row>
    </>
  );
}

export default Home;
