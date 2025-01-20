define('panels/auxilary', ['dockview-core', 'panels/default', 'panels/tab', 'exports'],
  /**
   *
   * @param {import('dockview-core')} DockView
   * @param {import("./panels/default")} DefaultPanel
   * @param {import("./panels/tab")} DefaultTab
   */
  function(DockView, {DefaultPanel}, {DefaultTab}, exports) {


    /** @returns {{dispose: () => void;}} */
    function attach(parent) {
      const element = document.createElement('div');
      element.className = 'dockview-theme-vs';
      element.style.height = '100%';
      element.style.width = '100%';

      const west = DockView.createPaneview(element, {
        createHeaderComponent: (options) => undefined,
        createComponent: (options) => {
          switch (options.name) {
            case 'default':
              return new DefaultPanel();
            default:
              return new DefaultTab();
          }
        },
      })
      west.addPanel({
        id: 'panel_2',
        title: 'test',
        minimumHeight: 100,
        minimumWidth: 100,
      });
      west.addPanel({
        id: 'panel_3',
        title: 'test 2',
        minimumHeight: 100,
        minimumWidth: 100,
      });
      west.addPanel({
        id: 'panel_4',
        title: 'test 3',
        minimumHeight: 100,
        minimumWidth: 100,
      });
      parent.appendChild(element);

      window.DockView = west;
      return {
          dispose: () => {
              west.dispose();
              element.remove();
          },
      };

    }


    // const container = document.getElementById('container');
    // attach(container)
    exports.attach = attach;

  }
);
