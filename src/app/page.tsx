import PlayerCard from '@/components/PlayerCard'
import CollectionSpotlight from '@/components/CollectionSpotlight'
import Image from 'next/image'
import image0 from '@/components/assets/image0.png'
import image1 from '@/components/assets/image1.png'
import image2 from '@/components/assets/image2.png'
import adLogo from '@/components/assets/ad-logo.png'
import ad from '@/components/assets/ad.png'

export default function Home() {
  return (
    <main>
      <section>
        <h2>Sports</h2>
        <div className="player-cards">
          <PlayerCard
            imageSrc={image0}
            teamName="Sacramento River Cats"
            totalEvents={48}
            sport="Baseball"
          />
          <PlayerCard
            imageSrc={image1}
            teamName="Las Vegas Aviators"
            totalEvents={28}
            sport="Baseball"
          />
          <PlayerCard
            imageSrc={image2}
            teamName="New Jersey Devils"
            totalEvents={15}
            sport="Ice Hockey"
          />
          <PlayerCard
            imageSrc={image1}
            teamName="Las Vegas Aviators"
            totalEvents={28}
            sport="Baseball"
          />
          <div className="advertisement">
            <div className="container">
              <div className="ad-img-container">
                <Image src={adLogo} alt="" width={47.78} height={47.78} />
                <Image src={ad} alt="" width={217} height={218} />
              </div>
              <div className="ad-team-name">Advertisement title</div>
              <div className="info">
                Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,<br />
                sed do eiusmod tempor <br />incididunt ut labore et dolore<br />
                magna aliqua. Lorem ipsum<br />dolor sit amet, consectetur<br />
                adipiscing elit, sed do eiusmod<br />tempor incididunt ut labore et<br />
                dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>
      </section>
      <button className="btn">see more</button>
      <section>
        <h1>Collection Spotlight</h1>
        <p>
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
        <CollectionSpotlight />
      </section>
    </main>
  )
}