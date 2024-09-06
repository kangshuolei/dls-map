import mdContainer from 'markdown-it-container';
import createDemoContainer from '../plugins/demo';

export const mdPlugin = (md: any) => {
  md.use(mdContainer, 'demo', createDemoContainer(md));
};
