import Image from 'next/image'
import tkt1 from './assets/tkt1.png'
import tkt2 from './assets/tkt2.png'
import pre from './assets/pre.png'
import next from './assets/next.png'

const CollectionSpotlight: React.FC = () => {
  return (
    <div className="collection-spotlight">
      <Image src={pre} alt="" width={36.75} height={49} />
      <div className="collection">
        <div className="image-container">
          <Image
            src={tkt1}
            alt="Las Vegas Aviators"
            width={226.1}
            height={401.25}
          />
        </div>
        <div className="dash-line"></div>
        <div className="team">Las Vegas Aviators</div>
        <div className="event-details">
          OCT 15 | SUN | 4:30 PM<br />
          Las Vegas Ballpark, Las Vegas,<br />
          Nevada
        </div>
        <div className="button">Take Flight Collection</div>
      </div>
      <div className="collection">
        <div className="image-container">
          <Image
            src={tkt2}
            alt="Las Vegas Aviators"
            width={226.1}
            height={401.25}
          />
        </div>
        <div className="dash-line"></div>
        <div className="team">Sacramento River Cats</div>
        <div className="event-details">
          OCT 15 | SUN | 4:30 PM<br />
          Sutter Health Park, Sacramento,<br />
          California
        </div>
        <div className="button">Orange Collection</div>
      </div>
      <div className="collection">
        <div className="image-container">
          <Image
            src={tkt1}
            alt="Las Vegas Aviators"
            width={226.1}
            height={401.25}
          />
        </div>
        <div className="dash-line"></div>
        <div className="team">Las Vegas Aviators</div>
        <div className="event-details">
          OCT 15 | SUN | 4:30 PM<br />
          Las Vegas Ballpark, Las Vegas,<br />
          Nevada
        </div>
        <div className="button">Take Flight Collection</div>
      </div>
      <Image src={next} alt="" width={36.75} height={49} />
    </div>
  )
}

export default CollectionSpotlight