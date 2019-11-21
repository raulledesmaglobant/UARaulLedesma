import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { render } from 'react-testing-library';

import CommonList from '../index';
import configureStore from '../../../configureStore';

describe('<CommonList />', () => {
  it('should render the loading indicator when its loading', () => {
    const { container } = render(<CommonList loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <CommonList loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    );
    expect(queryByText(/Something went wrong/)).not.toBeNull();
  });

  it('should render the repositories if loading was successful', () => {
    const store = configureStore(
      { global: { currentUser: 'mxstbr' } },
      browserHistory,
    );
    const repos = [
      {
        owner: {
          login: 'mxstbr',
        },
        html_url: 'https://github.com/react-boilerplate/react-boilerplate',
        name: 'react-boilerplate',
        open_issues_count: 20,
        full_name: 'react-boilerplate/react-boilerplate',
      },
    ];
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <CommonList repos={repos} error={false} />
        </IntlProvider>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render anything if nothing interesting is provided', () => {
    const { container } = render(
      <CommonList repos={false} error={false} loading={false} />,
    );

    expect(container.firstChild).toBeNull();
  });
});
