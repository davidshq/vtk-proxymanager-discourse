// See: https://github.com/Kitware/VolView/blob/main/src/vtk/proxy.js
import '@kitware/vtk.js/Rendering/Profiles/Geometry';

import vtkProxyManager from '@kitware/vtk.js/Proxy/Core/ProxyManager';
import vtkFullScreenRenderWindow from '@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow';
import vtkConeSource from '@kitware/vtk.js/Filters/Sources/ConeSource';
import proxyConfiguration from './proxyConfiguration';

// Render window
const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance();
const renderer = fullScreenRenderer.getRenderer();
const renderWindow = fullScreenRenderer.getRenderWindow();

// Create cone
const coneSource = vtkConeSource.newInstance({ height: 1.0 });

// Create and initialize our ProxyManager
const proxyManager = vtkProxyManager.newInstance({ proxyConfiguration });

// Create sourceProxy
let sourceProxy = proxyManager.createProxy('Sources', 'TrivialProducer');
sourceProxy.setInputData(coneSource);

// Create our ViewProxy
const viewProxy = proxyManager.createProxy('Views', 'View3D');

// Use a new DOM element as container for the ViewProxy
const container = document.createElement('div');

document.body.appendChild(container);
viewProxy.setContainer(container);

const rep = proxyManager.getRepresentation(sourceProxy, viewProxy);

let views = proxyManager.getViews();
let view = null;
view = views[0];
view.getRepresentation();
view.render(true);