export const variants = `
import Button from 'ds-ui.kit/Button';

<Button variant="primary" onClick={() => {}}>Primary</Button>
<Button variant="secondary" onClick={() => {}}>Secondary</Button>
<Button variant="danger" onClick={() => {}}>Danger</Button>
<Button variant="warning" onClick={() => {}}>Warning</Button>
<Button variant="success" onClick={() => {}}>Success</Button>
`;

export const sizes = `
import Button from 'ds-ui.kit/Button';

<Button size="small" onClick={() => {}}>Small</Button>
<Button size="medium" onClick={() => {}}>Medium</Button>
<Button size="large" onClick={() => {}}>Large</Button>
`;

export const icon = `
import Button from 'ds-ui.kit/Button';
import arrowRightIcon from 'ds-ui.kit/icons/arrow-right.svg';
import removeIcon from 'ds-ui.kit/icons/remove.svg';
import searchIcon from 'ds-ui.kit/icons/search.svg';
import calendarIcon from 'ds-ui.kit/icons/calendar.svg';

<Button icon={arrowRightIcon} onClick={() => {}}>Arrow Icon</Button>
<Button variant="warning" icon={calendarIcon} onClick={() => {}}>Choose date</Button>
<Button variant="danger" icon={removeIcon} onClick={() => {}}>Remove Icon</Button>
<Button variant="secondary" icon={searchIcon} onClick={() => {}}>Search Icon</Button>
`;

export const reverse = `
import Button from 'ds-ui.kit/Button';
import arrowRightIcon from 'ds-ui.kit/icons/arrow-right.svg';
import removeIcon from 'ds-ui.kit/icons/remove.svg';
import searchIcon from 'ds-ui.kit/icons/search.svg';
import calendarIcon from 'ds-ui.kit/icons/calendar.svg';

<Button reverse icon={arrowRightIcon} onClick={() => {}}>Arrow Icon</Button>
<Button reverse variant="warning" icon={calendarIcon} onClick={() => {}}>Choose date</Button>
<Button reverse variant="danger" icon={removeIcon} onClick={() => {}}>Remove Icon</Button>
<Button reverse variant="secondary" icon={searchIcon} onClick={() => {}}>Search Icon</Button>
`;

export const shadowed = `
import Button from 'ds-ui.kit/Button';

<Button shadowed onClick={() => {}}>Primary</Button>
<Button shadowed variant="secondary" onClick={() => {}}>Secondary</Button>
<Button shadowed variant="danger" onClick={() => {}}>Danger</Button>
<Button shadowed variant="warning" onClick={() => {}}>Warning</Button>
`;
