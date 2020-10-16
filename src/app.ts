/// <reference path="interfaces/drag-drop.ts"/>
/// <reference path="project-model.ts"/>
/// <reference path="state/project-state.ts"/>
/// <reference path="util/validation.ts"/>
/// <reference path="decorators/autobind.ts"/>
/// <reference path="components/base.ts"/>
/// <reference path="components/input.ts"/>
/// <reference path="components/item.ts"/>
/// <reference path="components/list.ts"/>

namespace App {
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}
