import '../index.css';
import {PostType} from '../types/PostType'
//256 256

type Props = {
    data: PostType;
}

export const InstaCard = ({data}: Props) => {
    return(
        <div className='instacard d-flex justify-content-center align-items-center'>
            <a href={data.permalink} target={"_blank"}>
                <img className='instacardimage' src={data.media_url} alt={data.caption} />
            </a>
        </div>
    )
}