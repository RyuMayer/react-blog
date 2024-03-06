import { ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import clsx from 'clsx';

type TAppLinkProps = LinkProps & {
  renderIcon?: (isActive: boolean) => ReactNode;
};

export function UiRouteLink(props: TAppLinkProps) {
  const { children, to, className, renderIcon, ...otherProps } = props;

  return (
    <NavLink to={to} {...otherProps}>
      {({ isActive }) => (
        <span
          className={clsx(
            'flex gap-2 rounded-md px-[25px] py-[10px] text-light-grey-200 transition hover:bg-[#f8f8f8]',
            {
              'pointer-events-none bg-light-black font-medium text-white':
                isActive,
            },
            [className],
          )}
        >
          {renderIcon && renderIcon(isActive)}
          {children}
        </span>
      )}
    </NavLink>
  );
}
