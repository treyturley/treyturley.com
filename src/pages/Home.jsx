import React from 'react';

import { Col, Row, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

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
          <Col className='d-flex align-items-stretch project-col'>
            <Card>
              <Card.Body className='d-flex flex-column justify-content-between'>
                <div>
                  <Card.Title>
                    <Link to='/projects/skull-king-scorecard'>
                      Skull King Scorecard
                    </Link>
                  </Card.Title>

                  <Card.Text>
                    Scorekeeping in Skull King can be tricky, but this scoring
                    app makes it a breeze. One player acts as the scorekeeper
                    and inputs each player's bid, tricks, and bonus points for
                    each round. The remaining players can watch scores update in
                    realtime and see everyones bid for the current round.
                  </Card.Text>
                </div>

                <div className='d-flex flex-column'>
                  <div className='m-4'>
                    <Row className='text-center'>
                      <Col xs={{ span: 4, offset: 0 }}>
                        <i className='fa-brands fa-react fa-2xl'></i>
                      </Col>
                      <Col xs={{ span: 4, offset: 0 }}>
                        <i className='fa-brands fa-node-js fa-2xl'></i>
                      </Col>
                      <Col xs={{ span: 4, offset: 0 }}>
                        <i className='fa-brands fa-bootstrap fa-2xl'></i>
                      </Col>
                    </Row>
                    <Row className='text-center'>
                      <Col xs={{ span: 4, offset: 0 }}>React</Col>
                      <Col xs={{ span: 4, offset: 0 }}>Node.js</Col>
                      <Col xs={{ span: 4, offset: 0 }}>Bootstrap</Col>
                    </Row>
                  </div>

                  <div className='d-grid gap-2'>
                    <Row className='text-center'>
                      <Col>
                        <Card.Link
                          as={Button}
                          variant='dark'
                          href='https://treyturley.com/skullking-scorecard'
                          className='my-btn-wide'
                        >
                          Checkout The Website
                        </Card.Link>
                      </Col>
                      <Col>
                        <Card.Link
                          as={Button}
                          variant='dark'
                          href='https://github.com/treyturley/sk-scorecard-react'
                          className='my-btn-wide'
                        >
                          View The Code
                        </Card.Link>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col className='d-flex align-items-stretch project-col'>
            <Card>
              <Card.Body className='d-flex flex-column justify-content-between'>
                <div>
                  <Card.Title>
                    <Link to='/projects/fse-data-feed'>FSE Data Feed</Link>
                  </Card.Title>

                  <Card.Text>
                    The FSE Data Feed started as a console app that used an API
                    provided by FSEconomy to aggregate the airline job data.
                    This made it easy to find flights between interesting
                    locations or the ones with the best payout. It then evolved
                    into a REST API built with ASP.NET and a React frontend was
                    added to surface the data.
                  </Card.Text>
                </div>

                <div className='d-flex flex-column'>
                  <div className='m-4'>
                    <Row className='text-center'>
                      <Col xs={{ span: 4, offset: 0 }}>
                        <img src='./images/dotnet.png' alt='dotnet' />
                      </Col>
                      <Col xs={{ span: 4, offset: 0 }}>
                        <img src='./images/api.png' alt='api' />
                      </Col>
                      <Col xs={{ span: 4, offset: 0 }}>
                        <i className='fa-brands fa-react fa-2xl'></i>
                      </Col>
                    </Row>
                    <Row className='text-center'>
                      <Col xs={{ span: 4, offset: 0 }}>ASP.NET</Col>
                      <Col xs={{ span: 4, offset: 0 }}>REST API</Col>
                      <Col xs={{ span: 4, offset: 0 }}>React</Col>
                    </Row>
                  </div>

                  <div className='d-grid gap-2'>
                    <Row className='text-center'>
                      <Col>
                        <Card.Link
                          as={Button}
                          variant='dark'
                          href='https://treyturley.com/yahtzee-scorecard'
                          className='my-btn-wide'
                        >
                          Checkout The Website
                        </Card.Link>
                      </Col>
                      <Col>
                        <Card.Link
                          as={Button}
                          variant='dark'
                          href='https://github.com/treyturley/yahtzee-scorecard'
                          className='my-btn-wide'
                        >
                          View The Code
                        </Card.Link>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col
            md={{ span: 6, offset: 3 }}
            className='d-flex align-items-stretch project-col'
          >
            <Card>
              <Card.Body className='d-flex flex-column justify-content-between'>
                <div>
                  <Card.Title>
                    <Link to='/projects/yahtzee-scorecard'>
                      Yahtzee Scorecard
                    </Link>
                  </Card.Title>

                  <Card.Text>
                    A digital scorecard for Yahtzee. It calculates score totals
                    for the upper and lower sections as well as the overall
                    score. This is a super straight forward app made with HTML,
                    CSS, and Javascript.
                  </Card.Text>
                </div>

                <div className='d-flex flex-column'>
                  <div className='m-4'>
                    <Row className='text-center'>
                      <Col xs={{ span: 4, offset: 0 }}>
                        <i className='fa-brands fa-html5 fa-2xl icon'></i>
                      </Col>
                      <Col xs={{ span: 4, offset: 0 }}>
                        <i className='fa-brands fa-css3-alt fa-2xl icon'></i>
                      </Col>
                      <Col xs={{ span: 4, offset: 0 }}>
                        <i className='fa-brands fa-square-js fa-2xl icon'></i>
                      </Col>
                    </Row>
                    <Row className='text-center'>
                      <Col xs={{ span: 4, offset: 0 }}>HTML</Col>
                      <Col xs={{ span: 4, offset: 0 }}>CSS</Col>
                      <Col xs={{ span: 4, offset: 0 }}>JS</Col>
                    </Row>
                  </div>

                  <div className='d-grid gap-2'>
                    <Row className='text-center'>
                      <Col>
                        <Card.Link
                          as={Button}
                          variant='dark'
                          href='https://treyturley.com/yahtzee-scorecard'
                          className='my-btn-wide'
                        >
                          Checkout The Website
                        </Card.Link>
                      </Col>
                      <Col>
                        <Card.Link
                          as={Button}
                          variant='dark'
                          href='https://github.com/treyturley/yahtzee-scorecard'
                          className='my-btn-wide'
                        >
                          View The Code
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

      {/* <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <section id='Resume' className='text-center'>
            <h1>Resume</h1>
            <a href='https://my.indeed.com/p/treyt-q42vckn'>
              Checkout my on Indeed.com
            </a>
          </section>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <section id='Contact' className='text-center'>
            <h1>Contact</h1>
            <a href='https://my.indeed.com/p/treyt-q42vckn'>
              Checkout my on Indeed.com
            </a>
          </section>
        </Col>
      </Row> */}
    </>
  );
}

export default Home;
