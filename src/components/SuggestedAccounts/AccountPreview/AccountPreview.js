import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountPreview(user) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={user.avatar} alt="Ảnh" />
                <Button primary className={cx('following-button')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <Link to={`/@${user.nickname}`} className={cx('name')}>
                    <div>{user.full_name}</div>
                    {user.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                </Link>
                <Link to={`/@${user.nickname}`} className={cx('user-name')}>
                    {user.nickname}
                </Link>
                <p className={cx('a')}>
                    <span className={cx('b')}>{user.followers_count}</span>
                    <span className={cx('c')}>Followers</span>
                    <span className={cx('d')}>{user.likes_count}</span>
                    <span className={cx('e')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    user: PropTypes.object,
};

export default AccountPreview;
