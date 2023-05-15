import { Col, Container, Row } from 'react-bootstrap';
import Slider from '../../components/Slider';

function Yahtzee() {
  // TODO: Copy for motiviation for this project, tech stack selection and why, any challenges faced, and next features that could be added

  const yahtzeeImages = [
    {
      description: 'Yahtzee Scorecard',
      imagePath: '/images/Yahtzee_Scorecard.png',
    },
  ];

  return (
    <Container>
      <main>
        <h1 className='mt-5'>Yahtzee Scorecard</h1>
        <section className='mt-4'>
          <Row>
            <Col sm={{ span: 6 }}>
              <h3>Overview</h3>
              <p>
                Yahtzee is another game night favorite and after I mentioned
                that I was working on a scorecard for Skull King a request for a
                Yathzee scorecard was put in. Scores are saved in local storage
                that way they persist in case the user accidently closes the
                page.
              </p>
              <h3>Tech Stack</h3>
              <p>
                This scorecard was much simpler and only required html, css, and
                a little JavaScript to tie it together.
              </p>
              <h3>Challenges</h3>
              <p>
                The biggest challenge was making the digital scorecard the same
                across a variety of devices. The first couple nights of using it
                we discovered multiple visual bugs as text and boxes didn't
                quite line up the same as they did when I was using Chrome's dev
                tools to check responsiveness. I have a huge respect for anyone
                doing responsive design for websites with complicated layouts.
              </p>
              <h3>Future Improvements</h3>
              <ul>
                <li>
                  Keeping track of the final scores from previously played games
                  could be neat. This would let players compare score from games
                  where they used different strategies to fill out their
                  scorecard.
                </li>
                <li>
                  There have been some ideas around helping players make the
                  best scoring choices by checking the scores they enter to see
                  if a better option exists. For example, a player enters 18 for
                  their sixes. This could also make for a good three of a kind
                  score depending on the other numbers they have. This could
                  take some of the fun away from playing by adding min/maxing
                  and too many prompts which I dont think we want.
                </li>
                <li>
                  Another idea was to allow players to enter what they rolled
                  and have the scorecard determine the best possible score
                  automatically. A neat idea, but I think it would take some of
                  the fun out of the game.
                </li>
              </ul>
            </Col>
            <Col sm={{ span: 6 }}>
              <div className='slider-div'>
                <h3 className='text-center'>Screenshots</h3>
                <Slider images={yahtzeeImages} />
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </Container>
  );
}

export default Yahtzee;
