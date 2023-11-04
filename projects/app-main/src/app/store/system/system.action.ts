export namespace SystemAction {
  export class SaveTempData {
    static readonly type = `保存临时数据`;

    constructor(public data: any) {
    }
  }
}
