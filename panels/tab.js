define('panels/tab', function(require, exports, module) {

  /**
   * @typedef {import('dockview-core').ITabRenderer} ITabRenderer
   * @implements {ITabRenderer}
   */
  class DefaultTab {
    _element;
    _title;

    get element() {
        return this._element;
    }

    constructor() {
        this._element = document.createElement('div');
        this._element.className = 'my-custom-tab';

        this._title = document.createElement('span');

        const spacer = document.createElement('span');
        spacer.style.flexGrow = '1';

        const btn1 = document.createElement('span');
        btn1.className = 'my-custom-tab-icon material-symbols-outlined';
        btn1.textContent = 'minimize';

        const btn2 = document.createElement('span');
        btn2.className = 'my-custom-tab-icon material-symbols-outlined';
        btn2.textContent = 'maximize';

        const btn3 = document.createElement('span');
        btn3.className = 'my-custom-tab-icon material-symbols-outlined';
        btn3.textContent = 'close';

        this._element.appendChild(this._title);
        this._element.appendChild(spacer);
        this._element.appendChild(btn1);
        this._element.appendChild(btn2);
        this._element.appendChild(btn3);
    }
    /** @param {import('dockview-core').IGroupPanelInitParameters} params */
    init(params) {
        this.render(params.params);
    }
    /** @param {import('dockview-core').PanelUpdateEvent<import('dockview-core').Parameters>} event */
    update(event) {
        this.render(event.params);
    }
    /** @param {Record<string, any>} params */
    render(params) {
        this._title = params.title;
    }
  }


  exports.DefaultTab = DefaultTab;
})
