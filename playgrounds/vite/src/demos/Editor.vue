<script setup="props" lang="ts">
import { useMotions } from '@goede/motion'
import { computed, ref, watch } from 'vue'
import DemoBox from '../components/DemoBox.vue'
import basic from '../examples/basic'

const motions = useMotions()

const input = ref<string>('0')

const codeText = computed(() => basic(input.value))

watch(input, (newVal) => {
  if (motions.editor) {
    motions.editor.apply({
      rotate: Number.parseInt(newVal),
    })
  }
})

function replay() {
  input.value = '0'
}
</script>

<template>
  <DemoBox :text="codeText" @replay="replay">
    <template #demoElement>
      <div
        v-motion="'editor'"
        :initial="{
          y: 200,
          opacity: 0,
          rotate: 0,
          scale: 1,
        }"
        :enter="{
          y: 0,
          rotate: 0,
          opacity: 1,
          scale: 1,
        }"
        :hovered="{
          scale: 1.2,
        }"
        :tapped="{
          scale: 0.8,
        }"
        class="h-24 w-24 cursor-pointer rounded-3xl border-8 border-indigo-400 bg-indigo-500 shadow-xl"
      />
    </template>

    <div>
      <input v-model="input" type="range" max="360" min="0" step="1">
    </div>
  </DemoBox>
</template>
