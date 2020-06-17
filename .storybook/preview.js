import { addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';

import './storybook.css';

addDecorator(themeDecorator);
