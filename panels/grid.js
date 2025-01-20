define('panels/grid', ['dockview-core', 'exports'],
  /**
   * @param {*} exports
   */
  function(DockView, exports) {

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
      const element = (this.component && this.component());
      if(element) {
        this.element.appendChild(element)
      }
      return {...iFace}
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



    // /** @implements {DockView.GridviewPanel}  */
    // class DefaultGridPanel {
    //   _element;
    //   _titleElement;
    //   _paramsElement;

    //   get element() {
    //       return this._element;
    //   }

    //   /**
    //    *
    //    * @param {string} id
    //    * @param {string} component
    //    * @param {{minimumWidth?: number;maximumWidth?: number;minimumHeight?: number;maximumHeight?: number;}} options
    //    * @param {T} api
    //    */
    //   constructor(id, component, options, api) {
    //     this.api = new DockView.GridviewApi(this);
    //     this._element = document.createElement('div');
    //     this._element.style.display = 'flex';
    //     this._element.style.justifyContent = 'center';
    //     this._element.style.alignItems = 'center';
    //     this._element.style.color = 'white';
    //     this._element.style.height = '100%';

    //     this._titleElement = document.createElement('span');
    //     this._paramsElement = document.createElement('span');

    //     this._element.appendChild(this._titleElement);
    //   }
    //   /** @param {DockView.IGroupPanelInitParameters} params */
    //   init(params) {
    //     this.render(params.params);
    //   }
    //   /** @param {DockView.PanelUpdateEvent<Parameters>} event */
    //   update(event) {
    //     this.render(event.params);
    //   }
    //   /** @param {Record<string, any>} params */
    //   render(params) {
    //     this._titleElement.textContent = params.title;

    //     if (params.x) {
    //         if (!this._paramsElement.parentElement) {
    //             this._element.appendChild(this._paramsElement);
    //         }
    //         this._paramsElement.textContent = params.x;
    //     } else {
    //         this._paramsElement.parentElement?.removeChild(this._paramsElement);
    //     }
    //   }


    //     // private _evaluatedMinimumWidth;
    //     // private _evaluatedMaximumWidth;
    //     // private _evaluatedMinimumHeight;
    //     // private _evaluatedMaximumHeight;
    //     // private _minimumWidth;
    //     // private _minimumHeight;
    //     // private _maximumWidth;
    //     // private _maximumHeight;
    //     // private _priority?;
    //     // private _snap;
    //     // private readonly _onDidChange;
    //     // readonly onDidChange: Event<IViewSize | undefined>;
    //     // get priority(): LayoutPriority | undefined;
    //     // get snap(): boolean;
    //     // get minimumWidth(): number;
    //     // get minimumHeight(): number;
    //     // get maximumHeight(): number;
    //     // get maximumWidth(): number;
    //     // protected __minimumWidth(): number;
    //     // protected __maximumWidth(): number;
    //     // protected __minimumHeight(): number;
    //     // protected __maximumHeight(): number;
    //     // get isActive(): boolean;
    //     // get isVisible(): boolean;
    //     // constructor(id: string, component: string, options?: {
    //     //     minimumWidth?: number;
    //     //     maximumWidth?: number;
    //     //     minimumHeight?: number;
    //     //     maximumHeight?: number;
    //     // }, api?: T);
    //     // setVisible(isVisible: boolean): void;
    //     // setActive(isActive: boolean): void;
    //     // init(parameters: GridviewInitParameters): void;
    //     // private updateConstraints;
    //     // toJSON(): GridPanelViewState;


    // }


    exports.DefaultGridPanel = DefaultGridPanel

});
