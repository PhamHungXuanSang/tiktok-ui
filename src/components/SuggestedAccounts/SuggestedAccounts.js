import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SuggestedAccountItem from './SuggestedAccountItem';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState(5);
    const [see, setSee] = useState('See all');

    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=${perPage}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.data);
            });
    }, [perPage]);

    const handleSeeAll = () => {
        if (perPage === 5) {
            setPerPage(20);
            setSee('See less');
        } else {
            setPerPage(5);
            setSee('See all');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((result, index) => (
                <SuggestedAccountItem key={index} data={result} />
            ))}

            <p className={cx('more-btn')} onClick={handleSeeAll}>
                {see}
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
