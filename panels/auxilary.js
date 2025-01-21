define("panels/auxilary", ["dockview-core", "panels/default", "panels/tab", "exports"], /**
 *
 * @param {import('dockview-core')} DockView
 * @param {import("./default")} DefaultPanel
 * @param {import("./tab")} DefaultTab
 */
function (DockView, { DefaultPanel }, { DefaultTab }, exports) {
  /** @returns {{api: import('dockview-core').PaneviewApi, dispose: () => void;}} */
  function attach(parent) {
    const element = document.createElement("div");
    element.className = "dockview-theme-vs";
    element.style.height = "100%";
    element.style.width = "100%";

    const api = DockView.createPaneview(element, {
      createHeaderComponent: (options) => undefined,
      createComponent: (options) => {
        switch (options.name) {
          case "default":
            return new DefaultPanel();
          default:
            return new DefaultTab();
        }
      },
    });

    parent.appendChild(element);

    return {
      api,
      dispose: () => {
        api.dispose();
        element.remove();
      },
    };
  }

  exports.attach = attach;
});
