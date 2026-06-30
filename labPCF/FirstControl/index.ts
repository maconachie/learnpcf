import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import { createRoot, Root } from "react-dom/client";
import {
  FirstControlComponent,
  FirstControlProps,
} from "./FirstControlComponent";

export class FirstControl implements ComponentFramework.StandardControl<
  IInputs,
  IOutputs
> {
  private _root: Root;
  private _notifyOutputChanged: () => void;

  constructor() {
    /* empty */
  }

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    _state: ComponentFramework.Dictionary,
    container: HTMLDivElement,
  ): void {
    this._notifyOutputChanged = notifyOutputChanged;
    this._root = createRoot(container);
    this.renderControl(context);
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    this.renderControl(context);
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    this._root.unmount();
  }

  private renderControl(context: ComponentFramework.Context<IInputs>): void {
    const props: FirstControlProps = {
      notifyOutputChanged: this._notifyOutputChanged,
      headerText: context.parameters.headerText.raw || "Default Header",
    };
    this._root.render(React.createElement(FirstControlComponent, props));
  }
}
