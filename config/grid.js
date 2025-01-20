define('config/grid', ['dockview-core', 'exports'],
  /**
   * @param {import('dockview-core')} DockView
   * @param {*} exports
   */
  function(DockView, exports) {

    /** @type {import('dockview-core').SerializedGridviewComponent} */
    exports.data = {
      grid: {
        root: {
          type: 'branch',
          data: [
            {
                type: 'leaf',
                data: {
                    id: 'header-id',
                    component: 'header',
                    minimumHeight: 30,
                    maximumHeight: 30,
                },
            },
            {
                type: 'leaf',
                data: {
                    id: 'toolbar-id',
                    component: 'toolbar',
                    minimumHeight: 30,
                    maximumHeight: 30,
                },
            },
            {
              type: 'branch',
              data: [
                {
                    type: 'leaf',
                    data: {
                        id: 'sidebar-id',
                        component: 'sidebar',
                        minimumWidth: 30,
                        maximumWidth: 200,
                    },
                },
                {
                    type: 'leaf',
                    size: 100,
                    data: {
                        id: 'main-id',
                        component: 'main',
                        minimumWidth: 100,
                        minimumHeight: 100,
                        /**
                         * it's important to give the main content a high layout priority as we want
                         * the main layout to have priority when allocating new space
                         */
                        priority: DockView.LayoutPriority.High,
                    },
                },
                {
                    type: 'leaf',
                    data: {
                        id: 'right-expander-id',
                        component: 'right-expander',
                        // snap: true,
                        minimumWidth: 100,
                    },
                },
              ],
            },
            {
              type: 'leaf',
              data: {
                id: 'footer-id',
                component: 'footer',
                minimumHeight: 30,
                maximumHeight: 30,
              },
            },
          ],
        },
        width: 1000,
        height: 1000,
        orientation: DockView.Orientation.VERTICAL,
      },
    };

  });
