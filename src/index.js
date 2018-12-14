import DatoCmsPlugin from 'datocms-plugins-sdk'
import React from 'react'
import { render } from 'react-dom'

import App from './App';

DatoCmsPlugin.init().then(plugin => {
    plugin.startAutoResizer();

    render(<App modelName={plugin.itemType.attributes.api_key} />, document.body);
});
