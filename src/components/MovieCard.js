import {IMAGE_CDN_URL} from "../utils/constants"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (
    <div className=" w-36 md:w-60 md:h-40">
        <img className="rounded-sm w-36 md:w-60 h-full" alt="poster" src={IMAGE_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard