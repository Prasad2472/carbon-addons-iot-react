import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
import NotificationOn from '@carbon/icons-react/lib/notification/16';
import HeaderHelp from '@carbon/icons-react/lib/help/16';
import Avatar from '@carbon/icons-react/lib/user--avatar/16';

import Header from './Header';

React.Fragment = ({ children }) => children;

const StyledHeader = styled(Header)`
   {
    .bx--text-truncate--end span {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .bx--header__menu-title[role='menuitem'][aria-expanded='true'] + .bx--header__menu {
      z-index: 6001;
    }
  }
`;

const HeaderProps = {
  user: 'JohnDoe@ibm.com',
  tenant: 'TenantId: Acme',
  url: 'http://localhost:8989',
  className: 'custom-class-name',
  appName: 'Application Name',
  skipto: 'skip',
  i18n: {
    openMenu: 'Open the menu',
  },
  actionItems: [
    {
      label: 'alerts',
      onClick: action('click fired'),
      btnContent: <NotificationOn fill="white" description="Icon" />,
    },
    {
      label: 'help',
      hasHeaderPanel: true,
      btnContent: (
        <HeaderHelp
          fill="white"
          description="Icon"
          className="bx--header__menu-item bx--header__menu-title"
        />
      ),
      childContent: [
        {
          metaData: {
            href: 'http://google.com',
            title: 'this is a title',
            target: '_blank',
            rel: 'noopener noreferrer',
            element: 'a',
          },
          content: 'this is my message to you',
        },
        {
          metaData: {
            onClick: action('do another action'),
            className: 'this',
            element: 'button',
          },
          content: (
            <span>
              JohnDoe@ibm.com
              <Avatar fill="white" description="Icon" />
            </span>
          ),
        },
      ],
    },
    {
      label: 'user',
      btnContent: <Avatar fill="white" description="Icon" />,
      childContent: [
        {
          metaData: {
            href: 'http://google.com',
            title: 'this is a title',
            target: '_blank',
            rel: 'noopener noreferrer',
            element: 'a',
          },
          content: 'this is my message to you',
        },
        {
          metaData: {
            onClick: action('do another action'),
            className: 'this',
            element: 'button',
          },
          content: (
            <span>
              JohnDoe@ibm.com
              <Avatar fill="white" description="Icon" />
            </span>
          ),
        },
      ],
    },
  ],
};

const HeaderMenuProps = {
  user: 'JohnDoe@ibm.com',
  tenant: 'TenantId: Acme',
  url: 'http://localhost:8989',
  className: 'custom-class-name',
  appName: 'Application Name',
  skipto: 'skip',
  actionItems: [
    {
      label: 'user',
      btnContent: <Avatar fill="white" description="Icon" />,
      childContent: [
        {
          metaData: {
            href: 'http://google.com',
            title: 'this is a title',
            target: '_blank',
            rel: 'noopener noreferrer',
            element: 'a',
          },
          content: 'this is my message to you',
        },
        {
          metaData: {
            onClick: action('do another action'),
            className: 'this',
            element: 'button',
          },
          content: (
            <span>
              JohnDoe@ibm.com
              <Avatar fill="white" description="Icon" />
            </span>
          ),
        },
      ],
    },
  ],
};

const headerPanel = {
  className: 'header-panel',

  content: React.forwardRef((props, ref) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" ref={ref} {...props}>
      Header panel content
    </a>
  )),
};

export default {
  title: 'Watson IoT/Header',

  parameters: {
    component: Header,
  },
};

export const HeaderActionButtonsWithDropdowns = () => (
  <div style={{ width: '100%', height: '100vh' }}>
    <StyledHeader
      {...HeaderProps}
      headerPanel={headerPanel}
      appSwitcherLabel={text('AppSwitcher label', 'AppSwitcher')}
    />
    <div id="skip" />
  </div>
);

HeaderActionButtonsWithDropdowns.story = {
  name: 'Header action buttons with dropdowns',
};

export const HeaderSubmenu = () => (
  <div style={{ width: '100%', height: '100vh' }}>
    <StyledHeader {...HeaderMenuProps} />
  </div>
);

HeaderSubmenu.story = {
  name: 'header submenu',
};

export const HeaderNoSubmenu = () => (
  <StyledHeader
    {...HeaderProps}
    actionItems={[
      {
        label: 'user',
        onClick: action('click'),
        btnContent: <Avatar fill="white" description="Icon" />,
      },
    ]}
  />
);

HeaderNoSubmenu.story = {
  name: 'Header no submenu',
};

export const HeaderSubtitle = () => (
  <div style={{ width: '100%', height: '100vh' }}>
    <StyledHeader {...HeaderMenuProps} subtitle="Monitor" />
  </div>
);

HeaderSubtitle.story = {
  name: 'header subtitle',
};
