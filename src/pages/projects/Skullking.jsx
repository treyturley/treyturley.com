import { Col, Container, Row } from 'react-bootstrap';
import Slider from '../../components/Slider';

function Skullking() {
  const skullKingImages = [
    {
      description: 'Homepage',
      imagePath: '/images/skullking-homepage.png',
    },
    {
      description: 'Game Setup',
      imagePath: '/images/skullking-game-setup.png',
    },
    {
      description: 'Scorekeeper View',
      imagePath: '/images/skullking-scorekeeper-1.png',
    },
    {
      description: 'Scorekeeper Continued',
      imagePath: '/images/skullking-scorekeeper-2.png',
    },
    {
      description: 'Scorekeeper Round Details',
      imagePath: '/images/skullking-scorekeeper-3.png',
    },
    {
      description: 'Scorekeeper Round Expanded',
      imagePath: '/images/skullking-scorekeeper-4-expanded-scores.png',
    },
    {
      description: 'Scorekeeper Game Summary',
      imagePath: '/images/skullking-scorekeeper-5-summary.png',
    },
    {
      description: 'Join Game',
      imagePath: '/images/skullking-join-game.png',
    },
    {
      description: 'Player View',
      imagePath: '/images/skullking-player-view-1.png',
    },
    {
      description: 'Player View Expanded',
      imagePath: '/images/skullking-player-view-2.png',
    },
    {
      description: 'Player View Summary',
      imagePath: '/images/skullking-player-view-3-finished.png',
    },
  ];

  return (
    <Container>
      <main>
        <h1 className='mt-5'>Skull King Scorecard</h1>
        <section className='mt-4'>
          <Row>
            <Col sm={{ span: 6 }}>
              <h3>Overview</h3>
              <p>
                Skull King became a very popular game to play on game nights,
                however nobody really wanted to be the scorekeeper. For each
                round, the scorekeeper would have to note down up to five pieces
                of information for each player. Then scoring rules were applied
                to get a round score and then overall totals could be tallied.
                It was tedius and error prone. One game night, it was suggested
                that a digital scorecard for Skull King would make the game much
                more enjoyable for everyone.
              </p>
              <h3>Tech Stack</h3>
              <p>
                For the frontend I was looking at using either Angular or React.
                I had some prior experience with Angular from some work projects
                so I could continue expanding on that or I could try React. I
                decided learning React would be more fun and I could compare it
                with how things worked with Angular. React is also a very
                popular library so there were plenty of courses to pick from on
                Udemy and Youtube tutorials to fill in any gaps.
              </p>
              <p>
                Initially the scorecard was just going to be used by the player
                keeping score, but after a couple game nights the feature
                requests started coming in. The next step was to create a rest
                API with Express that would track the scorecard state. Now the
                scorekeeper could push score updates and players could refresh
                to get the latest score info. To improve the overall experience
                the next request was to add a way to see the other players bids.
                I also wanted to make the players view update automatically
                whenever the scorekeeper pushed an update. This was one of the
                more challenging additions and more info on how it was
                implemented can be found in the section below.
              </p>
              <h3>Challenges</h3>
              <p>
                Everyone wanted a way to see the bids for the current round in
                the app because knowing someone elses bid is critical when you
                want to force them into taking a trick that they don't want.
                Skull King provides a couple cards to indicate your bid but it
                was easy to forget to update them after bidding and they could
                be hard to see from across the table. To keep the pace of the
                game flowing smoothly the bid updates and score updates needed
                to be pushed to the players automatically after the scorekeeper
                updated them.
              </p>
              <p>
                Setting up the Express server with some basic rest API CRUD
                operations was straightforward and that took care of tracking
                the game state. However, this was not going to work for
                implementing an observer pattern with the scorekeeper and
                players. The first version of the automatic updates used long
                polling while I looked for a better solution.
              </p>
              <p>
                After poking around for a bit I discoverd Web Sockets and the
                Socket.IO library. This was excactly what I needed to be able to
                push updates in realtime. Now, whenever the scorekeeper made a
                change to the scorecard, a PUT request was made to the rest API
                with the new scorecard info. After updating the scorecard state
                on the server side, a message containing the latest score info
                was sent via websocket to each of the players that had joined
                the game. I added in a little debouncing on the scorecard inputs
                to make everything less chatty and now we have realtime score
                and bid updates for the players.
              </p>
              <h3>Future Enhancements</h3>
              <ul>
                <li>
                  Add a database to persist games in progress (
                  <a
                    href='https://github.com/treyturley/sk-scorecard-api/pull/19'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Completed
                  </a>
                  )
                </li>
                <li>Improve score graph responsiveness for mobile devices</li>
                <li>
                  Continue the pirate/ocean theme throughout the rest of the app
                </li>
              </ul>
            </Col>
            <Col sm={{ span: 6 }}>
              <div className='slider-div'>
                <h3 className='text-center'>Screenshots</h3>
                <Slider images={skullKingImages} />
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </Container>
  );
}

export default Skullking;
