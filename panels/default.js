define('panels/default', function(require, exports, module) {
    /**
     * @typedef {import('dockview-core').IContentRenderer} IContentRenderer
     * @implements {IContentRenderer}
     */
    class DefaultPanel {
    _element;
    _titleElement;
    _paramsElement;

    get element() {
        return this._element;
    }

    constructor() {
        this._element = document.createElement('div');
        this._element.style.display = 'flex';
        this._element.style.justifyContent = 'center';
        this._element.style.alignItems = 'center';
        this._element.style.color = 'white';
        this._element.style.height = '100%';

        this._titleElement = document.createElement('span');
        this._paramsElement = document.createElement('span');

        this._element.appendChild(this._titleElement);
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
        this._titleElement.textContent = params.title;

        if (params.x) {
            if (!this._paramsElement.parentElement) {
                this._element.appendChild(this._paramsElement);
            }
            this._paramsElement.textContent = params.x;
        } else {
            this._paramsElement.parentElement?.removeChild(this._paramsElement);
        }
    }
    }


    exports.DefaultPanel = DefaultPanel

});
