// https://github.com/Kitware/VolView/blob/main/src/main.js

import vtkProxyManager from '@kitware/vtk.js/Proxy/Core/ProxyManager';

import proxyConfig from 'proxyConfig';

const proxyManager = vtkProxyManager.newInstance({ proxyConfig });