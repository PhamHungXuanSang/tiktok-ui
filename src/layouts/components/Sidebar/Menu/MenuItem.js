import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        // className có thể truyền vào 1 hàm nhận đối số là 1 object(nav)
        <NavLink to={to} end className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('menu-icon')}>{icon}</span>
            <span className={cx('menu-active-icon')}>{activeIcon}</span>
            <span className={cx('menu-title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};
