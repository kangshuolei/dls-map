import mdContainer from 'markdown-it-container';
import createDemoContainer from '../plugins/demo';
import tableWrapper from '../plugins/table-wrapper';
import externalLinkIcon from '../plugins/external-link-icon';
import { ApiTableContainer } from '../plugins/api-table';
import tooltip from '../plugins/tooltip';
import tag from '../plugins/tag';
import headers from '../plugins/headers';

export const mdPlugin = (md: any) => {
  md.use(mdContainer, 'demo', createDemoContainer(md));
  md.use(tableWrapper);
  md.use(headers);
  md.use(externalLinkIcon);
  md.use(tooltip);
  md.use(tag);
  md.use(ApiTableContainer);
};
