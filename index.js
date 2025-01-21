require(["layout", "config/grid"], /**
 * @param {import("./layout")} layout
 * @param {{data: import('dockview-core').SerializedGridviewComponent}} config
 */ function (layout, config) {
  (async () => {
    const container = document.getElementById("container");
    const dock = await layout.attach(container, config);

    dock.sidebar.api.addPanel({
      id: "panel_2",
      title: "test",
      minimumHeight: 100,
      minimumWidth: 100,
    });
    dock.sidebar.api.addPanel({
      id: "panel_3",
      title: "test 2",
      minimumHeight: 100,
      minimumWidth: 100,
    });
    dock.sidebar.api.addPanel({
      id: "panel_4",
      title: "test 3",
      minimumHeight: 100,
      minimumWidth: 100,
    });

    // add an entirely new panel. Example is to the left of sidebar
    // dock.api.addPanel({
    //   id: 'new-paenl',
    //   title: 'NEWEST',
    //   minimumHeight: 100,
    //   minimumWidth: 100,
    //   position: {
    //     direction: 'left',
    //     referencePanel: 'sidebar',
    //   },
    //   location: [2],
    // });
  })();
});
