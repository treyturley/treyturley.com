import { Col, Container, Row } from 'react-bootstrap';
import Slider from '../../components/Slider';

function AWSMigration() {
  const awsMigrationImages = [
    {
      description: 'Jenkins Dashboard',
      imagePath: '../images/Jenkins-Dashboard.png',
    },
    {
      description: 'Sample Deploy Script',
      imagePath: '../images/docker_deploy_script.png',
    },
  ];

  return (
    <Container>
      <main>
        <h1 className='mt-5'>AWS Migration and Build Pipelines</h1>
        <section className='mt-4'>
          <Row>
            <Col sm={{ span: 6 }}>
              <h3>Overview</h3>
              <p>
                Even before Heroku dropped their free tier I had been
                considering moving everything to one hosting service. Github
                pages was working fine for static sites, but I had a couple APIs
                that needed to be hosted as well. In the end, moving over to AWS
                was great as it not only moved all the applications to one place
                but also allowed me to build out some automation to make them
                easier to manage.
              </p>
              <h3>Tech Stack</h3>

              <h5>Cloudflare</h5>
              <p>
                While browsing for domain registrars I saw that Cloudflare
                offered competitive prices for domains and also had a free tier
                that covered their core services. It was easy to setup the
                domain, DNS records, and security rules through their portal.
              </p>

              <h5>AWS EC2</h5>
              <p>
                I chose AWS because I already had a t2.micro (free) instance up
                and running from some previous tinkering. It seemed to be just
                the right size and I had a few months to go before the free
                trial was up. After migrating everything, I found I was pushing
                just a little past what that free instance could do. Triggering
                builds in Jenkins, especially the dotnet project, would cause
                the vm to grind to a halt as every last free megabyte was
                consumed. I decided to bump up to a t3.small instance (2 core,
                2GB ram) for a small fee. This is a little more than I need but
                now I have room for future projects.
              </p>

              <h5>Docker</h5>
              <p>
                While migrating to AWS it seemed like that would also be a good
                time to containerize the apps. This would take care of
                automating the build process and make it easy to deploy the apps
                with Jenkins.
              </p>

              <h5>Nginx</h5>
              <p>
                I decided to use NGINX because it is lightweight and fast. It
                would also work as both a reverse proxy to point traffic to the
                containerized apps as well as the web server inside the frontend
                containers to serve static content. There were some challenges
                with setting up the reverse proxy and more details on that can
                be found in the challenges section below.
              </p>

              <h5>Jenkins</h5>
              <p>
                Having used Jenkins for some small projects before I knew it
                would work fine for the pipelines I wanted to create. Currently
                the pipelines are triggered by GitHub Webhooks which notify
                Jenkins of a change. Jenkins then checks the main branch for
                changes, pulls down the latest code, and fires off a shell
                script. The shell script stops the old container, builds the new
                image, and starts a new container.
              </p>

              <h5>GitHub</h5>
              <p>
                Before the migration, I had been hosting the frontends for Skull
                King and my old portfolio site on Github pages. Pushing updates
                to those sites was done by merging code into a specific branch
                on GitHub. Through a combination of GitHub Webhooks, Jenkins,
                and Docker I am able push updates to my production apps using
                the same process.
              </p>

              <h3>Challenges</h3>
              <p>
                Nginx configuration was one of the more difficult tasks in the
                migration. I would need to configure a web server for the main
                portfolio site, reverse proxies for the Docker containers, and a
                number of security measures like TSL for HTTPS and restricted
                access to Jenkins. It was also important that nginx only respond
                to traffic that was proxied from Cloudflare. It took a bit of
                reading through the nginx and Cloudflare docs as well as some
                stackoverflow posts to find all the right security settings. The
                final hurdle came when WebSockets were added to the Skull King
                Scorecard. It took a little google-fu to figure out why the
                connections wouldn't upgrade. Turns out the upgrade and
                connection headers had to be passed explicity to the proxied
                server.
              </p>

              <h3>Future Enhancements</h3>
              <ul>
                <li>
                  Abstract out app name and ports so they can be passed as
                  cmdline arguments instead of being hardcoded in the deploy
                  scripts
                </li>
              </ul>
            </Col>
            <Col sm={{ span: 6 }}>
              <div className='slider-div'>
                <h3 className='text-center'>Screenshots</h3>
                <Slider images={awsMigrationImages} />
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </Container>
  );
}

export default AWSMigration;
