define("panels/grid", ["dockview-core", "exports"], /**
 * @param {import('dockview-core')} DockView
 * @param {*} exports
 */
function (DockView, exports) {
  class DefaultGridPanel extends DockView.GridviewPanel {
    /**
     * @param {string} id
     * @param {string} options
     * @param {object} component
     */
    constructor(id, options, component) {
      super(id, options);
      this.component = component;
    }

    /**
     *
     * @returns {import('dockview-core').IFrameworkPart}
     */
    getComponent() {
      const iFace = {
        /** @param {import('dockview-core').Parameters} params */
        update: (params) => {},
        dispose: () => {},
      };
      const element = this.component && this.component();
      if (element) {
        this.element.appendChild(element);
      }
      return { ...iFace };
      // return new ReactPart(
      //     this.element,
      //     this.reactPortalStore,
      //     this.reactComponent,
      //     {
      //         params: this._params?.params ?? {},
      //         api: this.api,
      //         // TODO: fix casting hack
      //         containerApi: new GridviewApi(
      //             (this._params as GridviewInitParameters)
      //                 .accessor as GridviewComponent
      //         ),
      //     }
      // );
    }
  }
  exports.DefaultGridPanel = DefaultGridPanel;
});
