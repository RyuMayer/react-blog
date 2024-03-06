import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import clsx from 'clsx';

type TAppLinkProps = LinkProps & {
  children: ReactNode;
};

export function AppLink(props: TAppLinkProps) {
  const { children, to, className, ...otherProps } = props;

  return (
    <Link
      className={clsx(['dark:text-neutral-200 hover:underline', className])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
}
