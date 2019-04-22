/* src/components/StatusBadge.html generated by Svelte v2.16.1 */
(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() :
	typeof define === "function" && define.amd ? define(factory) :
	(global.StatusBadge = factory());
}(this, (function () { "use strict";

	function data() {
    return {
        text: '',
        status: 'na',
        pressed: false,
    }
};

	var methods = {
    onClick(e) {
        this.fire('click', e);
    },
    onMouseDown() {
        this.set({pressed: true});
    },
    onMouseUp() {
        this.set({pressed: false});
    },
};

	function add_css() {
		var style = createElement("style");
		style.id = 'svelte-m8o9pi-style';
		style.textContent = ".card.svelte-m8o9pi{display:inline-block;cursor:pointer}.status.svelte-m8o9pi{border:lightgray 1px solid;padding:1em;border-radius:0.5em;display:flex;box-shadow:darkgray 0 0 0.1em;background-color:white;align-items:center}.pressed.svelte-m8o9pi{box-shadow:inset darkgray 0 0 0.2em !important}.status.svelte-m8o9pi>.text.svelte-m8o9pi{text-transform:uppercase;font-family:Arial, Helvetica, sans-serif;padding-left:0.5em}.circle.svelte-m8o9pi{width:1em;height:1em;border-radius:0.5em}.ok.svelte-m8o9pi{background-color:limegreen}.failed.svelte-m8o9pi{background-color:crimson}.fail.svelte-m8o9pi{background-color:crimson}.na.svelte-m8o9pi{background-color:darkgray}.pending.svelte-m8o9pi{background-color:gray;animation:svelte-m8o9pi-blinker 1s linear infinite}@keyframes svelte-m8o9pi-blinker{50%{opacity:0}}";
		append(document.head, style);
	}

	function create_main_fragment(component, ctx) {
		var div3, div2, div0, div0_class_value, text0, div1, text1, div2_class_value;

		function click_handler(event) {
			component.onClick(event);
		}

		function mousedown_handler(event) {
			component.onMouseDown();
		}

		function mouseup_handler(event) {
			component.onMouseUp();
		}

		return {
			c() {
				div3 = createElement("div");
				div2 = createElement("div");
				div0 = createElement("div");
				text0 = createText("\n        ");
				div1 = createElement("div");
				text1 = createText(ctx.text);
				div0.className = div0_class_value = "circle " + ctx.status + " svelte-m8o9pi";
				div1.className = "text svelte-m8o9pi";
				div2.className = div2_class_value = "status " + (ctx.pressed ? 'pressed' : '') + " svelte-m8o9pi";
				addListener(div3, "click", click_handler);
				addListener(div3, "mousedown", mousedown_handler);
				addListener(div3, "mouseup", mouseup_handler);
				div3.className = "card svelte-m8o9pi";
			},

			m(target, anchor) {
				insert(target, div3, anchor);
				append(div3, div2);
				append(div2, div0);
				append(div2, text0);
				append(div2, div1);
				append(div1, text1);
			},

			p(changed, ctx) {
				if ((changed.status) && div0_class_value !== (div0_class_value = "circle " + ctx.status + " svelte-m8o9pi")) {
					div0.className = div0_class_value;
				}

				if (changed.text) {
					setData(text1, ctx.text);
				}

				if ((changed.pressed) && div2_class_value !== (div2_class_value = "status " + (ctx.pressed ? 'pressed' : '') + " svelte-m8o9pi")) {
					div2.className = div2_class_value;
				}
			},

			d(detach) {
				if (detach) {
					detachNode(div3);
				}

				removeListener(div3, "click", click_handler);
				removeListener(div3, "mousedown", mousedown_handler);
				removeListener(div3, "mouseup", mouseup_handler);
			}
		};
	}

	function StatusBadge(options) {
		init(this, options);
		this._state = assign(data(), options.data);
		this._intro = true;

		if (!document.getElementById("svelte-m8o9pi-style")) add_css();

		this._fragment = create_main_fragment(this, this._state);

		if (options.target) {
			this._fragment.c();
			this._mount(options.target, options.anchor);
		}
	}

	assign(StatusBadge.prototype, {
	 	destroy: destroy,
	 	get: get,
	 	fire: fire,
	 	on: on,
	 	set: set,
	 	_set: _set,
	 	_stage: _stage,
	 	_mount: _mount,
	 	_differs: _differs
	 });
	assign(StatusBadge.prototype, methods);

	StatusBadge.prototype._recompute = noop;

	function createElement(name) {
		return document.createElement(name);
	}

	function append(target, node) {
		target.appendChild(node);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function addListener(node, event, handler, options) {
		node.addEventListener(event, handler, options);
	}

	function insert(target, node, anchor) {
		target.insertBefore(node, anchor);
	}

	function setData(text, data) {
		text.data = '' + data;
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function removeListener(node, event, handler, options) {
		node.removeEventListener(event, handler, options);
	}

	function init(component, options) {
		component._handlers = blankObject();
		component._slots = blankObject();
		component._bind = options._bind;
		component._staged = {};

		component.options = options;
		component.root = options.root || component;
		component.store = options.store || component.root.store;

		if (!options.root) {
			component._beforecreate = [];
			component._oncreate = [];
			component._aftercreate = [];
		}
	}

	function assign(tar, src) {
		for (var k in src) tar[k] = src[k];
		return tar;
	}

	function destroy(detach) {
		this.destroy = noop;
		this.fire('destroy');
		this.set = noop;

		this._fragment.d(detach !== false);
		this._fragment = null;
		this._state = {};
	}

	function get() {
		return this._state;
	}

	function fire(eventName, data) {
		var handlers =
			eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			var handler = handlers[i];

			if (!handler.__calling) {
				try {
					handler.__calling = true;
					handler.call(this, data);
				} finally {
					handler.__calling = false;
				}
			}
		}
	}

	function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	}

	function set(newState) {
		this._set(assign({}, newState));
		if (this.root._lock) return;
		flush(this.root);
	}

	function _set(newState) {
		var oldState = this._state,
			changed = {},
			dirty = false;

		newState = assign(this._staged, newState);
		this._staged = {};

		for (var key in newState) {
			if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
		}
		if (!dirty) return;

		this._state = assign(assign({}, oldState), newState);
		this._recompute(changed, this._state);
		if (this._bind) this._bind(changed, this._state);

		if (this._fragment) {
			this.fire("state", { changed: changed, current: this._state, previous: oldState });
			this._fragment.p(changed, this._state);
			this.fire("update", { changed: changed, current: this._state, previous: oldState });
		}
	}

	function _stage(newState) {
		assign(this._staged, newState);
	}

	function _mount(target, anchor) {
		this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
	}

	function _differs(a, b) {
		return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
	}

	function noop() {}

	function blankObject() {
		return Object.create(null);
	}

	function flush(component) {
		component._lock = true;
		callAll(component._beforecreate);
		callAll(component._oncreate);
		callAll(component._aftercreate);
		component._lock = false;
	}

	function callAll(fns) {
		while (fns && fns.length) fns.shift()();
	}

	return StatusBadge;

})));