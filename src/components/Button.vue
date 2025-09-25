<template>
  <button
    :class="['btn', `btn-${variant}`, { 'btn-disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "orange",
    validator: (value) =>
      ["orange", "dark", "outline", "outline2"].includes(value),
  },
  text: {
    type: String,
    default: "Button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
  emit("click", event);
};
</script>

<style scoped>
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 3rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  font-family: var(--text-font);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  background-color: transparent;
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(204, 83, 31, 0.3);
}

/* Turuncu Button */
.btn-orange {
  background-color: var(--secondary-color);
  color: white;
  border-color: var(--secondary-color);
}

.btn-orange:hover {
  background-color: var(--secondary-color-light);
  border-color: var(--secondary-color-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(204, 83, 31, 0.3);
}

.btn-orange:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(204, 83, 31, 0.3);
}

/* Koyu Renk Button */
.btn-dark {
  background-color: var(--title-color);
  color: white;
  border-color: var(--title-color);
}

.btn-dark:hover {
  background-color: #1a2326;
  border-color: #1a2326;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(12, 17, 19, 0.3);
}

.btn-dark:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(12, 17, 19, 0.3);
}

/* Turuncu Outline Button */
.btn-outline {
  background-color: transparent;
  color: var(--secondary-color);
  border-color: var(--secondary-color);
}

.btn-outline:hover {
  background-color: var(--secondary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(204, 83, 31, 0.2);
}

.btn-outline:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(204, 83, 31, 0.2);
}

/* Disabled State */
.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.btn-disabled:hover {
  transform: none;
  box-shadow: none;
}
/* Koyu Renk Outline Button */

.btn-outline2 {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  font-family: var(--text-font);
  font-size: 1rem;
  font-weight: 500;
  padding: 16px 32px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  position: relative;
  overflow: hidden;
}

.btn-outline2:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}
</style>
