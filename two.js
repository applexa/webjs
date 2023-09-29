function(e, t) {
    function i(e) {
        var t = JSON.stringify(e);
        return t
    }
    function a(e) {
        return void 0 !== e && (null !== e && "" !== e)
    }
    function n(e) {
        for (var t = 0; t < e.length; t++) if (!a(e[t])) return ! 1;
        return ! 0
    }
    function o() {
        return l.CONTEXT_PATH || ""
    }
    var r = window.IPLAT || {},
    s = "6.2",
    l = window.IPLATUI || {},
    c = "6.2.1231.3",
    d = "2021-1-20";
    r.isNull = t.isNull,
    r.isUndefined = t.isUndefined,
    r.isBoolean = t.isBoolean,
    r.isNumber = t.isNumber,
    r.isString = t.isString,
    r.isDate = t.isDate,
    r.isObject = t.isObject,
    kendo.culture("zh-CN"),
    kendo.data.Model.fn.__ClassName__ = "kendoModel",
    kendo.ui.Grid.fn.__ClassName__ = "kendoGrid",
    r.isEiColumn = function(e) {
        return a(e) && "EiColumn" === e.__ClassName__
    },
    r.isEiBlockMeta = function(e) {
        return a(e) && "EiBlockMeta" === e.__ClassName__
    },
    r.isEiBlock = function(e) {
        return a(e) && "EiBlock" === e.__ClassName__
    },
    r.isEiInfo = function(e) {
        return a(e) && "EiInfo" === e.__ClassName__
    },
    r.isKendoModel = function(e) {
        return a(e) && "kendoModel" === e.__ClassName__
    },
    r.isKendoGrid = function(e) {
        return a(e) && "kendoGrid" === e.__ClassName__
    };
    var u = e.extend,
    f = e.each,
    p = e.isArray;
    e.isPlainObject,
    e.isFunction;
    r.isEmptyString = function(e) {
        return "" === e
    },
    r.isBlankString = function(e) {
        return r.isString(e) && 0 === e.replace(/^\s+|\s+$/g, "").length
    },
    window.childWindows = [],
    window.__iplat__closeWindows = function(t) {
        f(childWindows,
        function(t, i) {
            e.isFunction(i.__iplat__closeWindows) ? i.__iplat__closeWindows() : i.close()
        }),
        window.childWindows = [],
        t || window.close()
    },
    r.getParentWindow = function() {
        var e = window;
        try {
            if (a(e.IPLAT_INDEX_WINDOW)) return e;
            for (a(e.opener) && e !== e.opener && (e = e.opener); a(e.top) && e !== e.top;) e = e.top
        } catch(t) {
            return e = null
        }
        return e
    },
    r.getParameterByName = function(e, t) {
        t || (t = window.location.href),
        e = e.replace(/[\[\]]/g, "\\$&");
        var i = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
        a = i.exec(t);
        return a ? a[2] ? decodeURIComponent(a[2].replace(/\+/g, " ")) : "": null
    },
    u(r, {
        VERSION: s,
        releaseVersion: c,
        releaseTime: d,
        formatNative: i,
        isAvailable: a,
        isBatchAvailable: n,
        getContextPath: o,
        htmlEncode: kendo.htmlEncode,
        htmlDecode: function(e) {
            return ("" + e).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
        },
        progress: function(e, t) {
            kendo.ui.progress(e, t)
        },
        AJAX: {
            ContentType: {
                JSON: "application/json;charset=utf-8",
                FORM: "application/x-www-form-urlencoded;charset=utf-8"
            },
            NOOP: "__GRID_CRUD_NOOP__"
        },
        FORMAT: {
            DATE_17: "yyyyMMddHHmmssfff",
            DATE_14: "yyyyMMddHHmmss",
            DATE_8: "yyyyMMdd",
            DATE_17_PR: "yyyy-MM-dd HH:mm:ss.fff",
            DATE_17_SE: "yyyy/MM/dd HH:mm:ss.fff",
            DATE_14_PR: "yyyy-MM-dd HH:mm:ss",
            DATE_14_SE: "yyyy/MM/dd HH:mm:ss",
            DATE_8_PR: "yyyy-MM-dd",
            DATE_8_SE: "yyyy/MM/dd"
        },
        KEY_CODE: {
            Tab: 9,
            Enter: 13
        },
        CONSTANTS: {
            EXPORT_FLAG: "_eiExportFlag",
            EXPORT_FILE_TYPE: "_eiExportFiletype",
            EXPORT_BLOCK_ID: "_eiExportBlockname",
            EXPORT_EIINFO: "_eiExportData",
            EXPORT_FILE_NAME: "_eiExportFileName",
            EXPORT_SERVICE_NAME: "_eiExportServiceName",
            EXPORT_METHOD_NAME: "_eiExportMethodName",
            EXPORT_QUERY_EIINFO: "_eiExportQueryEiInfo",
            QUERY_BLOCK_ID: "inqu_status",
            RESULT_BLOCK_ID: "result",
            BACKFILL_BUTTON_NAME: "确定",
            CONFIRM_BUTTON_NAME: "确定",
            CANCEL_BUTTON_NAME: "取消"
        },
        Browser: {},
        Util: {
            hasEvent: function(t, i) {
                var a = t._events,
                n = !1;
                if (e.isPlainObject(a)) for (var o in a) if (i === o) return n = !0;
                return n
            },
            unbindHandlers: function(e, t) {
                if (e instanceof kendo.Observable) {
                    var i = e._events[t];
                    return e.unbind(t),
                    i
                }
                return []
            },
            bindHandlers: function(e, t, i) {
                e instanceof kendo.Observable && f(i,
                function(i, a) {
                    e.bind(t, a)
                })
            },
            block2Model: function(e, t, i) {
                var a = t.getRows()[e],
                n = {};
                for (var o in i) n[o] = a[i[o]] || "";
                return new kendo.data.Model(n)
            },
            buildAjaxOption: function(e) {
                var t = {
                    type: "POST",
                    dataType: "json",
                    contentType: r.AJAX.ContentType.FORM
                };
                return u(t, e),
                u(!0, {},
                {
                    read: t,
                    create: t,
                    update: t,
                    destroy: t
                })
            },
            buildCRUDFunction: function(t, i) {
                for (var a in t) {
                    var n = t[a];
                    e.isPlainObject(t[a]) && (t[a] = function(t, a) {
                        return function(n) {
                            i._buildFilter(n.data),
                            i._buildModels(n.data, a),
                            e.ajax(u({},
                            t, {
                                data: i._buildRequest(),
                                success: function(e) {
                                    n.success(e)
                                },
                                error: function(e) {
                                    n.error(e)
                                }
                            }))
                        }
                    } (n, a))
                }
                return t
            },
            getComboText: function(e, i, a, n) {
                var o = t.find(e,
                function(e) {
                    return e[a] == n
                }),
                s = r.isAvailable(n) ? n: "";
                return o ? kendo.template(i)(o) : s
            },
            filterAdapter: function(t, i) {
                var a, n = {
                    eq: "='{0}'",
                    neq: "!='{0}'",
                    isnull: "=null",
                    isnotnull: "!=null",
                    isempty: "=''",
                    isnotempty: "!=''",
                    startswith: " like '{0}%'",
                    contains: " like '%{0}%'",
                    doesnotcontain: " not like '%{0}%'",
                    endswith: " like '%{0}'",
                    lt: "<{0}",
                    gt: ">{0}",
                    lte: "<={0}",
                    gte: ">={0}"
                };
                e.isPlainObject(t) || (t = {
                    filters: [],
                    logic: "and"
                });
                var o = function(e) {
                    f(e.filters,
                    function(e, t) {
                        t.filters ? o(t) : ("[object Date]" === Object.prototype.toString.call(t.value) ? i.set("inqu_status-0-" + t.field, +t.value) : i.set("inqu_status-0-" + t.field, t.value), i.set("inqu_status-1-" + t.field, t.operator))
                    })
                },
                r = function(e) {
                    var t = " " + e.logic + " ",
                    i = [];
                    return f(e.filters,
                    function(e, t) {
                        t.filters ? i.push(r(t)) : i.push(t.field + kendo.format(n[t.operator], t.value))
                    }),
                    "(" + i.join(t) + ")"
                };
                return o(t),
                a = r(t),
                "()" !== a && i.set("inqu_status-0-sql", a),
                i
            },
            sortAdapter: function(t) {
                var i = [];
                return e.isArray(t) && e.each(t,
                function(e, t) {
                    i.push(t.field + " " + t.dir)
                }),
                i.join(",")
            },
            parseBtnClass: function(e) {
                e = e || "";
                var i = e.trim().split(","),
                a = (t.find(i,
                function(e) {
                    return "css" === e.split(":")[0].trim().toLowerCase()
                }) || "").split(":"),
                n = (t.find(i,
                function(e) {
                    return "btnclass" === e.split(":")[0].trim().toLowerCase()
                }) || "").split(":"),
                o = "",
                r = "";
                return o = a.length > 1 ? a[1] : a[0],
                r = n.length > 1 ? n[1] : n[0],
                o.match(/fa-/) ? (o = "i-btn-gap " + o, o.match(/^fa /) || (o = "fa " + o)) : o.match(/k-/) ? o.match(/^k-icon /) || (o = "k-icon " + o) : o.match(/i-/) && (o.match(/^i-icon /) || (o = "i-icon " + o)),
                {
                    css: o,
                    btnClass: r
                }
            },
            inIframe: function() {
                try {
                    return window.self !== window.top
                } catch(e) {
                    return ! 0
                }
            },
            handleFrameTitle: function(t, i, a) {
                var n = t.frameElement,
                o = e("#ef_form_head"),
                r = e(n).data("keep");
                r !== !0 && o.remove()
            },
            boolConfigHelper: function() {
                for (var e = arguments.length,
                i = !1,
                a = 0; a < e; a++) if (t.isBoolean(arguments[a])) {
                    i = arguments[a];
                    break
                }
                return i
            },
            formatErrorMessage: function(e) {
                var t = {
                    msgKey: "",
                    msg: "",
                    detailMsg: ""
                },
                i = e.split("$$$");
                i.length > 1 && (t.detailMsg = i[1]);
                var a = i[0].split(":");
                return t.msg = a[0],
                a.length > 1 && /^[a-z][a-z0-9_\\.-]+[a-z0-9]$/i.test(a[0]) && (t.msgKey = a[0], t.msg = a[1]),
                t
            },
            pickDOMAttributes: function(e) {
                var i = {
                    VALIDATE: ["required", "minLength", "maxLength", "validateGroupName", "data-*"],
                    HTML: ["class", "style", "placeholder"]
                },
                a = i.VALIDATE.concat(i.HTML);
                return t.pick(e,
                function(e, i) {
                    return i.match(/^data-.+/) || t.indexOf(a, i) >= 0
                })
            },
            simpleDate: function(e, t) {
                var i = e.getFullYear(),
                a = e.getMonth() + 1,
                n = e.getDate();
                return t = t || "-",
                a = a < 10 ? "0" + a: "" + a,
                n = n < 10 ? "0" + n: "" + n,
                i + t + a + t + n
            }
        },
        ColorBox: {
            GRID_BOTTOM_BORDER: "#99D2FF",
            GRID_BOTTOM_BORDER_HOVER: "#FFE06A",
            INVALID_COLOR: "#FF6160"
        },
        EFCommon: {
            PARENT_ID: "pid",
            VALUE_FIELD: "valueField",
            TEXT_FIELD: "textField",
            VIRTUAL_ROOT: "root",
            NS: ".IPLAT",
            ON_SUCCESS: "onSuccess",
            ON_FAIL: "onFail",
            _extendColumns: function(e, t) {
                if (p(e) && e.length > 0) {
                    f(t,
                    function(i, a) {
                        f(e,
                        function(n, o) {
                            a.field === o.field && (u(!0, t[i], o), e[n] = {})
                        })
                    });
                    var i = [];
                    return f(e,
                    function(e, a) {
                        a.field && ("front" === a.position ? i.push(a) : t.push(a))
                    }),
                    t = i.concat(t)
                }
                return t
            }
        },
        EFPopupInput: {
            enable: function(t, i) {
                var a, n = e(t);
                if (n.data("hidden")) {
                    var o = n.attr("id") + "_textField";
                    n = e("#" + o)
                }
                a = n.parent();
                var r = a.find("span[data-action='clear']");
                i === !1 ? (a.addClass("i-state-disabled"), r.length > 0 && r.css("display", "none"), n.prop("disabled", !0)) : (a.removeClass("i-state-disabled"), r.length > 0 && r.css("display", ""), n.prop("disabled", !1))
            },
            readonly: function(t, i) {
                var a, n = e(t);
                if (n.data("hidden")) {
                    var o = n.attr("id") + "_textField";
                    n = e("#" + o)
                }
                a = n.parent(),
                i === !1 ? (a.removeClass("i-state-readonly"), n.removeAttr("readonly")) : (a.addClass("i-state-readonly"), n.attr("readonly", "readonly"))
            },
            value: function(t) {
                var i = e(t);
                return 2 !== arguments.length ? i.val() : void i.val(arguments[1])
            },
            text: function(t) {
                var i = e(t).attr("id") + "_textField",
                a = e("#" + i);
                return 2 !== arguments.length ? a.val() : void a.val(arguments[1])
            },
            setAllFields: function(e, t, i) {
                r.EFPopupInput.value(e, t),
                r.EFPopupInput.text(e, i)
            },
            clear: function(i, a) {
                var n, o = e(i);
                if (o.data("hidden")) {
                    var s = o.attr("id") + "_textField";
                    o = e("#" + s)
                }
                if (n = o.parent(), a === !0) {
                    var l = n.find(".k-i-close"),
                    c = l.data("for");
                    if (r.isString(c)) {
                        var d = c.split(",");
                        t.each(d,
                        function(t) {
                            e("#" + e.trim(t)).val("")
                        })
                    }
                } else o.val(""),
                e(i).length > 0 && e(i).val("")
            }
        },
        EFTreeInput: {
            enable: function(e, t) {
                r.EFPopupInput.enable(e, t)
            },
            readonly: function(e, t) {
                r.EFPopupInput.readonly(e, t)
            },
            value: function(e) {
                r.EFPopupInput.value.call(this, arguments)
            },
            text: function(e) {
                r.EFPopupInput.text.call(this, arguments)
            },
            setAllFields: function(e, t, i) {
                r.EFPopupInput.value(e, t),
                r.EFPopupInput.text(e, i)
            },
            clear: function(e, t) {
                r.EFPopupInput.clear(e, t)
            }
        },
        EFGrid: {
            CREATE_ACTION: "create",
            READ_ACTION: "read",
            UPDATE_ACTION: "update",
            DELETE_ACTION: "destroy",
            _readonlyAddEdit: function(i, a, n) {
                var o, r = n,
                s = r.editable.options.fields,
                l = s.field;
                a && a.model && !a.model.isNew() && (o = t.find(a.sender.columns,
                function(e) {
                    return e.field === l
                })),
                o && o.readonly === !0 && (e(a.container).find("input[name=" + l + "]").attr("readonly", !0), r.closeCell())
            },
            _hasToolbarButtons: function(e) {
                return e.buttons.length > 0
            },
            _hasToolbarSettings: function(e) {
                return e.settingActions.length > 0
            },
            _hasToolbarPager: function(e) {
                return e.pageable && "top" === e.pagerPosition
            },
            _hasToolBar: function(e) {
                var t = e.toolbarConfig,
                i = t.kendoToolBarItems,
                a = this._hasToolbarButtons(t),
                n = this._hasToolbarSettings(t),
                o = this._hasToolbarPager(e),
                r = a || n || o;
                if (t.hidden === !0) {
                    if (r = !1, n || o) if (r = !0, n) {
                        var s = i.length;
                        t.kendoToolBarItems = i.slice(s - 1)
                    } else t.kendoToolBarItems = []
                } else "all" === t.hidden && (r = !1);
                return r
            }
        },
        EFTree: {},
        EFTreeList: {},
        EFInput: {
            value: function(t) {
                var i = e(t),
                a = i.attr("type"),
                n = "";
                if (2 === arguments.length) {
                    if ("text" === a || "password" === a || "TEXTAREA" === i[0].tagName) i.val(arguments[1]),
                    i.blur();
                    else if ("hidden" === a) i.closest("input").val(arguments[1]).blur();
                    else if ("radio" === a) {
                        var o = arguments[1];
                        f(i,
                        function(t, i) {
                            if (e(i).val() === o) return e(i).prop("checked", "checked"),
                            !1
                        })
                    } else if ("checkbox" === a) {
                        var r = arguments[1].split(",");
                        i.prop("checked", !1),
                        f(i,
                        function(t, i) {
                            f(r,
                            function(t, a) {
                                e(i).val() === a && e(i).prop("checked", "checked")
                            })
                        })
                    }
                } else {
                    if ("text" === a || "password" === a || "TEXTAREA" === i[0].tagName || "hidden" === a) return i.val();
                    if ("radio" === a) return f(i,
                    function(t, i) {
                        if (e(i).prop("checked")) return n = e(i).val(),
                        !1
                    }),
                    n;
                    if ("checkbox" === a) return f(i,
                    function(t, i) {
                        e(i).prop("checked") && (n = "" === n ? i.value: n + "," + i.value)
                    }),
                    n
                }
            },
            enable: function(t, i) {
                var a, n, o = e(t);
                if ("hidden" === o.attr("type")) {
                    var r = o.attr("id") + "_textField";
                    o = e("#" + r)
                }
                a = o.attr("type"),
                n = o.parent(),
                i === !1 ? "text" === a || "TEXTAREA" === o[0].tagName ? o.prop("disabled", !0) : "radio" === a ? (n.addClass("i-radio-disabled"), o.prop("disabled", !0)) : "checkbox" === a && (n.addClass("i-checkbox-disabled"), o.prop("disabled", !0)) : "text" === a || "TEXTAREA" === o[0].tagName ? o.prop("disabled", !1) : "radio" === a ? (n.removeClass("i-radio-disabled"), o.prop("disabled", !1)) : "checkbox" === a && (n.removeClass("i-checkbox-disabled"), o.prop("disabled", !1))
            },
            readonly: function(t, i) {
                var a, n, o = e(t);
                if ("hidden" === o.attr("type")) {
                    var r = o.attr("id") + "_textField";
                    o = e("#" + r)
                }
                a = o.attr("type"),
                n = o.parent(),
                i === !0 ? "text" === a || "textarea" === a ? o.prop("readonly", !0) : "radio" === a ? (n.addClass("i-radio-readonly"), o.prop("readonly", !0)) : "checkbox" === a && (n.addClass("i-checkbox-readonly"), o.prop("readonly", !0)) : "text" === a || "textarea" === a ? o.prop("readonly", !1) : "radio" === a ? (n.removeClass("i-radio-readonly"), o.prop("readonly", !1)) : "checkbox" === a && (n.removeClass("i-checkbox-readonly"), o.prop("readonly", !1))
            }
        },
        EFSelect: {
            value: function(t) {
                var i = e(t),
                a = arguments[2],
                n = i.data("kendoDropDownList");
                return arguments.length > 1 ? (n.value(arguments[1]), void(r.isUndefined(a) && a !== !0 || n.trigger("change"))) : n.value()
            },
            text: function(t) {
                var i = e(t),
                a = i.data("kendoDropDownList");
                return 2 !== arguments.length ? a.text() : void a.text(arguments[1])
            },
            dataItem: function(t, i) {
                var a = e(t),
                n = a.data("kendoDropDownList");
                return r.isUndefined(i) ? n.dataItem() : n.dataItem(i)
            },
            readonly: function(t, i) {
                var a, n = e(t),
                o = n.data("kendoDropDownList");
                a = n.prev("span.k-dropdown-wrap"),
                i === !1 ? (o.readonly(!1), a.removeClass("i-state-readonly"), n.removeAttr("readonly")) : (o.readonly(), n.prev("span.k-dropdown-wrap").removeClass("k-state-default").addClass("i-state-readonly"))
            },
            enable: function(t, i) {
                var a, n = e(t),
                o = n.data("kendoDropDownList");
                a = n.prev("span.k-dropdown-wrap"),
                i === !1 ? o.enable(!1) : o.enable(!0),
                a.removeClass("i-state-readonly")
            },
            setDataSource: function(t, i) {
                var a = e(t),
                n = a.data("kendoDropDownList");
                n.setDataSource(i)
            }
        },
        EFMultiSelect: {
            readonly: function(t, i) {
                var a, n = e(t),
                o = n.data("kendoMultiSelect");
                a = n.prev("div.k-multiselect-wrap"),
                i === !1 ? (o.readonly(!1), a.removeClass("i-state-readonly"), n.removeAttr("readonly")) : (o.readonly(), n.prev("div.k-multiselect-wrap").removeClass("k-state-default").addClass("i-state-readonly")),
                a.removeClass("i-state-disabled")
            },
            enable: function(t, i) {
                var a, n = e(t),
                o = n.data("kendoMultiSelect");
                a = n.prev("div.k-multiselect-wrap"),
                i === !1 ? (o.enable(!1), a.addClass("i-state-disabled")) : (o.enable(!0), a.removeClass("i-state-disabled")),
                a.removeClass("i-state-readonly")
            }
        },
        EFComboColumn: [],
        EFOptions: []
    }),
    u(window, {
        IPLAT: r,
        formatNative: i,
        isAvailable: a,
        isBatchAvailable: n
    }),
    kendo.ui.List.fn.options.noDataTemplate = "没有数据",
    kendo.ui.AutoComplete.fn.options.noDataTemplate = "没有数据",
    "undefined" == typeof JSON && (window.JSON = {
        stringify: kendo.stringify
    });
