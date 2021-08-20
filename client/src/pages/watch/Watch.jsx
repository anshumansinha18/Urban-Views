//Watch trailer in this page
//Youtube trailers embedded

import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'

export default function Watch() {
    return (
        <div class="watch">
            <div class="back">
                <ArrowBackOutlined />
                Home
            </div>
            {/* Youtube video embedding */}
            {/* <video className="video" autoPlay progress controls src='https://www.youtube.com/watch?v=IIfFAy3LLk4'></video> */}
            <iframe className="video" src='https://www.youtube.com/embed/TiKz_Rfz05Q'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
            />
        </div>
    )
}
