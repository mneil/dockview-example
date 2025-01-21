define('layout', ["dockview-core", "panels/grid", "panels/auxilary", "exports"],
/**
 * @typedef {object & Record<string, Awaiter>} Attach
 * @property {import('dockview-core').GridviewApi} api
 * @property {() => void} dispose
 * *
 * @typedef {import('dockview-core').SerializedGridObject<import('dockview-core').GridPanelViewState>} SerializedGridPanelViewState
 *
 * @typedef {{[key: string]: Promise<{id: string, element: HTMLElement | {api: import('dockview-core').PaneviewApi, dispose: () => void}}> }} Awaiter
 *
 *
 * @param {import("dockview-core")} DockView
 * @param {import("./panels/grid")} a
 * @param {import("./panels/auxilary")} auxilary
 * @param {Object} exports
 */
function (DockView, { DefaultGridPanel }, auxilary, exports) {
  /**
   * @param {HTMLElement} parent
   * @param {{data: import('dockview-core').SerializedGridviewComponent}} config
   * @returns {Promise<Attach>}
   */
  async function attach(parent, config) {
    let resolvers = {};
    /** @type {Awaiter} */
    let awaiters = {};
    /**
     *
     * @param {SerializedGridPanelViewState} node
     * @returns
     */
    const makeResolvers = (node) => {
      if(node.type === 'leaf') {
        const data = /** @type import('dockview-core').GridPanelViewState */(node.data)
        awaiters[data.id] = new Promise((resolve) => {
          resolvers[data.id] = resolve
        });
        return;
      }
      if(node.type === 'branch') {
        const data = /** @type SerializedGridPanelViewState[] */(node.data)
        data.forEach(makeResolvers);
        return;
      }
      throw new Error("Unknown config node type")
    }
    const data = /** @type SerializedGridPanelViewState[] */(config.data.grid.root.data)
    data.forEach(makeResolvers)

    /**
     * Components map to the config/grid components. Choose a component to render in the grid
     * panel in the config from this list.
     */
    const components = {
      header: (props) => {
        const element = document.createElement("div");
        element.style.display = "flex";
        element.style.justifyContent = "center";
        element.style.alignItems = "center";
        element.style.color = "black";
        element.style.height = "100%";

        const titleElement = document.createElement("span");
        titleElement.innerHTML = "TEST";

        element.appendChild(titleElement);
        resolvers[props.id]({id: props.id, element})
        return element;
      },
      footer: (props) => {
        const element = document.createElement("div");
        resolvers[props.id]({id: props.id, element})
        return element;
      },
      auxilary: (props) => {
        const element = document.createElement("div");
        element.style.height = "100%";
        element.style.width = "100%";
        const panel = auxilary.attach(element);
        resolvers[props.id]({id: props.id, element: panel})
        return element;
      },
      main: (props) => {
        const element = document.createElement("div");
        resolvers[props.id]({id: props.id, element})
        return element;
      },
    };

    const element = document.createElement("div");
    element.className = "dockview-theme-vs";
    element.style.height = "100%";
    element.style.width = "100%";

    const api = DockView.createGridview(element, {
      createComponent: (options) => {
        switch (options.name) {
          case "default":
            return new DefaultGridPanel(options.id, "", options, components[options.name]);
          default:
            return new DefaultGridPanel(options.id, "", options, components[options.name]);
        }
      },
      orientation: DockView.Orientation.VERTICAL,
    });

    api.fromJSON(config.data);

    parent.appendChild(element);

    const out = {
      api,
      dispose: () => {
        api.dispose();
        element.remove();
      },
    };
    const ready = await Promise.all(Object.values(awaiters));
    ready.forEach((resolved) => {
      out[resolved.id] = resolved.element;
    });

    return out;
  }



  exports.attach = attach;
});
