define("panels/grid", ["dockview-core", "exports"], /**
 * @param {import('dockview-core')} DockView
 * @param {*} exports
 */
function (DockView, exports) {
  class DefaultGridPanel extends DockView.GridviewPanel {
    /**
     * @param {string} id
     * @param {string} component
     * @param {object} options
     * @param {object} renderer
     */
    constructor(id, component, options, renderer) {
      super(id, component, options);
      this.renderer = renderer;
      this.options = options;
    }
    /**
     *
     * @returns {import('dockview-core').IFrameworkPart}
     */
    getComponent() {
      const element = this.renderer && this.renderer(this.options);
      const iFace = {
        /** @param {import('dockview-core').Parameters} params */
        update: (params) => {},
        dispose: () => {
          element && element.remove();
        },
      };
      if (element) {
        this.element.appendChild(element);
      }
      return { ...iFace };
    }
  }
  exports.DefaultGridPanel = DefaultGridPanel;
});
