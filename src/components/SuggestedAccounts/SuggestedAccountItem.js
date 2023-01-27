import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function SuggestedAccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview {...props} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                delay={[900, 0]}
                interactive
                offset={[-8, 4]}
                placement="bottom-start"
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            <div className={cx('menu-body')}>{renderPreview(data)}</div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <Link to={`/@${data.nickname}`} className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <span>{data.full_name}</span>
                            {data.tick && (
                                <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                            )}
                        </h4>
                        <span className={cx('username')}>{data.nickname}</span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

SuggestedAccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SuggestedAccountItem;
