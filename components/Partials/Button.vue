<template>
  <button class="custom-btn btn" @click="Click">{{ name }}</button>
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
          "--width": '150px',
          "--height": '45px',
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
.custom-btn {
  width: var(--width);
  height: var(--height);
  padding: var(--pady) var(--padx);
  color: var(--color);
  border: 2px solid #000;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.btn {
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn:hover {
  background: var(--hover-background);
  color: var(--hover-color);
}

.btn:before {
  position: absolute;
  content: '';
  display: inline-block;
  top: -180px;
  left: 0;
  width: 30px;
  height: 100%;
  background-color: #fff;
  animation: shiny-btn1 3s ease-in-out infinite;
}

.btn:active {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .3),
  -4px -4px 6px 0 rgba(116, 125, 136, .2),
  inset -4px -4px 6px 0 rgba(255, 255, 255, .2),
  inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
}


@-webkit-keyframes shiny-btn1 {
  0% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0;
  }
  80% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0.5;
  }
  81% {
    -webkit-transform: scale(4) rotate(45deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(50) rotate(45deg);
    opacity: 0;
  }
}


</style>
