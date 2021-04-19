declare namespace two {
  let $pageLayer: eui.UILayer;
  let sceneLayer: eui.UILayer;
  function getStageWith(): number;
  function getStageHeight(): number;
  function initScene(uiRoot: eui.UILayer, needPageMove?: boolean, pageLeft?: number): void;
  function addResizeMonitor(group: egret.DisplayObject, min: number, max: number, minProps: {
    [key: string]: number;
  }, maxProps: {
    [key: string]: number;
  }, isH?: boolean): void;
  function removeResizeMonitor(group: egret.DisplayObject): void;
  function setClassMap(type: string, clazz: string): void;
  function getClassObj(classType: string, ...params: any[]): any;
  let currentPageType: string;
  function changePage(name: string, type?: number, ...params: any[]): eui.Component;
  function pushPage(name: string, imme?: boolean, ...params: any[]): eui.Component;
  function popPage(imme?: boolean): void;
  function fixedLayer(layer: egret.DisplayObject, type: number, w: number, h: number): egret.DisplayObjectContainer;
}