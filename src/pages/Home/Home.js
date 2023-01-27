import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import HomeItem from './HomeItem';

const cx = classNames.bind(styles);

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.data);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            {data.map((user, index) => (
                <HomeItem key={index} users={user} />
            ))}
        </div>
    );
}

export default Home;
