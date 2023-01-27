import {
    faCheckCircle,
    faCommentDots,
    faHeart,
    faMusic,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function HomeItem({ users }) {
    const userInfo = users.user;
    console.log(users);

    const [playing, setPlaying] = useState(false);

    const videoRef = useRef();

    const handlePlayVideo = () => {
        if (!playing) {
            videoRef.current.play();
            setPlaying(true);
        } else {
            videoRef.current.pause();
            setPlaying(false);
        }
    };

    return (
        <div
            className={cx('item-wrapper')}
            onMouseEnter={handlePlayVideo}
            onMouseLeave={handlePlayVideo}
        >
            <Link className={cx('avatar-wrapper')} to={`/@${userInfo.nickname}`}>
                <Image className={cx('avatar')} src={userInfo.avatar} />
            </Link>
            <div className={cx('item')}>
                <Link className={cx('item-nickname')} to={`/@${userInfo.nickname}`}>
                    {userInfo.nickname}
                    {userInfo.tick && (
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    )}
                </Link>
                <p className={cx('desc')}>{users.description}</p>
                <div className={cx('music')}>
                    {<FontAwesomeIcon className="music-icon" icon={faMusic} />}
                    <p>nhạc nền</p>
                    {users.music && <p> - {users.music}</p>}
                </div>
                <video
                    ref={videoRef}
                    className={cx('video')}
                    width="276"
                    height="494"
                    autoPlay={playing}
                    muted
                    controls
                    loop
                >
                    <source src={users.file_url} type={users.meta.mime_type}></source>
                </video>
                <div className={cx('item-actions')}>
                    <button className={cx('action-btn')}>
                        <FontAwesomeIcon className={cx('action-btn-icon')} icon={faHeart} />
                    </button>
                    <div className={cx('count')}>{users.likes_count}</div>
                    <button className={cx('action-btn')}>
                        <FontAwesomeIcon className={cx('action-btn-icon')} icon={faCommentDots} />
                    </button>
                    <div className={cx('count')}>{users.comments_count}</div>
                    <button className={cx('action-btn')}>
                        <FontAwesomeIcon className={cx('action-btn-icon')} icon={faShare} />
                    </button>
                    <div className={cx('count')}>{users.shares_count}</div>
                </div>
                <Button className={cx('follow-btn')} upload small>
                    Following
                </Button>
            </div>
        </div>
    );
}

export default HomeItem;

/* ý tưởng:
 + bắt sự kiện scroll tới id nào đó
 + cho thẻ video có id đó play
*/
