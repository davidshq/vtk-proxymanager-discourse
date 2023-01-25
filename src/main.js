// https://github.com/Kitware/VolView/blob/main/src/main.js

import vtkProxyManager from '@kitware/vtk.js/Proxy/Core/ProxyManager';

import proxyConfig from 'proxyConfig';

const proxyManager = vtkProxyManager.newInstance({ proxyConfig });

source = proxyManager.createProxy('Sources', 'TrivialProducer', { name: 'myImage' });
source.setInputData(myImageData);
view = proxyManager.createProxy('Views', 'View3D', { name: 'my3DView' });
view.setContainer(someHTMLElement);
rep = proxyManager.getRepresentation(source, view);
view.addRepresentation(rep);
