/**
 * Defines the grid layout. This is a serialized configuration of
 * the dockview api. It creates a "typical" editor layout.
 */
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
                    id: 'header',
                    component: 'header',
                    minimumHeight: 30,
                    maximumHeight: 30,
                },
            },
            {
                type: 'leaf',
                data: {
                    id: 'toolbar',
                    component: 'header',
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
                        id: 'sidebar',
                        component: 'auxilary',
                        minimumWidth: 30,
                        maximumWidth: 200,
                    },
                },
                {
                    type: 'leaf',
                    size: 100,
                    data: {
                        id: 'main',
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
                        id: 'right-expander',
                        component: 'auxilary',
                        // snap: true,
                        minimumWidth: 100,
                    },
                },
              ],
            },
            {
              type: 'leaf',
              data: {
                id: 'footer',
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
