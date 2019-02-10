import {MainPage} from "./main.page";
import {Router} from "@angular/router";
import createMockInstance from "jest-create-mock-instance";

describe('Page: Main Page', () => {
  let page: MainPage;

  let router: Router = createMockInstance(Router);

  beforeEach(()=> {
      page = new MainPage(router);
      spyOn(router, "navigateByUrl");
    }
  );

});
