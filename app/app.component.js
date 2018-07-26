"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ActionBar title=\"My App\" class=\"action-bar\"></ActionBar>\n    <Image src=\"~/images/apple.jpg\"></Image>\n    <!-- Your UI components go here -->\n  ", styles: ["\n    @keyframes spin {\n      from { transform: rotate(0); } to { transform: rotate(360); }\n    }\n    Image {\n      animation-name: spin; animation-duration: 3s;\n      animation-iteration-count: infinite;\n      animation-timing-function: ease-out;\n    }\n  "]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFvQjFDO0lBQUE7SUFFQSxDQUFDO0lBRlksWUFBWTtRQWxCeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxrS0FJVCxFQUFJLE1BQU0sRUFBRSxDQUFDLDBRQVNiLENBQUM7U0FDSCxDQUFDO09BRVcsWUFBWSxDQUV4QjtJQUFELG1CQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IEFwcFwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxuICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9hcHBsZS5qcGdcIj48L0ltYWdlPlxuICAgIDwhLS0gWW91ciBVSSBjb21wb25lbnRzIGdvIGhlcmUgLS0+XG4gIGAsICAgc3R5bGVzOiBbYFxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH0gdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjApOyB9XG4gICAgfVxuICAgIEltYWdlIHtcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBzcGluOyBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICB9XG4gIGBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxufVxuIl19