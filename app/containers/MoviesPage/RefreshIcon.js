import styled from 'styled-components';

import NormalRefreshIcon from 'components/RefreshIcon';

const RefreshIcon = styled(NormalRefreshIcon)`
  fill: #ccc !important;
  margin-right: 0.25em;
  cursor: pointer;
  position: relative;
  float: right;

  &:hover {
    fill: #41addd !important;
    color: white;
  }
`;

export default RefreshIcon;
