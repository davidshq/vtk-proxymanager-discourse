// See: https://github.com/KitwareMedical/paraview-medical/blob/master/src/vtk/proxy.js
// Secondarily: https://github.com/OpenImaging/miqa/blob/master/web_client/src/vtk/proxy.js
import vtkProxySource from '@kitware/vtk.js/Proxy/Core/SourceProxy';
import vtkView from '@kitware/vtk.js/Proxy/Core/ViewProxy';
import vtkGeometryRepresentationProxy from '@kitware/vtk.js/Proxy/Representations/GeometryRepresentationProxy';

import ConfigUtils from './configUtils';
import proxyViewRepresentationMapping from './proxyViewRepresentationMapping';

const { createProxyDefinition, activateOnCreate, createDefaultView } = ConfigUtils;

export default {
  definitions: {
    Sources: {
      TrivialProducer: activateOnCreate(createProxyDefinition(vtkProxySource)),
    },
    Representations: {
      Geometry: createProxyDefinition(
        vtkGeometryRepresentationProxy,
      ),
    },
    Views: {
      View3D: createDefaultView(vtkView),
    },
  },
  representations: {
    View3D: proxyViewRepresentationMapping.View3D,
  },
  filters: {},
};