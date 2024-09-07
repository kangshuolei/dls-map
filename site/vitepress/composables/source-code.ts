import { computed } from 'vue';
import { useData } from 'vitepress';
import { createGitHubUrl } from '../utils';

import type { Ref } from 'vue';

export const useSourceCode = (path: Ref<string>) => {
  const { theme } = useData();
  console.log('theme', theme.value);

  const demoUrl = computed(() => {
    const {
      repo,
      docsDir = 'dls-map',
      docsBranch = 'master',
      docsRepo = repo,
    } = theme.value;
    console.log();
    return createGitHubUrl(repo, docsDir, docsBranch, path.value);
  });

  return demoUrl;
};
