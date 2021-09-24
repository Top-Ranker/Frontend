<template>
  <div class="button" @click="Click">
    <a :style="styleObject" >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {{ name }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    name: {
      type: String,
      default: 'Button'
    },
    styleObject: {
      type: Object,
      required: false,
      default() {
        return {
          "--color": '#000',
          "--pady": '20px',
          "--padx": '35px',
          "--hover-background": '#000',
          "--hover-color": '#fff',
        }
      }
    }
  },
  methods: {
    Click() {
      console.log('clicked')
      this.$emit('click')
    }
  },
}
</script>
<style lang="css" scoped>

a {
  position: relative;
  display: inline-block;
  padding: var(--pady) var(--padx);
  color: var(--color);
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 3px;
  overflow: hidden;
}

a:hover {
  background: var(--hover-background);
  color: var(--hover-color);
  box-shadow: 0 0 5px 3px var(--hover-background);
  -webkit-box-reflect: below 1px linear-gradient(transparent, var(--hover-background));
}

a span {
  position: absolute;
  display: block;
}

a span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--hover-background));
  animation: animate1 1s linear infinite;
}

@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, transparent, var(--hover-background));
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

a span:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(270deg, transparent, var(--hover-background));
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(360deg, transparent, var(--hover-background));
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
