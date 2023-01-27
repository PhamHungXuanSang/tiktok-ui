import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faCoins,
    faGear,
    faVideo,
    faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { MessageIcon, PaperPlaneIcon } from '~/components/Icons';
import Search from '../Search';
import config from '~/config';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

const userMENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: '/@sangmystery',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận xu',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faVideo} />,
        title: 'LIVE Studio',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Đăng xuất',
        to: '/logout',
        separate: true,
    },
];

const cx = classNames.bind(styles);
function Header() {
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok-logo" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Tippy content="Tin nhắn" placement="bottom" delay={[0, 100]}>
                                <button className={cx('action-btn')}>
                                    <PaperPlaneIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" placement="bottom" delay={[0, 100]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMENU : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="avatar"
                                src="https://img.freepik.com/free-vector/tiktok-banner-with-watercolor-splatter_69286-194.jpg?w=2000"
                                fallback="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=2000"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

// Note:
// - Tách phần search thành comp riêng, module.scss riêng vì khi set lại state sẽ bị re-render cả phần header
// - Sửa ô search khi nhập vào input không ăn css đậm kính lúp
// - Two way binding ô search, kèm xử lý logic khi có value thì mới hiện lên icon clear
// - Khi click vào icon clear thì xóa value đang nằm trong input và forcus vào input
// - Xử lý logic khi có kết quả tìm kiếm và biến showResult = true thì hiển thị kết quả tìm kết ngược lại tắt
