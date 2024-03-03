import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { JsonEditorComponent, JsonEditorMode, JsonEditorOptions, JsonEditorTreeNode } from 'ang-jsoneditor';
import { JSONEditorMenuItem } from '../../model/json-editor-menu-item';
@Component({
  selector: 'lib-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LibJsonEditorComponent implements OnInit, AfterViewInit {
  @Input() data: Object;
  @Input() expandAll: boolean;
  @Input() mode: JsonEditorMode;
  @Input() search: boolean;
  @Input() mainMenuBar: boolean;
  @Input() language: String;
  @ViewChild(JsonEditorComponent, { static: false })
  editor: JsonEditorComponent;
  public editorOptions: JsonEditorOptions;
  private editorInstance: JsonEditorComponent;
  ngOnInit(): void {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = this.mode ? this.mode : 'view';
    this.editorOptions.search = this.search ? this.search : false;
    this.editorOptions.mainMenuBar = this.mainMenuBar ? this.mainMenuBar : false;
    this.editorOptions.expandAll = this.expandAll ? this.expandAll : false;
    this.editorOptions.language = this.language ? this.language : 'en';
    this.editorOptions.onCreateMenu = this.customizeMenu.bind(this);
  }
  ngAfterViewInit(): void {
    this.editorInstance = this.editor.getEditor();
  }
  public customizeMenu(items: JSONEditorMenuItem[], node: JsonEditorTreeNode): JSONEditorMenuItem[] {
    const unwantedOptions = ['Transform', 'Extract', 'Sort'];
    const path = node.path.map(String);
    const filteredItems = items.filter((item) => !unwantedOptions.includes(item.text));
    if (path.length > 0) {
      const hasRemove = filteredItems.some((item) => item.text === 'Remove');
      if (!hasRemove) {
        filteredItems.push({
          text: 'Remove',
          title: 'Remove',
          className: 'jsoneditor-remove',
          click: () => {
            const jsonData = this.editorInstance.get();
            let currentLevel = jsonData;
            for (let i = 0; i < path.length - 1; i++) {
              currentLevel = currentLevel[path[i]];
            }
            delete currentLevel[path[path.length - 1]];
            this.editorInstance.set(jsonData);
          },
        });
      }
      const hasDuplicate = filteredItems.some((item) => item.text === 'Duplicate');
      if (!hasDuplicate) {
        filteredItems.push({
          text: 'Duplicate',
          title: 'Duplicate',
          className: 'jsoneditor-duplicate',
          click: () => {
            const jsonData = this.editorInstance.get();
            let currentLevel = jsonData;
            for (let i = 0; i < path.length - 1; i++) {
              currentLevel = currentLevel[path[i]];
            }
            const currentNodeValue = currentLevel[path[path.length - 1]];
            if (Array.isArray(currentLevel)) {
              const index = Number(path[path.length - 1]);
              currentLevel.splice(index + 1, 0, JSON.parse(JSON.stringify(currentNodeValue)));
            } else {
              const currentKey = path[path.length - 1];
              const keys = Object.keys(currentLevel);
              const position = keys.indexOf(currentKey);
              const updatedObject = {};
              for (let i = 0; i < keys.length; i++) {
                updatedObject[keys[i]] = currentLevel[keys[i]];
                if (i === position) {
                  updatedObject[`${currentKey}_copy`] = JSON.parse(JSON.stringify(currentNodeValue));
                }
              }
              if (path.length === 1) {
                jsonData[currentKey] = updatedObject;
              } else {
                const parentPath = path.slice(0, -1);
                let parentLevel = jsonData;
                for (let i = 0; i < parentPath.length; i++) {
                  parentLevel = parentLevel[parentPath[i]];
                }
                parentLevel[currentKey] = updatedObject;
              }
            }
            this.editorInstance.set(jsonData);
          },
        });
      }
    }
    return filteredItems;
  }
  get jsonData(): JSON {
    return this.editor ? this.editor.get() : null;
  }
}
