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
                  <div className='m-3'>
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
                    <Link to='/projects/aws-migration'>
                      AWS Migration and Build Pipelines
                    </Link>
                  </Card.Title>

                  <Card.Text>
                    When Heroku dropped their free tier I decided to move over
                    to AWS. Along the way I bought and registered my domain with
                    Cloudflare and containerized the apps with Docker. To wrap
                    up, I configured webhooks on Github to trigger Jenkins
                    pipelines which handle the build and deployment process.
                    Now, pushing changes to the production sites only requires
                    merging a pull request with the main branch.
                  </Card.Text>
                </div>

                <div className='d-flex flex-column'>
                  <div className='m-3'>
                    <Row className='text-center' xs={3} lg={3} xl={6}>
                      <Col>
                        <i className='fa-brands fa-aws fa-2xl icon'></i>
                        <p className='mb-0'>AWS</p>
                      </Col>
                      <Col>
                        <i className='fa-brands fa-cloudflare fa-2xl icon'></i>
                        <p className='mb-0 '>Cloudflare</p>
                      </Col>
                      <Col>
                        <i className='fa-brands fa-github fa-2xl icon'></i>
                        <p className='mb-0 '>GitHub</p>
                      </Col>
                      <Col className='col-margin-top-1'>
                        <i className='fa-brands fa-jenkins fa-2xl icon'></i>
                        <p className='mb-0 '>Jenkins</p>
                      </Col>
                      <Col className='col-margin-top-1'>
                        <i className='fa-brands fa-docker fa-2xl icon'></i>
                        <p className='mb-0 '>Docker</p>
                      </Col>
                      <Col className='col-margin-top-1'>
                        <img
                          src='./images/icons8-nginx-32.png'
                          alt='nginx'
                          className='icon-img-nginx'
                        />
                        <p className='icon-text-nginx mb-0 '>NGINX</p>
                      </Col>
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

        <Row xs={1} md={2} className='g-5 mt-0'>
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
                  <div className='m-3'>
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

          <Col className='d-flex align-items-stretch project-col'>
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
                  <div className='m-3'>
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
    </>
  );
}

export default Home;
