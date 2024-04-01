import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface PlayerCardProps {
  imageSrc: StaticImageData
  teamName: string
  totalEvents: number
  sport: string
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  imageSrc,
  teamName,
  totalEvents,
  sport,
}) => {
  return (
    <div className="container">
      <div className="img-container">
        <Image src={imageSrc} alt="" width={217} height={385.31} />
      </div>
      <div className="team-name">{teamName}</div>
      <div className="info-box">
        <div className="info-column">
          <div>Total Events</div>
          <div>{totalEvents} Events</div>
        </div>
        <div className="info-column">
          <div>Sport</div>
          <div>{sport}</div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard