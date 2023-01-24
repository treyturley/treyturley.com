import { Col, Container, Row } from 'react-bootstrap';
import Slider from '../../components/Slider';

function Skullking() {
  // TODO: Copy for motiviation for this project, tech stack selection and why, any challenges faced, and next features that could be added

  const skullKingImages = [
    {
      description: 'Homepage',
      location: '../images/skullking-homepage.png',
    },
    {
      description: 'Homepage2',
      location: '../images/skullking-homepage.png',
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
                Initially I had considered creating the frontend with Angular.
                It was used regularly at Dell and I had previously completed a
                four month long full stack course that included Angular and
                Spring Boot. However, as far as I could tell Angular was
                becoming less and less popular and I was ready to try something
                new. I chose to go with React for the frontend because it looked
                to be the most popular and there were plenty of tutorials on
                Youtube and classes on Udemy to pick from. I knew if I got stuck
                on something it would be easy to find help and getting to learn
                something new would help keep the project interesting. When the
                need for a backend became apparent I opted to use Express as it
                was regularly showing up alongside React tutorials and looked
                like a quicky and easy way to get a REST API up and running.
              </p>
              <h3>Challenges</h3>
              <p>
                Everyone wanted a way to see the bids for the current round and
                the overall scores. Knowing someone elses bid is critical when
                you want to force them into taking a trick that they don't want.
                Setting up an Express server with some basic REST API CRUD
                operations was straightforward and that took care of tracking
                the game state. However, this was not going to work for creating
                an observer pattern and pushing updates to the players. Long
                polling would be used for the first version of the player screen
                while a better solution was researched.
              </p>
              <p>
                After poking around to see what was out there I discoverd Web
                Sockets and the Socket.IO library. This is excactly what I
                needed to be able to push updates in realtime. Whenever the
                scorekeeper made a change to the scorecard, a put request was
                made to the REST API with the new scorecard info. After updating
                the scorecard state on the server side, a message containing the
                latest score info was sent via websocket to each of the players
                that had joined the game. I added in a little debouncing on the
                scorecard inputs to make everything less chatty and now we have
                realtime score and bid updates for the players.
              </p>
              <h3>Future Improvements</h3>
              <p>CSS consolidation and improvements</p>
              <p>Improved graph handling</p>
            </Col>
            <Col sm={{ span: 6 }}>
              <div className='swiper-div'>
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
