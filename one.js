/*
 * iPlat4J UI 6.2
 * iPlat4J V6 前端框架
 *
 * 发布于 2021-1-20 09:44:04
*/
function nodeSwap(e, t) {
    $.each(t,
    function(t, i) {
        var a = e.dataSource.get(i.id);
        if (a && 0 === e.parent(e.findByUid(a.uid)).length) {
            var n = function(t) {
                for (var i = 0; i < t.items.length; i++) {
                    var a = t.items[i];
                    e.dataSource.get(a.id) || $.each(e.findByUid(e.dataSource.get(t.id).uid),
                    function(t, i) {
                        e.append({
                            id: a.id,
                            text: a.text
                        },
                        $(i))
                    }),
                    a.items && n(a)
                }
            };
            n(i)
        } else e.append([i])
    }),
    e.select($())
}
function _getPath(e, t) {
    var i = e.dataItem(t),
    a = [];
    return $.each(e.findByUid(e.dataSource.get(i.id).uid),
    function(t, i) {
        var n = e.parent($(i));
        for (a[t] = {
            id: e.dataItem($(i)).id,
            text: e.dataItem($(i)).text,
            items: e.dataItem($(i)).items || []
        }; 0 != n.length && (a[t] = {
            id: e.dataItem(n).id,
            text: e.dataItem(n).text,
            items: [a[t]]
        },
        0 !== e.parent(n).length);) n = e.parent(n);
        e.remove($(i)),
        n.length > 0 && 0 === e.dataItem(n).items.length && e.remove(n)
    }),
    a
}
function _getPathByUid(e, t) {
    var i = [],
    a = e.findByUid(t),
    n = e.parent($(a));
    for (i.push({
        id: e.dataItem($(a)).id,
        text: e.dataItem($(a)).text,
        items: e.dataItem($(a)).items || []
    }); 0 != n.length && (i.push({
        id: e.dataItem(n).id,
        text: e.dataItem(n).text,
        items: [i.pop()]
    }), 0 !== e.parent(n).length);) n = e.parent(n);
    return e.remove($(a)),
    n.length > 0 && 0 === e.dataItem(n).children._data.length && e.remove(n),
    i
}
function map2FlatX(e, t) {
    var i = e,
    a = t || "items",
    n = [],
    o = function(e) {
        $.each(e,
        function(e, t) {
            t[a] && t[a].length > 0 && o(t[a]),
            n.push(t)
        })
    };
    return o(i),
    n
}
function nodeMove(e, t, i) {
    var a = i.split("_")[1],
    n = map2FlatX(e.dataSource.data());
    _.each(n,
    function(i) {
        if (i.id.split("_")[1] == a) {
            var n = _getPathByUid(e, i.uid);
            nodeSwap(t, n)
        }
    })
} !
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
    var h = function() {
        var e, t = navigator.userAgent,
        i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(i[1])) return e = /\brv[ :]+(\d+)/g.exec(t) || [],
        ["IE", e[1] || ""];
        if ("Chrome" === i[1] && (e = t.match(/\b(OPR|Edge)\/(\d+)/), null != e)) {
            var a = e.slice(1).join(" ").replace("OPR", "Opera");
            i = a.split(" ")
        }
        return i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"],
        null != (e = t.match(/version\/(\d+)/i)) && i.splice(1, 1, e[1]),
        i
    } ();
    if (r.Browser.name = h[0], r.Browser.version = h[1], r.Browser.isIE = /^(MS)?( )?IE/.test(h[0]), r.Browser.isIE8 = r.Browser.isIE && 1 * h[1] === 8, !r.Browser.isIE) {
        var m; !
        function() {
            var e = {
                open: !1,
                orientation: null
            },
            t = 160,
            i = function(e, t) {
                window.dispatchEvent(new CustomEvent("devtoolschange", {
                    detail: {
                        open: e,
                        orientation: t
                    }
                }))
            };
            m = setInterval(function() {
                var a = window.outerWidth - window.innerWidth > t,
                n = window.outerHeight - window.innerHeight > t,
                o = a ? "vertical": "horizontal";
                n && a || !(window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || a || n) ? (e.open && i(!1, null), e.open = !1, e.orientation = null) : (e.open && e.orientation === o || i(!0, o), e.open = !0, e.orientation = o)
            },
            500),
            "undefined" != typeof module && module.exports ? module.exports = e: window.devtools = e
        } (),
        r.__debug__ = !1,
        window.addEventListener("devtoolschange",
        function(e) { ! e.detail.open || r.__debug__ || r.Util.inIframe() || (r.__debug__ = !0, console.log(" ___ ____  _        _  _____ _  _       _   _   _ ___ \n|_ _|  _ \\| |      / \\|_   _| || |     | | | | | |_ _|\n | || |_) | |     / _ \\ | | | || |_ _  | | | | | || | \n | ||  __/| |___ / ___ \\| | |__   _| |_| | | |_| || | \n|___|_|   |_____/_/   \\_\\_|    |_|  \\___/   \\___/|___|\n                                                      \n欢迎使用iPlat4J V6! 当前前端版本为: %c" + r.releaseVersion, "color:red", " 发布时间为: " + r.releaseTime), clearInterval(m))
        })
    }
    window.IPLAT = r,
    window.IPLATUI = l
} (window.jQuery, window._),
function(e) {
    function t() {
        this.extAttr = {}
    }
    function i(e) {
        for (var a in i.defaults) this[a] = i.defaults[a];
        this.name = e,
        t.call(this)
    }
    function a(e) {
        this.blockId = e,
        this.metas = {},
        this.desc = "",
        this.extAttr = {},
        this.colCount = 0
    }
    function n(e) {
        if ("string" == typeof e) this.meta = new a(e);
        else {
            if (!d.isEiBlockMeta(e)) throw new Error("请检查参数类型，无法创建EiBlock");
            this.meta = e
        }
        this.rows = [],
        this.colCount = 0,
        this.extAttr = {}
    }
    function o() {
        var e = arguments[0];
        this.name = "",
        this.descName = "",
        this.msg = "",
        this.msgKey = "",
        this.detailMsg = "",
        this.status = 0,
        this.blocks = {},
        this.extAttr = {},
        "string" == typeof e && (this.name = e),
        u.Config.EiInfo.version && (this.__version__ = u.Config.EiInfo.version, this.traceId = "")
    }
    function r(e) {
        var t = document.getElementById(e);
        if (!t) {
            var i = document.getElementsByName(e);
            i.length > 0 && (t = i[0])
        }
        return t
    }
    function s() {}
    function l() {}
    var c = e.extend,
    d = window.IPLAT,
    u = window.IPLATUI,
    f = d.getContextPath,
    p = d.isAvailable,
    h = d.isString,
    m = d.isBlankString;
    t.prototype.get = function(e) {
        return this.extAttr[e]
    },
    t.prototype.set = function(e, t) {
        this.extAttr[e] = t
    },
    t.prototype.getAttr = function() {
        return this.extAttr
    },
    t.prototype.setAttr = function(e) {
        this.extAttr = e
    },
    i.prototype = new t,
    i.prototype.constructor = i,
    i.prototype.__ClassName__ = "EiColumn",
    i.defaults = {
        pos: -1,
        name: "",
        descName: "",
        type: "C",
        regex: null,
        formatter: null,
        editor: "text",
        minLength: 0,
        maxLength: Math.pow(2, 31) - 1,
        primaryKey: !1,
        nullable: !0,
        visible: !0,
        readonly: !1,
        displayType: "text",
        errorPrompt: null,
        dateFormat: null,
        defaultValue: "",
        validateType: null,
        width: 96,
        height: 18,
        align: "left",
        blockName: null,
        sourceName: null,
        labelProperty: null,
        valueProperty: null
    },
    i.prototype.toJSON = function() {
        var e = {},
        t = arguments[0];
        if (t) for (var a in this) this.hasOwnProperty(a) && this[a] !== i.defaults[a] && (e[a] = this[a]);
        else for (var n in this) this.hasOwnProperty(n) && p(this[n]) && (e[n] = this[n]);
        return delete e.extAttr,
        e
    },
    i.parseColumn = function(e) {
        var t = new i(e.name);
        for (var a in e) {
            var n = e[a];
            n && n.replace && (n = n.replace(/'/g, "&#39;")),
            t[a] = n
        }
        return e.width && (t.iplatWidth = !0),
        t
    },
    a.prototype = new t,
    a.prototype.constructor = a,
    a.prototype.__ClassName__ = "EiBlockMeta",
    a.prototype.setDesc = function(e) {
        this.desc = e
    },
    a.prototype.getDesc = function() {
        return this.desc
    },
    a.prototype.addMeta = function(e) {
        if (!d.isEiColumn(e)) throw new Error("请检查参数，必须添加EiColumn对象");
        this.metas[e.name] = e,
        e.pos < 0 && (e.pos = this.colCount),
        this.colCount++
    },
    a.prototype.getMeta = function(e) {
        return this.metas[e]
    },
    a.prototype.removeMeta = function(e) {
        delete this.metas[e]
    },
    a.prototype.getBlockId = function() {
        return this.blockId
    },
    a.prototype.getMetas = function() {
        return this.metas
    },
    a.prototype.toJSON = function() {
        var e = {},
        t = arguments[0];
        e[y.BLOCK_META_DESC] = this.getDesc(),
        e[y.ATTRIBUTES] = this.getAttr();
        var i = [];
        for (var a in this.metas) i.push(this.metas[a].toJSON(t));
        return e[y.BLOCK_META_COLUMNLIST] = i,
        e
    },
    a.parseBlockMeta = function(e, t) {
        var n = new a(e),
        o = t[y.BLOCK_META_DESC];
        if (p(o) && n.setDesc(o), o = t[y.ATTRIBUTES], p(o) && n.setAttr(o), o = t[y.BLOCK_META_COLUMNLIST], p(o)) for (var r = 0; r < o.length; r++) {
            var s = i.parseColumn(o[r]);
            n.addMeta(s)
        }
        return n
    },
    n.prototype = new t,
    n.prototype.constructor = n,
    n.prototype.__ClassName__ = "EiBlock",
    n.prototype.getBlockMeta = function() {
        return this.meta
    },
    n.prototype.setBlockMeta = function(e) {
        this.meta = e
    },
    n.prototype.getBlockId = function() {
        return this.getBlockMeta().getBlockId()
    },
    n.prototype.addRow = function(e) {
        null == e ? this.rows.push([]) : this.rows.push(e)
    },
    n.prototype.getRows = function() {
        return this.rows
    },
    n.prototype.setRows = function(e) {
        this.rows = e
    },
    n.prototype.getColumn = function(e) {
        return this.getBlockMeta().getMeta(e) || null
    },
    n.prototype.getColumnPos = function(e) {
        var t = this.getColumn(e);
        return null != t ? t.pos: -1
    },
    n.prototype.removeColumns = function(e) {
        var t = this,
        i = t.getBlockMeta(),
        a = t.getRows(),
        n = [];
        _.each(e,
        function(e) {
            if (p(t.getColumn(e))) {
                var a = t.getColumnPos(e);
                n.push(a),
                i.removeMeta(e),
                i.colCount--
            }
        }),
        a.length > 0 && _.each(n.sort(function(e, t) {
            return t - e
        }),
        function(e) {
            _.each(a,
            function(t) {
                t.splice(e, 1)
            })
        })
    },
    n.prototype.setCell = function(e, t, i) {
        var a = this.getColumnPos(t);
        if (a >= 0) {
            for (;
            "undefined" == typeof this.rows[e];) this.addRow(null);
            this.rows[e][a] = i
        }
    },
    n.prototype.getCell = function(e, t) {
        var i = this.getRows(),
        a = this.getColumnPos(t);
        return 0 === i.length || a < 0 ? "": p(i[e][a]) ? i[e][a] : ""
    },
    n.prototype.getCellByPos = function(e, t) {
        return this.rows[e][t]
    },
    n.prototype.getMappedArray = function(e, t, i) {
        var a = this.getBlockMeta().getMetas(),
        n = [];
        for (var o in a) if (a.hasOwnProperty(o)) {
            var r = this.getColumnPos(o);
            r >= 0 && (t ? "N" === a[o].type ? n[r] = (e[o] || 0) + "": (n[r] = e[o] || "", i && (n[r] = n[r] || " ")) : n[r] = e[o])
        }
        return n
    },
    n.prototype.getMappedObject = function(e) {
        var t = this.getBlockMeta().getMetas(),
        i = {};
        for (var a in t) if (t.hasOwnProperty(a)) {
            var n = t[a];
            "N" === n.type ? i[n.name] = 1 * e[n.pos] : i[n.name] = e[n.pos]
        }
        return i
    },
    n.prototype.getMappedRows = function() {
        for (var e = [], t = 0; t < this.rows.length; t++) {
            var i = this.rows[t],
            a = this.getMappedObject(i);
            e.push(a)
        }
        return e
    },
    n.prototype.clone = function() {
        return n.parseBlock(this.getBlockId(), this.toJSON())
    },
    n.build = function(t, o) {
        var r = new n(t),
        s = !1,
        l = [];
        if (e.isArray(o)) {
            var c = new a(t);
            if (e.isPlainObject(o[0])) {
                for (var d in o[0]) l.push(d);
                s = !0
            } else l = o;
            if (e.each(l,
            function(e, t) {
                c.addMeta(new i(t))
            }), r.setBlockMeta(c), s) for (var u = 0; u < o.length; u++) r.addRow(r.getMappedArray(o[u]));
            return r
        }
        return r
    },
    n.buildByNames = function(t, o, r) {
        var s = new n(t),
        l = e.isArray(r);
        if (e.isArray(o)) {
            var c = new a(t);
            e.each(o,
            function(e, t) {
                var a = new i(t);
                l && p(r[e]) && (a.descName = r[e]),
                c.addMeta(a)
            }),
            s.setBlockMeta(c)
        }
        return s
    },
    n.buildByColumns = function(t, o) {
        var r, s = new n(t),
        l = new a(t);
        return e.each(o,
        function(e, t) {
            var a = new i(t.field);
            for (r in i.defaults) r in t && void 0 != t[r] && (a[r] = t[r]);
            a.descName = t.title,
            l.addMeta(a)
        }),
        s.setBlockMeta(l),
        s
    },
    n.prototype.toJSON = function() {
        var e = {},
        t = arguments[0];
        return e[y.ATTRIBUTES] = this.getAttr(),
        e[y.BLOCK_META] = this.getBlockMeta().toJSON(t),
        e[y.BLOCK_DATA] = this.getRows(),
        e
    },
    n.parseBlock = function(e, t) {
        var i, o = t[y.BLOCK_META];
        if (p(o)) {
            var r = a.parseBlockMeta(e, o);
            i = new n(r)
        } else i = new n(e);
        return o = t[y.ATTRIBUTES],
        p(o) && i.setAttr(o),
        o = t[y.BLOCK_DATA],
        p(o) && (i.rows = o),
        i
    };
    var g = function(e) {
        return d.isNumber(e) ? e + "": e
    },
    v = function(e) {
        return null == e ? " ": d.isString(e) && 0 === e.length ? " ": e
    },
    T = function(e, t) {
        for (var i = t,
        a = 0,
        n = e.length; a < n; a++) i = e[a].call(null, i);
        return i
    };
    n.transportContentByFormat = function(t, i) {
        var a, n, o = [],
        r = {
            Number2Str: !0,
            NotEmpty: !0
        };
        if (i = e.extend(i, r), !d.isEiBlock(t)) return t;
        if (i.Number2Str && o.push(g), i.NotEmpty && o.push(v), !o.length) return t;
        a = t.rows || t.getRows();
        for (var s = 0; s < a.length; s++) n = a[s],
        _.each(n,
        function(e, t, i) {
            i[t] = T(o, e)
        });
        return t
    },
    n.prototype.transportContentByFormat = function(e) {
        return transportContentByFormat(this, e)
    },
    o.prototype = new t,
    o.prototype.constructor = o,
    o.prototype.__ClassName__ = "EiInfo",
    o.prototype.getName = function() {
        return this.name
    },
    o.prototype.setName = function(e) {
        this.name = e
    },
    o.prototype.get = function(e) {
        if (!h(e) || m(e)) return null;
        var t, i = e.split("-");
        return 3 === i.length ? (t = this.getBlock(i[0]), p(t) ? t.getCell(parseInt(i[1]), i[2]) : null) : 2 === i.length ? (t = this.getBlock(i[0]), p(t) ? t.get(i[1]) : null) : this.extAttr[i[0]]
    },
    o.prototype.setMsg = function(e) {
        this.msg = e
    },
    o.prototype.getMsg = function() {
        return this.msg
    },
    o.prototype.setMsgKey = function(e) {
        this.msgKey = e
    },
    o.prototype.getMsgKey = function() {
        return this.msgKey
    },
    o.prototype.setDetailMsg = function(e) {
        this.detailMsg = e
    },
    o.prototype.getDetailMsg = function() {
        return this.detailMsg
    },
    o.prototype.setStatus = function(e) {
        this.status = e
    },
    o.prototype.getStatus = function() {
        return this.status
    },
    o.prototype.setDescName = function(e) {
        this.descName = e
    },
    o.prototype.getDescName = function() {
        return this.descName
    },
    o.prototype.addBlock = function(e) {
        this.blocks[e.getBlockId()] = e
    },
    o.prototype.getBlock = function(e) {
        return this.blocks[e]
    },
    o.prototype.getBlocks = function() {
        return this.blocks
    },
    o.prototype.set = function() {
        var e;
        switch (arguments.length > 2 && (e = arguments[0], "undefined" == typeof this.blocks[e] && (this.blocks[e] = new n(e))), arguments.length) {
        case 2:
            if ("string" == typeof arguments[0]) {
                var a = arguments[0].split("-");
                1 == a.length ? t.prototype.set.apply(this, arguments) : 2 == a.length ? this.set(a[0], a[1], arguments[1]) : 3 == a.length && this.set(a[0], a[1], a[2], arguments[1])
            }
            break;
        case 3:
            this.blocks[e].set(arguments[1], arguments[2]);
            break;
        case 4:
            if ("undefined" == typeof this.blocks[e].getBlockMeta().getMeta(arguments[2])) {
                var o = new i(arguments[2]);
                o.pos = this.blocks[e].colCount++,
                this.blocks[e].getBlockMeta().addMeta(o)
            }
            this.blocks[e].setCell(arguments[1], arguments[2], arguments[3])
        }
    },
    o.prototype.setById = function(e) {
        this.setByNameValue(e, r(e).value)
    },
    o.prototype.setByNameValue = function(e, t) {
        if ("[object String]" === Object.prototype.toString.call(e) && e) {
            var i = e.split("-");
            if (3 === i.length) return this.set(i[0], i[1], i[2], t);
            if (2 === i.length) return this.set(i[0], i[1], t);
            if (1 === i.length) return this.set(i[0], t)
        }
    },
    o.prototype.setByNode = function(e) {
        this.setByNodeObject(r(e), arguments[1])
    },
    o.prototype.setByNodeObject = function(t, i) {
        var a, n, o, r = {};
        for (o = t.getElementsByTagName("input"), a = 0; a < o.length; a++) if (n = o[a], i || !e(n).data("exclude")) {
            if ("radio" === n.type && !n.checked) continue;
            if ("checkbox" === n.type) {
                n.checked && (void 0 === r[n.name] ? r[n.name] = n.value: r[n.name] = r[n.name] + "," + n.value);
                continue
            }
            if ("multiselect" === e(n).data("role")) {
                var s = e(n).data("kendoMultiSelect").value().join(",");
                this.setByNameValue(n.name, s)
            } else this.setByNameValue(n.name, n.value)
        }
        for (var l in r) this.setByNameValue(l, r[l]);
        for (o = t.getElementsByTagName("select"), a = 0; a < o.length; a++) if (n = o[a], i || !e(n).data("exclude")) if (n.multiple) {
            for (var c = [], d = 0; d < n.options.length; d++) {
                var u = n[d];
                u.selected === !0 && c.push(u.value)
            }
            this.setByNameValue(n.name, c.join(","))
        } else n.options.length > 0 && (n.selectedIndex >= 0 ? this.setByNameValue(n.name, n.options[n.selectedIndex].value) : this.setByNameValue(n.name, ""));
        for (o = t.getElementsByTagName("textarea"), a = 0; a < o.length; a++) n = o[a],
        !i && e(n).data("exclude") || this.setByNameValue(n.name, n.value)
    },
    o.build = function(t) {
        var i = new o("");
        return e(t)[0] && i.setByNodeObject(e(t)[0]),
        i
    },
    o.parseJSONObject = function(e) {
        var t = k.getEiInfoParser(e);
        return t.parseJSON.call(this, e)
    },
    o.parseJSONString = function(e) {
        return o.parseJSONObject(JSON.parse(e))
    },
    o.prototype.toJSON = function() {
        var e = k.getEiInfoParser(this);
        return e.toJSON.apply(this, arguments)
    },
    o.prototype.toJSONString = function() {
        return JSON.stringify(this.toJSON(arguments))
    },
    o.prototype.clone = function() {
        return o.parseJSONObject(this.toJSON())
    };
    var k = {
        getEiInfoParser: function(e) {
            return "2.0" === e[y.VERSION] ? b.V2: b.V1
        }
    },
    b = {
        V1: {
            toJSON: function() {
                var e = {},
                t = this;
                e[y.EIINFO_NAME] = t.getName(),
                e[y.EIINFO_DESC_NAME] = t.getDescName(),
                e[y.EIINFO_MESSAGE] = t.getMsg(),
                e[y.EIINFO_MESSAGE_KEY] = t.getMsgKey(),
                e[y.EIINFO_DETAIL_MESSAGE] = t.getDetailMsg(),
                e[y.EIINFO_STATUS] = t.getStatus(),
                e[y.ATTRIBUTES] = t.getAttr();
                var i = {};
                for (var a in this.getBlocks()) i[a] = this.getBlock(a).toJSON(arguments);
                return e[y.EIINFO_BLOCKS] = i,
                e
            },
            parseJSON: function(e) {
                var t = new o("");
                delete t[y.VERSION];
                var i = e[y.EIINFO_NAME];
                if (p(i) && t.setName(i), i = e[y.EIINFO_DESC_NAME], p(i) && t.setDescName(i), i = e[y.EIINFO_MESSAGE], p(i) && t.setMsg(i), i = e[y.EIINFO_MESSAGE_KEY], p(i) && t.setMsgKey(i), i = e[y.EIINFO_DETAIL_MESSAGE], p(i) && t.setDetailMsg(i), i = e[y.EIINFO_STATUS], p(i) && t.setStatus(i), i = e[y.ATTRIBUTES], p(i) && t.setAttr(i), i = e[y.EIINFO_BLOCKS], p(i)) for (var a in i) {
                    var r = n.parseBlock(a, i[a]);
                    t.addBlock(r)
                }
                return t
            }
        },
        V2: {
            toJSON: function() {
                var t = this,
                i = e.extend(!0, {},
                t.getAttr());
                i[y.VERSION] = "2.0";
                var a = i[y.SYS] = {};
                a[y.EIINFO_NAME] = t.getName(),
                a[y.EIINFO_DESC_NAME] = t.getDescName(),
                a[y.EIINFO_MESSAGE] = t.getMsg(),
                a[y.EIINFO_MESSAGE_KEY] = t.getMsgKey(),
                a[y.EIINFO_DETAIL_MESSAGE] = t.getDetailMsg(),
                a[y.EIINFO_STATUS] = t.getStatus(),
                a[y.EIINFO_TRACE_ID] = t.traceId || "";
                var n = {};
                for (var o in t.getBlocks()) n[o] = t.getBlock(o).toJSON(arguments);
                return i[y.BLOCKS] = n,
                i
            },
            parseJSON: function(t) {
                var i, a = new o(""),
                r = t[y.SYS];
                if (a[y.VERSION] = "2.0", i = r[y.EIINFO_NAME], p(i) && a.setName(i), i = r[y.EIINFO_DESC_NAME], p(i) && a.setDescName(i), i = r[y.EIINFO_MESSAGE], p(i) && a.setMsg(i), i = r[y.EIINFO_MESSAGE_KEY], p(i) && a.setMsgKey(i), i = r[y.EIINFO_DETAIL_MESSAGE], p(i) && a.setDetailMsg(i), i = r[y.EIINFO_STATUS], p(i) && a.setStatus(i), i = r[y.EIINFO_TRACE_ID], i && (a.traceId = i), i = t[y.BLOCKS], p(i)) for (var s in i) {
                    var l = n.parseBlock(s, i[s]);
                    a.addBlock(l)
                }
                var c = e.extend({},
                t);
                return delete c[y.SYS],
                delete c[y.VERSION],
                delete c[y.BLOCKS],
                i = c,
                p(i) && a.setAttr(i),
                a
            }
        }
    },
    I = {
        EF_FORM_ENAME: "efFormEname",
        EF_FORM_CNAME: "efFormCname",
        EF_FORM_POPUP: "efFormPopup",
        EF_CUR_FORM_ENAME: "efCurFormEname",
        EF_FORM_LOAD_PATH: "efFormLoadPath",
        EF_FORM_STYLE: "efFormStyle",
        EF_FORM_INFO_TAG: "efFormInfoTag",
        EF_FORM_BUTTON_DESC: "efFormButtonDesc",
        EF_CUR_BUTTON_ENAME: "efCurButtonEname",
        SERVICE_NAME: "serviceName",
        METHOD_NAME: "methodName",
        STATUS: "status",
        SQL_NAME: "sqlName",
        EI: "ei",
        EIINFO: "eiinfo",
        SHOW_MSG: "efShowMsg",
        SHOW_DETAIL_MSG: "efShowDetailMsg",
        SHOW_MSG_KEY: "efShowMsgKey",
        LIMIT: "limit",
        OFFSET: "offset",
        COUNT: "count",
        SHOW_COUNT: "showCount",
        ORDER_BY: "orderBy",
        COLUMN_TOTAL_SUM: "columnTotalSum"
    },
    y = {
        ATTRIBUTES: "attr",
        EIINFO_NAME: "name",
        EIINFO_DESC_NAME: "descName",
        EIINFO_MESSAGE: "msg",
        EIINFO_MESSAGE_KEY: "msgKey",
        EIINFO_DETAIL_MESSAGE: "detailMsg",
        EIINFO_STATUS: "status",
        EIINFO_TRACE_ID: "traceId",
        EIINFO_BLOCKS: "blocks",
        BLOCK_META: "meta",
        BLOCK_META_DESC: "desc",
        BLOCK_META_COLUMNLIST: "columns",
        BLOCK_META_COLUMNPOS: "columnPos",
        BLOCK_DATA: "rows",
        SYS: "__sys__",
        BLOCKS: "__blocks__",
        VERSION: "__version__",
        CONTEXT: "__context__"
    };
    s.prototype.EiInfo2JsonString = function(e) {
        var t, i = ["{"];
        p(e.getName()) && (i.push('"', y.EIINFO_NAME, '":', formatNative(e.getName())), t = !0),
        p(e.getDescName()) && (t && i.push(","), i.push(y.EIINFO_DESC_NAME, ":", formatNative(e.getDescName())), t = !0),
        p(e.getAttr()) && (t && i.push(","), i.push(y.ATTRIBUTES, ":", formatNative(e.getAttr())), t = !0),
        t && i.push(","),
        i.push(y.EIINFO_BLOCKS, ":{");
        var a, n = e.getBlocks();
        for (var o in n) {
            var r = n[o];
            a && i.push(","),
            i.push(o, ":", s.prototype.EiBlock2JsonString(r)),
            a = !0
        }
        return i.push("}}"),
        i.join("")
    },
    s.prototype.EiBlock2JsonString = function(e) {
        var t = ["{"];
        t.push(y.ATTRIBUTES, ":", formatNative(e.getAttr())),
        t.push(",", y.BLOCK_META, ":", s.prototype.EiBlockMeta2JsonString(e.getBlockMeta())),
        t.push(",", y.BLOCK_DATA, ":[");
        for (var i, a = e.getRows(), n = 0; n < a.length; n++) {
            var o = a[n];
            i && t.push(","),
            t.push("[");
            var r, l = e.getBlockMeta().getMetas();
            for (var c in l) {
                var d = l[c];
                r && t.push(","),
                t.push(formatNative(o[d.pos])),
                r = !0
            }
            i = !0,
            r = !1,
            t.push("]")
        }
        return t.push("]}"),
        t.join("")
    },
    s.prototype.EiBlockMeta2JsonString = function(e) {
        var t, i = ["{"];
        p(e.getDesc()) && (i.push(y.BLOCK_META_DESC, ":", formatNative(e.getDesc())), t = !0),
        p(e.getAttr()) && (t && i.push(","), i.push(y.ATTRIBUTES, ":", formatNative(e.getAttr())), t = !0),
        t && i.push(","),
        i.push(y.BLOCK_META_COLUMNLIST, ":[");
        var a, n = e.getMetas();
        for (var o in n) {
            var r = n[o];
            a && i.push(","),
            i.push(s.prototype.EiColumn2JsonString(r)),
            a = !0
        }
        return i.push("]}"),
        i.join("")
    },
    s.prototype.EiColumn2JsonString = function(e) {
        var t = ["{"];
        return t.push("name", ":", formatNative(e.name)),
        t.push(","),
        t.push("descName", ":", formatNative(e.descName)),
        t.push(","),
        t.push("type", ":", formatNative(e.type)),
        t.push("}"),
        t.join("")
    },
    l.prototype.parseJsonObject = function(e) {
        var t = new o(""),
        i = e[y.EIINFO_NAME];
        if (p(i) && t.setName(i), i = e[y.EIINFO_DESC_NAME], p(i) && t.setDescName(i), i = e[y.EIINFO_MESSAGE], p(i) && t.setMsg(i), i = e[y.EIINFO_MESSAGE_KEY], p(i) && t.setMsgKey(i), i = e[y.EIINFO_DETAIL_MESSAGE], p(i) && t.setDetailMsg(i), i = e[y.EIINFO_STATUS], p(i) && t.setStatus(i), i = e[y.ATTRIBUTES], p(i) && t.setAttr(i), i = e[y.EIINFO_BLOCKS], p(i)) for (var a in i) {
            var n = l.prototype.parseBlock(a, i[a]);
            t.addBlock(n)
        }
        return t
    },
    l.prototype.parseBlock = function(e, t) {
        var i, a = t[y.BLOCK_META];
        if (p(a)) {
            var o = l.prototype.parseBlockMeta(e, a);
            i = new n(o)
        } else i = new n(e);
        return a = t[y.ATTRIBUTES],
        p(a) && i.setAttr(a),
        a = t[y.BLOCK_DATA],
        p(a) && (i.rows = a),
        i
    },
    l.prototype.parseBlockMeta = function(e, t) {
        var i = new a(e),
        n = t[y.BLOCK_META_DESC];
        if (p(n) && i.setDesc(n), n = t[y.ATTRIBUTES], p(n) && i.setAttr(n), n = t[y.BLOCK_META_COLUMNLIST], p(n)) for (var o = 0; o < n.length; o++) {
            var r = l.prototype.parseColumn(n[o]);
            i.addMeta(r)
        }
        return i
    },
    l.prototype.parseColumn = function(e) {
        var t = new i(e.name);
        for (var a in e) {
            var n = e[a];
            n && n.replace && (n = n.replace(/'/g, "&#39;")),
            t[a] = n
        }
        return t
    };
    var w = new o("$ajaxEi"),
    E = {
        callService: function(e, t, i, a) {
            return this.send(e, null, t, i, a)
        },
        send: function(t, i, a, n, r) {
            var s = f(),
            l = a.toJSONString(),
            c = (e("#efSecurityToken").val(), s + "/service/" + t + "/" + i);
            return null === i && (c = s + "/service/" + t),
            r = e.extend({
                type: "POST",
                contentType: d.AJAX.ContentType.JSON,
                dataType: "json",
                url: c,
                data: l,
                success: function(t) {
                    w = o.parseJSONObject(t),
                    d.ajaxEi = w;
                    var i = w.get("redirect");
                    if (p(i)) {
                        var a = d.getParentWindow() || window;
                        a.location.href = i
                    } else e.isPlainObject(n) && e.isFunction(n.onSuccess) && n.onSuccess(w)
                },
                error: function(t, i, a) {
                    w = null;
                    t.responseText.split("$$$")[1];
                    e.isPlainObject(n) && e.isFunction(n.onFail) && n.onFail(t.responseText.split("$$$")[0], i, a)
                }
            },
            r),
            e.ajax(r)
        },
        sendFuncCall: function(e, t, i) {
            t.set("funcId", e),
            E.send("EPFunc", "call", t, i, !1)
        },
        $send: function(t, i, a) {
            e.ajax({
                type: "POST",
                url: t,
                data: i,
                dataType: "json",
                success: function(e) {
                    w = o.parseJSONObject(e),
                    a.onSuccess(w)
                },
                error: function(e, t, i) {
                    a.onFail(e, t, i)
                }
            })
        }
    };
    c(d, {
        AbstractEi: t,
        EiColumn: i,
        EiBlockMeta: a,
        EiBlock: n,
        EiInfo: o,
        EiConstant: I,
        EiInfoJsonConstants: y,
        EiInfo2Json: s,
        Json2EiInfo: l,
        ajaxEi: w,
        EiCommunicator: E
    }),
    c(window, {
        IPLAT: d,
        AbstractEi: t,
        EiColumn: i,
        EiBlockMeta: a,
        EiBlock: n,
        EiInfo: o,
        EiConstant: I,
        EiInfoJsonConstants: y,
        EiInfo2Json: s,
        Json2EiInfo: l,
        ajaxEi: w,
        EiCommunicator: E
    })
} (jQuery),
function(e) {
    var t = e.extend,
    i = (e.each, window.IPLAT),
    a = window.IPLATUI,
    n = a.CONTEXT_PATH || "",
    o = i.EiInfo,
    r = i.EiCommunicator,
    s = (i.isUndefined, i.isAvailable);
    i.trimString = function(e) {
        return e instanceof Array || e instanceof Object ? JSON.stringify(e) : s(e) ? (e + "").trim() : ""
    },
    i.getCurrentStrWidth = function(t, a) {
        if (i.Browser.isIE8) return 0;
        var n, o = e("<pre>").hide().appendTo(document.body);
        return e(o).html(t).css("font-size", a),
        n = o.width(),
        o.remove(),
        n
    },
    i.copyToClipboard = function(t) {
        if (window.clipboardData) window.clipboardData.setData("Text", t);
        else {
            var i = e("<textarea>");
            e("body").append(i),
            i.val(t).select(),
            document.execCommand("copy"),
            i.remove()
        }
    },
    i.createGrid = function(t, i, n) {
        var o = "result",
        r = a.Config.EFGrid.columnWidth,
        s = a.Config.EFGrid.rowHeight,
        l = n.blockId || o,
        c = i.getBlock(l),
        d = e.extend,
        u = e.isPlainObject,
        f = c.getBlockMeta().getMetas(),
        p = _.map(f,
        function(e, t) {
            var i = e.toJSON(),
            a = "N" === i.type ? "right": "left";
            i.valueType = i.type,
            i.editType = i.editor,
            delete i.editor;
            var n = i.attr,
            o = i.primaryKey,
            l = !0,
            c = i.visible === !1,
            f = {};
            return u(n) && (o = !!n.locked, l = n.enable),
            i.regex && (f["data-regex"] = i.regex),
            i.errorPrompt && (f["data-errorprompt"] = i.errorPrompt),
            d(i, {
                field: i.name,
                title: i.descName,
                hidden: c,
                locked: o,
                enable: l,
                width: i.width || r,
                height: i.height || s,
                attributes: d({
                    align: a,
                    required: !i.nullable,
                    minLength: i.minLength,
                    maxLength: i.maxLength,
                    "data-rules": i.validateType
                },
                f)
            })
        }),
        h = c.getMappedRows(),
        m = d({},
        {
            columns: p,
            dataSource: h
        },
        n);
        return e("#" + t).kendoGrid(m).data("kendoGrid")
    },
    i.openForm = function(t, n, o) {
        var r = new Date,
        s = t.trim() + r.getTime(),
        l = i.createUrl(t, n),
        c = "toolbar=no,location=yes,directories=no,status=yes,menubar=yes,resizable=yes,scrollbars=yes,";
        c += o === !0 ? "width=" + (screen.availWidth - 10) + ",height=" + (screen.availHeight - 30) + ",top=0,left=0": "width=900,height=600,top=" + (screen.availHeight - 600) / 2 + ",left=" + (screen.availWidth - 900) / 2;
        var d = /^\w+$/;
        if (!d.test(s.trim())) return alert("输入的页面号中含有无效字符！"),
        null;
        var u, f = _.find(window.childWindows, {
            name: t
        });
        return f && f.location.href !== l && (f.location.href = l),
        u = e.support.leadingWhitespace ? window.open(f ? "": l, a.Config.Form.reuse ? t: "") : window.open(f ? "": l, a.Config.Form.reuse ? t: "", c),
        f ? void 0 : childWindows.push(u),
        u
    },
    i.createUrl = function(e, t) {
        t = i.trimString(t);
        var a = n + "/web/" + e.trim().toUpperCase();
        return s(t) && (a += "?" + t),
        a
    },
    i.openNewForm = function(e, t, a) {
        var n = window;
        if (null !== n) return i.openForm(e, t, a)
    },
    i.postForm = function(t, a, n) {
        a.set("__PARAMS__", n);
        var o = a.toJSONString(!0),
        r = i.getContextPath();
        e.ajax({
            type: "POST",
            contentType: i.AJAX.ContentType.JSON,
            dataType: "json",
            url: r + "/EU/EU0001.jsp?formEname=" + t,
            data: o,
            success: function(e) {
                "NO_DIRECT" !== e.r && (window.location.href = r + e.r)
            },
            error: function(e) {}
        })
    },
    i.flat2Map = function(t, i, a, n) {
        var o = {};
        if (!e.isArray(t)) return o;
        for (var r = 0; r < t.length; r++) {
            var s = t[r],
            l = s[i],
            c = s[a];
            o[l] = o[l] || [],
            o[c] = o[c] || [],
            s.items = o[l],
            o[c].push(s)
        }
        return o[n]
    },
    i.flat2MapNoItemsEmptyArray = function(e, t, a, n, o) {
        var r = i.flat2Map(e, t, a, n),
        s = function(e) {
            for (var t = 0; t < e.length; t++) o && (e[t].text = e[t][o]),
            e[t].items.length ? s(e[t].items) : delete e[t].items
        };
        return s(r),
        r
    },
    i.map2Flat = function(t, i) {
        var a = t.toJSON(),
        n = i || "items",
        o = [],
        r = function(t) {
            e.each(t,
            function(e, t) {
                t[n] && t[n].length > 0 && r(t[n]),
                o.push(t),
                delete t[n]
            })
        };
        return r(a),
        o
    },
    i.fillNode = function(t, a) {
        var n;
        if ("INPUT" === t.tagName && "button" !== t.type) {
            if (n = a.get(t.name), !s(n)) return;
            if ("dropdownlist" === e(t).data("role")) e(t).data("kendoDropDownList").value(n),
            e(t).data("kendoDropDownList").trigger("change");
            else if ("datepicker" === e(t).data("role") || "datetimepicker" === e(t).data("role")) {
                var o = "datepicker" === e(t).data("role"),
                r = o ? e(t).data("kendoDatePicker") : e(t).data("kendoDateTimePicker"),
                l = r.options,
                c = [l.format],
                d = l.parseFormats;
                c = c.concat(d).concat(_.values(i.FORMAT));
                var u = kendo.parseDate(n, c);
                r.value(u),
                r.trigger("change")
            } else "autocomplete" === e(t).data("role") ? (e(t).data("kendoAutoComplete").value(n), e(t).data("kendoAutoComplete").trigger("change")) : i.EFInput.value(e(t), n)
        } else if ("TEXTAREA" === t.tagName) {
            if (n = a.get(t.name), null === n) return;
            i.EFInput.value(e(t), n)
        } else if ("SELECT" === t.tagName) n = a.get(t.name),
        "multiselect" === e(t).data("role") && (e(t).data("kendoMultiSelect").value(n), e(t).data("kendoMultiSelect").trigger("change"));
        else for (var f = 0; f < t.childNodes.length; f++) try {
            i.fillNode(t.childNodes[f], a)
        } catch(p) {}
    },
    i.clearNode = function(t) {
        if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || "SELECT" === t.tagName) e(t).data("keep") || ("dropdownlist" === e(t).attr("data-role") ? e(t).data("kendoDropDownList").value("") : "multiselect" === e(t).attr("data-role") ? e(t).data("kendoMultiSelect").value("") : "datepicker" === e(t).attr("data-role") ? (e(t).data("kendoDatePicker").value(""), e(t).data("kendoDatePicker").trigger("change")) : "datetimepicker" === e(t).attr("data-role") ? (e(t).data("kendoDateTimePicker").value(""), e(t).data("kendoDateTimePicker").trigger("change")) : "popupInput" === e(t).attr("data-role") ? i.EFPopupInput.clear(e(t)) : "checkbox" === e(t).attr("type") || "radio" === e(t).attr("type") ? e(t).attr("checked", !1) : e(t).val(""));
        else for (var a = 0; a < t.childNodes.length; a++) try {
            i.clearNode(t.childNodes[a])
        } catch(n) {}
    },
    i.submitNode = function(t, i, a, n) {
        var s = o.build(t),
        l = t.find("div[data-role='grid']");
        e.each(l,
        function(t, i) {
            var a = e(i).data("kendoGrid"),
            n = a.getCheckedBlockData();
            s.addBlock(n)
        }),
        r.send(i, a, s, n)
    },
    function() {
        jQuery.fn.iplatSpreadsheet = function(e) {
            this.kendoSpreadsheet(e)
        }
    } (jQuery),
    t(a, {
        EFInput: {},
        EFDatePicker: {},
        EFDateSpan: {},
        EFSelect: {},
        EFMultiSelect: {},
        EFCascadeSelect: {},
        EFColumn: {},
        EFPopupInput: {},
        EFCascadeSelect: {},
        EFTreeInput: {},
        EFAutoComplete: {},
        EFUpload: {},
        EFGrid: {},
        EFTree: {},
        EFTreeList: {},
        EFTab: {},
        EFWindow: {}
    })
} (jQuery),
function(e) {
    var t = e.isPlainObject,
    i = (IPLAT.EiInfo, IPLAT.EiConstant),
    a = e.extend,
    n = ".iplat",
    o = {
        INFO: "info",
        SUCCESS: "success",
        WARNING: "warning",
        ERROR: "error"
    },
    r = {
        info: 10,
        success: 10,
        warning: 20,
        error: 30
    },
    s = {
        INFO: 0,
        DEBUG: 5,
        WARNING: 15,
        ERROR: 25
    },
    l = function(e) {
        var t = {
            msg: "",
            detailMsg: "",
            msgKey: "",
            showMsg: !1
        };
        return e.get(i.SHOW_MSG) === !1 ? t: (e.getStatus() < 0 ? t.msgType = o.ERROR: 0 === e.getStatus() ? t.msgType = o.SUCCESS: e.getStatus() > 0 && (t.msgType = o.WARNING), t.msg = e.getMsg(), t.msgKey = e.getMsgKey(), t.detailMsg = e.getDetailMsg(), e.get(i.SHOW_DETAIL_MSG) !== !1 && IPLATUI.Config.Notification.SHOW_DETAIL_MSG || (t.detailMsg = ""), e.get(i.SHOW_MSG) !== !1 && IPLATUI.Config.Notification.SHOW_MSG || (t.msg = ""), e.get(i.SHOW_MSG_KEY) !== !1 && IPLATUI.Config.Notification.SHOW_MSG_KEY || (t.msgKey = ""), t)
    },
    c = function(i, a, n) {
        var o = {
            msg: "",
            detailMsg: "",
            msgKey: "",
            showMsg: !1
        };
        return IPLATUI.Config.Notification.OFF || r[a] < s[IPLATUI.Config.Notification.LEVEL] ? o: (_.isString(i) ? o.msg = i: IPLAT.isEiInfo(i) || n ? o = l(i) : t(i) && (o = e.extend(o, i)), !isAvailable(o.msg) && isAvailable(o.detailMsg) && (o.msg = o.detailMsg + "", o.detailMsg = ""), isAvailable(o.msg) && (o.msg += "", o.detailMsg = o.detailMsg.replace(/\n/g, "<br>"), o.showMsg = !0), o)
    },
    d = function() {
        var t, i, a = !1,
        r = IPLATUI.Config.Notification.AUTO_HIDE_AFTER || 6e3,
        s = function() {
            if (a) return i;
            var o = IPLATUI.Config.Notification.COPY === !0,
            s = IPLATUI.Config.Notification.APM === !0,
            l = IPLATUI.Config.Notification.LOCK === !0,
            c = 3,
            d = kendo.template(e("#notification-template").html())({
                isCopy: o,
                isLock: l,
                isState: c,
                isAPM: s
            });
            return o && e(document).on("click" + n, ".msg-template-copy",
            function(t) {
                var i = e(this),
                a = e(".msg-template-main").find(".msg-template-content"),
                n = e(".msg-template-main").find(".msg-detail");
                a.length && (IPLAT.copyToClipboard(a.text() + "\n" + n.children().text()), m(i, "复制成功"))
            }),
            l && e(document).on("click" + n, ".msg-template-lock",
            function(a) {
                var n, o = e(this),
                s = i.getNotifications().find("span").eq(0),
                l = e(".msg-template-main");
                if (o.data("fixed") === !0 ? (o.data("fixed", !1), n = !1) : (o.data("fixed", !0), n = !0), l.length) {
                    var c = s.attr("class") || "",
                    d = c.match(/i-(\w+)$/),
                    u = d && d.length ? d[1] : "";
                    u && (n ? (clearTimeout(t), o.find("i").removeClass("i-thumb-tack").addClass("i-thumb-tack-fixed")) : (t = setTimeout(function() {
                        i.hide()
                    },
                    r), o.find("i").removeClass("i-thumb-tack-fixed").addClass("i-thumb-tack")))
                }
            }),
            s && e(document).on("click" + n, ".msg-template-link",
            function(t) {
                var i = IPLAT.ajaxEi ? IPLAT.ajaxEi.traceId: "";
                isAvailable(i) ? /\${/.test(IPLATUI.APM_URL) ? m(e(this), "iPlatAPM应用地址配置不正确,请到EDCC03配置") : window.open(IPLATUI.APM_URL + "/web/" + IPLATUI.APM_ANALYSIS + "?delay=false&&traceId=" + i) : m(e(this), "没有traceId")
            }),
            i = e("#notification-util").kendoNotification({
                position: {
                    top: 0,
                    left: IPLATUI.Config.Notification.LEFT
                },
                hide: function(i) {
                    clearTimeout(t),
                    e(".msg-template-lock").removeData()
                },
                allowHideAfter: 0,
                autoHideAfter: 0,
                button: !0,
                stacking: "up",
                width: IPLATUI.Config.Notification.WIDTH,
                templates: [{
                    type: "success",
                    template: d
                },
                {
                    type: "info",
                    template: d
                },
                {
                    type: "error",
                    template: d
                },
                {
                    type: "warning",
                    template: d
                }],
                hideOnClick: !1
            }).data("kendoNotification"),
            a = !0,
            i
        };
        return function(a) {
            var l = arguments.length > 1 ? arguments[1] : o.SUCCESS,
            d = arguments.length > 2 ? arguments[2] : IPLAT.isEiInfo(a),
            u = kendo.template(e("#msg-template").html());
            l = _.indexOf([o.SUCCESS, o.WARNING, o.INFO, o.ERROR], l) < 0 ? o.SUCCESS: l;
            var f = function() {
                i = s();
                var f = c(a, l, d);
                f.showMsg && (i.hide(), l = f.msgType ? f.msgType: l, i.show(u(f), l), e(".k-notification").parent().css("z-index", 10004), t = setTimeout(function() {
                    i.hide()
                },
                r), l === o.ERROR && e(".msg-template-lock").trigger("click" + n))
            };
            if (IPLAT.Util.inIframe()) try {
                window !== IPLAT.getParentWindow() && e.isFunction(IPLAT.getParentWindow().NotificationUtil) && IPLAT.getParentWindow().NotificationUtil(a, l, d)
            } catch(p) {
                f()
            } else f()
        }
    } (),
    u = function() {
        var t, i = {
            title: "",
            content: ""
        },
        a = function(a) {
            var n = a.windowId || "w-" + Date.now();
            e("body").append("<div id='" + n + "'></div>");
            var o = e("#" + n).kendoWindow({
                title: "",
                visible: !1,
                modal: !0,
                actions: ["Close"],
                animation: {
                    close: {
                        duration: 500
                    },
                    open: {
                        duration: 500
                    }
                }
            });
            return o.on("click",
            function(e) {
                var t = Array.prototype.slice.call(arguments),
                i = e.target || e.srcElement,
                a = o.data("kendoWindow").options.ok,
                n = o.data("kendoWindow").options.cancel;
                i.className.indexOf("query-sure") > -1 && a && a.apply(o, t),
                i.className.indexOf("query-cancel") > -1 && n && n.apply(o, t)
            }),
            o.on("submit",
            function(e) {
                var t = Array.prototype.slice.call(arguments);
                return i.submit && i.submit.apply(o, t),
                !1
            }),
            t = o.data("kendoWindow")
        };
        return function(n) {
            return t = a(n),
            i = e.extend(i, n),
            t.setOptions(i),
            t.title(i.title),
            t.content(i.content),
            t.center().open(),
            t
        }
    } (),
    f = function(t) {
        var i = arguments[1],
        a = arguments[2],
        n = arguments[3],
        o = {
            title: IPLATUI.Config.Modal.ALERT_TITLE,
            minWidth: IPLATUI.Config.Modal.ALERT_MIN_WIDTH
        };
        IPLAT.isString(t) ? (o.message = t, e.isFunction(i) && (o.okFn = i), IPLAT.isString(a) && "" !== IPLAT.trimString(a) && (o.title = a), IPLAT.isNumber(n) && n >= 300 && (o.minWidth = n)) : o = e.extend(o, t);
        var r = kendo.template(e("#alert-template").html())({
            message: o.message.replace(/\n/g, "<br/>"),
            ok: IPLAT.CONSTANTS.CONFIRM_BUTTON_NAME
        });
        return u({
            title: o.title,
            actions: !1,
            resizable: !1,
            content: r,
            minWidth: o.minWidth,
            ok: function() {
                var t = this.data("kendoWindow");
                e.isFunction(o.okFn) && o.okFn(),
                t.destroy()
            }
        })
    },
    p = function(t) {
        var i = arguments[1],
        a = arguments[2],
        n = arguments[3],
        o = arguments[4],
        r = {
            title: IPLATUI.Config.Modal.CONFIRM_TITLE,
            minWidth: IPLATUI.Config.Modal.CONFIRM_MIN_WIDTH
        };
        IPLAT.isString(t) ? (r.message = t, e.isFunction(i) && (r.okFn = i), e.isFunction(a) && (r.cancelFn = a), IPLAT.isString(n) && "" !== IPLAT.trimString(n) && (r.title = n), IPLAT.isNumber(o) && o >= 300 && (r.minWidth = o)) : r = e.extend(r, t);
        var s = kendo.template(e("#confirm-template").html())({
            message: r.message.replace(/\n/g, "<br/>"),
            ok: IPLAT.CONSTANTS.CONFIRM_BUTTON_NAME,
            cancel: IPLAT.CONSTANTS.CANCEL_BUTTON_NAME
        }),
        l = kendo.guid();
        return u({
            windowId: l,
            title: r.title,
            actions: !1,
            resizable: !1,
            content: s,
            minWidth: r.minWidth,
            ok: function() {
                var t = this.data("kendoWindow"); ! e.isFunction(r.okFn) || r.okFn() instanceof kendo.ui.Window || t.destroy()
            },
            cancel: function() {
                var t = e("#" + l).data("kendoWindow");
                e.isFunction(r.cancelFn) && r.cancelFn(),
                t.destroy()
            }
        })
    },
    h = function(t) {
        var i = arguments[1],
        a = arguments[2],
        n = arguments[3],
        o = arguments[4],
        r = {
            title: IPLATUI.Config.Modal.PROMPT_TITLE,
            minWidth: IPLATUI.Config.Modal.PROMPT_MIN_WIDTH
        };
        IPLAT.isString(t) ? (r.message = t, e.isFunction(i) && (r.okFn = i), e.isFunction(a) && (r.cancelFn = a), IPLAT.isString(n) && "" !== IPLAT.trimString(n) && (r.title = n), IPLAT.isNumber(o) && o >= 300 && (r.minWidth = o)) : r = e.extend(r, t);
        var s = kendo.template(e("#prompt-template").html())({
            message: r.message.replace(/\n/g, "<br/>"),
            ok: IPLAT.CONSTANTS.CONFIRM_BUTTON_NAME,
            cancel: IPLAT.CONSTANTS.CANCEL_BUTTON_NAME
        }),
        l = kendo.guid();
        return u({
            windowId: l,
            title: r.title,
            actions: !1,
            resizable: !1,
            content: s,
            minWidth: r.minWidth,
            ok: function() {
                var t = this.data("kendoWindow"),
                i = t.element.find(".kendo-modal-input-content"),
                a = e("input", i).val() || ""; ! e.isFunction(r.okFn) || r.okFn(a) instanceof kendo.ui.Window || t.destroy()
            },
            cancel: function() {
                var t = e("#" + l).data("kendoWindow");
                e.isFunction(r.cancelFn) && r.cancelFn(),
                t.destroy()
            }
        })
    },
    m = function(t, i) {
        var a = e(t),
        n = a.kendoTooltip({
            showAfter: 0,
            animation: !1,
            content: function() {
                return i
            },
            hide: function() {
                a.removeAttr("data-role"),
                this.destroy()
            }
        }).data("kendoTooltip");
        n.show();
        var o = n,
        r = e(".k-tooltip").closest("div.k-animation-container"),
        s = a.offset();
        r.css("top", s.top + a.height() + 6 + "px"),
        r.css("left", s.left - (o.popup.element[0].offsetWidth - (a.width() - 2)) / 2 + "px")
    },
    g = function(t) {
        var i = e("#" + t.windowId);
        i.attr(IPLAT.Util.pickDOMAttributes(t));
        var n, o, r, s, l = t.hasOwnProperty("content");
        l ? (n = IPLATUI.Config.EFWindow.width, o = IPLATUI.Config.EFWindow.height, s = IPLATUI.Config.EFWindow.left, r = IPLATUI.Config.EFWindow.top) : (n = IPLATUI.Config.EFWindow.minWidth, o = IPLATUI.Config.EFWindow.minHeight, s = IPLATUI.Config.EFWindow.minLeft, r = IPLATUI.Config.EFWindow.minTop);
        var c = {
            iframe: !0,
            pinned: !0,
            visible: !1,
            width: n,
            height: o,
            position: {
                top: r,
                left: s
            }
        },
        d = a({},
        IPLATUI.EFWindow[t.windowId]),
        u = i.kendoWindow(a({},
        c, t, d)).data("kendoWindow");
        return t.lazyload === !0 && t.lazyUrl && (u.bind("open",
        function() {
            var i = u.element,
            a = t.lazyUrl,
            n = t.refresh,
            o = function(t, i) {
                var a = e("<iframe>");
                a.prop("width", "100%"),
                a.prop("height", "100%"),
                a.prop("frameborder", "0"),
                a.prop("src", t),
                i.data("kendoWindow").content(a),
                i.data("loadComplete", !0)
            };
            if (n === !0) o(a, i);
            else {
                var r = i.data("loadComplete");
                r || o(a, i)
            }
        }), u.bind("close",
        function() {
            var e = u.element,
            i = t.refresh;
            i === !0 && e.empty()
        })),
        u
    };
    e.extend(IPLAT, {
        alert: f,
        confirm: p,
        prompt: h,
        Window: g,
        Notification: o,
        WindowUtil: u,
        NotificationUtil: d,
        TooltipUtil: m
    }),
    e.extend(window, {
        WindowUtil: u,
        NotificationUtil: d
    })
} (jQuery),
function(e) {
    function t() {
        var e = window.navigator.userAgent.toLowerCase();
        return ! (!e.match(/(iPhone|iPod|Android|ios)/i) && "micromessenger" != e.match(/MicroMessenger/i))
    }
    var i = IPLAT.isUndefined,
    a = ".k-pager-first",
    n = ".k-pager-last",
    o = ".k-pager-input",
    r = ".k-pager-info",
    s = "count-active",
    l = "i-grid-count",
    c = (e.isArray, e.each, e.extend),
    d = t();
    IPLAT.EFGrid._initPager = function(e) {
        var t = e.gridConfig;
        i(t.showCount) || (e.showCount = t.showCount, delete t.showCount),
        i(t.pageable) || (c(!0, e, {
            pageable: t.pageable
        }), delete t.pageable)
    };
    var u = function(t) {
        var i = t.options,
        a = t.element;
        if (IPLAT.EFGrid._hasToolbarPager(i)) {
            var n = e(t.pager.element),
            o = IPLAT.EFGrid._hasToolbarButtons(i.toolbarConfig),
            r = a.find("#ef_grid_toolbar_" + i.blockId);
            r.length > 0 ? (n.addClass("i-pager-top"), o && r.find("div.kendo-xplat-add").length > 0 ? n.insertAfter(r.find(".kendo-xplat-add")) : n.prependTo(r), e(window).resize(kendo.throttle(function() {
                n.show()
            },
            100))) : n.hide(),
            d && n.css("width", "80px")
        }
    };
    IPLAT.EFGrid._handlePagerCount = function(t) {
        var i = t.options,
        a = i.pageable;
        if (a) {
            var n = e(t.pager.element);
            n.addClass("i-grid-pager");
            var o = e(e("#grid-count-template").html()).insertAfter(n.find(".k-pager-sizes"));
            o.attr("id", "count_" + t.getBlockId()).on("click",
            function() {
                e(this).hasClass(s) ? (t.options.showCount = !1, t.dataSource.query()) : (t.options.showCount = !0, t.dataSource.query())
            }),
            IPLAT.EFGrid._refreshPagerCount(t)
        }
    },
    IPLAT.EFGrid._refreshPagerCount = function(t) {
        var i = t.options,
        c = i.pageable;
        if (c) {
            var d = e(t.pager.element),
            f = d.find("." + l);
            t.options.showCount ? (f.addClass(s), d.find(a).show(), d.find(n).show(), d.find(o).show(), d.find(r).show()) : (f.removeClass(s), d.find(a).hide(), d.find(n).hide(), d.find(o).hide(), d.find(r).hide()),
            u(t)
        }
    }
} (window.jQuery),
function(e) {
    var t = IPLAT.EiConstant,
    i = IPLAT.EiInfo,
    a = IPLAT.EiBlock,
    n = IPLAT.WindowUtil,
    o = IPLATUI.Config.Layout.ICON,
    r = IPLATUI.Config.Layout.ICON_AND_TEXT,
    s = e.each,
    l = function(e) {
        var t = 0,
        i = 0;
        return s(e,
        function(e, a) {
            if (0 === t && (t = "1" === a.column_locked ? 1 : 0), 0 === i && (i = "1" === a.column_locked ? 0 : 1), t + i === 2) return ! 1
        }),
        t + i === 2
    };
    IPLAT.EFGrid._buildPersonal = function(c, d) {
        var u, f, p, h = c.blockId,
        m = "personal_" + h,
        g = -1,
        v = c.personalInfo.getBlock(m).getMappedRows();
        return f = new i("personalInfo"),
        f.addBlock(new a(c.personalInfo.getBlock(m).getBlockMeta())),
        IPLAT.isAvailable(c.eiInfo.traceId) && (f.traceId = c.eiInfo.traceId),
        s(c.columns,
        function(e, t) {
            if (!t.aid) {
                g++;
                var i = _.find(v, {
                    column_ename: t.field
                });
                i ? (f.set(m, g, "tedfa60_id", i.tedfa60_id), f.set(m, g, "project_ename", i.project_ename), f.set(m, g, "form_ename", i.form_ename), f.set(m, g, "grid_id", i.grid_id), f.set(m, g, "user_id", i.user_id), f.set(m, g, "column_ename", i.column_ename), f.set(m, g, "column_cname", i.column_cname), f.set(m, g, "column_locked", i.column_locked), f.set(m, g, "column_hidden", i.column_hidden), f.set(m, g, "column_width", i.column_width), f.set(m, g, "column_order", i.column_order), f.set(m, g, "soft_delete", i.soft_delete)) : (f.set(m, g, "tedfa60_id", ""), f.set(m, g, "column_order", g + 1), f.set(m, g, "project_ename", IPLATUI.PROJECT_ENAME), f.set(m, g, "form_ename", IPLATUI.FORM_ENAME), f.set(m, g, "grid_id", c.blockId), f.set(m, g, "user_id", IPLATUI.USER_ID), f.set(m, g, "column_ename", t.field), f.set(m, g, "column_cname", t.title), f.set(m, g, "column_locked", t.locked ? "1": "0"), f.set(m, g, "column_hidden", t.hidden ? "1": "0"), f.set(m, g, "column_width", t.width), f.set(m, g, "soft_delete", "0"))
            }
        }),
        f.set(m, t.COUNT, g + 1),
        f.set(m, t.LIMIT, 20),
        f.set(m, t.OFFSET, 0),
        u = IPLAT.xGrid({
            gridId: "ef_personal_grid_" + c.blockId,
            needAuth: !1,
            tagId: c.blockId + "-" + kendo.guid(),
            columns: [{
                field: "tedfa60_id",
                hidden: !0
            },
            {
                field: "project_ename",
                hidden: !0
            },
            {
                field: "form_ename",
                hidden: !0
            },
            {
                field: "grid_id",
                hidden: !0
            },
            {
                field: "user_id",
                hidden: !0
            },
            {
                field: "column_ename",
                enable: !1,
                template: function(e) {
                    return "1" === e.column_locked ? "<span style='color: red'>" + e.column_ename + "</span>": e.column_ename
                }
            },
            {
                field: "column_locked",
                displayType: "checkbox",
                editType: "checkbox"
            },
            {
                field: "column_hidden",
                displayType: "checkbox",
                editType: "checkbox"
            },
            {
                field: "column_width",
                defaultValue: 96,
                attributes: {
                    "data-rules": "integer"
                }
            },
            {
                field: "column_order",
                hidden: !0
            },
            {
                field: "soft_delete",
                title: "配置状态",
                template: function(e) {
                    return "1" === e.soft_delete ? "默认配置": "可自定义"
                }
            }],
            queryMethod: function(e) {
                var i = e.data.skip,
                a = e.data.pageSize,
                n = f.clone();
                n.set(m, t.LIMIT, a);
                var o = n.getBlock(m),
                r = o.getRows();
                o.setRows(r.slice(i, i + a)),
                n.set(t.SHOW_MSG, !1),
                e.success(n.toJSON())
            },
            query: function() {
                var e = new i("personalInfo");
                return e.set("inqu_status-0-project_ename", IPLATUI.PROJECT_ENAME),
                e.set("inqu_status-0-form_ename", IPLATUI.FORM_ENAME),
                e.set("inqu_status-0-grid_id", c.blockId),
                e.set("inqu_status-0-user_id", IPLATUI.USER_ID),
                e
            },
            beforeEdit: function(e) {
                if ("1" === e.model.soft_delete) e.preventDefault(),
                n({
                    title: "提示",
                    content: "<div class='kendo-del-message'>使用了默认配置的列，不可编辑</div>"
                });
                else if ("soft_delete" === e.field) e.preventDefault();
                else if ("column_hidden" === e.field) {
                    var t = _.find(e.sender.columns,
                    function(t) {
                        return ! (t.field !== e.field || !t.attributes || !t.attributes.mustShow)
                    });
                    t && n({
                        title: "提示",
                        content: "<div class='kendo-del-message'>" + t.title + " 列不可隐藏</div>"
                    })
                }
            },
            onCheckRow: function(e) {},
            onRowClick: function(e) {},
            dataBinding: function() {},
            saveOptions: {
                create: !0,
                update: !1
            },
            blockId: m,
            height: 400,
            autoBind: !1,
            toolbarConfig: {
                add: !1,
                "delete": !1,
                save: !1,
                cancel: !1,
                buttons: [{
                    name: m + "_up",
                    attributes: {
                        style: "float:left",
                        title: "向上"
                    },
                    icon: "css:fa-arrow-up",
                    layout: o,
                    click: function() {
                        if (0 === u.getCheckedRows().length) n({
                            title: "向上移动列",
                            content: "<div class='kendo-del-message'>没有选中的行</div>"
                        });
                        else if (l(u.getCheckedRows())) n({
                            title: "向上移动列",
                            content: "<div class='kendo-del-message'>不允许同时移动固定列和非固定列</div>"
                        });
                        else {
                            var e = _.filter(u.getDataItems(), {
                                column_locked: "1"
                            }).length;
                            s(u.getCheckedRows(),
                            function(t, i) {
                                var a, o = u.dataSource.indexOf(i);
                                if (a = "1" === i.column_locked ? Math.max(0, o - 1) : Math.max(e, o - 1), a == o) return n(a > 0 ? {
                                    title: "向上移动列",
                                    content: "<div class='kendo-del-message'>非固定列不能移动到固定列的上方</div>"
                                }: {
                                    title: "向上移动列",
                                    content: "<div class='kendo-del-message'>已经移动到了顶部</div>"
                                }),
                                !1;
                                var r = u.dataSource.data(),
                                s = r[a];
                                i.set("column_order", a + 1),
                                r[a] = i,
                                r[a + 1] = s,
                                s.set("column_order", a + 2)
                            })
                        }
                    }
                },
                {
                    name: m + "_down",
                    icon: "css:fa-arrow-down",
                    layout: o,
                    attributes: {
                        style: "float:left",
                        title: "向下"
                    },
                    click: function() {
                        if (0 === u.getCheckedRows().length) n({
                            title: "向下移动列",
                            content: "<div class='kendo-del-message'>没有选中的行</div>"
                        });
                        else if (l(u.getCheckedRows())) n({
                            title: "向下移动列",
                            content: "<div class='kendo-del-message'>不允许同时移动固定列和非固定列</div>"
                        });
                        else {
                            var e = _.filter(u.getDataItems(), {
                                column_locked: "1"
                            }).length;
                            s(u.getCheckedRows().reverse(),
                            function(t, i) {
                                var a, o = u.dataSource.indexOf(i);
                                if (a = "1" === i.column_locked ? Math.min(e - 1, o + 1) : Math.min(u.dataSource.total() - 1, o + 1), a == o) return n(a === e - 1 ? {
                                    title: "向下移动列",
                                    content: "<div class='kendo-del-message'>固定列不能移动到非固定列的下方</div>"
                                }: {
                                    title: "向下移动列",
                                    content: "<div class='kendo-del-message'>已经移动到了底部</div>"
                                }),
                                !1;
                                var r = u.dataSource.data(),
                                s = r[a];
                                i.set("column_order", a + 1),
                                r[a] = i,
                                r[a - 1] = s,
                                s.set("column_order", a)
                            })
                        }
                    }
                },
                {
                    name: m + "_undo",
                    icon: "css:fa-ban",
                    text: "默认配置",
                    layout: r,
                    attributes: {
                        style: "float:left",
                        title: "默认配置"
                    },
                    click: function() {
                        s(u.getCheckedRows(),
                        function(e, t) {
                            t.set("soft_delete", "1")
                        }),
                        u.saveChanges()
                    }
                },
                {
                    name: m + "_redo",
                    icon: "css:fa-database",
                    text: "自定义配置",
                    layout: r,
                    attributes: {
                        style: "float:left",
                        title: "自定义配置"
                    },
                    click: function() {
                        s(u.getCheckedRows(),
                        function(e, t) {
                            t.set("soft_delete", "0")
                        }),
                        u.saveChanges()
                    }
                },
                {
                    name: m + "_cancel",
                    icon: "css:fa-times-circle-o",
                    text: "取消",
                    layout: "3",
                    attributes: {
                        style: "float: right"
                    },
                    click: function() {
                        u.cancelChanges()
                    }
                },
                {
                    name: m + "_refresh",
                    icon: "css:fa-refresh",
                    text: "保存并刷新",
                    layout: "3",
                    attributes: {
                        style: "float: right"
                    },
                    click: function() {
                        u.saveChanges(),
                        window.location.reload()
                    }
                }]
            },
            eiInfo: f,
            url: IPLATUI.CONTEXT_PATH + "/service",
            serviceName: "EDFA60"
        }),
        p = e("#ef_personal_window_" + c.blockId).kendoWindow({
            title: "自定义列信息",
            width: "80%",
            position: {
                top: "10%",
                left: "10%"
            },
            visible: !1,
            modal: !0,
            actions: ["Close"],
            animation: {
                close: {
                    duration: 500
                },
                open: {
                    duration: 500
                }
            }
        }).data("kendoWindow")
    }
} (window.jQuery),
function(e) {
    function t() {
        var e = window.navigator.userAgent.toLowerCase();
        return ! (!e.match(/(iPhone|iPod|Android|ios)/i) && "micromessenger" != e.match(/MicroMessenger/i))
    }
    var i = IPLAT.EiConstant,
    a = IPLAT.EiInfo,
    n = IPLAT.WindowUtil,
    o = IPLATUI.Config.Layout.TEXT,
    r = IPLATUI.Config.Layout.ICON,
    s = IPLATUI.Config.Layout.ICON_AND_TEXT,
    l = [],
    c = ".IPLAT",
    d = "onDelete",
    u = IPLAT.EFGrid.DELETE_ACTION,
    f = e.isArray,
    p = e.each,
    h = e.extend,
    m = t();
    IPLAT.EFGrid._initToolbar = function(t) {
        var g = t.gridConfig,
        v = t.needAuth,
        T = h(!0, {
            add: !0,
            cancel: !0,
            save: !0,
            "delete": !0
        },
        t.toolbarConfig, g.toolbarConfig);
        if (delete g.toolbarConfig, f(T.buttons) || (T.buttons = []), f(T.default_layout) || (T.default_layout = []), v) {
            l = [];
            var k, b = __eiInfo.getAttr()[i.EF_FORM_BUTTON_DESC];
            IPLAT.isString(b) ? k = a.parseJSONString(b) : e.isPlainObject(b) && (k = a.parseJSONObject(b));
            var I = _.filter(_.keys(k.getBlocks()),
            function(e) {
                return e.trim().toUpperCase() === "GRID:" + t.gridId.toUpperCase()
            }),
            y = [],
            w = /^((INSERT($|_\d+$))|(SAVE($|_\d+$))|(CANCEL($|_\d+$))|(DELETE($|_\d+$)))/,
            E = {};
            p(I,
            function(e, t) {
                for (var i = k.getBlock(t), a = 0; a < i.getRows().length; a++) {
                    var n = i.getCell(a, "button_ename").toString().toUpperCase();
                    if ("1" === i.getCell(a, "button_status").toString()) if (w.test(n)) {
                        var o = n.split("_")[0];
                        o = "INSERT" === o ? "add": o.toLowerCase(),
                        E[o] = !0,
                        l.push({
                            name: o,
                            text: i.getCell(a, "button_cname").toString(),
                            icon: i.getCell(a, "uri").toString(),
                            layout: i.getCell(a, "layout").toString()
                        })
                    } else y.push({
                        name: n,
                        text: i.getCell(a, "button_cname").toString(),
                        icon: i.getCell(a, "uri").toString(),
                        layout: i.getCell(a, "layout").toString()
                    })
                }
            }),
            T = _.mapObject(T,
            function(e, t) {
                return ! (_.indexOf(_.keys(E), t) < 0 && _.indexOf(["add", "cancel", "save", "delete"], t) > -1) && e
            }),
            T.buttons = y.concat(T.buttons)
        }
        var A = t.blockId,
        C = t.gridId,
        P = "#ef_personal_window_" + A,
        x = [],
        S = [{
            name: "add",
            text: "新增",
            icon: "css:k-add",
            layout: s
        },
        {
            name: "save-changes",
            text: "保存",
            icon: "css:k-update",
            layout: s
        },
        {
            name: "cancel-changes",
            text: "取消",
            icon: "css:k-cancel",
            layout: s
        },
        {
            name: "delete",
            text: "删除",
            icon: "css:k-delete",
            layout: s,
            click: function(t) {
                var i = e("#" + C).data("kendoGrid"),
                a = i.dataSource,
                o = [];
                if (!i.trigger(d + c, {
                    event: t
                })) {
                    p(i.getCheckedRows(),
                    function(e, t) {
                        o.push(t)
                    });
                    var r = kendo.template(e("#del-template").html())({
                        message: "确认删除此数据么?",
                        ok: "确定",
                        cancel: "取消"
                    });
                    n(o.length > 0 ? {
                        title: "删除",
                        content: r,
                        ok: function() {
                            var e = this;
                            i._action = u,
                            i._deleteRows = i.getCheckedRowsIndex();
                            for (var t = 0; t < o.length; t++) {
                                var n = _.indexOf(i._checkedRows, o[t].uid);
                                i._checkedRows.splice(n, 1)
                            }
                            i.removeRows(o, !1),
                            a.sync(),
                            e.data("kendoWindow").close()
                        },
                        cancel: function() {
                            var e = this;
                            e.data("kendoWindow").close()
                        }
                    }: {
                        title: "删除",
                        content: "<div class='kendo-del-message'>没有选中的行</div>"
                    })
                }
            }
        }],
        L = function(e, t) {
            var i = S[e];
            if (f(T.buttons)) {
                var a = _.findIndex(T.buttons,
                function(e) {
                    return e.name === t
                });
                a > -1 && (i = h(i, T.buttons[a]), T.buttons.splice(a, 1))
            }
            return i
        },
        F = [];
        p(["add", "save-changes", "cancel-changes", "delete"],
        function(e, t) {
            var i = t.split("-")[0];
            if (T[i]) {
                var a = _.find(l, {
                    name: i
                }),
                n = L(e, t);
                a ? m ? F.push(n) : (a = h({},
                S[e], a), a.name = t, F.push(a)) : F.push(n)
            }
        }),
        f(T.buttons) && (F = F.concat(T.buttons)),
        T.buttons = F;
        p(F,
        function(e, t) {
            var i = t.layout || o,
            a = "",
            n = "<span>" + (t.text || "") + "</span>",
            s = IPLAT.Util.parseBtnClass(t.icon),
            l = s.css,
            c = s.btnClass;
            i !== o && (i === r && (l += " i-btn-only-icon", n = ""), a = "<span class='" + l + "'></span>");
            var d = {
                text: n,
                type: "button",
                attributes: h(t.attributes, {
                    "class": "kendo-xplat-" + t.name + " xplat-float-right",
                    id: t.name
                }),
                template: kendo.template("<button class='i-btn-lg " + c + " k-grid-" + t.name + "' type='button'>" + a + n + "</button>")
            };
            m && (a = "<span class='k-icon " + t.icon.slice(4) + "'></span>", "" == t.icon.slice(4) && (a = "<span class='sl-icon fa fa-map-o'></span>"), 1 == t.icon.length && (a = "<span class='fa fa-file-o' style='padding-right: 4px'></span>"), d.attributes = h(t.attributes, {
                "class": "kendo-xplat-" + t.name + " xplat-float-right",
                id: t.name,
                style: "min-width: 24px"
            }), d.template = kendo.template("<button class='i-btn-lg " + c + " k-grid-" + t.name + "' type='button' style='min-width:24px; padding:2px 0px 2px 5px;'>" + a + "</button>")),
            x.push(d)
        });
        var N = function(t) {
            var i = [];
            t.personal && i.push({
                name: "personalGrid_" + A,
                text: "自定义数据列",
                click: function() {
                    var t = e(P).data("kendoWindow");
                    t.center().open()
                }
            });
            var n = h({},
            t, t.gridConfig),
            o = n.exportGrid;
            if (o) {
                var r = {},
                s = new a("");
                r.frontExport = !0,
                r.exportFileType = "xls",
                r.exportBlockId = A,
                r.exportFileName = o.exportFileName || A,
                e.isPlainObject(o) && (r.exportFileType = o.exportFileType || "xls", r.exportBlockId = o.exportBlockId || A, isAvailable(o.exportServiceName) && isAvailable(o.exportMethodName) && (r.exportServiceName = o.exportServiceName, r.exportMethodName = o.exportMethodName, r.frontExport = !1)),
                i.push({
                    name: "exportGrid_" + A,
                    text: "导出数据",
                    click: function() {
                        var t = e("#" + C).data("kendoGrid"),
                        i = !0;
                        if (e.isFunction(o.beforeExport) && (i = o.beforeExport(t)), i) {
                            if (e.isFunction(o.exportFileName) && (r.exportFileName = o.exportFileName(t)), r.frontExport) {
                                s = e.isFunction(o.exportEiInfo) ? o.exportEiInfo(t) : IPLAT.isEiInfo(o.exportEiInfo) ? o.exportEiInfo: t.getDisplayEiInfo(r.exportBlockId);
                                var a = _.keys(s.getBlock(A).getBlockMeta().getMetas()),
                                n = o.exportColumns || a,
                                l = o.unExportColumns || [],
                                c = _.filter(a,
                                function(e) {
                                    return n.indexOf(e) < 0
                                }).concat(_.filter(l,
                                function(e) {
                                    return a.indexOf(e) > -1
                                }));
                                c.length > 0 && s.getBlock(A).removeColumns(c),
                                r.exportEiInfo = s.toJSONString()
                            } else e.isFunction(o.queryEiInfo) ? r.queryInfo = o.queryEiInfo(t) : IPLAT.isEiInfo(o.queryEiInfo) ? r.queryInfo = o.queryEiInfo: r.queryInfo = t.getQueryInfo(),
                            IPLAT.isEiInfo(r.queryInfo) && (r.queryInfo = r.queryInfo.toJSONString());
                            IPLAT.Util.exportGrid(r)
                        }
                    }
                })
            }
            return i
        },
        O = N(t);
        return f(T.setting) || (T.setting = []),
        O = O.concat(T.setting),
        T.settingActions = O,
        O.length > 0 && x.push({
            type: "buttonGroup",
            buttons: O,
            overflow: "always"
        }),
        T.kendoToolBarItems = x,
        IPLAT.EFGrid._hasToolbarPager(t) && IPLAT.EFGrid._hasToolbarButtons(T) && t.showCount && h(!0, t.pageable, {
            messages: {
                display: "共 {2} 条"
            }
        }),
        t.toolbarConfig = T,
        T
    },
    IPLAT.EFGrid._createToolBar = function(t, i) {
        var a = t.blockId,
        n = t.toolbarConfig.kendoToolBarItems,
        o = "#ef_grid_toolbar_" + a,
        r = i.element;
        r.find(o).kendoToolBar({
            items: n
        });
        var s = t.toolbarConfig.buttons;
        p(s,
        function(t, i) {
            e.isFunction(i.click) && e(o).on("click", ".kendo-xplat-" + i.name, i.click)
        }),
        IPLAT.EFGrid._hasToolbarSettings(t.toolbarConfig) && e(o).addClass("k-iplat-setting-open"),
        e(o).on("click.IPLAT", ".k-grid-cancel-changes",
        function() {
            i._checkedRows = []
        })
    }
} (window.jQuery),
function(e) {
    function t() {
        var e = {};
        this.has = function(t) {
            return e.hasOwnProperty(t)
        },
        this.add = function(t) {
            return ! this.has(t) && (e[t] = t, !0)
        },
        this.valuesLegacy = function() {
            var t = [];
            for (var i in e) t.push(i);
            return t
        }
    }
    function a() {
        this.elements = [],
        this.size = function() {
            return this.elements.length
        },
        this.put = function(e, t) {
            1 == this.containsKey(e) && this.containsValue(t) ? 1 == this.remove(e) && this.elements.push({
                key: e,
                value: t
            }) : this.elements.push({
                key: e,
                value: t
            })
        },
        this.set = this.put,
        this.containsKey = function(e) {
            var t = !1;
            try {
                for (i = 0; i < this.elements.length; i++) this.elements[i].key == e && (t = !0)
            } catch(a) {
                t = !1
            }
            return t
        },
        this.containsValue = function(e) {
            var t = !1;
            try {
                for (i = 0; i < this.elements.length; i++) this.elements[i].value == e && (t = !0)
            } catch(a) {
                t = !1
            }
            return t
        },
        this.get = function(e) {
            try {
                for (i = 0; i < this.elements.length; i++) if (this.elements[i].key == e) return this.elements[i].value
            } catch(t) {
                return null
            }
        }
    }
    function n(e, i) {
        if (fe(e) && e.length > 0) {
            ge(i,
            function(t, a) {
                ge(e,
                function(n, o) {
                    a.field === o.field && (ke(!0, i[t], o), e[n] = {})
                })
            });
            var a = [],
            n = {},
            o = new t;
            ge(e,
            function(e, t) {
                t.field && ("front" === t.position ? a.push(t) : i.push(t)),
                t.columns && v(n, t, o)
            }),
            i = a.concat(i);
            var r = [];
            ge(i,
            function(e, t) {
                t.field && (o.has(t.field) || r.push(t))
            }),
            i = r
        }
        return i
    }
    function o(e) {
        var t = e.eiBlock,
        i = e.tagId,
        a = e.gridConfig,
        o = e.autoDraw || "yes",
        r = [],
        c = "",
        f = {},
        p = pe(IPLAT.EFGrid[i]) ? IPLAT.EFGrid[i].columns: [];
        if (void 0 !== a.rowNo && (e.rowNo = a.rowNo), "no" === o || "false" === o) r = p,
        ge(r,
        function(e, t) {
            t.width && (t.iplatWidth = !0)
        });
        else {
            var h = t.getBlockMeta().getMetas();
            if (r = _.chain(h).map(function(e) {
                var t = e.toJSON(),
                a = t.align;
                t.valueType = t.type,
                t.editType = t.editor,
                delete t.editor,
                t.readonly && _.indexOf(IPLAT.EFGrid[i].readonlyColumns, t.name) < 0 && IPLAT.EFGrid[i].readonlyColumns.push(t.name);
                var n, o = t.attr,
                r = t.primaryKey,
                s = !0,
                l = t.visible === !1,
                c = {};
                pe(o) && (r = !!o.locked, s = o.enable, n = o.headerAlign),
                t.regex && (c["data-regex"] = t.regex),
                t.errorPrompt && (c["data-errorprompt"] = t.errorPrompt);
                var d = {
                    field: t.name,
                    title: t.descName,
                    hidden: l,
                    locked: r,
                    enable: s,
                    width: t.width || k.columnWidth,
                    height: t.height || k.rowHeight,
                    attributes: ke({
                        align: a,
                        required: !t.nullable,
                        minLength: t.minLength,
                        maxLength: t.maxLength,
                        "data-rules": t.validateType
                    },
                    c)
                };
                return me(n) && (d.headerAttributes = {
                    style: "text-align:" + n
                }),
                ke(t, d)
            }).sortBy("pos").value(), "mixed" === o || "override" === o) {
                var m = _.map(p,
                function(e, t) {
                    return ke({
                        tagPos: t
                    },
                    e)
                });
                r = n(p, r),
                "override" === o && (r = _.chain(r).filter(function(e) {
                    return _.findIndex(m,
                    function(t) {
                        var i = t.field === e.field;
                        return i && (e.tagPos = t.tagPos),
                        i
                    }) >= 0
                }).sortBy("tagPos").map(function(e) {
                    return delete e.tagPos,
                    e
                }).value())
            }
        }
        if (fe(a.columns)) {
            var g = a.columns.concat([]);
            ge(g,
            function(e, t) {
                t.width && (t.iplatWidth = !0)
            }),
            r = n(g, r),
            delete a.columns
        }
        return fe(e.columns) && (r = n(e.columns, r), delete e.columns),
        c = r[0].field,
        ge(r,
        function(e, t) {
            c = t.primaryKey ? t.field: c,
            t.width = t.width || k.columnWidth,
            f[t.field] = {
                editable: t.enable,
                defaultValue: t.defaultValue || "",
                validation: t.attributes
            };
            var i = (t.attributes || {}).type || t.type;
            "N" === i && (i = "number"),
            _.indexOf(ae, i) >= 0 && (f[t.field].type = i),
            "dropdown" === t.editType && (f[t.field].filterable = {
                ui: function(e) {
                    e.kendoDropDownList({
                        dataSource: t.values,
                        dataTextField: t.textField,
                        dataValueField: t.valueField
                    })
                }
            })
        }),
        delete f[c].defaultValue,
        e.columns = r,
        e.columnCallback = a.columnCallback,
        e.readonly === !0 && _.each(e.columns,
        function(e) {
            e.readonly = !0
        }),
        s(e),
        l(e),
        d(e),
        u(e),
        ke(!0, e, {
            modelId: c,
            dataSource: {
                schema: {
                    model: {
                        id: c,
                        fields: f
                    }
                }
            }
        }),
        r
    }
    function r(e) {
        var t = e.personal,
        i = "personal_" + e.blockId,
        a = [],
        n = [];
        if (o(e), t) {
            ie = e.personalInfo,
            a = ie.getBlock(i).getMappedRows();
            var r, s = new Array(e.columns.length);
            n = e.columns,
            ge(n,
            function(e, t) {
                var i = _.find(a, {
                    column_ename: t.field
                });
                i && (t.locked = "1" === i.column_locked, t.hidden = "1" === i.column_hidden, t.width = i.column_width + "px", r = i.column_order || 0, s[r] = t)
            }),
            ge(n,
            function(e, t) {
                if (_.indexOf(s, t) < 0) for (var i = 0; i < n.length; i++) if (!s[i]) {
                    s[i] = t;
                    break
                }
            }),
            e.columns = s
        }
        var l = _.filter(e.columns,
        function(e) {
            return !! e.field
        });
        e.eiBlock = E.buildByColumns(e.blockId, l)
    }
    function s(t) {
        function i(t, i) {
            var a, i = !!i;
            ge(t,
            function(t, n) {
                a = e.extend({
                    sortable: (n.attr || {}).sort
                },
                {
                    sortable: n.iplatSort
                },
                {
                    sortable: n.sortable
                }),
                n.sortable = a.sortable === i ? i: !i
            })
        }
        var a = t.iplatSort,
        n = t.columns;
        "single" === a ? (t.sortable = {
            mode: "single",
            allowUnsort: !0,
            initialDirection: "asc"
        },
        i(n, !1)) : "all" === a ? (t.sortable = {
            mode: "multiple",
            allowUnsort: !0,
            initialDirection: "asc"
        },
        i(n, !1)) : "setted" === a && (t.sortable = {
            mode: "multiple",
            allowUnsort: !0,
            initialDirection: "asc"
        },
        i(n, !0))
    }
    function l(t) {
        var i, a, n = t.columns,
        o = t.rowNo,
        r = t.gridConfig,
        s = t.gridId,
        l = t.sumType,
        d = t.columnCallback,
        u = !1,
        f = null,
        p = [];
        i = a = 0;
        var h = function(e) {
            var t = !1;
            ge(e,
            function(e, n) {
                "N" === n.valueType && (IPLAT.isUndefined(n.attributes) && (n.attributes = {}), n.attributes.align = "right", n.sumType = n.sumType || l, "all" !== f && ("page" === n.sumType && (i = 1, f = "page"), "total" === n.sumType && (a = 1, f = "total"), "all" !== n.sumType && i + a !== 2 || (f = "all")), t = !0),
                IPLAT.isUndefined(n.columns) || h(n.columns, n)
            }),
            2 === arguments.length && (arguments[1].subColumnSum = t)
        };
        h(n);
        var m = e("#sum-template").html(),
        g = function(e) {
            e.sumType && "N" === e.valueType && (p.push({
                field: e.field,
                format: e.format,
                aggregate: "sum"
            }), e.footerAttributes = ke(e.footerAttributes, {
                align: "right"
            }), e.footerTemplate = kendo.template(m.replace(/#=data.@field@.sumType#/g, e.sumType).replace(/@field@/g, e.field))),
            e.subColumnSum === !0 && ge(e.columns,
            function(e, t) {
                g(t)
            })
        };
        ge(n,
        function(i, a) {
            switch (g(a), c(a), a.displayType) {
            case "checkbox":
                a.template = function(e) {
                    var t = !!(1 * e[a.field]),
                    i = t ? "checked": "";
                    return "<input type='checkbox' disabled='disabled' value='" + t + "'" + i + " class='i-grid-checkbox'>"
                };
                break;
            case "radio":
                a.template = function(e) {
                    var t = !!e[a.field],
                    i = t ? "checked": "";
                    return "<input type='radio' disabled='disabled' value='" + t + "'" + i + " class='i-grid-radio'>"
                };
                break;
            case "date":
            case "datetime":
                a.template = function(e) {
                    var t = e[a.field];
                    if (a.parseFormats && a.parseFormats[0]) {
                        var i = kendo.parseDate(t, a.parseFormats[0]);
                        return kendo.format(a.format, i || "")
                    }
                    return kendo.format(a.format, t) || t || ""
                };
                break;
            case "url":
                a.template = function(t) {
                    var i = t[a.field] || "";
                    return he(d) && !u && (u = !0, e("body").on("click", "#" + s + " a.cell-url",
                    function(t) {
                        var i = e("#" + s).data("kendoGrid").dataItem(e(this).closest("tr"));
                        d(a.field, i)
                    })),
                    "<a href='#' class='cell-url'>" + i + "</a>"
                };
                break;
            case "button":
                a.enable = !1;
                break;
            case "image":
                a.enable = !1
            }
            var n = IPLAT.Util.boolConfigHelper(t.dynamic.editHelper, IPLATUI.Config.EFGrid.editHelper),
            o = !(a.readonly === !0 || a.enable === !1);
            if (he(t.customEditHelper) && (o = t.customEditHelper(a)), o) {
                var r = n ? "i-validate-helper i-edit-helper": "i-validate-helper",
                l = "<div class='" + r + "'>",
                f = IPLAT.Util.boolConfigHelper(a.encoded, ne),
                p = "";
                if (_.isString(a.template)) a.template = l + a.template + "</div>";
                else if (he(a.template)) {
                    var h = a.template;
                    a.template = function(e) {
                        return p = h.call(this, e),
                        void 0 === p && (p = ""),
                        f && (p = kendo.htmlEncode(p)),
                        l + p + "</div>"
                    }
                } else a.format ? a.template = function(e) {
                    return p = kendo.format(a.format, e[a.field]),
                    f && (p = kendo.htmlEncode(p)),
                    l + p + "</div>"
                }: f ? a.template = l + "#:" + a.field + " != null ? " + a.field + ": ''#</div>": a.template = l + "#=" + a.field + " != null ? " + a.field + ": ''#</div>"
            }
        }),
        t.finalSumType = f,
        t.aggregate = p;
        var v = "",
        T = "";
        if (f && (v = e("#sum-template").html().replace(/data\.@field@\./g, ""), T = kendo.template(v)({
            sumType: f,
            page: "小计",
            sum: "总计"
        }), t.enable ? v = "checkbox": (o = t.rowNo = !0, v = "rowNo")), o) {
            var k = [{
                headerAttributes: {
                    resizable: !1,
                    style: "padding: 3px;"
                },
                headerTemplate: "<span>" + IPLATUI.Config.EFGrid.rowNoText + "</span>",
                template: function(e) {
                    var t = e.parent();
                    return "<span class='row-no'>" + (t.indexOf(e) + 1) + "</span>"
                },
                width: "40px",
                attributes: {
                    align: IPLATUI.Config.EFGrid.rowNoAlign
                },
                pos: -1,
                aid: !0,
                enable: !1,
                iplatWidth: !0,
                locked: !0
            }];
            "rowNo" === v && (k[0].footerTemplate = T),
            n = k.concat(n)
        }
        if (t.enable) {
            if (!/hidden/gi.test(t.checkMode)) {
                var b = [ke({},
                {
                    headerTemplate: "<input type='checkbox' class='check-all' />",
                    attributes: {
                        align: "center"
                    },
                    template: '<input type="checkbox" value=#=uid# class="kendo-check-box check-one" />',
                    width: "40px",
                    pos: -2,
                    aid: !0,
                    headerAttributes: {
                        align: "center",
                        shortcut_menu: !1,
                        resizable: !1
                    },
                    iplatWidth: !0,
                    enable: !1,
                    locked: !0
                },
                r.checkColumn)];
                "checkbox" === v && (b[0].footerTemplate = T, b[0].width = "40px"),
                n = b.concat(n)
            }
        } else t.toolbarConfig = ke(!0, t.toolbarConfig, r.toolbarConfig, {
            add: !1,
            cancel: !1,
            save: !1,
            "delete": !1
        });
        t.columns = n
    }
    function c(t) {
        var i = !0;
        if (t.readonly !== !0 && "true" !== e.trim(t.readonly) && "readonly" !== e.trim(t.readonly) || (i = !1), t.enable !== !1 && "false" !== t.enable || (i = !1), i && t.copy === !0) {
            var a = t.editType || t.popupType || "C",
            n = "<a class='k-grid-copy k-state-border-down' data-type='" + a + "' href='javascript:;' ><span class='k-icon k-i-maximize'></span></a>";
            "string" == typeof t.headerTemplate ? t.headerTemplate = n + t.headerTemplate: "function" == typeof t.headerTemplate ? t.headerTemplate = n + t.headerTemplate.call(null, t) : t.headerTemplate = n + t.title
        }
    }
    function d(t) {
        var i = t.columns,
        a = t.gridId;
        ge(i,
        function(t, i) {
            if (i.attributes && i.attributes.required) {
                var n = "<span class='i-input-required'>*</span>";
                "string" == typeof i.headerTemplate ? i.headerTemplate = n + i.headerTemplate: "function" == typeof i.headerTemplate ? i.headerTemplate = n + i.headerTemplate.call(null, i) : i.headerTemplate = "<span class='i-input-required'>*</span>" + i.title
            }
            switch (i.editType) {
            case "textarea":
                i.editor = function(t, n) {
                    var o = n.field,
                    r = n.model,
                    s = e("#" + a).data("kendoGrid"),
                    l = i.attributes.required,
                    c = r[o];
                    l !== !0 && "true" !== e.trim(l) || (l = !0),
                    IPLAT.isString(c) || (c = "");
                    var d = e('<span class="k-widget k-dropdown i-popup-input k-header"><span class="k-dropdown-wrap"><input type="text" readonly="readonly" id="' + o + '" class="textareaColumn" value="' + c.replace(/[\r\n\v\f\t ]+/gi, " ") + '"' + (l ? "required": "") + '><span class="k-select"><span id="icon_' + o + '" class="i-icon i-popup-textarea"></span></span></span></span>');
                    l && t.addClass("i-invalid-cell"),
                    d.appendTo(t),
                    e("#icon_" + o).mousedown(function() {
                        var t = e(this);
                        IPLAT.Popup.popupTextArea({
                            content: r[o],
                            pele: t,
                            callback: function(e) {
                                s.setCellValue(r, o, e),
                                this.data("kendoWindow").close()
                            }
                        })
                    })
                };
                break;
            case "checkbox":
                i.editor = function(t, i) {
                    var a = i.field,
                    n = !!(1 * i.model[a]),
                    o = n ? "checked": "",
                    r = e("<input type='checkbox' " + o + " >");
                    r.appendTo(t),
                    r.on("click",
                    function(e) {
                        var t = this.checked;
                        i.model.set(a, t ? "1": "0"),
                        r.prop("checked", t)
                    })
                };
                break;
            case "radio":
                i.editor = function(t, i) {
                    var a = i.field,
                    n = !!(1 * i.model[a]),
                    o = n ? "checked": "",
                    r = e("<input type='radio' " + o + " >");
                    r.appendTo(t),
                    r.on("click",
                    function(e) {
                        var t = this.checked;
                        i.model.set(a, t ? "1": "0"),
                        r.prop("checked", t)
                    })
                };
                break;
            case "date":
            case "datetime":
                var o = i.format || i.dateFormat;
                if (i.format = "{0:" + o + "}", _.isFunction(i.editor)) break;
                i.editor = function(t, a) {
                    var n = e("<input />"),
                    o = i.attributes || {};
                    n.attr("name", a.field),
                    "true" !== o.required && o.required !== !0 || (n.prop("required", "true"), t.addClass("i-invalid-cell")),
                    n.attr("id", "__colDate_" + a.field),
                    n.appendTo(t);
                    var r = ke({
                        dateId: "__colDate_" + a.field,
                        format: i.dateFormat,
                        parseFormats: i.parseFormats,
                        role: i.editType
                    },
                    i.dynamic),
                    s = IPLAT.Date(r);
                    r._readonly && s.readonly()
                };
                break;
            case "combo":
            case "dropdown":
                i.editor = function(t, a) {
                    var n = e("<input />"),
                    o = i.attributes || {};
                    n.attr("name", a.field),
                    o.required !== !0 && o !== !0 || (n.prop("required", "true"), t.addClass("i-invalid-cell")),
                    n.appendTo(t);
                    var r = i.itemTemplate || "#=" + i.textField + "#",
                    s = he(i.filter) ? i.filter.call(n, a) || [] : i.values,
                    l = ke({
                        valuePrimitive: !0,
                        value: i.defaultValue,
                        template: r,
                        valueTemplate: r,
                        dataTextField: i.textField,
                        dataValueField: i.valueField,
                        dataSource: s
                    },
                    o);
                    n.kendoDropDownList(l)
                };
                break;
            case "multiSelect":
                i.editor = function(t, a) {
                    var n = a.field,
                    o = (t.closest("tr"), e('<select id="' + n + '"  style="width: 100%;"></select>')),
                    r = a.model[a.field] || i.defaultValue;
                    o.appendTo(t),
                    "true" === i.attributes.required && (o.prop("required", "true"), t.addClass("i-invalid-cell"));
                    var s = i.itemTemplate || "#=" + i.textField + "#",
                    l = he(i.filter) ? i.filter.call(o, a) || [] : i.values,
                    c = ke(!0, {
                        valuePrimitive: !0,
                        value: r.split(","),
                        template: s,
                        valueTemplate: s,
                        dataTextField: i.textField,
                        dataValueField: i.valueField,
                        dataSource: l,
                        autoClose: !0,
                        change: function(e) {
                            var t = e.sender.value();
                            t.length > 0 ? a.model.set(a.field, t.join(",")) : a.model[a.field] = ""
                        }
                    },
                    i.dynamic);
                    o.kendoMultiSelect(c)
                }
            }
        })
    }
    function u(e) {
        var t = e.columns,
        i = k.headerAttributes || {};
        ge(t,
        function(e, t) {
            t.headerTemplate || t.headerAttributes || (t.headerAttributes = i)
        })
    }
    function f(t) {
        var i = t.element;
        i && i.on("click", "a.k-grid-copy",
        function(i) {
            var a = e(this),
            n = a.data(),
            o = n.type,
            r = a.closest("th"),
            s = r.data("field"),
            l = t.findColumnByField(s);
            switch (o) {
            case "C":
                IPLAT.ColumnCopy.input(t, r, a, {
                    backFill: l.backFill
                });
                break;
            case "textarea":
                IPLAT.Popup.popupTextArea({
                    title:
                    "批量复制",
                    content: "",
                    pele: a,
                    callback: function(i) {
                        var a = this;
                        if (e.isFunction(l.backFill)) l.backFill.call(t, {
                            value: i,
                            window: a.data("kendoWindow"),
                            copy: !0
                        });
                        else {
                            var n = t.getCheckedRows();
                            e.each(n,
                            function(e, a) {
                                t.setCellValue(a, s, i)
                            }),
                            a.data("kendoWindow").close()
                        }
                    }
                });
                break;
            case "date":
            case "datetime":
                var c = ke({
                    backFill: l.backFill,
                    format: l.dateFormat,
                    parseFormats: l.parseFormats,
                    role: l.editType
                },
                l.dynamic);
                IPLAT.ColumnCopy.date(t, r, a, c);
                break;
            case "combo":
            case "dropdown":
                var d = l.itemTemplate || "#=" + l.textField + "#";
                IPLAT.ColumnCopy.select(t, r, a, {
                    valuePrimitive: !0,
                    value: l.defaultValue,
                    template: d,
                    valueTemplate: d,
                    dataTextField: l.textField,
                    dataValueField: l.valueField,
                    backFill: l.backFill,
                    dataSource: l.values
                });
                break;
            case "multiSelect":
                var d = l.itemTemplate || "#=" + l.textField + "#";
                IPLAT.ColumnCopy.multiSelect(t, r, a, {
                    valuePrimitive: !0,
                    value: l.defaultValue,
                    template: d,
                    valueTemplate: d,
                    dataTextField: l.textField,
                    dataValueField: l.valueField,
                    dataSource: l.values,
                    backFill: l.backFill,
                    autoClose: !0
                });
                break;
            case "popup":
                var u = l.popupOptions;
                u.popupType = u.popupType.replace("COLUMN", "INPUT");
                var f = ke({
                    textElement: r,
                    copy: !0,
                    init: l.init,
                    query: l.query,
                    backFill: l.backFill,
                    backFillGrid: t
                },
                u);
                IPLAT.Popup.popupGrid(f);
                break;
            case "tree":
                var p = l.treeOptions;
                p.popupType = p.popupType.replace("COLUMN", "INPUT");
                var h = ke({},
                p, {
                    copy: !0,
                    textElement: r,
                    containerId: p.containerId + "_copy",
                    treeId: p.treeId + "_copy",
                    init: l.init,
                    query: l.query,
                    backFill: l.backFill,
                    backFillGrid: t
                });
                IPLAT.Popup.popupTree(h)
            }
            return ! 1
        })
    }
    function p(t) {
        var i, a, n, o = t.blockId,
        r = t.gridId,
        s = t.finalSumType,
        l = kendo.data.Model.define({
            shouldSerialize: be
        });
        return i = {
            batch: !0,
            serverFiltering: !0,
            serverPaging: !0,
            serverSorting: !0,
            schema: {
                modelBase: l,
                errors: function(e) {
                    return 0 != I.getStatus() || a ? I.getStatus() < 0 ? I: null: "表格[" + o + "]操作失败，原因[缺失数据块]"
                },
                total: function(t) {
                    var i = a.get(y.COUNT),
                    n = a.get(y.LIMIT),
                    s = e("#" + r).data("kendoGrid"),
                    l = "true" === a.get(y.SHOW_COUNT);
                    if (l && e.isNumeric(i) && parseInt(i) >= 0) this.isOver = !1;
                    else {
                        var c = I.getBlock(o).getMappedRows(),
                        d = s.dataSource,
                        u = n || d.pageSize(),
                        f = d.page();
                        c.length < u ? (i = (f - 1) * u + c.length, this.count = i, this.isOver = !0) : (this.isOver = !1, i = (f + 1) * u)
                    }
                    return i
                },
                data: function(t) {
                    I = w.parseJSONObject(t);
                    var i = e("#" + r).data("kendoGrid"),
                    n = i.pager;
                    i.eiInfo = I,
                    i.eiBlock = I.getBlock(o),
                    IPLAT.ajaxEi = I,
                    this.isOver && n && (n.dataSource._total = this.count);
                    var s = I.getBlock(o).getMappedRows(),
                    l = a.get(y.LIMIT) || i.dataSource.pageSize();
                    return n && (n.dataSource._pageSize = l),
                    s.slice(0, l)
                }
            },
            error: function(t) {
                var i = e("#" + r).data("kendoGrid"),
                a = t.errors;
                i._action === O && (i.cancelChanges(), i.setCheckedRows(i._deleteRows)),
                t.errors || (a = IPLAT.Util.formatErrorMessage(t.xhr && t.xhr.responseText || ""), t.errors = a),
                i.trigger(H + S, {
                    errorMsg: t.errors,
                    xhr: t.xhr
                }) || P(a, x.ERROR)
            },
            requestEnd: function(t) {
                var i = this,
                s = t.type,
                l = t.response;
                I = null;
                try {
                    n = e("#" + r).data("kendoGrid"),
                    n._action = s || n._action,
                    I = w.parseJSONObject(l),
                    a = I.getBlock(o);
                    var c = I.getStatus();
                    if (c >= 0) {
                        if ("read" === s) {
                            var d = n.options.autoDraw;
                            "dynamic" === d && "keep" !== I.get(ee) && (IPLAT.Util.unbindHandlers(i, "change"), n.options.toolbarConfig = null, n._rebuild(I))
                        }
                        if (!n.trigger(j + S, {
                            eiInfo: I,
                            type: s
                        })) {
                            var u = 0 === c ? x.SUCCESS: x.WARNING;
                            P(I, u),
                            "read" !== s && n.unCheckAllRows()
                        }
                    } else if (I.set(y.SHOW_DETAIL_MSG, !0), t.errors = I, isAvailable(I.get("redirect"))) {
                        var f = IPLAT.getParentWindow() || window;
                        f.location.href = I.get("redirect")
                    }
                } catch(p) {}
            }
        },
        s && (i.serverAggregates = !0, i.aggregate = t.aggregate, i.schema.aggregates = function(e) {
            I = w.parseJSONObject(e);
            var i, a = I.getBlock(o).getMappedRows(),
            n = 0,
            r = I.get(o + "-" + y.COLUMN_TOTAL_SUM) || {},
            l = {};
            return i = IPLAT.isAvailable(e.__aggregate__) ? e.__aggregate__: t.aggregate,
            ge(i,
            function(e, t) {
                var i = t.field;
                "all" !== s && "page" !== s || (n = 0, ge(a,
                function(e, t) {
                    n += parseFloat(t[i]) || 0
                }));
                var o = IPLAT.isAvailable(r[i]) ? r[i] : "",
                c = n.toFixed(2);
                t.format && (o = kendo.format(t.format, o), c = kendo.format(t.format, n)),
                l[i] = {
                    sum: o,
                    page: c,
                    sumType: s
                }
            }),
            l
        }),
        i
    }
    function h(e) {
        var t = p(e),
        i = e.dataSource,
        a = {};
        if (e.strict) a = i;
        else {
            var n = e.url;
            n ? ke(!0, a, t, {
                transport: we.getTransport("REST", e)
            },
            i) : ke(!0, a, t, i)
        }
        return a
    }
    function m(e) {
        var t, i, a = e.blockId,
        n = e.eiInfo,
        o = e.configId;
        return e.tagId = e.tagId || a + "-" + kendo.guid(),
        e.eiBlock = n.getBlock(a),
        e.dynamic = e.dynamic || {},
        e = ke(!0, {},
        k, e),
        e.eiBlock ? (t = e.gridConfig = ke({},
        IPLATUI.EFGrid[o || a]), r(e), i = h(e), IPLAT.EFGrid._initPager(e), e.toolbarConfig = IPLAT.EFGrid._initToolbar(e), IPLAT.EFGrid._hasToolBar(e) && ke(!0, e, {
            toolbar: [{
                template: kendo.template("<div id='ef_grid_toolbar_" + a + "' class='grid_toolbar' ></div>")
            }]
        }), ke(!0, {
            dataSource: i
        },
        e, t)) : (P("表格[" + a + "]初始化失败，原因[缺失数据块]", x.ERROR), !1)
    }
    function g(t, i) {
        var a = t.autoFit,
        n = i.element;
        IPLAT.isEiInfo(t.personalInfo) && (t.personalWindow = IPLAT.EFGrid._buildPersonal(t, i)),
        i._checkedRows = [];
        var o = function() {
            var a = null;
            n.on("click.IPLAT", "tr[role=row]",
            function(n) {
                if (IPLAT.Util.stopPropagation(n), a && clearTimeout(a), 2 !== n.detail) {
                    var o = e(n.target) || e(n.srcElement),
                    r = e(this),
                    s = i.dataItem(r),
                    l = r.index();
                    a = setTimeout(function() {
                        var e = o.closest("td"),
                        a = "THEAD";
                        if (e.is("td") && !e.is("td.k-edit-cell") || r[0].parentNode.nodeName !== a) {
                            t.checkMode.indexOf("row") >= 0 && i.setCheckedRows(l);
                            var c = i.cellIndex(e),
                            d = "";
                            i.columns[c] && (d = i.columns[c].field),
                            i.trigger(Q + S, {
                                event: n,
                                td: e,
                                field: d,
                                model: s,
                                row: l
                            });
                            var u = i.element.find("tr[data-uid=" + s.uid + "]");
                            i.trigger(Y + S, {
                                event: n,
                                tr: u,
                                model: s,
                                row: l
                            })
                        }
                    },
                    IPLATUI.Config.Timer.dblclick)
                }
            }),
            n.on("dblclick.IPLAT", "tr[role=row]",
            function(n) {
                IPLAT.Util.stopPropagation(n),
                a && clearTimeout(a);
                var o = e(n.target) || e(n.srcElement),
                r = e(this),
                s = i.dataItem(r),
                l = o.closest("td"),
                c = "THEAD",
                d = r.index();
                if (l.is("td") && !l.is("td.k-edit-cell") || r[0].parentNode.nodeName !== c) {
                    t.checkMode.indexOf("row") >= 0 && i.setCheckedRows(d);
                    var u = i.element.find("tr[data-uid=" + s.uid + "]");
                    i.trigger(Z + S, {
                        event: n,
                        tr: u,
                        model: s,
                        row: d
                    })
                }
            }),
            n.on("click.IPLAT", "input.check-all",
            function(t) {
                IPLAT.Util.stopPropagation(t);
                var a = t.target || t.srcElement,
                o = a.checked;
                i.trigger(X + S, {
                    event: t,
                    checked: o
                }),
                n.find("input.check-one").each(function(t, i) {
                    var a = e(i);
                    i.checked = o,
                    a.trigger("check-one", [!0])
                })
            }),
            n.on("click.IPLAT check-one", "input.check-one",
            function(a, o) {
                IPLAT.Util.stopPropagation(a);
                var r = this,
                s = r.checked,
                l = e(r),
                c = l.val(),
                d = _.indexOf(i._checkedRows, c);
                t.checkMode.indexOf("single") >= 0 && ge(i.getCheckedRows(),
                function(e, t) {
                    var i = t.uid;
                    if (i !== c) {
                        var a = n.find("input[value=" + i + "]");
                        a.length > 0 && (a[0].checked = !1, a.eq(0).closest("tr").removeClass("i-state-selected k-state-selected"), n.find(".k-grid-content tr[data-uid=" + i + "]").removeClass("i-state-selected k-state-selected"))
                    }
                });
                var u = n.find(".k-grid-content tr[data-uid=" + c + "]");
                if (s ? (l.closest("tr").addClass("i-state-selected k-state-selected"), u.addClass("i-state-selected k-state-selected"), d < 0 && i._checkedRows.push(c)) : (l.closest("tr").removeClass("i-state-selected k-state-selected"), u.removeClass("i-state-selected k-state-selected"), d >= 0 && i._checkedRows.splice(d, 1)), a.shiftKey) {
                    var f, p, h, m, g, v, T = n.find("input.check-one");
                    i._checkedRows.length < 2 ? h = 0 : (f = i._checkedRows[i._checkedRows.length - 2], p = n.find("input[value=" + f + "]"), h = _.indexOf(T, p[0])),
                    m = _.indexOf(T, l[0]),
                    g = Math.min(h, m),
                    v = Math.max(h, m);
                    for (var k = g; k < v; k++) c = T.eq(k).val(),
                    d = _.indexOf(i._checkedRows, c),
                    d < 0 && (T[k].checked = !0, T.eq(k).trigger("check-one", [!0]))
                }
                var b = l.closest("tr"),
                I = i.dataItem(b),
                y = b.index(),
                w = i.element.find("tr[data-uid=" + I.uid + "]");
                i.trigger(J + S, {
                    fake: o,
                    event: a,
                    checked: s,
                    model: I,
                    tr: w,
                    row: y
                })
            })
        };
        if (IPLAT.EFGrid._hasToolBar(t) && IPLAT.EFGrid._createToolBar(t, i), o(), i.bind("page",
        function() {
            i._checkedRows = []
        }), i.one("autoFit",
        function() {
            var e = this,
            t = e.options.columns;
            ge(t,
            function(t, i) {
                i.iplatWidth || e.autoFitColumn(t)
            })
        }), i.bind("dataBound",
        function(n) {
            var o = e("#" + t.gridId).find(".check-all");
            o.length > 0 && (o[0].checked = !1),
            i.refreshCheckRows(),
            e("input[type=checkbox]").closest("td").css("text-align", "center");
            var r = n.sender.wrapper,
            s = n.sender.table,
            l = s.closest(".k-grid-content");
            r.toggleClass("no-scrollbar", s[0].offsetHeight <= l[0].offsetHeight),
            setTimeout(function() {
                i.resize(!0)
            },
            300),
            IPLAT.EFGrid._refreshPagerCount(i),
            a && this.trigger("autoFit"),
            Pe(i),
            xe(i)
        }), !t.showCount && i.pager) {
            var r = i.pager.element;
            r.addClass("no-show-count")
        }
        if (f(i), n.keydown(function(t) {
            var a = n.find(".k-grid-content tr.i-state-selected"),
            o = n.find(".k-grid-content-locked tr.i-state-selected"),
            r = [],
            s = 0;
            ge(a,
            function(t, i) {
                0 === o.length ? s = i.children.length: (s = o[t].children.length + i.children.length, ge(o[t].children,
                function() {
                    return e(this).find("[type='checkbox']").length > 0 ? s -= 1 : void r.push(this)
                })),
                ge(i.children,
                function() {
                    r.push(this)
                })
            });
            var l = n.find("td[data-role='editable']"),
            c = _.indexOf(r, l[0]);
            switch (t.keyCode) {
            case 9:
                if (!e(l.find("input")).kendoInputValidate().valid) {
                    var d = e("#" + __eiInfo.get("efFormEname")).kendoValidator().data("kendoValidator");
                    return d.validateInput(e(l.find("input"))),
                    !1
                }
                if (t.preventDefault(), t.shiftKey && c - 1 >= 0) {
                    l.find("input").blur(),
                    i.editCell(e(r[c - 1]));
                    break
                }
                if (c + 1 < r.length) {
                    for (var u = i.columns; c + 1 < r.length && (u[1 + (c + 1) % (u.length - 1)].readonly && !i.dataItem(l.closest("tr")).isNew());) c += 1;
                    l.find("input").blur(),
                    i.editCell(e(r[c + 1]))
                }
                break;
            case 38:
                t.preventDefault(),
                c - s >= 0 && (l.find("input").blur(), i.editCell(e(r[c - s])));
                break;
            case 40:
                t.preventDefault(),
                c !== -1 && c + s < r.length && (l.find("input").blur(), i.editCell(e(r[c + s])))
            }
        }), t.shortcutMenu) {
            var s = IPLATUI.Config.EFColumnShortcutMenu,
            l = t.blockId;
            if (s && e.isArray(s) && s.length) {
                var c = e("#column-shortcut-menu").html() || "",
                d = kendo.template(c)({
                    menus: s
                });
                e("#ef_shortcutMenu_" + l).html(d).kendoContextMenu({
                    target: "#ef_grid_" + l,
                    filter: "th.k-header",
                    open: function(t) {
                        var i = e(t.target).attr("shortcut_menu");
                        "false" === i && t.preventDefault()
                    },
                    select: function(t) {
                        var a = e(t.target).data("field"),
                        n = _.find(s,
                        function(i) {
                            return i.type === e(t.item).data("type")
                        });
                        n.invokeFn && n.invokeFn(i, a)
                    }
                })
            }
        }
        t.finalSumType && "bottom" === t.finalSumTypeScrollPosition && i.bind("dataBound",
        function(t) {
            var i, a, n = t.sender;
            n.lockedFooter && (i = n.lockedFooter.find("tr"), n.lockedTable.append(i)),
            a = n.footer.find(".k-grid-footer-wrap"),
            n.table.append(a.find("tr"));
            for (var o = n.table.find(".i-sum-wrapper"), r = 0; r < o.length; r++) {
                var s = e(o[r]);
                "undefined" === s.find(".i-sum-page").html() && s.find(".i-sum-page").html(0)
            }
            for (var l = n.lockedTable.find(".i-sum-wrapper"), c = 0; c < l.length; c++) {
                var s = e(l[c]);
                "undefined" === s.find(".i-sum-page").html() && s.find(".i-sum-page").html(0)
            }
            n.footer.hide()
        }),
        t.isFloat === !0 && e(".k-grid").length > 0 && (e(window).unbind("scroll").scroll(kendo.throttle(Ne, 100)), i.resizable.bind("resizeend", kendo.throttle(Oe, 100)), e(document.body).append("<div id='floating-scrollbar-" + t.blockId + "' style='position: fixed; bottom: 0; height: 30px; overflow-x: auto; overflow-y: hidden; display: none; '><div style='border: 1px solid rgb(255, 255, 255); opacity: 0.01;'></div></div>"))
    }
    function v(e, t, i) {
        if (IPLAT.isAvailable(t.columns)) {
            var a = t.field;
            e[a] = [],
            _.each(t.columns,
            function(t) {
                e[a].push(t.field),
                IPLAT.isAvailable(i) && i.add(t.field),
                IPLAT.isAvailable(t.columns) && v(e, t, i)
            })
        }
    }
    function T(e, t, i) {
        var a = IPLAT.isAvailable(e[t]);
        if (a) {
            var n = e[t];
            _.each(n,
            function(t) {
                T(e, t, i)
            })
        } else i.push(t)
    }
    var k, b = kendo.Class,
    I = IPLAT.ajaxEi,
    y = IPLAT.EiConstant,
    w = IPLAT.EiInfo,
    E = IPLAT.EiBlock,
    A = (IPLAT.htmlDecode, IPLAT.Util.buildAjaxOption),
    C = IPLAT.WindowUtil,
    P = IPLAT.NotificationUtil,
    x = IPLAT.Notification,
    S = ".IPLAT",
    L = IPLAT.EFGrid.CREATE_ACTION,
    F = IPLAT.EFGrid.READ_ACTION,
    N = IPLAT.EFGrid.UPDATE_ACTION,
    O = IPLAT.EFGrid.DELETE_ACTION,
    M = "beforeAdd",
    R = "onAdd",
    B = "afterAdd",
    U = "td-validator",
    D = "errorMsg",
    G = "onSave",
    q = "saveChanges",
    W = "onCancel",
    V = "onDelete",
    j = "onSuccess",
    H = "onFail",
    z = "beforeRequest",
    $ = "beforeEdit",
    K = "afterEdit",
    J = "onCheckRow",
    X = "onCheckAllRows",
    Q = "onCellClick",
    Y = "onRowClick",
    Z = "onRowDblClick",
    ee = "$dynamic$",
    te = {},
    ie = new w("personalInfo"),
    ae = ["string", "date", "datetime", "enums"],
    ne = IPLATUI.Config.EFGrid.encoded,
    oe = IPLATUI.Config.EFGrid.MAX_COUNT,
    re = IPLATUI.Config.EFGrid.QUERY_ALL,
    se = IPLAT.ColorBox.GRID_BOTTOM_BORDER,
    le = IPLAT.ColorBox.GRID_BOTTOM_BORDER_HOVER,
    ce = IPLAT.ColorBox.INVALID_COLOR,
    de = 450,
    ue = 100,
    fe = e.isArray,
    pe = e.isPlainObject,
    he = e.isFunction,
    me = _.isString,
    ge = e.each,
    ve = _.keys,
    Te = _.find,
    ke = e.extend;
    kendo.ui.FilterMenu.fn.options.operators.string = {
        contains: "包含",
        eq: "等于",
        neq: "不等于"
    };
    var be = function(e) {
        return this.hasOwnProperty(e) && "_handlers" !== e && "_events" !== e && !("id" !== this.idField && "id" === e) && "dirty" !== e && "_accessors" !== e
    };
    k = IPLATUI.Config.EFGrid;
    var Ie = b.extend({
        init: function(t) {
            var i = this;
            i.options = t,
            i.CREATE = t.insertMethod || "insert",
            i.READ = t.queryMethod || "query",
            i.UPDATE = t.updateMethod || "update",
            i.DESTROY = t.deleteMethod || "delete",
            i.serviceName = t[y.SERVICE_NAME] || t.eiInfo.get(y.SERVICE_NAME),
            i.methodName = t.queryMethod || t.methodName || "query",
            i.efSecurityToken = e("#efSecurityToken").val(),
            i.postEiInfo = new w,
            te = {
                beforeSend: function(e) {
                    e.setRequestHeader("efSecurityToken", i.efSecurityToken)
                }
            }
        },
        _postQuery: function() {
            var t = this,
            i = !1,
            a = e("#" + t.options.gridId).data("kendoGrid");
            return isAvailable(a) && IPLAT.isEiInfo(a._postQueryInfo) && (t.postEiInfo = a._postQueryInfo, i = !0, t._buildPostEiBlock(), a._postQueryInfo = null),
            i
        },
        _buildPostEiBlock: function() {
            var t, i = this,
            a = i.options.blockId,
            n = e("#" + i.options.gridId).data("kendoGrid");
            t = isAvailable(n) && isAvailable(n.eiBlock) ? n.eiBlock: i.options.eiBlock;
            var o = i.postEiInfo.getBlock(a);
            isAvailable(o) || (o = new E(t.getBlockMeta()), i.postEiInfo.addBlock(o)),
            o.setAttr(ke({},
            t.getAttr()))
        },
        _buildFilter: function(t) {
            var i, a = this,
            n = a.options.blockId,
            o = a.options.gridConfig,
            r = ke({},
            a.options, o),
            s = r.query;
            if (!a._postQuery()) {
                he(s) ? i = s.call(a, t) : IPLAT.isEiBlock(s) ? (i = new w(""), i.addBlock(s)) : i = IPLAT.isEiInfo(s) ? s: IPLAT.isString(s) && e(s).length > 0 ? w.build(e(s)) : w.build(document.body),
                IPLAT.isEiInfo(i) ? a.postEiInfo = i: a.postEiInfo = new w,
                a._buildPostEiBlock(),
                IPLAT.Util.filterAdapter(t.filter, a.postEiInfo);
                var l = a.postEiInfo.getBlock(n);
                fe(t.sort) && ge(t.sort,
                function(e, t) {
                    var i, a = t.field,
                    n = _.find(r.columns,
                    function(e) {
                        return i = e.alias,
                        e.field === a && isAvailable(i)
                    });
                    isAvailable(n) && (t.field = n.alias)
                }),
                l.set("orderBy", IPLAT.Util.sortAdapter(t.sort))
            }
        },
        _buildModels: function(t, i) {
            var a, n, o = this,
            r = o.options,
            s = (r.modelId, r.blockId),
            l = r.gridId,
            c = o.postEiInfo.getBlock(s),
            d = e("#" + l).data("kendoGrid"),
            u = IPLAT.isKendoGrid(d) ? d.options.showCount: r.showCount;
            if (i === F) o.methodName = o.READ,
            a = t.pageSize || 10,
            a > oe && (a = re),
            n = t.skip || 0,
            c.set(y.LIMIT, a),
            c.set(y.OFFSET, n),
            u ? c.set(y.SHOW_COUNT, "true") : c.set(y.SHOW_COUNT, "false");
            else {
                i === L ? o.methodName = o.CREATE: i === N ? o.methodName = o.UPDATE: i === O && (o.methodName = o.DESTROY);
                var f = d.getCheckedRows(),
                p = function(e, t) {
                    return !! _.find(e,
                    function(e) {
                        return t.uid === e.uid
                    })
                },
                h = !0;
                pe(r.saveOptions) ? h = r.saveOptions[i] : "destroy" === i && (h = !1),
                Ae(c, r.columns, t.models, {
                    operation: i,
                    submitChecked: h,
                    _exist: p,
                    checkedRows: f
                })
            }
        },
        buildTransport: function() {
            var e = this;
            return ke(e._buildURL(), {
                parameterMap: function(t, i) {
                    return e._buildFilter(t),
                    e._buildModels(t, i),
                    e._buildRequest()
                }
            })
        }
    }),
    _e = Ie.extend({
        _buildURL: function() {
            var e = A(),
            t = this,
            i = t.options.url;
            return ke(!0, e, {
                read: {
                    url: i
                },
                create: {
                    url: i
                },
                update: {
                    url: i
                },
                destroy: {
                    url: i
                }
            })
        },
        _buildRequest: function() {
            var e = this,
            t = e.postEiInfo,
            i = e.efSecurityToken,
            a = e.serviceName,
            n = e.methodName;
            return {
                service: a,
                method: n,
                eiinfo: t.toJSONString(),
                efSecurityToken: i
            }
        }
    }),
    ye = Ie.extend({
        _buildURL: function() {
            var e, t, i, a, n, o = this,
            r = o.serviceName,
            s = A({
                contentType: IPLAT.AJAX.ContentType.JSON
            }),
            l = !1,
            c = o.options.url;
            return t = c + "/" + r + "/" + o.READ,
            i = c + "/" + r + "/" + o.CREATE,
            a = c + "/" + r + "/" + o.UPDATE,
            n = c + "/" + r + "/" + o.DESTROY,
            e = {
                read: ke({
                    url: t
                },
                te),
                create: ke({
                    url: i
                },
                te),
                update: ke({
                    url: a
                },
                te),
                destroy: ke({
                    url: n
                },
                te)
            },
            e = ke(!0, s, e),
            he(o.READ) && (e.read = o.READ, l = !0),
            he(o.CREATE) && (e.create = o.CREATE, l = !0),
            he(o.UPDATE) && (e.update = o.UPDATE, l = !0),
            he(o.DESTROY) && (e.destroy = o.DESTROY, l = !0),
            l && (e = IPLAT.Util.buildCRUDFunction(e, o)),
            e
        },
        _buildRequest: function() {
            var e = this;
            return e.postEiInfo.toJSONString()
        }
    }),
    we = function() {
        var e = {
            REST: ye,
            EI: _e
        };
        return {
            getTransport: function(t, i) {
                var a = e[t],
                n = new a(i);
                return n.buildTransport()
            },
            registerTransport: function(t, i) {
                return i.prototype instanceof Ie && (e[t] = i),
                we
            }
        }
    } ();
    IPLAT.xGrid = function(t) {
        var i = null,
        a = m(t);
        if (a) {
            if (i = e("#" + t.gridId).kendoGrid(a).data("kendoGrid"), g(a, i), a.autoBind === !1) {
                var n = i.getBlockId(),
                o = t.eiInfo.getBlock(n).getRows().length;
                "dynamic" === t.autoDraw ? "keep" !== t.eiInfo.get(ee) && i.setEiInfo(t.eiInfo, "keep") : o > 0 && i.setEiInfo(t.eiInfo)
            }
            Pe(i),
            Le(i),
            Se(i),
            i.bind(q,
            function(e) {
                var t = e.sender;
                t.isValid() || e.preventDefault(),
                he(a[G]) && a[G].call(t, e)
            }),
            i.bind(W + S, a[W]),
            i.bind(V + S, a[V]),
            i.dataSource.bind("requestStart",
            function(e) {
                i.trigger(z + S, {
                    type: e.type
                }) && e.preventDefault()
            }),
            i.bind(z + S, a[z]),
            i.bind(j + S, a[j]),
            i.bind(H + S, a[H]),
            i.bind(M + S, a[M]),
            i.bind(R + S, a[R]),
            i.bind(B + S, a[B]),
            i.bind("dataBinding",
            function(e) {
                "add" === e.action && i.trigger(R + S, e) && e.preventDefault()
            }),
            i.bind($ + S, a[$]),
            i.bind(K + S, a[K]),
            i.bind(J + S, a[J]),
            i.bind(X + S, a[X]),
            i.bind(Q + S, a[Q]),
            i.bind(Y + S, a[Y]),
            i.bind(Z + S, a[Z]),
            he(a.loadComplete) && a.loadComplete(i),
            IPLAT.isUndefined(a.dropTarget) || i.wrapper.kendoDropTarget(a.dropTarget),
            i.element.on("mouseover", "tr",
            function(t) {
                var i = e(this).data("uid");
                e("tr[data-uid='" + i + "']").addClass("k-td-hover")
            }),
            i.element.on("mouseout", "tr",
            function(t) {
                var i = e(this).data("uid");
                e("tr[data-uid='" + i + "']").removeClass("k-td-hover")
            });
            var r = _.throttle(function(t, i, a) {
                var n = e(t),
                o = n.closest("tr"),
                r = n.width(),
                s = kendo.htmlEncode(n.text().trim()),
                l = _.isString(i) && kendo.htmlEncode(i) || s,
                c = "<span class='k-icon k-i-warning'></span>&nbsp;&nbsp;" + l,
                d = n.css("font-size"),
                u = e("[data-role='tooltip']"),
                f = IPLAT.getCurrentStrWidth(s, d),
                p = {
                    showAfter: 0,
                    animation: !1,
                    hide: function() {
                        n.removeAttr("data-role"),
                        this.destroy()
                    }
                };
                if (ge(u,
                function(t, i) {
                    var a = e(i).data("kendoTooltip"),
                    n = e(i).is("input.k-invalid");
                    a instanceof kendo.ui.Tooltip && !n && a.hide()
                }), "error" === a && o.hasClass("i-state-selected")) {
                    ke(p, {
                        width: ue,
                        content: c
                    });
                    var h = n.kendoTooltip(p).data("kendoTooltip");
                    h.show();
                    var m = h.popup.element;
                    m.css("background", ce),
                    m.find(".k-callout-n").css("border-bottom-color", ce)
                } else if (! (n.hasClass("k-state-selected") || o.hasClass("i-state-selected") || n.hasClass("k-detail-cell")) && f >= r) {
                    f > de && e.extend(p, {
                        width: de
                    }),
                    e.extend(p, {
                        content: s
                    });
                    var g = n.kendoTooltip(p).data("kendoTooltip");
                    g.show()
                }
            },
            400);
            i.element.on("mouseover", "td",
            function(t) {
                var i = e(this),
                a = e.trim(i.data(D)) || "";
                a ? r(this, a, "error") : r(this)
            }),
            Ce(i)
        }
        return i
    },
    ke(!0, IPLAT, {
        Grid: IPLAT.xGrid,
        Transport: {
            AbstractTransport: Ie,
            EiServiceTransport: _e,
            RestfulTransport: ye,
            TransportFactory: we
        }
    }),
    kendo.ui.Grid.fn.getColumnMap = function(e) {
        var t = this,
        i = t.eiBlock || t.getInitBlock(),
        a = i.getBlockMeta().getMetas(),
        n = e.getBlockMeta().getMetas(),
        o = {};
        for (var r in a) {
            var s = n[r] || {
                pos: -1
            };
            o[r] = s.pos
        }
        return o
    },
    kendo.ui.Grid.fn.setRow = function(e, t) {
        var i = this,
        a = i.dataSource.at(e),
        n = i.dataSource.options.schema.model.id,
        o = i.dataSource.options.schema.model.fields,
        r = "function" == typeof t.toJSON ? t.toJSON() : t,
        s = kendo.data.Model.define({
            id: n,
            fields: o,
            shouldSerialize: be
        }),
        l = new s(r);
        l.dirty = !0,
        a ? (l._events = a._events, l.id = a[n], l[n] = a[n], i.dataSource.data()[e] = l, l.set("uid", a.uid)) : this.dataSource.insert(0, l)
    },
    kendo.ui.Grid.fn.addEiInfo = function(e, t, i) {
        var a = this,
        n = a.getBlockId(),
        o = e.getBlock(n);
        if (o) {
            var r = a.getColumnMap(o),
            s = [];
            ge(o.getRows(),
            function(e, t) {
                s.push(IPLAT.Util.block2Model(e, o, r))
            }),
            a.addRows(s, t, i)
        }
    },
    kendo.ui.Grid.fn.addRows = function(t, i, a) {
        var n, o = this,
        r = o.dataSource,
        s = r.data(),
        l = [],
        c = e.isArray(t) ? t: [t],
        d = IPLAT.Util.unbindHandlers(o.dataSource, "change"),
        u = o.dataSource.options.schema.model.id || "",
        f = o.dataSource.options.schema.model.fields,
        p = kendo.data.Model.define({
            id: u,
            fields: f,
            shouldSerialize: be
        });
        ge(c,
        function(e, t) {
            IPLAT.isKendoModel(t) ? (n = new p(t.toJSON()), l.push(n)) : pe(t) && (n = new p(t.toJSON()), l.push(n))
        }),
        o._checkedRows = [];
        var h = a === !1;
        if (!h) {
            var m = function(e) {
                ge(e.items,
                function(e, t) {
                    o._checkedRows.push(t.uid)
                })
            };
            o.dataSource.one("change", m)
        }
        var g = 0;
        i ? (g = s.length, s.push.apply(s, l)) : s.unshift.apply(s, l);
        for (var v = g + l.length; g < v; g++) s[g]._defaultId = s[g]._defaultId || "",
        s[g].id = s[g]._defaultId;
        IPLAT.Util.bindHandlers(o.dataSource, "change", d),
        o.dataSource.trigger("change", {
            items: l,
            action: "add"
        })
    },
    kendo.ui.Grid.fn.removeRows = function(t, i) {
        var a, n, o, r, s = this,
        l = s.dataSource,
        c = [],
        d = IPLAT.Util.unbindHandlers(s.dataSource, "change");
        for (IPLAT.isKendoModel(t) ? c.push(t) : c = e.isArray(t) && _.isNumber(t[0]) ? s.getRows(t) : t, n = 0, o = c.length; n < o; n++) a = l.data(),
        r = _.indexOf(a, c[n]),
        a.splice.call(a, r, 1);
        IPLAT.Util.bindHandlers(s.dataSource, "change", d),
        i !== !1 && s.dataSource.trigger("change", {
            items: c,
            action: "remove"
        })
    },
    kendo.ui.Grid.fn.getBlockId = function() {
        return this.options.blockId || ""
    },
    kendo.ui.Grid.fn.setEiInfo = function(e) {
        var t, i = this,
        a = i.getBlockId(),
        n = e.getBlock(a),
        o = i.dataSource;
        if (arguments[1] && e.set(ee, arguments[1]), n) {
            var r = n.get(y.LIMIT) || 10,
            s = n.get(y.OFFSET) || 0;
            t = IPLAT.Util.unbindHandlers(i.dataSource, "change");
            var l = e.toJSON();
            IPLAT.isAvailable(this.options.aggregate) && (l.__aggregate__ = this.options.aggregate),
            o.success(l),
            o._skip = s,
            o._take = r,
            IPLAT.Util.bindHandlers(i.dataSource, "change", t),
            o._process(o._data)
        }
    },
    kendo.ui.Grid.fn.getEiInfo = function() {
        return this.eiInfo || this.options.eiInfo
    },
    kendo.ui.Grid.fn.getDisplayEiInfo = function(i) {
        var n = this,
        o = new w,
        r = i || "result",
        s = new E(r),
        l = new EiBlockMeta(r),
        c = {},
        d = {},
        u = new t,
        f = new a,
        p = [],
        h = n.element,
        m = h.find(".k-grid-header"),
        g = h.find(".k-grid-content-locked"),
        k = h.find(".k-grid-content"),
        b = m.find("table"),
        I = g.find("table"),
        y = k.find("table");
        _.each(n.columns,
        function(e) {
            v(c, e, u)
        }),
        _.each(b,
        function(t) {
            _.each(e(t).find("th"),
            function(t) {
                if (IPLAT.isUndefined(n.options.sumType) || "none" === n.options.sumType) {
                    if (e(t).data("field") && "none" !== t.style.display) {
                        var i = new EiColumn(e(t).data("field"));
                        i.descName = e(t).text()
                    }
                } else {
                    if (1 === e(t).find("input[type='checkbox']").length) var i = new EiColumn("sumType");
                    if (!n.options.enable && n.options.rowNo && !e(t).data("field")) var i = new EiColumn("sumType");
                    if (e(t).data("field") && "none" !== t.style.display) {
                        var i = new EiColumn(e(t).data("field"));
                        i.descName = e(t).text()
                    }
                }
                if (!IPLAT.isUndefined(i)) {
                    var a = u.has(i.name);
                    a || T(c, i.name, p),
                    f.set(i.name, i)
                }
            })
        }),
        _.each(p,
        function(e) {
            l.addMeta(f.get(e))
        }),
        s.set("groupColumns", c);
        for (var A in c) {
            var C = f.get(A);
            d[A] = C.descName
        }
        s.set("groupColumnsCname", d);
        var P = u.valuesLegacy();
        return s.set("groupedColumns", P),
        I.length > 0 && _.each(I.find("tr"),
        function(t) {
            var i = [];
            _.each(e(t).find("td"),
            function(t) {
                IPLAT.isUndefined(n.options.sumType) || "none" === n.options.sumType ? 0 === e(t).find("input[type='checkbox']").length && 0 === e(t).find("span.row-no").length && "none" !== t.style.display && i.push(e(t).text()) : n.options.enable && n.options.rowNo ? 0 === e(t).prev().find(".i-sum-wrapper").length && 0 === e(t).find("span.row-no").length && "none" !== t.style.display && i.push(e(t).text()) : "none" !== t.style.display && i.push(e(t).text())
            }),
            s.addRow(i)
        }),
        y.length > 0 && _.each(y.find("tr"),
        function(t, i) {
            var a = [];
            _.each(e(t).find("td"),
            function(t) {
                "none" !== t.style.display && (IPLAT.isUndefined(s.rows[i]) ? a.push(e(t).text()) : s.rows[i].push(e(t).text()))
            }),
            0 !== a.length && s.addRow(a)
        }),
        s.setBlockMeta(l),
        o.addBlock(s),
        o
    },
    kendo.ui.Grid.fn.getQueryInfo = function() {
        var e = this,
        t = e.dataSource.filter(),
        i = e.dataSource.options.transport.parameterMap({
            filter: t
        },
        F);
        return w.parseJSONString(i)
    },
    kendo.ui.Grid.fn.postQuery = function(e) {
        var t = this;
        t._postQueryInfo = e,
        t.dataSource.page(1)
    },
    kendo.ui.Grid.fn.setEiBlock = function(e) {
        if (e.getBlockId() === this.getBlockId()) {
            var t = this.getEiInfo();
            t.addBlock(e),
            this.setEiInfo(t),
            this.eiBlock = e
        }
    },
    kendo.ui.Grid.fn.getEiBlock = function() {
        return this.eiBlock
    },
    kendo.ui.Grid.fn.getLockedColumns = function(e) {
        var t = this,
        i = [];
        return ge(t.columns,
        function(e, t) {
            t.locked && i.push(t)
        }),
        t.options.enable && e && i.shift(),
        i
    },
    kendo.ui.Grid.fn.getPopupGridByInqu = function(t) {
        if (t.length > 0) {
            var i = t.closest("div[data-role='window']").attr("id"),
            a = i.replace("ef_popup", "ef_grid");
            return e("#" + a).data("kendoGrid")
        }
    };
    var Ee = function(t, i) {
        var a = e("<input>"),
        n = IPLAT.isAvailable(t) ? t: "",
        o = i.attributes || {};
        return a.attr(o),
        a.val(n),
        a
    };
    kendo.ui.Grid.fn.validModel = function(e) {
        var t, i, a, n = this,
        o = [];
        return IPLAT.isKendoModel(e) ? (i = e.toJSON() || {},
        t = ve(i) || [], ge(t,
        function(e, t) {
            if (me(t) && (a = n.getColumn(t))) {
                var r = Ee(i[t], a),
                s = r.kendoInputValidate();
                ke(s, {
                    name: t
                }),
                o.push(s)
            }
        }), o) : o
    },
    kendo.ui.Grid.fn._setCellErrorMsg = function(e, t, i) {
        var a, n = this;
        IPLAT.isKendoModel(e) && t && (a = n.getCell(e, t), a.addClass(U), a.data(D, i))
    },
    kendo.ui.Grid.fn.getCell = function(e, t) {
        var i, a, n, o, r, s = this;
        if (IPLAT.isKendoModel(e) && t) return n = e.uid,
        s.isCellLocked(t) ? (r = s.getColumnIndex(t), i = s.element.find(".k-grid-content-locked tr[data-uid=" + n + "]"), a = i.find("td[role='gridcell']").eq(r)) : (o = s.getLockedColumns().length || 0, r = s.getColumnIndex(t), i = s.element.find(".k-grid-content tr[data-uid=" + n + "]"), a = i.find("td[role='gridcell']").eq(r - o)),
        a
    },
    kendo.ui.Grid.fn.isValid = function(e, t) {
        var i, a, n, o = this,
        r = !0;
        if (o.element.find(".k-invalid").length > 0) return ! 1;
        i = t || o.tbody.find("tr");
        for (var s = 0; s < i.length; s++) a = o.dataItem(i[s]),
        a && (e || a.isNew()) && (n = o.validModel(a), ge(n,
        function(e, t) {
            t.valid || (o._setCellErrorMsg(a, t.name, t.errorMsg), r = !1)
        }));
        return r
    },
    kendo.ui.Grid.fn.refresh = function(e) {
        return function(t) {
            var i = this;
            e.call(i, t),
            t && "add" === t.action && i.trigger(B + S, {
                action: "add",
                index: t.index,
                items: t.items
            })
        }
    } (kendo.ui.Grid.fn.refresh),
    kendo.ui.Grid.fn.addRow = function(t) {
        return function() {
            var i = this,
            a = i.options.copyToAdd,
            n = i.columns,
            o = i.getCheckedRows(),
            r = function(e, t) {
                var a = e.dataSource.created();
                _.each(t,
                function(e) {
                    e.defaultValue && e.primaryKey === !0 && _.each(a,
                    function(t) {
                        t[e.field] = e.defaultValue,
                        i.editCell(i.getCell(t, e.field))
                    })
                })
            },
            s = function(t) {
                for (var a = 0; a < 50; a++) {
                    var n = a.toString(),
                    o = (a + 1).toString(),
                    r = i.element.find("th[data-index='" + n + "']").data("field");
                    if (IPLAT.isAvailable(r)) break;
                    r = i.element.find("th[data-index='" + o + "']").data("field")
                }
                if (0 == i._checkedRows.length) {
                    var s = i.dataSource.data()[0],
                    l = i.getCell(s, r);
                    l.length && i.editCell(l)
                } else {
                    var c = i._checkedRows.length;
                    e(i.dataSource.data()).each(function(e) {
                        var t = i.dataSource.data()[c - e - 1],
                        a = i.getCell(t, r);
                        if (a.length && i.editCell(a), e == c - 1) return ! 1
                    })
                }
            };
            if (!i.trigger(M + S, {}) && i.isValid()) if (a && o.length > 0) {
                var l = kendo.template(e("#del-template").html())({
                    message: "[" + o.length + "]条记录被选中，将它们复制为新记录吗？",
                    ok: "确定",
                    cancel: "取消"
                });
                C({
                    title: "新增数据",
                    content: l,
                    ok: function() {
                        var e = this.data("kendoWindow");
                        i.addRows(o),
                        s(!0),
                        e.close()
                    },
                    cancel: function() {
                        var e = this.data("kendoWindow");
                        i._checkedRows = [],
                        t.call(i),
                        r(i, n),
                        e.close(),
                        s()
                    }
                })
            } else t.call(i),
            r(i, n),
            s()
        }
    } (kendo.ui.Grid.fn.addRow),
    kendo.ui.Grid.fn.editCell = function(t) {
        return function(i) {
            i = e(i);
            var a = this,
            n = a._modelForContainer(i);
            if (n) {
                var o, r, s, l, c = arguments[1],
                d = i.closest("tr"),
                u = d.index(),
                f = a.cellIndex(i),
                p = n.isNew();
                if (i.hasClass(U) && (i.removeClass(U), i.removeData(D)), p && !c) {
                    l = a.element.find(".k-grid-content tr[data-uid=" + d.data("uid") + "]"),
                    s = a.element.find(".k-grid-content-locked tr[data-uid=" + d.data("uid") + "]"),
                    s.addClass("i-state-selected k-state-selected"),
                    l.addClass("i-state-selected k-state-selected");
                    var h = s.find("input.check-one")[0] || l.find("input.check-one")[0];
                    h && (h.checked = !0, a._checkedRows = _.union(a._checkedRows, [n.uid]))
                }
                if (d.hasClass("i-state-selected") || d.hasClass("i-edit-row")) {
                    if (c && (i.addClass("fake-edit"), o = IPLAT.Util.unbindHandlers(a, $ + S), r = IPLAT.Util.unbindHandlers(a, "edit")), a.trigger($ + S, {
                        container: i,
                        row: u,
                        col: f,
                        field: a.element.find("th[data-index='" + f + "']").data("field"),
                        model: n
                    })) return;
                    t.call(a, i),
                    c && (IPLAT.Util.bindHandlers(a, $ + S, o), IPLAT.Util.bindHandlers(a, "edit", r)),
                    i.find("input").select()
                }
            }
        }
    } (kendo.ui.Grid.fn.editCell),
    kendo.ui.Grid.fn.closeCell = function(e) {
        return function(t) {
            var i, a, n, o = this,
            r = o._editContainer,
            s = arguments[1];
            if (r) {
                if (i = r.closest("tr"), a = i.attr(kendo.attr("uid")), n = o.dataSource.getByUid(a), r.removeClass("i-invalid-cell"), !s) {
                    var l = i.index(),
                    c = o.cellIndex(r);
                    if (o.trigger(K + S, {
                        container: r,
                        row: l,
                        col: c,
                        field: o.element.find("th[data-index='" + c + "']").data("field"),
                        model: n
                    })) return
                }
                o._relatedRow(i).removeClass("k-grid-edit-row"),
                e.call(o, t)
            }
        }
    } (kendo.ui.Grid.fn.closeCell),
    kendo.ui.Grid.fn.cancelChanges = function(e) {
        return function() {
            var t = this;
            t.trigger(W + S, {}) || e.call(t)
        }
    } (kendo.ui.Grid.fn.cancelChanges),
    kendo.ui.Grid.fn.findColumnByField = function(e) {
        return Te(this.columns,
        function(t) {
            return t.field === e
        })
    },
    kendo.ui.Grid.fn.getCheckedRows = function() {
        var e = this,
        t = [];
        return ge(e.element.find(".k-grid-content tr.i-state-selected"),
        function(i, a) {
            t.push(e.dataItem(a))
        }),
        t
    },
    kendo.ui.Grid.prototype._positionColumnResizeHandle = function() {
        var t = this,
        i = (t.options.columnResizeHandleWidth, t.lockedHeader ? t.lockedHeader.find("thead:first") : e());
        t.thead.add(i).on("mousemove.kendoGrid", "th",
        function(i) {
            var a = e(this);
            a.hasClass("k-group-cell") || a.hasClass("k-hierarchy-cell") || t._createResizeHandle(a.closest("div"), a)
        })
    },
    kendo.ui.Grid.fn.getSelectedRows = function() {
        var e = this,
        t = [];
        return ge(e.element.find(".k-grid-content tr.k-state-selected").not("tr.i-state-selected"),
        function(i, a) {
            t.push(e.dataItem(a))
        }),
        t
    },
    kendo.ui.Grid.fn.getSelectedRowsIndex = function(t) {
        var i, a = this,
        n = [];
        return i = t ? a.content.find(".k-state-selected") : a.content.find(".k-state-selected").not(".i-state-selected"),
        ge(i,
        function(t, i) {
            n.push(e(i).index())
        }),
        n
    },
    kendo.ui.Grid.fn.getDataItems = function() {
        var e = this,
        t = e.dataItems();
        return e.lockedTable ? _.first(t, t.length / 2) : t
    },
    kendo.ui.Grid.fn.setCheckedRows = function(e) {
        var t = this,
        i = t.getRows(e);
        ge(i,
        function(e, i) {
            var a = t.element.find("tr[data-uid='" + i.uid + "']"),
            n = a.find("input.check-one");
            t.dataItem(a).isNew() && (n[0].checked = !1),
            n[0] && !n[0].checked && (n[0].checked = !0, n.trigger("check-one", [!0]))
        })
    },
    kendo.ui.Grid.fn.setUnCheckedRows = function(e) {
        var t = this,
        i = t.getRows(e);
        ge(i,
        function(e, i) {
            var a = t.element.find("tr[data-uid='" + i.uid + "']"),
            n = a.find("input.check-one");
            n[0] && n[0].checked && (n[0].checked = !1, n.trigger("check-one", [!0]))
        })
    },
    kendo.ui.Grid.fn.checkAllRows = function() {
        for (var e = this,
        t = e.getDataItems().length, i = [t], a = 0; a < t; a++) i[a] = a;
        e.setCheckedRows(i)
    },
    kendo.ui.Grid.fn.unCheckAllRows = function() {
        for (var e = this,
        t = e.getDataItems().length, i = [t], a = 0; a < t; a++) i[a] = a;
        e.setUnCheckedRows(i)
    },
    kendo.ui.Grid.fn.toggleCheckRows = function() {
        var e = this,
        t = e.getDataItems();
        ge(t,
        function(t, i) {
            var a = e.element.find(".k-grid-content-locked tr[data-uid='" + i.uid + "']"),
            n = a.find("input.check-one");
            n[0] && (n[0].checked = !n[0].checked, n.trigger("check-one", [!0]))
        })
    },
    kendo.ui.Grid.fn.getCheckedRowsIndex = function() {
        var e = this,
        t = [],
        i = [],
        a = e.dataSource.view(),
        n = e.getCheckedRows();
        return n.length > 0 && ge(n,
        function(e, i) {
            var a = i.uid;
            t.push(a)
        }),
        ge(a,
        function(t, a) {
            _.indexOf(e._checkedRows, a.uid) >= 0 && i.push(t)
        }),
        i
    },
    kendo.ui.Grid.fn.refreshCheckRows = function() {
        var e = this,
        t = e.getCheckedRowsIndex();
        e.setCheckedRows(t)
    },
    kendo.ui.Grid.fn.getRows = function(e) {
        var t, i = this,
        a = [],
        n = i.getDataItems();
        return t = fe(e) ? e: [e],
        ge(t,
        function(e, t) {
            if (!isNaN(t)) {
                var i = parseInt(t, 10);
                a.push(n[i])
            }
        }),
        a
    },
    kendo.ui.Grid.fn.isCellLocked = function(e) {
        var t = this,
        i = t.columns;
        return _.findIndex(i, {
            field: e,
            locked: !0
        }) >= 0
    },
    kendo.ui.Grid.fn.getColumnIndex = function(e) {
        var t, i = this;
        return t = i.element.find("th[data-field='" + e + "']").data("index")
    },
    kendo.ui.Grid.fn.getColumn = function(e) {
        var t = this,
        i = t.columns;
        return i[t.getColumnIndex(e)]
    },
    kendo.ui.Grid.fn.setCellValue = function(t, i, a) {
        var n = this,
        o = [];
        IPLAT.isKendoModel(t) ? o.push(t) : o = n.getRows(t),
        ge(o,
        function(t, o) {
            if (o.hasOwnProperty(i) && a !== o[i]) {
                var r, s, l, c, d = n.isCellLocked(i);
                o[i] = a,
                o.dirty = !0,
                s = n.getCell(o, i),
                s.addClass("k-dirty-Cell"),
                c = o.uid,
                l = n.getColumnIndex(i),
                r = d ? n.element.find(".k-grid-content-locked tr[data-uid=" + c + "]") : n.element.find(".k-grid-content tr[data-uid=" + c + "]"),
                n._displayCell(s, n.columns[l], o),
                e('<span class="k-dirty"/>').prependTo(s),
                n.trigger(K + S, {
                    fake: !0,
                    container: s,
                    row: r.index(),
                    col: l,
                    field: i,
                    model: o
                })
            }
        })
    },
    kendo.ui.Grid.fn.getCheckedBlockData = function() {
        var e = this;
        return e.model2EiBlock(e.getCheckedRows())
    },
    kendo.ui.Grid.fn.getBlockData = function() {
        var e = this;
        return e.model2EiBlock(e.getDataItems())
    },
    kendo.ui.Grid.fn.wrapEiBlock = function(e) {
        var t = this,
        i = t.getQueryInfo(),
        a = e || t.getBlockData();
        return i.addBlock(a),
        i
    },
    kendo.ui.Grid.fn.model2EiBlock = function(e) {
        var t = this,
        i = t.options.columns,
        a = t.getInitBlock(),
        n = new E(a.getBlockMeta()),
        o = ke({},
        a.getAttr());
        return n.setAttr(o),
        !fe(e) && IPLAT.isKendoModel(e) && (e = [e]),
        Ae(n, i, e)
    },
    kendo.ui.Grid.fn.getInitBlock = function(e) {
        return e ? this._buildCurrentEiBlock() : this.options.eiBlock
    },
    kendo.ui.Grid.fn._buildCurrentEiBlock = function() {
        return this._buildEiBlock(function(e) {
            return !! e.field
        })
    },
    kendo.ui.Grid.fn._buildEiBlock = function(e) {
        var t = this,
        i = t.options.columns,
        a = [];
        if (he(e)) for (var n = 0,
        o = i.length; n < o; n++) e.call(t, i[n]) === !0 && a.push(i[n]);
        else a = i;
        return E.buildByColumns(t.getBlockId(), a)
    },
    kendo.ui.Grid.fn.getCellText = function(e, t) {
        var i = this.getCell(e, t);
        return i ? i.text() : ""
    },
    kendo.ui.Grid.fn.refreshHeader = function(t) {
        e.isFunction(t) && t.call(this),
        this._thead(),
        this.refresh()
    };
    var Ae = function(t, i, a, n) {
        var o = _.filter(i,
        function(e) {
            return "date" === e.editType || "datetime" === e.editType
        }),
        r = e.isPlainObject(n),
        s = r && n.operation === L;
        return ge(a,
        function(e, i) {
            ge(o,
            function(e, t) {
                var a = t.field,
                n = t.parseFormats[0] || t.dateFormat;
                i[a] = kendo.toString(i[a], n)
            }),
            r ? n.submitChecked ? n._exist(n.checkedRows, i) && t.addRow(t.getMappedArray(i, !0, s)) : t.addRow(t.getMappedArray(i, !0, s)) : t.addRow(t.getMappedArray(i, !0))
        }),
        t
    },
    Ce = function(t) {
        function i(t) {
            a = e(t.currentTarget).data("th"),
            o = a.closest(".k-grid").data("kendoGrid"),
            n = a.index(),
            r = a.closest("div").hasClass("k-grid-header-locked"),
            "false" === e(t.currentTarget).data("th").attr("resizable") && (t.preventDefault(), setTimeout(function() {
                o.wrapper.removeClass("k-grid-column-resizing"),
                e(document.body).add(".k-grid th").css("cursor", "")
            }))
        }
        IPLAT.EFGrid._handlePagerCount(t);
        var a, n, o, r = (t.options.minColumnWidth || 50, !1);
        if (t.resizable.bind("start", kendo.throttle(i, 200)), 0 === t.getDataItems().length && t.options.finalSumType) for (var s = t.footer.find(".i-sum-wrapper"), l = 0; l < s.length; l++) {
            var c = e(s[l]);
            console.log(c, c.find(".i-sum-page").html(), typeof c.find(".i-sum-page").html()),
            "undefined" === c.find(".i-sum-page").html() && c.find(".i-sum-page").html(0)
        }
    },
    Pe = function(e) {
        e.dataSource.data().length > 0 ? (_.isUndefined(e.lockedHeader) || e.lockedHeader.removeClass("bottom-border"), _.isUndefined(e.thead) || (e.thead.closest(".k-grid-header-wrap").removeClass("bottom-border"), e.thead.find("th").removeClass("bottom-border"))) : 0 === e.dataSource.data().length && (_.isUndefined(e.lockedHeader) || e.lockedHeader.addClass("bottom-border"), _.isUndefined(e.thead) || (e.thead.closest(".k-grid-header-wrap").addClass("bottom-border"), e.thead.find("th").addClass("bottom-border")))
    },
    xe = function(t) {
        if (0 == t.options.enable) {
            var i = 0;
            if (e(t.columns).each(function(e) {
                1 == t.columns[e].locked && (i += 1)
            }), 0 == i) {
                var a = e(".k-grid-content")[0].clientWidth,
                n = e(".k-grid-header")[0].clientWidth;
                a > n && (e(".k-grid-content")[0].style.width = e(".k-grid-content")[0].getBoundingClientRect().width - (a - n) + "px"),
                a < n && (e(".k-grid-content")[0].style.width = e(".k-grid-content")[0].getBoundingClientRect().width + (n - a) + "px")
            }
        }
    },
    Se = function(t) {
        if (0 == t.options.enable && 1 == t.columns[0].hidden) if (1 == t.columns[0].locked) {
            var i = 0;
            e(t.columns).each(function(e) {
                1 == t.columns[e].locked && (i += 1)
            }),
            i > 1 ? (e(".k-grid-header-locked").css("border-left", "1px solid #99D2FF"), e(".k-grid-content-locked").css("border-left", "1px solid #99D2FF")) : e("table[role='grid']").each(function() {
                e(this).css("border-left", "1px solid #99D2FF")
            })
        } else e("table[role='grid']").each(function() {
            e(this).css("border-left", "1px solid #99D2FF")
        })
    },
    Le = function(t) {
        var i = t.element.find("tr:last-child");
        4 === i.length && "1px" !== i.eq(2).children("td").css("border-bottom-width") ? (i.eq(2).children("td").css("border-bottom-width", 1), i.eq(3).children("td").css("border-bottom-width", 1), i.eq(2).on("mouseover",
        function() {
            e(this).find("td").css("border-bottom-color", le),
            i.eq(3).find("td").css("border-bottom-color", le)
        }), i.eq(3).on("mouseover",
        function() {
            e(this).find("td").css("border-bottom-color", le),
            i.eq(2).find("td").css("border-bottom-color", le)
        }), i.eq(2).on("mouseout",
        function() {
            e(this).find("td").css("border-bottom-color", se),
            i.eq(3).find("td").css("border-bottom-color", se)
        }), i.eq(3).on("mouseout",
        function() {
            e(this).find("td").css("border-bottom-color", se),
            i.eq(2).find("td").css("border-bottom-color", se)
        })) : i.eq(1).children("td").length > 0 && "1px" !== i.eq(1).children("td").css("border-bottom-width") && (i.eq(1).children("td").css("border-bottom-width", 1), i.eq(1).on("mouseover",
        function() {
            e(this).find("td").css("border-bottom-color", le)
        }), i.eq(1).on("mouseout",
        function() {
            e(this).find("td").css("border-bottom-color", se)
        }))
    },
    Fe = function(t) {
        var i = _.filter(t,
        function(t) {
            var i = e(t).offset().top,
            a = e(t).height(),
            n = IPLAT.Util.getBodyScrollTop(),
            o = n < i + a,
            r = i < n + e("body").height();
            return o && r
        });
        return e(i)
    },
    Ne = function() {
        var t = e(".k-grid"),
        t = Fe(t);
        _.each(t,
        function(t) {
            var i = e(t),
            a = i.find(".k-grid-header"),
            n = i.find(".k-grid-toolbar");
            a.css("position", "static");
            var o = a.height(),
            r = n.length > 0 ? 24 : 0,
            s = 72,
            l = i.offset().top + r,
            c = i.height() - r,
            d = IPLAT.Util.getBodyScrollTop(),
            u = window.innerHeight;
            d > l && d < l + c - o - s && "fixed" !== a.css("position") && a.css({
                position: "fixed",
                top: 0,
                "z-index": 99
            });
            var f = e("#floating-scrollbar-" + i.data("kendoGrid").options.blockId);
            "fixed" === a.css("position") && (c -= o),
            d + u < l + c && d + u > l + o ? (f.css("display", "block"), Oe()) : (d + u > l + c || d + u < l + o) && (Oe(), f.css("display", "none"))
        })
    },
    Oe = function() {
        var t = e(".k-grid"),
        t = Fe(t);
        _.each(t,
        function(t) {
            var i = e(t),
            a = e("#floating-scrollbar-" + i.data("kendoGrid").options.blockId),
            n = i.find(".k-grid-content.k-auto-scrollable"),
            o = i.find(".k-grid-header-wrap.k-auto-scrollable"),
            r = n.offset().left,
            s = n.scrollLeft(),
            l = n.width(),
            c = n.find("table").width();
            o.scrollLeft(s),
            o.width(l),
            a.scrollLeft(s),
            a.css({
                left: r + "px",
                width: l + "px"
            }),
            a.find("div").css("width", c + "px"),
            a.unbind("scroll").scroll(function() {
                n.scrollLeft(e(this).scrollLeft()),
                o.scrollLeft(e(this).scrollLeft())
            })
        })
    };
    kendo.ui.Grid.fn._rebuild = function(e) {
        var t = this,
        i = t.options,
        a = i.blockId,
        n = t.element.parent();
        n.empty(),
        n.append('<div id="ef_window_' + a + '" ></div><ul id="ef_shortcutMenu_' + a + '" style="display: none"></ul><div id="ef_personal_window_' + a + '"><div id="ef_personal_grid_' + a + '" ></div></div><div id="ef_grid_' + a + '" class="no-scrollbar"></div>');
        var o = e || i.eiInfo;
        i.eiInfo = o,
        i.autoBind = !1,
        i.columns = [],
        i.aggregate = [],
        IPLAT.isAvailable(i.dataSource) && (i.dataSource = {}),
        window[a + "Grid"] = IPLAT.Grid(i)
    }
} (window.jQuery),
function(e) {
    function t(t) {
        var a = t.dataBlock || "result",
        n = t.autoId,
        l = t.eiInfo,
        c = l.getBlock(a),
        d = t.serviceName || l.get(EiConstant.SERVICE_NAME),
        u = t.queryMethod || "query";
        e("#efSecurityToken").val();
        "undefined" == typeof c && EiCommunicator.send(d, u, new EiInfo, {
            onSuccess: function(e) {
                c = e.getBlock(a)
            },
            onFail: function(e) {
                NotificationUtil("获取[" + a + "]数据失败", "error")
            }
        },
        {
            async: !1
        });
        var f = function() {
            return {
                transport: o(!0, {},
                s, {
                    parameterMap: function(t, i) {
                        var o = new EiInfo,
                        r = e("#" + n).data("kendoAutoComplete");
                        r.dataSource.options.serverFiltering && o.setByNodeObject(document.getElementById(n).parentNode);
                        var s = o.getBlock(a);
                        return isAvailable(s) || (s = new EiBlock(c.getBlockMeta()), o.addBlock(s)),
                        s.setAttr(c.getAttr()),
                        r.dataSource.options.serverPaging ? t.pageSize >= 0 && t.skip >= 0 && s.set(EiConstant.LIMIT, t.pageSize) : s.set(EiConstant.LIMIT, r.dataSource.options.pageSize),
                        o.toJSONString()
                    }
                }),
                schema: {
                    data: function(e) {
                        return ajaxEi = EiInfo.parseJSONObject(e),
                        ajaxEi.getBlock(a).getMappedRows()
                    }
                },
                pageSize: 50
            }
        },
        p = f(t);
        i = o(!0, {},
        p, {
            transport: {
                read: {
                    url: t.url + "/service/" + d + "/" + u
                }
            }
        }),
        t.filter && o(r, {
            filter: t.filter
        }),
        t.noDataTemplate && o(r, {
            noDataTemplate: t.noDataTemplate
        });
        var h = o({},
        IPLATUI.EFAutoComplete[t.autoId]);
        return h.dataSource && (i = o(!0, {},
        i, h.dataSource), delete h.dataSource),
        o({},
        r, {
            dataTextField: t.dataTextField
        },
        {
            dataSource: i
        },
        h)
    }
    var i, a, n = window.IPLAT || {},
    o = e.extend,
    r = {
        animation: {
            close: {
                effects: "fadeOut zoom:out",
                duration: 300
            },
            open: {
                effects: "fadeIn zoom:in",
                duration: 300
            }
        },
        autoWidth: !0,
        minLength: 1,
        enforceMinLength: !0,
        filter: "contains",
        height: 200,
        highlightFirst: !0,
        suggest: !0,
        noDataTemplate: "没有数据"
    },
    s = {
        read: {
            type: "POST",
            dataType: "json",
            contentType: "application/json"
        }
    };
    n.AutoComplete = function(i) {
        a = t(i),
        e("#" + i.autoId).kendoAutoComplete(a)
    }
} (jQuery),
function(e) {
    IPLAT.Button = function(e) {
        var t = e.hasPrivilege,
        i = e.button,
        a = e.buttonText,
        n = e.desc,
        o = e.layout,
        r = e.uri || "";
        if (t) {
            var s = !0,
            l = !1,
            c = IPLAT.Util.parseBtnClass(r),
            d = c.css,
            u = c.btnClass;
            if (/fa-/.test(d) ? (d += " i-btn-gap", /^fa /.test(d) || (d = "fa " + d)) : /k-/.test(d) ? /^k-icon /.test(d) || (d = "k-icon " + d) : /i-/.test(d) && (/^i-icon /.test(d) || (d = "i-icon " + d)), IPLAT.isNull(o) && (o = "1"), "2" === o ? (s = !1, l = !0) : "3" === o && (s = !0, l = !0), l) {
                var f = s ? d: d + " i-btn-only-icon",
                p = "<span class='" + f + "'></span>";
                i.append(p)
            }
            if (s) {
                var h = "<span>" + a + "</span>";
                i.append(h)
            }
            _.isEmpty(u) || i.addClass(u),
            i.attr("title", n),
            i.attr("layout", o),
            i.css("display", "")
        }
    }
} (jQuery),
$(function() {
    $("body")[0].className.indexOf("i-theme-ant") != -1 && ($(".si-size-fullscreen").each(function() {
        this.className = "iconfont iconfullscreen",
        $(this.parentNode).on("click",
        function() {
            this.children[0].className.indexOf("actual") != -1 ? this.children[0].className = "iconfont iconfullscreenexit": this.children[0].className = "iconfont iconfullscreen"
        })
    }), $(".si-arrow-up").each(function() {
        this.className = "iconfont iconupsquare",
        $(this.parentNode).on("click",
        function() {
            this.children[0].className.indexOf("arrow-up") != -1 ? this.children[0].className = "iconfont iconupsquare": this.children[0].className = "iconfont icondownsquare"
        })
    }))
}),
function(e) {
    function t(t, i) {
        var a = kendo.template(e("#date-footer-template").html()),
        p = {};
        switch (u === t[u] ? f(t, IPLATUI.EFDateSpan[i]) : f(t, IPLATUI.EFDatePicker[i]), t.role) {
        case l:
            f(p, o);
            break;
        case "":
        case c:
            f(p, n);
            break;
        case d:
            f(p, r)
        }
        var h = e("#" + i);
        return h.attr(s.Util.pickDOMAttributes(t)),
        f(p, t, {
            footer: a({
                today: i + "_today",
                clear: i + "_clear",
                close: i + "_close"
            })
        })
    }
    function i(t, i) {
        var a = e("#" + i);
        a.attr("style", "width: 100%;"),
        t.one("open",
        function() {
            var e = this;
            setTimeout(function() {
                if (!s.isUndefined(e.dateView)) {
                    var a = e.dateView.popup.wrapper;
                    a.find(".date-footer-wrapper").unwrap(),
                    a.on("click", "#" + i + "_today",
                    function() {
                        var e = kendo.date.today();
                        t.options.role === l && (e = new Date),
                        t.value(e),
                        t.close(),
                        t.trigger("change")
                    }),
                    a.on("click", "#" + i + "_clear",
                    function() {
                        t.value(null),
                        t.close(),
                        t.trigger("change")
                    }),
                    a.on("click", "#" + i + "_close",
                    function() {
                        t.close()
                    })
                }
            })
        }),
        a.on("click",
        function() {
            t.close("time"),
            t.open("date")
        })
    }
    function a(e, t) {
        var i = e.options.name,
        a = ".kendoDatePicker",
        n = e._dateIcon;
        if (_.isUndefined(t) && (t = !0), "DatePicker" === i) t && n.on("click" + a,
        function() {
            e.dateView.toggle()
        }).on("mousedown" + a,
        function(e) {
            e.preventDefault()
        });
        else if ("DateTimePicker" === i) {
            var o = e._timeIcon;
            a = ".kendoDateTimePicker",
            t && (n.on("click" + a,
            function() {
                e.toggle("date")
            }).on("mousedown" + a,
            function(e) {
                e.preventDefault()
            }), o.on("click" + a,
            function() {
                e.toggle("time")
            }).on("mousedown" + a,
            function(e) {
                e.preventDefault()
            }))
        }
    }
    var n, o, r, s = window.IPLAT || {},
    l = "datetime",
    c = "date",
    d = "time",
    u = "datespan",
    f = e.extend;
    n = f({},
    IPLATUI.Config.EFDate),
    o = f({},
    IPLATUI.Config.EFDateTime),
    r = f({},
    IPLATUI.Config.EFTime),
    s.Date = function(a) {
        a = t(a, a.dateId);
        var n, o = e("#" + a.dateId);
        switch (a.role) {
        case l:
            n = o.kendoDateTimePicker(a).data("kendoDateTimePicker");
            break;
        case "":
        case c:
            n = o.kendoDatePicker(a).data("kendoDatePicker");
            break;
        case d:
            n = o.kendoTimePicker(a).data("kendoTimePicker")
        }
        return i(n, a.dateId),
        n
    },
    s.DateSpan = function(a) {
        function n() {
            var e = c.value(),
            t = d.value();
            e ? (e = new Date(e), e.setDate(e.getDate()), d.min(e)) : t ? (c.max(new Date(t)), d.min(new Date(1900, 0, 1))) : (c.max(new Date(2099, 11, 31)), d.min(new Date(1900, 0, 1)))
        }
        function o() {
            var e = d.value(),
            t = c.value();
            e ? (e = new Date(e), e.setDate(e.getDate()), c.max(e)) : t ? (c.max(new Date(2099, 11, 31)), d.min(new Date(t))) : (c.max(new Date(2099, 11, 31)), d.min(new Date(1900, 0, 1)))
        }
        function r(e, t, i) {
            if (e && t) {
                var a = i.split(":"),
                n = a[0] ? a[0] : 4,
                o = '<label class="i-datespan-label">' + e + "</label>";
                2 === a.length && (n = 1 * a[0]);
                var r = m.parent(),
                s = r.parent();
                r.append(o),
                r.append(g.parent().html()),
                g.parent().parent().remove(),
                g = r.find("input:eq(1)"),
                m.attr("style", "width: 45% !important;"),
                g.attr("style", "width: 45% !important;"),
                s.prev().attr("class", "col-xs-" + n + " control-label"),
                s.attr("class", "col-xs-" + (12 - n)),
                s.parent().parent().addClass("i-datespan-ext")
            }
        }
        a[u] = u;
        var c, d, p = t(a, a.startId),
        h = t(a, a.endId),
        m = e("#" + a.startId),
        g = e("#" + a.endId);
        if (r(a.extChar, a.bindWidth, a.bindRatio), isAvailable(a.startDate) && (p.value = a.startDate), isAvailable(a.endDate) && (h.value = a.endDate), l === a.role) {
            var v = new Date;
            if (!isAvailable(a.startDate) && a.startTimeFormat) {
                var T = new Date(kendo.toString(v, s.FORMAT.DATE_8_PR) + " " + a.startTimeFormat);
                c = m.kendoDateTimePicker(f(p, {
                    value: T
                })).data("kendoDateTimePicker"),
                c.element.val("")
            } else c = m.kendoDateTimePicker(p).data("kendoDateTimePicker");
            if (!isAvailable(a.endDate) && a.endTimeFormat) {
                var k = new Date(kendo.toString(v, s.FORMAT.DATE_8_PR) + " " + a.endTimeFormat);
                d = g.kendoDateTimePicker(f(h, {
                    value: k
                })).data("kendoDateTimePicker"),
                d.element.val("")
            } else d = g.kendoDateTimePicker(h).data("kendoDateTimePicker")
        } else c = m.kendoDatePicker(p).data("kendoDatePicker"),
        d = g.kendoDatePicker(h).data("kendoDatePicker");
        return d.min(c.value()),
        c.bind("change", n),
        d.bind("change", o),
        i(c, p.startId),
        i(d, p.endId),
        e("#t_" + a.startId + "_" + a.endId).css("visibility", "visible"),
        {
            start: c,
            end: d
        }
    },
    kendo.ui.DatePicker.fn.readonly = function(e) {
        return function(t) {
            var i = this;
            e.call(i, t),
            a(i, t)
        }
    } (kendo.ui.DatePicker.fn.readonly),
    kendo.ui.DateTimePicker.fn.readonly = function(e) {
        return function(t) {
            var i = this;
            e.call(i, t),
            a(i, t)
        }
    } (kendo.ui.DateTimePicker.fn.readonly)
} (jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
} (function(e) {
    e.ui = e.ui || {};
    e.ui.version = "1.12.1"; !
    function() {
        function t(e, t, i) {
            return [parseFloat(e[0]) * (u.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (u.test(e[1]) ? i / 100 : 1)]
        }
        function i(t, i) {
            return parseInt(e.css(t, i), 10) || 0
        }
        function a(t) {
            var i = t[0];
            return 9 === i.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            }: e.isWindow(i) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            }: i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            }: {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        var n, o = Math.max,
        r = Math.abs,
        s = /left|center|right/,
        l = /top|center|bottom/,
        c = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        u = /%$/,
        f = e.fn.pos;
        e.pos = {
            scrollbarWidth: function() {
                if (void 0 !== n) return n;
                var t, i, a = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                o = a.children()[0];
                return e("body").append(a),
                t = o.offsetWidth,
                a.css("overflow", "scroll"),
                i = o.offsetWidth,
                t === i && (i = a[0].clientWidth),
                a.remove(),
                n = t - i
            },
            getScrollInfo: function(t) {
                var i = t.isWindow || t.isDocument ? "": t.element.css("overflow-x"),
                a = t.isWindow || t.isDocument ? "": t.element.css("overflow-y"),
                n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                o = "scroll" === a || "auto" === a && t.height < t.element[0].scrollHeight;
                return {
                    width: o ? e.pos.scrollbarWidth() : 0,
                    height: n ? e.pos.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var i = e(t || window),
                a = e.isWindow(i[0]),
                n = !!i[0] && 9 === i[0].nodeType,
                o = !a && !n;
                return {
                    element: i,
                    isWindow: a,
                    isDocument: n,
                    offset: o ? e(t).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }
            }
        },
        e.fn.pos = function(n) {
            if (!n || !n.of) return f.apply(this, arguments);
            n = e.extend({},
            n);
            var u, p, h, m, g, v, T = e(n.of),
            k = e.pos.getWithinInfo(n.within),
            b = e.pos.getScrollInfo(k),
            I = (n.collision || "flip").split(" "),
            _ = {};
            return v = a(T),
            T[0].preventDefault && (n.at = "left top"),
            p = v.width,
            h = v.height,
            m = v.offset,
            g = e.extend({},
            m),
            e.each(["my", "at"],
            function() {
                var e, t, i = (n[this] || "").split(" ");
                1 === i.length && (i = s.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
                i[0] = s.test(i[0]) ? i[0] : "center",
                i[1] = l.test(i[1]) ? i[1] : "center",
                e = c.exec(i[0]),
                t = c.exec(i[1]),
                _[this] = [e ? e[0] : 0, t ? t[0] : 0],
                n[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
            }),
            1 === I.length && (I[1] = I[0]),
            "right" === n.at[0] ? g.left += p: "center" === n.at[0] && (g.left += p / 2),
            "bottom" === n.at[1] ? g.top += h: "center" === n.at[1] && (g.top += h / 2),
            u = t(_.at, p, h),
            g.left += u[0],
            g.top += u[1],
            this.each(function() {
                var a, s, l = e(this),
                c = l.outerWidth(),
                d = l.outerHeight(),
                f = i(this, "marginLeft"),
                v = i(this, "marginTop"),
                y = c + f + i(this, "marginRight") + b.width,
                w = d + v + i(this, "marginBottom") + b.height,
                E = e.extend({},
                g),
                A = t(_.my, l.outerWidth(), l.outerHeight());
                "right" === n.my[0] ? E.left -= c: "center" === n.my[0] && (E.left -= c / 2),
                "bottom" === n.my[1] ? E.top -= d: "center" === n.my[1] && (E.top -= d / 2),
                E.left += A[0],
                E.top += A[1],
                a = {
                    marginLeft: f,
                    marginTop: v
                },
                e.each(["left", "top"],
                function(t, i) {
                    e.ui.pos[I[t]] && e.ui.pos[I[t]][i](E, {
                        targetWidth: p,
                        targetHeight: h,
                        elemWidth: c,
                        elemHeight: d,
                        collisionPosition: a,
                        collisionWidth: y,
                        collisionHeight: w,
                        offset: [u[0] + A[0], u[1] + A[1]],
                        my: n.my,
                        at: n.at,
                        within: k,
                        elem: l
                    })
                }),
                n.using && (s = function(e) {
                    var t = m.left - E.left,
                    i = t + p - c,
                    a = m.top - E.top,
                    s = a + h - d,
                    u = {
                        target: {
                            element: T,
                            left: m.left,
                            top: m.top,
                            width: p,
                            height: h
                        },
                        element: {
                            element: l,
                            left: E.left,
                            top: E.top,
                            width: c,
                            height: d
                        },
                        horizontal: i < 0 ? "left": t > 0 ? "right": "center",
                        vertical: s < 0 ? "top": a > 0 ? "bottom": "middle"
                    };
                    p < c && r(t + i) < p && (u.horizontal = "center"),
                    h < d && r(a + s) < h && (u.vertical = "middle"),
                    o(r(t), r(i)) > o(r(a), r(s)) ? u.important = "horizontal": u.important = "vertical",
                    n.using.call(this, e, u)
                }),
                l.offset(e.extend(E, {
                    using: s
                }))
            })
        },
        e.ui.pos = {
            _trigger: function(e, t, i, a) {
                t.elem && t.elem.trigger({
                    type: i,
                    position: e,
                    positionData: t,
                    triggered: a
                })
            },
            fit: {
                left: function(t, i) {
                    e.ui.pos._trigger(t, i, "posCollide", "fitLeft");
                    var a, n = i.within,
                    r = n.isWindow ? n.scrollLeft: n.offset.left,
                    s = n.width,
                    l = t.left - i.collisionPosition.marginLeft,
                    c = r - l,
                    d = l + i.collisionWidth - s - r;
                    i.collisionWidth > s ? c > 0 && d <= 0 ? (a = t.left + c + i.collisionWidth - s - r, t.left += c - a) : d > 0 && c <= 0 ? t.left = r: c > d ? t.left = r + s - i.collisionWidth: t.left = r: c > 0 ? t.left += c: d > 0 ? t.left -= d: t.left = o(t.left - l, t.left),
                    e.ui.pos._trigger(t, i, "posCollided", "fitLeft")
                },
                top: function(t, i) {
                    e.ui.pos._trigger(t, i, "posCollide", "fitTop");
                    var a, n = i.within,
                    r = n.isWindow ? n.scrollTop: n.offset.top,
                    s = i.within.height,
                    l = t.top - i.collisionPosition.marginTop,
                    c = r - l,
                    d = l + i.collisionHeight - s - r;
                    i.collisionHeight > s ? c > 0 && d <= 0 ? (a = t.top + c + i.collisionHeight - s - r, t.top += c - a) : d > 0 && c <= 0 ? t.top = r: c > d ? t.top = r + s - i.collisionHeight: t.top = r: c > 0 ? t.top += c: d > 0 ? t.top -= d: t.top = o(t.top - l, t.top),
                    e.ui.pos._trigger(t, i, "posCollided", "fitTop")
                }
            },
            flip: {
                left: function(t, i) {
                    e.ui.pos._trigger(t, i, "posCollide", "flipLeft");
                    var a, n, o = i.within,
                    s = o.offset.left + o.scrollLeft,
                    l = o.width,
                    c = o.isWindow ? o.scrollLeft: o.offset.left,
                    d = t.left - i.collisionPosition.marginLeft,
                    u = d - c,
                    f = d + i.collisionWidth - l - c,
                    p = "left" === i.my[0] ? -i.elemWidth: "right" === i.my[0] ? i.elemWidth: 0,
                    h = "left" === i.at[0] ? i.targetWidth: "right" === i.at[0] ? -i.targetWidth: 0,
                    m = -2 * i.offset[0];
                    u < 0 ? (a = t.left + p + h + m + i.collisionWidth - l - s, (a < 0 || a < r(u)) && (t.left += p + h + m)) : f > 0 && (n = t.left - i.collisionPosition.marginLeft + p + h + m - c, (n > 0 || r(n) < f) && (t.left += p + h + m)),
                    e.ui.pos._trigger(t, i, "posCollided", "flipLeft")
                },
                top: function(t, i) {
                    e.ui.pos._trigger(t, i, "posCollide", "flipTop");
                    var a, n, o = i.within,
                    s = o.offset.top + o.scrollTop,
                    l = o.height,
                    c = o.isWindow ? o.scrollTop: o.offset.top,
                    d = t.top - i.collisionPosition.marginTop,
                    u = d - c,
                    f = d + i.collisionHeight - l - c,
                    p = "top" === i.my[1],
                    h = p ? -i.elemHeight: "bottom" === i.my[1] ? i.elemHeight: 0,
                    m = "top" === i.at[1] ? i.targetHeight: "bottom" === i.at[1] ? -i.targetHeight: 0,
                    g = -2 * i.offset[1];
                    u < 0 ? (n = t.top + h + m + g + i.collisionHeight - l - s, (n < 0 || n < r(u)) && (t.top += h + m + g)) : f > 0 && (a = t.top - i.collisionPosition.marginTop + h + m + g - c, (a > 0 || r(a) < f) && (t.top += h + m + g)),
                    e.ui.pos._trigger(t, i, "posCollided", "flipTop")
                }
            },
            flipfit: {
                left: function() {
                    e.ui.pos.flip.left.apply(this, arguments),
                    e.ui.pos.fit.left.apply(this, arguments)
                },
                top: function() {
                    e.ui.pos.flip.top.apply(this, arguments),
                    e.ui.pos.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var t, i, a, n, o, r = document.getElementsByTagName("body")[0],
            s = document.createElement("div");
            t = document.createElement(r ? "div": "body"),
            a = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            },
            r && e.extend(a, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (o in a) t.style[o] = a[o];
            t.appendChild(s),
            i = r || document.documentElement,
            i.insertBefore(t, i.firstChild),
            s.style.cssText = "position: absolute; left: 10.7432222px;",
            n = e(s).offset().left,
            e.support.offsetFractions = n > 10 && n < 11,
            t.innerHTML = "",
            i.removeChild(t)
        } ()
    } ();
    e.ui.position
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : window.jQuery && !window.jQuery.fn.iconpicker && e(window.jQuery)
} (function(e) {
    "use strict";
    var t = {
        isEmpty: function(e) {
            return e === !1 || "" === e || null === e || void 0 === e
        },
        isEmptyObject: function(e) {
            return this.isEmpty(e) === !0 || 0 === e.length
        },
        isElement: function(t) {
            return e(t).length > 0
        },
        isString: function(e) {
            return "string" == typeof e || e instanceof String
        },
        isArray: function(t) {
            return e.isArray(t)
        },
        inArray: function(t, i) {
            return e.inArray(t, i) !== -1
        },
        throwError: function(e) {
            throw "Font Awesome Icon Picker Exception: " + e
        }
    },
    i = function(a, n) {
        this._id = i._idCounter++,
        this.element = e(a).addClass("iconpicker-element"),
        this._trigger("iconpickerCreate", {
            iconpickerValue: this.iconpickerValue
        }),
        this.options = e.extend({},
        i.defaultOptions, this.element.data(), n),
        this.options.templates = e.extend({},
        i.defaultOptions.templates, this.options.templates),
        this.options.originalPlacement = this.options.placement,
        this.container = !!t.isElement(this.options.container) && e(this.options.container),
        this.container === !1 && (this.element.is(".dropdown-toggle") ? this.container = e("~ .dropdown-menu:first", this.element) : this.container = this.element.is("input,textarea,button,.btn") ? this.element.parent() : this.element),
        this.container.addClass("iconpicker-container"),
        this.isDropdownMenu() && (this.options.placement = "inline"),
        this.input = !!this.element.is("input,textarea") && this.element.addClass("iconpicker-input"),
        this.input === !1 && (this.input = this.container.find(this.options.input), this.input.is("input,textarea") || (this.input = !1)),
        this.component = this.isDropdownMenu() ? this.container.parent().find(this.options.component) : this.container.find(this.options.component),
        0 === this.component.length ? this.component = !1 : this.component.find("i").addClass("iconpicker-component"),
        this._createPopover(),
        this._createIconpicker(),
        0 === this.getAcceptButton().length && (this.options.mustAccept = !1),
        this.isInputGroup() ? $("body").append(this.popover) : this.container.append(this.popover),
        this._bindElementEvents(),
        this._bindWindowEvents(),
        this.update(this.options.selected),
        this.isInline() && this.show(),
        this._trigger("iconpickerCreated", {
            iconpickerValue: this.iconpickerValue
        })
    };
    i._idCounter = 0,
    i.defaultOptions = {
        title: !1,
        selected: !1,
        defaultValue: !1,
        placement: "bottom",
        collision: "none",
        animation: !0,
        hideOnSelect: !1,
        showFooter: !1,
        searchInFooter: !1,
        mustAccept: !1,
        selectedCustomClass: "bg-primary",
        icons: [],
        fullClassFormatter: function(e) {
            return e
        },
        input: "input,.iconpicker-input",
        inputSearch: !1,
        container: !1,
        component: ".input-group-addon,.iconpicker-component",
        templates: {
            popover: '<div class="iconpicker-popover popover"><div class="arrow"></div><div class="popover-title"></div><div class="popover-content"></div></div>',
            footer: '<div class="popover-footer"></div>',
            buttons: '<button class="i-btn-lg  k-grid-add iconpicker-btn iconpicker-btn-cancel btn-default btn-sm"><span>取消</span></button> <button class="i-btn-lg k-grid-save-changes iconpicker-btn iconpicker-btn-accept btn-primary btn-sm"><span>确认</span></button>',
            search: '<input type="search" class="form-control iconpicker-search" placeholder="关键词查询" />',
            iconpicker: '<div class="iconpicker"><div class="iconpicker-items"></div></div>',
            iconpickerItem: '<a role="button" href="javascript:;" class="iconpicker-item"><i></i></a>'
        }
    },
    i.batch = function(t, i) {
        var a = Array.prototype.slice.call(arguments, 2);
        return e(t).each(function() {
            var t = e(this).data("iconpicker");
            t && t[i].apply(t, a)
        })
    },
    i.prototype = {
        constructor: i,
        options: {},
        _id: 0,
        _trigger: function(t, i) {
            i = i || {},
            this.element.trigger(e.extend({
                type: t,
                iconpickerInstance: this
            },
            i))
        },
        _createPopover: function() {
            this.popover = e(this.options.templates.popover);
            var i = this.popover.find(".popover-title");
            if (this.options.title && i.append(e('<div class="popover-title-text">' + this.options.title + "</div>")), this.hasSeparatedSearchInput() && !this.options.searchInFooter ? i.append(this.options.templates.search) : this.options.title || i.remove(), this.options.showFooter && !t.isEmpty(this.options.templates.footer)) {
                var a = e(this.options.templates.footer);
                this.hasSeparatedSearchInput() && this.options.searchInFooter && a.append(e(this.options.templates.search)),
                t.isEmpty(this.options.templates.buttons) || a.append(e(this.options.templates.buttons)),
                this.popover.append(a)
            }
            return this.options.animation === !0 && this.popover.addClass("fade"),
            this.popover
        },
        _createIconpicker: function() {
            var t = this;
            this.iconpicker = e(this.options.templates.iconpicker);
            var i = function(i) {
                var a = e(this);
                a.is("i") && (a = a.parent()),
                t._trigger("iconpickerSelect", {
                    iconpickerItem: a,
                    iconpickerValue: t.iconpickerValue
                }),
                t.options.mustAccept === !1 ? (t.update(a.data("iconpickerValue")), t._trigger("iconpickerSelected", {
                    iconpickerItem: this,
                    iconpickerValue: t.iconpickerValue
                })) : t.update(a.data("iconpickerValue"), !0),
                t.options.hideOnSelect && t.options.mustAccept === !1 && t.hide()
            },
            a = e(this.options.templates.iconpickerItem),
            n = [];
            for (var o in this.options.icons) if ("string" == typeof this.options.icons[o].title) {
                var r = a.clone();
                if (r.find("i").addClass(this.options.fullClassFormatter(this.options.icons[o].title)), r.data("iconpickerValue", this.options.icons[o].title).on("click.iconpicker", i), r.attr("title", "." + this.options.icons[o].title), this.options.icons[o].searchTerms.length > 0) {
                    for (var s = "",
                    l = 0; l < this.options.icons[o].searchTerms.length; l++) s = s + this.options.icons[o].searchTerms[l] + " ";
                    r.attr("data-search-terms", s)
                }
                n.push(r)
            }
            return this.iconpicker.find(".iconpicker-items").append(n),
            this.popover.find(".popover-content").append(this.iconpicker),
            this.iconpicker
        },
        _isEventInsideIconpicker: function(t) {
            var i = e(t.target);
            return ! ((!i.hasClass("iconpicker-element") || i.hasClass("iconpicker-element") && !i.is(this.element)) && 0 === i.parents(".iconpicker-popover").length)
        },
        _bindElementEvents: function() {
            var i = this;
            this.getSearchInput().on("keyup.iconpicker",
            function() {
                i.filter(e(this).val().toLowerCase())
            }),
            this.getAcceptButton().on("click.iconpicker",
            function() {
                var e = i.iconpicker.find(".iconpicker-selected").get(0);
                i.update(i.iconpickerValue),
                i._trigger("iconpickerSelected", {
                    iconpickerItem: e,
                    iconpickerValue: i.iconpickerValue
                }),
                i.isInline() || i.hide()
            }),
            this.getCancelButton().on("click.iconpicker",
            function() {
                i.isInline() || i.hide()
            }),
            this.element.on("focus.iconpicker",
            function(e) {
                1 != i.options.readonly && i.show(),
                e.stopPropagation()
            }),
            this.hasComponent() && this.component.on("click.iconpicker",
            function() {
                i.toggle()
            }),
            this.hasInput() && this.input.on("keyup.iconpicker",
            function(a) {
                t.inArray(a.keyCode, [38, 40, 37, 39, 16, 17, 18, 9, 8, 91, 93, 20, 46, 186, 190, 46, 78, 188, 44, 86]) ? i._updateFormGroupStatus(i.getValid(this.value) !== !1) : i.update(),
                i.options.inputSearch === !0 && i.filter(e(this).val().toLowerCase())
            })
        },
        _bindWindowEvents: function() {
            var t = e(window.document),
            i = this,
            a = ".iconpicker.inst" + this._id;
            e(window).on("resize.iconpicker" + a + " orientationchange.iconpicker" + a,
            function(e) {
                i.popover.hasClass("in") && i.updatePlacement()
            }),
            i.isInline() || t.on("mouseup" + a,
            function(e) {
                i._isEventInsideIconpicker(e) || i.isInline() || i.hide()
            })
        },
        _unbindElementEvents: function() {
            this.popover.off(".iconpicker"),
            this.element.off(".iconpicker"),
            this.hasInput() && this.input.off(".iconpicker"),
            this.hasComponent() && this.component.off(".iconpicker"),
            this.hasContainer() && this.container.off(".iconpicker")
        },
        _unbindWindowEvents: function() {
            e(window).off(".iconpicker.inst" + this._id),
            e(window.document).off(".iconpicker.inst" + this._id)
        },
        updatePlacement: function(t, i) {
            t = t || this.options.placement,
            this.options.placement = t,
            i = i || this.options.collision,
            i = i === !0 ? "flip": i;
            var a = {
                at: "right bottom",
                my: "right top",
                of: this.hasInput() && !this.isInputGroup() ? this.input: this.container,
                collision: i === !0 ? "flip": i,
                within: window
            };
            if (this.popover.removeClass("inline topLeftCorner topLeft top topRight topRightCorner rightTop right rightBottom bottomRight bottomRightCorner bottom bottomLeft bottomLeftCorner leftBottom left leftTop"), "object" == typeof t) return this.popover.pos(e.extend({},
            a, t));
            switch (t) {
            case "inline":
                a = !1;
                break;
            case "topLeftCorner":
                a.my = "right bottom",
                a.at = "left top";
                break;
            case "topLeft":
                a.my = "left bottom",
                a.at = "left top";
                break;
            case "top":
                a.my = "center bottom",
                a.at = "center top";
                break;
            case "topRight":
                a.my = "right bottom",
                a.at = "right top";
                break;
            case "topRightCorner":
                a.my = "left bottom",
                a.at = "right top";
                break;
            case "rightTop":
                a.my = "left bottom",
                a.at = "right center";
                break;
            case "right":
                a.my = "left center",
                a.at = "right center";
                break;
            case "rightBottom":
                a.my = "left top",
                a.at = "right center";
                break;
            case "bottomRightCorner":
                a.my = "left top",
                a.at = "right bottom";
                break;
            case "bottomRight":
                a.my = "right top",
                a.at = "right bottom";
                break;
            case "bottom":
                a.my = "center top",
                a.at = "center bottom";
                break;
            case "bottomLeft":
                a.my = "left top",
                a.at = "left bottom";
                break;
            case "bottomLeftCorner":
                a.my = "right top",
                a.at = "left bottom";
                break;
            case "leftBottom":
                a.my = "right top",
                a.at = "left center";
                break;
            case "left":
                a.my = "right center",
                a.at = "left center";
                break;
            case "leftTop":
                a.my = "right bottom",
                a.at = "left center";
                break;
            default:
                return ! 1
            }
            return this.popover.css({
                display: "inline" === this.options.placement ? "": "block"
            }),
            a !== !1 ? this.popover.pos(a).css("maxWidth", e(window).width() - this.container.offset().left - 5) : this.popover.css({
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto",
                maxWidth: "none"
            }),
            this.popover.addClass(this.options.placement),
            !0
        },
        _updateComponents: function() {
            if (this.iconpicker.find(".iconpicker-item.iconpicker-selected").removeClass("iconpicker-selected " + this.options.selectedCustomClass), this.iconpickerValue && this.iconpicker.find("." + this.options.fullClassFormatter(this.iconpickerValue).replace(/ /g, ".")).parent().addClass("iconpicker-selected " + this.options.selectedCustomClass), this.hasComponent()) {
                var e = this.component.find("i");
                e.length > 0 ? e.attr("class", this.options.fullClassFormatter(this.iconpickerValue)) : this.component.html(this.getHtml())
            }
        },
        _updateFormGroupStatus: function(e) {
            return !! this.hasInput() && (e !== !1 ? this.input.parents(".form-group:first").removeClass("has-error") : this.input.parents(".form-group:first").addClass("has-error"), !0)
        },
        getValid: function(i) {
            t.isString(i) || (i = "");
            var a = "" === i;
            i = e.trim(i);
            for (var n = !1,
            o = 0; o < this.options.icons.length; o++) if (this.options.icons[o].title === i) {
                n = !0;
                break
            }
            return ! (!n && !a) && i
        },
        setValue: function(e) {
            var t = this.getValid(e);
            return t !== !1 ? (this.iconpickerValue = t, this._trigger("iconpickerSetValue", {
                iconpickerValue: t
            }), this.iconpickerValue) : (this._trigger("iconpickerInvalid", {
                iconpickerValue: e
            }), !1)
        },
        getHtml: function() {
            return '<i class="' + this.options.fullClassFormatter(this.iconpickerValue) + '"></i>'
        },
        setSourceValue: function(e) {
            return e = this.setValue(e),
            e !== !1 && "" !== e && (this.hasInput() ? this.input.val(this.iconpickerValue) : this.element.data("iconpickerValue", this.iconpickerValue), this._trigger("iconpickerSetSourceValue", {
                iconpickerValue: e
            })),
            e
        },
        getSourceValue: function(e) {
            e = e || this.options.defaultValue;
            var t = e;
            return t = this.hasInput() ? this.input.val() : this.element.data("iconpickerValue"),
            void 0 !== t && "" !== t && null !== t && t !== !1 || (t = e),
            t
        },
        hasInput: function() {
            return this.input !== !1
        },
        isInputSearch: function() {
            return this.hasInput() && this.options.inputSearch === !0
        },
        isInputGroup: function() {
            return this.container.is(".input-group")
        },
        isDropdownMenu: function() {
            return this.container.is(".dropdown-menu")
        },
        hasSeparatedSearchInput: function() {
            return this.options.templates.search !== !1 && !this.isInputSearch()
        },
        hasComponent: function() {
            return this.component !== !1
        },
        hasContainer: function() {
            return this.container !== !1
        },
        getAcceptButton: function() {
            return this.popover.find(".iconpicker-btn-accept")
        },
        getCancelButton: function() {
            return this.popover.find(".iconpicker-btn-cancel")
        },
        getSearchInput: function() {
            return this.popover.find(".iconpicker-search")
        },
        filter: function(i) {
            if (t.isEmpty(i)) return this.iconpicker.find(".iconpicker-item").show(),
            e(!1);
            var a = [];
            return this.iconpicker.find(".iconpicker-item").each(function() {
                var t = e(this),
                n = t.attr("title").toLowerCase(),
                o = t.attr("data-search-terms") ? t.attr("data-search-terms").toLowerCase() : "";
                n = n + " " + o;
                var r = !1;
                try {
                    r = new RegExp("(^|\\W)" + i, "g")
                } catch(t) {
                    r = !1
                }
                r !== !1 && n.match(r) ? (a.push(t), t.show()) : t.hide()
            }),
            a
        },
        show: function() {
            return ! this.popover.hasClass("in") && (e.iconpicker.batch(e(".iconpicker-popover.in:not(.inline)").not(this.popover), "hide"), this._trigger("iconpickerShow", {
                iconpickerValue: this.iconpickerValue
            }), this.updatePlacement(), this.popover.addClass("in"), void setTimeout(e.proxy(function() {
                this.popover.css("display", this.isInline() ? "": "block"),
                this._trigger("iconpickerShown", {
                    iconpickerValue: this.iconpickerValue
                })
            },
            this), this.options.animation ? 300 : 1))
        },
        hide: function() {
            return !! this.popover.hasClass("in") && (this._trigger("iconpickerHide", {
                iconpickerValue: this.iconpickerValue
            }), this.popover.removeClass("in"), void setTimeout(e.proxy(function() {
                this.popover.css("display", "none"),
                this.getSearchInput().val(""),
                this.filter(""),
                this._trigger("iconpickerHidden", {
                    iconpickerValue: this.iconpickerValue
                })
            },
            this), this.options.animation ? 300 : 1))
        },
        toggle: function() {
            this.popover.is(":visible") ? this.hide() : this.show(!0)
        },
        update: function(e, t) {
            return e = e ? e: this.getSourceValue(this.iconpickerValue),
            this._trigger("iconpickerUpdate", {
                iconpickerValue: this.iconpickerValue
            }),
            t === !0 ? e = this.setValue(e) : (e = this.setSourceValue(e), this._updateFormGroupStatus(e !== !1)),
            e !== !1 && this._updateComponents(),
            this._trigger("iconpickerUpdated", {
                iconpickerValue: this.iconpickerValue
            }),
            e
        },
        destroy: function() {
            this._trigger("iconpickerDestroy", {
                iconpickerValue: this.iconpickerValue
            }),
            this.element.removeData("iconpicker").removeData("iconpickerValue").removeClass("iconpicker-element"),
            this._unbindElementEvents(),
            this._unbindWindowEvents(),
            e(this.popover).remove(),
            this._trigger("iconpickerDestroyed", {
                iconpickerValue: this.iconpickerValue
            })
        },
        disable: function() {
            return !! this.hasInput() && (this.input.prop("disabled", !0), !0)
        },
        enable: function() {
            return !! this.hasInput() && (this.input.prop("disabled", !1), !0)
        },
        isDisabled: function() {
            return !! this.hasInput() && this.input.prop("disabled") === !0
        },
        isInline: function() {
            return "inline" === this.options.placement || this.popover.hasClass("inline")
        }
    },
    e.iconpicker = i,
    e.fn.iconpicker = function(t) {
        return this.each(function() {
            var a = e(this);
            a.data("iconpicker") || a.data("iconpicker", new i(this, "object" == typeof t ? t: {}))
        })
    },
    i.defaultOptions = e.extend(i.defaultOptions, {
        icons: [{
            title: "fa fa-500px",
            searchTerms: []
        },
        {
            title: "fa fa-adjust",
            searchTerms: ["contrast"]
        },
        {
            title: "fa fa-adn",
            searchTerms: []
        },
        {
            title: "fa fa-align-center",
            searchTerms: ["middle", "text"]
        },
        {
            title: "fa fa-align-justify",
            searchTerms: ["text"]
        },
        {
            title: "fa fa-align-left",
            searchTerms: ["text"]
        },
        {
            title: "fa fa-align-right",
            searchTerms: ["text"]
        },
        {
            title: "fa fa-amazon",
            searchTerms: []
        },
        {
            title: "fa fa-ambulance",
            searchTerms: ["help", "machine", "support", "vehicle"]
        },
        {
            title: "fa fa-american-sign-language-interpreting",
            searchTerms: []
        },
        {
            title: "fa fa-anchor",
            searchTerms: ["link"]
        },
        {
            title: "fa fa-android",
            searchTerms: ["robot"]
        },
        {
            title: "fa fa-angellist",
            searchTerms: []
        },
        {
            title: "fa fa-angle-double-down",
            searchTerms: ["arrows"]
        },
        {
            title: "fa fa-angle-double-left",
            searchTerms: ["arrows", "back", "laquo", "previous", "quote"]
        },
        {
            title: "fa fa-angle-double-right",
            searchTerms: ["arrows", "forward", "next", "quote", "raquo"]
        },
        {
            title: "fa fa-angle-double-up",
            searchTerms: ["arrows"]
        },
        {
            title: "fa fa-angle-down",
            searchTerms: ["arrow"]
        },
        {
            title: "fa fa-angle-left",
            searchTerms: ["arrow", "back", "previous"]
        },
        {
            title: "fa fa-angle-right",
            searchTerms: ["arrow", "forward", "next"]
        },
        {
            title: "fa fa-angle-up",
            searchTerms: ["arrow"]
        },
        {
            title: "fa fa-apple",
            searchTerms: ["food", "fruit", "mac", "osx"]
        },
        {
            title: "fa fa-archive",
            searchTerms: ["box", "package", "storage"]
        },
        {
            title: "fa fa-arrow-circle-down",
            searchTerms: ["download"]
        },
        {
            title: "fa fa-arrow-circle-left",
            searchTerms: ["back", "previous"]
        },
        {
            title: "fa fa-arrow-circle-right",
            searchTerms: ["forward", "next"]
        },
        {
            title: "fa fa-arrow-circle-up",
            searchTerms: []
        },
        {
            title: "fa fa-arrow-down",
            searchTerms: ["download"]
        },
        {
            title: "fa fa-arrow-left",
            searchTerms: ["back", "previous"]
        },
        {
            title: "fa fa-arrow-right",
            searchTerms: ["forward", "next"]
        },
        {
            title: "fa fa-arrow-up",
            searchTerms: []
        },
        {
            title: "fa fa-arrows-alt",
            searchTerms: ["arrow", "arrows", "bigger", "enlarge", "expand", "fullscreen", "move", "position", "reorder", "resize"]
        },
        {
            title: "fa fa-assistive-listening-systems",
            searchTerms: []
        },
        {
            title: "fa fa-asterisk",
            searchTerms: ["details"]
        },
        {
            title: "fa fa-at",
            searchTerms: ["e-mail", "email"]
        },
        {
            title: "fa fa-audio-description",
            searchTerms: []
        },
        {
            title: "fa fa-backward",
            searchTerms: ["previous", "rewind"]
        },
        {
            title: "fa fa-balance-scale",
            searchTerms: ["balanced", "justice", "legal", "measure", "weight"]
        },
        {
            title: "fa fa-ban",
            searchTerms: ["abort", "ban", "block", "cancel", "delete", "hide", "prohibit", "remove", "stop", "trash"]
        },
        {
            title: "fa fa-barcode",
            searchTerms: ["scan"]
        },
        {
            title: "fa fa-bars",
            searchTerms: ["checklist", "drag", "hamburger", "list", "menu", "nav", "navigation", "ol", "reorder", "settings", "todo", "ul"]
        },
        {
            title: "fa fa-battery-empty",
            searchTerms: ["power", "status"]
        },
        {
            title: "fa fa-battery-full",
            searchTerms: ["power", "status"]
        },
        {
            title: "fa fa-battery-half",
            searchTerms: ["power", "status"]
        },
        {
            title: "fa fa-battery-quarter",
            searchTerms: ["power", "status"]
        },
        {
            title: "fa fa-battery-three-quarters",
            searchTerms: ["power", "status"]
        },
        {
            title: "fa fa-bed",
            searchTerms: ["lodging", "sleep", "travel"]
        },
        {
            title: "fa fa-beer",
            searchTerms: ["alcohol", "bar", "beverage", "drink", "liquor", "mug", "stein"]
        },
        {
            title: "fa fa-behance",
            searchTerms: []
        },
        {
            title: "fa fa-behance-square",
            searchTerms: []
        },
        {
            title: "fa fa-bell",
            searchTerms: ["alert", "notification", "reminder"]
        },
        {
            title: "fa fa-bell",
            searchTerms: ["alert", "notification", "reminder"]
        },
        {
            title: "fa fa-bell-slash",
            searchTerms: []
        },
        {
            title: "fa fa-bell-slash",
            searchTerms: []
        },
        {
            title: "fa fa-bicycle",
            searchTerms: ["bike", "gears", "transportation", "vehicle"]
        },
        {
            title: "fa fa-binoculars",
            searchTerms: []
        },
        {
            title: "fa fa-birthday-cake",
            searchTerms: []
        },
        {
            title: "fa fa-bitbucket",
            searchTerms: ["bitbucket-square", "git"]
        },
        {
            title: "fa fa-bitcoin",
            searchTerms: []
        },
        {
            title: "fa fa-black-tie",
            searchTerms: []
        },
        {
            title: "fa fa-blind",
            searchTerms: []
        },
        {
            title: "fa fa-bluetooth",
            searchTerms: []
        },
        {
            title: "fa fa-bluetooth-b",
            searchTerms: []
        },
        {
            title: "fa fa-bold",
            searchTerms: []
        },
        {
            title: "fa fa-bolt",
            searchTerms: ["electricity", "lightning", "weather", "zap"]
        },
        {
            title: "fa fa-bomb",
            searchTerms: []
        },
        {
            title: "fa fa-book",
            searchTerms: ["documentation", "read"]
        },
        {
            title: "fa fa-bookmark",
            searchTerms: ["save"]
        },
        {
            title: "fa fa-bookmark",
            searchTerms: ["save"]
        },
        {
            title: "fa fa-braille",
            searchTerms: []
        },
        {
            title: "fa fa-briefcase",
            searchTerms: ["bag", "business", "luggage", "office", "work"]
        },
        {
            title: "fa fa-btc",
            searchTerms: []
        },
        {
            title: "fa fa-bug",
            searchTerms: ["insect", "report"]
        },
        {
            title: "fa fa-building",
            searchTerms: ["apartment", "business", "company", "office", "work"]
        },
        {
            title: "fa fa-building",
            searchTerms: ["apartment", "business", "company", "office", "work"]
        },
        {
            title: "fa fa-bullhorn",
            searchTerms: ["announcement", "broadcast", "louder", "megaphone", "share"]
        },
        {
            title: "fa fa-bullseye",
            searchTerms: ["target"]
        },
        {
            title: "fa fa-bus",
            searchTerms: ["machine", "public transportation", "transportation", "vehicle"]
        },
        {
            title: "fa fa-buysellads",
            searchTerms: []
        },
        {
            title: "fa fa-calculator",
            searchTerms: []
        },
        {
            title: "fa fa-calendar",
            searchTerms: ["calendar-o", "date", "event", "schedule", "time", "when"]
        },
        {
            title: "fa fa-calendar",
            searchTerms: ["calendar-o", "date", "event", "schedule", "time", "when"]
        },
        {
            title: "fa fa-camera",
            searchTerms: ["photo", "picture", "record"]
        },
        {
            title: "fa fa-camera-retro",
            searchTerms: ["photo", "picture", "record"]
        },
        {
            title: "fa fa-car",
            searchTerms: ["machine", "transportation", "vehicle"]
        },
        {
            title: "fa fa-caret-down",
            searchTerms: ["arrow", "dropdown", "menu", "more", "triangle down"]
        },
        {
            title: "fa fa-caret-left",
            searchTerms: ["arrow", "back", "previous", "triangle left"]
        },
        {
            title: "fa fa-caret-right",
            searchTerms: ["arrow", "forward", "next", "triangle right"]
        },
        {
            title: "fa fa-caret-up",
            searchTerms: ["arrow", "triangle up"]
        },
        {
            title: "fa fa-cart-arrow-down",
            searchTerms: ["shopping"]
        },
        {
            title: "fa fa-cart-plus",
            searchTerms: ["add", "create", "new", "positive", "shopping"]
        },
        {
            title: "fa fa-cc-amex",
            searchTerms: ["amex"]
        },
        {
            title: "fa fa-cc-diners-club",
            searchTerms: []
        },
        {
            title: "fa fa-cc-discover",
            searchTerms: []
        },
        {
            title: "fa fa-cc-jcb",
            searchTerms: []
        },
        {
            title: "fa fa-cc-mastercard",
            searchTerms: []
        },
        {
            title: "fa fa-cc-paypal",
            searchTerms: []
        },
        {
            title: "fa fa-cc-stripe",
            searchTerms: []
        },
        {
            title: "fa fa-cc-visa",
            searchTerms: []
        },
        {
            title: "fa fa-certificate",
            searchTerms: ["badge", "star"]
        },
        {
            title: "fa fa-check",
            searchTerms: ["accept", "agree", "checkmark", "confirm", "correct", "done", "notice", "notification", "notify", "ok", "select", "success", "tick", "todo", "yes"]
        },
        {
            title: "fa fa-check-circle",
            searchTerms: ["accept", "agree", "confirm", "correct", "done", "ok", "select", "success", "todo", "yes"]
        },
        {
            title: "fa fa-check-circle",
            searchTerms: ["accept", "agree", "confirm", "correct", "done", "ok", "select", "success", "todo", "yes"]
        },
        {
            title: "fa fa-check-square",
            searchTerms: ["accept", "agree", "checkmark", "confirm", "correct", "done", "ok", "select", "success", "todo", "yes"]
        },
        {
            title: "fa fa-check-square",
            searchTerms: ["accept", "agree", "checkmark", "confirm", "correct", "done", "ok", "select", "success", "todo", "yes"]
        },
        {
            title: "fa fa-chevron-circle-down",
            searchTerms: ["arrow", "dropdown", "menu", "more"]
        },
        {
            title: "fa fa-chevron-circle-left",
            searchTerms: ["arrow", "back", "previous"]
        },
        {
            title: "fa fa-chevron-circle-right",
            searchTerms: ["arrow", "forward", "next"]
        },
        {
            title: "fa fa-chevron-circle-up",
            searchTerms: ["arrow"]
        },
        {
            title: "fa fa-chevron-down",
            searchTerms: []
        },
        {
            title: "fa fa-chevron-left",
            searchTerms: ["back", "bracket", "previous"]
        },
        {
            title: "fa fa-chevron-right",
            searchTerms: ["bracket", "forward", "next"]
        },
        {
            title: "fa fa-chevron-up",
            searchTerms: []
        },
        {
            title: "fa fa-child",
            searchTerms: []
        },
        {
            title: "fa fa-chrome",
            searchTerms: ["browser"]
        },
        {
            title: "fa fa-circle",
            searchTerms: ["circle-thin", "dot", "notification"]
        },
        {
            title: "fa fa-circle",
            searchTerms: ["circle-thin", "dot", "notification"]
        },
        {
            title: "fa fa-clipboard",
            searchTerms: ["paste"]
        },
        {
            title: "fa fa-clipboard",
            searchTerms: ["paste"]
        },
        {
            title: "fa fa-clone",
            searchTerms: ["copy", "duplicate"]
        },
        {
            title: "fa fa-clone",
            searchTerms: ["copy", "duplicate"]
        },
        {
            title: "fa fa-cloud",
            searchTerms: ["save"]
        },
        {
            title: "fa fa-code",
            searchTerms: ["brackets", "html"]
        },
        {
            title: "fa fa-codepen",
            searchTerms: []
        },
        {
            title: "fa fa-codiepie",
            searchTerms: []
        },
        {
            title: "fa fa-coffee",
            searchTerms: ["beverage", "breakfat", "cafe", "drink", "fall", "morning", "mug", "seasonal", "tea"]
        },
        {
            title: "fa fa-cog",
            searchTerms: ["settings"]
        },
        {
            title: "fa fa-cogs",
            searchTerms: ["gears", "settings"]
        },
        {
            title: "fa fa-columns",
            searchTerms: ["dashboard", "panes", "split"]
        },
        {
            title: "fa fa-comment",
            searchTerms: ["bubble", "chat", "conversation", "feedback", "message", "note", "notification", "sms", "speech", "texting"]
        },
        {
            title: "fa fa-comments",
            searchTerms: ["bubble", "chat", "conversation", "feedback", "message", "note", "notification", "sms", "speech", "texting"]
        },
        {
            title: "fa fa-compass",
            searchTerms: ["directory", "location", "menu", "safai"]
        },
        {
            title: "fa fa-compress",
            searchTerms: ["collapse", "combine", "contract", "merge", "smaller"]
        },
        {
            title: "fa fa-connectdevelop",
            searchTerms: []
        },
        {
            title: "fa fa-contao",
            searchTerms: []
        },
        {
            title: "fa fa-copy",
            searchTerms: ["clone", "duplicate", "file", "files-o"]
        },
        {
            title: "fa fa-copyright",
            searchTerms: []
        },
        {
            title: "fa fa-creative-commons",
            searchTerms: []
        },
        {
            title: "fa fa-credit-card",
            searchTerms: ["buy", "checkout", "credit-card-alt", "debit", "money", "payment", "purchase"]
        },
        {
            title: "fa fa-crop",
            searchTerms: ["design"]
        },
        {
            title: "fa fa-crosshairs",
            searchTerms: ["gpd", "picker", "position"]
        },
        {
            title: "fa fa-css3",
            searchTerms: ["code"]
        },
        {
            title: "fa fa-cube",
            searchTerms: ["package"]
        },
        {
            title: "fa fa-cubes",
            searchTerms: ["packages"]
        },
        {
            title: "fa fa-cut",
            searchTerms: ["scissors"]
        },
        {
            title: "fa fa-dashcube",
            searchTerms: []
        },
        {
            title: "fa fa-database",
            searchTerms: []
        },
        {
            title: "fa fa-deaf",
            searchTerms: []
        },
        {
            title: "fa fa-delicious",
            searchTerms: []
        },
        {
            title: "fa fa-desktop",
            searchTerms: ["computer", "cpu", "demo", "desktop", "device", "machine", "monitor", "pc", "screen"]
        },
        {
            title: "fa fa-deviantart",
            searchTerms: []
        },
        {
            title: "fa fa-digg",
            searchTerms: []
        },
        {
            title: "fa fa-download",
            searchTerms: ["import"]
        },
        {
            title: "fa fa-dribbble",
            searchTerms: []
        },
        {
            title: "fa fa-dropbox",
            searchTerms: []
        },
        {
            title: "fa fa-drupal",
            searchTerms: []
        },
        {
            title: "fa fa-edge",
            searchTerms: ["browser", "ie"]
        },
        {
            title: "fa fa-edit",
            searchTerms: ["edit", "pen", "pencil", "update", "write"]
        },
        {
            title: "fa fa-eject",
            searchTerms: []
        },
        {
            title: "fa fa-ellipsis-h",
            searchTerms: ["dots", "drag", "kebab", "list", "menu", "nav", "navigation", "ol", "reorder", "settings", "ul"]
        },
        {
            title: "fa fa-ellipsis-v",
            searchTerms: ["dots", "drag", "kebab", "list", "menu", "nav", "navigation", "ol", "reorder", "settings", "ul"]
        },
        {
            title: "fa fa-empire",
            searchTerms: []
        },
        {
            title: "fa fa-envelope",
            searchTerms: ["e-mail", "email", "letter", "mail", "message", "notification", "support"]
        },
        {
            title: "fa fa-envelope-square",
            searchTerms: ["e-mail", "email", "letter", "mail", "message", "notification", "support"]
        },
        {
            title: "fa fa-envira",
            searchTerms: ["leaf"]
        },
        {
            title: "fa fa-eraser",
            searchTerms: ["delete", "remove"]
        },
        {
            title: "fa fa-exclamation",
            searchTerms: ["alert", "danger", "error", "important", "notice", "notification", "notify", "problem", "warning"]
        },
        {
            title: "fa fa-exclamation-circle",
            searchTerms: ["alert", "danger", "error", "important", "notice", "notification", "notify", "problem", "warning"]
        },
        {
            title: "fa fa-exclamation-triangle",
            searchTerms: ["alert", "danger", "error", "important", "notice", "notification", "notify", "problem", "warning"]
        },
        {
            title: "fa fa-expand",
            searchTerms: ["bigger", "enlarge", "resize"]
        },
        {
            title: "fa fa-expeditedssl",
            searchTerms: []
        },
        {
            title: "fa fa-eye",
            searchTerms: ["optic", "see", "seen", "show", "sight", "views", "visible"]
        },
        {
            title: "fa fa-eye-slash",
            searchTerms: ["blind", "hide", "show", "toggle", "unseen", "views", "visible", "visiblity"]
        },
        {
            title: "fa fa-facebook",
            searchTerms: ["facebook-official", "social network"]
        },
        {
            title: "fa fa-facebook-f",
            searchTerms: ["facebook"]
        },
        {
            title: "fa fa-facebook-square",
            searchTerms: ["social network"]
        },
        {
            title: "fa fa-fat-backward",
            searchTerms: ["beginning", "first", "previous", "rewind", "start"]
        },
        {
            title: "fa fa-fat-forward",
            searchTerms: ["end", "last", "next"]
        },
        {
            title: "fa fa-fax",
            searchTerms: []
        },
        {
            title: "fa fa-female",
            searchTerms: ["human", "person", "profile", "user", "woman"]
        },
        {
            title: "fa fa-fighter-jet",
            searchTerms: ["airplane", "fat", "fly", "goose", "maverick", "plane", "quick", "top gun", "transportation", "travel"]
        },
        {
            title: "fa fa-file",
            searchTerms: ["document", "new", "page", "pdf", "resume"]
        },
        {
            title: "fa fa-film",
            searchTerms: ["movie"]
        },
        {
            title: "fa fa-filter",
            searchTerms: ["funnel", "options"]
        },
        {
            title: "fa fa-fire",
            searchTerms: ["caliente", "flame", "heat", "hot", "popular"]
        },
        {
            title: "fa fa-fire-extinguisher",
            searchTerms: []
        },
        {
            title: "fa fa-firefox",
            searchTerms: ["browser"]
        },
        {
            title: "fa fa-first-order",
            searchTerms: []
        },
        {
            title: "fa fa-flag",
            searchTerms: ["country", "notice", "notification", "notify", "pole", "report", "symbol"]
        },
        {
            title: "fa fa-flag-checkered",
            searchTerms: ["notice", "notification", "notify", "pole", "racing", "report", "symbol"]
        },
        {
            title: "fa fa-flask",
            searchTerms: ["beaker", "experimental", "labs", "science"]
        },
        {
            title: "fa fa-flickr",
            searchTerms: []
        },
        {
            title: "fa fa-folder",
            searchTerms: []
        },
        {
            title: "fa fa-folder-open",
            searchTerms: []
        },
        {
            title: "fa fa-font",
            searchTerms: ["text"]
        },
        {
            title: "fa fa-font-awesome",
            searchTerms: ["meanpath"]
        },
        {
            title: "fa fa-fonticons",
            searchTerms: []
        },
        {
            title: "fa fa-fort-awesome",
            searchTerms: ["castle"]
        },
        {
            title: "fa fa-forumbee",
            searchTerms: []
        },
        {
            title: "fa fa-forward",
            searchTerms: ["forward", "next"]
        },
        {
            title: "fa fa-foursquare",
            searchTerms: []
        },
        {
            title: "fa fa-gamepad",
            searchTerms: ["controller"]
        },
        {
            title: "fa fa-gavel",
            searchTerms: ["hammer", "judge", "lawyer", "opinion"]
        },
        {
            title: "fa fa-genderless",
            searchTerms: []
        },
        {
            title: "fa fa-get-pocket",
            searchTerms: []
        },
        {
            title: "fa fa-gg",
            searchTerms: []
        },
        {
            title: "fa fa-gg-circle",
            searchTerms: []
        },
        {
            title: "fa fa-gift",
            searchTerms: ["generosity", "giving", "party", "present", "wrapped"]
        },
        {
            title: "fa fa-git",
            searchTerms: []
        },
        {
            title: "fa fa-git-square",
            searchTerms: []
        },
        {
            title: "fa fa-github",
            searchTerms: ["octocat"]
        },
        {
            title: "fa fa-github-alt",
            searchTerms: ["octocat"]
        },
        {
            title: "fa fa-github-square",
            searchTerms: ["octocat"]
        },
        {
            title: "fa fa-gitlab",
            searchTerms: ["Axosoft"]
        },
        {
            title: "fa fa-glide",
            searchTerms: []
        },
        {
            title: "fa fa-glide-g",
            searchTerms: []
        },
        {
            title: "fa fa-globe",
            searchTerms: ["all", "coordinates", "country", "earth", "global", "gps", "language", "localize", "location", "map", "online", "place", "planet", "translate", "travel", "world"]
        },
        {
            title: "fa fa-google",
            searchTerms: []
        },
        {
            title: "fa fa-google-plus",
            searchTerms: ["google-plus-circle", "google-plus-official"]
        },
        {
            title: "fa fa-google-plus-square",
            searchTerms: ["social network"]
        },
        {
            title: "fa fa-google-wallet",
            searchTerms: []
        },
        {
            title: "fa fa-graduation-cap",
            searchTerms: ["learning", "school", "student"]
        },
        {
            title: "fa fa-gratipay",
            searchTerms: ["favorite", "heart", "like", "love"]
        },
        {
            title: "fa fa-h-square",
            searchTerms: ["hospital", "hotel"]
        },
        {
            title: "fa fa-hacker-news",
            searchTerms: []
        },
        {
            title: "fa fa-hashtag",
            searchTerms: []
        },
        {
            title: "fa fa-headphones",
            searchTerms: ["audio", "listen", "music", "sound", "speaker"]
        },
        {
            title: "fa fa-heart",
            searchTerms: ["favorite", "like", "love"]
        },
        {
            title: "fa fa-heartbeat",
            searchTerms: ["ekg", "lifeline", "vital signs"]
        },
        {
            title: "fa fa-history",
            searchTerms: []
        },
        {
            title: "fa fa-home",
            searchTerms: ["house", "main"]
        },
        {
            title: "fa fa-hotel",
            searchTerms: ["building", "lodging"]
        },
        {
            title: "fa fa-hourglass",
            searchTerms: []
        },
        {
            title: "fa fa-hourglass-end",
            searchTerms: []
        },
        {
            title: "fa fa-hourglass-half",
            searchTerms: []
        },
        {
            title: "fa fa-hourglass-start",
            searchTerms: []
        },
        {
            title: "fa fa-houzz",
            searchTerms: []
        },
        {
            title: "fa fa-html5",
            searchTerms: []
        },
        {
            title: "fa fa-i-cursor",
            searchTerms: []
        },
        {
            title: "fa fa-image",
            searchTerms: ["album", "photo", "picture"]
        },
        {
            title: "fa fa-inbox",
            searchTerms: []
        },
        {
            title: "fa fa-indent",
            searchTerms: []
        },
        {
            title: "fa fa-industry",
            searchTerms: ["factory", "manufacturing"]
        },
        {
            title: "fa fa-info",
            searchTerms: ["details", "help", "information", "more"]
        },
        {
            title: "fa fa-info-circle",
            searchTerms: ["details", "help", "information", "more"]
        },
        {
            title: "fa fa-instagram",
            searchTerms: []
        },
        {
            title: "fa fa-internet-explorer",
            searchTerms: ["browser", "ie"]
        },
        {
            title: "fa fa-ioxhost",
            searchTerms: []
        },
        {
            title: "fa fa-italic",
            searchTerms: ["italics"]
        },
        {
            title: "fa fa-joomla",
            searchTerms: []
        },
        {
            title: "fa fa-jsfiddle",
            searchTerms: []
        },
        {
            title: "fa fa-key",
            searchTerms: ["password", "unlock"]
        },
        {
            title: "fa fa-language",
            searchTerms: ["dialect", "idiom", "localize", "speech", "translate", "vernacular"]
        },
        {
            title: "fa fa-laptop",
            searchTerms: ["computer", "cpu", "dell", "demo", "device", "dude you're getting", "mac", "macbook", "machine", "pc"]
        },
        {
            title: "fa fa-lastfm",
            searchTerms: []
        },
        {
            title: "fa fa-lastfm-square",
            searchTerms: []
        },
        {
            title: "fa fa-leaf",
            searchTerms: ["eco", "flora", "nature", "plant"]
        },
        {
            title: "fa fa-leanpub",
            searchTerms: []
        },
        {
            title: "fa fa-life-ring",
            searchTerms: ["support"]
        },
        {
            title: "fa fa-link",
            searchTerms: ["chain"]
        },
        {
            title: "fa fa-linkedin",
            searchTerms: ["linkedin-square"]
        },
        {
            title: "fa fa-linux",
            searchTerms: ["tux"]
        },
        {
            title: "fa fa-list",
            searchTerms: ["checklist", "completed", "done", "finished", "ol", "todo", "ul"]
        },
        {
            title: "fa fa-list-alt",
            searchTerms: ["checklist", "completed", "done", "finished", "ol", "todo", "ul"]
        },
        {
            title: "fa fa-list-alt",
            searchTerms: ["checklist", "completed", "done", "finished", "ol", "todo", "ul"]
        },
        {
            title: "fa fa-list-ol",
            searchTerms: ["checklist", "list", "numbers", "ol", "todo", "ul"]
        },
        {
            title: "fa fa-list-ul",
            searchTerms: ["checklist", "list", "ol", "todo", "ul"]
        },
        {
            title: "fa fa-location-arrow",
            searchTerms: ["address", "coordinates", "gps", "location", "map", "place", "where"]
        },
        {
            title: "fa fa-lock",
            searchTerms: ["admin", "protect", "security"]
        },
        {
            title: "fa fa-low-vision",
            searchTerms: []
        },
        {
            title: "fa fa-magic",
            searchTerms: ["autocomplete", "automatic", "mage", "magic", "spell", "witch", "wizard"]
        },
        {
            title: "fa fa-magnet",
            searchTerms: []
        },
        {
            title: "fa fa-male",
            searchTerms: ["human", "man", "person", "profile", "user"]
        },
        {
            title: "fa fa-map",
            searchTerms: ["coordinates", "location", "paper", "place", "travel"]
        },
        {
            title: "fa fa-map-marker",
            searchTerms: ["address", "coordinates", "gps", "localize", "location", "map", "pin", "place", "position", "travel", "where"]
        },
        {
            title: "fa fa-map-pin",
            searchTerms: ["address", "coordinates", "gps", "localize", "location", "map", "marker", "place", "position", "travel", "where"]
        },
        {
            title: "fa fa-map-signs",
            searchTerms: []
        },
        {
            title: "fa fa-mars",
            searchTerms: ["male"]
        },
        {
            title: "fa fa-mars-double",
            searchTerms: []
        },
        {
            title: "fa fa-mars-stroke",
            searchTerms: []
        },
        {
            title: "fa fa-mars-stroke-h",
            searchTerms: []
        },
        {
            title: "fa fa-mars-stroke-v",
            searchTerms: []
        },
        {
            title: "fa fa-maxcdn",
            searchTerms: []
        },
        {
            title: "fa fa-medium",
            searchTerms: []
        },
        {
            title: "fa fa-medkit",
            searchTerms: ["first aid", "firstaid", "health", "help", "support"]
        },
        {
            title: "fa fa-mercury",
            searchTerms: ["transgender"]
        },
        {
            title: "fa fa-microphone",
            searchTerms: ["record", "sound", "voice"]
        },
        {
            title: "fa fa-microphone-slash",
            searchTerms: ["disable", "mute", "record", "sound", "voice"]
        },
        {
            title: "fa fa-minus",
            searchTerms: ["collapse", "delete", "hide", "minify", "negative", "remove", "trash"]
        },
        {
            title: "fa fa-minus-circle",
            searchTerms: ["delete", "hide", "negative", "remove", "trash"]
        },
        {
            title: "fa fa-minus-square",
            searchTerms: ["collapse", "delete", "hide", "minify", "negative", "remove", "trash"]
        },
        {
            title: "fa fa-mixcloud",
            searchTerms: []
        },
        {
            title: "fa fa-mobile",
            searchTerms: ["apple", "call", "cell phone", "cellphone", "device", "iphone", "number", "screen", "telephone", "text"]
        },
        {
            title: "fa fa-modx",
            searchTerms: []
        },
        {
            title: "fa fa-motorcycle",
            searchTerms: ["bike", "machine", "transportation", "vehicle"]
        },
        {
            title: "fa fa-mouse-pointer",
            searchTerms: ["select"]
        },
        {
            title: "fa fa-music",
            searchTerms: ["note", "sound"]
        },
        {
            title: "fa fa-neuter",
            searchTerms: []
        },
        {
            title: "fa fa-object-group",
            searchTerms: ["design"]
        },
        {
            title: "fa fa-object-group",
            searchTerms: ["design"]
        },
        {
            title: "fa fa-object-ungroup",
            searchTerms: ["design"]
        },
        {
            title: "fa fa-odnoklassniki",
            searchTerms: []
        },
        {
            title: "fa fa-odnoklassniki-square",
            searchTerms: []
        },
        {
            title: "fa fa-opencart",
            searchTerms: []
        },
        {
            title: "fa fa-openid",
            searchTerms: []
        },
        {
            title: "fa fa-opera",
            searchTerms: []
        },
        {
            title: "fa fa-optin-monster",
            searchTerms: []
        },
        {
            title: "fa fa-outdent",
            searchTerms: []
        },
        {
            title: "fa fa-pagelines",
            searchTerms: ["eco", "flora", "leaf", "leaves", "nature", "plant", "tree"]
        },
        {
            title: "fa fa-paint-brush",
            searchTerms: []
        },
        {
            title: "fa fa-paper-plane",
            searchTerms: []
        },
        {
            title: "fa fa-paperclip",
            searchTerms: ["attachment"]
        },
        {
            title: "fa fa-paragraph",
            searchTerms: []
        },
        {
            title: "fa fa-paste",
            searchTerms: ["clipboard", "copy"]
        },
        {
            title: "fa fa-pause",
            searchTerms: ["wait"]
        },
        {
            title: "fa fa-pause-circle",
            searchTerms: []
        },
        {
            title: "fa fa-paw",
            searchTerms: ["animal", "pet"]
        },
        {
            title: "fa fa-paypal",
            searchTerms: []
        },
        {
            title: "fa fa-percent",
            searchTerms: []
        },
        {
            title: "fa fa-phone",
            searchTerms: ["call", "earphone", "number", "support", "telephone", "voice"]
        },
        {
            title: "fa fa-phone-square",
            searchTerms: ["call", "number", "support", "telephone", "voice"]
        },
        {
            title: "fa fa-pied-piper",
            searchTerms: []
        },
        {
            title: "fa fa-pied-piper-alt",
            searchTerms: []
        },
        {
            title: "fa fa-pied-piper-pp",
            searchTerms: []
        },
        {
            title: "fa fa-pinterest",
            searchTerms: []
        },
        {
            title: "fa fa-pinterest-p",
            searchTerms: []
        },
        {
            title: "fa fa-pinterest-square",
            searchTerms: []
        },
        {
            title: "fa fa-plane",
            searchTerms: ["airplane", "destination", "fly", "location", "mode", "travel", "trip"]
        },
        {
            title: "fa fa-play",
            searchTerms: ["music", "playing", "sound", "start"]
        },
        {
            title: "fa fa-play-circle",
            searchTerms: ["playing", "start"]
        },
        {
            title: "fa fa-plug",
            searchTerms: ["connect", "online", "power"]
        },
        {
            title: "fa fa-plus",
            searchTerms: ["add", "create", "expand", "new", "positive"]
        },
        {
            title: "fa fa-plus-circle",
            searchTerms: ["add", "create", "expand", "new", "positive"]
        },
        {
            title: "fa fa-plus-square",
            searchTerms: ["add", "create", "expand", "new", "positive"]
        },
        {
            title: "fa fa-power-off",
            searchTerms: ["on", "reboot", "restart"]
        },
        {
            title: "fa fa-print",
            searchTerms: []
        },
        {
            title: "fa fa-product-hunt",
            searchTerms: []
        },
        {
            title: "fa fa-puzzle-piece",
            searchTerms: ["add-on", "addon", "section"]
        },
        {
            title: "fa fa-qq",
            searchTerms: []
        },
        {
            title: "fa fa-qrcode",
            searchTerms: ["scan"]
        },
        {
            title: "fa fa-question",
            searchTerms: ["help", "information", "support", "unknown"]
        },
        {
            title: "fa fa-question-circle",
            searchTerms: ["help", "information", "support", "unknown"]
        },
        {
            title: "fa fa-quote-left",
            searchTerms: []
        },
        {
            title: "fa fa-quote-right",
            searchTerms: []
        },
        {
            title: "fa fa-random",
            searchTerms: ["shuffle", "sort"]
        },
        {
            title: "fa fa-rebel",
            searchTerms: []
        },
        {
            title: "fa fa-recycle",
            searchTerms: []
        },
        {
            title: "fa fa-reddit",
            searchTerms: []
        },
        {
            title: "fa fa-reddit-alien",
            searchTerms: []
        },
        {
            title: "fa fa-reddit-square",
            searchTerms: []
        },
        {
            title: "fa fa-registered",
            searchTerms: []
        },
        {
            title: "fa fa-renren",
            searchTerms: []
        },
        {
            title: "fa fa-reply",
            searchTerms: []
        },
        {
            title: "fa fa-reply-all",
            searchTerms: []
        },
        {
            title: "fa fa-retweet",
            searchTerms: ["refresh", "reload", "share", "swap"]
        },
        {
            title: "fa fa-road",
            searchTerms: ["street"]
        },
        {
            title: "fa fa-rocket",
            searchTerms: ["app"]
        },
        {
            title: "fa fa-rss",
            searchTerms: ["blog"]
        },
        {
            title: "fa fa-rss-square",
            searchTerms: ["blog", "feed"]
        },
        {
            title: "fa fa-safai",
            searchTerms: ["browser"]
        },
        {
            title: "fa fa-save",
            searchTerms: ["floppy", "floppy-o"]
        },
        {
            title: "fa fa-scribd",
            searchTerms: []
        },
        {
            title: "fa fa-search",
            searchTerms: ["bigger", "enlarge", "magnify", "preview", "zoom"]
        },
        {
            title: "fa fa-search-minus",
            searchTerms: ["minify", "negative", "smaller", "zoom", "zoom out"]
        },
        {
            title: "fa fa-search-plus",
            searchTerms: ["bigger", "enlarge", "magnify", "positive", "zoom", "zoom in"]
        },
        {
            title: "fa fa-sellsy",
            searchTerms: []
        },
        {
            title: "fa fa-server",
            searchTerms: ["cpu"]
        },
        {
            title: "fa fa-share",
            searchTerms: []
        },
        {
            title: "fa fa-share-alt",
            searchTerms: []
        },
        {
            title: "fa fa-share-alt-square",
            searchTerms: []
        },
        {
            title: "fa fa-share-square",
            searchTerms: ["send", "social"]
        },
        {
            title: "fa fa-ship",
            searchTerms: ["boat", "sea"]
        },
        {
            title: "fa fa-shirtsinbulk",
            searchTerms: []
        },
        {
            title: "fa fa-shopping-bag",
            searchTerms: []
        },
        {
            title: "fa fa-shopping-basket",
            searchTerms: []
        },
        {
            title: "fa fa-shopping-cart",
            searchTerms: ["buy", "checkout", "payment", "purchase"]
        },
        {
            title: "fa fa-sign-language",
            searchTerms: []
        },
        {
            title: "fa fa-signal",
            searchTerms: ["bars", "graph", "online", "status"]
        },
        {
            title: "fa fa-simplybuilt",
            searchTerms: []
        },
        {
            title: "fa fa-sitemap",
            searchTerms: ["directory", "hierarchy", "ia", "information architecture", "organization"]
        },
        {
            title: "fa fa-skyatlas",
            searchTerms: []
        },
        {
            title: "fa fa-skype",
            searchTerms: []
        },
        {
            title: "fa fa-slack",
            searchTerms: ["anchor", "hash", "hashtag"]
        },
        {
            title: "fa fa-slideshare",
            searchTerms: []
        },
        {
            title: "fa fa-snapchat",
            searchTerms: []
        },
        {
            title: "fa fa-snapchat-ghost",
            searchTerms: []
        },
        {
            title: "fa fa-snapchat-square",
            searchTerms: []
        },
        {
            title: "fa fa-sort",
            searchTerms: ["order"]
        },
        {
            title: "fa fa-sort-down",
            searchTerms: ["arrow", "descending", "sort-desc"]
        },
        {
            title: "fa fa-sort-up",
            searchTerms: ["arrow", "ascending", "sort-asc"]
        },
        {
            title: "fa fa-soundcloud",
            searchTerms: []
        },
        {
            title: "fa fa-space-shuttle",
            searchTerms: ["astronaut", "machine", "nasa", "rocket", "transportation"]
        },
        {
            title: "fa fa-spinner",
            searchTerms: ["loading", "progress"]
        },
        {
            title: "fa fa-spotify",
            searchTerms: []
        },
        {
            title: "fa fa-square",
            searchTerms: ["block", "box"]
        },
        {
            title: "fa fa-stack-exchange",
            searchTerms: []
        },
        {
            title: "fa fa-stack-overflow",
            searchTerms: []
        },
        {
            title: "fa fa-star",
            searchTerms: ["achievement", "award", "favorite", "important", "night", "rating", "score"]
        },
        {
            title: "fa fa-star-half",
            searchTerms: ["achievement", "award", "rating", "score", "star-half-empty", "star-half-full"]
        },
        {
            title: "fa fa-steam-square",
            searchTerms: []
        },
        {
            title: "fa fa-step-backward",
            searchTerms: ["beginning", "first", "previous", "rewind", "start"]
        },
        {
            title: "fa fa-step-forward",
            searchTerms: ["end", "last", "next"]
        },
        {
            title: "fa fa-stethoscope",
            searchTerms: []
        },
        {
            title: "fa fa-sticky-note",
            searchTerms: []
        },
        {
            title: "fa fa-sticky-note",
            searchTerms: []
        },
        {
            title: "fa fa-stop",
            searchTerms: ["block", "box", "square"]
        },
        {
            title: "fa fa-stop-circle",
            searchTerms: []
        },
        {
            title: "fa fa-street-view",
            searchTerms: ["map"]
        },
        {
            title: "fa fa-strikethrough",
            searchTerms: []
        },
        {
            title: "fa fa-stumbleupon",
            searchTerms: []
        },
        {
            title: "fa fa-stumbleupon-circle",
            searchTerms: []
        },
        {
            title: "fa fa-subscript",
            searchTerms: []
        },
        {
            title: "fa fa-subway",
            searchTerms: ["machine", "railway", "train", "transportation", "vehicle"]
        },
        {
            title: "fa fa-suitcase",
            searchTerms: ["baggage", "luggage", "move", "suitcase", "travel", "trip"]
        },
        {
            title: "fa fa-superscript",
            searchTerms: ["exponential"]
        },
        {
            title: "fa fa-table",
            searchTerms: ["data", "excel", "spreadsheet"]
        },
        {
            title: "fa fa-tablet",
            searchTerms: ["apple", "device", "ipad", "kindle", "screen"]
        },
        {
            title: "fa fa-tag",
            searchTerms: ["label"]
        },
        {
            title: "fa fa-tags",
            searchTerms: ["labels"]
        },
        {
            title: "fa fa-tasks",
            searchTerms: ["downloading", "downloads", "loading", "progress", "settings"]
        },
        {
            title: "fa fa-taxi",
            searchTerms: ["cab", "cabbie", "car", "car service", "lyft", "machine", "transportation", "uber", "vehicle"]
        },
        {
            title: "fa fa-tencent-weibo",
            searchTerms: []
        },
        {
            title: "fa fa-terminal",
            searchTerms: ["code", "command", "console", "prompt"]
        },
        {
            title: "fa fa-text-height",
            searchTerms: []
        },
        {
            title: "fa fa-text-width",
            searchTerms: []
        },
        {
            title: "fa fa-th",
            searchTerms: ["blocks", "boxes", "grid", "squares"]
        },
        {
            title: "fa fa-th-large",
            searchTerms: ["blocks", "boxes", "grid", "squares"]
        },
        {
            title: "fa fa-th-list",
            searchTerms: ["checklist", "completed", "done", "finished", "ol", "todo", "ul"]
        },
        {
            title: "fa fa-themeisle",
            searchTerms: []
        },
        {
            title: "fa fa-thumbs-down",
            searchTerms: ["disagree", "disapprove", "dislike", "hand", "thumbs-o-down"]
        },
        {
            title: "fa fa-thumbs-up",
            searchTerms: ["agree", "approve", "favorite", "hand", "like", "ok", "okay", "success", "thumbs-o-up", "yes", "you got it dude"]
        },
        {
            title: "fa fa-times",
            searchTerms: ["close", "cross", "error", "exit", "incorrect", "notice", "notification", "notify", "problem", "wrong", "x"]
        },
        {
            title: "fa fa-times-circle",
            searchTerms: ["close", "cross", "exit", "incorrect", "notice", "notification", "notify", "problem", "wrong", "x"]
        },
        {
            title: "fa fa-tint",
            searchTerms: ["drop", "droplet", "raindrop", "waterdrop"]
        },
        {
            title: "fa fa-toggle-off",
            searchTerms: ["switch"]
        },
        {
            title: "fa fa-toggle-on",
            searchTerms: ["switch"]
        },
        {
            title: "fa fa-trademark",
            searchTerms: []
        },
        {
            title: "fa fa-train",
            searchTerms: ["bullet", "locomotive", "railway"]
        },
        {
            title: "fa fa-transgender",
            searchTerms: ["intersex"]
        },
        {
            title: "fa fa-transgender-alt",
            searchTerms: []
        },
        {
            title: "fa fa-trash",
            searchTerms: ["delete", "garbage", "hide", "remove"]
        },
        {
            title: "fa fa-tree",
            searchTerms: ["bark", "fall", "flora", "forest", "nature", "plant", "seasonal"]
        },
        {
            title: "fa fa-trello",
            searchTerms: []
        },
        {
            title: "fa fa-tripadvisor",
            searchTerms: []
        },
        {
            title: "fa fa-trophy",
            searchTerms: ["achievement", "award", "cup", "game", "winner"]
        },
        {
            title: "fa fa-truck",
            searchTerms: ["delivery", "shipping"]
        },
        {
            title: "fa fa-tty",
            searchTerms: []
        },
        {
            title: "fa fa-tumblr",
            searchTerms: []
        },
        {
            title: "fa fa-tumblr-square",
            searchTerms: []
        },
        {
            title: "fa fa-tv",
            searchTerms: ["computer", "display", "monitor", "television"]
        },
        {
            title: "fa fa-twitch",
            searchTerms: []
        },
        {
            title: "fa fa-twitter",
            searchTerms: ["social network", "tweet"]
        },
        {
            title: "fa fa-twitter-square",
            searchTerms: ["social network", "tweet"]
        },
        {
            title: "fa fa-umbrella",
            searchTerms: ["protection", "rain"]
        },
        {
            title: "fa fa-underline",
            searchTerms: []
        },
        {
            title: "fa fa-undo",
            searchTerms: ["back", "control z", "exchange", "oops", "return", "rotate", "swap"]
        },
        {
            title: "fa fa-universal-access",
            searchTerms: []
        },
        {
            title: "fa fa-university",
            searchTerms: ["bank", "institution"]
        },
        {
            title: "fa fa-unlink",
            searchTerms: ["chain", "chain-broken", "remove"]
        },
        {
            title: "fa fa-unlock",
            searchTerms: ["admin", "lock", "password", "protect"]
        },
        {
            title: "fa fa-unlock-alt",
            searchTerms: ["admin", "lock", "password", "protect"]
        },
        {
            title: "fa fa-upload",
            searchTerms: ["export", "publish"]
        },
        {
            title: "fa fa-usb",
            searchTerms: []
        },
        {
            title: "fa fa-user",
            searchTerms: ["account", "avatar", "head", "human", "man", "person", "profile"]
        },
        {
            title: "fa fa-user-md",
            searchTerms: ["doctor", "job", "medical", "nurse", "occupation", "profile"]
        },
        {
            title: "fa fa-user-plus",
            searchTerms: ["positive", "sign up", "signup"]
        },
        {
            title: "fa fa-user-secret",
            searchTerms: ["clothing", "coat", "hat", "incognito", "privacy", "spy", "whisper"]
        },
        {
            title: "fa fa-user-times",
            searchTerms: ["archive", "delete", "remove", "x"]
        },
        {
            title: "fa fa-users",
            searchTerms: ["people", "persons", "profiles"]
        },
        {
            title: "fa fa-venus",
            searchTerms: ["female"]
        },
        {
            title: "fa fa-venus-double",
            searchTerms: []
        },
        {
            title: "fa fa-venus-mars",
            searchTerms: []
        },
        {
            title: "fa fa-viacoin",
            searchTerms: []
        },
        {
            title: "fa fa-viadeo",
            searchTerms: []
        },
        {
            title: "fa fa-viadeo-square",
            searchTerms: []
        },
        {
            title: "fa fa-vimeo",
            searchTerms: []
        },
        {
            title: "fa fa-vimeo-square",
            searchTerms: []
        },
        {
            title: "fa fa-vine",
            searchTerms: []
        },
        {
            title: "fa fa-vk",
            searchTerms: []
        },
        {
            title: "fa fa-volume-down",
            searchTerms: ["audio", "lower", "music", "quieter", "sound", "speaker"]
        },
        {
            title: "fa fa-volume-off",
            searchTerms: ["audio", "music", "mute", "sound"]
        },
        {
            title: "fa fa-volume-up",
            searchTerms: ["audio", "higher", "louder", "music", "sound", "speaker"]
        },
        {
            title: "fa fa-weibo",
            searchTerms: []
        },
        {
            title: "fa fa-weixin",
            searchTerms: []
        },
        {
            title: "fa fa-whatsapp",
            searchTerms: []
        },
        {
            title: "fa fa-wheelchair",
            searchTerms: ["handicap", "person"]
        },
        {
            title: "fa fa-wifi",
            searchTerms: []
        },
        {
            title: "fa fa-wikipedia-w",
            searchTerms: []
        },
        {
            title: "fa fa-windows",
            searchTerms: ["microsoft"]
        },
        {
            title: "fa fa-wordpress",
            searchTerms: []
        },
        {
            title: "fa fa-wpbeginner",
            searchTerms: []
        },
        {
            title: "fa fa-wpforms",
            searchTerms: []
        },
        {
            title: "fa fa-wrench",
            searchTerms: ["fix", "settings", "spanner", "tool", "update"]
        },
        {
            title: "fa fa-xing",
            searchTerms: []
        },
        {
            title: "fa fa-xing-square",
            searchTerms: []
        },
        {
            title: "fa fa-y-combinator",
            searchTerms: []
        },
        {
            title: "fa fa-yahoo",
            searchTerms: []
        },
        {
            title: "fa fa-yelp",
            searchTerms: []
        },
        {
            title: "fa fa-yoast",
            searchTerms: []
        },
        {
            title: "fa fa-youtube",
            searchTerms: ["film", "video", "youtube-play", "youtube-square"]
        },
        {
            title: "fa fa-youtube-square",
            searchTerms: []
        },
        {
            title: "fa fa-wheelchair-alt",
            searchTerms: []
        },
        {
            title: "fa fa-google-plus-official",
            searchTerms: []
        },
        {
            title: "fa fa-question-circle-o",
            searchTerms: []
        },
        {
            title: "fa fa-volume-control-phone",
            searchTerms: []
        }]
    })
}),
function(e) {
    IPLAT.Menu = function(t, i) {
        var a, i = e.extend({},
        IPLATUI.Config.EFMenu, IPLATUI.EFMenu, i),
        n = "object" == typeof t ? t: e(t),
        o = i.serviceName,
        r = i.methodName,
        s = i.blockName,
        l = i.flat2Map || IPLAT.flat2MapNoItemsEmptyArray;
        IPLAT.isEiInfo(i.eiInfo) && (a = i.eiInfo),
        _.isFunction(i.eiInfo) && (a = i.eiInfo.call(null)),
        a || (a = new EiInfo),
        i.dataSource ? n.kendoMenu(i) : EiCommunicator.send(o, r, a, {
            onSuccess: function(e) {
                var t, a, o = e.getBlock(s);
                o && (a = o.getMappedRows() || [], t = l.call(null, a, i.idField, i.parentId, i.rootLevel, i.fieldName), i.dataSource = t, n.kendoMenu(i))
            },
            onFail: function(e) {}
        })
    }
} (jQuery),
function(e) {
    function t(e, t) {
        for (var i = [], a = e.split(","), n = t.split(","), o = Math.min(a.length, n.length), r = 0; r < o; r++) {
            var s = {};
            s.field = a[r],
            s.title = n[r],
            s.enable = !1,
            s.width = 120,
            i.push(s)
        }
        return i
    }
    function i(t) {
        var i = e("#" + t);
        return 0 === i.length ? e("<div id='" + t + "' data-new='true' />").appendTo(document.body) : i
    }
    function a(t) {
        var i = t.container,
        a = t.textElement,
        n = t.dynamic || {},
        r = t.resizable || !1,
        s = t.title,
        l = e(window).scrollTop(),
        c = (e(window).height(), !(n.draggable === !1)),
        d = t.height || n.height,
        u = t.width || n.width,
        f = n.left,
        p = n.top,
        v = {
            resizable: r,
            isMaximized: !1,
            autoFocus: !1,
            draggable: c,
            title: s,
            height: d,
            width: u
        };
        v[h] = !0,
        i.data("kendoWindow") || i.kendoWindow(v);
        var T = i.data("kendoWindow"),
        k = T.element.parent();
        k.css({
            bottom: "",
            top: ""
        });
        var b = IPLAT.Util.getElementScreenPosition(a);
        e.isNumeric(p) ? k.css("top", p + "px") : IPLAT.isString(p) ? k.css("top", parseFloat(p) + "%") : (p = b.top + b.height + l + m, k.css("top", p + "px")),
        e.isNumeric(f) ? k.css("left", f + "px") : IPLAT.isString(f) ? k.css("left", parseFloat(f) + "%") : (f = a.offset().left - g, f + k.width() > document.body.clientWidth && (f = document.body.clientWidth - k.width() - 30), k.css("left", f + "px")),
        o.inject(T),
        k.unbind("click.iplat"),
        k.on("click.iplat",
        function() {
            o.innerClick()
        }),
        e(document).on("click", ".k-animation-container",
        function(e) {
            o.innerClick()
        });
        var I = a.closest(".k-grid"),
        _ = I.data("kendoGrid");
        return _ && _ instanceof kendo.ui.Grid && (IPLAT.Util.forbidKendoGridScroll(_), IPLAT.Util.preventWindowShake(), T.bind("close",
        function(e) {
            IPLAT.Util.restartKendoGridScroll(_),
            IPLAT.Util.restoreWindow()
        })),
        T
    }
    function n(t) {
        var i, n, o, r = this,
        s = t.gridBlockId,
        d = t.ename,
        u = t.cname,
        f = t.copy;
        IPLAT.EFGrid[s].columns.push({
            field: d,
            title: u,
            enable: !0,
            readonly: t.readonly,
            hidden: !1,
            locked: !1,
            copy: f,
            iplatSort: t.iplatSort || !1,
            editType: "popup",
            popupOptions: t,
            attributes: t.dynamic,
            editor: function(s, d) {
                var u = t,
                f = s.closest(".k-grid").data("kendoGrid"),
                p = f.columns[f.cellIndex(s)],
                h = p.attributes || {},
                m = e('<span class="k-widget k-dropdown i-popup-input k-header"><span class="k-dropdown-wrap"><input type="text" name="' + d.field + '" id="' + d.field + '" class="popupColumn" value="" ' + (h.required === !0 ? "required": "") + ' ><span class="k-select"><span id="icon_' + d.field + '" class="i-icon i-popup-grid"></span></span></span></span>');
                h.required === !0 && s.addClass("i-invalid-cell"),
                m.appendTo(s),
                n = p[c],
                IPLAT.Util.hasEvent(r, c + l) || r.bind(c + l, n),
                u.textElement = s,
                i = u.container,
                e("#icon_" + d.field).mousedown(function() {
                    r.trigger(c + l, {
                        container: i
                    }) || (a(u), o = u.container.data("kendoWindow"), o.open())
                })
            }
        })
    }
    var o, r = kendo.Class,
    s = kendo.ui.Widget,
    l = ".IPLAT",
    c = "init",
    d = "preventPopup",
    u = "query",
    f = "loadComplete",
    p = "backFill",
    h = "iplat_static_window",
    m = 2,
    g = 7,
    v = e.extend,
    T = e.isFunction,
    k = _.isString,
    b = _.each,
    I = IPLAT.Transport.TransportFactory,
    y = IPLAT.Transport.RestfulTransport,
    w = IPLAT.EiConstant,
    E = IPLAT.EiCommunicator,
    A = IPLAT.EiInfo,
    C = IPLAT.EiBlock,
    P = (e("#efSecurityToken").val(),
    function() {
        var t = this;
        t.type = 0,
        e(document).on("click",
        function() {
            t.destroy()
        })
    });
    P.prototype.destroy = function() {
        this.type -= 1,
        this.type < 0 && (this.type = 0, this.window && (this.window.close(), this.window = null))
    },
    P.prototype.inject = function(e) {
        this.window && this.window.close(),
        this.window = e,
        this.type = 1
    },
    P.prototype.innerClick = function() {
        this.type = 1
    },
    o = new P,
    kendo.ui.Window.fn._activate = function(e) {
        return function() {
            var t = this,
            i = t.options;
            i[h] && i[h] === !0 ? kendo.resize(this.element.children()) : e.call(this)
        }
    } (kendo.ui.Window.fn._activate);
    var x = y.extend({
        _buildModels: function(t, i) {
            var a = this,
            n = a.options,
            o = n.resultId,
            r = n.gridId,
            s = a.postEiInfo.getBlock(o);
            IPLAT.isEiBlock(s) || (s = new C(o), a.postEiInfo.addBlock(s));
            var l = e("#" + r).data("kendoGrid"),
            c = IPLAT.isKendoGrid(l) ? l.options.showCount: n.showCount;
            t.pageSize >= 0 && t.skip >= 0 && (s.set(w.LIMIT, t.pageSize), s.set(w.OFFSET, t.skip)),
            c && s.set(w.SHOW_COUNT, "true")
        }
    }),
    S = x.extend({
        _buildURL: function() {
            var e = this,
            t = e.options.url,
            i = e.serviceName;
            return {
                read: {
                    type: "POST",
                    dataType: "json",
                    contentType: IPLAT.AJAX.ContentType.JSON,
                    url: t + "/" + i
                }
            }
        },
        _buildFilter: function(e) {
            var t, i = this,
            a = i.options.resultId,
            n = i.options.condition,
            o = i.options.queryInfo;
            i._postQuery() || (IPLAT.isUndefined(o) ? i.postEiInfo.set("condition", n) : (t = T(o) ? o() : o, IPLAT.isEiInfo(t) ? i.postEiInfo = t: i.postEiInfo = new A), i.postEiInfo.set("codesetCode", a), IPLAT.Util.filterAdapter(e.filter, i.postEiInfo))
        }
    }),
    L = x.extend({
        _buildURL: function() {
            var e = this,
            t = e.options.url,
            i = e.serviceName,
            a = e.methodName;
            return {
                read: {
                    type: "POST",
                    dataType: "json",
                    contentType: IPLAT.AJAX.ContentType.JSON,
                    url: t + "/" + i + "/" + a
                }
            }
        },
        _buildFilter: function(e) {
            var t, i = this,
            a = i.options,
            n = a.queryInfo;
            i._postQuery() || (t = T(n) ? n() : n, IPLAT.isEiInfo(t) ? i.postEiInfo = t: i.postEiInfo = new A, IPLAT.Util.filterAdapter(e.filter, i.postEiInfo))
        }
    });
    I.registerTransport("DYNAMIC_GRID_TRANSPORT", S),
    I.registerTransport("SERVICE_GRID_TRANSPORT", L);
    var F = r.extend({
        init: function(e) {
            var t = this;
            t.options = e,
            t.resultId = e.resultId,
            t.textField = e.textField,
            t.valueField = e.valueField,
            t.textElement = e.textElement,
            t.valueElement = e.valueElement,
            t.title = e.title,
            t.columnEnames = e.columnEnames.replace(" ", ""),
            t.backFillColumnIds = e.backFillColumnIds.replace(" ", ""),
            t.backFillFieldIds = e.backFillFieldIds.replace(" ", "")
        },
        _prepareEiInfo: function(e) {
            var t = this,
            i = t._buildTransport(e),
            a = i.parameterMap({
                pageSize: 10,
                skip: 0,
                filters: {
                    filters: [],
                    logic: "and"
                }
            },
            "read");
            return E.send("", "", new A(""), null, {
                url: i.read.url,
                data: a
            })
        },
        _buildGridOptions: function() {
            var e = this,
            i = e.options,
            a = i.field,
            n = i.resultId,
            o = a + "-" + n,
            r = i.url,
            s = i.columnEnames.replace(" ", ""),
            l = i.columnCnames.replace(" ", "");
            IPLAT.EFGrid[o] = {
                columns: t(s, l),
                readonlyColumns: []
            },
            i.blockId = n;
            var c = C.buildByNames(n, s, l),
            d = IPLAT.Util.boolConfigHelper(i.dynamic && i.dynamic.filterPopupGrid, IPLATUI.Config.EFPopup.filterPopupGrid),
            u = IPLAT.Util.boolConfigHelper(i.dynamic && i.dynamic.showCount, IPLATUI.Config.EFPopup.showCount);
            i.showCount = u;
            var f = {
                blockId: n,
                tagId: o,
                checkMode: "single, row",
                configId: o,
                autoDraw: "no",
                gridId: i.gridId,
                url: r,
                eiInfo: i.eiInfo,
                eiBlock: c,
                enable: !1,
                showCount: u,
                pagerPosition: "top",
                toolbarConfig: {
                    hidden: !0
                },
                exportGrid: !1
            };
            return d && (f = v(f, {
                filterable: {
                    extra: !1
                }
            })),
            f
        },
        buildPopupGrid: function() {
            var e, t, i = this,
            a = i.options;
            return e = i._buildTransport(a),
            t = i._buildGridOptions(a),
            t = v(!0, t, {
                dataSource: {
                    transport: e
                }
            }),
            IPLAT.isEiInfo(a.eiInfo) ? IPLAT.Grid(t) : {
                gridOptions: t,
                eiPromise: i._prepareEiInfo(a)
            }
        }
    }),
    N = F.extend({
        _buildTransport: function(e) {
            return I.getTransport("DYNAMIC_GRID_TRANSPORT", e)
        }
    }),
    O = F.extend({
        _buildTransport: function(e) {
            return I.getTransport("SERVICE_GRID_TRANSPORT", e)
        }
    }),
    M = function() {
        var e = {
            DYNAMICGRID: N,
            SERVICEGRID: O
        };
        return {
            getPopupGrid: function(t, i) {
                var a = e[t],
                n = new a(i);
                return n.buildPopupGrid()
            },
            registerPopupGrid: function(t, i) {
                return i instanceof F && (e[t] = i),
                M
            }
        }
    } (),
    R = s.extend({
        init: function(e) {
            var t = this;
            t.options = e,
            t._events = {},
            t.field = e.field,
            t.resultId = e.resultId,
            t.textField = e.textField,
            t.valueField = e.valueField,
            t.textElement = e.textElement,
            t.valueElement = e.valueElement,
            t.title = e.title,
            t.columnEnames = e.columnEnames.replace(" ", ""),
            t.backFillColumnIds = e.backFillColumnIds.replace(" ", ""),
            t.backFillFieldIds = e.backFillFieldIds.replace(" ", ""),
            t._prepare()
        },
        _prepare: function() {
            var e, t, i = this,
            a = i.options.popupType || "",
            n = a.split("_");
            e = n[0],
            t = n[1],
            i.options.gridType = e,
            i.options.targetType = t
        },
        _buildContainer: function() {
            var e = this,
            t = e.resultId,
            a = e.field,
            n = "ef_popup_" + a + "_" + t.replace(/\./g, "_");
            return e.options.gridId = n.replace("ef_popup", "ef_grid"),
            e.options.container = i(n),
            e.options.container
        },
        _buildGrid: function(e) {
            return M.getPopupGrid(e.gridType, e)
        },
        _buildSaveButton: function(t) {
            var i, a = this,
            n = a.popupGrid,
            o = e(t);
            return i = e("<div class='k-window-save k-popup-save'><button class='i-btn-lg i-btn-wide'>" + IPLAT.CONSTANTS.BACKFILL_BUTTON_NAME + "</button></div>").on("click", "button",
            function() {
                a._backFillFields(n)
            }),
            o.append(i)
        },
        _backFillFields: function(t) {
            var i, a, n = this,
            r = n.backFillFieldIds,
            s = n.backFillColumnIds,
            c = n.textElement,
            d = n.valueElement,
            u = n.options.backFillGrid,
            f = n.textField,
            h = n.valueField,
            m = 0,
            g = 0,
            v = n.options.copy,
            T = t.getSelectedRows()[0];
            if (v) {
                if (n.trigger(p + l, {
                    grid: t,
                    model: T,
                    copy: !0
                })) return void o.destroy();
                if (T) {
                    i = r.split(","),
                    a = s.split(",");
                    var k = u.getCheckedRows();
                    for (m = 0, g = a.length; m < g; m++) b(k,
                    function(e) {
                        u.setCellValue(e, i[m], T[a[m]])
                    })
                }
            } else {
                if (n.trigger(p + l, {
                    grid: t,
                    model: T
                })) return void o.destroy();
                if (T) {
                    for (i = r.split(","), a = s.split(","), m = 0, g = a.length; m < g; m++) e("#" + i[m]).val(T[a[m]]).blur();
                    c.val(T[f]).blur(),
                    d.val(T[h]).blur()
                }
            }
            o.destroy()
        },
        closeWindow: function() {
            o.destroy()
        },
        _buildKendoWindow: function() {
            var e = this;
            return a(e.options)
        },
        _preCreate: function() {
            var t, i, a = this,
            n = a.options,
            o = n.columnEnames,
            r = n.containerId;
            if (a._buildContainer(), n.queryInfo = arguments[0], t = a.options.gridId, i = a.options.container, isAvailable(r)) {
                var s = e("#" + r);
                i.prepend(s),
                s.css("display", "")
            }
            if (i.data("new") || n.queryRefresh || n.refresh) {
                if (isAvailable(r) ? (i.children().each(function() {
                    var t = e(this);
                    t.attr("id") !== r && t.remove()
                }), i.append('<div class="i-region-divider"></div>')) : i.empty(), a.trigger(c + l, {
                    container: i
                })) return d;
                var u = e("<div id='" + t + "' class='i-popup-grid'/>").appendTo(i),
                f = a._buildGrid(n);
                if (n.width = n.width ? n.width: 150 * o.length, e.isPlainObject(f)) {
                    var p = f.gridOptions;
                    f.eiPromise.then(function(e) {
                        var t = A.parseJSONObject(e);
                        p.eiInfo = t,
                        p.autoBind = !1,
                        n.eiInfo = t;
                        var o = IPLAT.Grid(p);
                        a._afterGridBuild(o, u, i)
                    },
                    function() {
                        NotificationUtil("获取表格[" + n.resultId + "]数据失败", "error")
                    })
                } else a._afterGridBuild(f, u, i);
                i.data("new", !1)
            } else if (a.trigger(c + l, {
                container: i
            })) return d
        },
        _afterGridBuild: function(t, i, a) {
            var n = this,
            r = n.options;
            n.popupGrid = t,
            i.on("dblclick", "tr",
            function() {
                var a = e(this);
                i.find("tr").removeClass("i-state-selected k-state-selected"),
                a.addClass("k-state-selected"),
                n._backFillFields(t),
                o.destroy()
            });
            var s = function() {
                return ! 1
            };
            t.element && t.element.find(".k-list-container").off("click", s).on("click", s),
            r.save && n._buildSaveButton(a),
            n.trigger(f + l, {
                grid: t
            })
        },
        buildPopupWindow: function() {
            var e, t = this;
            t._preCreate() !== d && (e = t._buildKendoWindow(), options.center ? e.open().center() : e.open())
        }
    }),
    B = R.extend({
        buildPopupWindow: function() {
            var t, i, a, n, o, r = this,
            s = r.options || {},
            h = s.field,
            m = IPLATUI.EFPopupInput[h];
            e.isPlainObject(m) ? (t = m[c], i = m[u], a = m[f], n = m[p]) : s.copy === !0 && (i = s[u], n = s[p], t = s[c]),
            i ? e.isPlainObject(m) && IPLAT.isBoolean(m.queryRefresh) ? s.queryRefresh = m.queryRefresh: e.isPlainObject(s.dynamic) && IPLAT.isBoolean(s.dynamic.queryRefresh) ? s.queryRefresh = s.dynamic.queryRefresh: s.queryRefresh = !0 : s.queryRefresh = !1,
            IPLAT.Util.hasEvent(r, c + l) || r.bind(c + l, t),
            IPLAT.Util.hasEvent(r, f + l) || r.bind(f + l, a),
            IPLAT.Util.hasEvent(r, p + l) || r.bind(p + l, n),
            r._preCreate(i) !== d && (r._buildKendoWindow(), o = s.container.data("kendoWindow"), s.center ? o.open().center() : o.open())
        }
    }),
    U = s.extend({
        init: function(e) {
            var t = this;
            t.options = e,
            t._events = {},
            t.textField = e.textField,
            t.valueField = e.valueField,
            t.textElement = e.textElement,
            t.valueElement = e.valueElement,
            t.title = e.title
        },
        _buildContainer: function() {
            var e = this,
            t = e.options,
            a = t.containerId;
            return t.container = i(a),
            t.container
        },
        _buildTree: function(t) {
            var i = t.treeId,
            a = t.treeWidth,
            n = t.treeHeight,
            o = t.checkedBackFill,
            r = t.container,
            s = e("<div id='" + i + "' />").appendTo(r);
            return s.width(a),
            s.height(n),
            o && (t.checkboxes = {
                checkChildren: !0
            }),
            IPLAT.TreeView(t),
            s.data("kendoTreeView")
        },
        _afterTreeBuild: function(e) {
            var t = this,
            i = t.options,
            a = i.checkedBackFill;
            t.popupTree = e,
            a === !0 ? t._buildSaveButton(e) : e.bind("select",
            function(a) {
                var n = this.dataItem(a.node);
                return t.trigger(p + l, {
                    tree: e,
                    node: n
                }) ? void o.destroy() : (i.copy === !0 ? t._selectBackFill(n, "copy") : t._selectBackFill(n), o.type = 0, void o.destroy())
            }),
            t.trigger(f + l, {
                tree: e
            })
        },
        _buildSaveButton: function(t) {
            var i, a = this,
            n = a.options.container;
            return i = e("<div class='k-window-save k-popup-save'><button class='i-btn-lg i-btn-wide'>" + IPLAT.CONSTANTS.BACKFILL_BUTTON_NAME + "</button></div>").on("click", "button",
            function() {
                a._backFillFields(t)
            }),
            n.append(i)
        },
        _backFillFields: function(e) {
            var t = this,
            i = t.options,
            a = i.copy,
            n = e.getCheckedNodes(),
            r = e.dataItem(e.select());
            if (a) {
                if (t.trigger(p + l, {
                    tree: e,
                    node: i.checkedBackFill ? n: r,
                    copy: !0
                })) return void o.destroy();
                i.checkedBackFill ? n.length > 0 && t._checkedBackFill(n, "copy") : e.select().length > 0 && t._selectBackFill(r, "copy")
            } else {
                if (t.trigger(p + l, {
                    tree: e,
                    node: i.checkedBackFill ? n: r
                })) return void o.destroy();
                i.checkedBackFill ? n.length > 0 && t._checkedBackFill(n) : e.select().length > 0 && t._selectBackFill(r)
            }
            o.destroy()
        },
        _checkedBackFill: function(t) {
            var i = this,
            a = i.options,
            n = a.field,
            o = a.popupType,
            r = a.textElement,
            s = a.backFillGrid,
            l = i.popupTree;
            if (a.onlyLeaf && (t = _.filter(t,
            function(e) {
                return ! e[a.hasChildren]
            })), t.length > 0) {
                var c = _.pluck(t, a.textField).toString(),
                d = _.pluck(t, a.valueField).toString();
                if ("TREE_INPUT" === o)"copy" === arguments[1] ? b(s.getCheckedRows(),
                function(e) {
                    s.setCellValue(e, n, c),
                    e[n] = d
                }) : (e("#" + a.popupId).val(c), e("#" + a.cellId).val(d));
                else if ("TREE_COLUMN" === o) {
                    r.data("text", c),
                    r.html(c);
                    var u = r.closest("div.k-grid").data("kendoGrid"),
                    f = u.dataItem(r.parent());
                    f[n] !== d && (r.addClass("k-dirty-cell").prepend("<span class='k-dirty'>"), f.dirty = !0),
                    f[n] = d
                }
                l.reload(a.root[a.valueField])
            }
        },
        _selectBackFill: function(t) {
            var i = this,
            a = i.options,
            n = a.field,
            o = a.popupType,
            r = a.textElement,
            s = a.backFillGrid,
            l = a.onlyLeaf,
            c = !t[a.hasChildren],
            d = t[a.textField],
            u = t[a.valueField];
            if ("TREE_INPUT" === o)(l && c || !l) && ("copy" === arguments[1] ? b(s.getCheckedRows(),
            function(e) {
                s.setCellValue(e, n, d),
                e[n] = u
            }) : (e("#" + a.popupId).val(d), e("#" + a.cellId).val(u)));
            else if ("TREE_COLUMN" === o && (l && c || !l)) {
                r.data("text", d),
                r.html(d);
                var f = r.closest("div.k-grid").data("kendoGrid"),
                p = f.dataItem(r.parent());
                p[n] !== u && (r.addClass("k-dirty-cell").prepend("<span class='k-dirty'>"), p.dirty = !0),
                p[n] = u
            }
        },
        closeWindow: function() {
            o.destroy()
        },
        _buildKendoWindow: function() {
            var e = this;
            return a(e.options)
        },
        _preCreate: function() {
            var e, t = this,
            i = t.options;
            if (t._buildContainer(), e = t.options.container, i.query = arguments[0], e.data("new")) {
                if (t.trigger(c + l, {
                    container: e
                })) return d;
                var a = t._buildTree(i);
                t._afterTreeBuild(a, e),
                e.data("new", !1)
            }
        }
    }),
    D = U.extend({
        buildPopupWindow: function() {
            var t, i, a, n, o, r = this,
            s = r.options || {},
            h = s.cellId,
            m = IPLATUI.EFTreeInput[h];
            e.isPlainObject(m) ? (t = m[c], i = m[u], a = m[f], n = m[p], v(!0, s, m)) : s.copy === !0 && (i = s[u], n = s[p], t = s[c]),
            i ? e.isPlainObject(m) && IPLAT.isBoolean(m.queryRefresh) ? s.queryRefresh = m.queryRefresh: e.isPlainObject(s.dynamic) && IPLAT.isBoolean(s.dynamic.queryRefresh) ? s.queryRefresh = s.dynamic.queryRefresh: s.queryRefresh = !0 : s.queryRefresh = !1,
            IPLAT.Util.hasEvent(r, c + l) || r.bind(c + l, t),
            IPLAT.Util.hasEvent(r, f + l) || r.bind(f + l, a),
            IPLAT.Util.hasEvent(r, p + l) || r.bind(p + l, n),
            r._preCreate(i) !== d && (o = r._buildKendoWindow(), o.open())
        }
    }),
    G = U.extend({
        _buildContainer: function() {
            var e = this,
            t = e.options,
            a = t.field,
            n = t.resultId,
            o = "ef_tree_column_" + a + "_" + n;
            return e.options.container = i(o),
            e.options.container
        },
        _backFillFields: function(e) {
            var t = this,
            i = t.options,
            a = e.getCheckedNodes(),
            n = e.dataItem(e.select());
            return t.trigger(p + l, {
                tree: e,
                node: i.checkedBackFill ? a: n
            }) ? void o.destroy() : (i.checkedBackFill ? a.length > 0 && t._checkedBackFill(a) : e.select().length > 0 && t._selectBackFill(n), void o.destroy())
        },
        buildPopupWindow: function() {
            var t, i, a, n, o = this,
            r = o.options,
            s = o.options.gridBlockId,
            u = r.ename,
            f = r.cname,
            h = r.copy,
            m = r.readonly,
            g = r.dynamic;
            IPLAT.EFGrid[s].columns.push({
                field: u,
                title: f,
                copy: h,
                readonly: m,
                required: g.required || !1,
                enable: !g.disabled,
                hidden: g.hidden || !1,
                locked: g.locked || !1,
                iplatSort: r.iplatSort || !1,
                editType: "tree",
                treeOptions: r,
                attributes: g,
                editor: function(r, s) {
                    var u, f = o.options,
                    h = r.closest(".k-grid").data("kendoGrid"),
                    m = h.columns[h.cellIndex(r)],
                    g = m.attributes || {},
                    v = e('<span class="k-widget k-dropdown i-popup-input k-header"><span class="k-dropdown-wrap i-state-readonly"><input type="text" readonly="readonly" name="' + s.field + '" id="' + s.field + '" class="popupColumn" value="" ' + (g.required === !0 ? "required": "") + ' ><span class="k-select"><span id="icon_' + s.field + '" class="i-icon i-popup-tree"></span></span></span></span>');
                    g.required === !0 && r.addClass("i-invalid-cell"),
                    v.appendTo(r),
                    u = m.query,
                    u ? IPLAT.isBoolean(m.queryRefresh) ? f.queryRefresh = m.queryRefresh: e.isPlainObject(f.dynamic) && IPLAT.isBoolean(f.dynamic.queryRefresh) ? f.queryRefresh = f.dynamic.queryRefresh: f.queryRefresh = !0 : f.queryRefresh = !1,
                    a = m[c],
                    n = m[p],
                    IPLAT.Util.hasEvent(o, c + l) || o.bind(c + l, a),
                    IPLAT.Util.hasEvent(o, p + l) || o.bind(p + l, n),
                    o.options.textElement = r,
                    t = o.options.container,
                    e("#icon_" + s.field).mousedown(function() {
                        o._preCreate(u) !== d && (i = o._buildKendoWindow(), i.open())
                    })
                }
            })
        }
    }),
    q = R.extend({
        _buildContainer: function() {
            var e = this,
            t = e.resultId,
            a = e.field,
            n = "ef_popup_column_" + a + "_" + t.replace(/\./g, "_");
            return e.options.gridId = n.replace("ef_popup", "ef_grid"),
            e.options.container = i(n),
            e.options.container
        },
        _backFillFields: function(e) {
            var t = this,
            i = t.backFillFieldIds,
            a = t.backFillColumnIds,
            n = t.options.textElement,
            r = (t.valueElement, t.textField),
            s = t.valueField,
            c = e.getSelectedRows()[0];
            if (t.trigger(p + l, {
                grid: e,
                model: c
            })) return void o.destroy();
            if (c) {
                for (var d = i.split(","), u = a.split(","), f = n.closest("div.k-grid").data("kendoGrid"), h = n.parent().index(), m = f.dataItem(n.parent()), g = 0, v = u.length; g < v; g++) f.setCellValue(h, d[g], c[u[g]]);
                n.data("text", c[r]),
                n.html(c[r]),
                m[t.options.ename] !== c[s] && (n.addClass("k-dirty-cell").prepend("<span class='k-dirty'>"), m.dirty = !0),
                m[t.options.ename] = c[s]
            }
            o.destroy()
        },
        buildPopupWindow: function() {
            var t, i, a, n, o = this,
            r = o.options.gridBlockId,
            s = o.options.ename,
            c = o.options.cname,
            d = o.options.copy;
            IPLAT.EFGrid[r].columns.push({
                field: s,
                title: c,
                enable: !0,
                readonly: o.options.readonly,
                hidden: !1,
                locked: !1,
                copy: d,
                iplatSort: o.options.iplatSort || !1,
                editType: "popup",
                popupOptions: o.options,
                attributes: o.options.dynamic,
                editor: function(r, s) {
                    var c, d = o.options,
                    u = r.closest(".k-grid").data("kendoGrid"),
                    f = u.columns[u.cellIndex(r)],
                    h = f.attributes || {},
                    m = e('<span class="k-widget k-dropdown i-popup-input k-header"><span class="k-dropdown-wrap"><input type="text" name="' + s.field + '" id="' + s.field + '" class="popupColumn" value="" ' + (h.required === !0 ? "required": "") + ' ><span class="k-select"><span id="icon_' + s.field + '" class="i-icon i-popup-grid"></span></span></span></span>');
                    h.required === !0 && r.addClass("i-invalid-cell"),
                    m.appendTo(r),
                    c = f.query,
                    T(c) && (c = e.proxy(c, u, r, s)),
                    c ? IPLAT.isBoolean(f.queryRefresh) ? d.queryRefresh = f.queryRefresh: e.isPlainObject(d.dynamic) && IPLAT.isBoolean(d.dynamic.queryRefresh) ? d.queryRefresh = d.dynamic.queryRefresh: d.queryRefresh = !0 : d.queryRefresh = !1,
                    n = f[p],
                    o.unbind(p + l),
                    o.bind(p + l, n);
                    r[0].parentElement.rowIndex;
                    o.options.textElement = r,
                    t = o.options.container,
                    e("#icon_" + s.field).mousedown(function() {
                        o._preCreate(c),
                        o._buildKendoWindow(),
                        i = d.container.data("kendoWindow"),
                        a = f.init,
                        T(a) && a.call(i, o.options, f),
                        i.open()
                    })
                }
            })
        }
    }),
    W = function() {
        var e = {
            POPUP_INPUT: B,
            TREE_INPUT: D,
            POPUP_COLUMN: q,
            TREE_COLUMN: G
        };
        return {
            getPopupWindow: function(t, i) {
                var a = e[t],
                n = new a(i);
                return n.buildPopupWindow()
            },
            registerPopupWindow: function(t, i) {
                return i instanceof R && (e[t] = i),
                W
            }
        }
    } (),
    V = function(t) {
        var i = e(t),
        a = i.prop("disabled");
        return a === !0
    },
    j = s.extend({
        init: function(t) {
            if (!V(t.textElement)) {
                var o = i(t.containerId),
                r = this,
                s = t.popupType;
                if (r.options = t, r._events = {},
                IPLAT.isUndefined(s)) {
                    var d, u = t.field,
                    f = IPLATUI.EFPopupInput[u];
                    e.isPlainObject(f) && (d = f[c]),
                    IPLAT.Util.hasEvent(r, c + l) || r.bind(c + l, d),
                    r.trigger(c + l, {
                        container: o
                    }) || (t.center ? a(v({
                        container: o
                    },
                    t)).open().center() : a(v({
                        container: o
                    },
                    t)).open())
                } else n.call(r, v({
                    container: o
                },
                t))
            }
        }
    }),
    H = function() {
        return {
            popupContainer: function(e) {
                new j(e)
            },
            popupTextArea: function(t) {
                var i, a = t.title || "",
                n = t.content || "",
                o = t.pele,
                r = "textarea_" + (new Date).getTime(),
                s = t.callback,
                l = '<div class="textarea" ><textarea class="k-textarea" cols="36" rows="6" style="resize: none; width: 245px;">' + (n || "") + '</textarea><div class="footer"><span class="i-btn-lg i-btn-wide backFill btn-align-right">' + IPLAT.CONSTANTS.BACKFILL_BUTTON_NAME + "</span></div></div>";
                if (o) {
                    this.popupContainer({
                        containerId: r,
                        textElement: o,
                        title: a,
                        height: 147,
                        width: 300,
                        resizable: !0,
                        resize: function(e) {
                            d(e)
                        }
                    });
                    var c = function(e) {
                        var t = e.sender.element.find("textarea"),
                        i = e.height,
                        a = e.width;
                        t.css("height", i - 50),
                        t.css("width", a - 55)
                    },
                    d = kendo.throttle(c, 200);
                    i = e("#" + r),
                    i.html(l),
                    i.on("click", ".backFill",
                    function(t) {
                        var a = e(this).closest(".textarea").find("textarea").val() || "";
                        e.isFunction(s) && s.call(i, a)
                    })
                }
            },
            popupGrid: function(e) {
                if (!V(e.textElement)) {
                    var t = e.popupType.toUpperCase();
                    t = "POPUP_" + t.split("_")[1],
                    W.getPopupWindow(t, e)
                }
            },
            popupTree: function(e) {
                if (!V(e.textElement)) {
                    var t = e.popupType.toUpperCase();
                    W.getPopupWindow(t, e)
                }
            }
        }
    } (),
    z = function() {
        return {
            _init: function(t) {
                var n = t.pele,
                o = t.html || "",
                r = t.loaded,
                s = "copy_" + (new Date).getTime(),
                l = i(s);
                l.html(o),
                a({
                    container: l,
                    textElement: n,
                    title: "批量复制"
                }),
                e.isFunction(r) && r.call(l)
            },
            input: function(t, i, a, n) {
                var o = "<div><input type='text' class='k-textbox' /><span class='i-btn-lg-no-ripple copy'>复制</span></div>",
                r = e(i);
                this._init({
                    pele: a,
                    html: o,
                    loaded: function() {
                        var i = this,
                        a = i.data("kendoWindow");
                        i.on("click", ".copy",
                        function(o) {
                            var s = i.find("input").val() || "";
                            if (T(n.backFill)) return void n.backFill.call(t, {
                                value: s,
                                window: a,
                                copy: !0
                            });
                            var l = r.data("field"),
                            c = t.getCheckedRows();
                            e.each(c,
                            function(e, i) {
                                t.setCellValue(i, l, s)
                            }),
                            a.close()
                        })
                    }
                })
            },
            date: function(t, i, a, n) {
                var r = "date_" + (new Date).getTime(),
                s = "<div ><input type='text' id='" + r + "' /><span class='i-btn-lg-no-ripple copy'>复制</span></div>",
                l = e(i);
                this._init({
                    pele: a,
                    html: s,
                    loaded: function() {
                        var i = this,
                        a = i.data("kendoWindow");
                        n = e.extend({
                            dateId: r,
                            change: function(e) {
                                o.innerClick()
                            }
                        },
                        n),
                        IPLAT.Date(n),
                        i.on("click", ".copy",
                        function(i) {
                            var o = e("#" + r).val() || "";
                            if (T(n.backFill)) return void n.backFill.call(t, {
                                value: o,
                                window: a,
                                copy: !0
                            });
                            var s = l.data("field"),
                            c = t.getCheckedRows();
                            e.each(c,
                            function(e, i) {
                                t.setCellValue(i, s, o)
                            }),
                            a.close()
                        })
                    }
                })
            },
            select: function(t, i, a, n) {
                var r = "<div ><input type='text' /><span class='i-btn-lg-no-ripple copy'>复制</span></div>",
                s = e(i);
                this._init({
                    pele: a,
                    html: r,
                    loaded: function() {
                        var i = this,
                        a = i.data("kendoWindow"),
                        r = i.find("input");
                        n = e.extend({
                            change: function(e) {
                                o.innerClick()
                            }
                        },
                        n),
                        r.kendoDropDownList(n),
                        i.on("click", ".copy",
                        function(o) {
                            var r = i.find("input").val() || "";
                            if (T(n.backFill)) return void n.backFill.call(t, {
                                value: r,
                                window: a,
                                copy: !0
                            });
                            var l = s.data("field"),
                            c = t.getCheckedRows();
                            e.each(c,
                            function(e, i) {
                                t.setCellValue(i, l, r)
                            }),
                            a.close()
                        })
                    }
                })
            },
            multiSelect: function(t, i, a, n) {
                var r = "<div ><select></select><span class='i-btn-lg-no-ripple copy' style='vertical-align: top;top: 3px'>复制</span></div>",
                s = e(i);
                this._init({
                    pele: a,
                    html: r,
                    loaded: function(i) {
                        var a = this,
                        r = a.data("kendoWindow"),
                        l = a.find("select");
                        n = e.extend({
                            change: function(e) {
                                o.innerClick()
                            }
                        },
                        n),
                        l.kendoMultiSelect(n),
                        a.on("click", ".copy",
                        function(i) {
                            var o = (a.find("select").val() || []).join(",");
                            if (T(n.backFill)) return void n.backFill.call(t, {
                                value: o,
                                window: r,
                                copy: !0
                            });
                            var l = s.data("field"),
                            c = t.getCheckedRows();
                            e.each(c,
                            function(e, i) {
                                t.setCellValue(i, l, o)
                            }),
                            r.close()
                        })
                    }
                })
            }
        }
    } ();
    e.extend(IPLAT, {
        Popup: H,
        ColumnCopy: z
    }),
    e.extend(window, {
        Popup: H,
        ColumnCopy: z
    }),
    e.fn.clearInput = function() {
        var t = e(this),
        i = t.data("action"),
        a = t.data("for");
        if ("clear" === i && k(a)) {
            var n = a.split(",");
            b(n,
            function(t) {
                e("#" + e.trim(t)).val("")
            })
        }
    },
    e(window.document.body).on("click", ".k-i-close",
    function() {
        var t = e(this),
        i = t.data("target") || "",
        a = t.data("for"),
        n = t.parent().prev("input").data("role"),
        o = {};
        "popupInput" === n && (o = IPLATUI.EFPopupInput[i] || {}),
        "treeInput" === n && (o = IPLATUI.EFTreeInput[i] || {}),
        e.isFunction(o.clearInput) ? o.clearInput.call(t, a) : t.clearInput()
    })
} (window.jQuery),
function(e) {
    function t(t) {
        var i = new o({
            serverFiltering: !0,
            transport: {
                read: {
                    url: t.url + "/service/" + t.serviceName + "/" + t.methodName,
                    dataType: "json",
                    contentType: "application/json",
                    type: "POST"
                },
                parameterMap: function(i, n) {
                    var o = new a;
                    return t.cascadeFrom && (o = a.build(e("#" + t.cascadeFrom).parent())),
                    o.toJSONString()
                }
            },
            schema: {
                data: function(e) {
                    return n = a.parseJSONObject(e),
                    t.EFOptions.concat(n.getBlock(t.resultId).getMappedRows())
                }
            }
        });
        return i
    }
    var i, a = IPLAT.EiInfo,
    n = IPLAT.ajaxEi,
    o = kendo.data.DataSource,
    r = e.each,
    s = e.extend;
    i = s({},
    IPLATUI.Config.EFSelect),
    kendo.ui.DropDownList.fn.options.noDataTemplate = "没有数据",
    IPLAT.Select = function(t) {
        function n(t, a) {
            var n = {
                dataTextField: "textField",
                dataValueField: "valueField",
                value: t.defaultValue
            },
            o = s({},
            IPLATUI.EFSelect[t.selectId]);
            a = a.concat(t.dataSource || []),
            delete t.dataSource,
            IPLAT.EFOptions = [],
            t.textField && t.valueField && (a = e.map(a,
            function(e) {
                return {
                    textField: e[t.textField] || e.textField,
                    valueField: e[t.valueField] || e.valueField
                }
            }));
            var r = e("#" + t.selectId);
            r.attr(IPLAT.Util.pickDOMAttributes(t));
            var l = r.kendoDropDownList(s({},
            i, t, n, o, {
                dataSource: a
            })).data("kendoDropDownList");
            return t.readonly === !0 && (l.readonly(), r.prev("span.k-dropdown-wrap").removeClass("k-state-default").addClass("i-state-readonly")),
            l
        }
        t.serviceName && t.methodName && t.resultId ? EiCommunicator.send(t.serviceName, t.methodName, new a, {
            onSuccess: function(e) {
                var i = e.getBlock(t.resultId).getMappedRows();
                n(t, IPLAT.EFOptions.concat(i))
            },
            onFail: function(e) {
                n(t, IPLAT.EFOptions)
            }
        }) : n(t, IPLAT.EFOptions)
    },
    IPLAT.MultiSelect = function(t) {
        var a = IPLAT.EFOptions.concat([]),
        n = {
            dataTextField: "textField",
            dataValueField: "valueField",
            value: t.defaultValue.split(","),
            autoClose: t.autoClose
        };
        IPLAT.EFOptions = [];
        var o = s({},
        IPLATUI.EFMultiSelect[t.selectId]),
        r = e("#" + t.selectId);
        return r.attr(IPLAT.Util.pickDOMAttributes(t)),
        r.kendoMultiSelect(s({},
        i, t, n, o, {
            dataSource: a
        })).data("kendoMultiSelect")
    },
    IPLAT.CascadeSelect = function(a) {
        var n = a.textField,
        o = a.valueField,
        l = IPLAT.EFOptions.concat([]);
        IPLAT.EFOptions = [];
        var c = s({},
        IPLATUI.EFCascadeSelect[a.selectId]);
        r(l,
        function(e, t) {
            t[n] = t.textField,
            t[o] = t.valueField,
            delete t.textField,
            delete t.valueField
        }),
        a.EFOptions = l;
        var d = {
            dataTextField: n,
            dataValueField: o,
            dataSource: t(a)
        };
        c = s({},
        IPLATUI.EFCascadeSelect[a.selectId]);
        var u = e("#" + a.selectId);
        return u.attr(IPLAT.Util.pickDOMAttributes(a)),
        u.kendoDropDownList(s({},
        i, a, d, c)).data("kendoDropDownList")
    }
} (jQuery),
function(e) {
    var t = window.IPLAT || {},
    i = function(e, t) {
        return e.kendoTreeView({
            dataSource: t
        }),
        e.data("kendoTreeView")
    },
    a = [];
    t.TreeViews = function(n) {
        var o, r = e("#" + n.leftId),
        s = e("#" + n.rightId),
        l = new i(r, n.leftDataSource),
        c = new i(s, n.rightDataSource),
        d = n.accessAll;
        a.push(l, c),
        e(document).on("dblclick", "#" + n.leftId + " span.k-in",
        function() {
            d === !1 ? (o = _getPath(l, this), nodeSwap(c, o)) : _.each(map2FlatX([l.dataItem(this)]),
            function(e) {
                nodeMove(l, c, e.id)
            })
        }),
        e(document).on("dblclick", "#" + n.rightId + " span.k-in",
        function() {
            d === !1 ? (o = _getPath(c, this), nodeSwap(l, o)) : _.each(map2FlatX([c.dataItem(this)]),
            function(e) {
                nodeMove(c, l, e.id)
            })
        }),
        e("#btnR").on("click",
        function() {
            l.select().length > 0 ? d === !1 ? (o = _getPath(l, l.select()), nodeSwap(c, o)) : _.each(map2FlatX([l.dataItem(l.select())]),
            function(e) {
                nodeMove(l, c, e.id)
            }) : t.alert({
                message: "<h4>请先选择一个结点！</h4>",
                okFn: function(e) {},
                title: "提示"
            })
        }),
        e("#btnL").on("click",
        function() {
            c.select().length > 0 ? d === !1 ? (o = _getPath(c, c.select()), nodeSwap(l, o)) : _.each(map2FlatX([c.dataItem(c.select())]),
            function(e) {
                nodeMove(c, l, e.id)
            }) : t.alert({
                message: "<h4>请先选择一个结点！</h4>",
                okFn: function(e) {},
                title: "提示"
            })
        })
    },
    t.Trees = a
} (jQuery),
function(e) {
    function t(t) {
        for (var i = e("#" + t.tabId), a = i.children(), n = [], o = r({},
        {
            tabPosition: t.tabPosition,
            scrollable: {
                distance: 200
            }
        },
        IPLATUI.EFTab[t.tabId]), s = 0; s < a.length; s++) n[s] = {
            title: a.eq(s).attr("title"),
            contentUrl: a.eq(s).attr("data-src")
        };
        if ("src" != t.content) {
            for (var l = "<li></li>",
            c = "<ul>",
            d = 0; d < a.length; d++) c += "<li>" + n[d].title + "</li>";
            c = c + l + "</ul>",
            i.prepend(c),
            i.kendoTabStrip(o).data("kendoTabStrip")
        } else i.html(""),
        n[n.length] = {
            title: "",
            contentUrl: ""
        },
        o = r({
            dataTextField: "title",
            dataContentUrlField: "contentUrl"
        },
        o, {
            dataSource: n
        }),
        i.kendoTabStrip(o).data("kendoTabStrip")
    }
    function i(t) {
        var i = e("#" + t),
        a = i.find("ul>li>span:nth-child(1)"),
        n = i.data("kendoTabStrip");
        a.on("click",
        function() {
            var t = e.inArray(i.find("ul>li.k-state-active>span.k-link")[0], a),
            o = e.inArray(this, a);
            t != o && n.reload(n.tabGroup.children().eq(o))
        })
    }
    function a(t) {
        var i = e("#" + t + '>ul>li[role="tab"]'),
        a = e("#" + t).data("kendoTabStrip");
        i.append('<span data-type="remove" class="k-link"><span class="k-icon k-i-close"></span></span>'),
        a.tabGroup.on("click", "[data-type='remove']",
        function(t) {
            t.preventDefault(),
            t.stopPropagation();
            var i = e(t.target).closest(".k-item");
            a.remove(i.index()),
            a.items().length > 0 && i.hasClass("k-state-active") && a.select(0)
        })
    }
    function n(t) {
        var i = e("#" + t).data("kendoTabStrip"),
        a = e("#" + t + '>ul>li[role="tab"]');
        i.remove(a.length - 1)
    }
    var o = window.IPLAT || {},
    r = e.extend,
    s = 160;
    o.Tab = function(o) {
        t(o);
        var r = o.active || 0;
        "true" == o.state && i(o.tabId),
        "true" == o.showClose ? (a(o.tabId), n(o.tabId)) : n(o.tabId),
        e("#" + o.tabId).data("kendoTabStrip").select(r)
    },
    o.lazyTab = function(t) {
        var i, n = t.tabId,
        r = t.active || 0,
        l = IPLATUI.EFTab[n];
        o.isUndefined(l) || (i = l.select);
        var c = e("#" + n).kendoTabStrip({
            select: function(t) {
                o.isUndefined(i) || i(t);
                var a = t.contentElement,
                n = e(a).data("src");
                if (n) {
                    var r = e("<iframe>");
                    e(a).removeData("src"),
                    e(a).removeAttr("data-src"),
                    r.appendTo(e(a)),
                    r.attr("width", "100%"),
                    r.attr("height", e(window).height() - s),
                    r.attr("frameborder", "0"),
                    r.attr("src", n)
                }
            }
        }).data("kendoTabStrip");
        setTimeout(function() {
            c.select(r)
        },
        0),
        "true" == t.showClose && a(t.tabId)
    },
    kendo.ui.TabStrip.fn.hide = function(e) {
        var t = this,
        i = t.tabGroup.children().eq(e);
        o.isNumber(e) && e < i.prevObject.length && "none" !== i.css("display") && i.hide()
    },
    kendo.ui.TabStrip.fn.show = function(e) {
        var t = this,
        i = t.tabGroup.children().eq(e);
        o.isNumber(e) && e < i.prevObject.length && "none" === i.css("display") && i.show()
    },
    kendo.ui.TabStrip.fn.title = function(e) {
        var t = this,
        i = t.tabGroup.children().eq(e);
        if (o.isNumber(e) && e < i.prevObject.length) {
            if (1 === arguments.length) return i.text();
            2 === arguments.length && i.find(".k-link:first").text(arguments[1])
        }
    }
} (jQuery),
function(e) {
    function t(e, t, i, a) {
        for (var n = {},
        o = 0; o < e.length; o++) {
            var r = e[o],
            s = r[t],
            l = r[i];
            n[s] = n[s] || [],
            n[l] = n[l] || [],
            r.items = n[s],
            n[l].push(r)
        }
        return n[a]
    }
    function i(e, t) {
        for (var a = 0; a < e.length; a++) e[a].checked && t.push(e[a]),
        e[a].hasChildren && i(e[a].children.view(), t)
    }
    function a(t, i) {
        var n = [],
        o = e("#" + t).data("kendoTreeView");
        _.each(o.element.find("span.k-i-expand"),
        function(e) {
            var t = o.dataItem(e.closest("li.k-item"));
            n.push(t.id)
        }),
        i--,
        o.expandPath(n,
        function() {
            i > 0 && a(t, i)
        })
    }
    var n, o = kendo.data.HierarchicalDataSource,
    r = e.isFunction,
    s = e.isArray,
    l = e.each,
    c = e.extend,
    d = _.isString,
    u = IPLAT.EiInfo,
    f = IPLAT.EiCommunicator,
    p = IPLAT.NotificationUtil,
    h = IPLAT.Notification,
    m = !0,
    g = "onSuccess",
    v = "onFail",
    T = "click",
    k = ".IPLAT",
    b = IPLATUI.Config.EFTree.PID,
    I = IPLATUI.Config.EFTree.EXPAND_LEVEL,
    y = IPLATUI.Config.EFTree.ROOT_ID,
    w = "root",
    E = "loadComplete",
    A = function(e, t) {
        var i = e.valueField,
        a = e.dataTextField || i,
        n = e.hasChildren;
        return _.map(t,
        function(e) {
            return e.id = e[i],
            e.text = e[a] || "",
            _.isBoolean(e[n]) || (e[n] = !(1 === parseInt(e[n]))),
            e
        })
    },
    C = function(e, t, i) {
        var a = new u,
        n = e.options,
        o = n.serviceName,
        s = n.methodName;
        return a.set(b, t),
        f.send(o, s, a, {
            onSuccess: function(a) {
                try {
                    var o = a.getBlock(t).getMappedRows();
                    r(i) && i.call(null, A(n, o))
                } catch(s) {
                    e.trigger(v + k, {
                        errorMsg: "缺少数据块[" + t + "]",
                        xhr: null
                    })
                }
            },
            onFail: function(t) {
                e.trigger(v + k, {
                    errorMsg: t,
                    xhr: null
                })
            }
        })
    },
    P = function(e, t, i) {
        if (!t) return null;
        for (var a = 0; a < e.length; a++) {
            if (e[a][i] == t) return e[a].items;
            if (e[a].items) {
                var n = P(e[a].items, t, i);
                if (n) return n
            }
        }
    },
    x = kendo.ui.Widget;
    n = x.extend({
        init: function(t, i) {
            var a, n = this,
            o = {},
            s = IPLATUI.EFTree[i.treeId];
            n._events = {},
            i && i[w.toUpperCase()] && (i[w] = i[w.toUpperCase()], delete i[w.toUpperCase()]),
            s && s[w.toUpperCase()] && (s[w] = s[w.toUpperCase()], delete s[w.toUpperCase()]),
            n.element = t;
            var l = n.options = c({},
            i, s),
            u = l.valueField,
            f = l.textField,
            p = l.hasChildren;
            if (a = n.options[w], m = !0, _.isEmpty(a)) o[u] = y,
            a = o,
            m = !1;
            else if (d(a)) {
                var h = a.split(":");
                2 === h.length ? (o[u] = h[0].trim(), o[f] = h[1].trim(), a = o) : (o[u] = a, a = o, m = !1)
            } else _.isObject(a) || (o[u] = y, a = o, m = !1);
            n.showVirtualRoot = m,
            a.id = a[u],
            n.virtualRoot = a,
            IPLAT.isBoolean(n.virtualRoot[p]) || (n.virtualRoot[p] = !0),
            n._init();
            var g = null;
            t.on("click", ".k-in",
            function(i) {
                IPLAT.Util.stopPropagation(),
                g && clearTimeout(g),
                2 !== i.detail && r(l[T]) && (g = setTimeout(function() {
                    var a = e(i.target).closest("li"),
                    o = t.data("kendoTreeView"),
                    r = o.dataItem(a);
                    l[T].call(n, r, a[0])
                },
                IPLATUI.Config.Timer.dblclick))
            })
        },
        _init: function() {
            var e, t = this,
            i = t.options;
            t.bind(v + k, i[v]),
            t.bind(g + k, i[g]);
            var a = i.dataSource;
            a || (e = !i.once, e ? t._loadOnDemand() : t._loadStatic())
        },
        _loadStatic: function() {
            var e, i, a, n, o = this,
            s = o.virtualRoot,
            l = o.options;
            e = l.valueField,
            i = l.pid,
            a = s[e],
            l.dataTextField || (l.dataTextField = l.textField),
            C(o, a,
            function(c) {
                var d = t(c, e, i, a),
                u = [];
                s[l.textField] ? (s.items = d, s.id = s[e], u = [s]) : u = d,
                l.dataSource = {
                    data: u
                },
                l.loadOnDemand = !1,
                n = o.element.kendoTreeView(l).data("kendoTreeView"),
                r(l[E]) && l[E].call(n, l)
            })
        },
        _loadOnDemand: function() {
            var e = this,
            t = e.options,
            i = t.expandLevel,
            a = t.valueField,
            n = e.virtualRoot,
            o = n[a],
            r = new u,
            s = t.serviceName,
            l = t.methodName;
            r.set(b, o),
            r.set(I, t.expandLevel),
            IPLAT.isNumber(i) && i > 0 ? f.send(s, l, r, {
                onSuccess: function(t) {
                    try {
                        var i = t.getBlock(o).getMappedRows();
                        e._loadMixed(i)
                    } catch(a) {
                        e.trigger(v + k, {
                            errorMsg: "缺少数据块[" + o + "]",
                            xhr: null
                        })
                    }
                },
                onFail: function(t) {
                    e.trigger(v + k, {
                        errorMsg: t,
                        xhr: null
                    })
                }
            }) : e._loadMixed()
        },
        _loadMixed: function(i) {
            var a, n, d, f, T = this,
            I = T.options,
            y = I.valueField,
            w = T.virtualRoot,
            A = arguments[0] || [],
            C = w[y],
            x = I.pid;
            isAvailable(x) && (w.items = t(A, y, x, C)),
            dataSource = new o({
                transport: {
                    read: function(t) {
                        var i = t.data[y],
                        a = P([w], i, y);
                        if (s(a) && a.length > 0) t.success(a);
                        else {
                            var n = this.parameterMap(t, "read");
                            e.ajax({
                                url: I.url + "/service/" + I.serviceName + "/" + I.methodName,
                                dataType: "json",
                                contentType: "application/json",
                                type: "POST",
                                data: n,
                                success: function(e) {
                                    t.success(e)
                                },
                                error: function(e) {
                                    t.error(e)
                                }
                            })
                        }
                    },
                    parameterMap: function(e, t) {
                        var i = new u;
                        if (n = e[y] || w[y], "read" === t && (T.parentId = n, i.set(b, n), r(I.query))) {
                            var a = T.options.dataSource.get(n);
                            I.query.call(T, i, a)
                        }
                        return i.toJSONString()
                    }
                },
                schema: {
                    model: {
                        id: I.valueField,
                        hasChildren: I.hasChildren
                    },
                    data: function(e) {
                        var t = I.hasChildren;
                        if (s(e)) return e;
                        n = T.parentId;
                        try {
                            a = u.parseJSONObject(e);
                            var i = a.getBlock(n).getMappedRows();
                            l(i,
                            function(e, i) {
                                _.isBoolean(i[t]) || (i[t] = !(1 === parseInt(i[t])))
                            })
                        } catch(o) {
                            T.trigger(v + k, {
                                errorMsg: "缺少数据块[" + n + "]",
                                xhr: null
                            })
                        }
                        return i
                    }
                },
                error: function(e) {
                    var t;
                    e.errors || (t = IPLAT.Util.formatErrorMessage(e.xhr && e.xhr.responseText || ""), e.errors = t),
                    T.trigger(v + k, {
                        errorMsg: e.errors,
                        xhr: e.xhr
                    }) || p(t, h.ERROR)
                },
                requestEnd: function(e) {
                    var t = T.parentId,
                    i = e.response;
                    if (a = null, !s(i)) try {
                        a = u.parseJSONObject(i),
                        d = a.getBlock(t);
                        var n = a.getStatus();
                        0 === n ? !T.trigger(g + k, {
                            eiInfo: a
                        }) : n > 0 ? !T.trigger(g + k, {
                            eiInfo: a
                        }) : T.trigger("error", e)
                    } catch(o) {}
                }
            }),
            c(I, {
                autoBind: !m,
                dataSource: dataSource
            }),
            I.dataTextField || (I.dataTextField = I.textField),
            f = T.element.kendoTreeView(I).data("kendoTreeView"),
            m && (f.dataSource.success([w]), I.expandLevel || f.expandPath([C])),
            r(I[E]) && I[E].call(f, I)
        }
    }),
    IPLAT.TreeView = function(t) {
        new n(e("#" + t.treeId), t)
    },
    kendo.ui.TreeView.fn.reload = function(e) {
        var t = this.dataSource.get(e);
        t && (t.loaded(!1), t.load())
    },
    kendo.ui.TreeView.fn.getCheckedNodes = function() {
        var e = [];
        return i(this.dataSource.view(), e),
        IPLAT.isString(arguments[0]) && (e = _.pluck(e, arguments[0])),
        e
    },
    kendo.ui.TreeView.fn.expandLevel = function(e, t) {
        m ? a(e, t) : a(e, t - 1)
    }
} (jQuery),
function(e) {
    var t, i = kendo.data.TreeListDataSource,
    a = e.isArray,
    n = e.isFunction,
    o = (e.isPlainObject, kendo.ui.Widget),
    r = e.each,
    s = e.extend,
    l = IPLAT.EiInfo,
    c = IPLAT.EiCommunicator,
    d = IPLAT.EFCommon.PARENT_ID,
    u = IPLAT.EFCommon.VALUE_FIELD,
    f = (IPLAT.EFCommon.TEXT_FIELD, IPLAT.EFCommon.VIRTUAL_ROOT),
    p = IPLATUI.Config.EFTree.PID,
    h = IPLATUI.Config.EFTree.EXPAND_LEVEL,
    m = IPLAT.EFCommon._extendColumns,
    g = IPLAT.EFCommon.NS,
    v = IPLAT.EFCommon.ON_SUCCESS,
    T = IPLAT.EFCommon.ON_FAIL,
    k = "loadComplete",
    b = (kendo.Class, "errorMsg"),
    I = IPLAT.ColorBox.INVALID_COLOR,
    y = 450,
    w = 100,
    E = function(e, t, i) {
        return _.filter(e,
        function(e) {
            return e[i] === t
        })
    },
    A = function(t, i, a, n) {
        return e.map(t,
        function(e, t) {
            return e[a] === i && (e[a] = null),
            IPLAT.isBoolean(e[n]) || (e.hasChildren = !(1 === parseInt(e[n]))),
            e
        }),
        t
    };
    t = o.extend({
        init: function(e, t) {
            var i, a = this,
            n = IPLATUI.EFTreeList[t.treeListId];
            a._events = {},
            a.element = e;
            var o = a.options = s({},
            t, n);
            o.valueField,
            o.textField,
            o.hasChildren;
            i = a.options[f] || IPLATUI.Config.EFTreeList.ROOT_ID,
            a.virtualRoot = i,
            a._buildColumns(),
            a._buildDataSource()
        },
        _buildColumns: function() {
            var e, t = this,
            i = t.options,
            n = (i[u], i[d]),
            o = i.tagId,
            l = {},
            c = IPLAT.EFGrid[o].columns;
            a(i.columns) && (m(i.columns, c), delete i.columns),
            e = c,
            r(e,
            function(e, t) {
                t.width = t.width || 150,
                l[t.field] = {
                    editable: t.enable,
                    defaultValue: t.defaultValue || ""
                },
                t.field === n && (l[n].field = n, l[t.field].nullable = !0),
                t.field === i[u] && (t.expandable = !0)
            }),
            l.parentId = {
                field: n,
                nullable: !0
            },
            t.modelFields = l,
            s(i, {
                columns: e
            })
        },
        _buildDataSource: function() {
            var e = this,
            t = e.options;
            e.CREATE = t.insertMethod || "insert",
            e.READ = t.queryMethod || "query",
            e.UPDATE = t.updateMethod || "update",
            e.DESTROY = t.deleteMethod || "delete",
            e.bind(T + g, t[T]),
            e.bind(v + g, t[v]);
            var i = t.dataSource;
            i || e._loadOnDemand()
        },
        _loadOnDemand: function() {
            var e = this,
            t = e.options,
            i = t.expandLevel,
            a = (t.valueField, e.virtualRoot),
            n = a,
            o = new l,
            r = t.serviceName,
            s = e.READ;
            o.set(p, n),
            o.set(h, t.expandLevel),
            IPLAT.isNumber(i) && i > 0 ? c.send(r, s, o, {
                onSuccess: function(t) {
                    try {
                        var i = t.getBlock(n).getMappedRows();
                        e._loadMixed(i)
                    } catch(a) {
                        e.trigger(T + g, {
                            errorMsg: "缺少数据块[" + n + "]",
                            xhr: null
                        })
                    }
                },
                onFail: function(t) {
                    e.trigger(T + g, {
                        errorMsg: t,
                        xhr: null
                    })
                }
            }) : e._loadMixed()
        },
        _loadMixed: function() {
            var t, o, r, c, d = this,
            u = d.options,
            f = u.valueField,
            h = d.virtualRoot,
            m = arguments[0] || [],
            b = h,
            I = u.pid,
            _ = new i({
                transport: {
                    read: function(t) {
                        var i = t.data[f],
                        n = E(m, i, I);
                        if (a(n) && n.length > 0) t.success(n);
                        else {
                            var o = this.parameterMap(t, "read");
                            e.ajax({
                                url: u.url + "/service/" + u.serviceName + "/" + d.READ,
                                dataType: "json",
                                contentType: "application/json",
                                type: "POST",
                                data: o,
                                success: function(e) {
                                    t.success(e)
                                },
                                error: function(e) {
                                    t.error(e)
                                }
                            })
                        }
                    },
                    parameterMap: function(e, t) {
                        var i = new l;
                        if (o = e.data.id || h, "read" === t && (d.parentId = o, i.set(p, o), n(u.query))) {
                            var a = d.options.dataSource.get(o);
                            u.query.call(d, i, a)
                        }
                        return i.toJSONString()
                    }
                },
                schema: {
                    model: {
                        id: f,
                        fields: d.modelFields
                    },
                    data: function(e) {
                        var i = u.hasChildren,
                        n = [];
                        if (o = d.parentId, a(e)) return A(e, b, I, i);
                        try {
                            t = l.parseJSONObject(e),
                            n = t.getBlock(o).getMappedRows(),
                            n = A(n, b, I, i)
                        } catch(r) {
                            d.trigger(T + g, {
                                errorMsg: "缺少数据块[" + o + "]",
                                xhr: null
                            })
                        }
                        return n
                    }
                },
                error: function(e) {
                    var t;
                    e.errors || (t = IPLAT.Util.formatErrorMessage(e.xhr && e.xhr.responseText || ""), e.errors = t),
                    d.trigger(T + g, {
                        errorMsg: e.errors,
                        xhr: e.xhr
                    }) || NotificationUtil(t, Notification.ERROR)
                },
                requestEnd: function(e) {
                    var i = d.parentId,
                    n = e.response;
                    if (t = null, !a(n)) try {
                        t = l.parseJSONObject(n),
                        r = t.getBlock(i);
                        var o = t.getStatus();
                        0 === o ? !d.trigger(v + g, {
                            eiInfo: t
                        }) : o > 0 ? !d.trigger(v + g, {
                            eiInfo: t
                        }) : d.trigger("error", e)
                    } catch(s) {}
                }
            });
            s(u, {
                autoBind: !0,
                dataSource: _
            }),
            c = d.element.kendoTreeList(u).data("kendoTreeList"),
            n(u[k]) && u[k].call(c, u)
        },
        _build: function() {}
    }),
    IPLAT.TreeList = function(i) {
        var a, n = e("#ef_treelist_" + i.treeListId);
        a = new t(n, i),
        a.element.on("mouseover", "tr",
        function(t) {
            var i = e(this).data("uid");
            e("tr[data-uid='" + i + "']").addClass("k-td-hover")
        }),
        a.element.on("mouseout", "tr",
        function(t) {
            var i = e(this).data("uid");
            e("tr[data-uid='" + i + "']").removeClass("k-td-hover")
        });
        var o = _.throttle(function(t, i, a) {
            var n = e(t),
            o = n.closest("tr"),
            l = n.width(),
            c = kendo.htmlEncode(n.text().trim()),
            d = _.isString(i) && kendo.htmlEncode(i) || c,
            u = "<span class='k-icon k-i-warning'></span>&nbsp;&nbsp;" + d,
            f = n.css("font-size"),
            p = e("[data-role='tooltip']"),
            h = IPLAT.getCurrentStrWidth(c, f),
            m = {
                showAfter: 0,
                animation: !1,
                hide: function() {
                    n.removeAttr("data-role"),
                    this.destroy()
                }
            };
            if (r(p,
            function(t, i) {
                var a = e(i).data("kendoTooltip"),
                n = e(i).is("input.k-invalid");
                a instanceof kendo.ui.Tooltip && !n && a.hide()
            }), "error" === a && o.hasClass("i-state-selected")) {
                s(m, {
                    width: w,
                    content: u
                });
                var g = n.kendoTooltip(m).data("kendoTooltip");
                g.show();
                var v = g.popup.element;
                v.css("background", I),
                v.find(".k-callout-n").css("border-bottom-color", I)
            } else if (! (n.hasClass("k-state-selected") || o.hasClass("i-state-selected") || n.hasClass("k-detail-cell")) && h >= l) {
                h > y && e.extend(m, {
                    width: y
                }),
                e.extend(m, {
                    content: c
                });
                var T = n.kendoTooltip(m).data("kendoTooltip");
                T.show()
            }
        },
        400);
        return a.element.on("mouseover", "td",
        function(t) {
            var i = e(this),
            a = e.trim(i.data(b)) || "";
            a ? (console.log("false"), o(this, a, "error")) : (console.log("true"), o(this))
        }),
        a
    }
} (jQuery),
function(e) {
    var t, i, a = (e.each, e.extend),
    n = (kendo.ui.Upload, kendo.ui.Widget),
    o = IPLATUI.CONTEXT_PATH,
    r = IPLATUI.Config.EFUpload,
    s = o + r.initUrl,
    l = o + r.saveUrl,
    c = (o + r.downloadUrl, o + r.removeUrl),
    d = ".IPLAT",
    u = "loadComplete";
    t = n.extend({
        init: function(e, t) {
            var i = this,
            n = {},
            o = t.path,
            r = t.docTag,
            s = t.fileLocation,
            f = {
                async: {
                    saveUrl: l,
                    batch: !1
                }
            };
            i._events = {},
            i.element = e,
            i.uploader = null,
            n = IPLATUI.EFUpload[t.ename],
            f.async.removeUrl = c,
            i.options = a(!0, {},
            t, f, n),
            t.__keep__ && (i.options.path = o || i.options.path, i.options.docTag = r || i.options.docTag, i.options.fileLocation = s || i.options.fileLocation, t.__keep__ = !1),
            i.bind(u + d, i.options[u]),
            i.initFileList()
        },
        initFileList: function() {
            var t = this,
            i = t.options.docTag;
            fileLocation = t.options.fileLocation,
            "__temp__" !== i ? t.uploaderPromise = e.ajax({
                type: "GET",
                url: s + "?docTag=" + i + "&fileLocation=" + fileLocation,
                dataType: "json"
            }) : t.uploaderPromise = e.Deferred().resolve([])
        },
        _bindEvents: function() {
            var t = this,
            a = t.options.path,
            n = t.options.docTag,
            o = t.options.ename;
            fileLocation = t.options.fileLocation,
            i = function(t) {
                t.sender.options.async.saveUrl = l + "?" + e.param({
                    path: a,
                    docTag: n,
                    ename: o,
                    fileLocation: fileLocation
                })
            },
            t.uploader.bind("upload", i),
            t.uploader.bind("remove",
            function(t) {
                var i = e.param({
                    docId: t.files[0].docId,
                    docTag: n,
                    fileLocation: fileLocation
                });
                "__temp__" === t.files[0].docTag && (i = e.param({
                    docId: t.files[0].docId,
                    docTag: "__temp__"
                })),
                t.sender.options.async.removeUrl = c + "?" + i
            }),
            t.uploader.bind("success",
            function(e) {
                e.files[0].docId = e.response.docId,
                e.files[0].docTag = e.response.docTag
            })
        },
        changeSettings: function(e, t) {
            var i = this,
            a = {
                docTag: e,
                path: t
            };
            i.resetOptions(a)
        },
        resetOptions: function(t) {
            var n = this,
            o = n.options.docTag,
            r = n.options.ename;
            a(n.options, t),
            n.options.ename = r;
            var s = n.options,
            c = n.options.path,
            d = n.options.docTag;
            fileLocation = n.options.fileLocation,
            n.uploader && d !== o && (n.uploader.destroy(), n.destroy(), s.__keep__ = !0, IPLAT.Uploader(s)),
            n.uploader.unbind("upload", i),
            n.uploader.bind("upload",
            function(t) {
                t.sender.options.async.saveUrl = l + "?" + e.param({
                    path: c,
                    docTag: d,
                    ename: r,
                    fileLocation: fileLocation
                })
            })
        },
        destroy: function() {
            var t, i = this.options.ename;
            n.fn.destroy.call(this),
            t = e("#" + i).detach(),
            e(".upload-" + i).empty().append(t)
        }
    }),
    IPLAT.Uploader = function(i) {
        var a = new t(e("#" + i.ename), i);
        return a.uploaderPromise.then(function(e) {
            var t = a;
            t.options.files = _.map(e,
            function(e) {
                var t = e.docName.match(/\.[^.]+$/g);
                return t = t ? t[0] : "",
                e.name = e.docName,
                e.size = e.docSize,
                e.extension = t,
                e
            }),
            t.uploader = t.element.kendoUpload(t.options).data("kendoUpload"),
            t.options.readonly && t.uploader.disable(),
            window[t.options.ename + "Upload"] = t,
            t._bindEvents(),
            t.trigger(u + d)
        },
        function(e, t, i) {}),
        a
    },
    IPLAT.FileUploader = function(t) {
        var i = e("#" + t.id),
        a = o + "/EU/DM/EUDM20.jsp?ename=" + t.ename + "&serviceName=" + t.serviceName + "&methodName=" + t.methodName;
        return e.extend(t, {
            async: {
                saveUrl: a
            }
        }),
        i.kendoUpload(t).data("kendoUpload")
    }
} (jQuery),
function($) {
    function validateFunctionWrapper(e) {
        return function() {
            var t = arguments[0],
            i = arguments[1],
            a = t.closest("td.k-edit-cell").length > 0;
            return "false" === t.attr("validate") || (!a && !_validateGroup(t, i) || e.apply(null, arguments))
        }
    }
    function _trimMessage(e) {
        return e.trim().replace(/^\*\s?/, "")
    }
    function _validateGroup(e, t) {
        if ("__all__" === t) return ! 0;
        void 0 === t && (t = "__none__");
        var i = e.attr("validategroupname") || "__none__",
        a = i.split(","),
        n = t.split(",");
        return _.intersection(a, n).length > 0
    }
    function _initValidator(e) {
        return {
            rules: {
                required: function(t) {
                    if (!t.prop("required") || "false" === t.attr("validate")) return ! 0;
                    var i = t.closest("td.k-edit-cell").length > 0;
                    return ! i && !_validateGroup(t, e) || t.val() && !!t.val().length
                },
                minLength: function(t) {
                    if (!t.attr("minlength") || "false" === t.attr("validate")) return ! 0;
                    var i = t.closest("td.k-edit-cell").length > 0;
                    if (i || _validateGroup(t, e)) {
                        var a = t.val(),
                        n = t.attr("minlength");
                        return ! (n && !isNaN(parseInt(n))) || a.length >= n
                    }
                    return ! 0
                },
                maxLength: function(t) {
                    if (!t.attr("maxlength") || "false" === t.attr("validate")) return ! 0;
                    var i = t.closest("td.k-edit-cell").length > 0;
                    if (i || _validateGroup(t, e)) {
                        var a = t.val(),
                        n = t.attr("maxlength");
                        return ! (n && !isNaN(parseInt(n))) || a.length <= n
                    }
                    return ! 0
                },
                email: function(t) {
                    return validateFunctionWrapper(validatePlatRules)(t, e, "email", /^([_a-z0-9]|[.]|[\-])+@(([_a-z0-9]|[\-])+\.)+[a-z0-9]+$/i)
                },
                mobile_phone: function(t) {
                    return validatePlatRules(t, e, "mobile_phone", /^1[3456789](\d{9})$/)
                },
                postcode: function(t) {
                    return validatePlatRules(t, e, "postcode", /^(\d{6})$/)
                },
                phone_with_area_code: function(t) {
                    return validatePlatRules(t, e, "phone_with_area_code", /^\d{3,4}-\d{3,11}(-\d*)?$/)
                },
                phone_without_area_code: function(t) {
                    return validatePlatRules(t, e, "phone_without_area_code", /^[1-9]\d{2,10}$/)
                },
                integer: function(t) {
                    return validatePlatRules(t, e, "phone_without_area_code", /^-?[1-9]+\d*$|^0$/)
                },
                positive_integer: function(t) {
                    return validatePlatRules(t, e, "positive_integer", /^[1-9]+\d*$/)
                },
                non_negative_integer: function(t) {
                    return validatePlatRules(t, e, "non_negative_integer", /^[1-9]+\d*$|^0$/)
                },
                negative_integer: function(t) {
                    return validatePlatRules(t, e, "negative_integer", /^-[1-9]+\d*$/)
                },
                http_url: function(t) {
                    return validatePlatRules(t, e, "http_url", /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i)
                },
                number: function(t) {
                    return validatePlatRules(t, e, "number", /^-?[1-9]\d*$|^-?[1-9]\d*\.\d+$|^-?0?\.\d+$|^0$/)
                },
                non_negative_number: function(t) {
                    return validatePlatRules(t, e, "non_negative_number", /^[1-9]\d*$|^[1-9]\d*\.\d+$|^0?\.\d+$|^0$/)
                },
                positive_number: function(t) {
                    return validatePlatRules(t, e, "positive_number", /^[1-9]\d*$|^[1-9]\d*}\.\d+$|^0?\.\d+$/)
                },
                decimal: function(t) {
                    return validatePlatRules(t, e, "decimal", /^-?0?\.\d+$/)
                },
                label: function(t) {
                    return validatePlatRules(t, e, "label", /^[a-z][a-z0-9_]+$/i)
                },
                string: function(t) {
                    return validatePlatRules(t, e, "string", /^[a-z0-9_]+$/i)
                },
                chinese_string: function(t) {
                    return validatePlatRules(t, e, "chinese_string", /^([a-z0-9_]|[\u4E00-\u9FA5])+$/i)
                },
                not_chinese_string: function(t) {
                    return validatePlatRules(t, e, "not_chinese_string", /^[^\u4E00-\u9FA5]*$/i)
                },
                ip_address: function(t) {
                    return validatePlatRules(t, e, "ip_address", /^([0-9]|[1-9][0-9]|[1][0-9]{2}|[2][0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|[1][0-9]{2}|[2][0-4][0-9]|25[0-5])){3}$/)
                },
                text: function(t) {
                    return validatePlatRules(t, e, "text", /^([\w]|[\W])*$/i)
                },
                mac: function(t) {
                    return validatePlatRules(t, e, "mac", /^[0-9a-f]{2}([:][0-9a-f]{2}){5}$|^[0-9a-f]{2}([\-][0-9a-f]{2}){5}$/i)
                },
                regex: function(t) {
                    return validateRegExp(t, e)
                },
                func: function(t) {
                    return validateFunc(t, e)
                }
            },
            messages: {
                required: function(e) {
                    var t = e.attr("id");
                    return _trimMessage(kendo.format("{0}为必填项", $("label[data-for=" + t + "]").text()))
                },
                minLength: function(e) {
                    var t = e.attr("id");
                    return _trimMessage(kendo.format("{0}长度不应该小于{1}", $("label[data-for=" + t + "]").text(), e.attr("minlength")))
                },
                maxLength: function(e) {
                    var t = e.attr("id");
                    return _trimMessage(kendo.format("{0}长度不应该大于{1}", $("label[data-for=" + t + "]").text(), e.attr("maxlength")))
                },
                email: "不是有效的电子邮件地址",
                mobile_phone: "不是有效的手机号码",
                postcode: "不是有效的邮政编码",
                phone_with_area_code: "带区号和分机号的电话号码，格式应如：021-50801155-1004",
                phone_without_area_code: "电话号码应为3-11位的数字，需以非零开头",
                integer: "必须输入整数",
                positive_integer: "必须输入正整数",
                non_negative_integer: "必须输入非负整数",
                negative_integer: "必须输入负整数",
                http_url: "需要以http://或https://开头",
                number: "必须输入数字",
                non_negative_number: "必须输入非负数字",
                positive_number: "必须输入正数字",
                decimal: "必须输入小数",
                label: "仅包含字母数字和下划线，需要以字母开头",
                string: "英文字符串必须仅由字母、数字和下划线组成",
                chinese_string: "中文字符串仅包含中文，英文字母数字和下划线",
                not_chinese_string: "包含非法的中文字符串",
                ip_address: "非法的IP地址",
                text: "非法的字符串",
                mac: "非法的MAC地址",
                regex: function(e) {
                    return e.attr("__error_msg__")
                },
                func: function(e) {
                    return e.attr("__error_msg__")
                }
            }
        }
    }
    function validateHTML5Rules(e, t, i, a) {}
    function validatePlatRules(e, t, i, a) {
        if ("true" !== e.attr("validate") && IPLAT.isBlankString(e.val())) return ! 0;
        var n = e.closest("td.k-edit-cell").length > 0;
        if (n || _validateGroup(e, t)) {
            var o = e.data("rules") || "";
            o = o.split(",");
            var r = _.findIndex(o,
            function(e) {
                return e.trim() === i
            });
            return r < 0 || a.test(e.val())
        }
        return ! 0
    }
    function validateRegExp(input, groupName) {
        if ("true" !== input.attr("validate") && IPLAT.isBlankString(input.val())) return ! 0;
        var gridCell = input.closest("td.k-edit-cell").length > 0;
        if (gridCell || _validateGroup(input, groupName)) {
            var dataAttributes = input.data() || {},
            regExps = [];
            for (var regex in dataAttributes) dataAttributes.hasOwnProperty(regex) && regex.match(/regex\d*/) && regExps.push(regex);
            regExps = _.sortBy(regExps,
            function(e) {
                var t = -1;
                return e.length > 5 && (t = 1 * e.substring(5)),
                t
            });
            for (var success = !0,
            i = 0; i < regExps.length; i++) {
                var pattern = eval(dataAttributes[regExps[i]]);
                if (success = pattern.test(input.val()), !success) {
                    input.attr("__error_msg__", input.data("errorprompt" + regExps[i].substring(5)));
                    break
                }
            }
            return success
        }
        return ! 0
    }
    function validateFunc(e, t) {
        if ("true" !== e.attr("validate") && IPLAT.isBlankString(e.val())) return ! 0;
        var i = e.closest("td.k-edit-cell").length > 0;
        if (i || _validateGroup(e, t)) {
            var a = e.data() || {},
            n = [];
            for (var o in a) a.hasOwnProperty(o) && o.match(/func\d*/) && n.push(o);
            n = _.sortBy(n,
            function(e) {
                var t = -1;
                return e.length > 4 && (t = 1 * e.substring(4)),
                t
            });
            for (var r = !0,
            s = 0; s < n.length; s++) {
                var l = a[n[s]],
                c = e.val();
                if (!IPLAT.isAvailable(IPLAT.validateFunc[l])) {
                    r = !1,
                    e.attr("__error_msg__", "IPLAT.validateFunc 没有 data-func 属性中的方法");
                    break
                }
                if (r = IPLAT.validateFunc[l](c), !r) {
                    e.attr("__error_msg__", e.data("errorprompt" + n[s].substring(4)));
                    break
                }
            }
            return r
        }
        return ! 0
    }
    function showValidateMsg(e, t) {
        var i = getBorderInput(e),
        a = t._checkValidity(e),
        n = a.valid,
        o = e.attr("name") || "",
        r = IPLAT.ColorBox.INVALID_COLOR,
        s = i.closest("td"),
        l = s.length > 0;
        if (n) delete t._errors[o],
        i.css("border-color", ""),
        i.css("color", ""),
        i.unbind("mouseenter").unbind("mouseleave");
        else {
            var c = t._extractMessage(e, a.key);
            t._errors[o] = c;
            var d = "<span class='k-icon k-i-warning'></span>&nbsp;&nbsp;" + decode(c),
            u = {
                showAfter: 0,
                width: IPLAT.getCurrentStrWidth(d, $(e).css("font-size")),
                animation: !1,
                content: d,
                hide: function() {
                    e.removeAttr("data-role"),
                    this.destroy()
                }
            };
            i.css("border-color", r),
            i.css("color", r);
            var f = kendo.throttle(function() {
                var t = $("[data-role='tooltip']");
                if (t.length > 0 && !l && $.each(t,
                function(e, t) {
                    $(t).data("kendoTooltip").hide()
                }), l) {
                    var a = s.data("inputId");
                    if (isAvailable(a)) e.attr("id", a);
                    else {
                        var n = +new Date;
                        e.attr("id", "tdInput" + n),
                        s.data("inputId", "tdInput" + n)
                    }
                }
                e.data("kendoTooltip") || e.kendoTooltip(u);
                var o = e.data("kendoTooltip");
                o.show();
                var c = $("#" + e[0].id + "_tt_active");
                c.css("background", r),
                c.find("div.k-callout").css("border-bottom-color", r);
                var d = c.closest("div.k-animation-container"),
                f = i.offset();
                d.css("top", f.top + i.parent().height() + 6 + "px"),
                d.css("left", f.left - (o.options.width - i.width()) / 2 + "px")
            },
            200),
            p = kendo.throttle(function() {
                var t = e.data("kendoTooltip");
                t && t.hide()
            },
            200);
            i.off("mouseenter"),
            i.off("mouseleave"),
            i.on("mouseenter", f),
            i.on("mouseleave", p),
            e.attr("aria-invalid", !0)
        }
    }
    function getBorderInput(e) {
        return "nodeName" !== e.attr("name") || e.parent().hasClass("i-validate-helper") ? e.prev("span") && e.prev("span").hasClass("k-dropdown-wrap") ? e.prev("span") : e.closest("span") && e.closest("span").hasClass("k-picker-wrap") || e.hasClass("popupColumn") || e.hasClass("textareaColumn") ? e.closest("span") : e.closest("div") && e.closest("div").hasClass("k-multiselect") ? e.closest("div") : e.hasClass("popupInput") || e.hasClass("treeInput") ? e.closest("span") : e: (e.attr("name", "__nodeName__").css("width", "100%"), e.wrap("<div class='i-validate-helper' />"), e.parent())
    }
    function decode(e) {
        return e.replace(/&amp/g, "&amp;").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    }
    var extend = $.extend,
    _extractMessage = kendo.ui.Validator.fn._extractMessage,
    _checkValidity = kendo.ui.Validator.fn._checkValidity;
    extend(!0, kendo.ui.validator, _initValidator()),
    IPLAT.Validator = function(e) {
        var t = _initValidator(e.groupName);
        return e = $.extend(t, e, {
            iplat_validator: !0
        }),
        $("#" + e.id).kendoValidator(e).data("kendoValidator")
    },
    $.fn.kendoInputValidate = function() {
        var e, t = kendo.ui.validator || {},
        i = _checkValidity.call({
            options: t
        },
        $(this)) || {};
        return i.valid ? i: (e = _extractMessage.call({
            options: t
        },
        $(this), i.key), extend(i, {
            errorMsg: e
        }))
    },
    kendo.ui.Validator.fn.validate = function(e) {
        return function(e) {
            this.setOptions(_initValidator(e));
            var t, i, a, n = !1,
            o = this.value(),
            r = ":input:not(:button,[type=submit],[type=reset],[disabled])",
            s = "[data-validate!=false]",
            l = r + s;
            if (this._errors = {},
            this.element.is(r)) n = this.validateInput(this.element);
            else {
                var c = !1;
                for (t = this.element.find(l), i = 0, a = t.length; i < a; i++) this.validateInput(t.eq(i)) || (c = !0);
                n = !c
            }
            return this.trigger("validate", {
                valid: n
            }),
            o !== n && this.trigger("change"),
            n
        }
    } (kendo.ui.Validator.fn.validate),
    kendo.ui.Validator.fn.validateInput = function(e) {
        return function(t) {
            var i = this,
            a = i.options,
            n = $(t),
            o = n.closest("td").length > 0;
            if (a && a.iplat_validator === !0 || o) {
                i._isValidated = !0;
                var r = "k-invalid",
                s = "k-valid",
                l = "validateInput",
                c = i._checkValidity(t),
                d = c.valid,
                u = !n.attr("aria-invalid");
                return n.removeAttr("aria-invalid"),
                showValidateMsg(n, i),
                u !== d && this.trigger(l, {
                    valid: d,
                    input: n
                }),
                n.toggleClass(r, !d),
                n.toggleClass(s, d),
                d
            }
            return e.call(this, t)
        }
    } (kendo.ui.Validator.fn.validateInput)
} (jQuery),
function(e) {
    function t() {
        var t = "." + IPLATUI.Config.EFPage.fitHeightClass,
        a = e(t);
        if (a.length > 0) {
            var n = e("form.i-form"),
            o = IPLATUI.Config.EFPage.paddingBottom || 1 * n.css("padding-bottom").replace("px", "");
            a.each(function() {
                var t = e(this),
                a = t.data("offsetH") || 0;
                a += o;
                var n = i(t, a);
                t.outerHeight(n)
            })
        }
    }
    function i(t) {
        var i = e(window),
        a = i.height(),
        n = arguments[1] || 0,
        o = e(t),
        r = o.offset();
        return a - r.top - n
    }
    e(document).on("keydown mousedown", ".i-input-readonly",
    function(t) {
        var i = function(e) {
            e.unbind("keyup input"),
            e.attr("style", "ime-mode:disabled");
            var t = e.val();
            e.on("keyup",
            function() {
                e.val(t)
            }),
            e.on("input",
            function() {
                e.val(t)
            })
        },
        a = "INPUT" === this.nodeName ? e(this) : e(this).find("input");
        a.length && i(a);
        var n = "TEXTAREA" === this.nodeName ? e(this) : e(this).find("textarea");
        n.length && i(n),
        IPLAT.Util.stopPropagation(t)
    }),
    IPLAT.Util.exportGrid = function(t) {
        var i = document.forms._eiExportForm,
        a = document.getElementById("_eiExportIframe");
        isAvailable(i) && document.body.removeChild(i),
        isAvailable(a) && document.body.removeChild(a),
        a = document.createElement("iframe"),
        a.setAttribute("id", "_eiExportIframe"),
        a.setAttribute("name", "_eiExportIframe"),
        a.style.display = "none",
        document.body.appendChild(a);
        var n = window;
        a.addEventListener("load",
        function() {
            var t = e("#_eiExportIframe").contents().find("#__eiExportError__").html();
            isAvailable(t) ? n.NotificationUtil("" + t, "error") : n.NotificationUtil("导出数据失败", "error")
        }),
        i = document.createElement("form"),
        i.setAttribute("id", "_eiExportForm"),
        i.setAttribute("method", "POST"),
        i.setAttribute("target", "_eiExportIframe"),
        i.setAttribute("action", IPLATUI.CONTEXT_PATH + "/export");
        var o = document.createElement("input");
        o.setAttribute("type", "hidden"),
        o.setAttribute("name", IPLAT.CONSTANTS.EXPORT_FLAG),
        o.setAttribute("value", "true"),
        i.appendChild(o),
        o = document.createElement("input"),
        o.setAttribute("type", "hidden"),
        o.setAttribute("name", IPLAT.CONSTANTS.EXPORT_FILE_NAME),
        o.setAttribute("value", t.exportFileName),
        i.appendChild(o),
        o = document.createElement("input"),
        o.setAttribute("type", "hidden"),
        o.setAttribute("name", IPLAT.CONSTANTS.EXPORT_FILE_TYPE),
        o.setAttribute("value", t.exportFileType),
        i.appendChild(o),
        o = document.createElement("input"),
        o.setAttribute("type", "hidden"),
        o.setAttribute("name", IPLAT.CONSTANTS.EXPORT_BLOCK_ID),
        o.setAttribute("value", t.exportBlockId),
        i.appendChild(o),
        isAvailable(t.exportServiceName) && isAvailable(t.exportMethodName) ? (o = document.createElement("input"), o.setAttribute("type", "hidden"), o.setAttribute("name", IPLAT.CONSTANTS.EXPORT_SERVICE_NAME), o.setAttribute("value", t.exportServiceName), i.appendChild(o), o = document.createElement("input"), o.setAttribute("type", "hidden"), o.setAttribute("name", IPLAT.CONSTANTS.EXPORT_METHOD_NAME), o.setAttribute("value", t.exportMethodName), i.appendChild(o), o = document.createElement("input"), o.setAttribute("type", "hidden"), o.setAttribute("name", IPLAT.CONSTANTS.EXPORT_QUERY_EIINFO), o.setAttribute("value", t.queryInfo), i.appendChild(o)) : isAvailable(t.exportEiInfo) && (o = document.createElement("input"), o.setAttribute("type", "hidden"), o.setAttribute("name", IPLAT.CONSTANTS.EXPORT_EIINFO), o.setAttribute("value", t.exportEiInfo), i.appendChild(o)),
        document.body.appendChild(i),
        i.submit()
    },
    IPLAT.Util.exportEiBlock2Excel = function(e, t, i) {
        var a, n, o, r, s = [],
        l = [];
        if (IPLAT.isEiBlock(e)) {
            a = e.getBlockMeta().metas,
            o = e.getMappedRows();
            for (n in a) a.hasOwnProperty(n) && (r = {},
            r.value = void 0 == a[n].descName ? "": a[n].descName, l.push(r));
            s.push({
                cells: l
            });
            for (var c = 0; c < o.length; c++) {
                l = [];
                for (n in a) a.hasOwnProperty(n) && (r = {},
                r.value = o[c][n], l.push(r));
                s.push({
                    cells: l
                })
            }
            i ? i.rows || (i.rows = s) : (i = {},
            i.rows = s);
            var d = new kendo.ooxml.Workbook({
                sheets: [i]
            });
            kendo.saveAs({
                dataURI: d.toDataURL(),
                fileName: t
            })
        }
    },
    IPLAT.Util.visualizeEiInfo = function(t, i) {
        var a = {
            EiInfo: "EiInfo",
            blocks: "EiBlock数据区",
            extAttr: "扩展属性区",
            meta: "元数据区",
            status: "状态",
            traceId: "调用链路唯一Id",
            __version__: "版本"
        },
        n = [],
        o = 0,
        r = 1;
        if (t) {
            var s = function(e, t, i, n) {
                var o = a[t] ? a[t] : "";
                return {
                    id: e,
                    name: t,
                    value: JSON.stringify(i),
                    parentId: n,
                    description: o
                }
            },
            l = function(e, t, i, a) {
                var n, c;
                if (a === !0 && (t.push(s(r, "EiInfo", e, i)), o = i = r), o) for (n in e) e.hasOwnProperty(n) && (c = e[n], o++, t.push(s(o, n, c, i)), _.isObject(c) && l(c, t, o))
            };
            l(t, n, null, !0);
            var c = new kendo.data.TreeListDataSource({
                data: n,
                schema: {
                    model: {
                        id: "id",
                        expanded: !1
                    }
                }
            });
            e(i).kendoTreeList({
                dataSource: c,
                columns: [{
                    field: "name",
                    title: "属性名",
                    width: "250px"
                },
                {
                    field: "description",
                    title: "说明",
                    width: "200px"
                },
                {
                    field: "value",
                    title: "属性值",
                    template: "<span class='i-click'>#=value#</span>"
                }]
            })
        }
    },
    IPLAT.Util.getBodyScrollTop = function() {
        var e;
        return "undefined" != typeof window.pageYOffset ? e = window.pageYOffset: "undefined" != typeof document.compatMode && "BackCompat" !== document.compatMode ? e = document.documentElement.scrollTop: "undefined" != typeof document.body && (e = document.body.scrollTop),
        e
    },
    IPLAT.Util.getScrollBarWidth = function() {
        var t = e('<div style="width: 100%; height:200px;">test</div>'),
        i = e('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append(t),
        a = t[0],
        n = i[0];
        e("body").append(n);
        var o = a.offsetWidth;
        i.css("overflow", "scroll");
        var r = n.clientWidth;
        return i.remove(),
        o - r
    },
    IPLAT.Util.getGridFullScreenHeight = function(t) {
        var i, a, n, o, r = {
            selector: null,
            isScrollX: !1,
            isPagerPositionTop: !0,
            toolbar: !0,
            adjustHeight: 66
        },
        s = e(window).height(),
        l = e(document).scrollTop(),
        c = e.extend({},
        r, t);
        n = c.isScrollX === !0 ? 284 : 275,
        o = 32,
        a = c.toolbar === !0 ? 32 : 0,
        i = n + o + a;
        var d = e(c.selector);
        if (!d.length) return n;
        var u = d.offset(),
        f = Math.max(u.top - l, 0),
        p = s - f,
        h = c.adjustHeight;
        return Math.max(p - h, i)
    },
    IPLAT.Util.stopPropagation = function(e) {
        var t = e || window.event;
        t && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
    },
    IPLAT.Util.preventDefault = function(e) {
        var t = e || window.event;
        t.preventDefault && t.preventDefault(),
        t.returnValue = !1
    },
    IPLAT.Util.getElementScreenPosition = function(t) {
        var i = e(t),
        a = e(document).scrollLeft(),
        n = e(document).scrollTop();
        return {
            top: i.offset().top - n,
            left: i.offset().left - a,
            height: i.outerHeight(),
            width: i.outerWidth()
        }
    },
    IPLAT.Util.preventWindowShake = function() {
        var t = 0,
        i = _.debounce(function() {
            e(document.body).css("height", t + "px")
        },
        100);
        e("#page-container").css("height", ""),
        e(document).on("scroll.iplat.popup",
        function(e) {
            var a = document.body.scrollHeight;
            a > t && (t = a, i())
        })
    },
    IPLAT.Util.restoreWindow = function() {
        var t = e(document);
        t.off("scroll.iplat.popup"),
        t.scrollTop() > 0 && setInterval(function() {
            var t = e("#page-container").height(),
            i = e(document.body).height();
            i > t ? e(document.body).css("height", i - 5 + "px") : e(document.body).css("height", "")
        },
        20)
    },
    IPLAT.Util.forbidKendoGridScroll = function(t) {
        var i, a;
        t instanceof kendo.ui.Grid && (i = e(t.content), a = e(t.lockedContent), i.length && i.on("mousewheel",
        function(e) {
            IPLAT.Util.preventDefault(e)
        },
        !1), a.length && a.on("mousewheel",
        function(e) {
            IPLAT.Util.preventDefault(e)
        },
        !1))
    },
    IPLAT.Util.restartKendoGridScroll = function(t) {
        var i, a;
        t instanceof kendo.ui.Grid && (i = e(t.content), a = e(t.lockedContent), i.length && i.off("mousewheel"), a.length && a.off("mousewheel"))
    },
    e(window).load(function() {
        var i = "." + IPLATUI.Config.EFPage.fitHeightClass,
        a = e(i);
        a.length > 0 && (t(), e(window).on("resize", kendo.throttle(t, 200)))
    })
} (window.jQuery),
function(e) {
    function t(e, t) {
        var i = window.getComputedStyle ? window.getComputedStyle(e, null) : e.currentStyle,
        a = n(t);
        return null !== a ? i[a] : i[t]
    }
    var i, a = ["relative", "absolute", "fixed"],
    n = function() {
        var e = document.createElement("dummy").style,
        t = "Webkit Moz O ms Khtml".split(" "),
        i = {};
        return function(a) {
            if ("undefined" == typeof i[a]) {
                var n = a.charAt(0).toUpperCase() + a.substr(1),
                o = (a + " " + t.join(n + " ") + n).split(" ");
                i[a] = null;
                for (var r in o) if (void 0 !== e[o[r]]) {
                    i[a] = o[r];
                    break
                }
            }
            return i[a]
        }
    } (),
    o = function(n) {
        var o, r, s = e(n),
        n = s[0],
        l = s.parent(),
        c = '<div style="position: absolute; left:{0}; top:{1}; height:{2}; width:{3}"></div>';
        if (s.length && l.length) {
            var d = t(l[0], "position");
            a.indexOf(d) < 0 && l.css("position", "relative"),
            o = t(n, "z-index"),
            s.css("opacity", "0.1"),
            r = e(kendo.format(c, n.offsetLeft + "px", n.offsetTop + "px", n.offsetHeight + "px", n.offsetWidth + "px")),
            +o && r.css("z-index", +o + 1),
            l.append(r),
            i = _.throttle(function() {
                r.css({
                    left: n.offsetLeft + "px",
                    top: n.offsetTop + "px"
                })
            },
            200),
            s.data("modal", r),
            s.data("resize", i),
            e(window).on("resize", i)
        }
    },
    r = function(t) {
        var i, a, n = e(t);
        n.css("opacity", ""),
        i = n.data("modal"),
        a = n.data("resize"),
        a && e(window).off("resize", a),
        i && i.remove()
    };
    IPLAT.disabled = o,
    IPLAT.enabled = r
} (window.jQuery);
//# sourceMappingURL=iplat.ui.min.js.map
