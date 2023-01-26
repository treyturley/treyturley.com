import { Col, Container, Row } from 'react-bootstrap';
import Slider from '../../components/Slider';

function FSEJobFinder() {
  // TODO: Copy for motiviation for this project, tech stack selection and why, any challenges faced, and next features that could be added

  const fseJobFinderImages = [
    {
      description: 'Homepage',
      imagePath: '../images/FSEJobFinder.png',
    },
    {
      description: 'FSEDataFeedAPI Swagger',
      imagePath: '../images/FSEDataFeedAPI_Swagger.png',
    },
  ];

  return (
    <Container>
      <main>
        <h1 className='mt-5'>FSE Job Finder</h1>
        <section className='mt-4'>
          <Row className='justify-content-between'>
            <Col sm={{ span: 6 }}>
              <h3>Overview</h3>
              <p>
                I have been a fan of flight simulators for a long time and one
                of my favorite addons to use is FSEconomy. It provides a virtual
                economy of jobs and rentable airplanes and is a great way to
                find an endless variety of destinations to fly to. One of the
                drawbacks however has been how the built in job searching works.
                Often it requires scrolling through lists of jobs at each
                airport to see if there is something available for the airplane
                you want to fly. Thankfully FSEconomy provides an API that can
                be used to access to the airplane and job data. This meant I
                could make my own tool to find jobs for the planes I like to
                fly.
              </p>
              <h3>Tech Stack</h3>
              <p>
                FSE Job Finder started as a simple C# console app that would
                pull job and airplane data from the FSEconomy API. The project
                stayed like this until I started exploring full stack
                development. Now an ASP.NET Web API has been added along with a
                small React frontend which makes it easy to quickly find
                available jobs.
              </p>
              <h3>Challenges</h3>
              <p>
                The main challenge was figuring out what data my API should
                return. The info I needed to extract from the FSEconomy API was
                split into airplanes, locations, and jobs. I decided I would
                aggregate this data into an assignment containing the origin and
                destination airports along with the payout. With that info, I
                could roughly estimate some other details like the distance and
                estimated flight time. This would require multiple requests to
                the FSEconomy API to get the list of airplanes and their
                location. Then I could retrieve the job information for each
                location and match the available jobs with the airplanes that
                were available to rent. Finally this info was bundled into a
                list of assignments and returned by my API. I started to expand
                the API to include just the best assignment and assignments to
                or from the US and plan to continue to build out the API to
                include other filtering options.
              </p>
              <h3>Future Improvements</h3>
              <ul>
                <li>
                  Add search and filter options on front-end for finding
                  specific airports, min/max flight time/distance, and payout
                  ranges
                </li>
                <li>Add option to identify available multi-leg flights</li>
                <li>
                  Add a job details page with additonal info and map showing the
                  origin and destination
                </li>
                <li>Expand API to include additional airplanes.</li>
              </ul>
            </Col>
            <Col sm={{ span: 6 }}>
              <div className='slider-div'>
                <h3 className='text-center'>Screenshots</h3>
                <Slider images={fseJobFinderImages} />
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </Container>
  );
}

export default FSEJobFinder;
