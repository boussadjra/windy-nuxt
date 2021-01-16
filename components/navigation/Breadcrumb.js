export default {
  name: 'breadcrumb',
  props: {
    path: {
      type: String,
      default: '',
    },
  },

  render(h) {
    let vm = this;
    var getChildrenTextContent = function(children) {
      return children
        .map(function(node) {
          return node.children ? getChildrenTextContent(node.children) : node.text;
        })
        .join('');
    };
    function renderCrumb(token, index, length) {
      let renderedToken = typeof token === 'string' ? h('span', token) : token;

      if (index < length - 1) {
        return [renderedToken, h('span', vm.$scopedSlots.separator ? vm.$scopedSlots.separator() : '/')];
      } else {
        return renderedToken;
      }
    }
    function customSlots() {
      if (vm.path) {
        let pathTokens = vm.path.split('/').filter(token => token);

        return pathTokens.map((token, index) => {
          return renderCrumb(token, index, pathTokens.length);
        });
      } else {
        let defaultSlots = vm.$slots.default ? vm.$slots.default : [];


        return defaultSlots.map((slot, index) => {
          if (slot.children) {
            return renderCrumb(getChildrenTextContent(slot.children), index, defaultSlots.length);
          } else {
            return slot
          }
        });
      }
    }
    return h(
      'div',
      {
        class:
          'px-4 py-4 min-w w-full rounded flex text-gray-600 space-x-2 items-center bg-gray-100 dark:bg-gray-500 dark:text-gray-100 min-w-max',
      },
      customSlots()
    );
  },
};
