// https://github.com/Kitware/VolView/blob/main/src/main.js

import vtkProxyManager from '@kitware/vtk.js/Proxy/Core/ProxyManager';
import view from '@kitware/vtk.js/Proxy/Core/ProxyManager/view';

import proxyConfig from 'proxyConfig';

// Essentially same as forum example
const proxyManager = vtkProxyManager.newInstance({ proxyConfig });


source = proxyManager.createProxy('Sources', 'TrivialProducer', { name: 'myImage' });
source.setInputData(myImageData);
view = proxyManager.createProxy('Views', 'View3D', { name: 'my3DView' });

// From animation example, creates and assigns container for view
const container = document.createElement('div');
view.setContainer(container);
// animation has viewProxy.resize(), equivalent to view.resize(), why?
// animation has viewProxy.resetCamera(), why?


rep = proxyManager.getRepresentation(source, view);
view.addRepresentation(rep);
