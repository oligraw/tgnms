/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @format
 * @flow
 */

import {mockNetworkConfig} from '@fbcnms/tg-nms/app/tests/data/NetworkConfig';
import {renderHook} from '@testing-library/react-hooks';
import {useNodeConfig} from '../useNodeConfig';

jest.mock('@fbcnms/tg-nms/app/contexts/NetworkContext', () => ({
  useNetworkContext: () => ({
    networkName: 'testNetwork',
    networkConfig: mockNetworkConfig(),
  }),
}));

describe('useNodeConfig', () => {
  test('calling useNodeConfig returns initial loading', () => {
    const {result} = renderHook(() => useNodeConfig({nodeName: 'testNode'}));
    expect(result.current.loading).toBe(true);
  });
});
