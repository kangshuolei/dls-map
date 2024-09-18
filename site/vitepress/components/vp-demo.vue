<script setup lang="ts">
import { computed, getCurrentInstance, ref, toRef, onMounted } from 'vue';
import { isClient, useClipboard, useToggle } from '@vueuse/core';
import {
  CaretTop,
  FullScreen,
  CopyDocument,
  Reading,
  ChatSquare,
  Edit,
} from '@element-plus/icons-vue';
import { useSourceCode } from '../composables/source-code';
import { usePlayground } from '../composables/use-playground';
import SourceCode from './demo/vp-source-code.vue';
// import 'uno.css';
import {
  ElDivider,
  ElTooltip,
  ElIcon,
  ElCollapseTransition,
  ElMessage,
} from 'element-plus';

const props = defineProps<{
  source: string;
  path: string;
  rawSource: string;
  description: string;
}>();

const vm = getCurrentInstance()!;

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
});

const [sourceVisible, toggleSourceVisible] = useToggle();

const demoSourceUrl = useSourceCode(toRef(props, 'path'));

const sourceCodeRef = ref<HTMLButtonElement>();

const locale = [];
const decodedDescription = computed(() =>
  decodeURIComponent(props.description)
);

const onPlaygroundClick = () => {
  ElMessage({
    type: 'warning',
    message: '开法中，敬请期待！',
  });
  // const { link } = usePlayground(props.rawSource);
  // if (!isClient) return;
  // window.open(link);
};

const onSourceVisibleKeydown = (e: KeyboardEvent) => {
  if (['Enter', 'Space'].includes(e.code)) {
    e.preventDefault();
    toggleSourceVisible(false);
    sourceCodeRef.value?.focus();
  }
};

const copyCode = async () => {
  if (!isSupported) {
    ElMessage({
      type: 'error',
      message: '暂不支持复制！',
    });
  }
  try {
    await copy();
    ElMessage({
      type: 'success',
      message: '复制成功',
    });
  } catch (e: any) {
    ElMessage({
      type: 'error',
      message: e.message,
    });
  }
};
</script>

<template>
  <ClientOnly>
    <div text="sm" m="y-4" v-html="decodedDescription" />
    <div class="example">
      <div class="example-showcase">
        <slot name="source" />
      </div>

      <ElDivider class="m-0" />

      <div class="op-btns">
        <ElTooltip
          content="前往 codeopen.io 运行代码"
          :show-arrow="false"
          :trigger="['hover', 'focus']"
          :trigger-keys="[]"
        >
          <ElIcon
            :size="16"
            :aria-label="1"
            tabindex="0"
            role="link"
            class="op-btn"
            @click="onPlaygroundClick"
            @keydown.prevent.enter="onPlaygroundClick"
            @keydown.prevent.space="onPlaygroundClick"
          >
            <Edit />
          </ElIcon>
        </ElTooltip>
        <ElTooltip
          :content="'Gitee地址'"
          :show-arrow="false"
          :trigger="['hover', 'focus']"
          :trigger-keys="[]"
        >
          <ElIcon :size="16" class="op-btn github" style="color: #606266">
            <a
              :href="demoSourceUrl"
              :aria-label="locale['edit-on-github']"
              rel="noreferrer noopener"
              target="_blank"
            >
              <ChatSquare />
            </a>
          </ElIcon>
        </ElTooltip>
        <ElTooltip
          :content="'复制代码'"
          :show-arrow="false"
          :trigger="['hover', 'focus']"
          :trigger-keys="[]"
        >
          <ElIcon
            :size="16"
            :aria-label="locale['copy-code']"
            class="op-btn"
            tabindex="0"
            role="button"
            @click="copyCode"
            @keydown.prevent.enter="copyCode"
            @keydown.prevent.space="copyCode"
          >
            <CopyDocument />
          </ElIcon>
        </ElTooltip>
        <ElTooltip
          :content="'查看代码'"
          :show-arrow="false"
          :trigger="['hover', 'focus']"
          :trigger-keys="[]"
        >
          <button
            ref="sourceCodeRef"
            :aria-label="
              sourceVisible ? locale['hide-source'] : locale['view-source']
            "
            class="reset-btn el-icon op-btn"
            @click="toggleSourceVisible()"
          >
            <ElIcon :size="16">
              <Reading />
            </ElIcon>
          </button>
        </ElTooltip>
      </div>

      <ElCollapseTransition>
        <SourceCode :visible="sourceVisible" :source="source" />
      </ElCollapseTransition>

      <Transition name="el-fade-in-linear">
        <div
          v-show="sourceVisible"
          class="example-float-control"
          tabindex="0"
          role="button"
          @click="toggleSourceVisible(false)"
          @keydown="onSourceVisibleKeydown"
        >
          <ElIcon class="op-btn" :size="16">
            <CaretTop />
          </ElIcon>
          <span>{{ '隐藏源代码' }}</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<style scoped lang="less">
:deep(.el-divider--horizontal) {
  margin: 24px 0 0 0 !important;
}
.example {
  border: 1px solid var(--el-border-color);
  border-radius: var(--el-border-radius-base);
  padding: 1rem 1rem 0 1rem;

  .example-showcase {
    position: relative;
    width: 100%;
    height: 500px;
    //padding: 1rem;
    margin: 0.5px;
    background-color: var(--el-bg-color);
  }
  .example-showcase canvas {
    height: 500px !important;
  }

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
      &:hover {
        color: var(--el-text-color-primary);
      }
    }

    .op-btn {
      //width: 18px;
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--el-text-color-secondary);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--el-text-color-secondary);

        &:hover {
          color: var(--el-text-color-primary);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--el-border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--el-bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    .op-btn {
      width: 18px;
    }
    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>
