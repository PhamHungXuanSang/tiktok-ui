import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    upload = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
}) {
    const props = {
        onClick,
    };

    let Comp = 'button';

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    //Nếu có disable thì xóa props onClick
    if (disabled) {
        delete props.onClick;
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        upload,
        disabled,
        rounded,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    upload: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
