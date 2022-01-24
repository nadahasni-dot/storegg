import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="icon-menu-overview" active />
          <MenuItem title="Transactions" icon="icon-menu-transactions" />
          <MenuItem title="Messages" icon="icon-menu-messages" />
          <MenuItem title="Card" icon="icon-menu-card" />
          <MenuItem title="Rewards" icon="icon-menu-rewards" />
          <MenuItem title="Settings" icon="icon-menu-settings" />
          <MenuItem title="Log Out" icon="icon-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
