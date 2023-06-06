import './index.css'

const BannerCardItem = props => {
  const bannerCardDetails = {props}
  const {headerText, description, className} = bannerCardDetails

  return (
    <div className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>Show More</button>
    </div>
  )
}

export default BannerCardItem
