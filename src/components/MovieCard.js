import {IMAGE_CDN_URL} from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-60 h-40">
        <img className="rounded-sm w-60 h-full" alt="poster" src={IMAGE_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard