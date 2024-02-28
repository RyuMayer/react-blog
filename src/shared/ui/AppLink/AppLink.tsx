import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type TAppLinkProps = LinkProps & {
  children: ReactNode;
};

export function AppLink(props: TAppLinkProps) {
  const { children, to, className, ...otherProps } = props;

  return (
    <Link className={className} to={to} {...otherProps}>
      {children}
    </Link>
  );
}
