import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Funcionalidades',
  },
  {
    displayName: 'Semanas',
    iconName: 'Calendar',
    route: '/dashboard/semanas',
  },
  {
    displayName: 'Viagens',
    iconName: 'Plane',
    route: '/dashboard/viagens',
  },
  {
    displayName: 'Config Usuário',
    iconName: 'User',
    route: '/dashboard/user-config',
  },
];
