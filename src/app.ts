import {ProjectInput} from './components/input.js';
import {ProjectList} from './components/list.js';


namespace App {
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}
