"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var core_2 = require('core');
var index_1 = require('./choose-theme/index');
var SignIn = (function () {
    // 对话框
    function SignIn(router, userService, docService, el) {
        this.router = router;
        this.userService = userService;
        this.docService = docService;
        this.el = el;
        this.remeberMe = false;
        this.docs = [];
        this.doc = {};
        this.themes = [index_1.basicTheme];
        this.selectedTheme = index_1.basicTheme;
        this.user = { username: '', password: '', repeatPassword: '' };
    }
    SignIn.prototype.ngOnInit = function () {
        var _this = this;
        this.user.username = localStorage.getItem('username') ? localStorage.getItem('username') : '';
        this.user.password = localStorage.getItem('password') ? localStorage.getItem('password') : '';
        this.remeberMe = localStorage.getItem('remeberMe') ? true : false;
        if (this.user.username && this.user.password && this.remeberMe) {
            this.signIn();
        }
        ;
        var docsRef = core_2.firebase.database().ref('docs');
        docsRef.on('value', function (snapshot) { _this.docs = core_2.objectToArray(snapshot.val()); });
    };
    SignIn.prototype.checkUserExist = function () {
        var _this = this;
        this.userService.getUserByUsername(this.user.username, function (rtn) {
            if (rtn) {
                _this.canRegister = false;
                _this.registerMessage = '用户名已存在';
            }
            else {
                _this.canRegister = true;
                _this.registerMessage = '';
            }
        });
    };
    SignIn.prototype.signIn = function () {
        var _this = this;
        this.userService.getUserByUsername(this.user.username, function (serverUser) {
            if (serverUser.password == _this.user.password) {
                _this.user = serverUser;
                _this.userService.user = serverUser;
                // 用户没有数据则使用默认的网站数据
                _this.userService.user.website = serverUser.website ? serverUser.website : core_2.defaultWebsite;
                if (_this.remeberMe) {
                    localStorage.setItem('username', serverUser.username);
                    localStorage.setItem('password', serverUser.password);
                    localStorage.setItem('remeberMe', 'true');
                }
                window['$'](_this.el.nativeElement).find('#loginModal').modal('toggle');
            }
            else {
                alert('用户名或者密码错误');
            }
        });
    };
    SignIn.prototype.signDialog = function () {
    };
    SignIn.prototype.signUp = function () {
        if (this.canRegister && this.checkRepeatPassword()) {
            console.log(this.user);
            // 添加一个空数据的用户
            this.userService.addUser({
                username: this.user.username,
                password: this.user.password,
                website: { pages: [{ path: 'index', pageName: 'Home', parts: [] }] }
            });
            // 注册成功,显示选择主题面板,用户可以选择一套模板
            window['$'](this.el.nativeElement).find('#chooseThemePanel').modal('toggle');
        }
    };
    SignIn.prototype.chooseTheme = function (website) {
        this.userService.user.website = website;
    };
    SignIn.prototype.checkRepeatPassword = function () {
        if (this.user.password != this.user.repeatPassword) {
            this.repeatPasswordMessage = '两次输入的密码不同';
            return false;
        }
        this.repeatPasswordMessage = '';
        return true;
    };
    SignIn.prototype.addDoc = function () {
        this.docService.addDoc(this.doc);
    };
    SignIn.prototype.deleteDoc = function (doc) {
        this.docs.splice(this.docs.indexOf(doc), 1);
        core_2.firebase.database().ref('docs').set(this.docs);
    };
    SignIn.prototype.editLogin = function () {
        window['isEdit'] = true;
        this.router.navigate(['index',
            {
                username: this.userService.user.username,
                password: this.userService.user.password,
                edit: true
            }]);
    };
    // 预览模式进入
    SignIn.prototype.previewLogin = function () {
        window['isEdit'] = false;
        this.router.navigate(['index', {
                username: this.userService.user.username,
                password: this.userService.user.password,
                edit: false
            }]);
    };
    SignIn = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sign-in',
            templateUrl: './sign-in.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_2.UserService, core_2.DocService, core_1.ElementRef])
    ], SignIn);
    return SignIn;
}());
exports.SignIn = SignIn;

//# sourceMappingURL=sign-in.js.map
