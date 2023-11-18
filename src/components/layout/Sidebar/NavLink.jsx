import { forwardRef } from "react";

import { NavLink as BaseNavLink } from "react-router-dom";

const NavLink = forwardRef(({ to, children, ...rest }, ref) => {
  return (
    <BaseNavLink ref={ref} to={to} {...rest}>
      {children}
    </BaseNavLink>
  );
});

NavLink.displayName = "NavLink";

export default NavLink;
