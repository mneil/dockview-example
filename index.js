
require(['dockview-core', 'panels/grid', 'auxilary'],
  /**
   * @param {import("dockview-core")} DockView
   * @param {import("./panels/grid")} a
   * @param {import("./panels/tab")} auxilary
   */
  function(DockView, {DefaultGridPanel}, auxilary) {


    /** @returns {{dispose: () => void;}} */
    function attach(parent) {
      const element = document.createElement('div');
      element.className = 'dockview-theme-vs';
      element.style.height = '100%';
      element.style.width = '100%';

      const components = {
        default: (props) => {

          // return (
          //   <div style={{ padding: '20px', color: 'white' }}>
          //       {props.params.title}
          //   </div>
          // );
        },
        header: (props) => {
          const element = document.createElement('div');
          element.style.display = 'flex';
          element.style.justifyContent = 'center';
          element.style.alignItems = 'center';
          element.style.color = 'black';
          element.style.height = '100%';

          const titleElement = document.createElement('span');
          const paramsElement = document.createElement('span');

          titleElement.innerHTML = "TEST"

          element.appendChild(titleElement);
          return element;
          // return (
          //   <div style={{ backgroundColor: '#3C3C3C', height: '100%' }}></div>
          // );
        },
        footer: (props) => {
          // return (
          //   <div style={{ backgroundColor: '#007ACC', height: '100%' }}></div>
          // );
        },
        sidebar: (props) => {
          const element = document.createElement('div');
          element.style.height = '100%';
          element.style.width = '100%';
          auxilary.attach(element);
          return element;
          // return (
          //   <div style={{ backgroundColor: '#333333', height: '100%' }}></div>
          // );
        },
        'right-expander': (props) => {
          // return (
          //   <div style={{ backgroundColor: '#252526', height: '100%' }}></div>
          // );
        },
        main: (props) => {
          // return (
          //   <div
          //     style={{
          //         backgroundColor: '#1E1E1E',
          //         height: '100%',
          //         color: 'white',
          //         display: 'flex',
          //         justifyContent: 'center',
          //         flexDirection: 'column',
          //         fontSize: '0.8em',
          //         padding: '10px',
          //     }}
          //   >
          //     <div>{'This entire mockup is built using a gridview.'}</div>

          //     <div>{`Press 'Ctrl+B' to toggle the left sidebar and 'Ctrl+Alt+B' to toggle the right sidebar or manually resize them.`}</div>
          //   </div>
          // );
        },
      };

      const api = DockView.createGridview(element, {
        createHeaderComponent: (options) => undefined,
        createComponent: (options) => {
          // return new ReactGridPanelView(
          //   options.id,
          //   options.name,
          //   props.components[options.name],
          //   { addPortal }
          // );

          switch (options.name) {
            case 'default':
              return new DefaultGridPanel(options.id, '');
            default:
              return new DefaultGridPanel(options.id, '', components[options.name]);
          }
        },
      });

      // api.addPanel({
      //   id: 'header',
      //   name: 'header',
      //   title: 'test',
      //   minimumHeight: 100,
      //   minimumWidth: 100,
      // });


      /** @type {import('dockview-core').SerializedGridviewComponent} */
      const serializedGridview = {
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

      api.fromJSON(serializedGridview);

      parent.appendChild(element);
      globalThis.DockView = api;
      return {
          dispose: () => {
            api.dispose();
            element.remove();
          },
      };
    }


    const container = document.getElementById('container');
    attach(container)

  }
);
