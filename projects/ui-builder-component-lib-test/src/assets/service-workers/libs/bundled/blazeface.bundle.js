/*! For license information please see blazeface.bundle.js.LICENSE.txt */
var blazeface;
(() => {
  var t = {
      92737: (t, e, n) => {
        'use strict';
        var r, s;
        n.d(e, { p: () => r }),
          (function (t) {
            (t[(t.DT_INVALID = 0)] = 'DT_INVALID'),
              (t[(t.DT_FLOAT = 1)] = 'DT_FLOAT'),
              (t[(t.DT_DOUBLE = 2)] = 'DT_DOUBLE'),
              (t[(t.DT_INT32 = 3)] = 'DT_INT32'),
              (t[(t.DT_UINT8 = 4)] = 'DT_UINT8'),
              (t[(t.DT_INT16 = 5)] = 'DT_INT16'),
              (t[(t.DT_INT8 = 6)] = 'DT_INT8'),
              (t[(t.DT_STRING = 7)] = 'DT_STRING'),
              (t[(t.DT_COMPLEX64 = 8)] = 'DT_COMPLEX64'),
              (t[(t.DT_INT64 = 9)] = 'DT_INT64'),
              (t[(t.DT_BOOL = 10)] = 'DT_BOOL'),
              (t[(t.DT_QINT8 = 11)] = 'DT_QINT8'),
              (t[(t.DT_QUINT8 = 12)] = 'DT_QUINT8'),
              (t[(t.DT_QINT32 = 13)] = 'DT_QINT32'),
              (t[(t.DT_BFLOAT16 = 14)] = 'DT_BFLOAT16'),
              (t[(t.DT_QINT16 = 15)] = 'DT_QINT16'),
              (t[(t.DT_QUINT16 = 16)] = 'DT_QUINT16'),
              (t[(t.DT_UINT16 = 17)] = 'DT_UINT16'),
              (t[(t.DT_COMPLEX128 = 18)] = 'DT_COMPLEX128'),
              (t[(t.DT_HALF = 19)] = 'DT_HALF'),
              (t[(t.DT_RESOURCE = 20)] = 'DT_RESOURCE'),
              (t[(t.DT_VARIANT = 21)] = 'DT_VARIANT'),
              (t[(t.DT_UINT32 = 22)] = 'DT_UINT32'),
              (t[(t.DT_UINT64 = 23)] = 'DT_UINT64'),
              (t[(t.DT_FLOAT_REF = 101)] = 'DT_FLOAT_REF'),
              (t[(t.DT_DOUBLE_REF = 102)] = 'DT_DOUBLE_REF'),
              (t[(t.DT_INT32_REF = 103)] = 'DT_INT32_REF'),
              (t[(t.DT_UINT8_REF = 104)] = 'DT_UINT8_REF'),
              (t[(t.DT_INT16_REF = 105)] = 'DT_INT16_REF'),
              (t[(t.DT_INT8_REF = 106)] = 'DT_INT8_REF'),
              (t[(t.DT_STRING_REF = 107)] = 'DT_STRING_REF'),
              (t[(t.DT_COMPLEX64_REF = 108)] = 'DT_COMPLEX64_REF'),
              (t[(t.DT_INT64_REF = 109)] = 'DT_INT64_REF'),
              (t[(t.DT_BOOL_REF = 110)] = 'DT_BOOL_REF'),
              (t[(t.DT_QINT8_REF = 111)] = 'DT_QINT8_REF'),
              (t[(t.DT_QUINT8_REF = 112)] = 'DT_QUINT8_REF'),
              (t[(t.DT_QINT32_REF = 113)] = 'DT_QINT32_REF'),
              (t[(t.DT_BFLOAT16_REF = 114)] = 'DT_BFLOAT16_REF'),
              (t[(t.DT_QINT16_REF = 115)] = 'DT_QINT16_REF'),
              (t[(t.DT_QUINT16_REF = 116)] = 'DT_QUINT16_REF'),
              (t[(t.DT_UINT16_REF = 117)] = 'DT_UINT16_REF'),
              (t[(t.DT_COMPLEX128_REF = 118)] = 'DT_COMPLEX128_REF'),
              (t[(t.DT_HALF_REF = 119)] = 'DT_HALF_REF'),
              (t[(t.DT_RESOURCE_REF = 120)] = 'DT_RESOURCE_REF'),
              (t[(t.DT_VARIANT_REF = 121)] = 'DT_VARIANT_REF'),
              (t[(t.DT_UINT32_REF = 122)] = 'DT_UINT32_REF'),
              (t[(t.DT_UINT64_REF = 123)] = 'DT_UINT64_REF');
          })(r || (r = {})),
          (function (t) {
            let e;
            !(function (t) {
              (t[(t.LEGACY = 0)] = 'LEGACY'), (t[(t.V1 = 1)] = 'V1'), (t[(t.V2 = 2)] = 'V2');
            })((e = t.CheckpointFormatVersion || (t.CheckpointFormatVersion = {})));
          })(s || (s = {}));
      },
      43342: (t, e, n) => {
        'use strict';
        n.d(e, { a: () => r });
        class r {
          constructor(t = {}, e = {}, n = {}, r = {}, s) {
            (this.weightMap = t),
              (this.tensorArrayMap = e),
              (this.tensorListMap = n),
              (this.functionMap = r),
              (this.parseNodeNameCache = s),
              (this.rootContext = { id: 0, frameName: '', iterationId: 0 }),
              (this.contexts = [this.rootContext]),
              (this.lastId = 0),
              this.generateCurrentContextIds();
          }
          newFrame(t, e) {
            return { id: t, frameName: e, iterationId: 0 };
          }
          set currentContext(t) {
            this.contexts !== t && ((this.contexts = t), this.generateCurrentContextIds());
          }
          get currentContext() {
            return this.contexts;
          }
          get currentContextId() {
            return this._currentContextIds[0];
          }
          get currentContextIds() {
            return this._currentContextIds;
          }
          generateCurrentContextIds() {
            const t = [];
            for (let e = 0; e < this.contexts.length - 1; e++) {
              const n = this.contexts.slice(0, this.contexts.length - e);
              t.push(this.contextIdforContexts(n));
            }
            t.push(''), (this._currentContextIds = t);
          }
          contextIdforContexts(t) {
            return t ? t.map((t) => (0 === t.id && 0 === t.iterationId ? '' : `${t.frameName}-${t.iterationId}`)).join('/') : '';
          }
          enterFrame(t) {
            this.contexts &&
              (this.lastId++,
              (this.contexts = this.contexts.slice()),
              this.contexts.push(this.newFrame(this.lastId, t)),
              this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)));
          }
          exitFrame() {
            if (!(this.contexts && this.contexts.length > 1)) throw new Error('Cannot exit frame, the context is empty');
            (this.contexts = this.contexts.slice()), this.contexts.splice(-1), this.currentContextIds.shift();
          }
          nextIteration() {
            if (!(this.contexts && this.contexts.length > 0)) throw new Error('Cannot increase frame iteration, the context is empty');
            {
              (this.contexts = this.contexts.slice()), this.lastId++;
              const t = Object.assign({}, this.contexts[this.contexts.length - 1]);
              (t.iterationId += 1), (t.id = this.lastId), this.contexts.splice(-1, 1, t), this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts));
            }
          }
          getWeight(t) {
            return this.weightMap[t];
          }
          addTensorArray(t) {
            this.tensorArrayMap[t.id] = t;
          }
          getTensorArray(t) {
            return this.tensorArrayMap[t];
          }
          addTensorList(t) {
            this.tensorListMap[t.id] = t;
          }
          getTensorList(t) {
            return this.tensorListMap[t];
          }
          dispose(t) {
            for (const e in this.tensorArrayMap) this.tensorArrayMap[e].clearAndClose(t);
            for (const e in this.tensorListMap) this.tensorListMap[e].clearAndClose(t);
          }
        }
      },
      33154: (t, e, n) => {
        'use strict';
        n.d(e, { U: () => l });
        var r = n(9495),
          s = n(6439),
          a = n(79856),
          o = n(43342),
          i = n(96454),
          u = n(96763);
        class l {
          get weightIds() {
            return this.parent ? this.parent.weightIds : this._weightIds;
          }
          get functionExecutorMap() {
            return this.parent ? this.parent.functionExecutorMap : this._functionExecutorMap;
          }
          get weightMap() {
            return this.parent ? this.parent.weightMap : this._weightMap;
          }
          set weightMap(t) {
            const e = Object.keys(t).map((e) => t[e].map((t) => t.id));
            (this._weightIds = [].concat(...e)), (this._weightMap = t);
          }
          set resourceManager(t) {
            this._resourceManager = t;
          }
          get inputs() {
            return this._inputs.map((t) => ({
              name: t.name,
              shape: t.attrParams.shape ? t.attrParams.shape.value : void 0,
              dtype: t.attrParams.dtype ? t.attrParams.dtype.value : void 0,
            }));
          }
          get outputs() {
            return this._outputs.map((t) => ({
              name: t.name,
              shape: t.attrParams.shape ? t.attrParams.shape.value : void 0,
              dtype: t.attrParams.dtype ? t.attrParams.dtype.value : void 0,
            }));
          }
          get inputNodes() {
            return this._inputs.map((t) => t.signatureKey || t.name);
          }
          get outputNodes() {
            return this._outputs.map((t) => {
              const e = t.signatureKey || t.name;
              return t.defaultOutput ? `${e}:${t.defaultOutput}` : e;
            });
          }
          get functions() {
            return Object.keys(this._functions).reduce((t, e) => ((t[e] = this._functions[e].signature), t), {});
          }
          constructor(t, e) {
            (this.graph = t),
              (this.parent = e),
              (this.compiledMap = new Map()),
              (this.parseNodeNameCache = new Map()),
              (this._weightMap = {}),
              (this.SEPARATOR = ','),
              (this._functions = {}),
              (this._functionExecutorMap = {}),
              (this.keepIntermediateTensors = !1),
              (this._outputs = t.outputs),
              (this._inputs = t.inputs),
              (this._initNodes = t.initNodes),
              (this._signature = t.signature),
              (this._functions = t.functions),
              null != t.functions &&
                Object.keys(t.functions).forEach((e) => {
                  this._functionExecutorMap[e] = new l(t.functions[e], this);
                });
          }
          getCompilationKey(t, e) {
            const n = t.map((t) => t.name).sort(),
              r = e.map((t) => t.name).sort();
            return n.join(this.SEPARATOR) + '--' + r.join(this.SEPARATOR);
          }
          compile(t, e) {
            const n = (0, i.r7)(t, e, this.weightMap, this._initNodes),
              { missingInputs: r, dynamicNode: s, syncInputs: a } = n;
            if (null != s)
              throw new Error(
                `This execution contains the node '${s.name}', which has the dynamic op '${s.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${a}]`,
              );
            if (r.length > 0) {
              const n = e.map((t) => t.name),
                s = Object.keys(t);
              throw new Error(`Cannot compute the outputs [${n}] from the provided inputs [${s}]. Missing the following inputs: [${r}]`);
            }
            const o = (0, i.I)(this.graph, n);
            return { orderedNodes: o, nodeLiveUntilMap: (0, i.n8)(o) };
          }
          cloneAndKeepTensor(t) {
            if (null == t) return null;
            const e = t.clone();
            return (0, r.keep)(e), e;
          }
          cloneTensorList(t) {
            return t ? t.map((t) => this.cloneAndKeepTensor(t)) : null;
          }
          cloneTensorMap(t) {
            return Object.fromEntries(Object.entries(t).map(([t, e]) => [t, this.cloneTensorList(e)]));
          }
          execute(t, e) {
            this.disposeIntermediateTensors(), (t = this.mapInputs(t));
            const n = Object.keys(t).sort();
            this.checkInputs(t), this.checkInputShapeAndType(t), (e = this.mapOutputs(e)), this.checkOutputs(e);
            const i = n.map((t) => this.graph.nodes[(0, s.Xi)(t)[0]]),
              l = e.map((t) => (0, s.Xi)(t)[0]),
              c = new Set(l);
            let p = l.map((t) => this.graph.nodes[t]);
            0 === p.length && (p = this._outputs);
            const d = this.getCompilationKey(i, p);
            let h = this.compiledMap.get(d);
            null == h && ((h = this.compile(t, p)), this.compiledMap.set(d, h));
            try {
              this.keepIntermediateTensors = (0, r.env)().getBool('KEEP_INTERMEDIATE_TENSORS');
            } catch (t) {
              (this.keepIntermediateTensors = !1), u.warn(t.message);
            }
            const f = {},
              m = {};
            return (0, r.tidy)(() => {
              const n = new o.a(this.weightMap, f, m, this.functionExecutorMap, this.parseNodeNameCache),
                i = Object.assign({}, this.weightMap);
              this.keepIntermediateTensors && (this.clonedTensorsMap = this.cloneTensorMap(this.weightMap)),
                Object.keys(t).forEach((e) => {
                  const [r, a] = (0, s.Xi)(e, n),
                    o = [];
                  (o[a] = t[e]), (i[r] = o), this.keepIntermediateTensors && (this.clonedTensorsMap[r] = this.cloneTensorList(o));
                });
              const u = this.getFrozenTensorIds(i),
                { orderedNodes: l, nodeLiveUntilMap: p } = h;
              for (const t of l) {
                if (i[t.name]) continue;
                const e = (0, a.j)(t, i, n, this._resourceManager);
                if (r.util.isPromise(e)) throw new Error(`The execution of the op '${t.op}' returned a promise. Please use model.executeAsync() instead.`);
                (i[t.name] = e),
                  this.keepIntermediateTensors && (this.clonedTensorsMap[t.name] = this.cloneTensorList(e)),
                  this.checkTensorForDisposalWithNodeLiveUntilInfo(t, i, n, u, c, p.get(t.name));
              }
              return null == this.parent && n.dispose(u), e.map((t) => (0, s.cS)(t, i, n));
            });
          }
          getFrozenTensorIds(t) {
            const e = [].concat.apply(
              [],
              Object.keys(t)
                .map((e) => t[e])
                .map((t) => t.map((t) => t.id)),
            );
            return new Set(e);
          }
          checkTensorForDisposal(t, e, n, r, a, o, u) {
            if (!(0, i.Uy)(e) && !o.has(t)) {
              for (const r of n[t]) null != r && (u[r.id] = (u[r.id] || 0) + e.children.length);
              for (const t of e.inputs) {
                if ((0, i.Uy)(t)) continue;
                const e = (0, s.cI)(t.name, n, r);
                if (null != e)
                  for (const t of e) {
                    if (!t || t.kept || a.has(t.id)) continue;
                    const e = u[t.id];
                    1 === e ? (t.dispose(), delete u[t.id]) : null != e && u[t.id]--;
                  }
              }
            }
          }
          checkTensorForDisposalWithNodeLiveUntilInfo(t, e, n, r, a, o) {
            function u(t) {
              return (0, i.Uy)(t) || a.has(t.name);
            }
            if (!(0, i.Uy)(t) && null != o)
              for (const t of o) {
                if (u(t)) continue;
                const a = (0, s.cI)(t.name, e, n);
                for (const t of a) !t || t.kept || r.has(t.id) || t.dispose();
              }
          }
          async executeAsync(t, e) {
            return this._executeAsync(t, e);
          }
          disposeIntermediateTensors() {
            this.clonedTensorsMap &&
              (Object.values(this.clonedTensorsMap).forEach((t) => {
                for (const e of t) e && !e.isDisposed && e.dispose();
              }),
              (this.clonedTensorsMap = null));
          }
          getIntermediateTensors() {
            return this.clonedTensorsMap;
          }
          async _executeAsync(t, e, n = !1, a = {}, i = {}) {
            this.disposeIntermediateTensors(), n || ((t = this.mapInputs(t)), this.checkInputs(t), this.checkInputShapeAndType(t), (e = this.mapOutputs(e)), this.checkOutputs(e));
            try {
              this.keepIntermediateTensors = (0, r.env)().getBool('KEEP_INTERMEDIATE_TENSORS');
            } catch (t) {
              (this.keepIntermediateTensors = !1), u.warn(t.message);
            }
            const l = new o.a(this.weightMap, a, i, this.functionExecutorMap, this.parseNodeNameCache);
            this.keepIntermediateTensors && (this.clonedTensorsMap = this.cloneTensorMap(this.weightMap));
            const c = await this.executeWithControlFlow(t, l, e, n),
              p = e.map((t) => (0, s.cS)(t, c, l)),
              d = p.map((t) => t.id),
              h = Object.keys(t).map((e) => t[e].id),
              f = new Set([...d, ...h, ...this.weightIds]);
            return (
              Object.values(c).forEach((t) => {
                t.forEach((t) => {
                  !t || t.isDisposed || f.has(t.id) || t.dispose();
                });
              }),
              null == this.parent && l.dispose(f),
              p
            );
          }
          async executeFunctionAsync(t, e, n) {
            const r = t.reduce((t, e, n) => ((t[this.inputs[n].name] = e), t), {});
            return this._executeAsync(r, this.outputNodes, !0, e, n);
          }
          async executeWithControlFlow(t, e, n, r) {
            const a = Object.keys(t),
              o = a.map((t) => this.graph.nodes[(0, s.Xi)(t)[0]]),
              l = n.map((t) => (0, s.Xi)(t)[0]),
              c = new Set(l);
            let p = l.map((t) => this.graph.nodes[t]);
            0 === p.length && (p = this._outputs);
            const { usedNodes: d, missingInputs: h, dynamicNode: f, syncInputs: m } = (0, i.r7)(t, p, this.weightMap, this._initNodes),
              g = [...o, ...this.graph.weights, ...(this._initNodes || [])].map((t) => ({ node: t, contexts: e.currentContext })),
              y = Object.assign({}, this.weightMap);
            Object.keys(t).forEach((e) => {
              const [n, r] = (0, s.Xi)(e),
                a = [];
              (a[r] = t[e]), (y[n] = a);
            });
            const b = {},
              v = this.getFrozenTensorIds(y),
              w = {};
            for (; g.length > 0; ) {
              const t = this.processStack(o, g, e, y, w, v, c, b, d);
              await Promise.all(t);
            }
            null != f || r || u.warn('This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.');
            const T = p.filter((t) => !(0, i.Uy)(t) && !(0, s.cS)(t.name, y, e)).map((t) => t.name);
            if (T.length > 0) {
              let t = '';
              throw (
                (null != f && (t = `Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${m}]`),
                new Error(`Cannot compute the outputs [${T}] from the provided inputs [${a}]. Consider providing the following inputs: [${h}]. ${t}`))
              );
            }
            return y;
          }
          processStack(t, e, n, o, i, u, l, c, p) {
            const d = [];
            for (; e.length > 0; ) {
              const t = e.pop();
              n.currentContext = t.contexts;
              let h = '';
              if (('Enter' === t.node.op && (0, s.Zg)('isConstant', t.node, o, n) && ([h] = (0, s.lz)(t.node.name, n)), null == o[t.node.name])) {
                const f = (0, a.j)(t.node, o, n, this._resourceManager);
                h || ([h] = (0, s.lz)(t.node.name, n));
                const m = n.currentContext;
                r.util.isPromise(f)
                  ? d.push(
                      f.then(
                        (r) => (
                          (o[h] = r),
                          this.keepIntermediateTensors && (this.clonedTensorsMap[h] = this.cloneTensorList(r)),
                          (n.currentContext = m),
                          this.checkTensorForDisposal(h, t.node, o, n, u, l, c),
                          this.processChildNodes(t.node, e, n, o, i, p),
                          r
                        ),
                      ),
                    )
                  : ((o[h] = f),
                    this.keepIntermediateTensors && (this.clonedTensorsMap[h] = this.cloneTensorList(f)),
                    this.checkTensorForDisposal(h, t.node, o, n, u, l, c),
                    this.processChildNodes(t.node, e, n, o, i, p));
              } else this.processChildNodes(t.node, e, n, o, i, p);
            }
            return d;
          }
          processChildNodes(t, e, n, r, a, o) {
            t.children.forEach((t) => {
              const [i] = (0, s.lz)(t.name, n);
              !a[i] &&
                o.has(t.name) &&
                ('Merge' === t.op
                  ? t.inputNames.some((t) => !!(0, s.cS)(t, r, n)) && ((a[i] = !0), e.push({ contexts: n.currentContext, node: t }))
                  : t.inputNames.every((t) => !!(0, s.cS)(t, r, n)) && ((a[i] = !0), e.push({ contexts: n.currentContext, node: t })));
            });
          }
          dispose() {
            Object.keys(this.weightMap).forEach((t) => this.weightMap[t].forEach((t) => t.dispose()));
          }
          checkInputShapeAndType(t) {
            Object.keys(t).forEach((e) => {
              const n = t[e],
                [a] = (0, s.Xi)(e),
                o = this.graph.nodes[a];
              if (o.attrParams.shape && o.attrParams.shape.value) {
                const t = o.attrParams.shape.value,
                  e = t.length === n.shape.length && n.shape.every((e, n) => -1 === t[n] || t[n] === e);
                r.util.assert(e, () => `The shape of dict['${o.name}'] provided in model.execute(dict) must be [${t}], but was [${n.shape}]`);
              }
              o.attrParams.dtype &&
                o.attrParams.dtype.value &&
                r.util.assert(
                  n.dtype === o.attrParams.dtype.value,
                  () => `The dtype of dict['${o.name}'] provided in model.execute(dict) must be ${o.attrParams.dtype.value}, but was ${n.dtype}`,
                );
            });
          }
          mapInputs(t) {
            var e, n;
            const r = {};
            for (const s in t) {
              const a = null === (n = null === (e = this._signature) || void 0 === e ? void 0 : e.inputs) || void 0 === n ? void 0 : n[s];
              null != a ? (r[a.name] = t[s]) : (r[s] = t[s]);
            }
            return r;
          }
          checkInputs(t) {
            const e = Object.keys(t).filter((t) => {
              const [e] = (0, s.Xi)(t);
              return null == this.graph.nodes[e];
            });
            if (e.length > 0) throw new Error(`The dict provided in model.execute(dict) has keys: [${e}] that are not part of graph`);
          }
          mapOutputs(t) {
            return t.map((t) => {
              var e, n;
              const r = null === (n = null === (e = this._signature) || void 0 === e ? void 0 : e.outputs) || void 0 === n ? void 0 : n[t];
              return null != r ? r.name : t;
            }, {});
          }
          checkOutputs(t) {
            t.forEach((t) => {
              const [e] = (0, s.Xi)(t);
              if (!this.graph.nodes[e]) throw new Error(`The output '${t}' is not found in the graph`);
            });
          }
        }
      },
      79170: (t, e, n) => {
        'use strict';
        n.d(e, { R9: () => d, k7: () => c, ox: () => p });
        var r = n(9495),
          s = n(18520),
          a = n(33154),
          o = n(88154),
          i = n(77084);
        const u = '?tfjs-format=file',
          l = 'model.json';
        class c {
          get modelVersion() {
            return this.version;
          }
          get inputNodes() {
            return this.executor.inputNodes;
          }
          get outputNodes() {
            return this.executor.outputNodes;
          }
          get inputs() {
            return this.executor.inputs;
          }
          get outputs() {
            return this.executor.outputs;
          }
          get weights() {
            return this.executor.weightMap;
          }
          get metadata() {
            return this.artifacts.userDefinedMetadata;
          }
          get modelSignature() {
            return this.signature;
          }
          get modelStructuredOutputKeys() {
            return this.structuredOutputKeys;
          }
          constructor(t, e = {}, n = r.io) {
            (this.modelUrl = t), (this.loadOptions = e), (this.version = 'n/a'), (this.io = n), null == e && (this.loadOptions = {}), (this.resourceManager = new o.Q());
          }
          findIOHandler() {
            const t = this.modelUrl;
            if (null != t.load) this.handler = t;
            else if (null != this.loadOptions.requestInit) this.handler = this.io.browserHTTPRequest(t, this.loadOptions);
            else {
              const e = this.io.getLoadHandlers(t, this.loadOptions);
              if (0 === e.length) e.push(this.io.browserHTTPRequest(t, this.loadOptions));
              else if (e.length > 1) throw new Error(`Found more than one (${e.length}) load handlers for URL '${[t]}'`);
              this.handler = e[0];
            }
          }
          load() {
            if ((this.findIOHandler(), null == this.handler.load))
              throw new Error('Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.');
            const t = this.handler.load();
            return r.util.isPromise(t) ? t.then((t) => (null == t.getWeightStream ? this.loadSync(t) : this.loadStreaming(t))) : this.loadSync(t);
          }
          loadSync(t) {
            const e = this.io.decodeWeights(t.weightData, t.weightSpecs);
            return this.loadWithWeightMap(t, e);
          }
          async loadStreaming(t) {
            if (null == t.getWeightStream) throw new Error('Model artifacts missing streamWeights function');
            const e = await (0, i.s5)(t.getWeightStream(), t.weightSpecs);
            return this.loadWithWeightMap(t, e);
          }
          loadWithWeightMap(t, e) {
            this.artifacts = t;
            const n = this.artifacts.modelTopology;
            let r = this.artifacts.signature;
            if (null != this.artifacts.userDefinedMetadata) {
              const t = this.artifacts.userDefinedMetadata;
              null != t.signature && (r = t.signature), null != t.structuredOutputKeys && (this.structuredOutputKeys = t.structuredOutputKeys);
            }
            if (
              ((this.signature = r),
              (this.version = `${n.versions.producer}.${n.versions.minConsumer}`),
              (this.executor = new a.U(s.bo.Instance.transformGraph(n, this.signature))),
              (this.executor.weightMap = this.convertTensorMapToTensorsMap(e)),
              (this.executor.resourceManager = this.resourceManager),
              null != t.modelInitializer && null != t.modelInitializer.node)
            ) {
              const e = s.bo.Instance.transformGraph(t.modelInitializer);
              (this.initializer = new a.U(e)),
                (this.initializer.weightMap = this.executor.weightMap),
                (this.initializer.resourceManager = this.resourceManager),
                (this.initializerSignature = t.initializerSignature);
            }
            return !0;
          }
          async save(t, e) {
            if ('string' == typeof t) {
              const e = this.io.getSaveHandlers(t);
              if (0 === e.length) throw new Error(`Cannot find any save handlers for URL '${t}'`);
              if (e.length > 1) throw new Error(`Found more than one (${e.length}) save handlers for URL '${t}'`);
              t = e[0];
            }
            if (null == t.save) throw new Error('GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.');
            return t.save(this.artifacts);
          }
          addStructuredOutputNames(t) {
            if (this.structuredOutputKeys) {
              const e = t instanceof r.Tensor ? [t] : t,
                n = {};
              return e.forEach((t, e) => (n[this.structuredOutputKeys[e]] = t)), n;
            }
            return t;
          }
          predict(t, e) {
            const n = this.execute(t, this.outputNodes);
            return this.addStructuredOutputNames(n);
          }
          async predictAsync(t, e) {
            const n = await this.executeAsync(t, this.outputNodes);
            return this.addStructuredOutputNames(n);
          }
          normalizeInputs(t) {
            var e;
            if (!(t instanceof r.Tensor || Array.isArray(t))) {
              const n = null === (e = this.signature) || void 0 === e ? void 0 : e.inputs;
              if (null != n)
                for (const e in n) {
                  const r = n[e];
                  null != r.resourceId && (t[e] = this.resourceIdToCapturedInput[r.resourceId]);
                }
              return t;
            }
            t = Array.isArray(t) ? t : [t];
            const n = Object.keys(this.resourceIdToCapturedInput).length;
            if (t.length + n !== this.inputNodes.length)
              throw new Error(
                `Input tensor count mismatch, the graph model has ${this.inputNodes.length - n} non-resource placeholders, while there are ${t.length} input tensors provided.`,
              );
            let s = 0;
            return this.inputNodes.reduce((e, n) => {
              var r, a, o;
              const i =
                null === (o = null === (a = null === (r = this.signature) || void 0 === r ? void 0 : r.inputs) || void 0 === a ? void 0 : a[n]) || void 0 === o
                  ? void 0
                  : o.resourceId;
              return (e[n] = null != i ? this.resourceIdToCapturedInput[i] : t[s++]), e;
            }, {});
          }
          normalizeOutputs(t) {
            return (t = t || this.outputNodes), Array.isArray(t) ? t : [t];
          }
          executeInitializerGraph() {
            return null == this.initializer
              ? []
              : null == this.initializerSignature
                ? this.initializer.execute({}, [])
                : this.initializer.execute({}, Object.keys(this.initializerSignature.outputs));
          }
          async executeInitializerGraphAsync() {
            return null == this.initializer
              ? []
              : null == this.initializerSignature
                ? this.initializer.executeAsync({}, [])
                : this.initializer.executeAsync({}, Object.keys(this.initializerSignature.outputs));
          }
          setResourceIdToCapturedInput(t) {
            if (((this.resourceIdToCapturedInput = {}), this.initializerSignature)) {
              const e = this.initializerSignature.outputs,
                n = Object.keys(e);
              for (let r = 0; r < n.length; r++) {
                const s = e[n[r]];
                this.resourceIdToCapturedInput[s.resourceId] = t[r];
              }
            }
          }
          execute(t, e) {
            null == this.resourceIdToCapturedInput && this.setResourceIdToCapturedInput(this.executeInitializerGraph()),
              (t = this.normalizeInputs(t)),
              (e = this.normalizeOutputs(e));
            const n = this.executor.execute(t, e);
            return n.length > 1 ? n : n[0];
          }
          async executeAsync(t, e) {
            null == this.resourceIdToCapturedInput && this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),
              (t = this.normalizeInputs(t)),
              (e = this.normalizeOutputs(e));
            const n = await this.executor.executeAsync(t, e);
            return n.length > 1 ? n : n[0];
          }
          getIntermediateTensors() {
            return this.executor.getIntermediateTensors();
          }
          disposeIntermediateTensors() {
            this.executor.disposeIntermediateTensors();
          }
          convertTensorMapToTensorsMap(t) {
            return Object.keys(t).reduce((e, n) => ((e[n] = [t[n]]), e), {});
          }
          dispose() {
            this.executor.dispose(),
              this.initializer && (this.initializer.dispose(), this.resourceIdToCapturedInput && (0, r.dispose)(this.resourceIdToCapturedInput)),
              this.resourceManager.dispose();
          }
        }
        async function p(t, e = {}, n = r.io) {
          if (null == t) throw new Error('modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model');
          null == e && (e = {}),
            e.fromTFHub &&
              'string' == typeof t &&
              (t = (function (t) {
                return t.endsWith('/') || (t += '/'), `${t}${l}${u}`;
              })(t));
          const s = new c(t, e, n);
          return await s.load(), s;
        }
        function d(t) {
          if (null == t) throw new Error('modelUrl in loadGraphModelSync() cannot be null. Please provide model artifacts or an IOHandler that loads the model');
          let e;
          if (t instanceof Array) {
            const [n, s] = t;
            if (!n) throw new Error('modelJSON must be the first element of the array');
            if (!(s && s instanceof ArrayBuffer)) throw new Error('An ArrayBuffer of weights must be the second element of the array');
            if (!('modelTopology' in n)) throw new Error("Model JSON is missing 'modelTopology'");
            if (!('weightsManifest' in n)) throw new Error("Model JSON is missing 'weightsManifest'");
            const a = r.io.getWeightSpecs(n.weightsManifest),
              o = r.io.getModelArtifactsForJSONSync(n, a, s);
            e = r.io.fromMemorySync(o);
          } else if ('load' in t) e = t;
          else {
            if (!('modelTopology' in t && 'weightSpecs' in t && 'weightData' in t)) throw new Error('Unknown model format');
            e = r.io.fromMemorySync(t);
          }
          const n = new c(e);
          return n.load(), n;
        }
      },
      24853: (t, e, n) => {
        'use strict';
        n.d(e, { J: () => a });
        var r = n(9495),
          s = n(45702);
        class a {
          get id() {
            return this.handle.id;
          }
          constructor(t, e) {
            (this.keyDType = t), (this.valueDType = e), (this.handle = (0, r.scalar)(0)), (this.tensorMap = new Map()), (0, r.keep)(this.handle);
          }
          clearAndClose() {
            this.tensorMap.forEach((t) => t.dispose()), this.tensorMap.clear(), this.handle.dispose();
          }
          size() {
            return this.tensorMap.size;
          }
          tensorSize() {
            return s.d(this.size(), 'int32');
          }
          async import(t, e) {
            this.checkKeyAndValueTensor(t, e);
            const n = await t.data();
            return (
              this.tensorMap.forEach((t) => t.dispose()),
              this.tensorMap.clear(),
              (0, r.tidy)(() => {
                const t = (0, r.unstack)(e),
                  s = n.length,
                  a = t.length;
                r.util.assert(s === a, () => `The number of elements doesn't match, keys has ${s} elements, the values has ${a} elements.`);
                for (let e = 0; e < s; e++) {
                  const s = n[e],
                    a = t[e];
                  (0, r.keep)(a), this.tensorMap.set(s, a);
                }
                return this.handle;
              })
            );
          }
          async find(t, e) {
            this.checkKeyAndValueTensor(t, e);
            const n = await t.data();
            return (0, r.tidy)(() => {
              const t = [];
              for (let r = 0; r < n.length; r++) {
                const s = n[r],
                  a = this.findWithDefault(s, e);
                t.push(a);
              }
              return (0, r.stack)(t);
            });
          }
          findWithDefault(t, e) {
            const n = this.tensorMap.get(t);
            return null != n ? n : e;
          }
          checkKeyAndValueTensor(t, e) {
            if (t.dtype !== this.keyDType) throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);
            if (e.dtype !== this.valueDType) throw new Error(`Expect value dtype ${this.valueDType}, but got ${e.dtype}`);
          }
        }
      },
      96454: (t, e, n) => {
        'use strict';
        n.d(e, { I: () => a, Uy: () => p, n8: () => i, r7: () => s });
        var r = n(6439);
        function s(t, e, n, s) {
          const a = new Set(),
            o = [];
          let i = null,
            u = null;
          const l = new Set(),
            c = new Set(Object.keys(t).map((t) => (0, r.Xi)(t)[0]));
          s = s || [];
          const f = new Set(s.map((t) => (0, r.Xi)(t.name)[0])),
            m = [...e];
          for (; m.length > 0; ) {
            const t = m.pop();
            (p(t) || d(t) || h(t)) && null == i && ((i = t), (u = i.children.map((t) => t.name).filter((t) => a.has(t)))),
              a.add(t.name),
              null == n[t.name] &&
                (c.has(t.name) ||
                  f.has(t.name) ||
                  (0 !== t.inputs.length
                    ? t.inputs.forEach((t) => {
                        l.has(t.name) || (l.add(t.name), m.push(t));
                      })
                    : o.push(t.name)));
          }
          return { inputs: t, outputs: e, usedNodes: a, missingInputs: o, dynamicNode: i, syncInputs: u };
        }
        function a(t, e) {
          const { usedNodes: n, inputs: s } = e,
            a = Object.keys(s)
              .map((t) => (0, r.Xi)(t)[0])
              .map((e) => t.nodes[e]),
            i = t.initNodes || [],
            u = (t) => n.has('string' == typeof t ? t : t.name);
          function l(t) {
            return [...new Map(t.map((t) => [t.name, t])).values()];
          }
          const c = l([...a, ...t.weights, ...i]).filter(u),
            p = l([...c, ...Object.values(t.nodes)]).filter(u),
            d = new Map(p.map((t) => [t.name, t])),
            h = {};
          for (const t of p) {
            h[t.name] = h[t.name] || 0;
            for (const e of t.children) u(e) || (h[e.name] = Number.POSITIVE_INFINITY), (h[e.name] = (h[e.name] || 0) + 1);
          }
          const f = Object.entries(h)
              .filter(([, t]) => 0 === t)
              .map(([t]) => t),
            m = [...f];
          for (; f.length > 0; ) {
            const t = f.pop(),
              e = d.get(t);
            for (const t of e.children.filter(u)) 0 == --h[t.name] && (m.push(t.name), f.push(t.name));
          }
          const g = (function (t, e) {
            const n = new Map(t.map((t) => [t.name, t])),
              r = e.map((t) => t.name),
              s = new Set(r);
            for (; r.length > 0; ) {
              const t = r.pop(),
                e = n.get(t);
              for (const t of e.children) n.has(t.name) && !s.has(t.name) && (s.add(t.name), r.push(t.name));
            }
            return t.filter((t) => s.has(t.name));
          })(
            m.map((t) => d.get(t)),
            c,
          );
          return (
            (function (t, e) {
              const n = new Map(t.map((t, e) => [t.name, e])),
                r = new Set(e.map((t) => t.name)),
                s = (t) => r.has('string' == typeof t ? t : t.name),
                a = new Set(t.map((t) => t.name)),
                i = (t) => a.has('string' == typeof t ? t : t.name);
              for (const e of t) {
                for (const t of e.children.filter(i)) {
                  if (!n.has(t.name)) throw new o(`Child ${t.name} of node ${e.name} is unreachable.`);
                  if (n.get(e.name) > n.get(t.name)) throw new o(`Node ${e.name} is scheduled to run after its child ${t.name}.`);
                }
                if (!s(e))
                  for (const t of e.inputs) {
                    if (!n.has(t.name)) throw new o(`Input ${t.name} of node ${e.name} is unreachable.`);
                    if (n.get(t.name) > n.get(e.name)) throw new o(`Node ${e.name} is scheduled to run before its input ${t.name}.`);
                  }
              }
            })(g, c),
            g
          );
        }
        class o extends Error {
          constructor(t) {
            super(`NodesExecutionOrderError: ${t}`);
          }
        }
        function i(t) {
          const e = new Map(t.map((t, e) => [t.name, e])),
            n = Number.MAX_SAFE_INTEGER,
            r = t.map((t, e) => (p(t) ? n : e)),
            s = (t) => {
              const n = r[e.get(t.name)];
              return null == n ? -1 : n;
            },
            a = t.map((t, e) => t.children.map(s).reduce((t, e) => Math.max(t, e), r[e])),
            o = new Map();
          for (let e = 0; e < t.length; ++e) {
            const r = a[e];
            if (r === n) continue;
            const s = t[e],
              i = t[r];
            o.has(i.name) || o.set(i.name, []), o.get(i.name).push(s);
          }
          return o;
        }
        const u = new Set(['Switch', 'Merge', 'Enter', 'Exit', 'NextIteration', 'StatelessIf', 'StatelessWhile', 'if', 'While']),
          l = new Set(['NonMaxSuppressionV2', 'NonMaxSuppressionV3', 'NonMaxSuppressionV5', 'Where']),
          c = new Set(['HashTable', 'HashTableV2', 'LookupTableImport', 'LookupTableImportV2', 'LookupTableFind', 'LookupTableFindV2', 'LookupTableSize', 'LookupTableSizeV2']);
        function p(t) {
          return u.has(t.op);
        }
        function d(t) {
          return l.has(t.op);
        }
        function h(t) {
          return c.has(t.op);
        }
      },
      88154: (t, e, n) => {
        'use strict';
        n.d(e, { Q: () => r });
        class r {
          constructor(t = {}, e = {}) {
            (this.hashTableNameToHandle = t), (this.hashTableMap = e);
          }
          addHashTable(t, e) {
            (this.hashTableNameToHandle[t] = e.handle), (this.hashTableMap[e.id] = e);
          }
          getHashTableHandleByName(t) {
            return this.hashTableNameToHandle[t];
          }
          getHashTableById(t) {
            return this.hashTableMap[t];
          }
          dispose() {
            for (const t in this.hashTableMap) this.hashTableMap[t].clearAndClose(), delete this.hashTableMap[t];
            for (const t in this.hashTableNameToHandle) this.hashTableNameToHandle[t].dispose(), delete this.hashTableNameToHandle[t];
          }
        }
      },
      26105: (t, e, n) => {
        'use strict';
        n.d(e, { n: () => a });
        var r = n(9495),
          s = n(31321);
        class a {
          constructor(t, e, n, s, a, o, i) {
            (this.name = t),
              (this.dtype = e),
              (this.maxSize = n),
              (this.elementShape = s),
              (this.identicalElementShapes = a),
              (this.dynamicSize = o),
              (this.clearAfterRead = i),
              (this.tensors = []),
              (this.closed_ = !1),
              (this.idTensor = (0, r.scalar)(0)),
              (0, r.keep)(this.idTensor);
          }
          get id() {
            return this.idTensor.id;
          }
          get closed() {
            return this.closed_;
          }
          clearAndClose(t) {
            this.tensors.forEach((e) => {
              (null != t && t.has(e.tensor.id)) || e.tensor.dispose();
            }),
              (this.tensors = []),
              (this.closed_ = !0),
              this.idTensor.dispose();
          }
          size() {
            return this.tensors.length;
          }
          read(t) {
            if (this.closed_) throw new Error(`TensorArray ${this.name} has already been closed.`);
            if (t < 0 || t >= this.size()) throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);
            const e = this.tensors[t];
            if (e.cleared)
              throw new Error(
                `TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`,
              );
            return this.clearAfterRead && (e.cleared = !0), (e.read = !0), e.tensor;
          }
          readMany(t) {
            return t.map((t) => this.read(t));
          }
          write(t, e) {
            if (this.closed_) throw new Error(`TensorArray ${this.name} has already been closed.`);
            if (t < 0 || (!this.dynamicSize && t >= this.maxSize)) throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);
            const n = this.tensors[t] || {};
            if (e.dtype !== this.dtype)
              throw new Error(
                `TensorArray ${this.name}: Could not write to TensorArray index ${t},\n          because the value dtype is ${e.dtype}, but TensorArray dtype is ${this.dtype}.`,
              );
            if (
              (0 !== this.size() || (null != this.elementShape && 0 !== this.elementShape.length) || (this.elementShape = e.shape),
              (0, s.Wq)(this.elementShape, e.shape, `TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),
              n.read)
            )
              throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);
            if (n.written) throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);
            (n.tensor = e), (0, r.keep)(e), (n.written = !0), (this.tensors[t] = n);
          }
          writeMany(t, e) {
            if (t.length !== e.length)
              throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${e.length}.`);
            t.forEach((t, n) => this.write(t, e[n]));
          }
          gather(t, e) {
            if (e && e !== this.dtype) throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${e}`);
            if (t) t = t.slice(0, this.size());
            else {
              t = [];
              for (let e = 0; e < this.size(); e++) t.push(e);
            }
            if (0 === t.length) return (0, r.tensor)([], [0].concat(this.elementShape));
            const n = this.readMany(t);
            return (0, s.Wq)(this.elementShape, n[0].shape, 'TensorArray shape mismatch: '), (0, r.stack)(n, 0);
          }
          concat(t) {
            if (t && t !== this.dtype) throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);
            if (0 === this.size()) return (0, r.tensor)([], [0].concat(this.elementShape));
            const e = [];
            for (let t = 0; t < this.size(); t++) e.push(t);
            const n = this.readMany(e);
            return (
              (0, s.Wq)(this.elementShape, n[0].shape, `TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),
              (0, r.concat)(n, 0)
            );
          }
          scatter(t, e) {
            if (e.dtype !== this.dtype) throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);
            if (t.length !== e.shape[0]) throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);
            const n = Math.max(...t);
            if (!this.dynamicSize && n >= this.maxSize) throw new Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);
            this.writeMany(t, (0, r.unstack)(e, 0));
          }
          split(t, e) {
            if (e.dtype !== this.dtype) throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);
            let n = 0;
            const s = t.map((t) => ((n += t), n));
            if (n !== e.shape[0])
              throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${n}, and tensor's shape is: ${e.shape}`);
            if (!this.dynamicSize && t.length !== this.maxSize)
              throw new Error(
                `TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`,
              );
            const a = 0 === n ? 0 : e.size / n,
              o = [];
            (0, r.tidy)(() => {
              e = (0, r.reshape)(e, [1, n, a]);
              for (let n = 0; n < t.length; ++n) {
                const i = [0, 0 === n ? 0 : s[n - 1], 0],
                  u = [1, t[n], a];
                o[n] = (0, r.reshape)((0, r.slice)(e, i, u), this.elementShape);
              }
              return o;
            });
            const i = [];
            for (let e = 0; e < t.length; e++) i[e] = e;
            this.writeMany(i, o);
          }
        }
      },
      4282: (t, e, n) => {
        'use strict';
        n.d(e, { Tb: () => u, lD: () => l, uK: () => o, vY: () => i });
        var r = n(9495),
          s = n(31321);
        class a {
          get id() {
            return this.idTensor.id;
          }
          constructor(t, e, n, a = -1) {
            (this.tensors = t),
              (this.elementShape = e),
              (this.elementDtype = n),
              null != t &&
                t.forEach((t) => {
                  if (n !== t.dtype) throw new Error(`Invalid data types; op elements ${n}, but list elements ${t.dtype}`);
                  (0, s.Wq)(e, t.shape, 'TensorList shape mismatch: '), (0, r.keep)(t);
                }),
              (this.idTensor = (0, r.scalar)(0)),
              (this.maxNumElements = a),
              (0, r.keep)(this.idTensor);
          }
          copy() {
            return new a([...this.tensors], this.elementShape, this.elementDtype);
          }
          clearAndClose(t) {
            this.tensors.forEach((e) => {
              (null != t && t.has(e.id)) || e.dispose();
            }),
              (this.tensors.length = 0),
              this.idTensor.dispose();
          }
          size() {
            return this.tensors.length;
          }
          stack(t, e, n = -1) {
            if (e !== this.elementDtype) throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);
            if (-1 !== n && this.tensors.length !== n) throw new Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);
            (0, s.Wq)(t, this.elementShape, 'TensorList shape mismatch: ');
            const a = (0, s.E8)(this.elementShape, this.tensors, t);
            return (0, r.tidy)(() => {
              const t = this.tensors.map((t) => (0, r.reshape)(t, a));
              return (0, r.stack)(t, 0);
            });
          }
          popBack(t, e) {
            if (e !== this.elementDtype) throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);
            if (0 === this.size()) throw new Error('Trying to pop from an empty list.');
            const n = (0, s.E8)(this.elementShape, this.tensors, t),
              a = this.tensors.pop();
            return (a.kept = !1), (0, s.Wq)(a.shape, t, 'TensorList shape mismatch: '), (0, r.reshape)(a, n);
          }
          pushBack(t) {
            if (t.dtype !== this.elementDtype) throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);
            if (((0, s.Wq)(t.shape, this.elementShape, 'TensorList shape mismatch: '), this.maxNumElements === this.size()))
              throw new Error('Trying to push element into a full list.');
            (0, r.keep)(t), this.tensors.push(t);
          }
          resize(t) {
            if (t < 0) throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);
            if (-1 !== this.maxNumElements && t > this.maxNumElements) throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);
            const e = new a([], this.elementShape, this.elementDtype, this.maxNumElements);
            e.tensors.length = t;
            for (let n = 0; n < Math.min(this.tensors.length, t); ++n) e.tensors[n] = this.tensors[n];
            return e;
          }
          getItem(t, e, n) {
            if (n !== this.elementDtype) throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);
            if (t < 0 || t > this.tensors.length) throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);
            if (null == this.tensors[t]) throw new Error(`element at index ${t} is null.`);
            (0, s.Wq)(this.tensors[t].shape, e, 'TensorList shape mismatch: ');
            const a = (0, s.E8)(this.elementShape, this.tensors, e);
            return (0, r.reshape)(this.tensors[t], a);
          }
          setItem(t, e) {
            if (e.dtype !== this.elementDtype) throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);
            if (t < 0 || (-1 !== this.maxNumElements && t >= this.maxNumElements))
              throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);
            (0, s.Wq)(this.elementShape, e.shape, 'TensorList shape mismatch: '), (0, r.keep)(e), null != this.tensors[t] && (this.tensors[t].kept = !1), (this.tensors[t] = e);
          }
          gather(t, e, n) {
            if (e !== this.elementDtype) throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);
            (0, s.Wq)(this.elementShape, n, 'TensorList shape mismatch: '), (t = t.slice(0, this.size()));
            const a = (0, s.E8)(this.elementShape, this.tensors, n);
            return 0 === t.length
              ? (0, r.tensor)([], [0].concat(a))
              : (0, r.tidy)(() => {
                  const e = t.map((t) => (0, r.reshape)(this.tensors[t], a));
                  return (0, r.stack)(e, 0);
                });
          }
          concat(t, e) {
            if (t && t !== this.elementDtype) throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);
            (0, s.Wq)(this.elementShape, e, 'TensorList shape mismatch: ');
            const n = (0, s.E8)(this.elementShape, this.tensors, e);
            return 0 === this.size()
              ? (0, r.tensor)([], [0].concat(n))
              : (0, r.tidy)(() => {
                  const t = this.tensors.map((t) => (0, r.reshape)(t, n));
                  return (0, r.concat)(t, 0);
                });
          }
        }
        function o(t, e, n) {
          const o = t.dtype;
          if (t.shape.length < 1) throw new Error(`Tensor must be at least a vector, but saw shape: ${t.shape}`);
          if (t.dtype !== n) throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${n}`);
          const i = t.shape.slice(1);
          (0, s.Wq)(i, e, 'TensorList shape mismatch: ');
          const u = (0, r.unstack)(t);
          return new a(u, e, o);
        }
        function i(t, e, n, r) {
          return new a([], t, e, r);
        }
        function u(t, e, n, s) {
          if (e.length !== t.shape[0]) throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);
          const o = Math.max(...e);
          if (null != s && -1 !== s && o >= s) throw new Error(`Max index must be < array size (${o}  vs. ${s})`);
          const i = new a([], n, t.dtype, s),
            u = (0, r.unstack)(t, 0);
          return (
            e.forEach((t, e) => {
              i.setItem(t, u[e]);
            }),
            i
          );
        }
        function l(t, e, n) {
          let o = 0;
          const i = e.map((t) => ((o += t), o));
          if (o !== t.shape[0])
            throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${o}, and tensor's shape is: ${t.shape}`);
          const u = t.shape.slice(1),
            l = (0, s.YI)(u, n),
            c = 0 === o ? 0 : t.size / o,
            p = (0, r.tidy)(() => {
              const n = [];
              t = (0, r.reshape)(t, [1, o, c]);
              for (let s = 0; s < e.length; ++s) {
                const a = [0, 0 === s ? 0 : i[s - 1], 0],
                  o = [1, e[s], c];
                n[s] = (0, r.reshape)((0, r.slice)(t, a, o), l);
              }
              return t.dispose(), n;
            }),
            d = new a([], n, t.dtype, e.length);
          for (let t = 0; t < p.length; t++) d.setItem(t, p[t]);
          return d;
        }
      },
      31321: (t, e, n) => {
        'use strict';
        n.d(e, { E8: () => o, Wq: () => s, YI: () => i });
        var r = n(9495);
        function s(t, e, n = '') {
          if ('number' != typeof t && 'number' != typeof e) {
            r.util.assert(t.length === e.length, () => n + ` Shapes ${t} and ${e} must match`);
            for (let s = 0; s < t.length; s++) {
              const a = t[s],
                o = e[s];
              r.util.assert(a < 0 || o < 0 || a === o, () => n + ` Shapes ${t} and ${e} must match`);
            }
          }
        }
        function a(t) {
          return 'number' != typeof t && !t.some((t) => t < 0);
        }
        function o(t, e, n) {
          let r = i(t, n);
          const s = !a(r);
          if (s && 0 === e.length) throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);
          if (
            (s &&
              e.forEach((t) => {
                r = i(t.shape, r);
              }),
            !a(r))
          )
            throw new Error(`Non-fully-defined elementShape: ${r}`);
          return r;
        }
        function i(t, e) {
          if ('number' == typeof t) return e;
          if ('number' == typeof e) return t;
          if (t.length !== e.length) throw new Error(`Incompatible ranks during merge: ${t} vs. ${e}`);
          const n = [];
          for (let r = 0; r < t.length; ++r) {
            const s = t[r],
              a = e[r];
            if (s >= 0 && a >= 0 && s !== a) throw new Error(`Incompatible shape during merge: ${t} vs. ${e}`);
            n[r] = s >= 0 ? s : a;
          }
          return n;
        }
      },
      53819: (t, e, n) => {
        'use strict';
        var r = n(9495),
          s = n(96763);
        (0, r.env)().registerFlag(
          'KEEP_INTERMEDIATE_TENSORS',
          () => !1,
          (t) => {
            t &&
              s.warn(
                'Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.',
              );
          },
        );
      },
      83464: (t, e, n) => {
        'use strict';
        n.r(e),
          n.d(e, {
            GraphModel: () => r.k7,
            deregisterOp: () => s.Ad,
            loadGraphModel: () => r.ox,
            loadGraphModelSync: () => r.R9,
            registerOp: () => s.Nn,
            version_converter: () => a.r,
          }),
          n(53819);
        var r = n(79170),
          s = n(23470),
          a = n(96820);
      },
      19162: (t, e, n) => {
        'use strict';
        n.d(e, { I: () => a });
        var r = n(6439),
          s = n(18520);
        class a {
          constructor(t, e, n) {
            (this.node = t),
              (this.tensorMap = e),
              (this.context = n),
              (this.inputs = []),
              (this.attrs = {}),
              (this.inputs = t.inputNames.map((t) => this.getInput(t))),
              null != t.rawAttrs && (this.attrs = Object.keys(t.rawAttrs).reduce((t, e) => ((t[e] = this.getAttr(e)), t), {}));
          }
          getInput(t) {
            return (0, r.cS)(t, this.tensorMap, this.context);
          }
          getAttr(t, e) {
            const n = this.node.rawAttrs[t];
            if (null != n.tensor) return (0, r.cS)(t, this.tensorMap, this.context);
            if (null != n.i || null != n.f) return (0, s.L)(this.node.rawAttrs, t, e);
            if (null != n.s) return (0, s.$2)(this.node.rawAttrs, t, e);
            if (null != n.b) return (0, s.aO)(this.node.rawAttrs, t, e);
            if (null != n.shape) return (0, s.k1)(this.node.rawAttrs, t, e);
            if (null != n.type) return (0, s.Yu)(this.node.rawAttrs, t, e);
            if (null != n.list) {
              if (null != n.list.i || null != n.list.f) return (0, s.MZ)(this.node.rawAttrs, t, e);
              if (null != n.list.s) return (0, s.kP)(this.node.rawAttrs, t, e);
              if (null != n.list.shape) return (0, s.Ph)(this.node.rawAttrs, t, e);
              if (null != n.list.b) return (0, s.zJ)(this.node.rawAttrs, t, e);
              if (null != n.list.type) return (0, s.$A)(this.node.rawAttrs, t, e);
            }
            return e;
          }
        }
      },
      23470: (t, e, n) => {
        'use strict';
        n.d(e, { Ad: () => o, Nn: () => s, _e: () => a });
        const r = {};
        function s(t, e) {
          const n = { tfOpName: t, category: 'custom', inputs: [], attrs: [], customExecutor: e };
          r[t] = n;
        }
        function a(t) {
          return r[t];
        }
        function o(t) {
          delete r[t];
        }
      },
      82682: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'BiasAdd':
            case 'AddV2':
            case 'Add':
              return [a.add((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'AddN':
              return [a.addN((0, s.Zg)('tensors', t, e, n))];
            case 'FloorMod':
            case 'Mod':
              return [a.mod((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'Mul':
              return [a.mul((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'RealDiv':
            case 'Div':
              return [a.div((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'DivNoNan':
              return [a.divNoNan((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'FloorDiv':
              return [a.floorDiv((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'Sub':
              return [a.sub((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'Minimum':
              return [a.minimum((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'Maximum':
              return [a.maximum((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'Pow':
              return [a.pow((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'SquaredDifference':
              return [a.squaredDifference((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      40833: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'Abs':
            case 'ComplexAbs':
              return [a.abs((0, s.Zg)('x', t, e, n))];
            case 'Acos':
              return [a.acos((0, s.Zg)('x', t, e, n))];
            case 'Acosh':
              return [a.acosh((0, s.Zg)('x', t, e, n))];
            case 'Asin':
              return [a.asin((0, s.Zg)('x', t, e, n))];
            case 'Asinh':
              return [a.asinh((0, s.Zg)('x', t, e, n))];
            case 'Atan':
              return [a.atan((0, s.Zg)('x', t, e, n))];
            case 'Atan2':
              return [a.atan2((0, s.Zg)('x', t, e, n), (0, s.Zg)('y', t, e, n))];
            case 'Atanh':
              return [a.atanh((0, s.Zg)('x', t, e, n))];
            case 'Ceil':
              return [a.ceil((0, s.Zg)('x', t, e, n))];
            case 'Complex':
              return [a.complex((0, s.Zg)('real', t, e, n), (0, s.Zg)('imag', t, e, n))];
            case 'Cos':
              return [a.cos((0, s.Zg)('x', t, e, n))];
            case 'Cosh':
              return [a.cosh((0, s.Zg)('x', t, e, n))];
            case 'Elu':
              return [a.elu((0, s.Zg)('x', t, e, n))];
            case 'Erf':
              return [a.erf((0, s.Zg)('x', t, e, n))];
            case 'Exp':
              return [a.exp((0, s.Zg)('x', t, e, n))];
            case 'Expm1':
              return [a.expm1((0, s.Zg)('x', t, e, n))];
            case 'Floor':
              return [a.floor((0, s.Zg)('x', t, e, n))];
            case 'Log':
              return [a.log((0, s.Zg)('x', t, e, n))];
            case 'Log1p':
              return [a.log1p((0, s.Zg)('x', t, e, n))];
            case 'Imag':
              return [a.imag((0, s.Zg)('x', t, e, n))];
            case 'Neg':
              return [a.neg((0, s.Zg)('x', t, e, n))];
            case 'Reciprocal':
              return [a.reciprocal((0, s.Zg)('x', t, e, n))];
            case 'Real':
              return [a.real((0, s.Zg)('x', t, e, n))];
            case 'Relu':
              return [a.relu((0, s.Zg)('x', t, e, n))];
            case 'Round':
              return [a.round((0, s.Zg)('x', t, e, n))];
            case 'Selu':
              return [a.selu((0, s.Zg)('x', t, e, n))];
            case 'Sigmoid':
              return [a.sigmoid((0, s.Zg)('x', t, e, n))];
            case 'Sin':
              return [a.sin((0, s.Zg)('x', t, e, n))];
            case 'Sign':
              return [a.sign((0, s.Zg)('x', t, e, n))];
            case 'Sinh':
              return [a.sinh((0, s.Zg)('x', t, e, n))];
            case 'Softplus':
              return [a.softplus((0, s.Zg)('x', t, e, n))];
            case 'Sqrt':
              return [a.sqrt((0, s.Zg)('x', t, e, n))];
            case 'Square':
              return [a.square((0, s.Zg)('x', t, e, n))];
            case 'Tanh':
              return [a.tanh((0, s.Zg)('x', t, e, n))];
            case 'Tan':
              return [a.tan((0, s.Zg)('x', t, e, n))];
            case 'ClipByValue':
              return [a.clipByValue((0, s.Zg)('x', t, e, n), (0, s.Zg)('clipValueMin', t, e, n), (0, s.Zg)('clipValueMax', t, e, n))];
            case 'Relu6':
              return [a.relu6((0, s.Zg)('x', t, e, n))];
            case 'Rsqrt':
              return [a.rsqrt((0, s.cS)(t.inputNames[0], e, n))];
            case 'LeakyRelu':
              return [a.leakyRelu((0, s.Zg)('x', t, e, n), (0, s.Zg)('alpha', t, e, n))];
            case 'Prelu':
              return [a.prelu((0, s.Zg)('x', t, e, n), (0, s.Zg)('alpha', t, e, n))];
            case 'IsNan':
              return [a.isNaN((0, s.cS)(t.inputNames[0], e, n))];
            case 'IsInf':
              return [a.isInf((0, s.cS)(t.inputNames[0], e, n))];
            case 'IsFinite':
              return [a.isFinite((0, s.cS)(t.inputNames[0], e, n))];
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      1523: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => i });
        var r = n(9495),
          s = n(26105),
          a = n(4282),
          o = n(6439);
        const i = async (t, e, n) => {
          switch (t.op) {
            case 'If':
            case 'StatelessIf': {
              const r = (0, o.Zg)('thenBranch', t, e, n),
                s = (0, o.Zg)('elseBranch', t, e, n),
                a = (0, o.Zg)('cond', t, e, n),
                i = (0, o.Zg)('args', t, e, n);
              return (await a.data())[0]
                ? n.functionMap[r].executeFunctionAsync(i, n.tensorArrayMap, n.tensorListMap)
                : n.functionMap[s].executeFunctionAsync(i, n.tensorArrayMap, n.tensorListMap);
            }
            case 'While':
            case 'StatelessWhile': {
              const r = (0, o.Zg)('body', t, e, n),
                s = (0, o.Zg)('cond', t, e, n),
                a = (0, o.Zg)('args', t, e, n),
                i = await n.functionMap[s].executeFunctionAsync(a, n.tensorArrayMap, n.tensorListMap),
                u = a.map((t) => t.id);
              let l = await i[0].data();
              i.forEach((t) => {
                t.kept || -1 !== u.indexOf(t.id) || t.dispose();
              });
              let c = a;
              for (; l[0]; ) {
                const t = c;
                c = await n.functionMap[r].executeFunctionAsync(c, n.tensorArrayMap, n.tensorListMap);
                const e = c.map((t) => t.id);
                t.forEach((t) => {
                  t.kept || -1 !== u.indexOf(t.id) || -1 !== e.indexOf(t.id) || t.dispose();
                });
                const a = await n.functionMap[s].executeFunctionAsync(c, n.tensorArrayMap, n.tensorListMap);
                (l = await a[0].data()),
                  a.forEach((t) => {
                    t.kept || -1 !== u.indexOf(t.id) || -1 !== e.indexOf(t.id) || t.dispose();
                  });
              }
              return c;
            }
            case 'LoopCond': {
              const r = (0, o.Zg)('pred', t, e, n);
              return [(0, o.hV)(r)];
            }
            case 'Switch': {
              const r = (0, o.Zg)('pred', t, e, n);
              let s = (0, o.Zg)('data', t, e, n);
              return s.kept || (s = (0, o.hV)(s)), (await r.data())[0] ? [void 0, s] : [s, void 0];
            }
            case 'Merge': {
              const r = t.inputNames.find((t) => void 0 !== (0, o.cS)(t, e, n));
              if (r) {
                const t = (0, o.cS)(r, e, n);
                return [(0, o.hV)(t)];
              }
              return;
            }
            case 'Enter': {
              const r = (0, o.Zg)('frameName', t, e, n),
                s = (0, o.Zg)('tensor', t, e, n);
              return n.enterFrame(r), [(0, o.hV)(s)];
            }
            case 'Exit': {
              const r = (0, o.Zg)('tensor', t, e, n);
              return n.exitFrame(), [(0, o.hV)(r)];
            }
            case 'NextIteration': {
              const r = (0, o.Zg)('tensor', t, e, n);
              return n.nextIteration(), [(0, o.hV)(r)];
            }
            case 'TensorArrayV3': {
              const a = (0, o.Zg)('size', t, e, n),
                i = (0, o.Zg)('dtype', t, e, n),
                u = (0, o.Zg)('elementShape', t, e, n),
                l = (0, o.Zg)('dynamicSize', t, e, n),
                c = (0, o.Zg)('clearAfterRead', t, e, n),
                p = (0, o.Zg)('identicalElementShapes', t, e, n),
                d = (0, o.Zg)('name', t, e, n),
                h = new s.n(d, i, a, u, p, l, c);
              return n.addTensorArray(h), [h.idTensor, (0, r.scalar)(1)];
            }
            case 'TensorArrayWriteV3': {
              const r = (0, o.Zg)('tensorArrayId', t, e, n),
                s = (0, o.Zg)('index', t, e, n),
                a = (0, o.Zg)('tensor', t, e, n),
                i = n.getTensorArray(r.id);
              return i.write(s, a), [i.idTensor];
            }
            case 'TensorArrayReadV3': {
              const r = (0, o.Zg)('tensorArrayId', t, e, n),
                s = (0, o.Zg)('index', t, e, n);
              return [n.getTensorArray(r.id).read(s)];
            }
            case 'TensorArrayGatherV3': {
              const r = (0, o.Zg)('tensorArrayId', t, e, n),
                s = (0, o.Zg)('indices', t, e, n),
                a = (0, o.Zg)('dtype', t, e, n);
              return [n.getTensorArray(r.id).gather(s, a)];
            }
            case 'TensorArrayScatterV3': {
              const r = (0, o.Zg)('tensorArrayId', t, e, n),
                s = (0, o.Zg)('indices', t, e, n),
                a = (0, o.Zg)('tensor', t, e, n),
                i = n.getTensorArray(r.id);
              return i.scatter(s, a), [i.idTensor];
            }
            case 'TensorArrayConcatV3': {
              const r = (0, o.Zg)('tensorArrayId', t, e, n),
                s = n.getTensorArray(r.id),
                a = (0, o.Zg)('dtype', t, e, n);
              return [s.concat(a)];
            }
            case 'TensorArraySplitV3': {
              const r = (0, o.Zg)('tensorArrayId', t, e, n),
                s = (0, o.Zg)('tensor', t, e, n),
                a = (0, o.Zg)('lengths', t, e, n),
                i = n.getTensorArray(r.id);
              return i.split(a, s), [i.idTensor];
            }
            case 'TensorArraySizeV3': {
              const s = (0, o.Zg)('tensorArrayId', t, e, n),
                a = n.getTensorArray(s.id);
              return [(0, r.scalar)(a.size(), 'int32')];
            }
            case 'TensorArrayCloseV3': {
              const r = (0, o.Zg)('tensorArrayId', t, e, n),
                s = n.getTensorArray(r.id);
              return s.clearAndClose(), [s.idTensor];
            }
            case 'TensorListSetItem': {
              const r = (0, o.Zg)('tensorListId', t, e, n),
                s = (0, o.Zg)('index', t, e, n),
                a = (0, o.Zg)('tensor', t, e, n),
                i = n.getTensorList(r.id);
              return i.setItem(s, a), [i.idTensor];
            }
            case 'TensorListGetItem': {
              const r = (0, o.Zg)('tensorListId', t, e, n),
                s = (0, o.Zg)('index', t, e, n),
                a = (0, o.Zg)('elementShape', t, e, n),
                i = (0, o.Zg)('elementDType', t, e, n);
              return [n.getTensorList(r.id).getItem(s, a, i)];
            }
            case 'TensorListScatterV2':
            case 'TensorListScatter': {
              const r = (0, o.Zg)('indices', t, e, n),
                s = (0, o.Zg)('tensor', t, e, n),
                i = (0, o.Zg)('elementShape', t, e, n),
                u = (0, o.Zg)('numElements', t, e, n),
                l = (0, a.Tb)(s, r, i, u);
              return n.addTensorList(l), [l.idTensor];
            }
            case 'TensorListReserve':
            case 'EmptyTensorList': {
              const r = (0, o.Zg)('elementShape', t, e, n),
                s = (0, o.Zg)('elementDType', t, e, n);
              let i;
              i = 'TensorListReserve' === t.op ? 'numElements' : 'maxNumElements';
              const u = (0, o.Zg)(i, t, e, n),
                l = 'TensorListReserve' === t.op ? -1 : u,
                c = (0, a.vY)(r, s, u, l);
              return n.addTensorList(c), [c.idTensor];
            }
            case 'TensorListGather': {
              const r = (0, o.Zg)('tensorListId', t, e, n),
                s = (0, o.Zg)('indices', t, e, n),
                a = (0, o.Zg)('elementShape', t, e, n),
                i = (0, o.Zg)('elementDType', t, e, n);
              return [n.getTensorList(r.id).gather(s, i, a)];
            }
            case 'TensorListStack': {
              const r = (0, o.Zg)('tensorListId', t, e, n),
                s = (0, o.Zg)('elementShape', t, e, n),
                a = (0, o.Zg)('elementDType', t, e, n),
                i = (0, o.Zg)('numElements', t, e, n);
              return [n.getTensorList(r.id).stack(s, a, i)];
            }
            case 'TensorListFromTensor': {
              const r = (0, o.Zg)('tensor', t, e, n),
                s = (0, o.Zg)('elementShape', t, e, n),
                i = (0, o.Zg)('elementDType', t, e, n),
                u = (0, a.uK)(r, s, i);
              return n.addTensorList(u), [u.idTensor];
            }
            case 'TensorListConcat':
            case 'TensorListConcatV2': {
              const r = (0, o.Zg)('tensorListId', t, e, n),
                s = n.getTensorList(r.id),
                a = (0, o.Zg)('dtype', t, e, n),
                i = (0, o.Zg)('elementShape', t, e, n);
              return [s.concat(a, i)];
            }
            case 'TensorListPushBack': {
              const r = (0, o.Zg)('tensorListId', t, e, n),
                s = (0, o.Zg)('tensor', t, e, n),
                a = n.getTensorList(r.id);
              return a.pushBack(s), [a.idTensor];
            }
            case 'TensorListPopBack': {
              const r = (0, o.Zg)('tensorListId', t, e, n),
                s = (0, o.Zg)('elementShape', t, e, n),
                a = (0, o.Zg)('elementDType', t, e, n);
              return [n.getTensorList(r.id).popBack(s, a)];
            }
            case 'TensorListSplit': {
              const r = (0, o.Zg)('tensor', t, e, n),
                s = (0, o.Zg)('elementShape', t, e, n),
                i = (0, o.Zg)('lengths', t, e, n),
                u = (0, a.lD)(r, i, s);
              return n.addTensorList(u), [u.idTensor];
            }
            case 'TensorListLength': {
              const s = (0, o.Zg)('tensorListId', t, e, n),
                a = n.getTensorList(s.id);
              return [(0, r.scalar)(a.size(), 'int32')];
            }
            case 'TensorListResize': {
              const r = (0, o.Zg)('tensorListId', t, e, n),
                s = (0, o.Zg)('size', t, e, n),
                a = n.getTensorList(r.id).resize(s);
              return n.addTensorList(a), [a.idTensor];
            }
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      85438: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => o });
        var r = n(9951),
          s = n(6439);
        function a(t, e, n) {
          const [r, a] = (0, s.Zg)('fusedOps', t, e, n),
            o = 'biasadd' === r,
            i = !o,
            u = 'prelu' === a,
            l = 'fusedbatchnorm' === r,
            c = (0, s.Zg)('numArgs', t, e, n);
          if (o) {
            if (u && 2 !== c) throw new Error('FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.');
            if (!u && o && 1 !== c) throw new Error('FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.');
          }
          if (l) throw new Error('FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported');
          const p = (0, s.Zg)('strides', t, e, n),
            d = (0, s.Cq)(t, e, n),
            h = (0, s.Zg)('dataFormat', t, e, n).toUpperCase(),
            f = (0, s.Zg)('dilations', t, e, n);
          let [m, g] = (0, s.Zg)('args', t, e, n);
          return (
            i && ((g = m), (m = void 0)),
            { stride: p, pad: d, dataFormat: h, dilations: f, biasArg: m, preluArg: g, activationFunc: a, leakyreluAlpha: (0, s.Zg)('leakyreluAlpha', t, e, n) }
          );
        }
        const o = (t, e, n, o = r) => {
          switch (t.op) {
            case 'Conv1D': {
              const r = (0, s.Zg)('stride', t, e, n),
                a = (0, s.Zg)('pad', t, e, n),
                i = (0, s.Zg)('dataFormat', t, e, n).toUpperCase(),
                u = (0, s.Zg)('dilation', t, e, n);
              return [o.conv1d((0, s.Zg)('x', t, e, n), (0, s.Zg)('filter', t, e, n), r, a, i, u)];
            }
            case 'Conv2D': {
              const r = (0, s.Zg)('strides', t, e, n),
                a = (0, s.Cq)(t, e, n),
                i = (0, s.Zg)('dataFormat', t, e, n).toUpperCase(),
                u = (0, s.Zg)('dilations', t, e, n);
              return [o.conv2d((0, s.Zg)('x', t, e, n), (0, s.Zg)('filter', t, e, n), [r[1], r[2]], a, i, [u[1], u[2]])];
            }
            case '_FusedConv2D': {
              const { stride: r, pad: i, dataFormat: u, dilations: l, biasArg: c, preluArg: p, activationFunc: d, leakyreluAlpha: h } = a(t, e, n);
              return [
                o.fused.conv2d({
                  x: (0, s.Zg)('x', t, e, n),
                  filter: (0, s.Zg)('filter', t, e, n),
                  strides: [r[1], r[2]],
                  pad: i,
                  dataFormat: u,
                  dilations: [l[1], l[2]],
                  bias: c,
                  activation: d,
                  preluActivationWeights: p,
                  leakyreluAlpha: h,
                }),
              ];
            }
            case 'FusedDepthwiseConv2dNative': {
              const { stride: r, pad: i, dataFormat: u, dilations: l, biasArg: c, preluArg: p, activationFunc: d, leakyreluAlpha: h } = a(t, e, n);
              return [
                o.fused.depthwiseConv2d({
                  x: (0, s.Zg)('x', t, e, n),
                  filter: (0, s.Zg)('filter', t, e, n),
                  strides: [r[1], r[2]],
                  pad: i,
                  dataFormat: u,
                  dilations: [l[1], l[2]],
                  bias: c,
                  activation: d,
                  preluActivationWeights: p,
                  leakyreluAlpha: h,
                }),
              ];
            }
            case 'Conv2DBackpropInput':
            case 'Conv2dTranspose': {
              const r = (0, s.Zg)('outputShape', t, e, n),
                a = (0, s.Zg)('strides', t, e, n),
                i = (0, s.Cq)(t, e, n);
              return [o.conv2dTranspose((0, s.Zg)('x', t, e, n), (0, s.Zg)('filter', t, e, n), r, [a[1], a[2]], i)];
            }
            case 'DepthwiseConv2dNative':
            case 'DepthwiseConv2d': {
              const r = (0, s.Zg)('strides', t, e, n),
                a = (0, s.Cq)(t, e, n),
                i = (0, s.Zg)('dilations', t, e, n),
                u = (0, s.Zg)('dataFormat', t, e, n).toUpperCase();
              return [o.depthwiseConv2d((0, s.Zg)('input', t, e, n), (0, s.Zg)('filter', t, e, n), [r[1], r[2]], a, u, [i[1], i[2]])];
            }
            case 'Conv3D': {
              const r = (0, s.Zg)('strides', t, e, n),
                a = (0, s.Zg)('pad', t, e, n),
                i = (0, s.Zg)('dataFormat', t, e, n).toUpperCase(),
                u = (0, s.Zg)('dilations', t, e, n);
              return [o.conv3d((0, s.Zg)('x', t, e, n), (0, s.Zg)('filter', t, e, n), [r[1], r[2], r[3]], a, i, [u[1], u[2], u[3]])];
            }
            case 'AvgPool': {
              const r = (0, s.Zg)('strides', t, e, n),
                a = (0, s.Zg)('pad', t, e, n),
                i = (0, s.Zg)('kernelSize', t, e, n);
              return [o.avgPool((0, s.Zg)('x', t, e, n), [i[1], i[2]], [r[1], r[2]], a)];
            }
            case 'MaxPool': {
              const r = (0, s.Zg)('strides', t, e, n),
                a = (0, s.Zg)('pad', t, e, n),
                i = (0, s.Zg)('kernelSize', t, e, n);
              return [o.maxPool((0, s.Zg)('x', t, e, n), [i[1], i[2]], [r[1], r[2]], a)];
            }
            case 'MaxPoolWithArgmax': {
              const r = (0, s.Zg)('strides', t, e, n),
                a = (0, s.Zg)('pad', t, e, n),
                i = (0, s.Zg)('kernelSize', t, e, n),
                u = (0, s.Zg)('includeBatchInIndex', t, e, n),
                { result: l, indexes: c } = o.maxPoolWithArgmax((0, s.Zg)('x', t, e, n), [i[1], i[2]], [r[1], r[2]], a, u);
              return [l, c];
            }
            case 'AvgPool3D': {
              const r = (0, s.Zg)('strides', t, e, n),
                a = (0, s.Zg)('pad', t, e, n),
                i = (0, s.Zg)('kernelSize', t, e, n);
              return [o.avgPool3d((0, s.Zg)('x', t, e, n), [i[1], i[2], i[3]], [r[1], r[2], r[3]], a)];
            }
            case 'MaxPool3D': {
              const r = (0, s.Zg)('strides', t, e, n),
                a = (0, s.Zg)('pad', t, e, n),
                i = (0, s.Zg)('kernelSize', t, e, n);
              return [o.maxPool3d((0, s.Zg)('x', t, e, n), [i[1], i[2], i[3]], [r[1], r[2], r[3]], a)];
            }
            case 'Dilation2D': {
              const r = (0, s.Zg)('strides', t, e, n),
                a = (0, s.Zg)('pad', t, e, n),
                i = (0, s.Zg)('dilations', t, e, n),
                u = r[1],
                l = r[2],
                c = i[1],
                p = i[2];
              return [o.dilation2d((0, s.Zg)('x', t, e, n), (0, s.Zg)('filter', t, e, n), [u, l], a, [c, p], 'NHWC')];
            }
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      36065: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'Fill': {
              const r = (0, s.Zg)('shape', t, e, n),
                o = (0, s.Zg)('dtype', t, e, n),
                i = (0, s.Zg)('value', t, e, n);
              return [a.fill(r, i, o)];
            }
            case 'LinSpace': {
              const r = (0, s.Zg)('start', t, e, n),
                o = (0, s.Zg)('stop', t, e, n),
                i = (0, s.Zg)('num', t, e, n);
              return [a.linspace(r, o, i)];
            }
            case 'Multinomial': {
              const r = (0, s.Zg)('logits', t, e, n),
                o = (0, s.Zg)('numSamples', t, e, n),
                i = (0, s.Zg)('seed', t, e, n);
              return [a.multinomial(r, o, i)];
            }
            case 'OneHot': {
              const r = (0, s.Zg)('indices', t, e, n),
                o = (0, s.Zg)('depth', t, e, n),
                i = (0, s.Zg)('onValue', t, e, n),
                u = (0, s.Zg)('offValue', t, e, n),
                l = (0, s.Zg)('dtype', t, e, n);
              return [a.oneHot(r, o, i, u, l)];
            }
            case 'Ones':
              return [a.ones((0, s.Zg)('shape', t, e, n), (0, s.Zg)('dtype', t, e, n))];
            case 'OnesLike':
              return [a.onesLike((0, s.Zg)('x', t, e, n))];
            case 'RandomStandardNormal':
              return [a.randomStandardNormal((0, s.Zg)('shape', t, e, n), (0, s.Zg)('dtype', t, e, n), (0, s.Zg)('seed', t, e, n))];
            case 'RandomUniform':
              return [a.randomUniform((0, s.Zg)('shape', t, e, n), (0, s.Zg)('minval', t, e, n), (0, s.Zg)('maxval', t, e, n), (0, s.Zg)('dtype', t, e, n))];
            case 'RandomUniformInt':
              return [a.randomUniformInt((0, s.Zg)('shape', t, e, n), (0, s.Zg)('minval', t, e, n), (0, s.Zg)('maxval', t, e, n), (0, s.Zg)('seed', t, e, n))];
            case 'Range': {
              const r = (0, s.Zg)('start', t, e, n),
                o = (0, s.Zg)('stop', t, e, n),
                i = (0, s.Zg)('step', t, e, n);
              return [a.range(r, o, i, (0, s.Zg)('dtype', t, e, n))];
            }
            case 'TruncatedNormal': {
              const r = (0, s.Zg)('shape', t, e, n),
                o = (0, s.Zg)('mean', t, e, n),
                i = (0, s.Zg)('stdDev', t, e, n),
                u = (0, s.Zg)('seed', t, e, n);
              return [a.truncatedNormal(r, o, i, (0, s.Zg)('dtype', t, e, n), u)];
            }
            case 'Zeros':
              return [a.zeros((0, s.Zg)('shape', t, e, n), (0, s.Zg)('dtype', t, e, n))];
            case 'ZerosLike':
              return [a.zerosLike((0, s.Zg)('x', t, e, n))];
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      16343: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => o });
        var r = n(9951),
          s = n(6439);
        function a(t, e, n) {
          return {
            boxes: (0, s.Zg)('boxes', t, e, n),
            scores: (0, s.Zg)('scores', t, e, n),
            maxOutputSize: (0, s.Zg)('maxOutputSize', t, e, n),
            iouThreshold: (0, s.Zg)('iouThreshold', t, e, n),
            scoreThreshold: (0, s.Zg)('scoreThreshold', t, e, n),
            softNmsSigma: (0, s.Zg)('softNmsSigma', t, e, n),
          };
        }
        const o = async (t, e, n, o, i = r) => {
          switch (t.op) {
            case 'NonMaxSuppressionV5': {
              const { boxes: r, scores: s, maxOutputSize: o, iouThreshold: u, scoreThreshold: l, softNmsSigma: c } = a(t, e, n),
                p = await i.image.nonMaxSuppressionWithScoreAsync(r, s, o, u, l, c);
              return [p.selectedIndices, p.selectedScores];
            }
            case 'NonMaxSuppressionV4': {
              const { boxes: r, scores: o, maxOutputSize: u, iouThreshold: l, scoreThreshold: c } = a(t, e, n),
                p = (0, s.Zg)('padToMaxOutputSize', t, e, n),
                d = await i.image.nonMaxSuppressionPaddedAsync(r, o, u, l, c, p);
              return [d.selectedIndices, d.validOutputs];
            }
            case 'NonMaxSuppressionV3':
            case 'NonMaxSuppressionV2': {
              const { boxes: r, scores: s, maxOutputSize: o, iouThreshold: u, scoreThreshold: l } = a(t, e, n);
              return [await i.image.nonMaxSuppressionAsync(r, s, o, u, l)];
            }
            case 'Where': {
              const r = i.cast((0, s.Zg)('condition', t, e, n), 'bool'),
                a = [await i.whereAsync(r)];
              return r.dispose(), a;
            }
            case 'ListDiff':
              return i.setdiff1dAsync((0, s.Zg)('x', t, e, n), (0, s.Zg)('y', t, e, n));
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      18828: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'LowerBound': {
              const r = (0, s.Zg)('sortedSequence', t, e, n),
                o = (0, s.Zg)('values', t, e, n);
              return [a.lowerBound(r, o)];
            }
            case 'TopKV2': {
              const r = (0, s.Zg)('x', t, e, n),
                o = (0, s.Zg)('k', t, e, n),
                i = (0, s.Zg)('sorted', t, e, n),
                u = a.topk(r, o, i);
              return [u.values, u.indices];
            }
            case 'UpperBound': {
              const r = (0, s.Zg)('sortedSequence', t, e, n),
                o = (0, s.Zg)('values', t, e, n);
              return [a.upperBound(r, o)];
            }
            case 'Unique': {
              const r = (0, s.Zg)('x', t, e, n),
                o = a.unique(r);
              return [o.values, o.indices];
            }
            case 'UniqueV2': {
              const r = (0, s.Zg)('x', t, e, n),
                o = (0, s.Zg)('axis', t, e, n),
                i = a.unique(r, o);
              return [i.values, i.indices];
            }
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      80052: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => o });
        var r = n(9951),
          s = n(6439),
          a = n(96763);
        const o = (t, e, n, o = r) => {
          switch (t.op) {
            case 'Const':
              return e[t.name];
            case 'PlaceholderWithDefault':
              const r = (0, s.Zg)('default', t, e, n);
              return [(0, s.cS)(t.name, e, n) || r];
            case 'Placeholder':
              return [(0, s.cS)(t.name, e, n)];
            case 'Identity':
            case 'StopGradient':
            case 'FakeQuantWithMinMaxVars': {
              const r = (0, s.Zg)('x', t, e, n);
              return [(0, s.hV)(r)];
            }
            case 'IdentityN':
              return (0, s.Zg)('x', t, e, n).map((t) => (0, s.hV)(t));
            case 'Snapshot':
              const i = (0, s.Zg)('x', t, e, n);
              return [(0, s.hV)(i)];
            case 'Shape':
              return [o.tensor1d((0, s.Zg)('x', t, e, n).shape, 'int32')];
            case 'ShapeN':
              return (0, s.Zg)('x', t, e, n).map((t) => o.tensor1d(t.shape));
            case 'Size':
              return [o.scalar((0, s.Zg)('x', t, e, n).size, 'int32')];
            case 'Rank':
              return [o.scalar((0, s.Zg)('x', t, e, n).rank, 'int32')];
            case 'NoOp':
              return [o.scalar(1)];
            case 'Print':
              const u = (0, s.Zg)('x', t, e, n),
                l = (0, s.Zg)('data', t, e, n),
                c = (0, s.Zg)('message', t, e, n),
                p = (0, s.Zg)('summarize', t, e, n);
              a.warn('The graph has a tf.print() operation,usually used for debugging, which slows down performance.'), a.log(c);
              for (let t = 0; t < l.length; t++) a.log(Array.prototype.slice.call(l[t].dataSync()).slice(0, p));
              return [u];
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      4967: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(24853),
          s = n(6439);
        const a = async (t, e, n, a) => {
          switch (t.op) {
            case 'HashTable':
            case 'HashTableV2': {
              const o = a.getHashTableHandleByName(t.name);
              if (null != o) return [o];
              {
                const o = (0, s.Zg)('keyDType', t, e, n),
                  i = (0, s.Zg)('valueDType', t, e, n),
                  u = new r.J(o, i);
                return a.addHashTable(t.name, u), [u.handle];
              }
            }
            case 'InitializeTable':
            case 'InitializeTableV2':
            case 'LookupTableImport':
            case 'LookupTableImportV2': {
              const r = (0, s.Zg)('tableHandle', t, e, n, a),
                o = (0, s.Zg)('keys', t, e, n),
                i = (0, s.Zg)('values', t, e, n),
                u = a.getHashTableById(r.id);
              return [await u.import(o, i)];
            }
            case 'LookupTableFind':
            case 'LookupTableFindV2': {
              const r = (0, s.Zg)('tableHandle', t, e, n, a),
                o = (0, s.Zg)('keys', t, e, n),
                i = (0, s.Zg)('defaultValue', t, e, n),
                u = a.getHashTableById(r.id);
              return [await u.find(o, i)];
            }
            case 'LookupTableSize':
            case 'LookupTableSizeV2': {
              const r = (0, s.Zg)('tableHandle', t, e, n, a);
              return [a.getHashTableById(r.id).tensorSize()];
            }
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      61447: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'ResizeBilinear': {
              const r = (0, s.Zg)('images', t, e, n),
                o = (0, s.Zg)('size', t, e, n),
                i = (0, s.Zg)('alignCorners', t, e, n),
                u = (0, s.Zg)('halfPixelCenters', t, e, n);
              return [a.image.resizeBilinear(r, [o[0], o[1]], i, u)];
            }
            case 'ResizeNearestNeighbor': {
              const r = (0, s.Zg)('images', t, e, n),
                o = (0, s.Zg)('size', t, e, n),
                i = (0, s.Zg)('alignCorners', t, e, n),
                u = (0, s.Zg)('halfPixelCenters', t, e, n);
              return [a.image.resizeNearestNeighbor(r, [o[0], o[1]], i, u)];
            }
            case 'CropAndResize': {
              const r = (0, s.Zg)('image', t, e, n),
                o = (0, s.Zg)('boxes', t, e, n),
                i = (0, s.Zg)('boxInd', t, e, n),
                u = (0, s.Zg)('cropSize', t, e, n),
                l = (0, s.Zg)('method', t, e, n),
                c = (0, s.Zg)('extrapolationValue', t, e, n);
              return [a.image.cropAndResize(r, o, i, u, l, c)];
            }
            case 'ImageProjectiveTransformV3': {
              const r = (0, s.Zg)('images', t, e, n),
                o = (0, s.Zg)('transforms', t, e, n),
                i = (0, s.Zg)('outputShape', t, e, n),
                u = (0, s.Zg)('fillValue', t, e, n),
                l = (0, s.Zg)('interpolation', t, e, n),
                c = (0, s.Zg)('fillMode', t, e, n);
              return [a.image.transform(r, o, l.toLowerCase(), c.toLowerCase(), u, i)];
            }
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      39849: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'Equal':
              return [a.equal((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'NotEqual':
              return [a.notEqual((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'Greater':
              return [a.greater((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'GreaterEqual':
              return [a.greaterEqual((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'Less':
              return [a.less((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'LessEqual':
              return [a.lessEqual((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'LogicalAnd':
              return [a.logicalAnd((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'LogicalNot':
              return [a.logicalNot((0, s.Zg)('a', t, e, n))];
            case 'LogicalOr':
              return [a.logicalOr((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'Select':
            case 'SelectV2':
              return [a.where((0, s.Zg)('condition', t, e, n), (0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            case 'BitwiseAnd':
              return [a.bitwiseAnd((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n))];
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      13358: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'BatchMatMul':
            case 'BatchMatMulV2':
            case 'MatMul':
              return [a.matMul((0, s.Zg)('a', t, e, n), (0, s.Zg)('b', t, e, n), (0, s.Zg)('transposeA', t, e, n), (0, s.Zg)('transposeB', t, e, n))];
            case 'Einsum':
              return [a.einsum((0, s.Zg)('equation', t, e, n), ...(0, s.Zg)('tensors', t, e, n))];
            case 'Transpose':
              return [a.transpose((0, s.Zg)('x', t, e, n), (0, s.Zg)('perm', t, e, n))];
            case '_FusedMatMul':
              const [r, o] = (0, s.Zg)('fusedOps', t, e, n),
                i = 'biasadd' === r,
                u = 'prelu' === o,
                l = (0, s.Zg)('numArgs', t, e, n),
                c = (0, s.Zg)('leakyreluAlpha', t, e, n);
              if (i) {
                if (u && 2 !== l) throw new Error('Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.');
                if (!u && 1 !== l) throw new Error('Fused MatMul with BiasAdd must have one extra argument: bias.');
              }
              const [p, d] = (0, s.Zg)('args', t, e, n);
              return [
                a.fused.matMul({
                  a: (0, s.Zg)('a', t, e, n),
                  b: (0, s.Zg)('b', t, e, n),
                  transposeA: (0, s.Zg)('transposeA', t, e, n),
                  transposeB: (0, s.Zg)('transposeB', t, e, n),
                  bias: p,
                  activation: o,
                  preluActivationWeights: d,
                  leakyreluAlpha: c,
                }),
              ];
            case 'MatrixBandPart':
              return [a.linalg.bandPart((0, s.Zg)('a', t, e, n), (0, s.Zg)('numLower', t, e, n), (0, s.Zg)('numUpper', t, e, n))];
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      10051: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'EuclideanNorm':
              return [a.euclideanNorm((0, s.Zg)('x', t, e, n), (0, s.Zg)('axis', t, e, n), (0, s.Zg)('keepDims', t, e, n))];
            case 'FusedBatchNorm':
            case 'FusedBatchNormV2':
            case 'FusedBatchNormV3':
              return [
                a.batchNorm(
                  (0, s.Zg)('x', t, e, n),
                  (0, s.Zg)('mean', t, e, n),
                  (0, s.Zg)('variance', t, e, n),
                  (0, s.Zg)('offset', t, e, n),
                  (0, s.Zg)('scale', t, e, n),
                  (0, s.Zg)('epsilon', t, e, n),
                ),
              ];
            case 'LRN':
              return [
                a.localResponseNormalization(
                  (0, s.Zg)('x', t, e, n),
                  (0, s.Zg)('radius', t, e, n),
                  (0, s.Zg)('bias', t, e, n),
                  (0, s.Zg)('alpha', t, e, n),
                  (0, s.Zg)('beta', t, e, n),
                ),
              ];
            case 'Softmax':
              return [a.softmax((0, s.Zg)('x', t, e, n))];
            case 'LogSoftmax':
              return [a.logSoftmax((0, s.Zg)('x', t, e, n))];
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      26512: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'RaggedGather': {
              const { outputNestedSplits: r, outputDenseValues: o } = a.raggedGather(
                (0, s.Zg)('paramsNestedSplits', t, e, n),
                (0, s.Zg)('paramsDenseValues', t, e, n),
                (0, s.Zg)('indices', t, e, n),
                (0, s.Zg)('outputRaggedRank', t, e, n),
              );
              return r.concat(o);
            }
            case 'RaggedRange': {
              const { rtNestedSplits: r, rtDenseValues: o } = a.raggedRange((0, s.Zg)('starts', t, e, n), (0, s.Zg)('limits', t, e, n), (0, s.Zg)('splits', t, e, n));
              return [r, o];
            }
            case 'RaggedTensorToTensor':
              return [
                a.raggedTensorToTensor(
                  (0, s.Zg)('shape', t, e, n),
                  (0, s.Zg)('values', t, e, n),
                  (0, s.Zg)('defaultValue', t, e, n),
                  (0, s.Zg)('rowPartitionTensors', t, e, n),
                  (0, s.Zg)('rowPartitionTypes', t, e, n),
                ),
              ];
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      12315: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'Max': {
              const r = (0, s.Zg)('axis', t, e, n),
                o = (0, s.Zg)('keepDims', t, e, n);
              return [a.max((0, s.Zg)('x', t, e, n), r, o)];
            }
            case 'Mean': {
              const r = (0, s.Zg)('axis', t, e, n),
                o = (0, s.Zg)('keepDims', t, e, n);
              return [a.mean((0, s.Zg)('x', t, e, n), r, o)];
            }
            case 'Min': {
              const r = (0, s.Zg)('axis', t, e, n),
                o = (0, s.Zg)('keepDims', t, e, n);
              return [a.min((0, s.Zg)('x', t, e, n), r, o)];
            }
            case 'Sum': {
              const r = (0, s.Zg)('axis', t, e, n),
                o = (0, s.Zg)('keepDims', t, e, n);
              return [a.sum((0, s.Zg)('x', t, e, n), r, o)];
            }
            case 'All': {
              const r = (0, s.Zg)('axis', t, e, n),
                o = (0, s.Zg)('keepDims', t, e, n);
              return [a.all((0, s.Zg)('x', t, e, n), r, o)];
            }
            case 'Any': {
              const r = (0, s.Zg)('axis', t, e, n),
                o = (0, s.Zg)('keepDims', t, e, n);
              return [a.any((0, s.Zg)('x', t, e, n), r, o)];
            }
            case 'ArgMax': {
              const r = (0, s.Zg)('axis', t, e, n);
              return [a.argMax((0, s.Zg)('x', t, e, n), r)];
            }
            case 'ArgMin': {
              const r = (0, s.Zg)('axis', t, e, n);
              return [a.argMin((0, s.Zg)('x', t, e, n), r)];
            }
            case 'Prod': {
              const r = (0, s.Zg)('axis', t, e, n),
                o = (0, s.Zg)('keepDims', t, e, n);
              return [a.prod((0, s.Zg)('x', t, e, n), r, o)];
            }
            case 'Cumprod': {
              const r = (0, s.Zg)('axis', t, e, n),
                o = (0, s.Zg)('exclusive', t, e, n),
                i = (0, s.Zg)('reverse', t, e, n);
              return [a.cumprod((0, s.Zg)('x', t, e, n), r, o, i)];
            }
            case 'Cumsum': {
              const r = (0, s.Zg)('axis', t, e, n),
                o = (0, s.Zg)('exclusive', t, e, n),
                i = (0, s.Zg)('reverse', t, e, n);
              return [a.cumsum((0, s.Zg)('x', t, e, n), r, o, i)];
            }
            case 'Bincount':
              const r = (0, s.Zg)('x', t, e, n),
                o = (0, s.Zg)('weights', t, e, n),
                i = (0, s.Zg)('size', t, e, n);
              return [a.bincount(r, o, i)];
            case 'DenseBincount': {
              const r = (0, s.Zg)('x', t, e, n),
                o = (0, s.Zg)('weights', t, e, n),
                i = (0, s.Zg)('size', t, e, n),
                u = (0, s.Zg)('binaryOutput', t, e, n);
              return [a.denseBincount(r, o, i, u)];
            }
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      55659: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => o });
        var r = n(9495),
          s = n(9951),
          a = n(6439);
        const o = (t, e, n, o = s) => {
          switch (t.op) {
            case 'ConcatV2':
            case 'Concat': {
              const r = (0, a.Zg)('n', t, e, n),
                s = (0, a.Zg)('axis', t, e, n);
              let i = (0, a.Zg)('tensors', t, e, n);
              return (i = i.slice(0, r)), [o.concat(i, s)];
            }
            case 'Gather': {
              const r = (0, a.Zg)('x', t, e, n),
                s = (0, a.Zg)('indices', t, e, n);
              return [o.gather(r, o.cast(s, 'int32'), 0)];
            }
            case 'GatherV2': {
              const r = (0, a.Zg)('axis', t, e, n),
                s = (0, a.Zg)('batchDims', t, e, n),
                i = (0, a.Zg)('x', t, e, n),
                u = (0, a.Zg)('indices', t, e, n);
              return [o.gather(i, o.cast(u, 'int32'), r, s)];
            }
            case 'Reverse': {
              const r = (0, a.Zg)('dims', t, e, n),
                s = [];
              for (let t = 0; t < r.length; t++) r[t] && s.push(t);
              const i = (0, a.Zg)('x', t, e, n);
              return [o.reverse(i, s)];
            }
            case 'ReverseV2': {
              const r = (0, a.Zg)('axis', t, e, n),
                s = (0, a.Zg)('x', t, e, n);
              return [o.reverse(s, r)];
            }
            case 'Slice': {
              const r = (0, a.Zg)('begin', t, e, n),
                s = (0, a.Zg)('size', t, e, n);
              return [o.slice((0, a.Zg)('x', t, e, n), r, s)];
            }
            case 'StridedSlice': {
              const r = (0, a.Zg)('begin', t, e, n),
                s = (0, a.Zg)('end', t, e, n),
                i = (0, a.Zg)('strides', t, e, n),
                u = (0, a.Zg)('beginMask', t, e, n),
                l = (0, a.Zg)('endMask', t, e, n),
                c = (0, a.Zg)('ellipsisMask', t, e, n),
                p = (0, a.Zg)('newAxisMask', t, e, n),
                d = (0, a.Zg)('shrinkAxisMask', t, e, n),
                h = (0, a.Zg)('x', t, e, n);
              return [o.stridedSlice(h, r, s, i, u, l, c, p, d)];
            }
            case 'Pack':
              return (0, r.tidy)(() => {
                const s = (0, a.Zg)('axis', t, e, n),
                  i = (0, a.Zg)('tensors', t, e, n),
                  u = i[0].shape,
                  l = o.squeeze(i[0]).shape,
                  c = i.map((t) => {
                    const e = r.util.arraysEqual(t.shape, u);
                    if (!e && !r.util.arraysEqual(o.squeeze(t).shape, l)) throw new Error('the input tensors shape does not match');
                    return e ? t : o.reshape(t, u);
                  });
                return [o.stack(c, s)];
              });
            case 'Unpack': {
              const r = (0, a.Zg)('axis', t, e, n),
                s = (0, a.Zg)('tensor', t, e, n);
              return o.unstack(s, r);
            }
            case 'Tile': {
              const r = (0, a.Zg)('reps', t, e, n);
              return [o.tile((0, a.Zg)('x', t, e, n), r)];
            }
            case 'Split':
            case 'SplitV': {
              const r = (0, a.Zg)('axis', t, e, n),
                s = (0, a.Zg)('numOrSizeSplits', t, e, n),
                i = (0, a.Zg)('x', t, e, n);
              return o.split(i, s, r);
            }
            case 'ScatterNd': {
              const r = (0, a.Zg)('indices', t, e, n),
                s = (0, a.Zg)('values', t, e, n),
                i = (0, a.Zg)('shape', t, e, n);
              return [o.scatterND(r, s, i)];
            }
            case 'GatherNd': {
              const r = (0, a.Zg)('x', t, e, n),
                s = (0, a.Zg)('indices', t, e, n);
              return [o.gatherND(r, s)];
            }
            case 'SparseToDense': {
              const r = (0, a.Zg)('sparseIndices', t, e, n),
                s = (0, a.Zg)('outputShape', t, e, n),
                i = (0, a.Zg)('sparseValues', t, e, n),
                u = (0, a.Zg)('defaultValue', t, e, n);
              return [o.sparseToDense(r, i, s, i.dtype === u.dtype ? u : o.cast(u, i.dtype))];
            }
            case 'TensorScatterUpdate': {
              const r = (0, a.Zg)('indices', t, e, n),
                s = (0, a.Zg)('values', t, e, n),
                i = (0, a.Zg)('tensor', t, e, n);
              return [o.tensorScatterUpdate(i, r, s)];
            }
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      7714: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'SparseFillEmptyRows': {
              const {
                outputIndices: r,
                outputValues: o,
                emptyRowIndicator: i,
                reverseIndexMap: u,
              } = a.sparse.sparseFillEmptyRows((0, s.Zg)('indices', t, e, n), (0, s.Zg)('values', t, e, n), (0, s.Zg)('denseShape', t, e, n), (0, s.Zg)('defaultValue', t, e, n));
              return [r, o, i, u];
            }
            case 'SparseReshape': {
              const { outputIndices: r, outputShape: o } = a.sparse.sparseReshape(
                (0, s.Zg)('inputIndices', t, e, n),
                (0, s.Zg)('inputShape', t, e, n),
                (0, s.Zg)('newShape', t, e, n),
              );
              return [r, o];
            }
            case 'SparseSegmentMean':
              return [a.sparse.sparseSegmentMean((0, s.Zg)('data', t, e, n), (0, s.Zg)('indices', t, e, n), (0, s.Zg)('segmentIds', t, e, n))];
            case 'SparseSegmentSum':
              return [a.sparse.sparseSegmentSum((0, s.Zg)('data', t, e, n), (0, s.Zg)('indices', t, e, n), (0, s.Zg)('segmentIds', t, e, n))];
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      5070: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'FFT':
              return [a.fft((0, s.Zg)('x', t, e, n))];
            case 'IFFT':
              return [a.ifft((0, s.Zg)('x', t, e, n))];
            case 'RFFT':
              return [a.rfft((0, s.Zg)('x', t, e, n))];
            case 'IRFFT':
              return [a.irfft((0, s.Zg)('x', t, e, n))];
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      41557: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'StaticRegexReplace':
              return [a.string.staticRegexReplace((0, s.Zg)('input', t, e, n), (0, s.Zg)('pattern', t, e, n), (0, s.Zg)('rewrite', t, e, n), (0, s.Zg)('replaceGlobal', t, e, n))];
            case 'StringNGrams': {
              const { nGrams: r, nGramsSplits: o } = a.string.stringNGrams(
                (0, s.Zg)('data', t, e, n),
                (0, s.Zg)('dataSplits', t, e, n),
                (0, s.Zg)('separator', t, e, n),
                (0, s.Zg)('nGramWidths', t, e, n),
                (0, s.Zg)('leftPad', t, e, n),
                (0, s.Zg)('rightPad', t, e, n),
                (0, s.Zg)('padWidth', t, e, n),
                (0, s.Zg)('preserveShortSequences', t, e, n),
              );
              return [r, o];
            }
            case 'StringSplit': {
              const { indices: r, values: o, shape: i } = a.string.stringSplit((0, s.Zg)('input', t, e, n), (0, s.Zg)('delimiter', t, e, n), (0, s.Zg)('skipEmpty', t, e, n));
              return [r, o, i];
            }
            case 'StringToHashBucketFast':
              return [a.string.stringToHashBucketFast((0, s.Zg)('input', t, e, n), (0, s.Zg)('numBuckets', t, e, n))];
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      74477: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(9951),
          s = n(6439);
        const a = (t, e, n, a = r) => {
          switch (t.op) {
            case 'Cast':
              return [a.cast((0, s.Zg)('x', t, e, n), (0, s.Zg)('dtype', t, e, n))];
            case 'ExpandDims': {
              const r = (0, s.Zg)('axis', t, e, n);
              return [a.expandDims((0, s.Zg)('x', t, e, n), r)];
            }
            case 'Squeeze': {
              const r = (0, s.Zg)('axis', t, e, n);
              return [a.squeeze((0, s.Zg)('x', t, e, n), r)];
            }
            case 'Reshape':
              return [a.reshape((0, s.Zg)('x', t, e, n), (0, s.Zg)('shape', t, e, n))];
            case 'EnsureShape':
              return [a.ensureShape((0, s.Zg)('x', t, e, n), (0, s.Zg)('shape', t, e, n))];
            case 'MirrorPad':
              return [a.mirrorPad((0, s.Zg)('x', t, e, n), (0, s.Zg)('padding', t, e, n), (0, s.Zg)('mode', t, e, n))];
            case 'PadV2':
            case 'Pad':
              return [a.pad((0, s.Zg)('x', t, e, n), (0, s.Zg)('padding', t, e, n), (0, s.Zg)('constantValue', t, e, n))];
            case 'SpaceToBatchND': {
              const r = (0, s.Zg)('blockShape', t, e, n),
                o = (0, s.Zg)('paddings', t, e, n);
              return [a.spaceToBatchND((0, s.Zg)('x', t, e, n), r, o)];
            }
            case 'BatchToSpaceND': {
              const r = (0, s.Zg)('blockShape', t, e, n),
                o = (0, s.Zg)('crops', t, e, n);
              return [a.batchToSpaceND((0, s.Zg)('x', t, e, n), r, o)];
            }
            case 'DepthToSpace': {
              const r = (0, s.Zg)('blockSize', t, e, n),
                o = (0, s.Zg)('dataFormat', t, e, n).toUpperCase();
              return [a.depthToSpace((0, s.Zg)('x', t, e, n), r, o)];
            }
            case 'BroadcastTo':
              return [a.broadcastTo((0, s.Zg)('x', t, e, n), (0, s.Zg)('shape', t, e, n))];
            case 'BroadcastArgs':
              return [a.broadcastArgs((0, s.Zg)('s0', t, e, n), (0, s.Zg)('s1', t, e, n))];
            default:
              throw TypeError(`Node type ${t.op} is not implemented`);
          }
        };
      },
      6439: (t, e, n) => {
        'use strict';
        n.d(e, { Cq: () => c, Xi: () => l, Zg: () => s, cI: () => o, cS: () => a, hV: () => p, lz: () => i });
        var r = n(9495);
        function s(t, e, n, s, o) {
          const i = e.inputParams[t];
          if (i && void 0 !== i.inputIndexStart) {
            const t = i.inputIndexStart,
              u = 0 === i.inputIndexEnd ? void 0 : void 0 === i.inputIndexEnd ? t + 1 : i.inputIndexEnd,
              l = t < 0 ? e.inputNames.length + t : t;
            if ('tensor' === i.type) return a(e.inputNames[l], n, s, o);
            if ('tensors' === i.type) {
              const r = e.inputs.slice(t, u);
              return e.inputNames
                .slice(t, u)
                .filter((t, e) => {
                  var n;
                  return 'NoOp' !== (null === (n = r[e]) || void 0 === n ? void 0 : n.op);
                })
                .map((t) => a(t, n, s, o));
            }
            const c = a(e.inputNames[l], n, s, o),
              p = c.dataSync();
            return 'number' === i.type ? p[0] : r.util.toNestedArray(c.shape, p);
          }
          const u = e.attrParams[t];
          return u && u.value;
        }
        function a(t, e, n, r) {
          const [s, a] = l(t, n);
          if (null != r) {
            const t = r.getHashTableHandleByName(s);
            if (null != t) return t;
          }
          const o = n.currentContextIds.find((t) => !!e[u(s, t)]);
          return void 0 !== o ? e[u(s, o)][a] : void 0;
        }
        function o(t, e, n) {
          return e[u(t, n.currentContextId)];
        }
        function i(t, e) {
          const [n, r, s] = l(t, e);
          return [u(n, e && e.currentContextId), r, s];
        }
        function u(t, e) {
          return e ? `${t}-${e}` : t;
        }
        function l(t, e) {
          if ('' === t) return ['', 0, void 0];
          const n = null != e && null != e.parseNodeNameCache;
          if (n) {
            const n = e.parseNodeNameCache.get(t);
            if (null != n) return n;
          }
          const r = t.split(':');
          let s;
          if (1 === r.length) s = [t, 0, void 0];
          else {
            const t = r[0],
              e = 3 === r.length ? r[1] : void 0;
            s = [t, Number(r[r.length - 1]), e];
          }
          return n && e.parseNodeNameCache.set(t, s), s;
        }
        function c(t, e, n) {
          let r = s('pad', t, e, n);
          if ('explicit' === r) {
            r = s('explicitPaddings', t, e, n);
            const a = [
              [0, 0],
              [0, 0],
              [0, 0],
              [0, 0],
            ];
            for (let t = 0; t < 4; t++) (a[t][0] = r[2 * t]), (a[t][1] = r[2 * t + 1]);
            return a;
          }
          return r;
        }
        function p(t) {
          return t.kept ? t : (0, r.clone)(t);
        }
      },
      49050: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'Add',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'AddV2',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          { tfOpName: 'AddN', category: 'arithmetic', inputs: [{ start: 0, end: 0, name: 'tensors', type: 'tensors' }] },
          {
            tfOpName: 'BiasAdd',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'Sub',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'RealDiv',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Div',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'DivNoNan',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'FloorDiv',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Mul',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Maximum',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Minimum',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Pow',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'SquaredDifference',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Mod',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'FloorMod',
            category: 'arithmetic',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
        ];
      },
      76411: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          { tfOpName: 'Abs', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          { tfOpName: 'Acos', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          { tfOpName: 'Asin', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          { tfOpName: 'Atan', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          {
            tfOpName: 'Atan2',
            category: 'basic_math',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'y', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          { tfOpName: 'Ceil', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          {
            tfOpName: 'ClipByValue',
            category: 'basic_math',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'clipValueMin', type: 'number' },
              { start: 2, name: 'clipValueMax', type: 'number' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Complex',
            category: 'basic_math',
            inputs: [
              { start: 0, name: 'real', type: 'tensor' },
              { start: 1, name: 'imag', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'ComplexAbs',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          { tfOpName: 'Cos', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          { tfOpName: 'Cosh', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          { tfOpName: 'Elu', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          { tfOpName: 'Exp', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          {
            tfOpName: 'Floor',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          { tfOpName: 'Log', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          {
            tfOpName: 'Imag',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
              { tfName: 'Tout', name: 'outputType', type: 'dtype', notSupported: !0 },
            ],
          },
          { tfOpName: 'Neg', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          {
            tfOpName: 'Real',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
              { tfName: 'Tout', name: 'outputType', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'Prelu',
            category: 'basic_math',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'alpha', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          { tfOpName: 'Relu', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          {
            tfOpName: 'Relu6',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          { tfOpName: 'Selu', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          {
            tfOpName: 'Sigmoid',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          { tfOpName: 'Sin', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          { tfOpName: 'Sinh', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          { tfOpName: 'Sqrt', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          {
            tfOpName: 'Rsqrt',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Square',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          { tfOpName: 'Tan', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          { tfOpName: 'Tanh', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          { tfOpName: 'Sign', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          {
            tfOpName: 'Round',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Expm1',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Log1p',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Reciprocal',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Softplus',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Asinh',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Acosh',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Atanh',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          { tfOpName: 'Erf', category: 'basic_math', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }] },
          {
            tfOpName: 'LeakyRelu',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [
              { tfName: 'alpha', name: 'alpha', type: 'number', defaultValue: 0.2 },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'IsNan',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'IsFinite',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'IsInf',
            category: 'basic_math',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
        ];
      },
      56841: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'EmptyTensorList',
            category: 'control',
            inputs: [
              { start: 0, name: 'elementShape', type: 'shape' },
              { start: 1, name: 'maxNumElements', type: 'number' },
            ],
            attrs: [{ tfName: 'element_dtype', name: 'elementDType', type: 'dtype' }],
          },
          { tfOpName: 'LoopCond', category: 'control', inputs: [{ start: 0, name: 'pred', type: 'tensor' }] },
          {
            tfOpName: 'Switch',
            category: 'control',
            inputs: [
              { start: 0, name: 'data', type: 'tensor' },
              { start: 1, name: 'pred', type: 'tensor' },
            ],
          },
          { tfOpName: 'Merge', category: 'control', inputs: [{ start: 0, end: 0, name: 'tensors', type: 'tensors' }] },
          {
            tfOpName: 'Enter',
            category: 'control',
            inputs: [{ start: 0, name: 'tensor', type: 'tensor' }],
            attrs: [
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
              { tfName: 'frame_name', name: 'frameName', type: 'string' },
              { tfName: 'is_constant', name: 'isConstant', type: 'bool' },
            ],
          },
          {
            tfOpName: 'Exit',
            category: 'control',
            inputs: [{ start: 0, name: 'tensor', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'NextIteration',
            category: 'control',
            inputs: [{ start: 0, name: 'tensor', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'TensorArrayV3',
            category: 'control',
            inputs: [{ start: 0, name: 'size', type: 'number' }],
            attrs: [
              { tfName: 'dtype', name: 'dtype', type: 'dtype' },
              { tfName: 'element_shape', name: 'elementShape', type: 'shape' },
              { tfName: 'dynamic_size', name: 'dynamicSize', type: 'bool' },
              { tfName: 'clear_after_read', name: 'clearAfterRead', type: 'bool' },
              { tfName: 'identical_element_shapes', name: 'identicalElementShapes', type: 'bool' },
              { tfName: 'tensor_array_name', name: 'name', type: 'string' },
            ],
          },
          {
            tfOpName: 'TensorArrayWriteV3',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorArrayId', type: 'tensor' },
              { start: 1, name: 'index', type: 'number' },
              { start: 2, name: 'tensor', type: 'tensor' },
              { start: 3, name: 'flowIn', type: 'number' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'TensorArrayReadV3',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorArrayId', type: 'tensor' },
              { start: 1, name: 'index', type: 'number' },
              { start: 2, name: 'flowIn', type: 'number' },
            ],
            attrs: [{ tfName: 'dtype', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'TensorArrayGatherV3',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorArrayId', type: 'tensor' },
              { start: 1, name: 'indices', type: 'number[]' },
              { start: 2, name: 'flowIn', type: 'number' },
            ],
            attrs: [
              { tfName: 'dtype', name: 'dtype', type: 'dtype' },
              { tfName: 'element_shape', name: 'elementShape', type: 'shape' },
            ],
          },
          {
            tfOpName: 'TensorArrayScatterV3',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorArrayId', type: 'tensor' },
              { start: 1, name: 'indices', type: 'number[]' },
              { start: 2, name: 'tensor', type: 'tensor' },
              { start: 3, name: 'flowIn', type: 'number' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype' }],
          },
          {
            tfOpName: 'TensorArrayConcatV3',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorArrayId', type: 'tensor' },
              { start: 1, name: 'flowIn', type: 'number' },
            ],
            attrs: [
              { tfName: 'dtype', name: 'dtype', type: 'dtype' },
              { tfName: 'element_shape_except0', name: 'elementShapeExcept0', type: 'shape', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'TensorArraySplitV3',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorArrayId', type: 'tensor' },
              { start: 1, name: 'tensor', type: 'tensor' },
              { start: 2, name: 'lengths', type: 'number[]' },
              { start: 3, name: 'flowIn', type: 'number' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype' }],
          },
          {
            tfOpName: 'TensorArraySizeV3',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorArrayId', type: 'tensor' },
              { start: 1, name: 'flowIn', type: 'number' },
            ],
          },
          { tfOpName: 'TensorArrayCloseV3', category: 'control', inputs: [{ start: 0, name: 'tensorArrayId', type: 'tensor' }] },
          {
            tfOpName: 'StatelessIf',
            category: 'control',
            inputs: [
              { start: 0, name: 'cond', type: 'tensor' },
              { start: 1, end: 0, name: 'args', type: 'tensors' },
            ],
            attrs: [
              { tfName: 'then_branch', name: 'thenBranch', type: 'func' },
              { tfName: 'else_branch', name: 'elseBranch', type: 'func' },
            ],
          },
          {
            tfOpName: 'If',
            category: 'control',
            inputs: [
              { start: 0, name: 'cond', type: 'tensor' },
              { start: 1, end: 0, name: 'args', type: 'tensors' },
            ],
            attrs: [
              { tfName: 'then_branch', name: 'thenBranch', type: 'func' },
              { tfName: 'else_branch', name: 'elseBranch', type: 'func' },
            ],
          },
          {
            tfOpName: 'StatelessWhile',
            category: 'control',
            inputs: [{ start: 0, end: 0, name: 'args', type: 'tensors' }],
            attrs: [
              { tfName: 'cond', name: 'cond', type: 'func' },
              { tfName: 'body', name: 'body', type: 'func' },
            ],
          },
          {
            tfOpName: 'While',
            category: 'control',
            inputs: [{ start: 0, end: 0, name: 'args', type: 'tensors' }],
            attrs: [
              { tfName: 'cond', name: 'cond', type: 'func' },
              { tfName: 'body', name: 'body', type: 'func' },
            ],
          },
          {
            tfOpName: 'TensorListScatter',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensor', type: 'tensor' },
              { start: 1, name: 'indices', type: 'number[]' },
              { start: 2, name: 'elementShape', type: 'shape' },
            ],
            attrs: [{ tfName: 'element_dtype', name: 'elementDType', type: 'dtype' }],
          },
          {
            tfOpName: 'TensorListScatterV2',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensor', type: 'tensor' },
              { start: 1, name: 'indices', type: 'number[]' },
              { start: 2, name: 'elementShape', type: 'shape' },
              { start: 3, name: 'numElements', type: 'number' },
            ],
            attrs: [{ tfName: 'element_dtype', name: 'elementDType', type: 'dtype' }],
          },
          {
            tfOpName: 'TensorListGather',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorListId', type: 'tensor' },
              { start: 1, name: 'indices', type: 'number[]' },
              { start: 2, name: 'elementShape', type: 'shape' },
            ],
            attrs: [{ tfName: 'element_dtype', name: 'elementDType', type: 'dtype' }],
          },
          {
            tfOpName: 'TensorListGetItem',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorListId', type: 'tensor' },
              { start: 1, name: 'index', type: 'number' },
              { start: 2, name: 'elementShape', type: 'shape' },
            ],
            attrs: [{ tfName: 'element_dtype', name: 'elementDType', type: 'dtype' }],
          },
          {
            tfOpName: 'TensorListSetItem',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorListId', type: 'tensor' },
              { start: 1, name: 'index', type: 'number' },
              { start: 2, name: 'tensor', type: 'tensor' },
            ],
            attrs: [{ tfName: 'element_dtype', name: 'elementDType', type: 'dtype' }],
          },
          {
            tfOpName: 'TensorListReserve',
            category: 'control',
            inputs: [
              { start: 0, name: 'elementShape', type: 'shape' },
              { start: 1, name: 'numElements', type: 'number' },
            ],
            attrs: [{ tfName: 'element_dtype', name: 'elementDType', type: 'dtype' }],
          },
          {
            tfOpName: 'TensorListFromTensor',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensor', type: 'tensor' },
              { start: 1, name: 'elementShape', type: 'shape' },
            ],
            attrs: [{ tfName: 'element_dtype', name: 'elementDType', type: 'dtype' }],
          },
          {
            tfOpName: 'TensorListStack',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorListId', type: 'tensor' },
              { start: 1, name: 'elementShape', type: 'shape' },
            ],
            attrs: [
              { tfName: 'element_dtype', name: 'elementDType', type: 'dtype' },
              { tfName: 'num_elements', name: 'numElements', type: 'dtype' },
            ],
          },
          {
            tfOpName: 'TensorListSplit',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensor', type: 'tensor' },
              { start: 1, name: 'elementShape', type: 'shape' },
              { start: 2, name: 'lengths', type: 'number[]' },
            ],
            attrs: [{ tfName: 'element_dtype', name: 'elementDType', type: 'dtype' }],
          },
          {
            tfOpName: 'TensorListConcat',
            category: 'control',
            inputs: [{ start: 0, name: 'tensorListId', type: 'tensor' }],
            attrs: [
              { tfName: 'element_shape', name: 'elementShape', type: 'shape' },
              { tfName: 'element_dtype', name: 'elementDType', type: 'dtype' },
            ],
          },
          {
            tfOpName: 'TensorListConcatV2',
            category: 'control',
            inputs: [{ start: 0, name: 'tensorListId', type: 'tensor' }],
            attrs: [
              { tfName: 'element_shape', name: 'elementShape', type: 'shape' },
              { tfName: 'element_dtype', name: 'elementDType', type: 'dtype' },
            ],
          },
          {
            tfOpName: 'TensorListPopBack',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorListId', type: 'tensor' },
              { start: 1, name: 'elementShape', type: 'shape' },
            ],
            attrs: [{ tfName: 'element_dtype', name: 'elementDType', type: 'dtype' }],
          },
          {
            tfOpName: 'TensorListPushBack',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorListId', type: 'tensor' },
              { start: 1, name: 'tensor', type: 'tensor' },
            ],
            attrs: [{ tfName: 'element_dtype', name: 'elementDType', type: 'dtype' }],
          },
          { tfOpName: 'TensorListLength', category: 'control', inputs: [{ start: 0, name: 'tensorListId', type: 'tensor' }] },
          {
            tfOpName: 'TensorListResize',
            category: 'control',
            inputs: [
              { start: 0, name: 'tensorListId', type: 'tensor' },
              { start: 1, name: 'size', type: 'number' },
            ],
          },
        ];
      },
      42998: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'AvgPool',
            category: 'convolution',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [
              { tfName: 'strides', name: 'strides', type: 'number[]' },
              { tfName: 'padding', name: 'pad', type: 'string' },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', notSupported: !0 },
              { tfName: 'ksize', name: 'kernelSize', type: 'number[]' },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'MaxPool',
            category: 'convolution',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [
              { tfName: 'strides', name: 'strides', type: 'number[]' },
              { tfName: 'padding', name: 'pad', type: 'string' },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', notSupported: !0 },
              { tfName: 'ksize', name: 'kernelSize', type: 'number[]' },
              { tfName: 'explicit_paddings', name: 'explicitPaddings', type: 'number[]', defaultValue: [], notSupported: !0 },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'MaxPoolWithArgmax',
            category: 'convolution',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [
              { tfName: 'strides', name: 'strides', type: 'number[]' },
              { tfName: 'padding', name: 'pad', type: 'string' },
              { tfName: 'ksize', name: 'kernelSize', type: 'number[]' },
              { tfName: 'include_batch_in_index', name: 'includeBatchInIndex', type: 'bool' },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'AvgPool3D',
            category: 'convolution',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [
              { tfName: 'strides', name: 'strides', type: 'number[]' },
              { tfName: 'padding', name: 'pad', type: 'string' },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', notSupported: !0 },
              { tfName: 'ksize', name: 'kernelSize', type: 'number[]' },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'MaxPool3D',
            category: 'convolution',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [
              { tfName: 'strides', name: 'strides', type: 'number[]' },
              { tfName: 'padding', name: 'pad', type: 'string' },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', notSupported: !0 },
              { tfName: 'ksize', name: 'kernelSize', type: 'number[]' },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'Conv1D',
            category: 'convolution',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'filter', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'stride', name: 'stride', type: 'number' },
              { tfName: 'padding', name: 'pad', type: 'string' },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', defaultValue: 'NWC' },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
              { tfName: 'dilation', name: 'dilation', type: 'number', defaultValue: 1 },
            ],
          },
          {
            tfOpName: 'Conv2D',
            category: 'convolution',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'filter', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
              { tfName: 'strides', name: 'strides', type: 'number[]' },
              { tfName: 'padding', name: 'pad', type: 'string' },
              { tfName: 'useCudnnOnGpu', name: 'useCudnnOnGpu', type: 'bool' },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', defaultValue: 'NHWC' },
              { tfName: 'explicit_paddings', name: 'explicitPaddings', type: 'number[]', defaultValue: [] },
              { tfName: 'dilations', name: 'dilations', type: 'number[]' },
            ],
          },
          {
            tfOpName: '_FusedConv2D',
            category: 'convolution',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'filter', type: 'tensor' },
              { start: 2, end: 0, name: 'args', type: 'tensors' },
            ],
            attrs: [
              { tfName: 'num_args', name: 'numArgs', type: 'number' },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
              { tfName: 'strides', name: 'strides', type: 'number[]' },
              { tfName: 'padding', name: 'pad', type: 'string' },
              { tfName: 'explicit_paddings', name: 'explicitPaddings', type: 'number[]', defaultValue: [] },
              { tfName: 'use_cudnn_on_gpu', name: 'useCudnnOnGpu', type: 'bool', defaultValue: !0 },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', defaultValue: 'NHWC' },
              { tfName: 'dilations', name: 'dilations', type: 'number[]', defaultValue: [1, 1, 1, 1] },
              { tfName: 'fused_ops', name: 'fusedOps', type: 'string[]', defaultValue: [] },
              { tfName: 'epsilon', name: 'epsilon', type: 'number', defaultValue: 1e-4 },
              { tfName: 'leakyrelu_alpha', name: 'leakyreluAlpha', type: 'number', defaultValue: 0.2 },
            ],
          },
          {
            tfOpName: 'Conv2DBackpropInput',
            category: 'convolution',
            inputs: [
              { start: 2, name: 'x', type: 'tensor' },
              { start: 1, name: 'filter', type: 'tensor' },
              { start: 0, name: 'outputShape', type: 'number[]' },
            ],
            attrs: [
              { tfName: 'strides', name: 'strides', type: 'number[]' },
              { tfName: 'padding', name: 'pad', type: 'string' },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', notSupported: !0 },
              { tfName: 'explicit_paddings', name: 'explicitPaddings', type: 'number[]', defaultValue: [] },
              { tfName: 'dilations', name: 'dilations', type: 'number[]', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'DepthwiseConv2d',
            category: 'convolution',
            inputs: [
              { start: 0, name: 'input', type: 'tensor' },
              { start: 1, name: 'filter', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'strides', name: 'strides', type: 'number[]' },
              { tfName: 'padding', name: 'pad', type: 'string' },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', defaultValue: 'NHWC' },
              { tfName: 'explicit_paddings', name: 'explicitPaddings', type: 'number[]', defaultValue: [] },
              { tfName: 'dilations', name: 'dilations', type: 'number[]' },
            ],
          },
          {
            tfOpName: 'DepthwiseConv2dNative',
            category: 'convolution',
            inputs: [
              { start: 0, name: 'input', type: 'tensor' },
              { start: 1, name: 'filter', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'strides', name: 'strides', type: 'number[]' },
              { tfName: 'padding', name: 'pad', type: 'string' },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', defaultValue: 'NHWC' },
              { tfName: 'explicit_paddings', name: 'explicitPaddings', type: 'number[]', defaultValue: [] },
              { tfName: 'dilations', name: 'dilations', type: 'number[]' },
            ],
          },
          {
            tfOpName: 'FusedDepthwiseConv2dNative',
            category: 'convolution',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'filter', type: 'tensor' },
              { start: 2, end: 0, name: 'args', type: 'tensors' },
            ],
            attrs: [
              { tfName: 'num_args', name: 'numArgs', type: 'number' },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
              { tfName: 'strides', name: 'strides', type: 'number[]' },
              { tfName: 'padding', name: 'pad', type: 'string' },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', defaultValue: 'NHWC' },
              { tfName: 'dilations', name: 'dilations', type: 'number[]', defaultValue: [1, 1, 1, 1] },
              { tfName: 'fused_ops', name: 'fusedOps', type: 'string[]', defaultValue: [] },
              { tfName: 'explicit_paddings', name: 'explicitPaddings', type: 'number[]', defaultValue: [] },
            ],
          },
          {
            tfOpName: 'Conv3D',
            category: 'convolution',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'filter', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'strides', name: 'strides', type: 'number[]' },
              { tfName: 'padding', name: 'pad', type: 'string' },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', defaultValue: 'NHWC' },
              { tfName: 'dilations', name: 'dilations', type: 'number[]' },
            ],
          },
          {
            tfOpName: 'Dilation2D',
            category: 'convolution',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'filter', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'strides', name: 'strides', type: 'number[]' },
              { tfName: 'rates', name: 'dilations', type: 'number[]' },
              { tfName: 'padding', name: 'pad', type: 'string' },
            ],
          },
        ];
      },
      50139: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'Fill',
            category: 'creation',
            inputs: [
              { start: 0, name: 'shape', type: 'number[]' },
              { start: 1, name: 'value', type: 'number' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype' }],
          },
          {
            tfOpName: 'LinSpace',
            category: 'creation',
            inputs: [
              { start: 0, name: 'start', type: 'number' },
              { start: 1, name: 'stop', type: 'number' },
              { start: 2, name: 'num', type: 'number' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'OneHot',
            category: 'creation',
            inputs: [
              { start: 0, name: 'indices', type: 'tensor' },
              { start: 1, name: 'depth', type: 'number' },
              { start: 2, name: 'onValue', type: 'number', defaultValue: 1 },
              { start: 3, name: 'offValue', type: 'number', defaultValue: 0 },
            ],
            attrs: [
              { tfName: 'axis', name: 'axis', type: 'number', notSupported: !0 },
              { tfName: 'T', name: 'dtype', type: 'dtype' },
            ],
          },
          { tfOpName: 'Ones', category: 'creation', inputs: [{ start: 0, name: 'shape', type: 'number[]' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype' }] },
          { tfOpName: 'OnesLike', category: 'creation', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'dtype', name: 'dtype', type: 'dtype' }] },
          {
            tfOpName: 'RandomStandardNormal',
            category: 'creation',
            inputs: [{ start: 0, name: 'shape', type: 'number[]' }],
            attrs: [
              { tfName: 'seed', name: 'seed', type: 'number', defaultValue: 0 },
              { tfName: 'seed2', name: 'seed2', type: 'number', defaultValue: 0, notSupported: !0 },
              { tfName: 'dtype', name: 'dtype', type: 'dtype' },
              { tfName: 'T', name: 'T', type: 'number', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'RandomUniform',
            category: 'creation',
            inputs: [{ start: 0, name: 'shape', type: 'number[]' }],
            attrs: [
              { tfName: 'minval', name: 'minval', type: 'number', defaultValue: 0 },
              { tfName: 'maxval', name: 'maxval', type: 'number', defaultValue: 1 },
              { tfName: 'dtype', name: 'dtype', type: 'dtype' },
              { tfName: 'seed', name: 'seed', type: 'number', defaultValue: 0 },
              { tfName: 'seed2', name: 'seed2', type: 'number', defaultValue: 0, notSupported: !0 },
              { tfName: 'T', name: 'T', type: 'number', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'RandomUniformInt',
            category: 'creation',
            inputs: [{ start: 0, name: 'shape', type: 'number[]' }],
            attrs: [
              { tfName: 'minval', name: 'minval', type: 'number' },
              { tfName: 'maxval', name: 'maxval', type: 'number' },
              { tfName: 'seed', name: 'seed', type: 'number', defaultValue: 0 },
              { tfName: 'seed2', name: 'seed2', type: 'number', defaultValue: 0, notSupported: !0 },
            ],
          },
          {
            tfOpName: 'Range',
            category: 'creation',
            inputs: [
              { start: 0, name: 'start', type: 'number' },
              { start: 1, name: 'stop', type: 'number' },
              { start: 2, name: 'step', type: 'number', defaultValue: 0 },
            ],
            attrs: [{ tfName: 'Tidx', name: 'dtype', type: 'dtype' }],
          },
          {
            tfOpName: 'TruncatedNormal',
            category: 'creation',
            inputs: [{ start: 0, name: 'shape', type: 'number[]' }],
            attrs: [
              { tfName: 'means', name: 'mean', type: 'number', defaultValue: 0 },
              { tfName: 'stddev', name: 'stdDev', type: 'number', defaultValue: 1 },
              { tfName: 'seed', name: 'seed', type: 'number' },
              { tfName: 'seed2', name: 'seed2', type: 'number', defaultValue: 0, notSupported: !0 },
              { tfName: 'dtype', name: 'dtype', type: 'dtype' },
              { tfName: 'T', name: 'T', type: 'number', notSupported: !0 },
            ],
          },
          { tfOpName: 'Zeros', category: 'creation', inputs: [{ start: 0, name: 'shape', type: 'number[]' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype' }] },
          { tfOpName: 'ZerosLike', category: 'creation', inputs: [{ start: 0, name: 'x', type: 'tensor' }], attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype' }] },
          {
            tfOpName: 'Multinomial',
            category: 'creation',
            inputs: [
              { start: 0, name: 'logits', type: 'tensor' },
              { start: 1, name: 'numSamples', type: 'number' },
            ],
            attrs: [
              { tfName: 'seed', name: 'seed', type: 'number' },
              { tfName: 'seed2', name: 'seed2', type: 'number' },
              { tfName: 'T', name: 'dtype', type: 'dtype' },
              { tfName: 'output_dtype', name: 'output_dtype', type: 'dtype' },
            ],
          },
        ];
      },
      29593: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'NonMaxSuppressionV2',
            category: 'dynamic',
            inputs: [
              { start: 0, name: 'boxes', type: 'tensor' },
              { start: 1, name: 'scores', type: 'tensor' },
              { start: 2, name: 'maxOutputSize', type: 'number' },
              { start: 3, name: 'iouThreshold', type: 'number' },
            ],
          },
          {
            tfOpName: 'NonMaxSuppressionV3',
            category: 'dynamic',
            inputs: [
              { start: 0, name: 'boxes', type: 'tensor' },
              { start: 1, name: 'scores', type: 'tensor' },
              { start: 2, name: 'maxOutputSize', type: 'number' },
              { start: 3, name: 'iouThreshold', type: 'number' },
              { start: 4, name: 'scoreThreshold', type: 'number' },
            ],
          },
          {
            tfOpName: 'NonMaxSuppressionV4',
            category: 'dynamic',
            inputs: [
              { start: 0, name: 'boxes', type: 'tensor' },
              { start: 1, name: 'scores', type: 'tensor' },
              { start: 2, name: 'maxOutputSize', type: 'number' },
              { start: 3, name: 'iouThreshold', type: 'number' },
              { start: 4, name: 'scoreThreshold', type: 'number' },
            ],
            attrs: [
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
              { tfName: 'T_threshold', name: 'threshold', type: 'dtype', notSupported: !0 },
              { tfName: 'pad_to_max_output_size', name: 'padToMaxOutputSize', type: 'bool' },
            ],
          },
          {
            tfOpName: 'NonMaxSuppressionV5',
            category: 'dynamic',
            inputs: [
              { start: 0, name: 'boxes', type: 'tensor' },
              { start: 1, name: 'scores', type: 'tensor' },
              { start: 2, name: 'maxOutputSize', type: 'number' },
              { start: 3, name: 'iouThreshold', type: 'number' },
              { start: 4, name: 'scoreThreshold', type: 'number' },
              { start: 5, name: 'softNmsSigma', type: 'number' },
            ],
          },
          {
            tfOpName: 'Where',
            category: 'dynamic',
            inputs: [{ start: 0, name: 'condition', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'ListDiff',
            category: 'dynamic',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'y', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
        ];
      },
      58308: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'LowerBound',
            category: 'evaluation',
            inputs: [
              { start: 0, name: 'sortedSequence', type: 'tensor' },
              { start: 1, name: 'values', type: 'tensor' },
            ],
          },
          {
            tfOpName: 'TopKV2',
            category: 'evaluation',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'k', type: 'number' },
            ],
            attrs: [{ tfName: 'sorted', name: 'sorted', type: 'bool' }],
          },
          {
            tfOpName: 'UpperBound',
            category: 'evaluation',
            inputs: [
              { start: 0, name: 'sortedSequence', type: 'tensor' },
              { start: 1, name: 'values', type: 'tensor' },
            ],
          },
          { tfOpName: 'Unique', category: 'evaluation', inputs: [{ start: 0, name: 'x', type: 'tensor' }] },
          {
            tfOpName: 'UniqueV2',
            category: 'evaluation',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number' },
            ],
          },
        ];
      },
      77684: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'PlaceholderWithDefault',
            category: 'graph',
            inputs: [{ start: 0, name: 'default', type: 'tensor' }],
            attrs: [
              { tfName: 'shape', name: 'shape', type: 'shape' },
              { tfName: 'dtype', name: 'dtype', type: 'dtype' },
            ],
          },
          {
            tfOpName: 'Placeholder',
            category: 'graph',
            attrs: [
              { tfName: 'shape', name: 'shape', type: 'shape' },
              { tfName: 'dtype', name: 'dtype', type: 'dtype' },
            ],
          },
          { tfOpName: 'Const', category: 'graph' },
          { tfOpName: 'Identity', category: 'graph', inputs: [{ start: 0, name: 'x', type: 'tensor' }] },
          { tfOpName: 'IdentityN', category: 'graph', inputs: [{ start: 0, end: 0, name: 'x', type: 'tensors' }] },
          { tfOpName: 'Snapshot', category: 'graph', inputs: [{ start: 0, name: 'x', type: 'tensor' }] },
          { tfOpName: 'Rank', category: 'graph', inputs: [{ start: 0, name: 'x', type: 'tensor' }] },
          { tfOpName: 'Size', category: 'graph', inputs: [{ start: 0, name: 'x', type: 'tensor' }] },
          { tfOpName: 'Shape', category: 'graph', inputs: [{ start: 0, name: 'x', type: 'tensor' }] },
          { tfOpName: 'ShapeN', category: 'graph', inputs: [{ start: 0, end: 0, name: 'x', type: 'tensors' }] },
          {
            tfOpName: 'Print',
            category: 'graph',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'data', type: 'tensors' },
            ],
            attrs: [
              { tfName: 'message', name: 'message', type: 'string' },
              { tfName: 'first_n', name: 'firstN', type: 'number', notSupported: !0 },
              { tfName: 'summarize', name: 'summarize', type: 'number', defaultValue: 3 },
            ],
          },
          { tfOpName: 'NoOp', category: 'graph', inputs: [] },
          { tfOpName: 'StopGradient', category: 'graph', inputs: [{ start: 0, name: 'x', type: 'tensor' }] },
          {
            tfOpName: 'FakeQuantWithMinMaxVars',
            category: 'graph',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [
              { tfName: 'min', name: 'min', type: 'number' },
              { tfName: 'max', name: 'max', type: 'number' },
            ],
          },
        ];
      },
      83177: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'HashTable',
            category: 'hash_table',
            inputs: [],
            attrs: [
              { tfName: 'shared_name', name: 'sharedName', type: 'string' },
              { tfName: 'use_node_name_sharing', name: 'useNodeNameSharing', type: 'bool' },
              { tfName: 'key_dtype', name: 'keyDType', type: 'dtype' },
              { tfName: 'value_dtype', name: 'valueDType', type: 'dtype' },
            ],
          },
          {
            tfOpName: 'HashTableV2',
            category: 'hash_table',
            inputs: [],
            attrs: [
              { tfName: 'shared_name', name: 'sharedName', type: 'string' },
              { tfName: 'use_node_name_sharing', name: 'useNodeNameSharing', type: 'bool' },
              { tfName: 'key_dtype', name: 'keyDType', type: 'dtype' },
              { tfName: 'value_dtype', name: 'valueDType', type: 'dtype' },
            ],
          },
          {
            tfOpName: 'LookupTableImport',
            category: 'hash_table',
            inputs: [
              { start: 0, name: 'tableHandle', type: 'tensor' },
              { start: 1, name: 'keys', type: 'tensor' },
              { start: 2, name: 'values', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'Tin', name: 'tIn', type: 'dtype', notSupported: !0 },
              { tfName: 'Tout', name: 'tOut', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'LookupTableImportV2',
            category: 'hash_table',
            inputs: [
              { start: 0, name: 'tableHandle', type: 'tensor' },
              { start: 1, name: 'keys', type: 'tensor' },
              { start: 2, name: 'values', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'Tin', name: 'tIn', type: 'dtype', notSupported: !0 },
              { tfName: 'Tout', name: 'tOut', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'LookupTableFind',
            category: 'hash_table',
            inputs: [
              { start: 0, name: 'tableHandle', type: 'tensor' },
              { start: 1, name: 'keys', type: 'tensor' },
              { start: 2, name: 'defaultValue', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'Tin', name: 'tIn', type: 'dtype', notSupported: !0 },
              { tfName: 'Tout', name: 'tOut', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'LookupTableFindV2',
            category: 'hash_table',
            inputs: [
              { start: 0, name: 'tableHandle', type: 'tensor' },
              { start: 1, name: 'keys', type: 'tensor' },
              { start: 2, name: 'defaultValue', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'Tin', name: 'tIn', type: 'dtype', notSupported: !0 },
              { tfName: 'Tout', name: 'tOut', type: 'dtype', notSupported: !0 },
            ],
          },
          { tfOpName: 'LookupTableSize', category: 'hash_table', inputs: [{ start: 0, name: 'tableHandle', type: 'tensor' }] },
          { tfOpName: 'LookupTableSizeV2', category: 'hash_table', inputs: [{ start: 0, name: 'tableHandle', type: 'tensor' }] },
          {
            tfOpName: 'InitializeTable',
            category: 'hash_table',
            inputs: [
              { start: 0, name: 'tableHandle', type: 'tensor' },
              { start: 1, name: 'keys', type: 'tensor' },
              { start: 2, name: 'values', type: 'tensor' },
            ],
          },
          {
            tfOpName: 'InitializeTableV2',
            category: 'hash_table',
            inputs: [
              { start: 0, name: 'tableHandle', type: 'tensor' },
              { start: 1, name: 'keys', type: 'tensor' },
              { start: 2, name: 'values', type: 'tensor' },
            ],
          },
        ];
      },
      69437: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'ResizeBilinear',
            category: 'image',
            inputs: [
              { start: 0, name: 'images', type: 'tensor' },
              { start: 1, name: 'size', type: 'number[]' },
            ],
            attrs: [
              { tfName: 'align_corners', name: 'alignCorners', type: 'bool' },
              { tfName: 'half_pixel_centers', name: 'halfPixelCenters', type: 'bool' },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'ResizeNearestNeighbor',
            category: 'image',
            inputs: [
              { start: 0, name: 'images', type: 'tensor' },
              { start: 1, name: 'size', type: 'number[]' },
            ],
            attrs: [
              { tfName: 'align_corners', name: 'alignCorners', type: 'bool' },
              { tfName: 'half_pixel_centers', name: 'halfPixelCenters', type: 'bool' },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'CropAndResize',
            category: 'image',
            inputs: [
              { start: 0, name: 'image', type: 'tensor' },
              { start: 1, name: 'boxes', type: 'tensor' },
              { start: 2, name: 'boxInd', type: 'tensor' },
              { start: 3, name: 'cropSize', type: 'number[]' },
            ],
            attrs: [
              { tfName: 'method', name: 'method', type: 'string' },
              { tfName: 'extrapolation_value', name: 'extrapolationValue', type: 'number' },
            ],
          },
          {
            tfOpName: 'ImageProjectiveTransformV3',
            category: 'image',
            inputs: [
              { start: 0, name: 'images', type: 'tensor' },
              { start: 1, name: 'transforms', type: 'tensor' },
              { start: 2, name: 'outputShape', type: 'number[]' },
              { start: 3, name: 'fillValue', type: 'number' },
            ],
            attrs: [
              { tfName: 'interpolation', name: 'interpolation', type: 'string' },
              { tfName: 'fill_mode', name: 'fillMode', type: 'string' },
            ],
          },
        ];
      },
      83235: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'Equal',
            category: 'logical',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'NotEqual',
            category: 'logical',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Greater',
            category: 'logical',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'GreaterEqual',
            category: 'logical',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Less',
            category: 'logical',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'LessEqual',
            category: 'logical',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'LogicalAnd',
            category: 'logical',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'LogicalNot',
            category: 'logical',
            inputs: [{ start: 0, name: 'a', type: 'tensor' }],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'LogicalOr',
            category: 'logical',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Select',
            category: 'logical',
            inputs: [
              { start: 0, name: 'condition', type: 'tensor' },
              { start: 1, name: 'a', type: 'tensor' },
              { start: 2, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'SelectV2',
            category: 'logical',
            inputs: [
              { start: 0, name: 'condition', type: 'tensor' },
              { start: 1, name: 'a', type: 'tensor' },
              { start: 2, name: 'b', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'BitwiseAnd',
            category: 'logical',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'y', type: 'tensor' },
            ],
          },
        ];
      },
      34418: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: '_FusedMatMul',
            category: 'matrices',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
              { start: 2, end: 0, name: 'args', type: 'tensors' },
            ],
            attrs: [
              { tfName: 'num_args', name: 'numArgs', type: 'number' },
              { tfName: 'fused_ops', name: 'fusedOps', type: 'string[]', defaultValue: [] },
              { tfName: 'epsilon', name: 'epsilon', type: 'number', defaultValue: 1e-4 },
              { tfName: 'transpose_a', name: 'transposeA', type: 'bool', defaultValue: !1 },
              { tfName: 'transpose_b', name: 'transposeB', type: 'bool', defaultValue: !1 },
              { tfName: 'leakyrelu_alpha', name: 'leakyreluAlpha', type: 'number', defaultValue: 0.2 },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'MatMul',
            category: 'matrices',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'transpose_a', name: 'transposeA', type: 'bool', defaultValue: !1 },
              { tfName: 'transpose_b', name: 'transposeB', type: 'bool', defaultValue: !1 },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'BatchMatMul',
            category: 'matrices',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'adj_x', name: 'transposeA', type: 'bool', defaultValue: !1 },
              { tfName: 'adj_y', name: 'transposeB', type: 'bool', defaultValue: !1 },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'BatchMatMulV2',
            category: 'matrices',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'b', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'adj_x', name: 'transposeA', type: 'bool', defaultValue: !1 },
              { tfName: 'adj_y', name: 'transposeB', type: 'bool', defaultValue: !1 },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'Transpose',
            category: 'matrices',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'perm', type: 'number[]' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'Einsum',
            category: 'matrices',
            inputs: [{ start: 0, end: 0, name: 'tensors', type: 'tensors' }],
            attrs: [
              { tfName: 'equation', name: 'equation', type: 'string' },
              { tfName: 'N', name: 'n', type: 'number', defaultValue: 2 },
              { tfName: 'T', name: 'dtype', type: 'dtype' },
            ],
          },
          {
            tfOpName: 'MatrixBandPart',
            category: 'matrices',
            inputs: [
              { start: 0, name: 'a', type: 'tensor' },
              { start: 1, name: 'numLower', type: 'tensor' },
              { start: 1, name: 'numUpper', type: 'tensor' },
            ],
          },
        ];
      },
      66845: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'EuclideanNorm',
            category: 'normalization',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number[]' },
            ],
            attrs: [{ tfName: 'keep_dims', name: 'keepDims', type: 'bool', defaultValue: !1 }],
          },
          {
            tfOpName: 'FusedBatchNorm',
            category: 'normalization',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'scale', type: 'tensor' },
              { start: 2, name: 'offset', type: 'tensor' },
              { start: 3, name: 'mean', type: 'tensor' },
              { start: 4, name: 'variance', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'epsilon', name: 'epsilon', type: 'number', defaultValue: 0.001 },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'FusedBatchNormV2',
            category: 'normalization',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'scale', type: 'tensor' },
              { start: 2, name: 'offset', type: 'tensor' },
              { start: 3, name: 'mean', type: 'tensor' },
              { start: 4, name: 'variance', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'epsilon', name: 'epsilon', type: 'number', defaultValue: 0.001 },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'FusedBatchNormV3',
            category: 'normalization',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'scale', type: 'tensor' },
              { start: 2, name: 'offset', type: 'tensor' },
              { start: 3, name: 'mean', type: 'tensor' },
              { start: 4, name: 'variance', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'epsilon', name: 'epsilon', type: 'number', defaultValue: 0.001 },
              { tfName: 'data_format', name: 'dataFormat', type: 'string', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'LRN',
            category: 'normalization',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [
              { tfName: 'depth_radius', name: 'radius', type: 'number', defaultValue: 5 },
              { tfName: 'bias', name: 'bias', type: 'number', defaultValue: 1 },
              { tfName: 'alpha', name: 'alpha', type: 'number', defaultValue: 1 },
              { tfName: 'beta', name: 'beta', type: 'number', defaultValue: 0.5 },
            ],
          },
          { tfOpName: 'Softmax', category: 'normalization', inputs: [{ start: 0, name: 'x', type: 'tensor' }] },
          { tfOpName: 'LogSoftmax', category: 'normalization', inputs: [{ start: 0, name: 'x', type: 'tensor' }] },
        ];
      },
      74749: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'Bincount',
            category: 'reduction',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'size', type: 'number' },
              { start: 2, name: 'weights', type: 'tensor' },
            ],
          },
          {
            tfOpName: 'DenseBincount',
            category: 'reduction',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'size', type: 'number' },
              { start: 2, name: 'weights', type: 'tensor' },
            ],
            attrs: [{ tfName: 'binary_output', name: 'binaryOutput', type: 'bool' }],
          },
          {
            tfOpName: 'Max',
            category: 'reduction',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number[]' },
            ],
            attrs: [{ tfName: 'keep_dims', name: 'keepDims', type: 'bool' }],
          },
          {
            tfOpName: 'Mean',
            category: 'reduction',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number[]' },
            ],
            attrs: [{ tfName: 'keep_dims', name: 'keepDims', type: 'bool' }],
          },
          {
            tfOpName: 'Min',
            category: 'reduction',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number[]' },
            ],
            attrs: [{ tfName: 'keep_dims', name: 'keepDims', type: 'bool' }],
          },
          {
            tfOpName: 'Sum',
            category: 'reduction',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number[]' },
            ],
            attrs: [{ tfName: 'keep_dims', name: 'keepDims', type: 'bool' }],
          },
          {
            tfOpName: 'All',
            category: 'reduction',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number[]' },
            ],
            attrs: [{ tfName: 'keep_dims', name: 'keepDims', type: 'bool' }],
          },
          {
            tfOpName: 'Any',
            category: 'reduction',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number[]' },
            ],
            attrs: [{ tfName: 'keep_dims', name: 'keepDims', type: 'bool' }],
          },
          {
            tfOpName: 'ArgMax',
            category: 'reduction',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number' },
            ],
          },
          {
            tfOpName: 'ArgMin',
            category: 'reduction',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number' },
            ],
          },
          {
            tfOpName: 'Prod',
            category: 'reduction',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number[]' },
            ],
            attrs: [
              { tfName: 'keep_dims', name: 'keepDims', type: 'bool' },
              { tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'Cumprod',
            category: 'reduction',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number' },
            ],
            attrs: [
              { tfName: 'exclusive', name: 'exclusive', type: 'bool' },
              { tfName: 'reverse', name: 'reverse', type: 'bool' },
            ],
          },
          {
            tfOpName: 'Cumsum',
            category: 'reduction',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number' },
            ],
            attrs: [
              { tfName: 'exclusive', name: 'exclusive', type: 'bool' },
              { tfName: 'reverse', name: 'reverse', type: 'bool' },
            ],
          },
        ];
      },
      9929: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'ConcatV2',
            category: 'slice_join',
            inputs: [
              { start: 0, end: -1, name: 'tensors', type: 'tensors' },
              { start: -1, name: 'axis', type: 'number' },
            ],
            attrs: [{ tfName: 'N', name: 'n', type: 'number', defaultValue: 2 }],
          },
          {
            tfOpName: 'Concat',
            category: 'slice_join',
            inputs: [
              { start: 1, end: 0, name: 'tensors', type: 'tensors' },
              { start: 0, name: 'axis', type: 'number' },
            ],
            attrs: [{ tfName: 'N', name: 'n', type: 'number', defaultValue: 2 }],
          },
          {
            tfOpName: 'GatherV2',
            category: 'slice_join',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'indices', type: 'tensor' },
              { start: 2, name: 'axis', type: 'number', defaultValue: 0 },
            ],
            attrs: [{ tfName: 'batch_dims', name: 'batchDims', type: 'number', defaultValue: 0 }],
          },
          {
            tfOpName: 'Gather',
            category: 'slice_join',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'indices', type: 'tensor' },
            ],
            attrs: [{ tfName: 'validate_indices', name: 'validateIndices', type: 'bool', notSupported: !0 }],
          },
          {
            tfOpName: 'Reverse',
            category: 'slice_join',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'dims', type: 'bool[]' },
            ],
          },
          {
            tfOpName: 'ReverseV2',
            category: 'slice_join',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number[]' },
            ],
          },
          {
            tfOpName: 'Slice',
            category: 'slice_join',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'begin', type: 'number[]' },
              { start: 2, name: 'size', type: 'number[]' },
            ],
          },
          {
            tfOpName: 'StridedSlice',
            category: 'slice_join',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'begin', type: 'number[]' },
              { start: 2, name: 'end', type: 'number[]' },
              { start: 3, name: 'strides', type: 'number[]' },
            ],
            attrs: [
              { tfName: 'begin_mask', name: 'beginMask', type: 'number', defaultValue: 0 },
              { tfName: 'end_mask', name: 'endMask', type: 'number', defaultValue: 0 },
              { tfName: 'new_axis_mask', name: 'newAxisMask', type: 'number', defaultValue: 0 },
              { tfName: 'ellipsis_mask', name: 'ellipsisMask', type: 'number', defaultValue: 0 },
              { tfName: 'shrink_axis_mask', name: 'shrinkAxisMask', type: 'number', defaultValue: 0 },
            ],
          },
          {
            tfOpName: 'Pack',
            category: 'slice_join',
            inputs: [{ start: 0, end: 0, name: 'tensors', type: 'tensors' }],
            attrs: [{ tfName: 'axis', name: 'axis', type: 'number', defaultValue: 0 }],
          },
          {
            tfOpName: 'Unpack',
            category: 'slice_join',
            inputs: [{ start: 0, name: 'tensor', type: 'tensor' }],
            attrs: [
              { tfName: 'axis', name: 'axis', type: 'number', defaultValue: 0 },
              { tfName: 'num', name: 'num', type: 'number', defaultValue: 0, notSupported: !0 },
            ],
          },
          {
            tfOpName: 'Tile',
            category: 'slice_join',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'reps', type: 'number[]' },
            ],
          },
          {
            tfOpName: 'Split',
            category: 'slice_join',
            inputs: [
              { start: 0, name: 'axis', type: 'number', defaultValue: 0 },
              { start: 1, name: 'x', type: 'tensor' },
            ],
            attrs: [{ tfName: 'num_split', name: 'numOrSizeSplits', type: 'number', defaultValue: 1 }],
          },
          {
            tfOpName: 'SplitV',
            category: 'slice_join',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'numOrSizeSplits', type: 'number[]' },
              { start: 2, name: 'axis', type: 'number', defaultValue: 0 },
            ],
          },
          {
            tfOpName: 'ScatterNd',
            category: 'slice_join',
            inputs: [
              { start: 0, name: 'indices', type: 'tensor' },
              { start: 1, name: 'values', type: 'tensor' },
              { start: 2, name: 'shape', type: 'number[]' },
            ],
          },
          {
            tfOpName: 'GatherNd',
            category: 'slice_join',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'indices', type: 'tensor' },
            ],
          },
          {
            tfOpName: 'SparseToDense',
            category: 'slice_join',
            inputs: [
              { start: 0, name: 'sparseIndices', type: 'tensor' },
              { start: 1, name: 'outputShape', type: 'number[]' },
              { start: 2, name: 'sparseValues', type: 'tensor' },
              { start: 3, name: 'defaultValue', type: 'tensor' },
            ],
            attrs: [{ tfName: 'validate_indices', name: 'validateIndices', type: 'bool', defaultValue: !1, notSupported: !0 }],
          },
          {
            tfOpName: 'TensorScatterUpdate',
            category: 'slice_join',
            inputs: [
              { start: 0, name: 'tensor', type: 'tensor' },
              { start: 1, name: 'indices', type: 'tensor' },
              { start: 2, name: 'values', type: 'tensor' },
            ],
          },
        ];
      },
      21374: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'SparseFillEmptyRows',
            category: 'sparse',
            inputs: [
              { start: 0, name: 'indices', type: 'tensor' },
              { start: 1, name: 'values', type: 'tensor' },
              { start: 2, name: 'denseShape', type: 'tensor' },
              { start: 3, name: 'defaultValue', type: 'tensor' },
            ],
          },
          {
            tfOpName: 'SparseReshape',
            category: 'sparse',
            inputs: [
              { start: 0, name: 'inputIndices', type: 'tensor' },
              { start: 1, name: 'inputShape', type: 'tensor' },
              { start: 2, name: 'newShape', type: 'tensor' },
            ],
            attrs: [{ tfName: 'T', name: 'dtype', type: 'dtype', notSupported: !0 }],
          },
          {
            tfOpName: 'SparseSegmentMean',
            category: 'sparse',
            inputs: [
              { start: 0, name: 'data', type: 'tensor' },
              { start: 1, name: 'indices', type: 'tensor' },
              { start: 2, name: 'segmentIds', type: 'tensor' },
            ],
          },
          {
            tfOpName: 'SparseSegmentSum',
            category: 'sparse',
            inputs: [
              { start: 0, name: 'data', type: 'tensor' },
              { start: 1, name: 'indices', type: 'tensor' },
              { start: 2, name: 'segmentIds', type: 'tensor' },
            ],
          },
        ];
      },
      67546: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          { tfOpName: 'FFT', category: 'spectral', inputs: [{ start: 0, name: 'x', type: 'tensor' }] },
          { tfOpName: 'IFFT', category: 'spectral', inputs: [{ start: 0, name: 'x', type: 'tensor' }] },
          {
            tfOpName: 'RFFT',
            category: 'spectral',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'fft_length', type: 'number', notSupported: !0 },
            ],
          },
          {
            tfOpName: 'IRFFT',
            category: 'spectral',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'fft_length', type: 'number', notSupported: !0 },
            ],
          },
        ];
      },
      39647: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'StaticRegexReplace',
            category: 'string',
            inputs: [{ start: 0, name: 'input', type: 'tensor' }],
            attrs: [
              { tfName: 'pattern', name: 'pattern', type: 'string' },
              { tfName: 'rewrite', name: 'rewrite', type: 'string' },
              { tfName: 'replace_global', name: 'replaceGlobal', type: 'bool' },
            ],
          },
          {
            tfOpName: 'StringNGrams',
            category: 'string',
            inputs: [
              { start: 0, name: 'data', type: 'tensor' },
              { start: 1, name: 'dataSplits', type: 'tensor' },
            ],
            attrs: [
              { tfName: 'separator', name: 'separator', type: 'string' },
              { tfName: 'ngram_widths', name: 'nGramWidths', type: 'number[]' },
              { tfName: 'left_pad', name: 'leftPad', type: 'string' },
              { tfName: 'right_pad', name: 'rightPad', type: 'string' },
              { tfName: 'pad_width', name: 'padWidth', type: 'number' },
              { tfName: 'preserve_short_sequences', name: 'preserveShortSequences', type: 'bool' },
            ],
            outputs: ['ngrams', 'ngrams_splits'],
          },
          {
            tfOpName: 'StringSplit',
            category: 'string',
            inputs: [
              { start: 0, name: 'input', type: 'tensor' },
              { start: 1, name: 'delimiter', type: 'tensor' },
            ],
            attrs: [{ tfName: 'skip_empty', name: 'skipEmpty', type: 'bool' }],
            outputs: ['indices', 'values', 'shape'],
          },
          {
            tfOpName: 'StringToHashBucketFast',
            category: 'string',
            inputs: [{ start: 0, name: 'input', type: 'tensor' }],
            attrs: [{ tfName: 'num_buckets', name: 'numBuckets', type: 'number' }],
          },
        ];
      },
      38095: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { json: () => r });
        const r = [
          {
            tfOpName: 'Cast',
            category: 'transformation',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [
              { tfName: 'SrcT', name: 'sdtype', type: 'dtype', notSupported: !0 },
              { tfName: 'DstT', name: 'dtype', type: 'dtype' },
            ],
          },
          {
            tfOpName: 'ExpandDims',
            category: 'transformation',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'axis', type: 'number' },
            ],
          },
          {
            tfOpName: 'MirrorPad',
            category: 'transformation',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'padding', type: 'number[]' },
            ],
            attrs: [{ tfName: 'mode', name: 'mode', type: 'string' }],
          },
          {
            tfOpName: 'Pad',
            category: 'transformation',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'padding', type: 'number[]' },
            ],
            attrs: [{ tfName: 'constant_value', name: 'constantValue', type: 'number', defaultValue: 0 }],
          },
          {
            tfOpName: 'PadV2',
            category: 'transformation',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'padding', type: 'number[]' },
              { start: 2, name: 'constantValue', type: 'number', defaultValue: 0 },
            ],
          },
          {
            tfOpName: 'Reshape',
            category: 'transformation',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'shape', type: 'number[]' },
            ],
          },
          {
            tfOpName: 'EnsureShape',
            category: 'transformation',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'shape', type: 'number[]' },
            ],
          },
          {
            tfOpName: 'Squeeze',
            category: 'transformation',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [{ tfName: 'axis', tfDeprecatedName: 'squeeze_dims', name: 'axis', type: 'number[]' }],
          },
          {
            tfOpName: 'SpaceToBatchND',
            category: 'transformation',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'blockShape', type: 'number[]' },
              { start: 2, name: 'paddings', type: 'number[]' },
            ],
          },
          {
            tfOpName: 'BatchToSpaceND',
            category: 'transformation',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'blockShape', type: 'number[]' },
              { start: 2, name: 'crops', type: 'number[]' },
            ],
          },
          {
            tfOpName: 'DepthToSpace',
            category: 'transformation',
            inputs: [{ start: 0, name: 'x', type: 'tensor' }],
            attrs: [
              { tfName: 'block_size', name: 'blockSize', type: 'number' },
              { tfName: 'data_format', name: 'dataFormat', type: 'string' },
            ],
          },
          {
            tfOpName: 'BroadcastTo',
            category: 'transformation',
            inputs: [
              { start: 0, name: 'x', type: 'tensor' },
              { start: 1, name: 'shape', type: 'number[]' },
            ],
            attrs: [],
          },
          {
            tfOpName: 'BroadcastArgs',
            category: 'transformation',
            inputs: [
              { start: 0, name: 's0', type: 'tensor' },
              { start: 1, name: 's1', type: 'tensor' },
            ],
            attrs: [],
          },
        ];
      },
      79856: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => A });
        var r = n(9495),
          s = n(19162),
          a = n(23470),
          o = n(82682),
          i = n(40833),
          u = n(1523),
          l = n(85438),
          c = n(36065),
          p = n(16343),
          d = n(18828),
          h = n(80052),
          f = n(4967),
          m = n(61447),
          g = n(39849),
          y = n(13358),
          b = n(10051),
          v = n(26512),
          w = n(12315),
          T = n(55659),
          x = n(7714),
          S = n(5070),
          N = n(41557),
          E = n(74477);
        function A(t, e, n, A, k = r.tidy) {
          const _ = ((t, e, n) => {
            switch (t.category) {
              case 'arithmetic':
                return k(() => o.j(t, e, n));
              case 'basic_math':
                return k(() => i.j(t, e, n));
              case 'control':
                return u.j(t, e, n);
              case 'convolution':
                return k(() => l.j(t, e, n));
              case 'creation':
                return k(() => c.j(t, e, n));
              case 'dynamic':
                return p.j(t, e, n);
              case 'evaluation':
                return k(() => d.j(t, e, n));
              case 'image':
                return k(() => m.j(t, e, n));
              case 'graph':
                return k(() => h.j(t, e, n));
              case 'logical':
                return k(() => g.j(t, e, n));
              case 'matrices':
                return k(() => y.j(t, e, n));
              case 'normalization':
                return k(() => b.j(t, e, n));
              case 'ragged':
                return k(() => v.j(t, e, n));
              case 'reduction':
                return k(() => w.j(t, e, n));
              case 'slice_join':
                return k(() => T.j(t, e, n));
              case 'sparse':
                return k(() => x.j(t, e, n));
              case 'spectral':
                return k(() => S.j(t, e, n));
              case 'string':
                return k(() => N.j(t, e, n));
              case 'transformation':
                return k(() => E.j(t, e, n));
              case 'hash_table':
                return f.j(t, e, n, A);
              case 'custom':
                const r = (0, a._e)(t.op);
                if (r && r.customExecutor) return r.customExecutor(new s.I(t, e, n));
                throw TypeError(`Custom op ${t.op} is not registered.`);
              default:
                throw TypeError(
                  `Unknown op '${t.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`,
                );
            }
          })(t, e, n);
          return r.util.isPromise(_) ? _.then((t) => [].concat(t)) : [].concat(_);
        }
      },
      18520: (t, e, n) => {
        'use strict';
        n.d(e, { $2: () => I, $A: () => F, L: () => M, MZ: () => Z, Ph: () => L, Yu: () => R, aO: () => O, bo: () => k, k1: () => P, kP: () => C, zJ: () => z });
        var r = n(9495),
          s = n(92737),
          a = n(23470),
          o = n(6439),
          i = n(49050),
          u = n(76411),
          l = n(56841),
          c = n(42998),
          p = n(50139),
          d = n(29593),
          h = n(58308),
          f = n(77684),
          m = n(83177),
          g = n(69437),
          y = n(83235),
          b = n(34418),
          v = n(66845),
          w = n(74749),
          T = n(9929),
          x = n(21374),
          S = n(67546),
          N = n(39647),
          E = n(38095),
          A = n(62045).hp;
        class k {
          static get Instance() {
            return this._instance || (this._instance = new this());
          }
          constructor() {
            const t = [].concat(...[i, u, l, c, p, d, h, f, m, g, y, b, v, w, T, x, S, N, E].map((t) => t.json));
            this.opMappers = t.reduce((t, e) => ((t[e.tfOpName] = e), t), {});
          }
          transformGraph(t, e = {}) {
            const n = t.node,
              r = [],
              s = [],
              a = [],
              i = n.reduce(
                (t, e) => (
                  (t[e.name] = this.mapNode(e)),
                  e.op.startsWith('Placeholder') ? r.push(t[e.name]) : 'Const' === e.op ? s.push(t[e.name]) : (null != e.input && 0 !== e.input.length) || a.push(t[e.name]),
                  t
                ),
                {},
              );
            let u = [];
            const l = [];
            let c = {},
              p = {};
            null != e && ((c = this.mapSignatureEntries(e.inputs)), (p = this.mapSignatureEntries(e.outputs)));
            const d = Object.keys(i);
            d.forEach((t) => {
              const e = i[t];
              e.inputNames.forEach((t, n) => {
                const [r, , s] = (0, o.lz)(t),
                  a = i[r];
                if (null != a.outputs) {
                  const t = a.outputs.indexOf(s);
                  if (-1 !== t) {
                    const s = `${r}:${t}`;
                    e.inputNames[n] = s;
                  }
                }
                e.inputs.push(a), a.children.push(e);
              });
            }),
              0 === Object.keys(p).length
                ? d.forEach((t) => {
                    const e = i[t];
                    0 === e.children.length && l.push(e);
                  })
                : Object.keys(p).forEach((t) => {
                    const [e] = (0, o.lz)(t),
                      n = i[e];
                    null != n && ((n.signatureKey = p[t]), l.push(n));
                  }),
              Object.keys(c).length > 0
                ? Object.keys(c).forEach((t) => {
                    const [e] = (0, o.lz)(t),
                      n = i[e];
                    n && ((n.signatureKey = c[t]), u.push(n));
                  })
                : (u = r);
            let h = {};
            null != t.library && null != t.library.function && (h = t.library.function.reduce((t, e) => ((t[e.signature.name] = this.mapFunction(e)), t), {}));
            const f = { nodes: i, inputs: u, outputs: l, weights: s, placeholders: r, signature: e, functions: h };
            return a.length > 0 && (f.initNodes = a), f;
          }
          mapSignatureEntries(t) {
            return Object.keys(t || {}).reduce((e, n) => ((e[t[n].name] = n), e), {});
          }
          mapNode(t) {
            const e = (0, a._e)(t.op) || this.opMappers[t.op] || {};
            null == t.attr && (t.attr = {});
            const n = {
              name: t.name,
              op: t.op,
              category: e.category,
              inputNames: (t.input || []).map((t) => (t.startsWith('^') ? t.slice(1) : t)),
              inputs: [],
              children: [],
              inputParams: {},
              attrParams: {},
              rawAttrs: t.attr,
              outputs: e.outputs,
            };
            return (
              null != e.inputs && (n.inputParams = e.inputs.reduce((t, e) => ((t[e.name] = { type: e.type, inputIndexStart: e.start, inputIndexEnd: e.end }), t), {})),
              null != e.attrs &&
                (n.attrParams = e.attrs.reduce((e, n) => {
                  const r = n.type;
                  let s;
                  switch (n.type) {
                    case 'string':
                      (s = I(t.attr, n.tfName, n.defaultValue)), void 0 === s && n.tfDeprecatedName && (s = I(t.attr, n.tfDeprecatedName, n.defaultValue));
                      break;
                    case 'string[]':
                      (s = C(t.attr, n.tfName, n.defaultValue)), void 0 === s && n.tfDeprecatedName && (s = C(t.attr, n.tfDeprecatedName, n.defaultValue));
                      break;
                    case 'number':
                      (s = M(t.attr, n.tfName, n.defaultValue || 0)), void 0 === s && n.tfDeprecatedName && (s = M(t.attr, n.tfDeprecatedName, n.defaultValue));
                      break;
                    case 'number[]':
                      (s = Z(t.attr, n.tfName, n.defaultValue)), void 0 === s && n.tfDeprecatedName && (s = Z(t.attr, n.tfDeprecatedName, n.defaultValue));
                      break;
                    case 'bool':
                      (s = O(t.attr, n.tfName, n.defaultValue)), void 0 === s && n.tfDeprecatedName && (s = O(t.attr, n.tfDeprecatedName, n.defaultValue));
                      break;
                    case 'bool[]':
                      (s = z(t.attr, n.tfName, n.defaultValue)), void 0 === s && n.tfDeprecatedName && (s = z(t.attr, n.tfDeprecatedName, n.defaultValue));
                      break;
                    case 'shape':
                      (s = P(t.attr, n.tfName, n.defaultValue)), void 0 === s && n.tfDeprecatedName && (s = P(t.attr, n.tfDeprecatedName, n.defaultValue));
                      break;
                    case 'shape[]':
                      (s = L(t.attr, n.tfName, n.defaultValue)), void 0 === s && n.tfDeprecatedName && (s = L(t.attr, n.tfDeprecatedName, n.defaultValue));
                      break;
                    case 'dtype':
                      (s = R(t.attr, n.tfName, n.defaultValue)), void 0 === s && n.tfDeprecatedName && (s = R(t.attr, n.tfDeprecatedName, n.defaultValue));
                      break;
                    case 'dtype[]':
                      (s = F(t.attr, n.tfName, n.defaultValue)), void 0 === s && n.tfDeprecatedName && (s = F(t.attr, n.tfDeprecatedName, n.defaultValue));
                      break;
                    case 'func':
                      (s = D(t.attr, n.tfName, n.defaultValue)), void 0 === s && n.tfDeprecatedName && (s = D(t.attr, n.tfDeprecatedName, n.defaultValue));
                      break;
                    case 'tensor':
                    case 'tensors':
                      break;
                    default:
                      throw new Error(`Unsupported param type: ${n.type} for op: ${t.op}`);
                  }
                  return (e[n.name] = { value: s, type: r }), e;
                }, {})),
              n
            );
          }
          mapFunction(t) {
            const e = t.nodeDef,
              n = [];
            let r = {};
            null != e && (r = e.reduce((t, e) => ((t[e.name] = this.mapNode(e)), 'Const' === e.op && n.push(t[e.name]), t), {}));
            const s = [],
              a = [];
            t.signature.inputArg.forEach((t) => {
              const [e] = (0, o.lz)(t.name),
                n = {
                  name: e,
                  op: 'Placeholder',
                  inputs: [],
                  inputNames: [],
                  category: 'graph',
                  inputParams: {},
                  attrParams: { dtype: { value: $(t.type), type: 'dtype' } },
                  children: [],
                };
              (n.signatureKey = t.name), s.push(n), (r[e] = n);
            }),
              Object.keys(r).forEach((t) => {
                const e = r[t];
                e.inputNames.forEach((t, n) => {
                  const [s, , a] = (0, o.lz)(t),
                    i = r[s];
                  if (null != i.outputs) {
                    const t = i.outputs.indexOf(a);
                    if (-1 !== t) {
                      const r = `${s}:${t}`;
                      e.inputNames[n] = r;
                    }
                  }
                  e.inputs.push(i), i.children.push(e);
                });
              });
            const i = t.ret;
            t.signature.outputArg.forEach((t) => {
              const [e, n] = (0, o.lz)(i[t.name]),
                s = r[e];
              null != s && ((s.defaultOutput = n), a.push(s));
            });
            const u = this.mapArgsToSignature(t);
            return { nodes: r, inputs: s, outputs: a, weights: n, placeholders: [], signature: u };
          }
          mapArgsToSignature(t) {
            return {
              methodName: t.signature.name,
              inputs: t.signature.inputArg.reduce((t, e) => ((t[e.name] = this.mapArgToTensorInfo(e)), t), {}),
              outputs: t.signature.outputArg.reduce((e, n) => ((e[n.name] = this.mapArgToTensorInfo(n, t.ret)), e), {}),
            };
          }
          mapArgToTensorInfo(t, e) {
            let n = t.name;
            return null != e && (n = e[n]), { name: n, dtype: t.type };
          }
        }
        function _(t, e) {
          const n = Array.isArray(t)
            ? String.fromCharCode.apply(null, t)
            : (function (t) {
                const e = (0, r.env)().global;
                if (void 0 !== e.atob) return e.atob(t);
                if (void 0 !== A) return new A(t, 'base64').toString();
                throw new Error('Unable to decode base64 in this environment. Missing built-in atob() or Buffer()');
              })(t);
          return e ? n : n.toLowerCase();
        }
        function I(t, e, n, r = !1) {
          const s = t[e];
          return null != s ? _(s.s, r) : n;
        }
        function O(t, e, n) {
          const r = t[e];
          return r ? r.b : n;
        }
        function M(t, e, n) {
          const r = t[e] || {},
            s = null != r.i ? r.i : null != r.f ? r.f : n;
          return 'number' == typeof s ? s : parseInt(s, 10);
        }
        function $(t) {
          switch (('string' == typeof t && (t = s.p[t]), t)) {
            case s.p.DT_FLOAT:
            case s.p.DT_HALF:
              return 'float32';
            case s.p.DT_INT32:
            case s.p.DT_INT64:
            case s.p.DT_INT8:
            case s.p.DT_UINT8:
              return 'int32';
            case s.p.DT_BOOL:
              return 'bool';
            case s.p.DT_DOUBLE:
              return 'float32';
            case s.p.DT_STRING:
              return 'string';
            case s.p.DT_COMPLEX64:
            case s.p.DT_COMPLEX128:
              return 'complex64';
            default:
              return null;
          }
        }
        function D(t, e, n) {
          const r = t[e];
          return r && r.func ? r.func.name : n;
        }
        function R(t, e, n) {
          const r = t[e];
          return r && r.type ? $(r.type) : n;
        }
        function F(t, e, n) {
          const r = t[e];
          return r && r.list && r.list.type ? r.list.type.map((t) => $(t)) : n;
        }
        function B(t) {
          if (!t.unknownRank) return null != t.dim ? t.dim.map((t) => ('number' == typeof t.size ? t.size : parseInt(t.size, 10))) : [];
        }
        function P(t, e, n) {
          const r = t[e];
          return r && r.shape ? B(r.shape) : n;
        }
        function Z(t, e, n) {
          const r = t[e];
          return r ? ((r.list.f && r.list.f.length ? r.list.f : r.list.i) || []).map((t) => ('number' == typeof t ? t : parseInt(t, 10))) : n;
        }
        function C(t, e, n, r = !1) {
          const s = t[e];
          return s && s.list && s.list.s ? s.list.s.map((t) => _(t, r)) : n;
        }
        function L(t, e, n) {
          const r = t[e];
          return r && r.list && r.list.shape ? r.list.shape.map((t) => B(t)) : n;
        }
        function z(t, e, n) {
          const r = t[e];
          return r && r.list && r.list.b ? r.list.b : n;
        }
      },
      96820: (t, e, n) => {
        'use strict';
        n.d(e, { r: () => r });
        const r = '4.20.0';
      },
      15149: (t, e, n) => {
        'use strict';
        n.d(e, { GJ: () => r, uI: () => s });
        class r {
          constructor(t, e) {
            (this.backend = t), (this.dataMover = e), (this.data = new WeakMap()), (this.dataIdsCount = 0);
          }
          get(t) {
            return this.data.has(t) || this.dataMover.moveData(this.backend, t), this.data.get(t);
          }
          set(t, e) {
            this.dataIdsCount++, this.data.set(t, e);
          }
          has(t) {
            return this.data.has(t);
          }
          delete(t) {
            return this.dataIdsCount--, this.data.delete(t);
          }
          numDataIds() {
            return this.dataIdsCount;
          }
        }
        class s {
          refCount(t) {
            return a('refCount');
          }
          incRef(t) {
            return a('incRef');
          }
          timerAvailable() {
            return !0;
          }
          time(t) {
            return a('time');
          }
          read(t) {
            return a('read');
          }
          readSync(t) {
            return a('readSync');
          }
          readToGPU(t, e) {
            return a('readToGPU');
          }
          numDataIds() {
            return a('numDataIds');
          }
          disposeData(t, e) {
            return a('disposeData');
          }
          write(t, e, n) {
            return a('write');
          }
          move(t, e, n, r, s) {
            return a('move');
          }
          createTensorFromGPUData(t, e, n) {
            return a('createTensorFromGPUData');
          }
          memory() {
            return a('memory');
          }
          floatPrecision() {
            return a('floatPrecision');
          }
          epsilon() {
            return 32 === this.floatPrecision() ? 1e-7 : 1e-4;
          }
          dispose() {
            return a('dispose');
          }
        }
        function a(t) {
          throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`);
        }
      },
      66296: (t, e, n) => {
        'use strict';
        n.r(e),
          n.d(e, {
            ERF_A1: () => b.T4,
            ERF_A2: () => b._7,
            ERF_A3: () => b.fp,
            ERF_A4: () => b.mg,
            ERF_A5: () => b.fE,
            ERF_P: () => b.HM,
            PARALLELIZE_THRESHOLD: () => c.m,
            RowPartitionType: () => l.tl,
            SELU_SCALE: () => y.X,
            SELU_SCALEALPHA: () => y.j,
            applyActivation: () => u.f2,
            assertAndGetBroadcastShape: () => a.assertAndGetBroadcastShape,
            assertAxesAreInnerMostDims: () => s.WC,
            assertParamsConsistent: () => o.L,
            assignToTypedArray: () => w.k5,
            axesAreInnerMostDims: () => s.WH,
            calculateShapes: () => g.calculateShapes,
            checkEinsumDimSizes: () => T.Yj,
            checkPadOnDimRoundingMode: () => i.s_,
            combineLocations: () => s.aF,
            combineRaggedTensorToTensorShapes: () => l.z4,
            complexWithEvenIndex: () => w.xA,
            complexWithOddIndex: () => w.Uv,
            computeConv2DInfo: () => i.uf,
            computeConv3DInfo: () => i.p$,
            computeDefaultPad: () => i.G8,
            computeDilation2DInfo: () => i.YQ,
            computeOptimalWindowSize: () => c.x,
            computeOutAndReduceShapes: () => s.lb,
            computeOutShape: () => o.P,
            computePool2DInfo: () => i.E6,
            computePool3DInfo: () => i.l5,
            convertConv2DDataFormat: () => i.$Q,
            decodeEinsumEquation: () => T.OH,
            eitherStridesOrDilationsAreOne: () => i.G0,
            expandShapeToKeepDim: () => s.SM,
            exponent: () => w.g6,
            exponents: () => w.lt,
            fromStringArrayToUint8: () => _,
            fromUint8ToStringArray: () => k,
            getAxesPermutation: () => s.Em,
            getBroadcastDims: () => a.getBroadcastDims,
            getComplexWithIndex: () => w.vy,
            getEinsumComputePath: () => T._X,
            getEinsumPermutation: () => T.QD,
            getFusedBiasGradient: () => u.Do,
            getFusedDyActivation: () => u.XB,
            getImageCenter: () => h.H,
            getInnerMostAxes: () => s.fK,
            getPermuted: () => f.b$,
            getRaggedRank: () => l.Dw,
            getReductionAxes: () => a.getReductionAxes,
            getReshaped: () => f.dE,
            getReshapedPermuted: () => f.VN,
            getRowPartitionTypesHelper: () => l.U0,
            getSliceBeginCoords: () => f.Ym,
            getSliceSize: () => f.AO,
            getSparseFillEmptyRowsIndicesDenseShapeMismatch: () => S.P_,
            getSparseFillEmptyRowsNegativeIndexErrorMessage: () => S.U8,
            getSparseFillEmptyRowsOutOfRangeIndexErrorMessage: () => S.zP,
            getSparseReshapeEmptyTensorZeroOutputDimErrorMessage: () => N.Pz,
            getSparseReshapeInputOutputMismatchErrorMessage: () => N.pC,
            getSparseReshapeInputOutputMultipleErrorMessage: () => N.Ni,
            getSparseReshapeMultipleNegativeOneOutputDimErrorMessage: () => N.yM,
            getSparseReshapeNegativeOutputDimErrorMessage: () => N.M5,
            getSparseSegmentReductionIndicesOutOfRangeErrorMessage: () => E.dS,
            getSparseSegmentReductionNegativeSegmentIdsErrorMessage: () => E.u1,
            getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage: () => E.tb,
            getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage: () => E.AP,
            getUndoAxesPermutation: () => s.gx,
            isIdentityPermutation: () => T.B,
            log: () => v.R,
            mergeRealAndImagArrays: () => w.Er,
            prepareAndValidate: () => m.prepareAndValidate,
            prepareSplitSize: () => x.z,
            segment_util: () => A,
            shouldFuse: () => u.zE,
            slice_util: () => p,
            splitRealAndImagArrays: () => w.a4,
            stridesOrDilationsArePositive: () => i.qk,
            tupleValuesAreOne: () => i.Dh,
            upcastType: () => d.Tu,
            validateDefaultValueShape: () => l.mP,
            validateInput: () => g.validateInput,
            validateUpdateShape: () => g.validateUpdateShape,
            warn: () => v.i,
          });
        var r = n(89783),
          s = n(21078),
          a = n(62198),
          o = n(12789),
          i = n(47195),
          u = n(68646),
          l = n(30429),
          c = n(29827),
          p = n(34969),
          d = n(52046),
          h = n(29192),
          f = n(81613),
          m = n(83869),
          g = n(26170),
          y = n(28576),
          b = n(11418),
          v = n(73673),
          w = n(27852),
          T = n(70069),
          x = n(57303),
          S = n(77618),
          N = n(83255),
          E = n(55880),
          A = n(47516);
        function k(t) {
          try {
            return t.map((t) => (0, r.decodeString)(t));
          } catch (t) {
            throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`);
          }
        }
        function _(t) {
          return t.map((t) => (0, r.encodeString)(t));
        }
      },
      27852: (t, e, n) => {
        'use strict';
        function r(t, e) {
          if (t.length !== e.length) throw new Error(`Cannot merge real and imag arrays of different lengths. real:${t.length}, imag: ${e.length}.`);
          const n = new Float32Array(2 * t.length);
          for (let r = 0; r < n.length; r += 2) (n[r] = t[r / 2]), (n[r + 1] = e[r / 2]);
          return n;
        }
        function s(t) {
          const e = new Float32Array(t.length / 2),
            n = new Float32Array(t.length / 2);
          for (let r = 0; r < t.length; r += 2) (e[r / 2] = t[r]), (n[r / 2] = t[r + 1]);
          return { real: e, imag: n };
        }
        function a(t) {
          const e = Math.ceil(t.length / 4),
            n = new Float32Array(e),
            r = new Float32Array(e);
          for (let e = 0; e < t.length; e += 4) (n[Math.floor(e / 4)] = t[e]), (r[Math.floor(e / 4)] = t[e + 1]);
          return { real: n, imag: r };
        }
        function o(t) {
          const e = Math.floor(t.length / 4),
            n = new Float32Array(e),
            r = new Float32Array(e);
          for (let e = 2; e < t.length; e += 4) (n[Math.floor(e / 4)] = t[e]), (r[Math.floor(e / 4)] = t[e + 1]);
          return { real: n, imag: r };
        }
        function i(t, e) {
          return { real: t[2 * e], imag: t[2 * e + 1] };
        }
        function u(t, e, n, r) {
          (t[2 * r] = e), (t[2 * r + 1] = n);
        }
        function l(t, e) {
          const n = new Float32Array(t / 2),
            r = new Float32Array(t / 2);
          for (let s = 0; s < Math.ceil(t / 2); s++) {
            const a = (e ? 2 : -2) * Math.PI * (s / t);
            (n[s] = Math.cos(a)), (r[s] = Math.sin(a));
          }
          return { real: n, imag: r };
        }
        function c(t, e, n) {
          const r = (n ? 2 : -2) * Math.PI * (t / e);
          return { real: Math.cos(r), imag: Math.sin(r) };
        }
        n.d(e, { Er: () => r, Uv: () => o, a4: () => s, g6: () => c, k5: () => u, lt: () => l, vy: () => i, xA: () => a });
      },
      70069: (t, e, n) => {
        'use strict';
        n.d(e, { B: () => d, OH: () => u, QD: () => l, Yj: () => c, _X: () => p });
        var r = n(45119);
        const s = '->',
          a = /->/g,
          o = ',',
          i = '...';
        function u(t, e) {
          const n = ((t = t.replace(/\s/g, '')).length - t.replace(a, '').length) / s.length;
          if (n < 1) throw new Error('Equations without an arrow are not supported.');
          if (n > 1) throw new Error(`Equation must contain exactly one arrow ("${s}").`);
          const [u, l] = t.split(s);
          (0, r.vA)(-1 === u.indexOf(i), () => `The ellipsis notation ("${i}") is not supported yet.`);
          const c = u.split(o),
            p = c.length;
          if (e !== p) throw new Error(`Expected ${p} input tensors, received ${e}`);
          if (p > 2) throw new Error('Support for more than 2 input tensors is not implemented yet.');
          const d = [];
          for (let t = 0; t < l.length; ++t) {
            const e = l[t];
            if (!c.some((t) => -1 !== t.indexOf(e))) throw new Error(`Output subscripts contain the label ${e} not present in the input subscripts.`);
            -1 === d.indexOf(e) && d.push(e);
          }
          for (let t = 0; t < u.length; ++t) {
            const e = u[t];
            -1 === d.indexOf(e) && e !== o && d.push(e);
          }
          const h = new Array(c.length);
          for (let t = 0; t < p; ++t) {
            if (new Set(c[t].split('')).size !== c[t].length)
              throw new Error(`Found duplicate axes in input component ${c[t]}. Support for duplicate axes in input is not implemented yet.`);
            h[t] = [];
            for (let e = 0; e < c[t].length; ++e) h[t].push(d.indexOf(c[t][e]));
          }
          const f = d.length,
            m = [];
          for (let t = l.length; t < f; ++t) m.push(t);
          return { allDims: d, summedDims: m, idDims: h };
        }
        function l(t, e) {
          let n = new Array(t);
          n.fill(-1);
          for (let t = 0; t < e.length; ++t) n[e[t]] = t;
          const r = [];
          for (let e = 0; e < t; ++e) -1 === n[e] && r.push(e);
          return (n = n.filter((t) => -1 !== t)), { permutationIndices: n, expandDims: r };
        }
        function c(t, e, n) {
          const s = new Array(t);
          for (let t = 0; t < n.length; ++t) {
            const a = n[t].shape;
            for (let n = 0; n < e[t].length; ++n)
              void 0 === s[e[t][n]]
                ? (s[e[t][n]] = a[n])
                : (0, r.vA)(s[e[t][n]] === a[n], () => `Expected dimension ${s[e[t][n]]} at axis ${n} of input shaped ${JSON.stringify(a)}, but got dimension ${a[n]}`);
          }
        }
        function p(t, e) {
          const n = t,
            r = [];
          let s = 0;
          0 === t.length && n.push(-1), (s = t.length + 1);
          for (let t = 0; t < s; ++t) r.push([]);
          const a = [];
          for (let t = 0; t < n.length; ++t) {
            const s = h(e, n[t]);
            for (const e of s) -1 === a.indexOf(e) && (r[t].push(e), a.push(e));
          }
          return { path: n, steps: r };
        }
        function d(t) {
          return t.every((t, e) => t === e);
        }
        function h(t, e) {
          const n = [];
          for (let r = 0; r < t.length; ++r) (0 !== t[r].length && -1 === t[r].indexOf(e) && -1 !== e) || n.push(r);
          return n;
        }
      },
      1276: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { nonMaxSuppressionV3Impl: () => r.c7, nonMaxSuppressionV4Impl: () => r.ZS, nonMaxSuppressionV5Impl: () => r.ut, whereImpl: () => s.Y });
        var r = n(85472),
          s = n(54411);
      },
      85472: (t, e, n) => {
        'use strict';
        n.d(e, { ZS: () => a, c7: () => s, ut: () => o });
        var r = n(94798);
        function s(t, e, n, r, s) {
          return i(t, e, n, r, s, 0);
        }
        function a(t, e, n, r, s, a) {
          return i(t, e, n, r, s, 0, !1, a, !0);
        }
        function o(t, e, n, r, s, a) {
          return i(t, e, n, r, s, a, !0);
        }
        function i(t, e, n, s, a, o, i = !1, p = !1, d = !1) {
          const h = [];
          for (let t = 0; t < e.length; t++) e[t] > a && h.push({ score: e[t], boxIndex: t, suppressBeginIndex: 0 });
          h.sort(c);
          const f = o > 0 ? -0.5 / o : 0,
            m = [],
            g = [];
          for (; m.length < n && h.length > 0; ) {
            const e = h.pop(),
              { score: n, boxIndex: o, suppressBeginIndex: i } = e;
            if (n < a) break;
            let p = !1;
            for (let n = m.length - 1; n >= i; --n) {
              const r = u(t, o, m[n]);
              if (r >= s) {
                p = !0;
                break;
              }
              if (((e.score = e.score * l(s, f, r)), e.score <= a)) break;
            }
            (e.suppressBeginIndex = m.length), p || (e.score === n ? (m.push(o), g.push(e.score)) : e.score > a && (0, r.n)(h, e, c));
          }
          const y = m.length,
            b = n - y;
          p && b > 0 && (m.push(...new Array(b).fill(0)), g.push(...new Array(b).fill(0)));
          const v = { selectedIndices: m };
          return i && (v.selectedScores = g), d && (v.validOutputs = y), v;
        }
        function u(t, e, n) {
          const r = t.subarray(4 * e, 4 * e + 4),
            s = t.subarray(4 * n, 4 * n + 4),
            a = Math.min(r[0], r[2]),
            o = Math.min(r[1], r[3]),
            i = Math.max(r[0], r[2]),
            u = Math.max(r[1], r[3]),
            l = Math.min(s[0], s[2]),
            c = Math.min(s[1], s[3]),
            p = Math.max(s[0], s[2]),
            d = Math.max(s[1], s[3]),
            h = (i - a) * (u - o),
            f = (p - l) * (d - c);
          if (h <= 0 || f <= 0) return 0;
          const m = Math.max(a, l),
            g = Math.max(o, c),
            y = Math.min(i, p),
            b = Math.min(u, d),
            v = Math.max(y - m, 0) * Math.max(b - g, 0);
          return v / (h + f - v);
        }
        function l(t, e, n) {
          const r = Math.exp(e * n * n);
          return n <= t ? r : 0;
        }
        function c(t, e) {
          return t.score - e.score || (t.score === e.score && e.boxIndex - t.boxIndex);
        }
      },
      94798: (t, e, n) => {
        'use strict';
        function r(t, e, n) {
          const r = (function (t, e, n) {
              return (function (t, e, n) {
                let r = 0,
                  s = t.length,
                  a = 0,
                  o = !1;
                for (; r < s; ) {
                  a = r + ((s - r) >>> 1);
                  const i = n(e, t[a]);
                  i > 0 ? (r = a + 1) : ((s = a), (o = !i));
                }
                return o ? r : -r - 1;
              })(t, e, n || s);
            })(t, e, n),
            a = r < 0 ? -(r + 1) : r;
          t.splice(a, 0, e);
        }
        function s(t, e) {
          return t > e ? 1 : t < e ? -1 : 0;
        }
        n.d(e, { n: () => r });
      },
      54411: (t, e, n) => {
        'use strict';
        n.d(e, { Y: () => s });
        var r = n(448);
        function s(t, e) {
          const n = [];
          for (let t = 0; t < e.length; t++) e[t] && n.push(t);
          const s = (0, r.r)(t, 'int32'),
            a = (0, r.r)([n.length, t.length], 'int32');
          for (let e = 0; e < n.length; e++) {
            const r = s.indexToLoc(n[e]),
              o = e * t.length;
            a.values.set(r, o);
          }
          return a.toTensor();
        }
      },
      27258: (t, e, n) => {
        'use strict';
        n.d(e, {
          $_$: () => A.$_$,
          $dB: () => Z.$dB,
          $jE: () => Z.$jE,
          $jT: () => A.$jT,
          $v7: () => A.$v7,
          $zE: () => Z.$zE,
          A1h: () => Z.A1h,
          A8B: () => Z.A8B,
          ASo: () => I.AS,
          AmM: () => A.AmM,
          BEg: () => A.BEg,
          BFc: () => A.BFc,
          BK4: () => Z.BK4,
          BLA: () => Z.BLA,
          BRl: () => Z.BRl,
          BTT: () => A.BTT,
          BZs: () => A.BZs,
          BaG: () => _.B,
          Blb: () => Z.Blb,
          BoJ: () => Z.BoJ,
          BpO: () => A.BpO,
          BxF: () => Z.BxF,
          C0T: () => R,
          C8s: () => Z.C8s,
          CQC: () => Z.CQC,
          CRk: () => A.CRk,
          Cfv: () => O.Cf,
          Cg$: () => Z.Cg$,
          Clk: () => A.Clk,
          CwD: () => Z.CwD,
          D7i: () => Z.D7i,
          DQN: () => A.DQN,
          DZQ: () => I.DZ,
          Ddj: () => Z.Ddj,
          Dr: () => Z.Dr,
          DvZ: () => Z.DvZ,
          Dvk: () => M.Dv,
          DyF: () => s,
          E3$: () => Z.E3$,
          ELo: () => w.E,
          EN4: () => A.EN4,
          EZY: () => A.EZY,
          Ec: () => A.Ec,
          EkD: () => Z.EkD,
          ElG: () => Z.ElG,
          EwI: () => A.EwI,
          EwU: () => Z.EwU,
          F12: () => A.F12,
          F8e: () => A.F8e,
          FAs: () => Z.FAs,
          FCQ: () => Z.FCQ,
          FE$: () => A.FE$,
          FFZ: () => A.FFZ,
          FJY: () => A.FJY,
          FJy: () => i,
          FLi: () => A.FLi,
          FPz: () => A.FPz,
          FSt: () => Z.FSt,
          FYc: () => y.F,
          Fin: () => Z.Fin,
          FqL: () => A.FqL,
          GJx: () => P.GJ,
          GSj: () => A.GSj,
          GTe: () => A.GTe,
          GZp: () => Z.GZp,
          Gc4: () => I.Gc,
          Gl3: () => A.Gl3,
          H8d: () => A.H8d,
          HNs: () => Z.HNs,
          HPB: () => A.HPB,
          HQu: () => A.HQu,
          HYA: () => A.HYA,
          HZy: () => A.HZy,
          HbZ: () => A.HbZ,
          Hi9: () => I.Hi,
          Hs: () => I.Hs,
          I1m: () => A.I1m,
          I2l: () => A.I2l,
          IPL: () => A.IPL,
          ISJ: () => I.IS,
          IYd: () => A.IYd,
          Ik2: () => Z.Ik2,
          InN: () => A.InN,
          J3C: () => Z.J3C,
          JFn: () => c,
          JYU: () => A.JYU,
          JiE: () => Z.JiE,
          Jp_: () => Z.Jp_,
          K$F: () => m.K,
          K$i: () => A.K$i,
          KGM: () => A.KGM,
          KXH: () => Z.KXH,
          Kgs: () => A.Kgs,
          Kko: () => A.Kko,
          Kmu: () => $.Km,
          Kro: () => l,
          KtR: () => A.KtR,
          L0l: () => A.L0l,
          L5p: () => T.L,
          L6G: () => Z.L6G,
          LB5: () => Z.LB5,
          LCg: () => A.LCg,
          LDN: () => Z.LDN,
          LG0: () => Z.LG0,
          LIG: () => A.LIG,
          LMr: () => A.LMr,
          LRy: () => Z.LRy,
          LWX: () => Z.LWX,
          LXA: () => Z.LXA,
          Lp0: () => A.Lp0,
          Lpo: () => A.Lpo,
          M6A: () => Z.M6A,
          M7h: () => A.M7h,
          MEE: () => I.ME,
          MIs: () => A.MIs,
          MRQ: () => Z.MRQ,
          Mlm: () => A.Mlm,
          Mn0: () => Z.Mn0,
          MnK: () => Z.MnK,
          Mw0: () => A.Mw0,
          N4F: () => Z.N4F,
          NFr: () => A.NFr,
          NNh: () => A.NNh,
          NSZ: () => A.NSZ,
          NYV: () => A.NYV,
          Ncv: () => Z.Ncv,
          NoW: () => A.NoW,
          NsG: () => A.NsG,
          O4G: () => Z.O4G,
          O5O: () => A.O5O,
          OAQ: () => Z.OAQ,
          ODT: () => Z.ODT,
          OEK: () => A.OEK,
          OH$: () => $.OH,
          OMN: () => Z.OMN,
          ORI: () => Z.ORI,
          OYQ: () => A.OYQ,
          Obs: () => d,
          OjQ: () => A.OjQ,
          OkC: () => I.Ok,
          Omf: () => A.Omf,
          OpK: () => O.Op,
          P1l: () => A.P1l,
          P61: () => A.P61,
          PH8: () => Z.PH8,
          PMw: () => A.PMw,
          POl: () => A.POl,
          PS5: () => x.P,
          P_L: () => Z.P_L,
          Pah: () => Z.Pah,
          PbM: () => Z.PbM,
          Pbu: () => A.Pbu,
          PhQ: () => A.PhQ,
          Pqc: () => A.Pqc,
          Q$M: () => A.Q$M,
          Q0_: () => A.Q0_,
          Q6t: () => Z.Q6t,
          Q7R: () => A.Q7R,
          QD2: () => A.QD2,
          QDP: () => Z.QDP,
          QKF: () => Z.QKF,
          QP2: () => A.QP2,
          Qgm: () => Z.Qgm,
          QiD: () => A.QiD,
          Qu_: () => v.Q,
          R0O: () => A.R0O,
          R23: () => Z.R23,
          RIf: () => A.RIf,
          RMm: () => Z.RMm,
          RO: () => A.RO,
          ROE: () => A.ROE,
          RPU: () => A.RPU,
          RUm: () => Z.RUm,
          RW8: () => Z.RW8,
          RXX: () => Z.RXX,
          RZD: () => A.RZD,
          Rj8: () => A.Rj8,
          Rm2: () => A.Rm2,
          SDM: () => Z.SDM,
          SQl: () => Z.SQl,
          SY9: () => A.SY9,
          SYI: () => S.S,
          SaS: () => A.SaS,
          Slp: () => A.Slp,
          SmG: () => I.Sm,
          T5N: () => A.T5N,
          T7M: () => Z.T7M,
          T9B: () => A.T9B,
          TBb: () => Z.TBb,
          TL8: () => Z.TL8,
          TMz: () => Z.TMz,
          TOR: () => Z.TOR,
          TaL: () => o,
          ToN: () => Z.ToN,
          TuY: () => E.Tu,
          TyE: () => Z.TyE,
          U4u: () => A.U4u,
          UG6: () => A.UG6,
          UcO: () => Z.UcO,
          Ul9: () => A.Ul9,
          VAI: () => Z.VAI,
          VCH: () => Z.VCH,
          VOZ: () => A.VOZ,
          VVh: () => A.VVh,
          VZ: () => A.VZ,
          Vs9: () => A.Vs9,
          Vsq: () => A.Vsq,
          Vvy: () => Z.Vvy,
          W4C: () => I.W4,
          WLX: () => A.WLX,
          WQq: () => A.WQq,
          WRv: () => Z.WRv,
          WT3: () => Z.WT3,
          WfX: () => A.WfX,
          WuN: () => Z.WuN,
          X$8: () => Z.X$8,
          X0$: () => Z.X0$,
          X4o: () => A.X4o,
          X4r: () => Z.X4r,
          X7t: () => A.X7t,
          XHu: () => A.XHu,
          XQy: () => Z.XQy,
          XRg: () => A.XRg,
          XhZ: () => Z.XhZ,
          XmO: () => Z.XmO,
          Xtf: () => A.Xtf,
          Y12: () => A.Y12,
          YAb: () => Z.YAb,
          YDF: () => A.YDF,
          YJN: () => A.YJN,
          YVe: () => Z.YVe,
          YYh: () => A.YYh,
          YeY: () => A.YeY,
          YjP: () => A.YjP,
          Ym9: () => A.Ym9,
          Z$r: () => A.Z$r,
          ZEY: () => a,
          ZSL: () => h,
          ZgB: () => Z.ZgB,
          Zhr: () => A.Zhr,
          Zl4: () => Z.Zl4,
          _3C: () => A._3C,
          _5H: () => O._5,
          _9M: () => A._9M,
          _K2: () => $._K,
          _M9: () => A._M9,
          _SZ: () => A._SZ,
          _Xg: () => M._X,
          _eU: () => A._eU,
          _jP: () => A._jP,
          _s9: () => Z._s9,
          aAr: () => Z.aAr,
          aCs: () => I.aC,
          aOp: () => A.aOp,
          ah4: () => g.a,
          awo: () => Z.awo,
          bCz: () => Z.bCz,
          bP9: () => Z.bP9,
          bgA: () => f.r,
          bvq: () => A.bvq,
          bzn: () => A.bzn,
          cHb: () => Z.cHb,
          cS: () => Z.cS,
          cZk: () => A.cZk,
          chL: () => E.ch,
          czq: () => A.czq,
          dA1: () => D.d,
          dFH: () => Z.dFH,
          dLy: () => Z.dLy,
          dXR: () => Z.dXR,
          d_2: () => A.d_2,
          d_S: () => p,
          dik: () => A.dik,
          dv8: () => Z.dv8,
          dzn: () => A.dzn,
          e0f: () => Z.e0f,
          eDJ: () => A.eDJ,
          eMq: () => F,
          eVF: () => A.eVF,
          efE: () => A.efE,
          ek5: () => A.ek5,
          epO: () => Z.epO,
          fLc: () => I.fL,
          fUj: () => Z.fUj,
          faB: () => A.faB,
          ftb: () => A.ftb,
          g23: () => u,
          g5A: () => Z.g5A,
          g9W: () => A.g9W,
          gC7: () => Z.gC7,
          gIW: () => Z.gIW,
          gJX: () => I.gJ,
          gYU: () => I.gY,
          ggX: () => A.ggX,
          gnS: () => A.gnS,
          goy: () => I.go,
          grY: () => A.grY,
          hOW: () => A.hOW,
          hVP: () => A.hVP,
          hVg: () => Z.hVg,
          hgw: () => Z.hgw,
          ho8: () => Z.ho8,
          hql: () => Z.hql,
          huO: () => Z.huO,
          i2o: () => A.i2o,
          i5R: () => Z.i5R,
          iDl: () => k.i,
          iGz: () => Z.iGz,
          iPs: () => Z.iPs,
          iPt: () => O.iP,
          iW0: () => Z.iW0,
          io: () => r,
          iuW: () => Z.iuW,
          iyU: () => A.iyU,
          jAQ: () => Z.jAQ,
          jIJ: () => A.jIJ,
          jM4: () => Z.jM4,
          jOE: () => Z.jOE,
          jYt: () => M.jY,
          j__: () => A.j__,
          jbE: () => A.jbE,
          jfg: () => Z.jfg,
          jgd: () => Z.jgd,
          jgi: () => A.jgi,
          jh6: () => I.jh,
          jj_: () => Z.jj_,
          jkA: () => A.jkA,
          jxD: () => Z.jxD,
          jz4: () => I.jz,
          kA9: () => A.kA9,
          kBw: () => I.kB,
          kSi: () => A.kSi,
          kdj: () => Z.kdj,
          kgh: () => A.kgh,
          kpo: () => B,
          krJ: () => O.kr,
          l0G: () => Z.l0G,
          l6P: () => Z.l6P,
          lDo: () => A.lDo,
          lKK: () => A.lKK,
          lLS: () => Z.lLS,
          lMo: () => A.lMo,
          lNG: () => Z.lNG,
          lOn: () => A.lOn,
          lZX: () => A.lZX,
          ljI: () => Z.ljI,
          lw0: () => A.lw0,
          lxb: () => Z.lxb,
          lzr: () => Z.lzr,
          m0H: () => A.m0H,
          m1Z: () => I.m1,
          mH5: () => Z.mH5,
          mIA: () => Z.mIA,
          mM$: () => Z.mM$,
          mPL: () => A.mPL,
          mT8: () => A.mT8,
          mgz: () => A.mgz,
          mkO: () => A.mkO,
          mnI: () => Z.mnI,
          muS: () => M.mu,
          mxL: () => Z.mxL,
          n76: () => A.n76,
          n7C: () => A.n7C,
          nVu: () => Z.nVu,
          nY8: () => Z.nY8,
          nZd: () => Z.nZd,
          ngS: () => A.ngS,
          nqI: () => A.nqI,
          o8B: () => A.o8B,
          oC7: () => b.o,
          oFs: () => Z.oFs,
          oJ2: () => Z.oJ2,
          oNF: () => A.oNF,
          ok9: () => M.ok,
          op: () => A.op,
          ox3: () => Z.ox3,
          p2J: () => Z.p2J,
          p4S: () => A.p4S,
          pJc: () => Z.pJc,
          pPe: () => Z.pPe,
          pR9: () => A.pR9,
          p_m: () => Z.p_m,
          pk0: () => Z.pk0,
          pnw: () => Z.pnw,
          pr3: () => Z.pr3,
          pyJ: () => Z.pyJ,
          qRo: () => A.qRo,
          qYS: () => N.qY,
          r2V: () => A.r2V,
          rCv: () => A.rCv,
          rEj: () => I.rE,
          rFG: () => Z.rFG,
          rFm: () => Z.rFm,
          rGP: () => Z.rGP,
          rTt: () => N.rT,
          rYl: () => A.rYl,
          rYx: () => O.rY,
          ra8: () => A.ra8,
          rfv: () => A.rfv,
          rfw: () => A.rfw,
          rgM: () => E.rg,
          rhj: () => A.rhj,
          rm6: () => I.rm,
          rni: () => A.rni,
          rsH: () => Z.rsH,
          rxB: () => A.rxB,
          ry7: () => A.ry7,
          sDr: () => Z.sDr,
          sZg: () => A.sZg,
          smy: () => A.smy,
          sub: () => A.sub,
          t$z: () => A.t$z,
          t3d: () => Z.t3d,
          tAK: () => O.tA,
          tG8: () => Z.tG8,
          tGH: () => Z.tGH,
          tGX: () => A.tGX,
          tQQ: () => A.tQQ,
          tnl: () => A.tnl,
          u$b: () => Z.u$b,
          u8Z: () => Z.u8Z,
          uI_: () => P.uI,
          uWl: () => Z.uWl,
          urI: () => Z.urI,
          vI1: () => Z.vI1,
          vPA: () => A.vPA,
          vQR: () => O.vQ,
          vaV: () => Z.vaV,
          vj7: () => Z.vj7,
          vjT: () => A.vjT,
          wNW: () => Z.wNW,
          wX9: () => A.wX9,
          wck: () => A.wck,
          wdz: () => A.wdz,
          wgE: () => A.wgE,
          wh_: () => A.wh_,
          whe: () => A.whe,
          wwC: () => Z.wwC,
          wx0: () => Z.wx0,
          x7F: () => Z.x7F,
          xJ3: () => Z.xJ3,
          xWs: () => A.xWs,
          xav: () => A.xav,
          xbf: () => A.xbf,
          xu7: () => Z.xu7,
          y17: () => A.y17,
          y4m: () => A.y4m,
          y5U: () => A.y5U,
          y7e: () => M.y7,
          yHs: () => A.yHs,
          yIG: () => A.yIG,
          yPW: () => Z.yPW,
          ySp: () => Z.ySp,
          ybN: () => Z.ybN,
          ybj: () => Z.ybj,
          ylV: () => Z.ylV,
          ylz: () => N.yl,
          ymU: () => A.ymU,
          yrW: () => A.yrW,
          yxw: () => A.yxw,
          yyV: () => A.yyV,
          yzS: () => A.yzS,
          z8$: () => A.z8$,
          zAU: () => A.zAU,
          zAd: () => A.zAd,
          zP9: () => Z.zP9,
          zQh: () => A.zQh,
          zfU: () => Z.zfU,
          ziu: () => A.ziu,
          ztW: () => A.ztW,
        });
        var r = n(17890),
          s = n(49917),
          a = n(62198),
          o = n(27836),
          i = n(83869),
          u = n(26170),
          l = n(34969),
          c = n(79559),
          p = n(30565),
          d = n(49490),
          h = n(89783),
          f = n(7175),
          m = n(99696),
          g = n(85316),
          y = n(81409),
          b = n(98544),
          v = n(5340),
          w = n(64403),
          T = n(83335),
          x = n(25727),
          S = n(37930),
          N = n(53910),
          E = n(52046),
          A = n(38960),
          k = n(27084),
          _ = n(72633),
          I = n(35287),
          O = n(37074),
          M = n(31830),
          $ = n(46574),
          D = n(63046),
          R = n(66296),
          F = n(88580),
          B = n(1276),
          P = n(15149),
          Z = n(15441);
      },
      10363: (t, e, n) => {
        'use strict';
        var r = n(67897),
          s = (n(66652), n(15618), n(83672), n(448)),
          a = n(29809),
          o = n(70125),
          i = n(75295),
          u = n(53910);
        (0, r.Ye)();
        const l = { buffer: s.r, cast: a.w, clone: o.o, print: i.y };
        (0, u.Q5)(l);
      },
      63046: (t, e, n) => {
        'use strict';
        n.d(e, { d: () => s });
        const r = 'undefined' != typeof requestAnimationFrame ? requestAnimationFrame : 'undefined' != typeof setImmediate ? setImmediate : (t) => t();
        function s() {
          return new Promise((t) => r(() => t()));
        }
      },
      88580: (t, e, n) => {
        'use strict';
        let r;
        function s(t) {
          r = t;
        }
        function a(t) {
          if (void 0 !== r) return r;
          if (t || ('undefined' != typeof navigator && null != navigator)) {
            if ((t || (t = navigator), 'ReactNative' === t.product)) return !0;
            const e = t.userAgent || t.vendor || ('undefined' != typeof window ? window.opera : '');
            if (!e) {
              const e = t;
              return e.userAgentData && e.userAgentData.mobile;
            }
            return (
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                e,
              ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                e.substr(0, 4),
              )
            );
          }
          return !1;
        }
        function o() {
          return ('undefined' != typeof window && null != window.document) || 'undefined' != typeof WorkerGlobalScope;
        }
        n.r(e), n.d(e, { isBrowser: () => o, isMobile: () => a, mockIsMobile: () => s });
      },
      67897: (t, e, n) => {
        'use strict';
        n.d(e, { T2: () => w, Ye: () => v });
        var r = n(15149),
          s = n(46574),
          a = n(41743),
          o = n(15441),
          i = n(37074),
          u = n(73673),
          l = n(41466),
          c = n(37427),
          p = n(53910),
          d = n(30565),
          h = n(45119),
          f = n(89783),
          m = n(96763);
        function g(t) {
          return null != t.kernelName;
        }
        class y {
          constructor() {
            (this.registeredVariables = {}),
              (this.nextTapeNodeId = 0),
              (this.numBytes = 0),
              (this.numTensors = 0),
              (this.numStringTensors = 0),
              (this.numDataBuffers = 0),
              (this.gradientDepth = 0),
              (this.kernelDepth = 0),
              (this.scopeStack = []),
              (this.numDataMovesStack = []),
              (this.nextScopeId = 0),
              (this.tensorInfo = new WeakMap()),
              (this.profiling = !1),
              (this.activeProfile = {
                newBytes: 0,
                newTensors: 0,
                peakBytes: 0,
                kernels: [],
                result: null,
                get kernelNames() {
                  return Array.from(new Set(this.kernels.map((t) => t.name)));
                },
              });
          }
          dispose() {
            for (const t in this.registeredVariables) this.registeredVariables[t].dispose();
          }
        }
        class b {
          constructor(t) {
            (this.ENV = t), (this.registry = {}), (this.registryFactory = {}), (this.pendingBackendInitId = 0), (this.state = new y());
          }
          async ready() {
            if (null != this.pendingBackendInit) return this.pendingBackendInit.then(() => {});
            if (null != this.backendInstance) return;
            const t = this.getSortedBackends();
            for (let e = 0; e < t.length; e++) {
              const n = t[e];
              if (await this.initializeBackend(n).success) return void (await this.setBackend(n));
            }
            throw new Error('Could not initialize any backends, all backend initializations failed.');
          }
          get backend() {
            if (null != this.pendingBackendInit)
              throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);
            if (null == this.backendInstance) {
              const { name: t, asyncInit: e } = this.initializeBackendsAndReturnBest();
              if (e)
                throw new Error(
                  `The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`,
                );
              this.setBackend(t);
            }
            return this.backendInstance;
          }
          backendNames() {
            return Object.keys(this.registryFactory);
          }
          findBackend(t) {
            if (!(t in this.registry)) {
              if (!(t in this.registryFactory)) return null;
              {
                const { asyncInit: e } = this.initializeBackend(t);
                if (e) return null;
              }
            }
            return this.registry[t];
          }
          findBackendFactory(t) {
            return t in this.registryFactory ? this.registryFactory[t].factory : null;
          }
          registerBackend(t, e, n = 1) {
            return t in this.registryFactory
              ? (u.i(`${t} backend was already registered. Reusing existing backend factory.`), !1)
              : ((this.registryFactory[t] = { factory: e, priority: n }), !0);
          }
          async setBackend(t) {
            if (null == this.registryFactory[t]) throw new Error(`Backend name '${t}' not found in registry`);
            if (((this.backendName = t), null == this.registry[t])) {
              this.backendInstance = null;
              const { success: e, asyncInit: n } = this.initializeBackend(t);
              if (!(n ? await e : e)) return !1;
            }
            return (this.backendInstance = this.registry[t]), this.setupRegisteredKernels(), (this.profiler = new l.UD(this.backendInstance)), !0;
          }
          setupRegisteredKernels() {
            (0, i.Op)(this.backendName).forEach((t) => {
              null != t.setupFunc && t.setupFunc(this.backendInstance);
            });
          }
          disposeRegisteredKernels(t) {
            (0, i.Op)(t).forEach((e) => {
              null != e.disposeFunc && e.disposeFunc(this.registry[t]);
            });
          }
          initializeBackend(t) {
            const e = this.registryFactory[t];
            if (null == e) throw new Error(`Cannot initialize backend ${t}, no registration found.`);
            try {
              const n = e.factory();
              if (!n || n instanceof r.uI || 'function' != typeof n.then) return (this.registry[t] = n), { success: !0, asyncInit: !1 };
              {
                const e = ++this.pendingBackendInitId,
                  r = n
                    .then((n) => !(e < this.pendingBackendInitId || ((this.registry[t] = n), (this.pendingBackendInit = null), 0)))
                    .catch(
                      (n) => (e < this.pendingBackendInitId || ((this.pendingBackendInit = null), u.i(`Initialization of backend ${t} failed`), u.i(n.stack || n.message)), !1),
                    );
                return (this.pendingBackendInit = r), { success: r, asyncInit: !0 };
              }
            } catch (e) {
              return u.i(`Initialization of backend ${t} failed`), u.i(e.stack || e.message), { success: !1, asyncInit: !1 };
            }
          }
          removeBackend(t) {
            if (!(t in this.registryFactory)) throw new Error(`${t} backend not found in registry`);
            this.backendName === t && null != this.pendingBackendInit && this.pendingBackendInitId++,
              t in this.registry && (this.disposeRegisteredKernels(t), this.registry[t].dispose(), delete this.registry[t]),
              delete this.registryFactory[t],
              this.backendName === t && ((this.pendingBackendInit = null), (this.backendName = null), (this.backendInstance = null));
          }
          getSortedBackends() {
            if (0 === Object.keys(this.registryFactory).length) throw new Error('No backend found in registry.');
            return Object.keys(this.registryFactory).sort((t, e) => this.registryFactory[e].priority - this.registryFactory[t].priority);
          }
          initializeBackendsAndReturnBest() {
            const t = this.getSortedBackends();
            for (let e = 0; e < t.length; e++) {
              const n = t[e],
                { success: r, asyncInit: s } = this.initializeBackend(n);
              if (s || r) return { name: n, asyncInit: s };
            }
            throw new Error('Could not initialize any backends, all backend initializations failed.');
          }
          moveData(t, e) {
            const n = this.state.tensorInfo.get(e),
              r = n.backend,
              s = this.readSync(e),
              a = r.refCount(e);
            r.disposeData(e, !0),
              (n.backend = t),
              t.move(e, s, n.shape, n.dtype, a),
              this.shouldCheckForMemLeaks() && this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]++;
          }
          tidy(t, e) {
            let n,
              r = null;
            if (null == e) {
              if ('function' != typeof t) throw new Error('Please provide a function to tidy()');
              e = t;
            } else {
              if ('string' != typeof t && !(t instanceof String)) throw new Error('When calling with two arguments, the first argument to tidy() must be a string');
              if ('function' != typeof e) throw new Error('When calling with two arguments, the 2nd argument to tidy() must be a function');
              r = t;
            }
            return this.scopedRun(
              () => this.startScope(r),
              () => this.endScope(n),
              () => ((n = e()), n instanceof Promise && m.error('Cannot return a Promise inside of tidy.'), n),
            );
          }
          scopedRun(t, e, n) {
            t();
            try {
              const t = n();
              return e(), t;
            } catch (t) {
              throw (e(), t);
            }
          }
          nextTensorId() {
            return b.nextTensorId++;
          }
          nextVariableId() {
            return b.nextVariableId++;
          }
          clone(t) {
            const e = w.runKernel(o.lzr, { x: t }),
              n = { x: t };
            return (
              this.addTapeNode(
                this.state.activeScope.name,
                n,
                [e],
                (t) => ({
                  x: () => {
                    const e = { x: t };
                    return w.runKernel(o.KXH, e, { dtype: 'float32' });
                  },
                }),
                [],
                {},
              ),
              e
            );
          }
          runKernel(t, e, n) {
            if ((null == this.backendName && this.backend, null == (0, i._5)(t, this.backendName)))
              throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);
            return this.runKernelFunc({ kernelName: t, inputs: e, attrs: n });
          }
          shouldCheckForMemLeaks() {
            return this.ENV.getBool('IS_TEST');
          }
          checkKernelForMemLeak(t, e, n) {
            const r = this.backend.numDataIds();
            let s = 0;
            n.forEach((t) => {
              s += 'complex64' === t.dtype ? 3 : 1;
            });
            const a = this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1],
              o = r - e - s - a;
            if (o > 0) throw new Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${t}'`);
          }
          runKernelFunc(t) {
            let e,
              n = [];
            const r = this.isTapeOn(),
              s = this.state.numBytes,
              a = this.state.numTensors;
            let o, u;
            this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0), null == this.backendName && this.backend;
            const l = g(t) ? t.kernelName : null != this.state.activeScope ? this.state.activeScope.name : '';
            if (g(t)) {
              const { kernelName: e, inputs: s, attrs: a } = t;
              null == this.backendName && this.backend;
              const l = (0, i._5)(e, this.backendName);
              h.vA(null != l, () => `Cannot find registered kernel '${e}' for backend '${this.backendName}'`),
                (o = () => {
                  const t = this.backend.numDataIds();
                  u = l.kernelFunc({ inputs: s, attrs: a, backend: this.backend });
                  const o = Array.isArray(u) ? u : [u];
                  this.shouldCheckForMemLeaks() && this.checkKernelForMemLeak(e, t, o);
                  const i = o.map((t) => (null != t.rank ? t : this.makeTensorFromTensorInfo(t)));
                  if (r) {
                    const t = this.getTensorsForGradient(e, s, i);
                    n = this.saveTensorsForBackwardMode(t);
                  }
                  return i;
                });
            } else {
              const { forwardFunc: e } = t,
                s = (t) => {
                  r && (n = t.map((t) => this.keep(this.clone(t))));
                };
              o = () => {
                const t = this.backend.numDataIds();
                u = this.tidy(() => e(this.backend, s));
                const n = Array.isArray(u) ? u : [u];
                return this.shouldCheckForMemLeaks() && this.checkKernelForMemLeak(l, t, n), n;
              };
            }
            const { inputs: c, attrs: p } = t,
              d = g(t) ? null : t.backwardsFunc;
            let f;
            return (
              this.scopedRun(
                () => this.state.kernelDepth++,
                () => this.state.kernelDepth--,
                () => {
                  this.ENV.getBool('DEBUG') || this.state.profiling
                    ? ((f = this.profiler.profileKernel(l, c, () => o())), this.ENV.getBool('DEBUG') && this.profiler.logKernelProfile(f), (e = f.outputs))
                    : (e = o());
                },
              ),
              r && this.addTapeNode(l, c, e, d, n, p),
              this.state.profiling &&
                this.state.activeProfile.kernels.push({
                  name: l,
                  bytesAdded: this.state.numBytes - s,
                  totalBytesSnapshot: this.state.numBytes,
                  tensorsAdded: this.state.numTensors - a,
                  totalTensorsSnapshot: this.state.numTensors,
                  inputShapes: Object.keys(c).map((t) => (null != c[t] ? c[t].shape : null)),
                  outputShapes: e.map((t) => t.shape),
                  kernelTimeMs: f.timeMs,
                  extraInfo: f.extraInfo,
                }),
              Array.isArray(u) ? e : e[0]
            );
          }
          saveTensorsForBackwardMode(t) {
            return t.map((t) => this.keep(this.clone(t)));
          }
          getTensorsForGradient(t, e, n) {
            const r = (0, i.vQ)(t);
            if (null != r) {
              const t = r.inputsToSave || [],
                s = r.outputsToSave || [];
              let a;
              r.saveAllInputs
                ? (h.vA(Array.isArray(e), () => 'saveAllInputs is true, expected inputs to be an array.'), (a = Object.keys(e).map((t) => e[t])))
                : (a = t.map((t) => e[t]));
              const o = n.filter((t, e) => s[e]);
              return a.concat(o);
            }
            return [];
          }
          makeTensor(t, e, n, r) {
            if (null == t) throw new Error('Values passed to engine.makeTensor() are null');
            (n = n || 'float32'), (r = r || this.backend);
            let s = t;
            'string' === n && h.Kg(t[0]) && (s = t.map((t) => f.encodeString(t)));
            const a = r.write(s, e, n),
              o = new p.qY(e, n, a, this.nextTensorId());
            if ((this.trackTensor(o, r), 'string' === n)) {
              const t = this.state.tensorInfo.get(a),
                e = (0, h.SL)(s);
              (this.state.numBytes += e - t.bytes), (t.bytes = e);
            }
            return o;
          }
          makeTensorFromDataId(t, e, n, r) {
            const s = { dataId: t, shape: e, dtype: (n = n || 'float32') };
            return this.makeTensorFromTensorInfo(s, r);
          }
          makeTensorFromTensorInfo(t, e) {
            const { dataId: n, shape: r, dtype: s } = t,
              a = new p.qY(r, s, n, this.nextTensorId());
            return this.trackTensor(a, e), a;
          }
          makeVariable(t, e = !0, n, r) {
            (n = n || this.nextVariableId().toString()), null != r && r !== t.dtype && (t = t.cast(r));
            const s = new p.rT(t, e, n, this.nextTensorId());
            if (null != this.state.registeredVariables[s.name]) throw new Error(`Variable with name ${s.name} was already registered`);
            return (this.state.registeredVariables[s.name] = s), this.incRef(s, this.backend), s;
          }
          trackTensor(t, e) {
            this.state.numTensors++, 'string' === t.dtype && this.state.numStringTensors++;
            let n = 0;
            'complex64' !== t.dtype && 'string' !== t.dtype && (n = t.size * h.jv(t.dtype)),
              (this.state.numBytes += n),
              this.state.tensorInfo.has(t.dataId) ||
                (this.state.numDataBuffers++, this.state.tensorInfo.set(t.dataId, { backend: e || this.backend, dtype: t.dtype, shape: t.shape, bytes: n })),
              t instanceof p.rT || this.track(t);
          }
          incRef(t, e) {
            this.trackTensor(t, e), this.backend.incRef(t.dataId);
          }
          removeDataId(t, e) {
            this.state.tensorInfo.has(t) && this.state.tensorInfo.get(t).backend === e && (this.state.tensorInfo.delete(t), this.state.numDataBuffers--);
          }
          disposeTensor(t) {
            if (!this.state.tensorInfo.has(t.dataId)) return;
            const e = this.state.tensorInfo.get(t.dataId);
            if (
              (this.state.numTensors--, 'string' === t.dtype && (this.state.numStringTensors--, (this.state.numBytes -= e.bytes)), 'complex64' !== t.dtype && 'string' !== t.dtype)
            ) {
              const e = t.size * h.jv(t.dtype);
              this.state.numBytes -= e;
            }
            e.backend.disposeData(t.dataId) && this.removeDataId(t.dataId, e.backend);
          }
          disposeVariables() {
            for (const t in this.state.registeredVariables) {
              const e = this.state.registeredVariables[t];
              this.disposeVariable(e);
            }
          }
          disposeVariable(t) {
            this.disposeTensor(t), null != this.state.registeredVariables[t.name] && delete this.state.registeredVariables[t.name];
          }
          memory() {
            const t = this.backend.memory();
            return (
              (t.numTensors = this.state.numTensors),
              (t.numDataBuffers = this.state.numDataBuffers),
              (t.numBytes = this.state.numBytes),
              this.state.numStringTensors > 0 &&
                ((t.unreliable = !0), null == t.reasons && (t.reasons = []), t.reasons.push('Memory usage by string tensors is approximate (2 bytes per character)')),
              t
            );
          }
          async profile(t) {
            this.state.profiling = !0;
            const e = this.state.numBytes,
              n = this.state.numTensors;
            (this.state.activeProfile.kernels = []),
              (this.state.activeProfile.result = await t()),
              (this.state.profiling = !1),
              (this.state.activeProfile.peakBytes = Math.max(...this.state.activeProfile.kernels.map((t) => t.totalBytesSnapshot))),
              (this.state.activeProfile.newBytes = this.state.numBytes - e),
              (this.state.activeProfile.newTensors = this.state.numTensors - n);
            for (const t of this.state.activeProfile.kernels) (t.kernelTimeMs = await t.kernelTimeMs), (t.extraInfo = await t.extraInfo);
            return this.state.activeProfile;
          }
          isTapeOn() {
            return this.state.gradientDepth > 0 && 0 === this.state.kernelDepth;
          }
          addTapeNode(t, e, n, r, s, a) {
            const o = { id: this.state.nextTapeNodeId++, kernelName: t, inputs: e, outputs: n, saved: s },
              u = (0, i.vQ)(t);
            null != u && (r = u.gradFunc),
              null != r &&
                (o.gradient = (t) => (
                  (t = t.map((t, e) => {
                    if (null == t) {
                      const t = n[e],
                        r = h.Ty(t.size, t.dtype);
                      return this.makeTensor(r, t.shape, t.dtype);
                    }
                    return t;
                  })),
                  r(t.length > 1 ? t : t[0], s, a)
                )),
              this.state.activeTape.push(o);
          }
          keep(t) {
            return (t.kept = !0), t;
          }
          startTape() {
            0 === this.state.gradientDepth && (this.state.activeTape = []), this.state.gradientDepth++;
          }
          endTape() {
            this.state.gradientDepth--;
          }
          startScope(t) {
            const e = { track: [], name: 'unnamed scope', id: this.state.nextScopeId++ };
            t && (e.name = t), this.state.scopeStack.push(e), (this.state.activeScope = e);
          }
          endScope(t) {
            const e = (0, d.getTensorsInContainer)(t),
              n = new Set(e.map((t) => t.id));
            for (let t = 0; t < this.state.activeScope.track.length; t++) {
              const e = this.state.activeScope.track[t];
              e.kept || n.has(e.id) || e.dispose();
            }
            const r = this.state.scopeStack.pop();
            (this.state.activeScope = 0 === this.state.scopeStack.length ? null : this.state.scopeStack[this.state.scopeStack.length - 1]),
              e.forEach((t) => {
                t.kept || t.scopeId !== r.id || this.track(t);
              });
          }
          gradients(t, e, n, r = !1) {
            if ((h.vA(e.length > 0, () => 'gradients() received an empty list of xs.'), null != n && 'float32' !== n.dtype))
              throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);
            const s = this.scopedRun(
              () => this.startTape(),
              () => this.endTape(),
              () => this.tidy('forward', t),
            );
            h.vA(s instanceof p.qY, () => 'The result y returned by f() must be a tensor.');
            const a = (0, c.p)(this.state.activeTape, e, s);
            if (!r && 0 === a.length && e.length > 0)
              throw new Error('Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.');
            return this.tidy('backward', () => {
              const t = {};
              (t[s.id] =
                null == n
                  ? (function (t) {
                      const e = (0, h.FZ)((0, h.Ze)(t), 'float32');
                      return w.makeTensor(e, t, 'float32');
                    })(s.shape)
                  : n),
                (0, c.a)(t, a, (t) => this.tidy(t), T);
              const r = e.map((e) => t[e.id]);
              return (
                0 === this.state.gradientDepth &&
                  (this.state.activeTape.forEach((t) => {
                    for (const e of t.saved) e.dispose();
                  }),
                  (this.state.activeTape = null)),
                { value: s, grads: r }
              );
            });
          }
          customGrad(t) {
            return (
              h.vA(h.Tn(t), () => 'The f passed in customGrad(f) must be a function.'),
              (...e) => {
                let n;
                h.vA(
                  e.every((t) => t instanceof p.qY),
                  () => 'The args passed in customGrad(f)(x1, x2,...) must all be tensors',
                );
                const r = {};
                return (
                  e.forEach((t, e) => {
                    r[e] = t;
                  }),
                  this.runKernelFunc({
                    forwardFunc: (r, s) => (
                      (n = t(...e, s)),
                      h.vA(n.value instanceof p.qY, () => 'The function f passed in customGrad(f) must return an object where `obj.value` is a tensor'),
                      h.vA(h.Tn(n.gradFunc), () => 'The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.'),
                      n.value
                    ),
                    backwardsFunc: (t, r) => {
                      const s = n.gradFunc(t, r),
                        a = Array.isArray(s) ? s : [s];
                      h.vA(
                        a.length === e.length,
                        () =>
                          'The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).',
                      ),
                        h.vA(
                          a.every((t) => t instanceof p.qY),
                          () => 'The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.',
                        );
                      const o = {};
                      return (
                        a.forEach((t, e) => {
                          o[e] = () => t;
                        }),
                        o
                      );
                    },
                    inputs: r,
                  })
                );
              }
            );
          }
          readSync(t) {
            return this.state.tensorInfo.get(t).backend.readSync(t);
          }
          read(t) {
            return this.state.tensorInfo.get(t).backend.read(t);
          }
          readToGPU(t, e) {
            return this.state.tensorInfo.get(t).backend.readToGPU(t, e);
          }
          async time(t) {
            const e = (0, f.now)(),
              n = await this.backend.time(t);
            return (n.wallMs = (0, f.now)() - e), n;
          }
          track(t) {
            return null != this.state.activeScope && ((t.scopeId = this.state.activeScope.id), this.state.activeScope.track.push(t)), t;
          }
          get registeredVariables() {
            return this.state.registeredVariables;
          }
          reset() {
            this.pendingBackendInitId++, this.state.dispose(), this.ENV.reset(), (this.state = new y());
            for (const t in this.registry) this.disposeRegisteredKernels(t), this.registry[t].dispose(), delete this.registry[t];
            (this.backendName = null), (this.backendInstance = null), (this.pendingBackendInit = null);
          }
        }
        function v() {
          const t = (0, a.L)();
          if (null == t._tfengine) {
            const e = new s.OH(t);
            t._tfengine = new b(e);
          }
          return (0, s.tj)(t._tfengine.ENV), (0, p.qP)(() => t._tfengine), t._tfengine;
        }
        (b.nextTensorId = 0), (b.nextVariableId = 0);
        const w = v();
        function T(t, e) {
          const n = { a: t, b: e };
          return w.runKernel(o.OMN, n);
        }
      },
      46574: (t, e, n) => {
        'use strict';
        n.d(e, { Km: () => l, OH: () => o, _K: () => u, tj: () => c });
        var r = n(45119),
          s = n(96763);
        const a = 'tfjsflags';
        class o {
          constructor(t) {
            (this.global = t), (this.flags = {}), (this.flagRegistry = {}), (this.urlFlags = {}), (this.getQueryParams = i), this.populateURLFlags();
          }
          setPlatform(t, e) {
            null != this.platform &&
              (u().getBool('IS_TEST') || u().getBool('PROD') || s.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),
              (this.platformName = t),
              (this.platform = e);
          }
          registerFlag(t, e, n) {
            if (((this.flagRegistry[t] = { evaluationFn: e, setHook: n }), null != this.urlFlags[t])) {
              const e = this.urlFlags[t];
              u().getBool('IS_TEST') || u().getBool('PROD') || s.warn(`Setting feature override from URL ${t}: ${e}.`), this.set(t, e);
            }
          }
          async getAsync(t) {
            return t in this.flags || (this.flags[t] = await this.evaluateFlag(t)), this.flags[t];
          }
          get(t) {
            if (t in this.flags) return this.flags[t];
            const e = this.evaluateFlag(t);
            if ((0, r.yL)(e)) throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);
            return (this.flags[t] = e), this.flags[t];
          }
          getNumber(t) {
            return this.get(t);
          }
          getBool(t) {
            return this.get(t);
          }
          getString(t) {
            return this.get(t);
          }
          getFlags() {
            return this.flags;
          }
          get features() {
            return this.flags;
          }
          set(t, e) {
            if (null == this.flagRegistry[t]) throw new Error(`Cannot set flag ${t} as it has not been registered.`);
            (this.flags[t] = e), null != this.flagRegistry[t].setHook && this.flagRegistry[t].setHook(e);
          }
          evaluateFlag(t) {
            if (null == this.flagRegistry[t]) throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);
            return this.flagRegistry[t].evaluationFn();
          }
          setFlags(t) {
            this.flags = Object.assign({}, t);
          }
          reset() {
            (this.flags = {}), (this.urlFlags = {}), this.populateURLFlags();
          }
          populateURLFlags() {
            if (void 0 === this.global || void 0 === this.global.location || void 0 === this.global.location.search) return;
            const t = this.getQueryParams(this.global.location.search);
            a in t &&
              t[a].split(',').forEach((t) => {
                const [e, n] = t.split(':');
                this.urlFlags[e] = (function (t, e) {
                  const n = e.toLowerCase();
                  return 'true' === n || 'false' === n ? 'true' === n : '' + +n === n ? +n : e;
                })(0, n);
              });
          }
        }
        function i(t) {
          const e = {};
          return (
            t.replace(
              /[?&]([^=?&]+)(?:=([^&]*))?/g,
              (t, ...n) => (
                (function (t, e, n) {
                  t[decodeURIComponent(e)] = decodeURIComponent(n || '');
                })(e, n[0], n[1]),
                n.join('=')
              ),
            ),
            e
          );
        }
        function u() {
          return l;
        }
        let l = null;
        function c(t) {
          l = t;
        }
      },
      66652: (t, e, n) => {
        'use strict';
        n(67897);
        var r = n(88580),
          s = n(46574),
          a = n(96763),
          o = n(65606);
        const i = (0, s._K)();
        i.registerFlag(
          'DEBUG',
          () => !1,
          (t) => {
            t && a.warn('Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.');
          },
        ),
          i.registerFlag('IS_BROWSER', () => r.isBrowser()),
          i.registerFlag('IS_NODE', () => void 0 !== o && void 0 !== o.versions && void 0 !== o.versions.node),
          i.registerFlag(
            'IS_CHROME',
            () => 'undefined' != typeof navigator && null != navigator && null != navigator.userAgent && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
          ),
          i.registerFlag(
            'IS_SAFARI',
            () => 'undefined' != typeof navigator && null != navigator && null != navigator.userAgent && /Safari/.test(navigator.userAgent) && /Apple/.test(navigator.vendor),
          ),
          i.registerFlag('PROD', () => !1),
          i.registerFlag('TENSORLIKE_CHECK_SHAPE_CONSISTENCY', () => i.getBool('DEBUG')),
          i.registerFlag('DEPRECATION_WARNINGS_ENABLED', () => !0),
          i.registerFlag('IS_TEST', () => !1),
          i.registerFlag('CHECK_COMPUTATION_FOR_ERRORS', () => i.getBool('DEBUG')),
          i.registerFlag('WRAP_TO_IMAGEBITMAP', () => !1),
          i.registerFlag('CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU', () => !1),
          i.registerFlag('USE_SETTIMEOUTCUSTOM', () => !1);
      },
      41743: (t, e, n) => {
        'use strict';
        n.d(e, { L: () => a, m: () => o });
        var r = n(65606);
        let s;
        function a() {
          if (null == s) {
            let t;
            if ('undefined' != typeof window) t = window;
            else if (void 0 !== n.g) t = n.g;
            else if (void 0 !== r) t = r;
            else {
              if ('undefined' == typeof self) throw new Error('Could not find a global object');
              t = self;
            }
            s = t;
          }
          return s;
        }
        function o(t, e) {
          const n = (function () {
            const t = a();
            return null == t._tfGlobals && (t._tfGlobals = new Map()), t._tfGlobals;
          })();
          if (n.has(t)) return n.get(t);
          {
            const r = e();
            return n.set(t, r), n.get(t);
          }
        }
      },
      35287: (t, e, n) => {
        'use strict';
        n.d(e, {
          AS: () => y,
          DZ: () => g,
          Gc: () => T,
          Hi: () => h,
          Hs: () => k,
          IS: () => c,
          ME: () => m,
          Ok: () => _,
          Sm: () => u,
          W4: () => E,
          aC: () => b,
          fL: () => p,
          gJ: () => A,
          gY: () => l,
          go: () => N,
          jh: () => w,
          jz: () => x,
          kB: () => v,
          m1: () => f,
          rE: () => S,
          rm: () => d,
        });
        var r = n(67897),
          s = n(46574),
          a = n(53910),
          o = n(30565),
          i = n(96763);
        function u() {
          (0, s._K)().set('PROD', !0);
        }
        function l() {
          (0, s._K)().set('DEBUG', !0);
        }
        function c() {
          (0, s._K)().set('DEPRECATION_WARNINGS_ENABLED', !1), i.warn('TensorFlow.js deprecation warnings have been disabled.');
        }
        function p(t) {
          (0, s._K)().getBool('DEPRECATION_WARNINGS_ENABLED') && i.warn(t + ' You can disable deprecation warnings with tf.disableDeprecationWarnings().');
        }
        function d() {
          r.T2.disposeVariables();
        }
        function h() {
          return r.T2;
        }
        function f() {
          return r.T2.memory();
        }
        function m(t) {
          return r.T2.profile(t);
        }
        function g(t, e) {
          return r.T2.tidy(t, e);
        }
        function y(t) {
          (0, o.getTensorsInContainer)(t).forEach((t) => t.dispose());
        }
        function b(t) {
          return r.T2.keep(t);
        }
        function v(t) {
          return r.T2.time(t);
        }
        function w(t) {
          return r.T2.setBackend(t);
        }
        function T() {
          return r.T2.ready();
        }
        function x() {
          return r.T2.backendName;
        }
        function S(t) {
          r.T2.removeBackend(t);
        }
        function N(t) {
          return r.T2.findBackend(t);
        }
        function E(t) {
          return r.T2.findBackendFactory(t);
        }
        function A(t, e, n = 1) {
          return r.T2.registerBackend(t, e, n);
        }
        function k() {
          return r.T2.backend;
        }
        function _(t, e) {
          (0, s._K)().setPlatform(t, e);
        }
        (0, a.B4)(p);
      },
      31830: (t, e, n) => {
        'use strict';
        n.d(e, { Dv: () => i, _X: () => d, jY: () => l, mu: () => c, ok: () => u, y7: () => p });
        var r = n(67897),
          s = n(53910),
          a = n(28189),
          o = n(45119);
        function i(t) {
          return (
            o.vA(o.Tn(t), () => 'The f passed in grad(f) must be a function'),
            (e, n) => {
              const s = (0, a.YT)(e, 'x', 'tf.grad', 'string_or_numeric'),
                i = null != n ? (0, a.YT)(n, 'dy', 'tf.grad') : null;
              return r.T2.tidy(() => {
                const { value: e, grads: n } = r.T2.gradients(() => t(s), [s], i);
                return null != i && o.O3(e.shape, i.shape, 'The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)'), h(n), n[0];
              });
            }
          );
        }
        function u(t) {
          return (
            o.vA(o.Tn(t), () => 'The f passed in grads(f) must be a function'),
            (e, n) => {
              o.vA(Array.isArray(e), () => 'The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s');
              const s = (0, a.j1)(e, 'args', 'tf.grads', 'string_or_numeric'),
                i = null != n ? (0, a.YT)(n, 'dy', 'tf.grads') : null;
              return r.T2.tidy(() => {
                const { value: e, grads: n } = r.T2.gradients(() => t(...s), s, i);
                return null != i && o.O3(e.shape, i.shape, 'The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])'), h(n), n;
              });
            }
          );
        }
        function l(t) {
          return (
            o.vA(o.Tn(t), () => 'The f passed in valueAndGrad(f) must be a function'),
            (e, n) => {
              o.vA(e instanceof s.qY, () => 'The x passed in valueAndGrad(f)(x) must be a tensor'),
                o.vA(null == n || n instanceof s.qY, () => 'The dy passed in valueAndGrad(f)(x, dy) must be a tensor');
              const { grads: a, value: i } = r.T2.gradients(() => t(e), [e], n);
              return h(a), { grad: a[0], value: i };
            }
          );
        }
        function c(t) {
          return (
            o.vA(o.Tn(t), () => 'The f passed in valueAndGrads(f) must be a function'),
            (e, n) => {
              o.vA(Array.isArray(e) && e.every((t) => t instanceof s.qY), () => 'The args passed in valueAndGrads(f)(args) must be array of tensors'),
                o.vA(null == n || n instanceof s.qY, () => 'The dy passed in valueAndGrads(f)(args, dy) must be a tensor');
              const a = r.T2.gradients(() => t(...e), e, n);
              return (
                null != n && o.O3(a.value.shape, n.shape, 'The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])'), h(a.grads), a
              );
            }
          );
        }
        function p(t, e) {
          o.vA(o.Tn(t), () => 'The f passed in variableGrads(f) must be a function'),
            o.vA(null == e || (Array.isArray(e) && e.every((t) => t instanceof s.rT)), () => 'The varList passed in variableGrads(f, varList) must be an array of variables');
          const n = null != e;
          if (!n) {
            e = [];
            for (const t in r.T2.registeredVariables) e.push(r.T2.registeredVariables[t]);
          }
          const a = n ? e.filter((t) => !t.trainable) : null,
            i = e.length;
          (e = e.filter((t) => t.trainable)),
            o.vA(e.length > 0, () => `variableGrads() expects at least one of the input variables to be trainable, but none of the ${i} variables is trainable.`);
          const { value: u, grads: l } = r.T2.gradients(t, e, null, !0);
          o.vA(
            l.some((t) => null != t),
            () =>
              'Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().',
          ),
            o.vA(0 === u.rank, () => `The f passed in variableGrads(f) must return a scalar, but it returned a rank-${u.rank} tensor`);
          const c = {};
          return (
            e.forEach((t, e) => {
              null != l[e] && (c[t.name] = l[e]);
            }),
            null != a && a.forEach((t) => (c[t.name] = null)),
            { value: u, grads: c }
          );
        }
        function d(t) {
          return r.T2.customGrad(t);
        }
        function h(t) {
          if (t.filter((t) => null == t).length > 0)
            throw new Error('Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.');
        }
      },
      26286: (t, e, n) => {
        'use strict';
        n.d(e, { D: () => g, f: () => a });
        var r = n(28570);
        const s = n.n(r)() || r;
        function a(t) {
          return s.fromString(t, !0, 16);
        }
        const o = a('c3a5c85c97cb3127'),
          i = a('b492b66fbe98f273'),
          u = a('9ae16a3b2f90404f');
        function l(t) {
          return t.xor(t.shru(47));
        }
        function c(t, e, n) {
          const r = t.slice(e, e + n);
          return s.fromBytes(Array.from(r), !0, !0);
        }
        function p(t, e) {
          return c(t, e, 8);
        }
        function d(t, e) {
          return c(t, e, 4);
        }
        function h(t, e) {
          return 0 === e ? t : t.shru(e).or(t.shl(64 - e));
        }
        function f(t, e, n = a('9ddfea08eb382d69')) {
          let r = t.xor(e).mul(n);
          r = r.xor(r.shru(47));
          let s = e.xor(r).mul(n);
          return (s = s.xor(s.shru(47))), (s = s.mul(n)), s;
        }
        function m(t, e, n, r) {
          return (function (t, e, n, r, s, a) {
            (s = s.add(t)), (a = h(a.add(s).add(r), 21));
            const o = s;
            return (s = (s = s.add(e)).add(n)), (a = a.add(h(s, 44))), [s.add(r), a.add(o)];
          })(p(t, e), p(t, e + 8), p(t, e + 16), p(t, e + 24), n, r);
        }
        function g(t, e = t.length) {
          const n = s.fromNumber(81, !0);
          if (e <= 32)
            return e <= 16
              ? (function (t, e = t.length) {
                  if (e >= 8) {
                    const n = u.add(2 * e),
                      r = p(t, 0).add(u),
                      s = p(t, e - 8);
                    return f(h(s, 37).mul(n).add(r), h(r, 25).add(s).mul(n), n);
                  }
                  if (e >= 4) {
                    const n = u.add(2 * e);
                    return f(d(t, 0).shl(3).add(e), d(t, e - 4), n);
                  }
                  if (e > 0) {
                    const n = t[0] + (t[e >> 1] << 8),
                      r = e + (t[e - 1] << 2);
                    return l(u.mul(n).xor(o.mul(r))).mul(u);
                  }
                  return u;
                })(t, e)
              : (function (t, e = t.length) {
                  const n = u.add(2 * e),
                    r = p(t, 0).mul(i),
                    s = p(t, 8),
                    a = p(t, e - 8).mul(n),
                    o = p(t, e - 16).mul(u);
                  return f(h(r.add(s), 43).add(h(a, 30)).add(o), r.add(h(s.add(u), 18)).add(a), n);
                })(t, e);
          if (e <= 64)
            return (function (t, e = t.length) {
              const n = u.add(2 * e),
                r = p(t, 0).mul(u),
                s = p(t, 8),
                a = p(t, e - 8).mul(n),
                o = p(t, e - 16).mul(u),
                i = h(r.add(s), 43).add(h(a, 30)).add(o),
                l = f(i, r.add(h(s.add(u), 18)).add(a), n),
                c = p(t, 16).mul(n),
                d = p(t, 24),
                m = i.add(p(t, e - 32)).mul(n),
                g = l.add(p(t, e - 24)).mul(n);
              return f(h(c.add(d), 43).add(h(m, 30)).add(g), c.add(h(d.add(r), 18)).add(m), n);
            })(t, e);
          let r = n,
            a = n.mul(i).add(113),
            c = l(a.mul(u).add(113)).mul(u),
            g = [s.UZERO, s.UZERO],
            y = [s.UZERO, s.UZERO];
          r = r.mul(u).add(p(t, 0));
          let b = 0;
          const v = 64 * ((e - 1) >> 6),
            w = v + ((e - 1) & 63) - 63;
          do {
            (r = h(
              r
                .add(a)
                .add(g[0])
                .add(p(t, b + 8)),
              37,
            ).mul(i)),
              (a = h(a.add(g[1]).add(p(t, b + 48)), 42).mul(i)),
              (r = r.xor(y[1])),
              (a = a.add(g[0]).add(p(t, b + 40))),
              (c = h(c.add(y[0]), 33).mul(i)),
              (g = m(t, b, g[1].mul(i), r.add(y[0]))),
              (y = m(t, b + 32, c.add(y[1]), a.add(p(t, b + 16)))),
              ([c, r] = [r, c]),
              (b += 64);
          } while (b !== v);
          const T = i.add(c.and(255).shl(1));
          return (
            (b = w),
            (y[0] = y[0].add((e - 1) & 63)),
            (g[0] = g[0].add(y[0])),
            (y[0] = y[0].add(g[0])),
            (r = h(
              r
                .add(a)
                .add(g[0])
                .add(p(t, b + 8)),
              37,
            ).mul(T)),
            (a = h(a.add(g[1]).add(p(t, b + 48)), 42).mul(T)),
            (r = r.xor(y[1].mul(9))),
            (a = a.add(g[0].mul(9).add(p(t, b + 40)))),
            (c = h(c.add(y[0]), 33).mul(T)),
            (g = m(t, b, g[1].mul(T), r.add(y[0]))),
            (y = m(t, b + 32, c.add(y[1]), a.add(p(t, b + 16)))),
            ([c, r] = [r, c]),
            f(f(g[0], y[0], T).add(l(a).mul(o)).add(c), f(g[1], y[1], T).add(r), T)
          );
        }
      },
      9495: (t, e, n) => {
        'use strict';
        n.r(e),
          n.d(e, {
            Abs: () => s.ljI,
            Acos: () => s.Vvy,
            Acosh: () => s.PH8,
            AdadeltaOptimizer: () => s.K$F,
            AdagradOptimizer: () => s.ah4,
            AdamOptimizer: () => s.FYc,
            AdamaxOptimizer: () => s.oC7,
            Add: () => s.OMN,
            AddN: () => s.EkD,
            All: () => s.u8Z,
            Any: () => s.FSt,
            ArgMax: () => s.Jp_,
            ArgMin: () => s.p_m,
            Asin: () => s.QKF,
            Asinh: () => s.epO,
            Atan: () => s.TyE,
            Atan2: () => s.lxb,
            Atanh: () => s.zP9,
            AvgPool: () => s.ho8,
            AvgPool3D: () => s.cS,
            AvgPool3DGrad: () => s.wwC,
            AvgPoolGrad: () => s.VCH,
            BatchMatMul: () => s.jAQ,
            BatchToSpaceND: () => s.Ik2,
            Bincount: () => s.N4F,
            BitwiseAnd: () => s.HNs,
            BroadcastArgs: () => s.vj7,
            BroadcastTo: () => s.LB5,
            Cast: () => s.KXH,
            Ceil: () => s.QDP,
            ClipByValue: () => s.vaV,
            Complex: () => s.pr3,
            ComplexAbs: () => s.$zE,
            Concat: () => s.$dB,
            Conv2D: () => s.p2J,
            Conv2DBackpropFilter: () => s.rFm,
            Conv2DBackpropInput: () => s.jfg,
            Conv3D: () => s.A1h,
            Conv3DBackpropFilterV2: () => s.iGz,
            Conv3DBackpropInputV2: () => s.gC7,
            Cos: () => s.Mn0,
            Cosh: () => s.MnK,
            CropAndResize: () => s.MRQ,
            Cumprod: () => s.jj_,
            Cumsum: () => s.nY8,
            DataStorage: () => s.GJx,
            DenseBincount: () => s.wNW,
            DepthToSpace: () => s.TMz,
            DepthwiseConv2dNative: () => s.tGH,
            DepthwiseConv2dNativeBackpropFilter: () => s.X$8,
            DepthwiseConv2dNativeBackpropInput: () => s.nVu,
            Diag: () => s.ORI,
            Dilation2D: () => s.jxD,
            Dilation2DBackpropFilter: () => s.pk0,
            Dilation2DBackpropInput: () => s.bP9,
            Draw: () => s.XmO,
            ENV: () => s.Kmu,
            Einsum: () => s.Qgm,
            Elu: () => s.Pah,
            EluGrad: () => s.rsH,
            Environment: () => s.OH$,
            Equal: () => s.BRl,
            Erf: () => s._s9,
            Exp: () => s.ox3,
            ExpandDims: () => s.ybN,
            Expm1: () => s.ybj,
            FFT: () => s.rGP,
            Fill: () => s.SQl,
            FlipLeftRight: () => s.BxF,
            Floor: () => s.ZgB,
            FloorDiv: () => s.ElG,
            FromPixels: () => s.awo,
            FusedBatchNorm: () => s.i5R,
            FusedConv2D: () => s.aAr,
            FusedDepthwiseConv2D: () => s.T7M,
            GatherNd: () => s.O4G,
            GatherV2: () => s.mxL,
            Greater: () => s.XhZ,
            GreaterEqual: () => s.lLS,
            IFFT: () => s.OAQ,
            Identity: () => s.lzr,
            Imag: () => s.dv8,
            IsFinite: () => s.gIW,
            IsInf: () => s.E3$,
            IsNan: () => s.iPs,
            KernelBackend: () => s.uI_,
            LRN: () => s.jM4,
            LRNGrad: () => s.ToN,
            LeakyRelu: () => s.X0$,
            Less: () => s.mIA,
            LessEqual: () => s.CwD,
            LinSpace: () => s.mnI,
            Log: () => s.tG8,
            Log1p: () => s.Cg$,
            LogSoftmax: () => s.zfU,
            LogicalAnd: () => s.RUm,
            LogicalNot: () => s.nZd,
            LogicalOr: () => s.LXA,
            LogicalXor: () => s.RW8,
            LowerBound: () => s.yPW,
            MatrixBandPart: () => s.WRv,
            Max: () => s.VAI,
            MaxPool: () => s.t3d,
            MaxPool3D: () => s.ySp,
            MaxPool3DGrad: () => s.cHb,
            MaxPoolGrad: () => s.RXX,
            MaxPoolWithArgmax: () => s.TL8,
            Maximum: () => s.LDN,
            Mean: () => s.g5A,
            Min: () => s.lNG,
            Minimum: () => s.LG0,
            MirrorPad: () => s.x7F,
            Mod: () => s.BLA,
            MomentumOptimizer: () => s.Qu_,
            Multinomial: () => s.WT3,
            Multiply: () => s.xu7,
            Neg: () => s.l0G,
            NonMaxSuppressionV3: () => s.SDM,
            NonMaxSuppressionV4: () => s.Zl4,
            NonMaxSuppressionV5: () => s.e0f,
            NotEqual: () => s.ylV,
            OP_SCOPE_SUFFIX: () => s.BTT,
            OneHot: () => s.urI,
            OnesLike: () => s.LWX,
            Optimizer: () => s.ELo,
            OptimizerConstructors: () => s.L5p,
            Pack: () => s.mM$,
            PadV2: () => s.ODT,
            Pool: () => s.bCz,
            Pow: () => s.pyJ,
            Prelu: () => s.Ncv,
            Prod: () => s.kdj,
            RMSPropOptimizer: () => s.PS5,
            RaggedGather: () => s.oJ2,
            RaggedRange: () => s.CQC,
            RaggedTensorToTensor: () => s.mH5,
            Range: () => s.Q6t,
            Rank: () => s.rgM,
            Real: () => s.LRy,
            RealDiv: () => s.sDr,
            Reciprocal: () => s.huO,
            Reduction: () => s.iDl,
            Relu: () => s.fUj,
            Relu6: () => s.P_L,
            Reshape: () => s.R23,
            ResizeBilinear: () => s.hgw,
            ResizeBilinearGrad: () => s.FCQ,
            ResizeNearestNeighbor: () => s.jOE,
            ResizeNearestNeighborGrad: () => s.XQy,
            Reverse: () => s.D7i,
            RotateWithOffset: () => s.BK4,
            Round: () => s.hVg,
            Rsqrt: () => s.TOR,
            SGDOptimizer: () => s.SYI,
            ScatterNd: () => s.pJc,
            SearchSorted: () => s.uWl,
            Select: () => s.l6P,
            Selu: () => s.u$b,
            Sigmoid: () => s.vI1,
            Sign: () => s.YVe,
            Sin: () => s.hql,
            Sinh: () => s.J3C,
            Slice: () => s.JiE,
            Softmax: () => s.rFG,
            Softplus: () => s.Fin,
            SpaceToBatchND: () => s.A8B,
            SparseFillEmptyRows: () => s.C8s,
            SparseReshape: () => s.BoJ,
            SparseSegmentMean: () => s.L6G,
            SparseSegmentSum: () => s.DvZ,
            SparseToDense: () => s.jgd,
            SplitV: () => s.Blb,
            Sqrt: () => s.dFH,
            Square: () => s.M6A,
            SquaredDifference: () => s.Ddj,
            StaticRegexReplace: () => s.GZp,
            Step: () => s.pnw,
            StridedSlice: () => s.UcO,
            StringNGrams: () => s.YAb,
            StringSplit: () => s.iW0,
            StringToHashBucketFast: () => s.$jE,
            Sub: () => s.PbM,
            Sum: () => s.WuN,
            Tan: () => s.oFs,
            Tanh: () => s.iuW,
            Tensor: () => s.qYS,
            TensorBuffer: () => s.ylz,
            TensorScatterUpdate: () => s.X4r,
            Tile: () => s.FAs,
            TopK: () => s.TBb,
            Transform: () => s.dLy,
            Transpose: () => s.wx0,
            Unique: () => s.EwU,
            Unpack: () => s.dXR,
            UnsortedSegmentSum: () => s.pPe,
            UpperBound: () => s.RMm,
            Variable: () => s.rTt,
            ZerosLike: () => s.xJ3,
            _FusedMatMul: () => s.Dr,
            abs: () => s.tnl,
            acos: () => s.HQu,
            acosh: () => s.FqL,
            add: () => s.WQq,
            addN: () => s.QiD,
            all: () => s.Q7R,
            any: () => s.bzn,
            argMax: () => s.FLi,
            argMin: () => s.XRg,
            asin: () => s.qRo,
            asinh: () => s.yHs,
            atan: () => s.rYl,
            atan2: () => s.FPz,
            atanh: () => s.rfv,
            avgPool: () => s.$jT,
            avgPool3d: () => s.sub,
            backend: () => s.Hs,
            backend_util: () => s.C0T,
            basicLSTMCell: () => s.lZX,
            batchNorm: () => s.$v7,
            batchNorm2d: () => s.BFc,
            batchNorm3d: () => s.kSi,
            batchNorm4d: () => s.T5N,
            batchToSpaceND: () => s.GTe,
            bincount: () => s.HbZ,
            bitwiseAnd: () => s.vjT,
            booleanMaskAsync: () => s.ftb,
            broadcastArgs: () => s.ROE,
            broadcastTo: () => s.hOW,
            broadcast_util: () => s.ZEY,
            browser: () => s.TaL,
            buffer: () => s.ra8,
            cast: () => s.wgE,
            ceil: () => s.mkO,
            clipByValue: () => s.zQh,
            clone: () => s.o8B,
            complex: () => s.faB,
            concat: () => s.xWs,
            concat1d: () => s.I1m,
            concat2d: () => s.RPU,
            concat3d: () => s.O5O,
            concat4d: () => s.P1l,
            conv1d: () => s.kA9,
            conv2d: () => s.Xtf,
            conv2dTranspose: () => s.wX9,
            conv3d: () => s.IPL,
            conv3dTranspose: () => s.jIJ,
            copyRegisteredKernels: () => s.Cfv,
            cos: () => s.gnS,
            cosh: () => s.yIG,
            cosineWindow: () => s._jP,
            cumprod: () => s.Lp0,
            cumsum: () => s.rCv,
            customGrad: () => s._Xg,
            denseBincount: () => s.aOp,
            deprecationWarn: () => s.fLc,
            depthToSpace: () => s.Rj8,
            depthwiseConv2d: () => s.Gl3,
            device_util: () => s.eMq,
            diag: () => s.smy,
            dilation2d: () => s.X7t,
            disableDeprecationWarnings: () => s.ISJ,
            dispose: () => s.ASo,
            disposeVariables: () => s.rm6,
            div: () => s.y4m,
            divNoNan: () => s.ek5,
            dot: () => s.Omf,
            dropout: () => s.EZY,
            einsum: () => s._3C,
            elu: () => s.Pqc,
            enableDebugMode: () => s.gYU,
            enableProdMode: () => s.SmG,
            enclosingPowerOfTwo: () => s.FJY,
            engine: () => s.Hi9,
            ensureShape: () => s.QP2,
            env: () => s._K2,
            equal: () => s.LCg,
            erf: () => s.Y12,
            euclideanNorm: () => s.p4S,
            exp: () => s.oNF,
            expandDims: () => s.UG6,
            expm1: () => s.IYd,
            eye: () => s.y5U,
            fft: () => s.hVP,
            fill: () => s.GSj,
            findBackend: () => s.goy,
            findBackendFactory: () => s.W4C,
            floor: () => s.RIf,
            floorDiv: () => s.wh_,
            fused: () => s.cZk,
            gather: () => s.kgh,
            gatherND: () => s.SY9,
            gather_util: () => s.FJy,
            getBackend: () => s.jz4,
            getGradient: () => s.vQR,
            getKernel: () => s._5H,
            getKernelsForBackend: () => s.OpK,
            grad: () => s.Dvk,
            grads: () => s.ok9,
            greater: () => s.rhj,
            greaterEqual: () => s.DQN,
            ifft: () => s.KGM,
            imag: () => s.ngS,
            image: () => s.Slp,
            inTopKAsync: () => s.U4u,
            io: () => s.io,
            irfft: () => s.ggX,
            isFinite: () => s.MIs,
            isInf: () => s.EN4,
            isNaN: () => s.yrW,
            keep: () => s.aCs,
            kernel_impls: () => s.kpo,
            leakyRelu: () => s.H8d,
            less: () => s.M7h,
            lessEqual: () => s.InN,
            linalg: () => s.mPL,
            linspace: () => s.mT8,
            localResponseNormalization: () => s.Kgs,
            log: () => s.Rm2,
            log1p: () => s.Kko,
            logSigmoid: () => s.nqI,
            logSoftmax: () => s.HPB,
            logSumExp: () => s.VZ,
            logicalAnd: () => s.n76,
            logicalNot: () => s.NSZ,
            logicalOr: () => s.ztW,
            logicalXor: () => s.rxB,
            losses: () => s.YYh,
            lowerBound: () => s.yzS,
            matMul: () => s.NoW,
            math: () => s.DyF,
            max: () => s.T9B,
            maxPool: () => s.jgi,
            maxPool3d: () => s.NYV,
            maxPoolWithArgmax: () => s.RO,
            maximum: () => s.PhQ,
            mean: () => s.i2o,
            memory: () => s.m1Z,
            meshgrid: () => s.OYQ,
            min: () => s.jkA,
            minimum: () => s.BpO,
            mirrorPad: () => s.FFZ,
            mod: () => s.ziu,
            moments: () => s.Clk,
            movingAverage: () => s.CRk,
            mul: () => s.lKK,
            multiRNNCell: () => s.YDF,
            multinomial: () => s.OjQ,
            neg: () => s.HZy,
            nextFrame: () => s.dA1,
            norm: () => s.xbf,
            notEqual: () => s.Ec,
            oneHot: () => s.Mw0,
            ones: () => s.SaS,
            onesLike: () => s.P61,
            op: () => s.op,
            outerProduct: () => s.X4o,
            pad: () => s.eVF,
            pad1d: () => s.BZs,
            pad2d: () => s.grY,
            pad3d: () => s.XHu,
            pad4d: () => s.WLX,
            pool: () => s.dzn,
            pow: () => s.n7C,
            prelu: () => s.NsG,
            print: () => s.yyV,
            prod: () => s._eU,
            profile: () => s.MEE,
            raggedGather: () => s.whe,
            raggedRange: () => s.iyU,
            raggedTensorToTensor: () => s.Q0_,
            rand: () => s._9M,
            randomGamma: () => s.pR9,
            randomNormal: () => s.FE$,
            randomStandardNormal: () => s.m0H,
            randomUniform: () => s.YeY,
            randomUniformInt: () => s.HYA,
            range: () => s.y17,
            ready: () => s.Gc4,
            real: () => s.xav,
            reciprocal: () => s.VOZ,
            registerBackend: () => s.gJX,
            registerGradient: () => s.krJ,
            registerKernel: () => s.tAK,
            relu: () => s.VVh,
            relu6: () => s.j__,
            removeBackend: () => s.rEj,
            reshape: () => s.tQQ,
            reverse: () => s.BEg,
            reverse1d: () => s.QD2,
            reverse2d: () => s.LMr,
            reverse3d: () => s.I2l,
            reverse4d: () => s.JYU,
            rfft: () => s.z8$,
            round: () => s.LIG,
            rsqrt: () => s.Z$r,
            scalar: () => s.d_2,
            scatterND: () => s.NFr,
            scatter_util: () => s.g23,
            searchSorted: () => s.sZg,
            selu: () => s.WfX,
            separableConv2d: () => s.wdz,
            serialization: () => s.JFn,
            setBackend: () => s.jh6,
            setPlatform: () => s.OkC,
            setdiff1dAsync: () => s.F12,
            sigmoid: () => s.ry7,
            sign: () => s._SZ,
            signal: () => s.vPA,
            sin: () => s.F8e,
            sinh: () => s.L0l,
            slice: () => s.dik,
            slice1d: () => s.Q$M,
            slice2d: () => s.zAd,
            slice3d: () => s.wck,
            slice4d: () => s.R0O,
            slice_util: () => s.Kro,
            softmax: () => s.Vs9,
            softplus: () => s.lw0,
            spaceToBatchND: () => s.eDJ,
            sparse: () => s.lMo,
            sparseToDense: () => s.Zhr,
            spectral: () => s.lOn,
            split: () => s.lDo,
            sqrt: () => s.RZD,
            square: () => s.EwI,
            squaredDifference: () => s.Pbu,
            squeeze: () => s.r2V,
            stack: () => s.t$z,
            step: () => s.PMw,
            stridedSlice: () => s.Ym9,
            string: () => s.YjP,
            sub: () => s.jbE,
            sum: () => s.czq,
            sumOutType: () => s.chL,
            tan: () => s.Mlm,
            tanh: () => s.ymU,
            tensor: () => s.OEK,
            tensor1d: () => s.tGX,
            tensor2d: () => s.KtR,
            tensor3d: () => s.$_$,
            tensor4d: () => s.g9W,
            tensor5d: () => s.Lpo,
            tensor6d: () => s.yxw,
            tensorScatterUpdate: () => s.NNh,
            tensor_util: () => s.d_S,
            test_util: () => s.Obs,
            tidy: () => s.DZQ,
            tile: () => s.Vsq,
            time: () => s.kBw,
            topk: () => s.rfw,
            train: () => s.BaG,
            transpose: () => s.mgz,
            truncatedNormal: () => s.efE,
            unique: () => s.AmM,
            unregisterGradient: () => s.rYx,
            unregisterKernel: () => s.iPt,
            unsortedSegmentSum: () => s.zAU,
            unstack: () => s.K$i,
            upcastType: () => s.TuY,
            upperBound: () => s.rni,
            util: () => s.ZSL,
            valueAndGrad: () => s.jYt,
            valueAndGrads: () => s.muS,
            variable: () => s.bvq,
            variableGrads: () => s.y7e,
            version_core: () => s.bgA,
            where: () => s._M9,
            whereAsync: () => s.YJN,
            zeros: () => s.Ul9,
            zerosLike: () => s.POl,
          }),
          n(10363);
        var r = n(63822),
          s = n(27258);
        (0, r.i)();
      },
      4908: (t, e, n) => {
        'use strict';
        n.d(e, { Y: () => c }), n(66652);
        var r = n(46574),
          s = n(77084),
          a = n(46669),
          o = n(56734);
        function i(t) {
          return new Promise((t) => setTimeout(t)).then(t);
        }
        class u {
          constructor(t) {
            if (!(0, r._K)().getBool('IS_BROWSER')) throw new Error('browserDownloads() cannot proceed because the current environment is not a browser.');
            t.startsWith(u.URL_SCHEME) && (t = t.slice(u.URL_SCHEME.length)),
              (null != t && 0 !== t.length) || (t = 'model'),
              (this.modelJsonFileName = t + '.json'),
              (this.weightDataFileName = t + '.weights.bin');
          }
          async save(t) {
            if ('undefined' == typeof document) throw new Error('Browser downloads are not supported in this environment since `document` is not present');
            const e = o.D.join(t.weightData),
              n = window.URL.createObjectURL(new Blob([e], { type: 'application/octet-stream' }));
            if (t.modelTopology instanceof ArrayBuffer) throw new Error('BrowserDownloads.save() does not support saving model topology in binary formats yet.');
            {
              const e = [{ paths: ['./' + this.weightDataFileName], weights: t.weightSpecs }],
                r = (0, s.zV)(t, e),
                a = window.URL.createObjectURL(new Blob([JSON.stringify(r)], { type: 'application/json' })),
                o = null == this.modelJsonAnchor ? document.createElement('a') : this.modelJsonAnchor;
              if (((o.download = this.modelJsonFileName), (o.href = a), await i(() => o.dispatchEvent(new MouseEvent('click'))), null != t.weightData)) {
                const t = null == this.weightDataAnchor ? document.createElement('a') : this.weightDataAnchor;
                (t.download = this.weightDataFileName), (t.href = n), await i(() => t.dispatchEvent(new MouseEvent('click')));
              }
              return { modelArtifactsInfo: (0, s.oR)(t) };
            }
          }
        }
        u.URL_SCHEME = 'downloads://';
        class l {
          constructor(t) {
            if (null == t || t.length < 1) throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);
            (this.jsonFile = t[0]), (this.weightsFiles = t.slice(1));
          }
          async load() {
            return new Promise((t, e) => {
              const n = new FileReader();
              (n.onload = (n) => {
                const r = JSON.parse(n.target.result),
                  a = r.modelTopology;
                if (null == a) return void e(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));
                if (null == r.weightsManifest) return void e(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));
                if (0 === this.weightsFiles.length) return void t({ modelTopology: a });
                const o = (0, s.Ej)(r, (t) => this.loadWeights(t));
                t(o);
              }),
                (n.onerror = (t) =>
                  e(
                    `Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`,
                  )),
                n.readAsText(this.jsonFile);
            });
          }
          loadWeights(t) {
            const e = [],
              n = [];
            for (const r of t) e.push(...r.weights), n.push(...r.paths);
            const r = this.checkManifestAndWeightFiles(t),
              s = n.map((t) => this.loadWeightsFile(t, r[t]));
            return Promise.all(s).then((t) => [e, t]);
          }
          loadWeightsFile(t, e) {
            return new Promise((n, r) => {
              const s = new FileReader();
              (s.onload = (t) => {
                const e = t.target.result;
                n(e);
              }),
                (s.onerror = (e) => r(`Failed to weights data from file of path '${t}'.`)),
                s.readAsArrayBuffer(e);
            });
          }
          checkManifestAndWeightFiles(t) {
            const e = [],
              n = this.weightsFiles.map((t) => (0, s.P8)(t.name)),
              r = {};
            for (const a of t)
              a.paths.forEach((t) => {
                const a = (0, s.P8)(t);
                if (-1 !== e.indexOf(a)) throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);
                if ((e.push(a), -1 === n.indexOf(a))) throw new Error(`Weight file with basename '${a}' is not provided.`);
                r[t] = this.weightsFiles[n.indexOf(a)];
              });
            if (e.length !== this.weightsFiles.length)
              throw new Error(`Mismatch in the number of files in weights manifest (${e.length}) and the number of weight files provided (${this.weightsFiles.length}).`);
            return r;
          }
        }
        function c(t) {
          return new l(t);
        }
        a.bM.registerSaveRouter((t) =>
          (0, r._K)().getBool('IS_BROWSER') && !Array.isArray(t) && t.startsWith(u.URL_SCHEME)
            ? (function (t = 'model') {
                return new u(t);
              })(t.slice(u.URL_SCHEME.length))
            : null,
        );
      },
      56734: (t, e, n) => {
        'use strict';
        n.d(e, { D: () => s });
        var r = n(89783);
        class s {
          static join(t) {
            return new s(t).slice();
          }
          constructor(t) {
            if (((this.shards = []), (this.previousShardIndex = 0), null == t)) return;
            if ((t instanceof Array || (t = [t]), 0 === (t = t.map((t) => (r.isTypedArray(t) ? t.buffer : t))).length)) return;
            this.bufferUniformSize = t[0].byteLength;
            let e = 0;
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              n !== t.length - 1 && r.byteLength !== this.bufferUniformSize && (this.bufferUniformSize = void 0);
              const s = e + r.byteLength;
              this.shards.push({ buffer: r, start: e, end: s }), (e = s);
            }
            0 === this.shards.length && (this.byteLength = 0), (this.byteLength = this.shards[this.shards.length - 1].end);
          }
          slice(t = 0, e = this.byteLength) {
            if (0 === this.shards.length) return new ArrayBuffer(0);
            if (((t = isNaN(Number(t)) ? 0 : t), (e = isNaN(Number(e)) ? 0 : e), (t = Math.max(0, t)), (e = Math.min(this.byteLength, e)) <= t)) return new ArrayBuffer(0);
            const n = this.findShardForByte(t);
            if (-1 === n) throw new Error(`Could not find start shard for byte ${t}`);
            const r = new ArrayBuffer(e - t),
              s = new Uint8Array(r);
            let a = 0;
            for (let r = n; r < this.shards.length; r++) {
              const n = this.shards[r],
                o = t + a - n.start,
                i = a,
                u = Math.min(e, n.end) - n.start,
                l = new Uint8Array(n.buffer, o, u - o);
              if ((s.set(l, i), (a += l.length), e < n.end)) break;
            }
            return r;
          }
          findShardForByte(t) {
            if (0 === this.shards.length || t < 0 || t >= this.byteLength) return -1;
            if (null != this.bufferUniformSize) return (this.previousShardIndex = Math.floor(t / this.bufferUniformSize)), this.previousShardIndex;
            function e(e) {
              return t < e.start ? -1 : t >= e.end ? 1 : 0;
            }
            if (0 === e(this.shards[this.previousShardIndex])) return this.previousShardIndex;
            const n = (function (t, e) {
              let n = 0,
                r = t.length;
              for (; n <= r; ) {
                const s = Math.floor((r - n) / 2) + n,
                  a = e(t[s]);
                if (0 === a) return s;
                a < 0 ? (r = s) : (n = s + 1);
              }
              return -1;
            })(this.shards, e);
            return -1 === n ? -1 : ((this.previousShardIndex = n), this.previousShardIndex);
          }
        }
      },
      47894: (t, e, n) => {
        'use strict';
        n.d(e, { LV: () => d, aO: () => h, wO: () => c });
        var r = n(46574),
          s = n(45119),
          a = n(77084),
          o = n(56734),
          i = n(46669),
          u = n(66519);
        class l {
          constructor(t, e) {
            if (
              ((this.DEFAULT_METHOD = 'POST'),
              null == e && (e = {}),
              (this.weightPathPrefix = e.weightPathPrefix),
              (this.weightUrlConverter = e.weightUrlConverter),
              null != e.fetchFunc
                ? ((0, s.vA)(
                    'function' == typeof e.fetchFunc,
                    () => 'Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)',
                  ),
                  (this.fetch = e.fetchFunc))
                : (this.fetch = (0, r._K)().platform.fetch),
              (0, s.vA)(null != t && t.length > 0, () => 'URL path for http must not be null, undefined or empty.'),
              Array.isArray(t) && (0, s.vA)(2 === t.length, () => `URL paths for http must have a length of 2, (actual length is ${t.length}).`),
              (this.path = t),
              null != e.requestInit && null != e.requestInit.body)
            )
              throw new Error('requestInit is expected to have no pre-existing body, but has one.');
            (this.requestInit = e.requestInit || {}), (this.loadOptions = e);
          }
          async save(t) {
            if (t.modelTopology instanceof ArrayBuffer) throw new Error('BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.');
            const e = Object.assign({ method: this.DEFAULT_METHOD }, this.requestInit);
            e.body = new FormData();
            const n = [{ paths: ['./model.weights.bin'], weights: t.weightSpecs }],
              r = (0, a.zV)(t, n);
            if ((e.body.append('model.json', new Blob([JSON.stringify(r)], { type: 'application/json' }), 'model.json'), null != t.weightData)) {
              const n = o.D.join(t.weightData);
              e.body.append('model.weights.bin', new Blob([n], { type: 'application/octet-stream' }), 'model.weights.bin');
            }
            const s = await this.fetch(this.path, e);
            if (s.ok) return { modelArtifactsInfo: (0, a.oR)(t), responses: [s] };
            throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`);
          }
          async loadModelJSON() {
            const t = await this.fetch(this.path, this.requestInit);
            if (!t.ok) throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);
            let e;
            try {
              e = await t.json();
            } catch (t) {
              let e = `Failed to parse model JSON of response from ${this.path}.`;
              throw (
                (this.path.endsWith('.pb')
                  ? (e +=
                      " Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.")
                  : (e += ' Please make sure the server is serving valid JSON for this request.'),
                new Error(e))
              );
            }
            const n = e.modelTopology,
              r = e.weightsManifest;
            if (null == n && null == r) throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);
            return e;
          }
          async load() {
            if (this.loadOptions.streamWeights) return this.loadStream();
            const t = await this.loadModelJSON();
            return (0, a.Ej)(t, (t) => this.loadWeights(t));
          }
          async loadStream() {
            const t = await this.loadModelJSON(),
              e = await this.getWeightUrls(t.weightsManifest),
              n = (0, a.Xf)(t.weightsManifest);
            return Object.assign(Object.assign({}, t), { weightSpecs: n, getWeightStream: () => (0, u.SD)(e, this.loadOptions) });
          }
          async getWeightUrls(t) {
            const e = Array.isArray(this.path) ? this.path[1] : this.path,
              [n, r] = (function (t) {
                const e = t.lastIndexOf('/'),
                  n = t.lastIndexOf('?');
                return [t.substring(0, e) + '/', n > e ? t.substring(n) : ''];
              })(e),
              s = this.weightPathPrefix || n,
              a = [],
              o = [];
            for (const e of t) for (const t of e.paths) null != this.weightUrlConverter ? o.push(this.weightUrlConverter(t)) : a.push(s + t + r);
            return this.weightUrlConverter && a.push(...(await Promise.all(o))), a;
          }
          async loadWeights(t) {
            const e = await this.getWeightUrls(t);
            return [(0, a.Xf)(t), await (0, u.jP)(e, this.loadOptions)];
          }
        }
        function c(t) {
          return null != t.match(l.URL_SCHEME_REGEX);
        }
        l.URL_SCHEME_REGEX = /^https?:\/\//;
        const p = (t, e) => {
          if ('undefined' == typeof fetch && (null == e || null == e.fetchFunc)) return null;
          {
            let n = !0;
            if (((n = Array.isArray(t) ? t.every((t) => c(t)) : c(t)), n)) return d(t, e);
          }
          return null;
        };
        function d(t, e) {
          return new l(t, e);
        }
        function h(t, e) {
          return d(t, e);
        }
        i.bM.registerSaveRouter(p), i.bM.registerLoadRouter(p);
      },
      30522: (t, e, n) => {
        'use strict';
        n.d(e, { lQ: () => f, mn: () => d }), n(66652);
        var r = n(46574),
          s = n(77084),
          a = n(46669),
          o = n(56734);
        const i = 'tensorflowjs',
          u = 'models_store',
          l = 'model_info_store';
        function c() {
          if (!(0, r._K)().getBool('IS_BROWSER')) throw new Error('Failed to obtain IndexedDB factory because the current environmentis not a web browser.');
          const t = 'undefined' == typeof window ? self : window,
            e = t.indexedDB || t.mozIndexedDB || t.webkitIndexedDB || t.msIndexedDB || t.shimIndexedDB;
          if (null == e) throw new Error('The current browser does not appear to support IndexedDB.');
          return e;
        }
        function p(t) {
          const e = t.result;
          e.createObjectStore(u, { keyPath: 'modelPath' }), e.createObjectStore(l, { keyPath: 'modelPath' });
        }
        class d {
          constructor(t) {
            if (((this.indexedDB = c()), null == t || !t)) throw new Error('For IndexedDB, modelPath must not be null, undefined or empty.');
            this.modelPath = t;
          }
          async save(t) {
            if (t.modelTopology instanceof ArrayBuffer) throw new Error('BrowserLocalStorage.save() does not support saving model topology in binary formats yet.');
            return this.databaseAction(this.modelPath, t);
          }
          async load() {
            return this.databaseAction(this.modelPath);
          }
          databaseAction(t, e) {
            return new Promise((t, n) => {
              const r = this.indexedDB.open(i, 1);
              (r.onupgradeneeded = () => p(r)),
                (r.onsuccess = () => {
                  const a = r.result;
                  if (null == e) {
                    const e = a.transaction(u, 'readonly'),
                      r = e.objectStore(u).get(this.modelPath);
                    (r.onsuccess = () => {
                      if (null == r.result) return a.close(), n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));
                      t(r.result.modelArtifacts);
                    }),
                      (r.onerror = (t) => (a.close(), n(r.error))),
                      (e.oncomplete = () => a.close());
                  } else {
                    e.weightData = o.D.join(e.weightData);
                    const r = (0, s.oR)(e),
                      i = a.transaction(l, 'readwrite');
                    let c,
                      p,
                      d = i.objectStore(l);
                    try {
                      c = d.put({ modelPath: this.modelPath, modelArtifactsInfo: r });
                    } catch (t) {
                      return n(t);
                    }
                    (c.onsuccess = () => {
                      p = a.transaction(u, 'readwrite');
                      const s = p.objectStore(u);
                      let o;
                      try {
                        o = s.put({ modelPath: this.modelPath, modelArtifacts: e, modelArtifactsInfo: r });
                      } catch (t) {
                        return n(t);
                      }
                      (o.onsuccess = () => t({ modelArtifactsInfo: r })),
                        (o.onerror = (t) => {
                          d = i.objectStore(l);
                          const e = d.delete(this.modelPath);
                          (e.onsuccess = () => (a.close(), n(o.error))), (e.onerror = (t) => (a.close(), n(o.error)));
                        });
                    }),
                      (c.onerror = (t) => (a.close(), n(c.error))),
                      (i.oncomplete = () => {
                        null == p ? a.close() : (p.oncomplete = () => a.close());
                      });
                  }
                }),
                (r.onerror = (t) => n(r.error));
            });
          }
        }
        d.URL_SCHEME = 'indexeddb://';
        const h = (t) => {
          return (0, r._K)().getBool('IS_BROWSER') && !Array.isArray(t) && t.startsWith(d.URL_SCHEME) ? ((e = t.slice(d.URL_SCHEME.length)), new d(e)) : null;
          var e;
        };
        a.bM.registerSaveRouter(h), a.bM.registerLoadRouter(h);
        class f {
          constructor() {
            this.indexedDB = c();
          }
          async listModels() {
            return new Promise((t, e) => {
              const n = this.indexedDB.open(i, 1);
              (n.onupgradeneeded = () => p(n)),
                (n.onsuccess = () => {
                  const r = n.result,
                    s = r.transaction(l, 'readonly'),
                    a = s.objectStore(l).getAll();
                  (a.onsuccess = () => {
                    const e = {};
                    for (const t of a.result) e[t.modelPath] = t.modelArtifactsInfo;
                    t(e);
                  }),
                    (a.onerror = (t) => (r.close(), e(a.error))),
                    (s.oncomplete = () => r.close());
                }),
                (n.onerror = (t) => e(n.error));
            });
          }
          async removeModel(t) {
            var e;
            return (
              (t = (e = t).startsWith(d.URL_SCHEME) ? e.slice(d.URL_SCHEME.length) : e),
              new Promise((e, n) => {
                const r = this.indexedDB.open(i, 1);
                (r.onupgradeneeded = () => p(r)),
                  (r.onsuccess = () => {
                    const s = r.result,
                      a = s.transaction(l, 'readwrite'),
                      o = a.objectStore(l),
                      i = o.get(t);
                    let c;
                    (i.onsuccess = () => {
                      if (null == i.result) return s.close(), n(new Error(`Cannot find model with path '${t}' in IndexedDB.`));
                      {
                        const r = o.delete(t),
                          a = () => {
                            c = s.transaction(u, 'readwrite');
                            const r = c.objectStore(u).delete(t);
                            (r.onsuccess = () => e(i.result.modelArtifactsInfo)), (r.onerror = (t) => n(i.error));
                          };
                        (r.onsuccess = a), (r.onerror = (t) => (a(), s.close(), n(i.error)));
                      }
                    }),
                      (i.onerror = (t) => (s.close(), n(i.error))),
                      (a.oncomplete = () => {
                        null == c ? s.close() : (c.oncomplete = () => s.close());
                      });
                  }),
                  (r.onerror = (t) => n(r.error));
              })
            );
          }
        }
      },
      17890: (t, e, n) => {
        'use strict';
        n.r(e),
          n.d(e, {
            CompositeArrayBuffer: () => l.D,
            browserFiles: () => r.Y,
            browserHTTPRequest: () => s.aO,
            concatenateArrayBuffers: () => a.AQ,
            copyModel: () => c.xk,
            decodeWeights: () => a.CY,
            decodeWeightsStream: () => a.s5,
            encodeWeights: () => a.aG,
            fromMemory: () => o.aF,
            fromMemorySync: () => o.Ll,
            getLoadHandlers: () => i.C9,
            getModelArtifactsForJSON: () => a.Ej,
            getModelArtifactsForJSONSync: () => a.Rl,
            getModelArtifactsInfoForJSON: () => a.oR,
            getSaveHandlers: () => i.x3,
            getWeightSpecs: () => a.Xf,
            http: () => s.LV,
            isHTTPScheme: () => s.wO,
            listModels: () => c.D,
            loadWeights: () => u.Ic,
            moveModel: () => c.Vo,
            registerLoadRouter: () => i.R4,
            registerSaveRouter: () => i.Yd,
            removeModel: () => c.az,
            weightsLoaderFactory: () => u.j$,
            withSaveHandler: () => o.gF,
            withSaveHandlerSync: () => o.TM,
          }),
          n(30522),
          n(76745);
        var r = n(4908),
          s = n(47894),
          a = n(77084),
          o = n(9250),
          i = n(46669),
          u = n(66519),
          l = n(56734),
          c = n(66235);
      },
      77084: (t, e, n) => {
        'use strict';
        n.d(e, { AQ: () => N, CY: () => h, Ej: () => _, P8: () => E, Rl: () => k, Xf: () => O, aG: () => d, jf: () => S, l3: () => x, oR: () => I, s5: () => b, zV: () => A });
        var r = n(37148),
          s = n(74027),
          a = n(45119),
          o = n(15685),
          i = n(56734),
          u = n(35287),
          l = n(46574),
          c = n(62045).hp;
        const p = 4;
        async function d(t, e) {
          const n = [],
            r = [],
            s = Array.isArray(t) ? t.map((t) => t.name) : Object.keys(t);
          for (let a = 0; a < s.length; ++a) {
            const o = s[a],
              i = Array.isArray(t) ? t[a].tensor : t[o];
            if ('float32' !== i.dtype && 'int32' !== i.dtype && 'bool' !== i.dtype && 'string' !== i.dtype && 'complex64' !== i.dtype)
              throw new Error(`Unsupported dtype in weight '${o}': ${i.dtype}`);
            const u = { name: o, shape: i.shape, dtype: i.dtype };
            if ('string' === i.dtype) {
              const t = new Promise(async (t) => {
                const e = await i.bytes(),
                  n = e.reduce((t, e) => t + e.length, 0) + p * e.length,
                  r = new Uint8Array(n);
                let s = 0;
                for (let t = 0; t < e.length; t++) {
                  const n = e[t],
                    a = new Uint8Array(new Uint32Array([n.length]).buffer);
                  r.set(a, s), (s += p), r.set(n, s), (s += n.length);
                }
                t(r);
              });
              r.push(t);
            } else r.push(i.data());
            null != e && (u.group = e), n.push(u);
          }
          return { data: v(await Promise.all(r)), specs: n };
        }
        function h(t, e) {
          const n = new i.D(t),
            r = {};
          let s = 0;
          for (const t of e) {
            const e = f(t, (t, e) => n.slice(s + t, s + e));
            (r[t.name] = g(t, n.slice(s, s + e))), (s += e);
          }
          return r;
        }
        function f(t, e) {
          const n = (0, a.Ze)(t.shape);
          let r;
          if ('quantization' in t) {
            const e = t.quantization;
            r = o.i[e.dtype];
          } else {
            if ('string' === t.dtype) {
              let t = 0;
              for (let r = 0; r < n; r++) t += p + new Uint32Array(e(t, t + p))[0];
              return t;
            }
            r = o.i[t.dtype];
          }
          return n * r;
        }
        async function m(t, e) {
          const n = (0, a.Ze)(t.shape);
          let r;
          if ('quantization' in t) {
            const e = t.quantization;
            r = o.i[e.dtype];
          } else {
            if ('string' === t.dtype) {
              let t = 0;
              for (let r = 0; r < n; r++) t += p + new Uint32Array(await e(t, t + p))[0];
              return t;
            }
            r = o.i[t.dtype];
          }
          return n * r;
        }
        function g(t, e) {
          const n = t.name,
            i = t.dtype,
            u = t.shape,
            l = (0, a.Ze)(u);
          let c,
            d = 0;
          if ('quantization' in t) {
            const r = t.quantization;
            if ('uint8' === r.dtype || 'uint16' === r.dtype) {
              if (!('min' in r) || !('scale' in r)) throw new Error(`Weight ${t.name} with quantization ${r.dtype} doesn't have corresponding metadata min and scale.`);
            } else {
              if ('float16' !== r.dtype)
                throw new Error(`Weight ${t.name} has unknown quantization dtype ${r.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);
              if ('float32' !== i) throw new Error(`Weight ${t.name} is quantized with ${r.dtype} which only supports weights of type float32 not ${i}.`);
            }
            const s = o.i[r.dtype],
              a = 'uint8' === r.dtype ? new Uint8Array(e) : new Uint16Array(e);
            if ('float32' === i)
              if ('uint8' === r.dtype || 'uint16' === r.dtype) {
                c = new Float32Array(a.length);
                for (let t = 0; t < a.length; t++) {
                  const e = a[t];
                  c[t] = e * r.scale + r.min;
                }
              } else {
                if ('float16' !== r.dtype) throw new Error(`Unsupported quantization type ${r.dtype} for weight type float32.`);
                {
                  const t = (function () {
                    const t = (function () {
                        const t = (t) => {
                            let e = t << 13,
                              n = 0;
                            for (; !(8388608 & e); ) (n -= 8388608), (e <<= 1);
                            return (e &= -8388609), (n += 947912704), e | n;
                          },
                          e = new Uint32Array(2048);
                        e[0] = 0;
                        for (let n = 1; n < 1024; n++) e[n] = t(n);
                        for (let t = 1024; t < 2048; t++) e[t] = 939524096 + ((t - 1024) << 13);
                        return e;
                      })(),
                      e = (function () {
                        const t = new Uint32Array(64);
                        (t[0] = 0), (t[31] = 1199570944), (t[32] = 2147483648), (t[63] = 3347054592);
                        for (let e = 1; e < 31; e++) t[e] = e << 23;
                        for (let e = 33; e < 63; e++) t[e] = 2147483648 + ((e - 32) << 23);
                        return t;
                      })(),
                      n = (function () {
                        const t = new Uint32Array(64);
                        for (let e = 0; e < 64; e++) t[e] = 1024;
                        return (t[0] = t[32] = 0), t;
                      })();
                    return (r) => {
                      const s = new ArrayBuffer(4 * r.length),
                        a = new Uint32Array(s);
                      for (let s = 0; s < r.length; s++) {
                        const o = r[s],
                          i = t[n[o >> 10] + (1023 & o)] + e[o >> 10];
                        a[s] = i;
                      }
                      return new Float32Array(s);
                    };
                  })();
                  c = t(a);
                }
              }
            else {
              if ('int32' !== i) throw new Error(`Unsupported dtype in weight '${n}': ${i}`);
              if ('uint8' !== r.dtype && 'uint16' !== r.dtype) throw new Error(`Unsupported quantization type ${r.dtype} for weight type int32.`);
              c = new Int32Array(a.length);
              for (let t = 0; t < a.length; t++) {
                const e = a[t];
                c[t] = Math.round(e * r.scale + r.min);
              }
            }
            d += l * s;
          } else if ('string' === i) {
            const n = (0, a.Ze)(t.shape);
            c = [];
            for (let t = 0; t < n; t++) {
              const t = new Uint32Array(e.slice(d, d + p))[0];
              d += p;
              const n = new Uint8Array(e.slice(d, d + t));
              c.push(n), (d += t);
            }
          } else {
            const t = o.i[i];
            if ('float32' === i) c = new Float32Array(e);
            else if ('int32' === i) c = new Int32Array(e);
            else {
              if ('bool' !== i) {
                if ('complex64' === i) {
                  c = new Float32Array(e);
                  const t = new Float32Array(c.length / 2),
                    n = new Float32Array(c.length / 2);
                  for (let e = 0; e < t.length; e++) (t[e] = c[2 * e]), (n[e] = c[2 * e + 1]);
                  const a = (0, s.O)(t, u, 'float32'),
                    o = (0, s.O)(n, u, 'float32'),
                    i = (0, r.f)(a, o);
                  return a.dispose(), o.dispose(), i;
                }
                throw new Error(`Unsupported dtype in weight '${n}': ${i}`);
              }
              c = new Uint8Array(e);
            }
            d += l * t;
          }
          return (0, s.O)(c, u, i);
        }
        async function y(t, e, n) {
          let r = new Uint8Array(e);
          for (; r.byteLength < n; ) {
            const { done: e, value: s } = await t.read();
            if (e && null == s) {
              const t = n - r.byteLength;
              throw new Error(`Reader is done but ${t} bytes are still expected`);
            }
            const a = new Uint8Array(r.length + s.byteLength);
            a.set(r, 0), a.set(new Uint8Array(s), r.length), (r = a);
          }
          return r.buffer;
        }
        async function b(t, e) {
          const n = {},
            r = t.getReader();
          let s = new ArrayBuffer(0);
          for (const t of e) {
            const e = await m(t, async (t, e) => ((s = await y(r, s, e)), s.slice(t, e)));
            s = await y(r, s, e);
            const o = s.slice(0, e);
            s = s.slice(e);
            const i = g(t, o);
            if (((n[t.name] = i), 'webgpu' === (0, u.jz)())) {
              const t = (0, u.Hs)();
              'uploadToGPU' in t && (0, a.Ze)(i.shape) >= (0, l._K)().get('WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD') && t.uploadToGPU(i.dataId);
            }
          }
          return n;
        }
        function v(t) {
          if (null === t) throw new Error(`Invalid input value: ${JSON.stringify(t)}`);
          let e = 0;
          const n = [];
          t.forEach((t) => {
            if (
              ((e += t.byteLength),
              n.push(t.byteLength === t.buffer.byteLength ? t : new t.constructor(t)),
              !(t instanceof Float32Array || t instanceof Int32Array || t instanceof Uint8Array))
            )
              throw new Error(`Unsupported TypedArray subtype: ${t.constructor.name}`);
          });
          const r = new Uint8Array(e);
          let s = 0;
          return (
            n.forEach((t) => {
              r.set(new Uint8Array(t.buffer), s), (s += t.byteLength);
            }),
            r.buffer
          );
        }
        const w = void 0 !== c && ('undefined' == typeof Blob || 'undefined' == typeof atob || 'undefined' == typeof btoa);
        function T(t) {
          return w ? c.byteLength(t, 'utf8') : new Blob([t]).size;
        }
        function x(t) {
          if (w) return c.from(t).toString('base64');
          const e = new Uint8Array(t);
          let n = '';
          for (let t = 0, r = e.length; t < r; t++) n += String.fromCharCode(e[t]);
          return btoa(n);
        }
        function S(t) {
          if (w) {
            const e = c.from(t, 'base64');
            return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
          }
          const e = atob(t),
            n = new Uint8Array(e.length);
          for (let t = 0; t < e.length; ++t) n.set([e.charCodeAt(t)], t);
          return n.buffer;
        }
        function N(t) {
          return i.D.join(t);
        }
        function E(t) {
          for (t = t.trim(); t.endsWith('/'); ) t = t.slice(0, t.length - 1);
          const e = t.split('/');
          return e[e.length - 1];
        }
        function A(t, e) {
          const n = { modelTopology: t.modelTopology, format: t.format, generatedBy: t.generatedBy, convertedBy: t.convertedBy, weightsManifest: e };
          return (
            null != t.signature && (n.signature = t.signature),
            null != t.userDefinedMetadata && (n.userDefinedMetadata = t.userDefinedMetadata),
            null != t.modelInitializer && (n.modelInitializer = t.modelInitializer),
            null != t.initializerSignature && (n.initializerSignature = t.initializerSignature),
            null != t.trainingConfig && (n.trainingConfig = t.trainingConfig),
            n
          );
        }
        function k(t, e, n) {
          const r = { modelTopology: t.modelTopology, format: t.format, generatedBy: t.generatedBy, convertedBy: t.convertedBy };
          if ((null != t.trainingConfig && (r.trainingConfig = t.trainingConfig), null != t.weightsManifest)) {
            if (!e) throw new Error('modelJSON has weightsManifest but weightSpecs is null');
            if (!n) throw new Error('modelJSON has weightsManifest but weightData is null');
            (r.weightSpecs = e), (r.weightData = n);
          }
          return (
            null != t.signature && (r.signature = t.signature),
            null != t.userDefinedMetadata && (r.userDefinedMetadata = t.userDefinedMetadata),
            null != t.modelInitializer && (r.modelInitializer = t.modelInitializer),
            null != t.initializerSignature && (r.initializerSignature = t.initializerSignature),
            r
          );
        }
        async function _(t, e) {
          let n, r;
          return null != t.weightsManifest && ([n, r] = await e(t.weightsManifest)), k(t, n, r);
        }
        function I(t) {
          if (t.modelTopology instanceof ArrayBuffer) throw new Error('Expected JSON model topology, received ArrayBuffer.');
          return {
            dateSaved: new Date(),
            modelTopologyType: 'JSON',
            modelTopologyBytes: null == t.modelTopology ? 0 : T(JSON.stringify(t.modelTopology)),
            weightSpecsBytes: null == t.weightSpecs ? 0 : T(JSON.stringify(t.weightSpecs)),
            weightDataBytes: null == t.weightData ? 0 : new i.D(t.weightData).byteLength,
          };
        }
        function O(t) {
          const e = [];
          for (const n of t) e.push(...n.weights);
          return e;
        }
      },
      76745: (t, e, n) => {
        'use strict';
        n.d(e, { Cd: () => w, ZT: () => b }), n(66652);
        var r = n(46574),
          s = n(45119),
          a = n(77084),
          o = n(56734),
          i = n(46669);
        const u = '/',
          l = 'tensorflowjs_models',
          c = 'info',
          p = 'model_topology',
          d = 'weight_specs',
          h = 'weight_data',
          f = 'model_metadata';
        function m(t) {
          return { info: [l, t, c].join(u), topology: [l, t, p].join(u), weightSpecs: [l, t, d].join(u), weightData: [l, t, h].join(u), modelMetadata: [l, t, f].join(u) };
        }
        function g(t) {
          for (const e of Object.values(t)) window.localStorage.removeItem(e);
        }
        function y(t) {
          const e = t.split(u);
          if (e.length < 3) throw new Error(`Invalid key format: ${t}`);
          return e.slice(1, e.length - 1).join(u);
        }
        class b {
          constructor(t) {
            if (!(0, r._K)().getBool('IS_BROWSER') || 'undefined' == typeof window || void 0 === window.localStorage)
              throw new Error('The current environment does not support local storage.');
            if (((this.LS = window.localStorage), null == t || !t)) throw new Error('For local storage, modelPath must not be null, undefined or empty.');
            (this.modelPath = t), (this.keys = m(this.modelPath));
          }
          async save(t) {
            if (t.modelTopology instanceof ArrayBuffer) throw new Error('BrowserLocalStorage.save() does not support saving model topology in binary formats yet.');
            {
              const e = JSON.stringify(t.modelTopology),
                n = JSON.stringify(t.weightSpecs),
                r = (0, a.oR)(t),
                s = o.D.join(t.weightData);
              try {
                this.LS.setItem(this.keys.info, JSON.stringify(r)),
                  this.LS.setItem(this.keys.topology, e),
                  this.LS.setItem(this.keys.weightSpecs, n),
                  this.LS.setItem(this.keys.weightData, (0, a.l3)(s));
                const o = {
                  format: t.format,
                  generatedBy: t.generatedBy,
                  convertedBy: t.convertedBy,
                  signature: null != t.signature ? t.signature : void 0,
                  userDefinedMetadata: null != t.userDefinedMetadata ? t.userDefinedMetadata : void 0,
                  modelInitializer: null != t.modelInitializer ? t.modelInitializer : void 0,
                  initializerSignature: null != t.initializerSignature ? t.initializerSignature : void 0,
                  trainingConfig: null != t.trainingConfig ? t.trainingConfig : void 0,
                };
                return this.LS.setItem(this.keys.modelMetadata, JSON.stringify(o)), { modelArtifactsInfo: r };
              } catch (t) {
                throw (
                  (g(this.keys),
                  new Error(
                    `Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`,
                  ))
                );
              }
            }
          }
          async load() {
            const t = JSON.parse(this.LS.getItem(this.keys.info));
            if (null == t) throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);
            if ('JSON' !== t.modelTopologyType) throw new Error('BrowserLocalStorage does not support loading non-JSON model topology yet.');
            const e = {},
              n = JSON.parse(this.LS.getItem(this.keys.topology));
            if (null == n) throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);
            e.modelTopology = n;
            const r = JSON.parse(this.LS.getItem(this.keys.weightSpecs));
            if (null == r) throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);
            e.weightSpecs = r;
            const s = this.LS.getItem(this.keys.modelMetadata);
            if (null != s) {
              const t = JSON.parse(s);
              (e.format = t.format),
                (e.generatedBy = t.generatedBy),
                (e.convertedBy = t.convertedBy),
                null != t.signature && (e.signature = t.signature),
                null != t.userDefinedMetadata && (e.userDefinedMetadata = t.userDefinedMetadata),
                null != t.modelInitializer && (e.modelInitializer = t.modelInitializer),
                null != t.initializerSignature && (e.initializerSignature = t.initializerSignature),
                null != t.trainingConfig && (e.trainingConfig = t.trainingConfig);
            }
            const o = this.LS.getItem(this.keys.weightData);
            if (null == o) throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);
            return (e.weightData = (0, a.jf)(o)), e;
          }
        }
        b.URL_SCHEME = 'localstorage://';
        const v = (t) => {
          return (0, r._K)().getBool('IS_BROWSER') && !Array.isArray(t) && t.startsWith(b.URL_SCHEME) ? ((e = t.slice(b.URL_SCHEME.length)), new b(e)) : null;
          var e;
        };
        i.bM.registerSaveRouter(v), i.bM.registerLoadRouter(v);
        class w {
          constructor() {
            (0, s.vA)((0, r._K)().getBool('IS_BROWSER'), () => 'Current environment is not a web browser'),
              (0, s.vA)('undefined' == typeof window || void 0 !== window.localStorage, () => 'Current browser does not appear to support localStorage'),
              (this.LS = window.localStorage);
          }
          async listModels() {
            const t = {},
              e = l + u,
              n = u + c;
            for (let r = 0; r < this.LS.length; ++r) {
              const s = this.LS.key(r);
              s.startsWith(e) && s.endsWith(n) && (t[y(s)] = JSON.parse(this.LS.getItem(s)));
            }
            return t;
          }
          async removeModel(t) {
            var e;
            const n = m((t = (e = t).startsWith(b.URL_SCHEME) ? e.slice(b.URL_SCHEME.length) : e));
            if (null == this.LS.getItem(n.info)) throw new Error(`Cannot find model at path '${t}'`);
            const r = JSON.parse(this.LS.getItem(n.info));
            return g(n), r;
          }
        }
      },
      66235: (t, e, n) => {
        'use strict';
        n.d(e, { D: () => l, Vo: () => d, az: () => c, dy: () => o, xk: () => p });
        var r = n(45119),
          s = n(46669);
        const a = '://';
        class o {
          constructor() {
            this.managers = {};
          }
          static getInstance() {
            return null == o.instance && (o.instance = new o()), o.instance;
          }
          static registerManager(t, e) {
            (0, r.vA)(null != t, () => 'scheme must not be undefined or null.'),
              t.endsWith(a) && (t = t.slice(0, t.indexOf(a))),
              (0, r.vA)(t.length > 0, () => 'scheme must not be an empty string.');
            const n = o.getInstance();
            (0, r.vA)(null == n.managers[t], () => `A model store manager is already registered for scheme '${t}'.`), (n.managers[t] = e);
          }
          static getManager(t) {
            const e = o.getInstance().managers[t];
            if (null == e) throw new Error(`Cannot find model manager for scheme '${t}'`);
            return e;
          }
          static getSchemes() {
            return Object.keys(o.getInstance().managers);
          }
        }
        function i(t) {
          if (-1 === t.indexOf(a)) throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${o.getSchemes().join(',')}`);
          return { scheme: t.split(a)[0], path: t.split(a)[1] };
        }
        async function u(t, e, n = !1) {
          (0, r.vA)(t !== e, () => `Old path and new path are the same: '${t}'`);
          const a = s.bM.getLoadHandlers(t);
          (0, r.vA)(a.length > 0, () => `Copying failed because no load handler is found for source URL ${t}.`),
            (0, r.vA)(a.length < 2, () => `Copying failed because more than one (${a.length}) load handlers for source URL ${t}.`);
          const u = a[0],
            l = s.bM.getSaveHandlers(e);
          (0, r.vA)(l.length > 0, () => `Copying failed because no save handler is found for destination URL ${e}.`),
            (0, r.vA)(l.length < 2, () => `Copying failed because more than one (${a.length}) save handlers for destination URL ${e}.`);
          const c = l[0],
            p = i(t).scheme,
            d = i(t).path,
            h = p === i(t).scheme,
            f = await u.load();
          n && h && (await o.getManager(p).removeModel(d));
          const m = await c.save(f);
          return n && !h && (await o.getManager(p).removeModel(d)), m.modelArtifactsInfo;
        }
        async function l() {
          const t = o.getSchemes(),
            e = {};
          for (const n of t) {
            const t = await o.getManager(n).listModels();
            for (const r in t) e[n + a + r] = t[r];
          }
          return e;
        }
        async function c(t) {
          const e = i(t);
          return o.getManager(e.scheme).removeModel(e.path);
        }
        async function p(t, e) {
          return u(t, e, !1);
        }
        async function d(t, e) {
          return u(t, e, !0);
        }
      },
      9250: (t, e, n) => {
        'use strict';
        n.d(e, { Ll: () => u, TM: () => c, aF: () => i, gF: () => l });
        var r = n(96763);
        class s {
          constructor(t) {
            this.modelArtifacts = t;
          }
          load() {
            return this.modelArtifacts;
          }
        }
        class a {
          constructor(t) {
            this.saveHandler = t;
          }
          save(t) {
            return this.saveHandler(t);
          }
        }
        class o {
          constructor(t) {
            t.load && (this.load = () => Promise.resolve(t.load())), t.save && (this.save = (e) => Promise.resolve(t.save(e)));
          }
        }
        function i(t, e, n, r) {
          return new o(u(...arguments));
        }
        function u(t, e, n, a) {
          return 1 === arguments.length
            ? null != t.modelTopology || null != t.weightSpecs
              ? new s(t)
              : (r.warn(
                  'Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.',
                ),
                new s({ modelTopology: t }))
            : (r.warn(
                'Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.',
              ),
              new s({ modelTopology: t, weightSpecs: e, weightData: n, trainingConfig: a }));
        }
        function l(t) {
          return new a(t);
        }
        function c(t) {
          return new a(t);
        }
      },
      16121: (t, e, n) => {
        'use strict';
        n.d(e, { U: () => s });
        var r = n(45119);
        function s(t, e, n, s) {
          !(function (t) {
            (0, r.vA)(null != t && Array.isArray(t) && t.length > 0, () => 'promises must be a none empty array');
          })(t),
            (function (t, e) {
              (0, r.vA)(t >= 0 && t <= 1, () => `Progress fraction must be in range [0, 1], but got startFraction ${t}`),
                (0, r.vA)(e >= 0 && e <= 1, () => `Progress fraction must be in range [0, 1], but got endFraction ${e}`),
                (0, r.vA)(e >= t, () => `startFraction must be no more than endFraction, but got startFraction ${t} and endFraction ${e}`);
            })((n = null == n ? 0 : n), (s = null == s ? 1 : s));
          let a = 0;
          return Promise.all(
            t.map(
              (r) => (
                r.then((r) => {
                  const o = n + (++a / t.length) * (s - n);
                  return e(o), r;
                }),
                r
              ),
            ),
          );
        }
      },
      46669: (t, e, n) => {
        'use strict';
        n.d(e, { C9: () => i, R4: () => a, Yd: () => s, bM: () => r, x3: () => o });
        class r {
          constructor() {
            (this.saveRouters = []), (this.loadRouters = []);
          }
          static getInstance() {
            return null == r.instance && (r.instance = new r()), r.instance;
          }
          static registerSaveRouter(t) {
            r.getInstance().saveRouters.push(t);
          }
          static registerLoadRouter(t) {
            r.getInstance().loadRouters.push(t);
          }
          static getSaveHandlers(t) {
            return r.getHandlers(t, 'save');
          }
          static getLoadHandlers(t, e) {
            return r.getHandlers(t, 'load', e);
          }
          static getHandlers(t, e, n) {
            const s = [];
            return (
              ('load' === e ? r.getInstance().loadRouters : r.getInstance().saveRouters).forEach((e) => {
                const r = e(t, n);
                null !== r && s.push(r);
              }),
              s
            );
          }
        }
        const s = (t) => r.registerSaveRouter(t),
          a = (t) => r.registerLoadRouter(t),
          o = (t) => r.getSaveHandlers(t),
          i = (t, e) => r.getLoadHandlers(t, e);
      },
      15685: (t, e, n) => {
        'use strict';
        n.d(e, { i: () => r });
        const r = { float32: 4, float16: 2, int32: 4, uint16: 2, uint8: 1, bool: 1, complex64: 8 };
      },
      66519: (t, e, n) => {
        'use strict';
        n.d(e, { Ic: () => p, SD: () => c, j$: () => d, jP: () => l });
        var r = n(46574),
          s = n(45119),
          a = n(56734),
          o = n(77084),
          i = n(16121),
          u = n(15685);
        async function l(t, e) {
          null == e && (e = {});
          const n = null == e.fetchFunc ? (0, r._K)().platform.fetch : e.fetchFunc,
            s = t.map((t) => n(t, e.requestInit, { isBinary: !0 })),
            a = (null == e.onProgress ? await Promise.all(s) : await (0, i.U)(s, e.onProgress, 0, 0.5)).map((t) => t.arrayBuffer());
          return null == e.onProgress ? await Promise.all(a) : await (0, i.U)(a, e.onProgress, 0.5, 1);
        }
        function c(t, e) {
          var n;
          const s = null == e.fetchFunc ? (0, r._K)().platform.fetch : e.fetchFunc;
          let a,
            o = 0;
          return (
            null === (n = e.onProgress) || void 0 === n || n.call(e, 0),
            new ReadableStream({
              pull: async (n) => {
                for (var r; o < t.length; ) {
                  if (!a) {
                    const n = (await s(t[o], e.requestInit, { isBinary: !0 })).body;
                    a = n.getReader();
                  }
                  const { done: i, value: u } = await a.read();
                  if (!i) return void n.enqueue(u);
                  o++, (a = void 0), null === (r = e.onProgress) || void 0 === r || r.call(e, o / t.length);
                }
                n.close();
              },
            })
          );
        }
        async function p(t, e = '', n, r) {
          return d((t) => l(t, { requestInit: r }))(t, e, n);
        }
        function d(t) {
          return async (e, n = '', r) => {
            const i = e.map(() => !1),
              l = {},
              c = null != r ? r.map(() => !1) : [],
              p = [];
            if (
              (e.forEach((t, e) => {
                let n = 0;
                t.weights.forEach((t) => {
                  const a = 'quantization' in t ? t.quantization.dtype : t.dtype,
                    o = u.i[a] * s.Ze(t.shape),
                    d = () => {
                      (i[e] = !0), null == l[e] && (l[e] = []), l[e].push({ manifestEntry: t, groupOffset: n, sizeBytes: o });
                    };
                  null != r
                    ? r.forEach((e, n) => {
                        e === t.name && (d(), (c[n] = !0));
                      })
                    : d(),
                    p.push(t.name),
                    (n += o);
                });
              }),
              !c.every((t) => t))
            ) {
              const t = r.filter((t, e) => !c[e]);
              throw new Error(`Could not find weights in manifest with names: ${t.join(', ')}. \nManifest JSON has weights with names: ${p.join(', ')}.`);
            }
            const d = i.reduce((t, e, n) => (e && t.push(n), t), []),
              h = [];
            d.forEach((t) => {
              e[t].paths.forEach((t) => {
                const e = n + (n.endsWith('/') ? '' : '/') + t;
                h.push(e);
              });
            });
            const f = await t(h),
              m = {};
            let g = 0;
            return (
              d.forEach((t) => {
                const n = e[t].paths.length,
                  r = new a.D(f.slice(g, g + n));
                l[t].forEach((t) => {
                  const e = r.slice(t.groupOffset, t.groupOffset + t.sizeBytes),
                    n = (0, o.CY)(e, [t.manifestEntry]);
                  for (const t in n) m[t] = n[t];
                }),
                  (g += n);
              }),
              m
            );
          };
        }
      },
      15441: (t, e, n) => {
        'use strict';
        n.d(e, {
          $dB: () => $,
          $jE: () => nn,
          $zE: () => M,
          A1h: () => B,
          A8B: () => je,
          BK4: () => bn,
          BLA: () => Xt,
          BRl: () => at,
          Blb: () => Ye,
          BoJ: () => We,
          BxF: () => pt,
          C8s: () => Ve,
          CQC: () => fe,
          Cg$: () => Ot,
          CwD: () => kt,
          D7i: () => Ae,
          Ddj: () => He,
          Dr: () => vn,
          DvZ: () => qe,
          E3$: () => St,
          EkD: () => i,
          ElG: () => ht,
          EwU: () => pn,
          FAs: () => on,
          FCQ: () => Ne,
          FSt: () => l,
          Fin: () => Ce,
          GZp: () => Qe,
          HNs: () => N,
          Ik2: () => x,
          J3C: () => Be,
          JiE: () => Re,
          Jp_: () => c,
          KXH: () => k,
          L6G: () => Ge,
          LB5: () => E,
          LDN: () => zt,
          LG0: () => Kt,
          LRy: () => ye,
          LWX: () => ae,
          LXA: () => Dt,
          M6A: () => Xe,
          MRQ: () => Y,
          Mn0: () => C,
          MnK: () => L,
          N4F: () => S,
          Ncv: () => pe,
          O4G: () => gt,
          OAQ: () => wt,
          ODT: () => ue,
          OMN: () => o,
          ORI: () => K,
          PH8: () => a,
          P_L: () => Ee,
          Pah: () => nt,
          PbM: () => rn,
          Q6t: () => ge,
          QDP: () => _,
          QKF: () => d,
          Qgm: () => et,
          R23: () => we,
          RMm: () => fn,
          RUm: () => Mt,
          RW8: () => Rt,
          RXX: () => Yt,
          SDM: () => ne,
          SQl: () => ct,
          T7M: () => Tn,
          TBb: () => un,
          TL8: () => Wt,
          TMz: () => V,
          TOR: () => _e,
          ToN: () => Zt,
          TyE: () => f,
          UcO: () => Je,
          VAI: () => Lt,
          VCH: () => b,
          Vvy: () => s,
          WRv: () => Ct,
          WT3: () => Qt,
          WuN: () => ze,
          X$8: () => G,
          X0$: () => Et,
          X4r: () => Oe,
          XQy: () => xe,
          XhZ: () => yt,
          XmO: () => J,
          YAb: () => tn,
          YVe: () => Pe,
          ZgB: () => dt,
          Zl4: () => re,
          _s9: () => st,
          aAr: () => wn,
          awo: () => yn,
          bCz: () => le,
          bP9: () => X,
          cHb: () => Vt,
          cS: () => v,
          dFH: () => Le,
          dLy: () => ln,
          dXR: () => dn,
          dv8: () => Tt,
          e0f: () => se,
          epO: () => h,
          fUj: () => ve,
          g5A: () => Gt,
          gC7: () => Z,
          gIW: () => xt,
          hVg: () => ke,
          hgw: () => Se,
          ho8: () => y,
          hql: () => Fe,
          huO: () => be,
          i5R: () => ft,
          iGz: () => P,
          iPs: () => Nt,
          iW0: () => en,
          iuW: () => an,
          jAQ: () => T,
          jM4: () => Pt,
          jOE: () => Te,
          jfg: () => F,
          jgd: () => Ke,
          jj_: () => z,
          jxD: () => H,
          kdj: () => de,
          l0G: () => te,
          l6P: () => $e,
          lLS: () => bt,
          lNG: () => qt,
          ljI: () => r,
          lxb: () => g,
          lzr: () => vt,
          mH5: () => me,
          mIA: () => At,
          mM$: () => ie,
          mnI: () => _t,
          mxL: () => mt,
          nVu: () => q,
          nY8: () => j,
          nZd: () => $t,
          oFs: () => sn,
          oJ2: () => he,
          ox3: () => ot,
          p2J: () => D,
          pJc: () => Ie,
          pPe: () => hn,
          p_m: () => p,
          pk0: () => Q,
          pnw: () => gn,
          pr3: () => O,
          pyJ: () => ce,
          rFG: () => Ue,
          rFm: () => R,
          rGP: () => lt,
          rsH: () => rt,
          sDr: () => tt,
          t3d: () => jt,
          tG8: () => It,
          tGH: () => W,
          u$b: () => De,
          u8Z: () => u,
          uWl: () => Me,
          urI: () => oe,
          vI1: () => Ze,
          vaV: () => I,
          vj7: () => A,
          wNW: () => U,
          wwC: () => w,
          wx0: () => cn,
          x7F: () => Ht,
          xJ3: () => mn,
          xu7: () => Jt,
          yPW: () => Bt,
          ySp: () => Ut,
          ybN: () => it,
          ybj: () => ut,
          ylV: () => ee,
          zP9: () => m,
          zfU: () => Ft,
        });
        const r = 'Abs',
          s = 'Acos',
          a = 'Acosh',
          o = 'Add',
          i = 'AddN',
          u = 'All',
          l = 'Any',
          c = 'ArgMax',
          p = 'ArgMin',
          d = 'Asin',
          h = 'Asinh',
          f = 'Atan',
          m = 'Atanh',
          g = 'Atan2',
          y = 'AvgPool',
          b = 'AvgPoolGrad',
          v = 'AvgPool3D',
          w = 'AvgPool3DGrad',
          T = 'BatchMatMul',
          x = 'BatchToSpaceND',
          S = 'Bincount',
          N = 'BitwiseAnd',
          E = 'BroadcastTo',
          A = 'BroadcastArgs',
          k = 'Cast',
          _ = 'Ceil',
          I = 'ClipByValue',
          O = 'Complex',
          M = 'ComplexAbs',
          $ = 'Concat',
          D = 'Conv2D',
          R = 'Conv2DBackpropFilter',
          F = 'Conv2DBackpropInput',
          B = 'Conv3D',
          P = 'Conv3DBackpropFilterV2',
          Z = 'Conv3DBackpropInputV2',
          C = 'Cos',
          L = 'Cosh',
          z = 'Cumprod',
          j = 'Cumsum',
          Y = 'CropAndResize',
          U = 'DenseBincount',
          V = 'DepthToSpace',
          W = 'DepthwiseConv2dNative',
          G = 'DepthwiseConv2dNativeBackpropFilter',
          q = 'DepthwiseConv2dNativeBackpropInput',
          K = 'Diag',
          H = 'Dilation2D',
          X = 'Dilation2DBackpropInput',
          Q = 'Dilation2DBackpropFilter',
          J = 'Draw',
          tt = 'RealDiv',
          et = 'Einsum',
          nt = 'Elu',
          rt = 'EluGrad',
          st = 'Erf',
          at = 'Equal',
          ot = 'Exp',
          it = 'ExpandDims',
          ut = 'Expm1',
          lt = 'FFT',
          ct = 'Fill',
          pt = 'FlipLeftRight',
          dt = 'Floor',
          ht = 'FloorDiv',
          ft = 'FusedBatchNorm',
          mt = 'GatherV2',
          gt = 'GatherNd',
          yt = 'Greater',
          bt = 'GreaterEqual',
          vt = 'Identity',
          wt = 'IFFT',
          Tt = 'Imag',
          xt = 'IsFinite',
          St = 'IsInf',
          Nt = 'IsNan',
          Et = 'LeakyRelu',
          At = 'Less',
          kt = 'LessEqual',
          _t = 'LinSpace',
          It = 'Log',
          Ot = 'Log1p',
          Mt = 'LogicalAnd',
          $t = 'LogicalNot',
          Dt = 'LogicalOr',
          Rt = 'LogicalXor',
          Ft = 'LogSoftmax',
          Bt = 'LowerBound',
          Pt = 'LRN',
          Zt = 'LRNGrad',
          Ct = 'MatrixBandPart',
          Lt = 'Max',
          zt = 'Maximum',
          jt = 'MaxPool',
          Yt = 'MaxPoolGrad',
          Ut = 'MaxPool3D',
          Vt = 'MaxPool3DGrad',
          Wt = 'MaxPoolWithArgmax',
          Gt = 'Mean',
          qt = 'Min',
          Kt = 'Minimum',
          Ht = 'MirrorPad',
          Xt = 'Mod',
          Qt = 'Multinomial',
          Jt = 'Multiply',
          te = 'Neg',
          ee = 'NotEqual',
          ne = 'NonMaxSuppressionV3',
          re = 'NonMaxSuppressionV4',
          se = 'NonMaxSuppressionV5',
          ae = 'OnesLike',
          oe = 'OneHot',
          ie = 'Pack',
          ue = 'PadV2',
          le = 'Pool',
          ce = 'Pow',
          pe = 'Prelu',
          de = 'Prod',
          he = 'RaggedGather',
          fe = 'RaggedRange',
          me = 'RaggedTensorToTensor',
          ge = 'Range',
          ye = 'Real',
          be = 'Reciprocal',
          ve = 'Relu',
          we = 'Reshape',
          Te = 'ResizeNearestNeighbor',
          xe = 'ResizeNearestNeighborGrad',
          Se = 'ResizeBilinear',
          Ne = 'ResizeBilinearGrad',
          Ee = 'Relu6',
          Ae = 'Reverse',
          ke = 'Round',
          _e = 'Rsqrt',
          Ie = 'ScatterNd',
          Oe = 'TensorScatterUpdate',
          Me = 'SearchSorted',
          $e = 'Select',
          De = 'Selu',
          Re = 'Slice',
          Fe = 'Sin',
          Be = 'Sinh',
          Pe = 'Sign',
          Ze = 'Sigmoid',
          Ce = 'Softplus',
          Le = 'Sqrt',
          ze = 'Sum',
          je = 'SpaceToBatchND',
          Ye = 'SplitV',
          Ue = 'Softmax',
          Ve = 'SparseFillEmptyRows',
          We = 'SparseReshape',
          Ge = 'SparseSegmentMean',
          qe = 'SparseSegmentSum',
          Ke = 'SparseToDense',
          He = 'SquaredDifference',
          Xe = 'Square',
          Qe = 'StaticRegexReplace',
          Je = 'StridedSlice',
          tn = 'StringNGrams',
          en = 'StringSplit',
          nn = 'StringToHashBucketFast',
          rn = 'Sub',
          sn = 'Tan',
          an = 'Tanh',
          on = 'Tile',
          un = 'TopK',
          ln = 'Transform',
          cn = 'Transpose',
          pn = 'Unique',
          dn = 'Unpack',
          hn = 'UnsortedSegmentSum',
          fn = 'UpperBound',
          mn = 'ZerosLike',
          gn = 'Step',
          yn = 'FromPixels',
          bn = 'RotateWithOffset',
          vn = '_FusedMatMul',
          wn = 'FusedConv2D',
          Tn = 'FusedDepthwiseConv2D';
      },
      37074: (t, e, n) => {
        'use strict';
        n.d(e, { Cf: () => m, Op: () => c, _5: () => u, iP: () => h, kr: () => d, rY: () => f, tA: () => p, vQ: () => l });
        var r = n(46574),
          s = n(41743),
          a = n(73673);
        const o = (0, s.m)('kernelRegistry', () => new Map()),
          i = (0, s.m)('gradRegistry', () => new Map());
        function u(t, e) {
          const n = g(t, e);
          return o.get(n);
        }
        function l(t) {
          return i.get(t);
        }
        function c(t) {
          const e = o.entries(),
            n = [];
          for (;;) {
            const { done: r, value: s } = e.next();
            if (r) break;
            const [a, o] = s,
              [i] = a.split('_');
            i === t && n.push(o);
          }
          return n;
        }
        function p(t) {
          const { kernelName: e, backendName: n } = t,
            r = g(e, n);
          o.has(r) && a.i(`The kernel '${e}' for backend '${n}' is already registered`), o.set(r, t);
        }
        function d(t) {
          const { kernelName: e } = t;
          i.has(e) && (0, r._K)().getBool('DEBUG') && a.i(`Overriding the gradient for '${e}'`), i.set(e, t);
        }
        function h(t, e) {
          const n = g(t, e);
          if (!o.has(n)) throw new Error(`The kernel '${t}' for backend '${e}' is not registered`);
          o.delete(n);
        }
        function f(t) {
          if (!i.has(t)) throw new Error(`The gradient '${t}' for backend is not registered`);
          i.delete(t);
        }
        function m(t, e) {
          c(t).forEach((t) => {
            p(Object.assign({}, t, { backendName: e }));
          });
        }
        function g(t, e) {
          return `${e}_${t}`;
        }
      },
      73673: (t, e, n) => {
        'use strict';
        n.d(e, { R: () => o, i: () => a });
        var r = n(46574),
          s = n(96763);
        function a(...t) {
          (0, r._K)().getBool('IS_TEST') || (0, r._K)().getBool('PROD') || s.warn(...t);
        }
        function o(...t) {
          (0, r._K)().getBool('IS_TEST') || (0, r._K)().getBool('PROD') || s.log(...t);
        }
      },
      49917: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { confusionMatrix: () => r.g });
        var r = n(91086);
      },
      4888: (t, e, n) => {
        'use strict';
        n.d(e, { t: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          abs_: function (t) {
            const e = (0, a.YT)(t, 'x', 'abs');
            if ('complex64' === e.dtype) {
              const t = { x: e };
              return r.T2.runKernel(s.$zE, t);
            }
            {
              const t = { x: e };
              return r.T2.runKernel(s.ljI, t);
            }
          },
        });
      },
      12804: (t, e, n) => {
        'use strict';
        n.d(e, { H: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          acos_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'acos') };
            return r.T2.runKernel(s.Vvy, e);
          },
        });
      },
      37558: (t, e, n) => {
        'use strict';
        n.d(e, { F: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          acosh_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'acosh') };
            return r.T2.runKernel(s.PH8, e);
          },
        });
      },
      37523: (t, e, n) => {
        'use strict';
        n.d(e, { W: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189);
        const i = (0, n(70929).op)({
          add_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'add'),
              i = (0, o.YT)(e, 'b', 'add');
            [n, i] = (0, a.makeTypesMatch)(n, i);
            const u = { a: n, b: i };
            return r.T2.runKernel(s.OMN, u);
          },
        });
      },
      16054: (t, e, n) => {
        'use strict';
        n.d(e, { Q: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          addN_: function (t) {
            o.vA(Array.isArray(t), () => 'The argument passed to tf.addN() must be a list of tensors'),
              o.vA(t.length >= 1, () => `Must pass at least one tensor to tf.addN(), but got ${t.length}`);
            const e = t.map((t, e) => (0, a.YT)(t, `tensors${e}`, 'addN')),
              n = e[0];
            e.forEach((t) => {
              if (t.dtype !== n.dtype) throw new Error('All tensors passed to tf.addN() must have the same dtype');
            }),
              e.forEach((t) => {
                if (!o.r1(t.shape, n.shape)) throw new Error('All tensors passed to tf.addN() must have the same shape');
              });
            const i = e;
            return r.T2.runKernel(s.EkD, i);
          },
        });
      },
      12307: (t, e, n) => {
        'use strict';
        n.d(e, { Q: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          all_: function (t, e = null, n = !1) {
            const o = { x: (0, a.YT)(t, 'x', 'all', 'bool') },
              i = { axis: e, keepDims: n };
            return r.T2.runKernel(s.u8Z, o, i);
          },
        });
      },
      89326: (t, e, n) => {
        'use strict';
        n.d(e, { b: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          any_: function (t, e = null, n = !1) {
            const o = { x: (0, a.YT)(t, 'x', 'any', 'bool') },
              i = { axis: e, keepDims: n };
            return r.T2.runKernel(s.FSt, o, i);
          },
        });
      },
      10897: (t, e, n) => {
        'use strict';
        n.d(e, { F: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          argMax_: function (t, e = 0) {
            const n = { x: (0, a.YT)(t, 'x', 'argMax') },
              o = { axis: e };
            return r.T2.runKernel(s.Jp_, n, o);
          },
        });
      },
      54339: (t, e, n) => {
        'use strict';
        n.d(e, { X: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          argMin_: function (t, e = 0) {
            const n = { x: (0, a.YT)(t, 'x', 'argMin') },
              o = { axis: e };
            return r.T2.runKernel(s.p_m, n, o);
          },
        });
      },
      81613: (t, e, n) => {
        'use strict';
        function r(t, e, n, r = !0) {
          let s = [];
          if (r) (s = s.concat(e.slice(0))), s.push(t[0] / n), (s = s.concat(t.slice(1)));
          else {
            s = s.concat(t[0]);
            const n = e.length;
            for (let r = 0; r < n; ++r) s = s.concat([t[r + 1] / e[r], e[r]]);
            s = s.concat(t.slice(n + 1));
          }
          return s;
        }
        function s(t, e, n = !0) {
          const r = [];
          if (n) {
            r.push(e);
            for (let n = e + 1; n < t; ++n) n <= 2 * e ? (r.push(n), r.push(n - (e + 1))) : r.push(n);
          } else {
            const n = [],
              s = [];
            for (let r = 1; r < t; ++r) r >= 2 * e + 1 || r % 2 == 1 ? s.push(r) : n.push(r);
            r.push(...n), r.push(0), r.push(...s);
          }
          return r;
        }
        function a(t, e, n, r = !0) {
          const s = [];
          r ? s.push(t[0] / n) : s.push(t[0] * n);
          for (let n = 1; n < t.length; ++n) n <= e.length ? (r ? s.push(e[n - 1] * t[n]) : s.push(t[n] / e[n - 1])) : s.push(t[n]);
          return s;
        }
        function o(t, e) {
          const n = [0];
          for (let r = 0; r < e; ++r) n.push(t[r][0]);
          return n;
        }
        function i(t, e, n) {
          const r = t.slice(0, 1);
          for (let s = 0; s < n; ++s) r.push(t[s + 1] - e[s][0] - e[s][1]);
          return r;
        }
        n.d(e, { AO: () => i, VN: () => a, Ym: () => o, b$: () => s, dE: () => r });
      },
      66841: (t, e, n) => {
        'use strict';
        n.d(e, { q: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          asin_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'asin') };
            return r.T2.runKernel(s.QKF, e);
          },
        });
      },
      50269: (t, e, n) => {
        'use strict';
        n.d(e, { y: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          asinh_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'asinh') };
            return r.T2.runKernel(s.epO, e);
          },
        });
      },
      29580: (t, e, n) => {
        'use strict';
        n.d(e, { r: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          atan_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'atan') };
            return r.T2.runKernel(s.TyE, e);
          },
        });
      },
      21404: (t, e, n) => {
        'use strict';
        n.d(e, { F: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189);
        const i = (0, n(70929).op)({
          atan2_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'atan2'),
              i = (0, o.YT)(e, 'b', 'atan2');
            [n, i] = (0, a.makeTypesMatch)(n, i);
            const u = { a: n, b: i };
            return r.T2.runKernel(s.lxb, u);
          },
        });
      },
      63774: (t, e, n) => {
        'use strict';
        n.d(e, { r: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          atanh_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'atanh') };
            return r.T2.runKernel(s.zP9, e);
          },
        });
      },
      53909: (t, e, n) => {
        'use strict';
        n.d(e, { $: () => p });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(29809),
          u = n(47195),
          l = n(70929),
          c = n(62302);
        const p = (0, l.op)({
          avgPool_: function (t, e, n, l, p) {
            const d = (0, a.YT)(t, 'x', 'avgPool', 'float32');
            o.vA(u.G0(n, 1), () => `Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`);
            let h = d,
              f = !1;
            3 === d.rank && ((f = !0), (h = (0, c.t)(d, [1, d.shape[0], d.shape[1], d.shape[2]]))),
              o.vA(4 === h.rank, () => `Error in avgPool: x must be rank 4 but got rank ${h.rank}.`),
              u.s_('avgPool', l, p);
            const m = { x: h },
              g = { filterSize: e, strides: n, pad: l, dimRoundingMode: p };
            let y = r.T2.runKernel(s.ho8, m, g);
            return (y = (0, i.w)(y, d.dtype)), f ? (0, c.t)(y, [y.shape[1], y.shape[2], y.shape[3]]) : y;
          },
        });
      },
      53855: (t, e, n) => {
        'use strict';
        n.d(e, { s: () => p });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(29809),
          u = n(47195),
          l = n(70929),
          c = n(62302);
        const p = (0, l.op)({
          avgPool3d_: function (t, e, n, l, p, d = 'NDHWC') {
            const h = (0, a.YT)(t, 'x', 'avgPool3d', 'float32');
            let f = h,
              m = !1;
            4 === h.rank && ((m = !0), (f = (0, c.t)(h, [1, h.shape[0], h.shape[1], h.shape[2], h.shape[3]]))),
              o.vA(5 === f.rank, () => `Error in avgPool3d: x must be rank 5 but got rank ${f.rank}.`),
              o.vA('NDHWC' === d, () => `Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${d}`),
              o.vA(('number' == typeof n && n > 0) || (Array.isArray(n) && n[0] > 0 && n[1] > 0 && n[2] > 0), () => `Error in avgPool3d: Stride must be > 0, but got '${n}'`),
              (0, u.s_)('avgPool3d', l, p);
            const g = { x: f },
              y = { filterSize: e, strides: n, pad: l, dimRoundingMode: p, dataFormat: d };
            let b = r.T2.runKernel(s.cS, g, y);
            return (b = (0, i.w)(b, f.dtype)), m ? (0, c.t)(b, [b.shape[1], b.shape[2], b.shape[3], b.shape[4]]) : b;
          },
        });
      },
      21078: (t, e, n) => {
        'use strict';
        n.d(e, { Em: () => l, SM: () => i, WC: () => u, WH: () => s, aF: () => a, fK: () => p, gx: () => c, lb: () => o });
        var r = n(45119);
        function s(t, e) {
          for (let n = 0; n < t.length; ++n) if (t[t.length - n - 1] !== e - 1 - n) return !1;
          return !0;
        }
        function a(t, e, n) {
          const r = t.length + e.length,
            s = [];
          let a = 0,
            o = 0;
          for (let i = 0; i < r; i++) -1 === n.indexOf(i) ? s.push(t[a++]) : s.push(e[o++]);
          return s;
        }
        function o(t, e) {
          const n = [],
            r = t.length;
          for (let s = 0; s < r; s++) -1 === e.indexOf(s) && n.push(t[s]);
          return [n, e.map((e) => t[e])];
        }
        function i(t, e) {
          return a(
            t,
            e.map((t) => 1),
            e,
          );
        }
        function u(t, e, n) {
          r.vA(s(e, n), () => `${t} supports only inner-most axes for now. Got axes ${e} and rank-${n} input.`);
        }
        function l(t, e) {
          if (s(t, e)) return null;
          const n = [];
          for (let r = 0; r < e; ++r) -1 === t.indexOf(r) && n.push(r);
          return t.forEach((t) => n.push(t)), n;
        }
        function c(t) {
          return t
            .map((t, e) => [e, t])
            .sort((t, e) => t[1] - e[1])
            .map((t) => t[0]);
        }
        function p(t, e) {
          const n = [];
          for (let r = e - t; r < e; ++r) n.push(r);
          return n;
        }
      },
      69906: (t, e, n) => {
        'use strict';
        n.d(e, { l: () => d });
        var r = n(28189),
          s = n(37523),
          a = n(25030),
          o = n(65703),
          i = n(9258),
          u = n(70929),
          l = n(28968),
          c = n(17986),
          p = n(57311);
        const d = (0, u.op)({
          basicLSTMCell_: function (t, e, n, u, d, h) {
            const f = (0, r.YT)(t, 'forgetBias', 'basicLSTMCell'),
              m = (0, r.YT)(e, 'lstmKernel', 'basicLSTMCell'),
              g = (0, r.YT)(n, 'lstmBias', 'basicLSTMCell'),
              y = (0, r.YT)(u, 'data', 'basicLSTMCell'),
              b = (0, r.YT)(d, 'c', 'basicLSTMCell'),
              v = (0, r.YT)(h, 'h', 'basicLSTMCell'),
              w = (0, a.x)([y, v], 1),
              T = (0, o.N)(w, m),
              x = (0, s.W)(T, g),
              S = x.shape[0],
              N = x.shape[1] / 4,
              E = [S, N],
              A = (0, c.d)(x, [0, 0], E),
              k = (0, c.d)(x, [0, N], E),
              _ = (0, c.d)(x, [0, 2 * N], E),
              I = (0, c.d)(x, [0, 3 * N], E),
              O = (0, s.W)((0, i.l)((0, l.r)(A), (0, p.y)(k)), (0, i.l)(b, (0, l.r)((0, s.W)(f, _))));
            return [O, (0, i.l)((0, p.y)(O), (0, l.r)(I))];
          },
        });
      },
      69772: (t, e, n) => {
        'use strict';
        n.d(e, { G: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          batchToSpaceND_: function (t, e, n) {
            const i = (0, a.YT)(t, 'x', 'batchToSpaceND'),
              u = e.reduce((t, e) => t * e);
            o.vA(i.rank >= 1 + e.length, () => `input rank is ${i.rank} but should be > than blockShape.length ${e.length}`),
              o.vA(n.length === e.length, () => `crops.length is ${n.length} but should be equal to blockShape.length  ${e.length}`),
              o.vA(i.shape[0] % u == 0, () => `input tensor batch is ${i.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(' * ')} === ${u}`);
            const l = { x: i },
              c = { blockShape: e, crops: n };
            return r.T2.runKernel(s.Ik2, l, c);
          },
        });
      },
      7170: (t, e, n) => {
        'use strict';
        n.d(e, { $: () => c });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(69465),
          u = n(70929),
          l = n(62302);
        const c = (0, u.op)({
          batchNorm_: function (t, e, n, u, c, p) {
            null == p && (p = 0.001);
            const d = (0, a.YT)(t, 'x', 'batchNorm'),
              h = (0, a.YT)(e, 'mean', 'batchNorm'),
              f = (0, a.YT)(n, 'variance', 'batchNorm');
            let m, g;
            null != c && (m = (0, a.YT)(c, 'scale', 'batchNorm')),
              null != u && (g = (0, a.YT)(u, 'offset', 'batchNorm')),
              o.vA(h.rank === f.rank, () => 'Batch normalization gradient requires mean and variance to have equal ranks.'),
              o.vA(null == g || h.rank === g.rank, () => 'Batch normalization gradient requires mean and offset to have equal ranks.'),
              o.vA(null == m || h.rank === m.rank, () => 'Batch normalization gradient requires mean and scale to have equal ranks.');
            const y = { x: (0, i.r)(d), scale: m, offset: g, mean: h, variance: f },
              b = { varianceEpsilon: p },
              v = r.T2.runKernel(s.i5R, y, b);
            return (0, l.t)(v, d.shape);
          },
        });
      },
      13620: (t, e, n) => {
        'use strict';
        n.d(e, { B: () => o });
        var r = n(28189),
          s = n(45119),
          a = n(7170);
        const o = (0, n(70929).op)({
          batchNorm2d_: function (t, e, n, o, i, u) {
            const l = (0, r.YT)(t, 'x', 'batchNorm'),
              c = (0, r.YT)(e, 'mean', 'batchNorm'),
              p = (0, r.YT)(n, 'variance', 'batchNorm');
            let d, h;
            return (
              null != i && (d = (0, r.YT)(i, 'scale', 'batchNorm')),
              null != o && (h = (0, r.YT)(o, 'offset', 'batchNorm')),
              s.vA(2 === l.rank, () => `Error in batchNorm2D: x must be rank 2 but got rank ${l.rank}.`),
              s.vA(2 === c.rank || 1 === c.rank, () => `Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${c.rank}.`),
              s.vA(2 === p.rank || 1 === p.rank, () => `Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${p.rank}.`),
              null != d && s.vA(2 === d.rank || 1 === d.rank, () => `Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${d.rank}.`),
              null != h && s.vA(2 === h.rank || 1 === h.rank, () => `Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${h.rank}.`),
              (0, a.$)(l, c, p, h, d, u)
            );
          },
        });
      },
      76241: (t, e, n) => {
        'use strict';
        n.d(e, { k: () => o });
        var r = n(28189),
          s = n(45119),
          a = n(7170);
        const o = (0, n(70929).op)({
          batchNorm3d_: function (t, e, n, o, i, u) {
            const l = (0, r.YT)(t, 'x', 'batchNorm'),
              c = (0, r.YT)(e, 'mean', 'batchNorm'),
              p = (0, r.YT)(n, 'variance', 'batchNorm');
            let d, h;
            return (
              null != i && (d = (0, r.YT)(i, 'scale', 'batchNorm')),
              null != o && (h = (0, r.YT)(o, 'offset', 'batchNorm')),
              s.vA(3 === l.rank, () => `Error in batchNorm3D: x must be rank 3 but got rank ${l.rank}.`),
              s.vA(3 === c.rank || 1 === c.rank, () => `Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${c.rank}.`),
              s.vA(3 === p.rank || 1 === p.rank, () => `Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${p.rank}.`),
              null != d && s.vA(3 === d.rank || 1 === d.rank, () => `Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${d.rank}.`),
              null != h && s.vA(3 === h.rank || 1 === h.rank, () => `Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${h.rank}.`),
              (0, a.$)(l, c, p, h, d, u)
            );
          },
        });
      },
      27874: (t, e, n) => {
        'use strict';
        n.d(e, { T: () => o });
        var r = n(28189),
          s = n(45119),
          a = n(7170);
        const o = (0, n(70929).op)({
          batchNorm4d_: function (t, e, n, o, i, u) {
            const l = (0, r.YT)(t, 'x', 'batchNorm'),
              c = (0, r.YT)(e, 'mean', 'batchNorm'),
              p = (0, r.YT)(n, 'variance', 'batchNorm');
            let d, h;
            return (
              null != i && (d = (0, r.YT)(i, 'scale', 'batchNorm')),
              null != o && (h = (0, r.YT)(o, 'offset', 'batchNorm')),
              s.vA(4 === l.rank, () => `Error in batchNorm4D: x must be rank 4 but got rank ${l.rank}.`),
              s.vA(4 === c.rank || 1 === c.rank, () => `Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${c.rank}.`),
              s.vA(4 === p.rank || 1 === p.rank, () => `Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${p.rank}.`),
              null != d && s.vA(4 === d.rank || 1 === d.rank, () => `Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${d.rank}.`),
              null != h && s.vA(4 === h.rank || 1 === h.rank, () => `Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${h.rank}.`),
              (0, a.$)(l, c, p, h, d, u)
            );
          },
        });
      },
      69465: (t, e, n) => {
        'use strict';
        n.d(e, { r: () => s });
        var r = n(62302);
        function s(t) {
          let e;
          return (
            (e =
              0 === t.rank || 1 === t.rank
                ? (0, r.t)(t, [1, 1, 1, t.size])
                : 2 === t.rank
                  ? (0, r.t)(t, [1, 1, t.shape[0], t.shape[1]])
                  : 3 === t.rank
                    ? (0, r.t)(t, [1, t.shape[0], t.shape[1], t.shape[2]])
                    : t),
            e
          );
        }
      },
      40758: (t, e, n) => {
        'use strict';
        n.d(e, { H: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          bincount_: function (t, e, n) {
            const i = (0, a.YT)(t, 'x', 'bincount'),
              u = (0, a.YT)(e, 'weights', 'bincount');
            o.vA('int32' === i.dtype, () => `Error in bincount: input dtype must be int32, but got ${i.dtype}`),
              o.vA(n >= 0, () => `size must be non-negative, but got ${n}.`),
              o.vA(
                u.size === i.size || 0 === u.size,
                () => `Error in bincount: weights must have the same size as input or0-length, but got input shape: ${i.shape}, weights shape: ${u.shape}.`,
              );
            const l = { x: i, weights: u },
              c = { size: n };
            return r.T2.runKernel(s.N4F, l, c);
          },
        });
      },
      75569: (t, e, n) => {
        'use strict';
        n.d(e, { v: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          bitwiseAnd_: function (t, e) {
            const n = (0, a.YT)(t, 'x', 'bitwiseAnd'),
              i = (0, a.YT)(e, 'y', 'bitwiseAnd');
            if (!(0, o.r1)(n.shape, i.shape)) throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${i.shape}`);
            if ('int32' !== n.dtype || 'int32' !== i.dtype)
              throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${i.dtype}`);
            const u = { a: n, b: i };
            return r.T2.runKernel(s.HNs, u);
          },
        });
      },
      33007: (t, e, n) => {
        'use strict';
        n.d(e, { f: () => l });
        var r = n(28189),
          s = n(45119),
          a = n(48229),
          o = n(62302),
          i = n(5932),
          u = n(44271);
        const l = async function (t, e, n) {
          const l = (0, r.YT)(t, 'tensor', 'boolMask'),
            c = (0, r.YT)(e, 'mask', 'boolMask', 'bool'),
            p = null == n ? 0 : n,
            d = c.rank,
            h = l.shape;
          s.vA(d > 0, () => 'mask cannot be scalar'), s.O3(h.slice(p, p + d), c.shape, "mask's shape must match the first K dimensions of tensor's shape,");
          let f = 1;
          for (let t = p; t < p + d; t++) f *= h[t];
          const m = h.slice(0, p).concat([f], h.slice(p + d)),
            g = (0, o.t)(l, m),
            y = (0, o.t)(c, [-1]),
            b = await (0, u.Y)(y),
            v = (0, i.r)(b, [1]),
            w = (0, a.k)(g, v, p);
          return t !== l && l.dispose(), e !== c && c.dispose(), v.dispose(), g.dispose(), y.dispose(), b.dispose(), w;
        };
      },
      17367: (t, e, n) => {
        'use strict';
        n.d(e, { R: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          broadcastArgs_: function (t, e) {
            const n = (0, a.YT)(t, 's0', 'broadcastArgs', 'int32'),
              o = (0, a.YT)(e, 's1', 'broadcastArgs', 'int32');
            if (1 !== n.rank) throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);
            if (1 !== o.rank) throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${o.rank}`);
            const i = { s0: n, s1: o };
            return r.T2.runKernel(s.vj7, i);
          },
        });
      },
      63567: (t, e, n) => {
        'use strict';
        n.d(e, { h: () => c });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(70125),
          u = n(70929),
          l = n(62302);
        const c = (0, u.op)({
          broadcastTo_: function (t, e) {
            let n = (0, a.YT)(t, 'broadcastTo', 'x');
            const u = n.shape;
            if (((0, o.SA)(e), e.length < n.rank)) throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${n.rank}.`);
            if (e.length > n.rank) {
              const t = n.shape.slice();
              for (; t.length < e.length; ) t.unshift(1);
              n = (0, l.t)(n, t);
            }
            const c = n.shape,
              p = Array.from(e);
            for (let t = e.length - 1; t >= 0; t--)
              if (c[t] === e[t]) p[t] = 1;
              else if (1 !== n.shape[t]) throw new Error(`broadcastTo(): [${u}] cannot be broadcast to [${e}].`);
            if (0 === p.map((t, e) => (t > 1 ? e : -1)).filter((t) => t >= 0).length) return (0, i.o)(n);
            const d = { x: n },
              h = { reps: p };
            return r.T2.runKernel(s.FAs, d, h);
          },
        });
      },
      62198: (t, e, n) => {
        'use strict';
        function r(t, e) {
          const n = t.length,
            r = [];
          for (let s = 0; s < n; s++) {
            const a = n - 1 - s,
              o = t[a] || 1;
            (e[e.length - 1 - s] || 1) > 1 && 1 === o && r.unshift(a);
          }
          return r;
        }
        function s(t, e) {
          const n = [];
          for (let r = 0; r < e.length; r++) {
            const s = t[t.length - r - 1],
              a = e.length - r - 1,
              o = e[a];
            (null == s || (1 === s && o > 1)) && n.unshift(a);
          }
          return n;
        }
        function a(t, e) {
          const n = Math.max(t.length, e.length),
            r = new Array(n);
          for (let s = 0; s < n; s++) {
            let a = t[t.length - s - 1];
            null == a && (a = 1);
            let o = e[e.length - s - 1];
            if ((null == o && (o = 1), 1 === a)) r[n - s - 1] = o;
            else if (1 === o) r[n - s - 1] = a;
            else {
              if (a !== o) throw Error(`Operands could not be broadcast together with shapes ${t} and ${e}.`);
              r[n - s - 1] = a;
            }
          }
          return r;
        }
        n.r(e), n.d(e, { assertAndGetBroadcastShape: () => a, getBroadcastDims: () => r, getReductionAxes: () => s });
      },
      27836: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { draw: () => v, fromPixels: () => w, fromPixelsAsync: () => g, toPixels: () => b });
        var r = n(67897),
          s = n(46574),
          a = n(15441),
          o = n(37074),
          i = n(53910),
          u = n(28189),
          l = n(29809),
          c = n(70929),
          p = n(42768),
          d = n(96763);
        let h,
          f = !1;
        function m(t, e = 3) {
          if (e > 4) throw new Error('Cannot construct Tensor with more than 4 channels from pixels.');
          if (null == t) throw new Error('pixels passed to tf.browser.fromPixels() can not be null');
          let n = !1,
            s = !1,
            i = !1,
            u = !1,
            l = !1,
            c = !1;
          if (t.data instanceof Uint8Array) n = !0;
          else if ('undefined' != typeof ImageData && t instanceof ImageData) s = !0;
          else if ('undefined' != typeof HTMLVideoElement && t instanceof HTMLVideoElement) i = !0;
          else if ('undefined' != typeof HTMLImageElement && t instanceof HTMLImageElement) u = !0;
          else if (null != t.getContext) l = !0;
          else {
            if (!('undefined' != typeof ImageBitmap && t instanceof ImageBitmap))
              throw new Error(
                `pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${t.constructor.name}`,
              );
            c = !0;
          }
          if (null != (0, o._5)(a.awo, r.T2.backendName)) {
            const n = { pixels: t },
              s = { numChannels: e };
            return r.T2.runKernel(a.awo, n, s);
          }
          const [d, f] = i ? [t.videoWidth, t.videoHeight] : [t.width, t.height];
          let m, g;
          if (l) m = t.getContext('2d').getImageData(0, 0, d, f).data;
          else if (s || n) m = t.data;
          else if (u || i || c) {
            if (null == h)
              if ('undefined' == typeof document) {
                if ('undefined' == typeof OffscreenCanvas || 'undefined' == typeof OffscreenCanvasRenderingContext2D)
                  throw new Error('Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.');
                h = new OffscreenCanvas(1, 1).getContext('2d');
              } else h = document.createElement('canvas').getContext('2d', { willReadFrequently: !0 });
            (h.canvas.width = d), (h.canvas.height = f), h.drawImage(t, 0, 0, d, f), (m = h.getImageData(0, 0, d, f).data);
          }
          if (4 === e) g = new Int32Array(m);
          else {
            const t = d * f;
            g = new Int32Array(t * e);
            for (let n = 0; n < t; n++) for (let t = 0; t < e; ++t) g[n * e + t] = m[4 * n + t];
          }
          const y = [f, d, e];
          return (0, p.$)(g, y, 'int32');
        }
        async function g(t, e = 3) {
          let n = null;
          if (
            (0, s._K)().getBool('WRAP_TO_IMAGEBITMAP') &&
            (function (t) {
              return (
                'undefined' != typeof window &&
                'undefined' != typeof ImageBitmap &&
                window.hasOwnProperty('createImageBitmap') &&
                !(t instanceof ImageBitmap) &&
                (function (t) {
                  return null != t && 0 !== t.width && 0 !== t.height;
                })(t) &&
                !(function (t) {
                  return null != t && t.data instanceof Uint8Array;
                })(t)
              );
            })(t)
          ) {
            let e;
            try {
              e = await createImageBitmap(t, { premultiplyAlpha: 'none' });
            } catch (t) {
              e = null;
            }
            n = null != e && e.width === t.width && e.height === t.height ? e : t;
          } else n = t;
          return m(n, e);
        }
        function y(t) {
          if (2 !== t.rank && 3 !== t.rank) throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${t.rank}.`);
          const e = 2 === t.rank ? 1 : t.shape[2];
          if (e > 4 || 2 === e) throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${e}`);
          if ('float32' !== t.dtype && 'int32' !== t.dtype) throw new Error(`Unsupported type for toPixels: ${t.dtype}. Please use float32 or int32 tensors.`);
        }
        async function b(t, e) {
          let n = (0, u.YT)(t, 'img', 'toPixels');
          if (!(t instanceof i.qY)) {
            const t = n;
            (n = (0, l.w)(t, 'int32')), t.dispose();
          }
          y(n);
          const [s, c] = n.shape.slice(0, 2),
            p = 2 === n.rank ? 1 : n.shape[2],
            h = await n.data(),
            m = 'float32' === n.dtype ? 255 : 1,
            g = new Uint8ClampedArray(c * s * 4);
          for (let t = 0; t < s * c; ++t) {
            const e = [0, 0, 0, 255];
            for (let r = 0; r < p; r++) {
              const s = h[t * p + r];
              if ('float32' === n.dtype) {
                if (s < 0 || s > 1) throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${s}.`);
              } else if ('int32' === n.dtype && (s < 0 || s > 255)) throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${s}.`);
              1 === p ? ((e[0] = s * m), (e[1] = s * m), (e[2] = s * m)) : (e[r] = s * m);
            }
            const r = 4 * t;
            (g[r + 0] = Math.round(e[0])), (g[r + 1] = Math.round(e[1])), (g[r + 2] = Math.round(e[2])), (g[r + 3] = Math.round(e[3]));
          }
          if (null != e) {
            f ||
              (null != (0, o._5)(a.XmO, r.T2.backendName) &&
                (d.warn('tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead.'), (f = !0))),
              (e.width = c),
              (e.height = s);
            const t = e.getContext('2d'),
              n = new ImageData(g, c, s);
            t.putImageData(n, 0, 0);
          }
          return n !== t && n.dispose(), g;
        }
        function v(t, e, n) {
          let s = (0, u.YT)(t, 'img', 'draw');
          if (!(t instanceof i.qY)) {
            const t = s;
            (s = (0, l.w)(t, 'int32')), t.dispose();
          }
          y(s),
            (function (t) {
              const e = (null == t ? void 0 : t.alpha) || 1;
              if (e > 1 || e < 0) throw new Error(`Alpha value ${e} is suppoed to be in range [0 - 1].`);
            })(null == n ? void 0 : n.imageOptions);
          const o = { image: s },
            c = { canvas: e, options: n };
          r.T2.runKernel(a.XmO, o, c);
        }
        const w = (0, c.op)({ fromPixels_: m });
      },
      448: (t, e, n) => {
        'use strict';
        n.d(e, { r: () => a });
        var r = n(53910),
          s = n(45119);
        function a(t, e = 'float32', n) {
          return (e = e || 'float32'), s.SA(t), new r.yl(t, e, n);
        }
      },
      29809: (t, e, n) => {
        'use strict';
        n.d(e, { w: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          cast_: function (t, e) {
            const n = (0, a.YT)(t, 'x', 'cast');
            if (!o.xn(e)) throw new Error(`Failed to cast to unknown dtype ${e}`);
            if (('string' === e && 'string' !== n.dtype) || ('string' !== e && 'string' === n.dtype)) throw new Error('Only strings can be casted to strings');
            const i = { x: n },
              u = { dtype: e };
            return r.T2.runKernel(s.KXH, i, u);
          },
        });
      },
      30855: (t, e, n) => {
        'use strict';
        n.d(e, { m: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          ceil_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'ceil', 'float32') };
            return r.T2.runKernel(s.QDP, e);
          },
        });
      },
      96928: (t, e, n) => {
        'use strict';
        n.d(e, { z: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(96111);
        const u = (0, n(70929).op)({
          clipByValue_: function (t, e, n) {
            const u = (0, a.YT)(t, 'x', 'clipByValue');
            if ((o.vA(e <= n, () => `Error in clip: min (${e}) must be less than or equal to max (${n}).`), e === n)) return (0, i.G)(u.shape, e, u.dtype);
            const l = { x: u },
              c = { clipValueMin: e, clipValueMax: n };
            return r.T2.runKernel(s.vaV, l, c);
          },
        });
      },
      70125: (t, e, n) => {
        'use strict';
        n.d(e, { o: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          clone_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'clone', 'string_or_numeric') };
            return r.T2.runKernel(s.lzr, e);
          },
        });
      },
      37148: (t, e, n) => {
        'use strict';
        n.d(e, { f: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          complex_: function (t, e) {
            const n = (0, a.YT)(t, 'real', 'complex'),
              i = (0, a.YT)(e, 'imag', 'complex');
            o.O3(n.shape, i.shape, `real and imag shapes, ${n.shape} and ${i.shape}, must match in call to tf.complex().`);
            const u = { real: n, imag: i };
            return r.T2.runKernel(s.pr3, u);
          },
        });
      },
      25030: (t, e, n) => {
        'use strict';
        n.d(e, { x: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(70125);
        const u = (0, n(70929).op)({
          concat_: function (t, e = 0) {
            (0, o.vA)(t.length >= 1, () => 'Pass at least one tensor to concat');
            const n = (0, a.j1)(t, 'tensors', 'concat', 'string_or_numeric');
            if (
              ('complex64' === n[0].dtype &&
                n.forEach((t) => {
                  if ('complex64' !== t.dtype) throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${t.dtype}. `);
                }),
              1 === n.length)
            )
              return (0, i.o)(n[0]);
            const u = n,
              l = { axis: e };
            return r.T2.runKernel(s.$dB, u, l);
          },
        });
      },
      46520: (t, e, n) => {
        'use strict';
        n.d(e, { I: () => s });
        var r = n(25030);
        const s = (0, n(70929).op)({
          concat1d_: function (t) {
            return (0, r.x)(t, 0);
          },
        });
      },
      19879: (t, e, n) => {
        'use strict';
        n.d(e, { R: () => s });
        var r = n(25030);
        const s = (0, n(70929).op)({
          concat2d_: function (t, e) {
            return (0, r.x)(t, e);
          },
        });
      },
      55530: (t, e, n) => {
        'use strict';
        n.d(e, { O: () => s });
        var r = n(25030);
        const s = (0, n(70929).op)({
          concat3d_: function (t, e) {
            return (0, r.x)(t, e);
          },
        });
      },
      60569: (t, e, n) => {
        'use strict';
        n.d(e, { P: () => s });
        var r = n(25030);
        const s = (0, n(70929).op)({
          concat4d_: function (t, e) {
            return (0, r.x)(t, e);
          },
        });
      },
      12789: (t, e, n) => {
        'use strict';
        n.d(e, { L: () => s, P: () => a });
        var r = n(45119);
        function s(t, e) {
          const n = t[0].length;
          t.forEach((t, e) => {
            r.vA(t.length === n, () => `Error in concat${n}D: rank of tensors[${e}] must be the same as the rank of the rest (${n})`);
          }),
            r.vA(e >= 0 && e < n, () => `Error in concat${n}D: axis must be between 0 and ${n - 1}.`);
          const s = t[0];
          t.forEach((t, a) => {
            for (let o = 0; o < n; o++)
              r.vA(
                o === e || t[o] === s[o],
                () => `Error in concat${n}D: Shape of tensors[${a}] (${t}) does not match the shape of the rest (${s}) along the non-concatenated axis ${a}.`,
              );
          });
        }
        function a(t, e) {
          const n = t[0].slice();
          for (let r = 1; r < t.length; r++) n[e] += t[r][e];
          return n;
        }
      },
      91086: (t, e, n) => {
        'use strict';
        n.d(e, { g: () => c });
        var r = n(28189),
          s = n(45119),
          a = n(29809),
          o = n(65703),
          i = n(11760),
          u = n(70929),
          l = n(7703);
        const c = (0, u.op)({
          confusionMatrix_: function (t, e, n) {
            const u = (0, r.YT)(t, 'labels', 'confusionMatrix'),
              c = (0, r.YT)(e, 'predictions', 'confusionMatrix');
            s.vA(null == n || (n > 0 && Number.isInteger(n)), () => `If provided, numClasses must be a positive integer, but got ${n}`),
              s.vA(1 === u.rank, () => `Expected the rank of labels to be 1, but got ${u.rank}`),
              s.vA(1 === c.rank, () => `Expected the rank of predictions to be 1, but got ${c.rank}`),
              s.vA(
                u.shape[0] === c.shape[0],
                () => `Mismatch in the number of examples: ${u.shape[0]} vs. ${c.shape[0]}. Labels and predictions should have the same number of elements.`,
              ),
              s.vA(n > 0 && Number.isInteger(n), () => `numClasses is required to be a positive integer, but got ${n}`);
            const p = (0, i.M)((0, a.w)(u, 'int32'), n),
              d = (0, i.M)((0, a.w)(c, 'int32'), n),
              h = (0, l.m)(p),
              f = (0, o.N)(h, d);
            return (0, a.w)(f, 'int32');
          },
        });
      },
      3701: (t, e, n) => {
        'use strict';
        n.d(e, { k: () => l });
        var r = n(28189),
          s = n(45119),
          a = n(28794),
          o = n(47195),
          i = n(70929),
          u = n(62302);
        const l = (0, i.op)({
          conv1d_: function (t, e, n, i, l = 'NWC', c = 1, p) {
            const d = (0, r.YT)(t, 'x', 'conv1d'),
              h = (0, r.YT)(e, 'filter', 'conv1d');
            let f = d,
              m = !1;
            2 === d.rank && ((m = !0), (f = (0, u.t)(d, [1, d.shape[0], d.shape[1]]))),
              s.vA(3 === f.rank, () => `Error in conv1d: input must be rank 3, but got rank ${f.rank}.`),
              s.vA(3 === h.rank, () => `Error in conv1d: filter must be rank 3, but got rank ${h.rank}.`),
              o.s_('conv1d', i, p),
              s.vA(f.shape[2] === h.shape[1], () => `Error in conv1d: depth of input (${f.shape[2]}) must match input depth for filter ${h.shape[1]}.`),
              s.vA(o.G0(n, c), () => `Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${c}'`),
              s.vA(o.qk(c), () => 'Error in conv1D: Dilated rates should be larger than 0.'),
              s.vA(o.qk(n), () => 'Error in conv1D: Stride should be larger than 0.'),
              s.vA('NWC' === l, () => `Error in conv1d: got dataFormat of ${l} but only NWC is currently supported.`);
            const g = (0, u.t)(h, [1, h.shape[0], h.shape[1], h.shape[2]]),
              y = (0, u.t)(f, [f.shape[0], 1, f.shape[1], f.shape[2]]),
              b = [1, n],
              v = [1, c],
              w = (0, a.X)(y, g, b, i, 'NHWC', v, p);
            return m ? (0, u.t)(w, [w.shape[2], w.shape[3]]) : (0, u.t)(w, [w.shape[0], w.shape[2], w.shape[3]]);
          },
        });
      },
      28794: (t, e, n) => {
        'use strict';
        n.d(e, { X: () => c });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(47195),
          u = n(70929),
          l = n(62302);
        const c = (0, u.op)({
          conv2d_: function (t, e, n, u, c = 'NHWC', p = [1, 1], d) {
            const h = (0, a.YT)(t, 'x', 'conv2d', 'float32'),
              f = (0, a.YT)(e, 'filter', 'conv2d', 'float32');
            let m = h,
              g = !1;
            3 === h.rank && ((g = !0), (m = (0, l.t)(h, [1, h.shape[0], h.shape[1], h.shape[2]]))),
              o.vA(4 === m.rank, () => `Error in conv2d: input must be rank 4, but got rank ${m.rank}.`),
              o.vA(4 === f.rank, () => `Error in conv2d: filter must be rank 4, but got rank ${f.rank}.`),
              i.s_('conv2d', u, d);
            const y = 'NHWC' === c ? m.shape[3] : m.shape[1];
            o.vA(y === f.shape[2], () => `Error in conv2d: depth of input (${y}) must match input depth for filter ${f.shape[2]}.`),
              o.vA(i.G0(n, p), () => `Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${p}'`),
              o.vA(i.qk(p), () => 'Error in conv2D: Dilated rates should be larger than 0.'),
              o.vA(i.qk(n), () => 'Error in conv2D: Strides should be larger than 0.');
            const b = { x: m, filter: f },
              v = { strides: n, pad: u, dataFormat: c, dilations: p, dimRoundingMode: d },
              w = r.T2.runKernel(s.p2J, b, v);
            return g ? (0, l.t)(w, [w.shape[1], w.shape[2], w.shape[3]]) : w;
          },
        });
      },
      25248: (t, e, n) => {
        'use strict';
        n.d(e, { H: () => l });
        var r = n(67897),
          s = n(15441),
          a = n(45119),
          o = n(47195),
          i = n(70929),
          u = n(62302);
        const l = (0, i.op)({
          conv2DBackpropFilter_: function (t, e, n, i, l, c = 'NHWC', p) {
            let d = t;
            3 === t.rank && (d = (0, u.t)(t, [1, t.shape[0], t.shape[1], t.shape[2]]));
            let h = e;
            3 === h.rank && (h = (0, u.t)(e, [1, e.shape[0], e.shape[1], e.shape[2]])),
              a.vA(4 === d.rank, () => `Error in conv2dDerFilter: input must be rank 4, but got shape ${d.shape}.`),
              a.vA(4 === h.rank, () => `Error in conv2dDerFilter: dy must be rank 4, but got shape ${h.shape}.`),
              a.vA(4 === n.length, () => `Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);
            const f = 'NHWC' === c ? d.shape[3] : d.shape[1],
              m = 'NHWC' === c ? h.shape[3] : h.shape[1];
            a.vA(f === n[2], () => `Error in conv2dDerFilter: depth of input ${f}) must match input depth in filter (${n[2]}.`),
              a.vA(m === n[3], () => `Error in conv2dDerFilter: depth of dy (${m}) must match output depth for filter (${n[3]}).`),
              o.s_('conv2dDerFilter', l, p);
            const g = { x: d, dy: h },
              y = { strides: i, pad: l, dataFormat: c, dimRoundingMode: p, filterShape: n };
            return r.T2.runKernel(s.rFm, g, y);
          },
        });
      },
      80252: (t, e, n) => {
        'use strict';
        n.d(e, { v: () => l });
        var r = n(67897),
          s = n(15441),
          a = n(45119),
          o = n(47195),
          i = n(70929),
          u = n(62302);
        const l = (0, i.op)({
          conv2DBackpropInput_: function (t, e, n, i, l, c = 'NHWC', p) {
            a.vA(t.length === e.rank, () => `Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);
            let d = t,
              h = e,
              f = !1;
            3 === e.rank && ((f = !0), (h = (0, u.t)(e, [1, e.shape[0], e.shape[1], e.shape[2]])), (d = [1, t[0], t[1], t[2]])),
              a.vA(4 === d.length, () => `Error in conv2dDerInput: inShape must be length 4, but got length ${d.length}.`),
              a.vA(4 === h.rank, () => `Error in conv2dDerInput: dy must be rank 4, but got rank ${h.rank}`),
              a.vA(4 === n.rank, () => `Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);
            const m = 'NHWC' === c ? d[3] : d[1],
              g = 'NHWC' === c ? h.shape[3] : h.shape[1];
            a.vA(m === n.shape[2], () => `Error in conv2dDerInput: depth of input (${m}) must match input depth for filter ${n.shape[2]}.`),
              a.vA(g === n.shape[3], () => `Error in conv2dDerInput: depth of output (${g}) must match output depth for filter ${n.shape[3]}.`),
              o.s_('conv2dDerInput', l, p);
            const y = { dy: h, filter: n },
              b = { strides: i, pad: l, dataFormat: c, dimRoundingMode: p, inputShape: d },
              v = r.T2.runKernel(s.jfg, y, b);
            return f ? (0, u.t)(v, [v.shape[1], v.shape[2], v.shape[3]]) : v;
          },
        });
      },
      41106: (t, e, n) => {
        'use strict';
        n.d(e, { w: () => a });
        var r = n(28189),
          s = n(80252);
        const a = (0, n(70929).op)({
          conv2dTranspose_: function (t, e, n, a, o, i) {
            const u = (0, r.YT)(t, 'x', 'conv2dTranspose'),
              l = (0, r.YT)(e, 'filter', 'conv2dTranspose');
            return (0, s.v)(n, u, l, a, o, 'NHWC', i);
          },
        });
      },
      90167: (t, e, n) => {
        'use strict';
        n.d(e, { I: () => c });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(47195),
          u = n(70929),
          l = n(62302);
        const c = (0, u.op)({
          conv3d_: function (t, e, n, u, c = 'NDHWC', p = [1, 1, 1]) {
            const d = (0, a.YT)(t, 'x', 'conv3d'),
              h = (0, a.YT)(e, 'filter', 'conv3d');
            let f = d,
              m = !1;
            4 === d.rank && ((m = !0), (f = (0, l.t)(d, [1, d.shape[0], d.shape[1], d.shape[2], d.shape[3]]))),
              o.vA(5 === f.rank, () => `Error in conv3d: input must be rank 5, but got rank ${f.rank}.`),
              o.vA(5 === h.rank, () => `Error in conv3d: filter must be rank 5, but got rank ${h.rank}.`),
              o.vA(f.shape[4] === h.shape[3], () => `Error in conv3d: depth of input (${f.shape[4]}) must match input depth for filter ${h.shape[3]}.`),
              o.vA((0, i.G0)(n, p), () => `Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${p}'`),
              o.vA('NDHWC' === c, () => `Error in conv3d: got dataFormat of ${c} but only NDHWC is currently supported.`),
              o.vA((0, i.qk)(p), () => 'Error in conv3D: Dilated rates should be larger than 0.'),
              o.vA((0, i.qk)(n), () => 'Error in conv3D: Strides should be larger than 0.');
            const g = { x: f, filter: h },
              y = { strides: n, pad: u, dataFormat: c, dilations: p },
              b = r.T2.runKernel(s.A1h, g, y);
            return m ? (0, l.t)(b, [b.shape[1], b.shape[2], b.shape[3], b.shape[4]]) : b;
          },
        });
      },
      31895: (t, e, n) => {
        'use strict';
        n.d(e, { c: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(45119),
          o = n(70929),
          i = n(62302);
        const u = (0, o.op)({
          conv3DBackpropInput_: function (t, e, n, o, u) {
            a.vA(t.length === e.rank, () => `Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);
            let l = t,
              c = e,
              p = !1;
            4 === e.rank && ((p = !0), (c = (0, i.t)(e, [1, e.shape[0], e.shape[1], e.shape[2], e.shape[3]])), (l = [1, t[0], t[1], t[2], t[3]]));
            const d = l[4],
              h = c.shape[4];
            a.vA(5 === l.length, () => `Error in conv3dDerInput: inShape must be length 5, but got length ${l.length}.`),
              a.vA(5 === c.rank, () => `Error in conv3dDerInput: dy must be rank 5, but got rank ${c.rank}`),
              a.vA(5 === n.rank, () => `Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),
              a.vA(d === n.shape[3], () => `Error in conv3dDerInput: depth of input (${d}) must match input depth for filter ${n.shape[3]}.`),
              a.vA(h === n.shape[4], () => `Error in conv3dDerInput: depth of output (${h}) must match output depth for filter ${n.shape[4]}.`);
            const f = { dy: c, filter: n },
              m = { pad: u, strides: o, inputShape: l },
              g = r.T2.runKernel(s.gC7, f, m);
            return p ? (0, i.t)(g, [g.shape[1], g.shape[2], g.shape[3], g.shape[4]]) : g;
          },
        });
      },
      41655: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => a });
        var r = n(28189),
          s = n(31895);
        const a = (0, n(70929).op)({
          conv3dTranspose_: function (t, e, n, a, o) {
            const i = (0, r.YT)(t, 'x', 'conv3dTranspose'),
              u = (0, r.YT)(e, 'filter', 'conv3dTranspose');
            return (0, s.c)(n, i, u, a, o);
          },
        });
      },
      47195: (t, e, n) => {
        'use strict';
        n.d(e, { $Q: () => y, Dh: () => f, E6: () => a, G0: () => m, G8: () => l, YQ: () => s, l5: () => o, p$: () => u, qk: () => g, s_: () => b, uf: () => i });
        var r = n(45119);
        function s(t, e, n, r, s = 'NHWC', a) {
          return i(t, [...e, t[3]], n, a, r, null, null, y(s));
        }
        function a(t, e, n, r, s, a, o = 'channelsLast') {
          const [u, l] = c(e);
          let p;
          if ('channelsLast' === o) p = [u, l, t[3], t[3]];
          else {
            if ('channelsFirst' !== o) throw new Error(`Unknown dataFormat ${o}`);
            p = [u, l, t[1], t[1]];
          }
          return i(t, p, n, r, s, a, !1, o);
        }
        function o(t, e, n, r, s, a, o = 'NDHWC') {
          const [i, l, c] = p(e);
          let d, h;
          if ('NDHWC' === o) (h = 'channelsLast'), (d = [i, l, c, t[4], t[4]]);
          else {
            if ('NCDHW' !== o) throw new Error(`Unknown dataFormat ${o}`);
            (h = 'channelsFirst'), (d = [i, l, c, t[1], t[1]]);
          }
          return u(t, d, n, r, s, !1, h, a);
        }
        function i(t, e, n, r, s, a, o = !1, i = 'channelsLast') {
          let [u, p, f, m] = [-1, -1, -1, -1];
          if ('channelsLast' === i) [u, p, f, m] = t;
          else {
            if ('channelsFirst' !== i) throw new Error(`Unknown dataFormat ${i}`);
            [u, m, p, f] = t;
          }
          const [g, y, , b] = e,
            [v, w] = c(n),
            [T, x] = c(r),
            S = d(g, T),
            N = d(y, x),
            {
              padInfo: E,
              outHeight: A,
              outWidth: k,
            } = (function (t, e, n, r, s, a, o, i, u) {
              let c, p, d;
              if ('number' == typeof t) {
                c = { top: t, bottom: t, left: t, right: t, type: 0 === t ? 'VALID' : 'NUMBER' };
                const s = (function (t, e, n, r, s) {
                  null == r && (r = l(t, e, n));
                  const a = t[1];
                  return [h((t[0] - e + 2 * r) / n + 1, s), h((a - e + 2 * r) / n + 1, s)];
                })([e, n], a, r, t, i);
                (p = s[0]), (d = s[1]);
              } else if ('same' === t) {
                (p = Math.ceil(e / r)), (d = Math.ceil(n / s));
                const t = Math.max(0, (p - 1) * r + a - e),
                  i = Math.max(0, (d - 1) * s + o - n),
                  u = Math.floor(t / 2),
                  l = t - u,
                  h = Math.floor(i / 2);
                c = { top: u, bottom: l, left: h, right: i - h, type: 'SAME' };
              } else if ('valid' === t) (c = { top: 0, bottom: 0, left: 0, right: 0, type: 'VALID' }), (p = Math.ceil((e - a + 1) / r)), (d = Math.ceil((n - o + 1) / s));
              else {
                if ('object' != typeof t) throw Error(`Unknown padding parameter: ${t}`);
                {
                  const l = 'channelsLast' === u ? t[1][0] : t[2][0],
                    f = 'channelsLast' === u ? t[1][1] : t[2][1],
                    m = 'channelsLast' === u ? t[2][0] : t[3][0],
                    g = 'channelsLast' === u ? t[2][1] : t[3][1];
                  (c = { top: l, bottom: f, left: m, right: g, type: 0 === l && 0 === f && 0 === m && 0 === g ? 'VALID' : 'EXPLICIT' }),
                    (p = h((e - a + l + f) / r + 1, i)),
                    (d = h((n - o + m + g) / s + 1, i));
                }
              }
              return { padInfo: c, outHeight: p, outWidth: d };
            })(s, p, f, v, w, S, N, a, i),
            _ = o ? b * m : b;
          let I;
          return (
            'channelsFirst' === i ? (I = [u, _, A, k]) : 'channelsLast' === i && (I = [u, A, k, _]),
            {
              batchSize: u,
              dataFormat: i,
              inHeight: p,
              inWidth: f,
              inChannels: m,
              outHeight: A,
              outWidth: k,
              outChannels: _,
              padInfo: E,
              strideHeight: v,
              strideWidth: w,
              filterHeight: g,
              filterWidth: y,
              effectiveFilterHeight: S,
              effectiveFilterWidth: N,
              dilationHeight: T,
              dilationWidth: x,
              inShape: t,
              outShape: I,
              filterShape: e,
            }
          );
        }
        function u(t, e, n, r, s, a = !1, o = 'channelsLast', i) {
          let [u, c, f, m, g] = [-1, -1, -1, -1, -1];
          if ('channelsLast' === o) [u, c, f, m, g] = t;
          else {
            if ('channelsFirst' !== o) throw new Error(`Unknown dataFormat ${o}`);
            [u, g, c, f, m] = t;
          }
          const [y, b, v, , w] = e,
            [T, x, S] = p(n),
            [N, E, A] = p(r),
            k = d(y, N),
            _ = d(b, E),
            I = d(v, A),
            {
              padInfo: O,
              outDepth: M,
              outHeight: $,
              outWidth: D,
            } = (function (t, e, n, r, s, a, o, i, u, c, p) {
              let d, f, m, g;
              if (('valid' === t && (t = 0), 'number' == typeof t)) {
                d = { top: t, bottom: t, left: t, right: t, front: t, back: t, type: 0 === t ? 'VALID' : 'NUMBER' };
                const y = (function (t, e, n, r, s, a) {
                  null == s && (s = l(t, e[0], r[0]));
                  const o = [0, 0, 0, 1];
                  for (let n = 0; n < 3; n++) t[n] + 2 * s >= e[n] && (o[n] = h((t[n] - e[n] + 2 * s) / r[n] + 1, a));
                  return o;
                })([e, n, r, 1], [i, u, c], 0, [s, a, o], t, p);
                (f = y[0]), (m = y[1]), (g = y[2]);
              } else {
                if ('same' !== t) throw Error(`Unknown padding parameter: ${t}`);
                {
                  (f = Math.ceil(e / s)), (m = Math.ceil(n / a)), (g = Math.ceil(r / o));
                  const t = (f - 1) * s + i - e,
                    l = (m - 1) * a + u - n,
                    p = (g - 1) * o + c - r,
                    h = Math.floor(t / 2),
                    y = t - h,
                    b = Math.floor(l / 2),
                    v = l - b,
                    w = Math.floor(p / 2);
                  d = { top: b, bottom: v, left: w, right: p - w, front: h, back: y, type: 'SAME' };
                }
              }
              return { padInfo: d, outDepth: f, outHeight: m, outWidth: g };
            })(s, c, f, m, T, x, S, k, _, I, i),
            R = a ? w * g : w;
          let F;
          return (
            'channelsFirst' === o ? (F = [u, R, M, $, D]) : 'channelsLast' === o && (F = [u, M, $, D, R]),
            {
              batchSize: u,
              dataFormat: o,
              inDepth: c,
              inHeight: f,
              inWidth: m,
              inChannels: g,
              outDepth: M,
              outHeight: $,
              outWidth: D,
              outChannels: R,
              padInfo: O,
              strideDepth: T,
              strideHeight: x,
              strideWidth: S,
              filterDepth: y,
              filterHeight: b,
              filterWidth: v,
              effectiveFilterDepth: k,
              effectiveFilterHeight: _,
              effectiveFilterWidth: I,
              dilationDepth: N,
              dilationHeight: E,
              dilationWidth: A,
              inShape: t,
              outShape: F,
              filterShape: e,
            }
          );
        }
        function l(t, e, n, r = 1) {
          const s = d(e, r);
          return Math.floor((t[0] * (n - 1) - n + s) / 2);
        }
        function c(t) {
          return 'number' == typeof t ? [t, t, t] : 2 === t.length ? [t[0], t[1], 1] : t;
        }
        function p(t) {
          return 'number' == typeof t ? [t, t, t] : t;
        }
        function d(t, e) {
          return e <= 1 ? t : t + (t - 1) * (e - 1);
        }
        function h(t, e) {
          if (!e) return Math.trunc(t);
          switch (e) {
            case 'round':
              return Math.round(t);
            case 'ceil':
              return Math.ceil(t);
            case 'floor':
              return Math.floor(t);
            default:
              throw new Error(`Unknown roundingMode ${e}`);
          }
        }
        function f(t) {
          const [e, n, r] = c(t);
          return 1 === e && 1 === n && 1 === r;
        }
        function m(t, e) {
          return f(t) || f(e);
        }
        function g(t) {
          return c(t).every((t) => t > 0);
        }
        function y(t) {
          if ('NHWC' === t) return 'channelsLast';
          if ('NCHW' === t) return 'channelsFirst';
          throw new Error(`Unknown dataFormat ${t}`);
        }
        function b(t, e, n) {
          if (null != n) {
            if ('string' == typeof e) throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);
            if ('number' == typeof e) r.vA(r.E6(e), () => `Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);
            else {
              if ('object' != typeof e) throw Error(`Error in ${t}: Unknown padding parameter: ${e}`);
              e.forEach((e) => {
                e.forEach((e) => {
                  r.vA(r.E6(e), () => `Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);
                });
              });
            }
          }
        }
      },
      99907: (t, e, n) => {
        'use strict';
        n.d(e, { g: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          cos_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'cos', 'float32') };
            return r.T2.runKernel(s.Mn0, e);
          },
        });
      },
      27451: (t, e, n) => {
        'use strict';
        n.d(e, { y: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          cosh_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'cosh', 'float32') };
            return r.T2.runKernel(s.MnK, e);
          },
        });
      },
      10302: (t, e, n) => {
        'use strict';
        n.d(e, { L: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          cumprod_: function (t, e = 0, n = !1, o = !1) {
            const i = { x: (0, a.YT)(t, 'x', 'cumprod') },
              u = { axis: e, exclusive: n, reverse: o };
            return r.T2.runKernel(s.jj_, i, u);
          },
        });
      },
      76808: (t, e, n) => {
        'use strict';
        n.d(e, { r: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          cumsum_: function (t, e = 0, n = !1, o = !1) {
            const i = { x: (0, a.YT)(t, 'x', 'cumsum') },
              u = { axis: e, exclusive: n, reverse: o };
            return r.T2.runKernel(s.nY8, i, u);
          },
        });
      },
      77974: (t, e, n) => {
        'use strict';
        n.d(e, { a: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          denseBincount_: function (t, e, n, i = !1) {
            const u = (0, a.YT)(t, 'x', 'denseBincount'),
              l = (0, a.YT)(e, 'weights', 'denseBincount');
            o.vA('int32' === u.dtype, () => `Error in denseBincount: input dtype must be int32, but got ${u.dtype}`),
              o.vA(u.rank <= 2, () => `Error in denseBincount: input must be at most rank 2, but got rank ${u.rank}.`),
              o.vA(n >= 0, () => `size must be non-negative, but got ${n}.`),
              o.vA(
                l.size === u.size || 0 === l.size,
                () => `Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${u.shape}, weights shape: ${l.shape}.`,
              );
            const c = { x: u, weights: l },
              p = { size: n, binaryOutput: i };
            return r.T2.runKernel(s.wNW, c, p);
          },
        });
      },
      31216: (t, e, n) => {
        'use strict';
        n.d(e, { R: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          depthToSpace_: function (t, e, n = 'NHWC') {
            const i = (0, a.YT)(t, 'x', 'depthToSpace', 'float32'),
              u = 'NHWC' === n ? i.shape[1] : i.shape[2],
              l = 'NHWC' === n ? i.shape[2] : i.shape[3],
              c = 'NHWC' === n ? i.shape[3] : i.shape[1];
            o.vA(e > 1, () => `blockSize should be > 1 for depthToSpace, but was: ${e}`),
              o.vA(u * e >= 0, () => `Negative dimension size caused by overflow when multiplying\n    ${u} and ${e}  for depthToSpace with input shape\n    ${i.shape}`),
              o.vA(l * e >= 0, () => `Negative dimension size caused by overflow when multiplying\n    ${l} and ${e} for depthToSpace with input shape\n        ${i.shape}`),
              o.vA(c % (e * e) == 0, () => `Dimension size must be evenly divisible by ${e * e} but is ${c} for depthToSpace with input shape ${i.shape}`);
            const p = { x: i },
              d = { blockSize: e, dataFormat: n };
            return r.T2.runKernel(s.TMz, p, d);
          },
        });
      },
      10676: (t, e, n) => {
        'use strict';
        n.d(e, { G: () => c });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(47195),
          u = n(70929),
          l = n(62302);
        const c = (0, u.op)({
          depthwiseConv2d_: function (t, e, n, u, c = 'NHWC', p = [1, 1], d) {
            const h = (0, a.YT)(t, 'x', 'depthwiseConv2d', 'float32'),
              f = (0, a.YT)(e, 'filter', 'depthwiseConv2d', 'float32');
            let m = h,
              g = !1;
            3 === h.rank && ((g = !0), (m = (0, l.t)(h, [1, h.shape[0], h.shape[1], h.shape[2]]))),
              o.vA(4 === m.rank, () => `Error in depthwiseConv2d: input must be rank 4, but got rank ${m.rank}.`),
              o.vA(4 === f.rank, () => `Error in depthwiseConv2d: filter must be rank 4, but got rank ${f.rank}.`);
            const y = 'NHWC' === c ? m.shape[3] : m.shape[1];
            o.vA(y === f.shape[2], () => `Error in depthwiseConv2d: number of input channels (${y}) must match the inChannels dimension in filter ${f.shape[2]}.`),
              i.s_('depthwiseConv2d', u, d);
            const b = { x: m, filter: f },
              v = { strides: n, pad: u, dataFormat: c, dilations: p, dimRoundingMode: d },
              w = r.T2.runKernel(s.tGH, b, v);
            return g ? (0, l.t)(w, [w.shape[1], w.shape[2], w.shape[3]]) : w;
          },
        });
      },
      41890: (t, e, n) => {
        'use strict';
        n.d(e, { x: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(70929),
          o = n(62302);
        const i = (0, a.op)({
          depthwiseConv2dNativeBackpropFilter_: function (t, e, n, a, i, u = [1, 1], l) {
            let c = t;
            3 === t.rank && (c = (0, o.t)(t, [1, t.shape[0], t.shape[1], t.shape[2]]));
            let p = e;
            3 === p.rank && (p = (0, o.t)(e, [1, e.shape[0], e.shape[1], e.shape[2]]));
            const d = { x: c, dy: p },
              h = { strides: a, pad: i, dimRoundingMode: l, dilations: u, filterShape: n };
            return r.T2.runKernel(s.X$8, d, h);
          },
        });
      },
      83134: (t, e, n) => {
        'use strict';
        n.d(e, { l: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(70929),
          o = n(62302);
        const i = (0, a.op)({
          depthwiseConv2dNativeBackpropInput_: function (t, e, n, a, i, u = [1, 1], l) {
            let c = e,
              p = !1;
            3 === e.rank && ((p = !0), (c = (0, o.t)(e, [1, e.shape[0], e.shape[1], e.shape[2]])));
            const d = { dy: c, filter: n },
              h = { strides: a, pad: i, dimRoundingMode: l, dilations: u, inputShape: t },
              f = r.T2.runKernel(s.nVu, d, h);
            return p ? (0, o.t)(f, [f.shape[1], f.shape[2], f.shape[3]]) : f;
          },
        });
      },
      10601: (t, e, n) => {
        'use strict';
        n.d(e, { s: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          diag_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'diag') };
            return r.T2.runKernel(s.ORI, e);
          },
        });
      },
      93002: (t, e, n) => {
        'use strict';
        n.d(e, { X: () => l });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(70929),
          u = n(62302);
        const l = (0, i.op)({
          dilation2d_: function (t, e, n, i, l = [1, 1], c = 'NHWC') {
            const p = (0, a.YT)(t, 'x', 'dilation2d'),
              d = (0, a.YT)(e, 'filter', 'dilation2d');
            o.vA(3 === p.rank || 4 === p.rank, () => `Error in dilation2d: input must be rank 3 or 4, but got rank ${p.rank}.`),
              o.vA(3 === d.rank, () => `Error in dilation2d: filter must be rank 3, but got rank ${d.rank}.`),
              o.vA('NHWC' === c, () => `Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${c}`);
            let h = p,
              f = !1;
            3 === p.rank && ((h = (0, u.t)(p, [1, p.shape[0], p.shape[1], p.shape[2]])), (f = !0)),
              o.vA(h.shape[3] === d.shape[2], () => `Error in dilation2d:  input and filter must have the same depth: ${h.shape[3]} vs ${d.shape[2]}`);
            const m = { x: h, filter: d },
              g = { strides: n, pad: i, dilations: l },
              y = r.T2.runKernel(s.jxD, m, g);
            return f ? (0, u.t)(y, [y.shape[1], y.shape[2], y.shape[3]]) : y;
          },
        });
      },
      89359: (t, e, n) => {
        'use strict';
        n.d(e, { y: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189),
          i = n(88991);
        const u = (0, n(70929).op)({
          div_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'div'),
              u = (0, o.YT)(e, 'b', 'div');
            if ((([n, u] = (0, a.makeTypesMatch)(n, u)), 'int32' === n.dtype && 'int32' === u.dtype)) return (0, i.w)(n, u);
            const l = { a: n, b: u };
            return r.T2.runKernel(s.sDr, l, {});
          },
        });
      },
      919: (t, e, n) => {
        'use strict';
        n.d(e, { e: () => c });
        var r = n(30565),
          s = n(28189),
          a = n(89359),
          o = n(13020),
          i = n(70929),
          u = n(12151),
          l = n(55537);
        const c = (0, i.op)({
          divNoNan_: function (t, e) {
            let n = (0, s.YT)(t, 'a', 'div'),
              i = (0, s.YT)(e, 'b', 'div');
            [n, i] = (0, r.makeTypesMatch)(n, i);
            const c = (0, a.y)(n, i),
              p = (0, l.P)(c),
              d = (0, o.L)(i, p);
            return (0, u._)(d, p, c);
          },
        });
      },
      69759: (t, e, n) => {
        'use strict';
        n.d(e, { O: () => u });
        var r = n(28189),
          s = n(45119),
          a = n(65703),
          o = n(70929),
          i = n(62302);
        const u = (0, o.op)({
          dot_: function (t, e) {
            const n = (0, r.YT)(t, 't1', 'dot'),
              o = (0, r.YT)(e, 't2', 'dot');
            s.vA(!((1 !== n.rank && 2 !== n.rank) || (1 !== o.rank && 2 !== o.rank)), () => `Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${o.rank}.`);
            const u = 1 === n.rank ? n.size : n.shape[1],
              l = 1 === o.rank ? o.size : o.shape[0];
            if ((s.vA(u === l, () => `Error in dot: inner dimensions of inputs must match, but got ${u} and ${l}.`), 1 === n.rank && 1 === o.rank)) {
              const t = (0, i.t)(n, [1, -1]),
                e = (0, i.t)(o, [-1, 1]),
                r = (0, a.N)(t, e);
              return (0, i.t)(r, []);
            }
            if (1 === n.rank && 2 === o.rank) {
              const t = (0, i.t)(n, [1, -1]),
                e = (0, i.t)(o, [o.shape[0], o.shape[1]]),
                r = (0, a.N)(t, e);
              return (0, i.t)(r, [r.size]);
            }
            if (2 === n.rank && 1 === o.rank) {
              const t = (0, i.t)(o, [-1, 1]),
                e = (0, a.N)(n, t);
              return (0, i.t)(e, [e.size]);
            }
            {
              const t = (0, i.t)(o, [o.shape[0], o.shape[1]]);
              return (0, a.N)(n, t);
            }
          },
        });
      },
      1087: (t, e, n) => {
        'use strict';
        n.d(e, { E: () => h });
        var r = n(53910),
          s = n(28189),
          a = n(45119),
          o = n(37523),
          i = n(89359),
          u = n(92562),
          l = n(15606),
          c = n(9258),
          p = n(70929),
          d = n(79546);
        const h = (0, p.op)({
          dropout_: function (t, e, n, p) {
            const h = (0, s.YT)(t, 'x', 'dropout');
            if (
              (a.vA('float32' === h.dtype, () => `x has to be a floating point tensor since it's going to be scaled, but got a ${h.dtype} tensor instead.`),
              a.vA(e >= 0 && e < 1, () => `rate must be a float in the range [0, 1), but got ${e}.`),
              0 === e)
            )
              return t instanceof r.qY ? h.clone() : h;
            const f = (0, u.y)(h, n),
              m = 1 - e,
              g = (0, i.y)((0, l.R)((0, o.W)((0, d.Y)(f, 0, 1, 'float32', p), m)), m);
            return (0, c.l)(h, g);
          },
        });
      },
      92562: (t, e, n) => {
        'use strict';
        n.d(e, { y: () => s });
        var r = n(45119);
        function s(t, e) {
          if (null == e) return t.shape.slice();
          if (r.r1(t.shape, e)) return e;
          if (t.shape.length === e.length) {
            const n = [];
            for (let r = 0; r < t.shape.length; r++) null == e[r] && null != t.shape[r] ? n.push(t.shape[r]) : n.push(e[r]);
            return n;
          }
          return e;
        }
      },
      79853: (t, e, n) => {
        'use strict';
        n.d(e, { _: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          einsum_: function (t, ...e) {
            const n = e.map((t, e) => (0, a.YT)(t, `tensors${e}`, 'einsum')),
              o = { equation: t };
            return r.T2.runKernel(s.Qgm, n, o);
          },
        });
      },
      83416: (t, e, n) => {
        'use strict';
        n.d(e, { P: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          elu_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'elu', 'float32') };
            return r.T2.runKernel(s.Pah, e);
          },
        });
      },
      48398: (t, e, n) => {
        'use strict';
        n.d(e, { Q: () => a });
        var r = n(28189),
          s = n(45119);
        const a = (0, n(70929).op)({
          ensureShape_: function (t, e) {
            const n = (0, r.YT)(t, 'x', 'ensureShape', 'string_or_numeric');
            if (!(0, s.e_)(n.shape, e)) throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${e}`);
            return t;
          },
        });
      },
      13020: (t, e, n) => {
        'use strict';
        n.d(e, { L: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189),
          i = n(62198);
        const u = (0, n(70929).op)({
          equal_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'equal', 'string_or_numeric'),
              u = (0, o.YT)(e, 'b', 'equal', 'string_or_numeric');
            ([n, u] = (0, a.makeTypesMatch)(n, u)), (0, i.assertAndGetBroadcastShape)(n.shape, u.shape);
            const l = { a: n, b: u };
            return r.T2.runKernel(s.BRl, l);
          },
        });
      },
      95207: (t, e, n) => {
        'use strict';
        n.d(e, { Y: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(29809);
        const u = (0, n(70929).op)({
          erf_: function (t) {
            let e = (0, a.YT)(t, 'x', 'erf');
            o.vA('int32' === e.dtype || 'float32' === e.dtype, () => 'Input dtype must be `int32` or `float32`.'), 'int32' === e.dtype && (e = (0, i.w)(e, 'float32'));
            const n = { x: e };
            return r.T2.runKernel(s._s9, n);
          },
        });
      },
      11418: (t, e, n) => {
        'use strict';
        n.d(e, { HM: () => r, T4: () => s, _7: () => a, fE: () => u, fp: () => o, mg: () => i });
        const r = 0.3275911,
          s = 0.254829592,
          a = -0.284496736,
          o = 1.421413741,
          i = -1.453152027,
          u = 1.061405429;
      },
      44881: (t, e, n) => {
        'use strict';
        n.d(e, { p: () => s });
        var r = n(92596);
        const s = (0, n(70929).op)({
          euclideanNorm_: function (t, e = null, n = !1) {
            return (0, r.x)(t, 'euclidean', e, n);
          },
        });
      },
      8631: (t, e, n) => {
        'use strict';
        n.d(e, { o: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          exp_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'exp') };
            return r.T2.runKernel(s.ox3, e);
          },
        });
      },
      8710: (t, e, n) => {
        'use strict';
        n.d(e, { U: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          expandDims_: function (t, e = 0) {
            const n = (0, a.YT)(t, 'x', 'expandDims', 'string_or_numeric');
            o.vA(e <= n.rank, () => 'Axis must be <= rank of the tensor');
            const i = { input: n },
              u = { dim: e };
            return r.T2.runKernel(s.ybN, i, u);
          },
        });
      },
      40517: (t, e, n) => {
        'use strict';
        n.d(e, { I: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          expm1_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'expm1') };
            return r.T2.runKernel(s.ybj, e);
          },
        });
      },
      53621: (t, e, n) => {
        'use strict';
        n.d(e, { y: () => u });
        var r = n(448),
          s = n(8710),
          a = n(70929),
          o = n(62302),
          i = n(64826);
        const u = (0, a.op)({
          eye_: function (t, e, n, a = 'float32') {
            null == e && (e = t);
            const u = (0, r.r)([t, e], a),
              l = t <= e ? t : e;
            for (let t = 0; t < l; ++t) u.set(1, t, t);
            const c = (0, o.t)(u.toTensor(), [t, e]);
            if (null == n) return c;
            if (1 === n.length) return (0, i.V)((0, s.U)(c, 0), [n[0], 1, 1]);
            if (2 === n.length) return (0, i.V)((0, s.U)((0, s.U)(c, 0), 0), [n[0], n[1], 1, 1]);
            if (3 === n.length) return (0, i.V)((0, s.U)((0, s.U)((0, s.U)(c, 0), 0), 0), [n[0], n[1], n[2], 1, 1]);
            throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`);
          },
        });
      },
      96111: (t, e, n) => {
        'use strict';
        n.d(e, { G: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(45119);
        function o(t, e, n) {
          (0, a.SA)(t);
          const o = { shape: t, value: e, dtype: (n = n || (0, a.X$)(e)) };
          return r.T2.runKernel(s.SQl, {}, o);
        }
      },
      15606: (t, e, n) => {
        'use strict';
        n.d(e, { R: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          floor_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'floor', 'float32') };
            return r.T2.runKernel(s.ZgB, e);
          },
        });
      },
      88991: (t, e, n) => {
        'use strict';
        n.d(e, { w: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189);
        const i = (0, n(70929).op)({
          floorDiv_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'floorDiv'),
              i = (0, o.YT)(e, 'b', 'floorDiv');
            [n, i] = (0, a.makeTypesMatch)(n, i);
            const u = { a: n, b: i };
            return r.T2.runKernel(s.ElG, u);
          },
        });
      },
      93502: (t, e, n) => {
        'use strict';
        n.d(e, { X: () => b });
        var r = n(67897),
          s = n(31830),
          a = n(15441),
          o = n(30565),
          i = n(28189),
          u = n(45119),
          l = n(37523),
          c = n(62198),
          p = n(28794),
          d = n(25248),
          h = n(80252),
          f = n(47195),
          m = n(68646),
          g = n(70929),
          y = n(62302);
        const b = (0, g.op)({
          fusedConv2d_: function ({
            x: t,
            filter: e,
            strides: n,
            pad: g,
            dataFormat: b = 'NHWC',
            dilations: v = [1, 1],
            dimRoundingMode: w,
            bias: T,
            activation: x = 'linear',
            preluActivationWeights: S,
            leakyreluAlpha: N,
          }) {
            if (((x = x || 'linear'), !1 === (0, m.zE)(r.T2.state.gradientDepth, x))) {
              u.vA(
                'NHWC' === b,
                () => `Error in fused conv2d: got dataFormat of ${b} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`,
              );
              let r = (0, p.X)(t, e, n, g, b, v, w);
              return null != T && (r = (0, l.W)(r, T)), (0, m.f2)(r, x, S, N);
            }
            const E = (0, i.YT)(t, 'x', 'conv2d', 'float32'),
              A = (0, i.YT)(e, 'filter', 'conv2d', 'float32');
            let k = E,
              _ = !1;
            3 === E.rank && ((_ = !0), (k = (0, y.t)(E, [1, E.shape[0], E.shape[1], E.shape[2]]))),
              u.vA(4 === k.rank, () => `Error in fused conv2d: input must be rank 4, but got rank ${k.rank}.`),
              u.vA(4 === A.rank, () => `Error in fused conv2d: filter must be rank 4, but got rank ${A.rank}.`),
              f.s_('fused conv2d', g, w);
            const I = 'NHWC' === b ? k.shape[3] : k.shape[1];
            u.vA(A.shape[2] === I, () => `Error in conv2d: depth of input (${I}) must match input depth for filter ${A.shape[2]}.`),
              u.vA(f.G0(n, v), () => `Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${v}'`);
            const O = f.uf(k.shape, A.shape, n, v, g, w);
            let M, $;
            if (
              (null != T &&
                ((M = (0, i.YT)(T, 'bias', 'fused conv2d')),
                ([M] = (0, o.makeTypesMatch)(M, E)),
                'NHWC' === b
                  ? c.assertAndGetBroadcastShape(O.outShape, M.shape)
                  : (u.vA(M.shape.length <= 1, () => `Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${M.shape.length}.`),
                    u.vA(
                      0 === M.shape.length || M.shape[0] === O.outChannels || 1 === M.shape[0],
                      () => `Error in fused conv2d: bias shape (${M.shape}) is not compatible with the number of output channels (${O.outChannels})`,
                    ))),
              null != S)
            ) {
              const t = S.shape;
              if (
                (u.vA(
                  t.length <= 1 || 3 === t.length,
                  () => `Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${t.length}.`,
                ),
                1 === t.length)
              )
                u.vA(
                  1 === t[0] || t[0] === O.outChannels,
                  () => `Error in fused conv2d: PReLU activation weights (${t}) is not compatible with the number of output channels (${O.outChannels}).`,
                );
              else if (3 === t.length)
                try {
                  c.assertAndGetBroadcastShape(t, O.outShape);
                } catch (e) {
                  const n = `Error in fused conv2d: PReLU activation weights (${t}) is not compatible with the output shape of the conv2d (${O.outShape}).`;
                  throw Error(n);
                }
              $ = (0, i.YT)(S, 'prelu weights', 'fused conv2d');
            }
            const D = (t, e) => {
                u.vA('NHWC' === b, () => `Error in gradient of fused conv2D: got dataFormat of ${b} but only NHWC is currently supported.`);
                const [r, s, a, o] = e,
                  i = (0, m.XB)(t, a, x);
                u.vA(f.Dh(v), () => `Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${v}'`);
                const l = [(0, h.v)(s.shape, i, r, n, g), (0, d.H)(s, i, r.shape, n, g)];
                if (null != o) {
                  const t = (0, m.Do)(o, i);
                  l.push(t);
                }
                return l;
              },
              R = { x: k, filter: A, bias: M, preluActivationWeights: $ },
              F = { strides: n, pad: g, dataFormat: b, dilations: v, dimRoundingMode: w, activation: x, leakyreluAlpha: N };
            if (null == T) {
              const t = (0, s._X)((t, e, n) => {
                let s = r.T2.runKernel(a.aAr, R, F);
                return n([e, t, s]), _ && (s = (0, y.t)(s, [s.shape[1], s.shape[2], s.shape[3]])), { value: s, gradFunc: D };
              });
              return t(k, A);
            }
            {
              const t = (0, s._X)((t, e, n, s) => {
                let o = r.T2.runKernel(a.aAr, R, F);
                return s([e, t, o, n]), _ && (o = (0, y.t)(o, [o.shape[1], o.shape[2], o.shape[3]])), { value: o, gradFunc: D };
              });
              return t(k, A, M);
            }
          },
        });
      },
      91624: (t, e, n) => {
        'use strict';
        n.d(e, { G: () => b });
        var r = n(67897),
          s = n(31830),
          a = n(15441),
          o = n(30565),
          i = n(28189),
          u = n(45119),
          l = n(37523),
          c = n(62198),
          p = n(47195),
          d = n(10676),
          h = n(41890),
          f = n(83134),
          m = n(68646),
          g = n(70929),
          y = n(62302);
        const b = (0, g.op)({
          fusedDepthwiseConv2d_: function ({
            x: t,
            filter: e,
            strides: n,
            pad: g,
            dataFormat: b = 'NHWC',
            dilations: v = [1, 1],
            dimRoundingMode: w,
            bias: T,
            activation: x = 'linear',
            preluActivationWeights: S,
            leakyreluAlpha: N,
          }) {
            if (!1 === (0, m.zE)(r.T2.state.gradientDepth, x)) {
              let r = (0, d.G)(t, e, n, g, b, v, w);
              return null != T && (r = (0, l.W)(r, T)), (0, m.f2)(r, x, S, N);
            }
            const E = (0, i.YT)(t, 'x', 'depthwiseConv2d', 'float32'),
              A = (0, i.YT)(e, 'filter', 'depthwiseConv2d', 'float32');
            let k = E,
              _ = !1;
            3 === E.rank && ((_ = !0), (k = (0, y.t)(E, [1, E.shape[0], E.shape[1], E.shape[2]]))),
              u.vA(4 === k.rank, () => `Error in fused depthwiseConv2d: input must be rank 4, but got rank ${k.rank}.`),
              u.vA(4 === A.rank, () => `Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${A.rank}.`),
              u.vA(
                k.shape[3] === A.shape[2],
                () => `Error in fused depthwiseConv2d: number of input channels (${k.shape[3]}) must match the inChannels dimension in filter ${A.shape[2]}.`,
              ),
              null == v && (v = [1, 1]),
              u.vA(p.G0(n, v), () => `Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${v}'`),
              p.s_('fused depthwiseConv2d', g, w);
            const I = p.uf(k.shape, A.shape, n, v, g, w, !0);
            let O, M;
            null != T && ((O = (0, i.YT)(T, 'bias', 'fused conv2d')), ([O] = (0, o.makeTypesMatch)(O, E)), c.assertAndGetBroadcastShape(I.outShape, O.shape)),
              null != S && (M = (0, i.YT)(S, 'prelu weights', 'fused depthwiseConv2d'));
            const $ = (t, e) => {
                u.vA(p.Dh(v), () => `Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${v}'`);
                const [r, s, a, o] = e,
                  i = (0, m.XB)(t, a, x),
                  l = (0, f.l)(s.shape, i, r, n, g, v, w),
                  c = (0, h.x)(s, i, r.shape, n, g, v, w);
                return null != o ? [l, c, (0, m.Do)(O, i)] : [l, c];
              },
              D = { x: k, filter: A, bias: O, preluActivationWeights: M },
              R = { strides: n, pad: g, dataFormat: b, dilations: v, dimRoundingMode: w, activation: x, leakyreluAlpha: N };
            if (null == T) {
              const t = (0, s._X)((t, e, n) => {
                let s = r.T2.runKernel(a.T7M, D, R);
                return n([e, t, s]), _ && (s = (0, y.t)(s, [s.shape[1], s.shape[2], s.shape[3]])), { value: s, gradFunc: $ };
              });
              return t(k, A);
            }
            {
              const t = (0, s._X)((t, e, n, s) => {
                let o = r.T2.runKernel(a.T7M, D, R);
                return s([e, t, o, n]), _ && (o = (0, y.t)(o, [o.shape[1], o.shape[2], o.shape[3]])), { value: o, gradFunc: $ };
              });
              return t(k, A, O);
            }
          },
        });
      },
      30099: (t, e, n) => {
        'use strict';
        n.d(e, { N: () => m });
        var r = n(67897),
          s = n(31830),
          a = n(15441),
          o = n(30565),
          i = n(28189),
          u = n(45119),
          l = n(37523),
          c = n(62198),
          p = n(68646),
          d = n(65703),
          h = n(70929),
          f = n(62302);
        const m = (0, h.op)({
          fusedMatMul_: function ({ a: t, b: e, transposeA: n = !1, transposeB: h = !1, bias: m, activation: g = 'linear', preluActivationWeights: y, leakyreluAlpha: b = 0.2 }) {
            if (!1 === (0, p.zE)(r.T2.state.gradientDepth, g)) {
              let r = (0, d.N)(t, e, n, h);
              return null != m && (r = (0, l.W)(r, m)), (0, p.f2)(r, g, y, b);
            }
            let v = (0, i.YT)(t, 'a', 'fused matMul'),
              w = (0, i.YT)(e, 'b', 'fused matMul');
            [v, w] = (0, o.makeTypesMatch)(v, w);
            const T = n ? v.shape[v.rank - 2] : v.shape[v.rank - 1],
              x = h ? w.shape[w.rank - 1] : w.shape[w.rank - 2],
              S = n ? v.shape[v.rank - 1] : v.shape[v.rank - 2],
              N = h ? w.shape[w.rank - 2] : w.shape[w.rank - 1],
              E = v.shape.slice(0, -2),
              A = w.shape.slice(0, -2),
              k = u.Ze(E),
              _ = u.Ze(A);
            u.vA(
              T === x,
              () => `Error in fused matMul: inner shapes (${T}) and (${x}) of Tensors with shapes ${v.shape} and ${w.shape} and transposeA=${n} and transposeB=${h} must match.`,
            );
            const I = c.assertAndGetBroadcastShape(v.shape.slice(0, -2), w.shape.slice(0, -2)).concat([S, N]),
              O = n ? (0, f.t)(v, [k, T, S]) : (0, f.t)(v, [k, S, T]),
              M = h ? (0, f.t)(w, [_, N, x]) : (0, f.t)(w, [_, x, N]);
            let $, D;
            null != m && (($ = (0, i.YT)(m, 'bias', 'fused matMul')), ([$] = (0, o.makeTypesMatch)($, v)), c.assertAndGetBroadcastShape(I, $.shape)),
              null != y && (D = (0, i.YT)(y, 'prelu weights', 'fused matMul'));
            const R = (t, e) => {
                const [r, s, a, o] = e,
                  i = (0, p.XB)((0, f.t)(t, a.shape), a, g);
                let u, l;
                return (
                  n || h
                    ? !n && h
                      ? ((u = (0, d.N)(i, s, !1, !1)), (l = (0, d.N)(i, r, !0, !1)))
                      : n && !h
                        ? ((u = (0, d.N)(s, i, !1, !0)), (l = (0, d.N)(r, i, !1, !1)))
                        : ((u = (0, d.N)(s, i, !0, !0)), (l = (0, d.N)(i, r, !0, !0)))
                    : ((u = (0, d.N)(i, s, !1, !0)), (l = (0, d.N)(r, i, !0, !1))),
                  null != m ? [u, l, (0, p.Do)(o, i)] : [u, l]
                );
              },
              F = { a: O, b: M, bias: $, preluActivationWeights: D },
              B = { transposeA: n, transposeB: h, activation: g, leakyreluAlpha: b };
            if (null == m) {
              const t = (0, s._X)((t, e, n) => {
                const s = r.T2.runKernel(a.Dr, F, B);
                return n([t, e, s]), { value: (0, f.t)(s, I), gradFunc: R };
              });
              return t(O, M);
            }
            {
              const t = (0, s._X)((t, e, n, s) => {
                const o = r.T2.runKernel(a.Dr, F, B);
                return s([t, e, o, n]), { value: (0, f.t)(o, I), gradFunc: R };
              });
              return t(O, M, $);
            }
          },
        });
      },
      42164: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { conv2d: () => r.X, depthwiseConv2d: () => s.G, matMul: () => a.N });
        var r = n(93502),
          s = n(91624),
          a = n(30099);
      },
      68646: (t, e, n) => {
        'use strict';
        n.d(e, { Do: () => m, XB: () => f, f2: () => g, zE: () => y });
        var r = n(62198),
          s = n(83416),
          a = n(66919),
          o = n(9258),
          i = n(64394),
          u = n(90112),
          l = n(83732),
          c = n(62302),
          p = n(28968),
          d = n(10700),
          h = n(83791);
        function f(t, e, n) {
          if (null == n || 'linear' === n) return t;
          if ('relu' === n) return (0, o.l)(t, (0, d.P)(e));
          throw new Error(`Cannot compute gradient for fused activation ${n}.`);
        }
        function m(t, e) {
          let n = e;
          const s = r.getReductionAxes(t.shape, e.shape);
          return s.length > 0 && (n = (0, h.c)(n, s)), (0, c.t)(n, t.shape);
        }
        function g(t, e, n, r) {
          if ('linear' === e) return t;
          if ('relu' === e) return (0, u.V)(t);
          if ('elu' === e) return (0, s.P)(t);
          if ('relu6' === e) return (0, l.j)(t);
          if ('prelu' === e) return (0, i.N)(t, n);
          if ('leakyrelu' === e) return (0, a.H)(t, r);
          if ('sigmoid' === e) return (0, p.r)(t);
          throw new Error(`Unknown fused activation ${e}.`);
        }
        const y = (t, e) => !(t > 0) || 'linear' === e;
      },
      48229: (t, e, n) => {
        'use strict';
        n.d(e, { k: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          gather_: function (t, e, n = 0, o = 0) {
            const i = { x: (0, a.YT)(t, 'x', 'gather'), indices: (0, a.YT)(e, 'indices', 'gather', 'int32') },
              u = { axis: n, batchDims: o };
            return r.T2.runKernel(s.mxL, i, u);
          },
        });
      },
      55598: (t, e, n) => {
        'use strict';
        n.d(e, { S: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          gatherND_: function (t, e) {
            const n = (0, a.YT)(e, 'indices', 'gatherND', 'int32'),
              o = { params: (0, a.YT)(t, 'x', 'gatherND', 'string_or_numeric'), indices: n };
            return r.T2.runKernel(s.O4G, o);
          },
        });
      },
      83869: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { prepareAndValidate: () => s });
        var r = n(45119);
        function s(t, e) {
          const n = t.shape.length,
            s = e.shape.length;
          if (n < 1) throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);
          if (s < 1) throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);
          if ('int32' !== e.dtype) throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);
          if (e.shape[s - 1] > n) throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[s - 1]} vs. ${n}`);
          if (0 === (0, r.Ze)(t.shape)) throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${t.shape}.`);
          const a = e.shape,
            o = a[a.length - 1];
          let i = 1;
          for (let t = 0; t < a.length - 1; ++t) i *= a[t];
          const u = t.shape,
            l = a.slice();
          l.pop();
          let c = 1;
          for (let t = o; t < n; ++t) (c *= u[t]), l.push(u[t]);
          const p = [...(0, r.Ur)(t.shape).map((t) => t / c), 1].slice(0, o);
          return [l, i, c, p];
        }
      },
      62058: (t, e, n) => {
        'use strict';
        n.d(e, { r: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189),
          i = n(62198);
        const u = (0, n(70929).op)({
          greater_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'greater', 'string_or_numeric'),
              u = (0, o.YT)(e, 'b', 'greater', 'string_or_numeric');
            ([n, u] = (0, a.makeTypesMatch)(n, u)), (0, i.assertAndGetBroadcastShape)(n.shape, u.shape);
            const l = { a: n, b: u };
            return r.T2.runKernel(s.XhZ, l);
          },
        });
      },
      13337: (t, e, n) => {
        'use strict';
        n.d(e, { D: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189),
          i = n(62198);
        const u = (0, n(70929).op)({
          greaterEqual_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'greaterEqual', 'string_or_numeric'),
              u = (0, o.YT)(e, 'b', 'greaterEqual', 'string_or_numeric');
            ([n, u] = (0, a.makeTypesMatch)(n, u)), (0, i.assertAndGetBroadcastShape)(n.shape, u.shape);
            const l = { a: n, b: u };
            return r.T2.runKernel(s.lLS, l);
          },
        });
      },
      35040: (t, e, n) => {
        'use strict';
        n.d(e, { n: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          imag_: function (t) {
            const e = { input: (0, a.YT)(t, 'input', 'imag') };
            return r.T2.runKernel(s.dv8, e);
          },
        });
      },
      31951: (t, e, n) => {
        'use strict';
        n.d(e, { C: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          cropAndResize_: function (t, e, n, i, u = 'bilinear', l = 0) {
            const c = (0, a.YT)(t, 'image', 'cropAndResize'),
              p = (0, a.YT)(e, 'boxes', 'cropAndResize', 'float32'),
              d = (0, a.YT)(n, 'boxInd', 'cropAndResize', 'int32'),
              h = p.shape[0];
            o.vA(4 === c.rank, () => `Error in cropAndResize: image must be rank 4,but got rank ${c.rank}.`),
              o.vA(2 === p.rank && 4 === p.shape[1], () => `Error in cropAndResize: boxes must be have size [${h},4] but had shape ${p.shape}.`),
              o.vA(1 === d.rank && d.shape[0] === h, () => `Error in cropAndResize: boxInd must be have size [${h}] but had shape ${p.shape}.`),
              o.vA(2 === i.length, () => `Error in cropAndResize: cropSize must be of length 2, but got length ${i.length}.`),
              o.vA(i[0] >= 1 && i[1] >= 1, () => `cropSize must be atleast [1,1], but was ${i}`),
              o.vA('bilinear' === u || 'nearest' === u, () => `method must be bilinear or nearest, but was ${u}`);
            const f = { image: c, boxes: p, boxInd: d },
              m = { method: u, extrapolationValue: l, cropSize: i };
            return r.T2.runKernel(s.MRQ, f, m);
          },
        });
      },
      73866: (t, e, n) => {
        'use strict';
        n.d(e, { n: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          flipLeftRight_: function (t) {
            const e = (0, a.YT)(t, 'image', 'flipLeftRight', 'float32');
            o.vA(4 === e.rank, () => `Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);
            const n = { image: e };
            return r.T2.runKernel(s.BxF, n, {});
          },
        });
      },
      41477: (t, e, n) => {
        'use strict';
        n.d(e, { C: () => i });
        var r = n(28189),
          s = n(45119),
          a = n(70929),
          o = n(64826);
        const i = (0, a.op)({
          grayscaleToRGB_: function (t) {
            const e = (0, r.YT)(t, 'image', 'grayscaleToRGB'),
              n = e.rank - 1,
              a = e.shape[n];
            s.vA(e.rank >= 2, () => `Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),
              s.vA(1 === a, () => `Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${a}.`);
            const i = new Array(e.rank);
            return i.fill(1, 0, n), (i[n] = 3), (0, o.V)(e, i);
          },
        });
      },
      56248: (t, e, n) => {
        'use strict';
        n.d(e, { L: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(68712);
        const i = (0, n(70929).op)({
          nonMaxSuppression_: function (t, e, n, i = 0.5, u = Number.NEGATIVE_INFINITY) {
            const l = (0, a.YT)(t, 'boxes', 'nonMaxSuppression', 'float32'),
              c = (0, a.YT)(e, 'scores', 'nonMaxSuppression', 'float32'),
              p = (0, o.W)(l, c, n, i, u),
              d = { maxOutputSize: (n = p.maxOutputSize), iouThreshold: (i = p.iouThreshold), scoreThreshold: (u = p.scoreThreshold) };
            return r.T2.runKernel(s.SDM, { boxes: l, scores: c }, d);
          },
        });
      },
      70215: (t, e, n) => {
        'use strict';
        n.d(e, { z: () => i });
        var r = n(85472),
          s = n(28189),
          a = n(68712),
          o = n(62018);
        const i = async function (t, e, n, i = 0.5, u = Number.NEGATIVE_INFINITY) {
          const l = (0, s.YT)(t, 'boxes', 'nonMaxSuppressionAsync'),
            c = (0, s.YT)(e, 'scores', 'nonMaxSuppressionAsync'),
            p = (0, a.W)(l, c, n, i, u);
          (n = p.maxOutputSize), (i = p.iouThreshold), (u = p.scoreThreshold);
          const d = await Promise.all([l.data(), c.data()]),
            h = d[0],
            f = d[1],
            { selectedIndices: m } = (0, r.c7)(h, f, n, i, u);
          return l !== t && l.dispose(), c !== e && c.dispose(), (0, o.t)(m, 'int32');
        };
      },
      84305: (t, e, n) => {
        'use strict';
        n.d(e, { H: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(68712);
        const i = (0, n(70929).op)({
          nonMaxSuppressionPadded_: function (t, e, n, i = 0.5, u = Number.NEGATIVE_INFINITY, l = !1) {
            const c = (0, a.YT)(t, 'boxes', 'nonMaxSuppression'),
              p = (0, a.YT)(e, 'scores', 'nonMaxSuppression'),
              d = (0, o.W)(c, p, n, i, u, null),
              h = { boxes: c, scores: p },
              f = { maxOutputSize: d.maxOutputSize, iouThreshold: d.iouThreshold, scoreThreshold: d.scoreThreshold, padToMaxOutputSize: l },
              m = r.T2.runKernel(s.Zl4, h, f);
            return { selectedIndices: m[0], validOutputs: m[1] };
          },
        });
      },
      5902: (t, e, n) => {
        'use strict';
        n.d(e, { R: () => u });
        var r = n(85472),
          s = n(28189),
          a = n(68712),
          o = n(45702),
          i = n(62018);
        const u = async function (t, e, n, u = 0.5, l = Number.NEGATIVE_INFINITY, c = !1) {
          const p = (0, s.YT)(t, 'boxes', 'nonMaxSuppressionAsync'),
            d = (0, s.YT)(e, 'scores', 'nonMaxSuppressionAsync'),
            h = (0, a.W)(p, d, n, u, l, null),
            f = h.maxOutputSize,
            m = h.iouThreshold,
            g = h.scoreThreshold,
            [y, b] = await Promise.all([p.data(), d.data()]),
            { selectedIndices: v, validOutputs: w } = (0, r.ZS)(y, b, f, m, g, c);
          return p !== t && p.dispose(), d !== e && d.dispose(), { selectedIndices: (0, i.t)(v, 'int32'), validOutputs: (0, o.d)(w, 'int32') };
        };
      },
      95634: (t, e, n) => {
        'use strict';
        n.d(e, { f: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(68712);
        const i = (0, n(70929).op)({
          nonMaxSuppressionWithScore_: function (t, e, n, i = 0.5, u = Number.NEGATIVE_INFINITY, l = 0) {
            const c = (0, a.YT)(t, 'boxes', 'nonMaxSuppression'),
              p = (0, a.YT)(e, 'scores', 'nonMaxSuppression'),
              d = (0, o.W)(c, p, n, i, u, l),
              h = { boxes: c, scores: p },
              f = { maxOutputSize: (n = d.maxOutputSize), iouThreshold: (i = d.iouThreshold), scoreThreshold: (u = d.scoreThreshold), softNmsSigma: (l = d.softNmsSigma) },
              m = r.T2.runKernel(s.e0f, h, f);
            return { selectedIndices: m[0], selectedScores: m[1] };
          },
        });
      },
      7425: (t, e, n) => {
        'use strict';
        n.d(e, { l: () => i });
        var r = n(85472),
          s = n(28189),
          a = n(68712),
          o = n(62018);
        const i = async function (t, e, n, i = 0.5, u = Number.NEGATIVE_INFINITY, l = 0) {
          const c = (0, s.YT)(t, 'boxes', 'nonMaxSuppressionAsync'),
            p = (0, s.YT)(e, 'scores', 'nonMaxSuppressionAsync'),
            d = (0, a.W)(c, p, n, i, u, l);
          (n = d.maxOutputSize), (i = d.iouThreshold), (u = d.scoreThreshold), (l = d.softNmsSigma);
          const h = await Promise.all([c.data(), p.data()]),
            f = h[0],
            m = h[1],
            { selectedIndices: g, selectedScores: y } = (0, r.ut)(f, m, n, i, u, l);
          return c !== t && c.dispose(), p !== e && p.dispose(), { selectedIndices: (0, o.t)(g, 'int32'), selectedScores: (0, o.t)(y) };
        };
      },
      44711: (t, e, n) => {
        'use strict';
        n.d(e, { v: () => l });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(70929),
          u = n(62302);
        const l = (0, i.op)({
          resizeBilinear_: function (t, e, n = !1, i = !1) {
            const l = (0, a.YT)(t, 'images', 'resizeBilinear');
            o.vA(3 === l.rank || 4 === l.rank, () => `Error in resizeBilinear: x must be rank 3 or 4, but got rank ${l.rank}.`),
              o.vA(2 === e.length, () => `Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),
              o.vA(!1 === i || !1 === n, () => 'Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.');
            let c = l,
              p = !1;
            3 === l.rank && ((p = !0), (c = (0, u.t)(l, [1, l.shape[0], l.shape[1], l.shape[2]])));
            const [] = e,
              d = { images: c },
              h = { alignCorners: n, halfPixelCenters: i, size: e },
              f = r.T2.runKernel(s.hgw, d, h);
            return p ? (0, u.t)(f, [f.shape[1], f.shape[2], f.shape[3]]) : f;
          },
        });
      },
      42954: (t, e, n) => {
        'use strict';
        n.d(e, { b: () => l });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(70929),
          u = n(62302);
        const l = (0, i.op)({
          resizeNearestNeighbor_: function (t, e, n = !1, i = !1) {
            const l = (0, a.YT)(t, 'images', 'resizeNearestNeighbor');
            o.vA(3 === l.rank || 4 === l.rank, () => `Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${l.rank}.`),
              o.vA(2 === e.length, () => `Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),
              o.vA('float32' === l.dtype || 'int32' === l.dtype, () => '`images` must have `int32` or `float32` as dtype'),
              o.vA(!1 === i || !1 === n, () => 'Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.');
            let c = l,
              p = !1;
            3 === l.rank && ((p = !0), (c = (0, u.t)(l, [1, l.shape[0], l.shape[1], l.shape[2]])));
            const [] = e,
              d = { images: c },
              h = { alignCorners: n, halfPixelCenters: i, size: e },
              f = r.T2.runKernel(s.jOE, d, h);
            return p ? (0, u.t)(f, [f.shape[1], f.shape[2], f.shape[3]]) : f;
          },
        });
      },
      21557: (t, e, n) => {
        'use strict';
        n.d(e, { S: () => c });
        var r = n(28189),
          s = n(45119),
          a = n(29809),
          o = n(79853),
          i = n(8710),
          u = n(70929),
          l = n(62018);
        const c = (0, u.op)({
          rgbToGrayscale_: function (t) {
            const e = (0, r.YT)(t, 'image', 'RGBToGrayscale'),
              n = e.rank - 1,
              u = e.shape[n];
            s.vA(e.rank >= 2, () => `Error in RGBToGrayscale: images must be at least rank 2, but got rank ${e.rank}.`),
              s.vA(3 === u, () => `Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${u}.`);
            const c = e.dtype,
              p = (0, a.w)(e, 'float32'),
              d = (0, l.t)([0.2989, 0.587, 0.114]);
            let h;
            switch (e.rank) {
              case 2:
                h = (0, o._)('ij,j->i', p, d);
                break;
              case 3:
                h = (0, o._)('ijk,k->ij', p, d);
                break;
              case 4:
                h = (0, o._)('ijkl,l->ijk', p, d);
                break;
              case 5:
                h = (0, o._)('ijklm,m->ijkl', p, d);
                break;
              case 6:
                h = (0, o._)('ijklmn,n->ijklm', p, d);
                break;
              default:
                throw new Error('Not a valid tensor rank.');
            }
            return (h = (0, i.U)(h, -1)), (0, a.w)(h, c);
          },
        });
      },
      64658: (t, e, n) => {
        'use strict';
        n.d(e, { x: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          rotateWithOffset_: function (t, e, n = 0, i = 0.5) {
            const u = (0, a.YT)(t, 'image', 'rotateWithOffset', 'float32');
            o.vA(4 === u.rank, () => `Error in rotateWithOffset: image must be rank 4,but got rank ${u.rank}.`);
            const l = { image: u },
              c = { radians: e, fillValue: n, center: i };
            return r.T2.runKernel(s.BK4, l, c);
          },
        });
      },
      80525: (t, e, n) => {
        'use strict';
        n.d(e, { E: () => S });
        var r = n(62018),
          s = n(70929),
          a = n(29809),
          o = n(66512),
          i = n(40758),
          u = n(56508),
          l = n(62058),
          c = n(83791),
          p = n(37523),
          d = n(9258),
          h = n(89359),
          f = n(77126),
          m = n(25912),
          g = n(12151),
          y = n(96111),
          b = n(17986),
          v = n(44645),
          w = n(74027),
          T = n(45119),
          x = n(28189);
        const S = (0, s.op)({
          threshold_: function (t, e = 'binary', n = !1, s = 0.5) {
            const S = (0, x.YT)(t, 'image', 'threshold'),
              N = S.shape[0] * S.shape[1];
            let E,
              A,
              k,
              _,
              I = (0, d.l)((0, r.t)([s]), 255);
            if (
              (T.vA(3 === S.rank, () => `Error in threshold: image must be rank 3,but got rank ${S.rank}.`),
              T.vA(3 === S.shape[2] || 1 === S.shape[2], () => `Error in threshold: image color channel must be equal to 3 or 1but got ${S.shape[2]}.`),
              T.vA('int32' === S.dtype || 'float32' === S.dtype, () => `Error in dtype: image dtype must be int32 or float32,but got dtype ${S.dtype}.`),
              T.vA('otsu' === e || 'binary' === e, () => `Method must be binary or otsu, but was ${e}`),
              3 === S.shape[2])
            ) {
              [E, A, k] = (0, o.l)(S, [1, 1, 1], -1);
              const t = (0, d.l)(E, 0.2989),
                e = (0, d.l)(A, 0.587),
                n = (0, d.l)(k, 0.114);
              _ = (0, p.W)((0, p.W)(t, e), n);
            } else _ = t;
            'otsu' === e &&
              (I = (function (t, e) {
                let n,
                  s,
                  a,
                  o,
                  i,
                  u,
                  m = (0, r.t)([-1]),
                  w = (0, r.t)([0]),
                  T = (0, r.t)([0]);
                for (let x = 0; x < t.size - 1; x++) {
                  (n = (0, b.d)(t, 0, x + 1)), (s = (0, b.d)(t, x + 1)), (i = (0, h.y)((0, c.c)(n), e)), (u = (0, h.y)((0, c.c)(s), e));
                  const S = (0, c.c)((0, d.l)(n, (0, v.y)(0, n.size)));
                  a = (0, h.y)(S, (0, c.c)(n));
                  const N = (0, y.G)(s.shape, n.size),
                    E = (0, p.W)((0, v.y)(0, s.size), N),
                    A = (0, d.l)(s, E);
                  o = (0, h.y)((0, c.c)(A), (0, c.c)(s));
                  const k = (0, f.j)(a, o),
                    _ = (0, f.j)(a, o),
                    I = (0, d.l)(i, u);
                  T = (0, d.l)((0, d.l)(I, k), _);
                  const O = (0, l.r)(T, w);
                  (w = (0, g._)(O, T, w)), (m = (0, g._)(O, (0, r.t)([x]), m));
                }
                return m;
              })((0, i.H)((0, a.w)((0, m.L)(_), 'int32'), (0, w.O)([]), 256), N));
            const O = n ? (0, u.I)(_, I) : (0, l.r)(_, I);
            return (0, a.w)((0, d.l)(O, 255), 'int32');
          },
        });
      },
      1242: (t, e, n) => {
        'use strict';
        n.d(e, { p: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          transform_: function (t, e, n = 'nearest', i = 'constant', u = 0, l) {
            const c = (0, a.YT)(t, 'image', 'transform', 'float32'),
              p = (0, a.YT)(e, 'transforms', 'transform', 'float32');
            o.vA(4 === c.rank, () => `Error in transform: image must be rank 4,but got rank ${c.rank}.`),
              o.vA(2 === p.rank && (p.shape[0] === c.shape[0] || 1 === p.shape[0]) && 8 === p.shape[1], () => 'Error in transform: Input transform should be batch x 8 or 1 x 8'),
              o.vA(null == l || 2 === l.length, () => `Error in transform: outputShape must be [height, width] or null, but got ${l}.`);
            const d = { image: c, transforms: p },
              h = { interpolation: n, fillMode: i, fillValue: u, outputShape: l };
            return r.T2.runKernel(s.dLy, d, h);
          },
        });
      },
      5323: (t, e, n) => {
        'use strict';
        n.d(e, { U: () => o });
        var r = n(28189),
          s = n(45119),
          a = n(74027);
        const o = async function (t, e, n = 1) {
          const o = (0, r.YT)(t, 'predictions', 'inTopK'),
            i = (0, r.YT)(e, 'targets', 'inTopK');
          (0, s.vA)(o.rank > 1, () => `inTopK() expects the predictions to be of rank 2 or higher, but got ${o.rank}`),
            (0, s.vA)(o.rank - 1 === i.rank, () => `predictions rank should be 1 larger than targets rank, but got predictions rank ${o.rank} and targets rank ${i.rank}`),
            (0, s.O3)(o.shape.slice(0, o.shape.length - 1), i.shape, "predictions's shape should be align with the targets' shape, except the last dimension.");
          const u = o.shape[o.shape.length - 1];
          (0, s.vA)(n > 0 && n <= u, () => `'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${u}), but got ${n}`);
          const l = await o.data(),
            c = await i.data(),
            [p, d] = [l.length / u, u],
            h = (0, s.ce)('bool', p);
          for (let t = 0; t < p; t++) {
            const e = t * d,
              r = l.subarray(e, e + d),
              s = [];
            for (let t = 0; t < r.length; t++) s.push({ value: r[t], index: t });
            s.sort((t, e) => e.value - t.value), (h[t] = 0);
            for (let e = 0; e < n; e++)
              if (s[e].index === c[t]) {
                h[t] = 1;
                break;
              }
          }
          return t !== o && o.dispose(), e !== i && i.dispose(), (0, a.O)(h, i.shape, 'bool');
        };
      },
      68318: (t, e, n) => {
        'use strict';
        n.d(e, { M: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          isFinite_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'isFinite') };
            return r.T2.runKernel(s.gIW, e);
          },
        });
      },
      33454: (t, e, n) => {
        'use strict';
        n.d(e, { E: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          isInf_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'isInf') };
            return r.T2.runKernel(s.E3$, e);
          },
        });
      },
      6300: (t, e, n) => {
        'use strict';
        n.d(e, { y: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          isNaN_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'isNaN') };
            return r.T2.runKernel(s.iPs, e);
          },
        });
      },
      66919: (t, e, n) => {
        'use strict';
        n.d(e, { H: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          leakyRelu_: function (t, e = 0.2) {
            const n = { x: (0, a.YT)(t, 'x', 'leakyRelu') },
              o = { alpha: e };
            return r.T2.runKernel(s.X0$, n, o);
          },
        });
      },
      61303: (t, e, n) => {
        'use strict';
        n.d(e, { M: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189),
          i = n(62198);
        const u = (0, n(70929).op)({
          less_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'less', 'string_or_numeric'),
              u = (0, o.YT)(e, 'b', 'less', 'string_or_numeric');
            ([n, u] = (0, a.makeTypesMatch)(n, u)), (0, i.assertAndGetBroadcastShape)(n.shape, u.shape);
            const l = { a: n, b: u };
            return r.T2.runKernel(s.mIA, l);
          },
        });
      },
      56508: (t, e, n) => {
        'use strict';
        n.d(e, { I: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189),
          i = n(62198);
        const u = (0, n(70929).op)({
          lessEqual_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'lessEqual', 'string_or_numeric'),
              u = (0, o.YT)(e, 'b', 'lessEqual', 'string_or_numeric');
            ([n, u] = (0, a.makeTypesMatch)(n, u)), (0, i.assertAndGetBroadcastShape)(n.shape, u.shape);
            const l = { a: n, b: u };
            return r.T2.runKernel(s.CwD, l);
          },
        });
      },
      36359: (t, e, n) => {
        'use strict';
        n.d(e, { x: () => v });
        var r = n(28189),
          s = n(45119),
          a = n(13337),
          o = n(61303),
          i = n(56508),
          u = n(13789),
          l = n(12644),
          c = n(96522),
          p = n(70929),
          d = n(44645),
          h = n(62302),
          f = n(54268),
          m = n(77126),
          g = n(67261),
          y = n(12151),
          b = n(42855);
        const v = (0, p.op)({
          bandPart_: function (t, e, n) {
            const p = (0, r.YT)(t, 'a', 'bandPart');
            (0, s.vA)(p.rank >= 2, () => `bandPart(): Rank must be at least 2, got ${p.rank}.`);
            const v = p.shape,
              [w, T] = p.shape.slice(-2);
            let x, S;
            'number' == typeof e
              ? ((0, s.vA)(e % 1 == 0, () => `bandPart(): numLower must be an integer, got ${e}.`),
                (0, s.vA)(e <= w, () => `bandPart(): numLower (${e}) must not be greater than the number of rows (${w}).`),
                (x = (0, r.YT)(e < 0 ? w : e, 'numLower', 'bandPart')))
              : ((0, s.vA)('int32' === e.dtype, () => "bandPart(): numLower's dtype must be an int32."), (x = (0, y._)((0, o.M)(e, 0), w, (0, l.B)(e, w)))),
              'number' == typeof n
                ? ((0, s.vA)(n % 1 == 0, () => `bandPart(): numUpper must be an integer, got ${n}.`),
                  (0, s.vA)(n <= T, () => `bandPart(): numUpper (${n}) must not be greater than the number of columns (${T}).`),
                  (S = (0, r.YT)(n < 0 ? T : n, 'numUpper', 'bandPart')))
                : ((0, s.vA)('int32' === n.dtype, () => "bandPart(): numUpper's dtype must be an int32."), (S = (0, y._)((0, o.M)(n, 0), T, (0, l.B)(n, T))));
            const N = (0, h.t)((0, d.y)(0, w, 1, 'int32'), [-1, 1]),
              E = (0, d.y)(0, T, 1, 'int32'),
              A = (0, m.j)(N, E),
              k = (0, u.n)((0, i.I)(A, x), (0, a.D)(A, (0, c.H)(S))),
              _ = (0, b.U)([w, T], p.dtype);
            return (0, h.t)((0, f.t)((0, g.K)((0, h.t)(p, [-1, w, T])).map((t) => (0, y._)(k, t, _))), v);
          },
        });
      },
      76304: (t, e, n) => {
        'use strict';
        n.d(e, { i: () => f });
        var r = n(67897),
          s = n(45119),
          a = n(89359),
          o = n(9258),
          i = n(92596),
          u = n(70929),
          l = n(66512),
          c = n(5932),
          p = n(54268),
          d = n(77126),
          h = n(83791);
        const f = (0, u.op)({
          gramSchmidt_: function (t) {
            let e;
            if (Array.isArray(t)) {
              (e = !1), (0, s.vA)(null != t && t.length > 0, () => 'Gram-Schmidt process: input must not be null, undefined, or empty');
              const n = t[0].shape[0];
              for (let e = 1; e < t.length; ++e) (0, s.vA)(t[e].shape[0] === n, () => `Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[e].shape[0]} vs. ${n})`);
            } else (e = !0), (t = (0, l.l)(t, t.shape[0], 0).map((t) => (0, c.r)(t, [0])));
            (0, s.vA)(t.length <= t[0].shape[0], () => `Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`);
            const n = [],
              u = t;
            for (let e = 0; e < t.length; ++e)
              n.push(
                r.T2.tidy(() => {
                  let t = u[e];
                  if (e > 0)
                    for (let r = 0; r < e; ++r) {
                      const e = (0, o.l)((0, h.c)((0, o.l)(n[r], t)), n[r]);
                      t = (0, d.j)(t, e);
                    }
                  return (0, a.y)(t, (0, i.x)(t, 'euclidean'));
                }),
              );
            return e ? (0, p.t)(n, 0) : n;
          },
        });
      },
      1211: (t, e, n) => {
        'use strict';
        n.d(e, { qr: () => E });
        var r = n(67897),
          s = n(35287),
          a = n(45119),
          o = n(70125),
          i = n(25030),
          u = n(89359),
          l = n(53621),
          c = n(62058),
          p = n(65703),
          d = n(9258),
          h = n(96522),
          f = n(92596),
          m = n(70929),
          g = n(62302),
          y = n(17986),
          b = n(54268),
          v = n(77126),
          w = n(18941),
          T = n(7703),
          x = n(67261),
          S = n(12151);
        function N(t, e = !1) {
          return r.T2.tidy(() => {
            (0, a.vA)(2 === t.shape.length, () => `qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`);
            const n = t.shape[0],
              m = t.shape[1];
            let g = (0, l.y)(n),
              b = (0, o.o)(t);
            const x = (0, w.K)([[1]], [1, 1]);
            let N = (0, o.o)(x);
            const E = n >= m ? m : n;
            for (let t = 0; t < E; ++t) {
              const e = b,
                a = N,
                l = g;
              ([N, b, g] = r.T2.tidy(() => {
                const e = (0, y.d)(b, [t, t], [n - t, 1]),
                  r = (0, f.x)(e),
                  s = (0, y.d)(b, [t, t], [1, 1]),
                  a = (0, S._)((0, c.r)(s, 0), (0, w.K)([[-1]]), (0, w.K)([[1]])),
                  l = (0, v.j)(s, (0, d.l)(a, r)),
                  E = (0, u.y)(e, l);
                N = 1 === E.shape[0] ? (0, o.o)(x) : (0, i.x)([x, (0, y.d)(E, [1, 0], [E.shape[0] - 1, E.shape[1]])], 0);
                const A = (0, h.H)((0, u.y)((0, p.N)(a, l), r)),
                  k = (0, y.d)(b, [t, 0], [n - t, m]),
                  _ = (0, d.l)(A, N),
                  I = (0, T.m)(N);
                if (0 === t) b = (0, v.j)(k, (0, p.N)(_, (0, p.N)(I, k)));
                else {
                  const e = (0, v.j)(k, (0, p.N)(_, (0, p.N)(I, k)));
                  b = (0, i.x)([(0, y.d)(b, [0, 0], [t, m]), e], 0);
                }
                const O = (0, T.m)(_),
                  M = (0, y.d)(g, [0, t], [n, g.shape[1] - t]);
                if (0 === t) g = (0, v.j)(M, (0, p.N)((0, p.N)(M, N), O));
                else {
                  const e = (0, v.j)(M, (0, p.N)((0, p.N)(M, N), O));
                  g = (0, i.x)([(0, y.d)(g, [0, 0], [n, t]), e], 1);
                }
                return [N, b, g];
              })),
                (0, s.AS)([e, a, l]);
            }
            return !e && n > m && ((g = (0, y.d)(g, [0, 0], [n, m])), (b = (0, y.d)(b, [0, 0], [m, m]))), [g, b];
          });
        }
        const E = (0, m.op)({
          qr_: function (t, e = !1) {
            if (((0, a.vA)(t.rank >= 2, () => `qr() requires input tensor to have a rank >= 2, but got rank ${t.rank}`), 2 === t.rank)) return N(t, e);
            {
              const n = t.shape.slice(0, t.shape.length - 2).reduce((t, e) => t * e),
                r = (0, x.K)((0, g.t)(t, [n, t.shape[t.shape.length - 2], t.shape[t.shape.length - 1]]), 0),
                s = [],
                a = [];
              return (
                r.forEach((t) => {
                  const [n, r] = N(t, e);
                  s.push(n), a.push(r);
                }),
                [(0, g.t)((0, b.t)(s, 0), t.shape), (0, g.t)((0, b.t)(a, 0), t.shape)]
              );
            }
          },
        });
      },
      46545: (t, e, n) => {
        'use strict';
        n.d(e, { m: () => a });
        var r = n(67897),
          s = n(15441);
        function a(t, e, n) {
          if (n <= 0) throw new Error('The number of values should be positive.');
          const a = { start: t, stop: e, num: n };
          return r.T2.runKernel(s.mnI, {}, a);
        }
      },
      93531: (t, e, n) => {
        'use strict';
        n.d(e, { K: () => l });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(70929),
          u = n(62302);
        const l = (0, i.op)({
          localResponseNormalization_: function (t, e = 5, n = 1, i = 1, l = 0.5) {
            const c = (0, a.YT)(t, 'x', 'localResponseNormalization');
            o.vA(4 === c.rank || 3 === c.rank, () => `Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ${c.rank}.`),
              o.vA(o.E6(e), () => `Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);
            let p = c,
              d = !1;
            3 === c.rank && ((d = !0), (p = (0, u.t)(c, [1, c.shape[0], c.shape[1], c.shape[2]])));
            const h = { x: p },
              f = { depthRadius: e, bias: n, alpha: i, beta: l },
              m = r.T2.runKernel(s.jM4, h, f);
            return d ? (0, u.t)(m, [m.shape[1], m.shape[2], m.shape[3]]) : m;
          },
        });
      },
      44010: (t, e, n) => {
        'use strict';
        n.d(e, { R: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          log_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'log', 'float32') };
            return r.T2.runKernel(s.tG8, e);
          },
        });
      },
      12015: (t, e, n) => {
        'use strict';
        n.d(e, { K: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          log1p_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'log1p') };
            return r.T2.runKernel(s.Cg$, e);
          },
        });
      },
      95645: (t, e, n) => {
        'use strict';
        n.d(e, { n: () => c });
        var r = n(31830),
          s = n(28189),
          a = n(9258),
          o = n(96522),
          i = n(70929),
          u = n(28968),
          l = n(66030);
        const c = (0, i.op)({
          logSigmoid_: function (t) {
            const e = (0, s.YT)(t, 'x', 'logSigmoid');
            return (0, r._X)((t) => ({ value: (0, o.H)((0, l.l)((0, o.H)(t))), gradFunc: (e) => (0, a.l)(e, (0, u.r)((0, o.H)(t))) }))(e);
          },
        });
      },
      97991: (t, e, n) => {
        'use strict';
        n.d(e, { H: () => h });
        var r = n(31830),
          s = n(28189),
          a = n(29809),
          o = n(8631),
          i = n(44010),
          u = n(41938),
          l = n(9258),
          c = n(70929),
          p = n(77126),
          d = n(83791);
        const h = (0, c.op)({
          logSoftmax_: function (t, e = -1) {
            const n = (0, s.YT)(t, 'logits', 'logSoftmax');
            if ((-1 === e && (e = n.rank - 1), e !== n.rank - 1))
              throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${e}`);
            return (0, r._X)((t, n) => {
              const r = (0, u.T)(t, e, !0),
                s = (0, p.j)(t, r),
                c = (0, p.j)((0, a.w)(s, 'float32'), (0, i.R)((0, d.c)((0, o.o)(s), e, !0)));
              return (
                n([c]),
                {
                  value: c,
                  gradFunc: (t, n) => {
                    const [r] = n,
                      s = (0, o.o)(r);
                    return (0, p.j)(t, (0, l.l)((0, d.c)(t, e, !0), s));
                  },
                }
              );
            })(n);
          },
        });
      },
      13330: (t, e, n) => {
        'use strict';
        n.d(e, { V: () => f });
        var r = n(28189),
          s = n(45119),
          a = n(37523),
          o = n(21078),
          i = n(8631),
          u = n(44010),
          l = n(41938),
          c = n(70929),
          p = n(62302),
          d = n(77126),
          h = n(83791);
        const f = (0, c.op)({
          logSumExp_: function (t, e = null, n = !1) {
            const c = (0, r.YT)(t, 'x', 'logSumExp'),
              f = (0, s.Y6)(e, c.shape),
              m = (0, l.T)(c, f, !0),
              g = (0, d.j)(c, m),
              y = (0, i.o)(g),
              b = (0, h.c)(y, f),
              v = (0, u.R)(b),
              w = (0, a.W)((0, p.t)(m, v.shape), v);
            if (n) {
              const t = (0, o.SM)(w.shape, f);
              return (0, p.t)(w, t);
            }
            return w;
          },
        });
      },
      13789: (t, e, n) => {
        'use strict';
        n.d(e, { n: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(62198);
        const i = (0, n(70929).op)({
          logicalAnd_: function (t, e) {
            const n = (0, a.YT)(t, 'a', 'logicalAnd', 'bool'),
              i = (0, a.YT)(e, 'b', 'logicalAnd', 'bool');
            (0, o.assertAndGetBroadcastShape)(n.shape, i.shape);
            const u = { a: n, b: i };
            return r.T2.runKernel(s.RUm, u);
          },
        });
      },
      89881: (t, e, n) => {
        'use strict';
        n.d(e, { N: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          logicalNot_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'logicalNot', 'bool') };
            return r.T2.runKernel(s.nZd, e);
          },
        });
      },
      9879: (t, e, n) => {
        'use strict';
        n.d(e, { z: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(62198);
        const i = (0, n(70929).op)({
          logicalOr_: function (t, e) {
            const n = (0, a.YT)(t, 'a', 'logicalOr', 'bool'),
              i = (0, a.YT)(e, 'b', 'logicalOr', 'bool');
            (0, o.assertAndGetBroadcastShape)(n.shape, i.shape);
            const u = { a: n, b: i };
            return r.T2.runKernel(s.LXA, u);
          },
        });
      },
      19925: (t, e, n) => {
        'use strict';
        n.d(e, { r: () => u });
        var r = n(28189),
          s = n(62198),
          a = n(13789),
          o = n(89881),
          i = n(9879);
        const u = (0, n(70929).op)({
          logicalXor_: function (t, e) {
            const n = (0, r.YT)(t, 'a', 'logicalXor', 'bool'),
              u = (0, r.YT)(e, 'b', 'logicalXor', 'bool');
            return (0, s.assertAndGetBroadcastShape)(n.shape, u.shape), (0, a.n)((0, i.z)(t, e), (0, o.N)((0, a.n)(t, e)));
          },
        });
      },
      27084: (t, e, n) => {
        'use strict';
        var r;
        n.d(e, { i: () => r }),
          (function (t) {
            (t[(t.NONE = 0)] = 'NONE'), (t[(t.MEAN = 1)] = 'MEAN'), (t[(t.SUM = 2)] = 'SUM'), (t[(t.SUM_BY_NONZERO_WEIGHTS = 3)] = 'SUM_BY_NONZERO_WEIGHTS');
          })(r || (r = {}));
      },
      89535: (t, e, n) => {
        'use strict';
        n.d(e, { n: () => c });
        var r = n(28189),
          s = n(45119),
          a = n(4888),
          o = n(27084),
          i = n(70929),
          u = n(77126),
          l = n(69533);
        const c = (0, i.op)({
          absoluteDifference_: function (t, e, n, i = o.i.SUM_BY_NONZERO_WEIGHTS) {
            const c = (0, r.YT)(t, 'labels', 'absoluteDifference'),
              p = (0, r.YT)(e, 'predictions', 'absoluteDifference');
            let d = null;
            null != n && (d = (0, r.YT)(n, 'weights', 'absoluteDifference')), (0, s.O3)(c.shape, p.shape, 'Error in absoluteDifference: ');
            const h = (0, a.t)((0, u.j)(c, p));
            return (0, l.M)(h, d, i);
          },
        });
      },
      69533: (t, e, n) => {
        'use strict';
        n.d(e, { M: () => f });
        var r = n(28189),
          s = n(29809),
          a = n(89359),
          o = n(27084),
          i = n(12611),
          u = n(9258),
          l = n(42118),
          c = n(61411),
          p = n(70929),
          d = n(45702),
          h = n(83791);
        const f = (0, p.op)({
          computeWeightedLoss_: function (t, e, n = o.i.SUM_BY_NONZERO_WEIGHTS) {
            const p = (0, r.YT)(t, 'losses', 'computeWeightedLoss');
            let f = null;
            null != e && (f = (0, r.YT)(e, 'weights', 'computeWeightedLoss'));
            const m = null == f ? p : (0, u.l)(p, f);
            if (n === o.i.NONE) return m;
            if (n === o.i.SUM) return (0, h.c)(m);
            if (n === o.i.MEAN) {
              if (null == f) return (0, i.i)(m);
              {
                const t = p.size / f.size,
                  e = (0, a.y)((0, h.c)(m), (0, h.c)(f));
                return t > 1 ? (0, a.y)(e, (0, d.d)(t)) : e;
              }
            }
            if (n === o.i.SUM_BY_NONZERO_WEIGHTS) {
              if (null == f) return (0, a.y)((0, h.c)(m), (0, d.d)(p.size));
              {
                const t = (0, u.l)(f, (0, c.S)(p.shape)),
                  e = (0, s.w)((0, h.c)((0, l.E)(t, (0, d.d)(0))), 'float32');
                return (0, a.y)((0, h.c)(m), e);
              }
            }
            throw Error(`Unknown reduction: ${n}`);
          },
        });
      },
      39417: (t, e, n) => {
        'use strict';
        n.d(e, { l: () => d });
        var r = n(28189),
          s = n(45119),
          a = n(27084),
          o = n(9258),
          i = n(70929),
          u = n(45702),
          l = n(77126),
          c = n(83791),
          p = n(69533);
        const d = (0, i.op)({
          cosineDistance_: function (t, e, n, i, d = a.i.SUM_BY_NONZERO_WEIGHTS) {
            const h = (0, r.YT)(t, 'labels', 'cosineDistance'),
              f = (0, r.YT)(e, 'predictions', 'cosineDistance');
            let m = null;
            null != i && (m = (0, r.YT)(i, 'weights', 'cosineDistance')), (0, s.O3)(h.shape, f.shape, 'Error in cosineDistance: ');
            const g = (0, u.d)(1),
              y = (0, l.j)(g, (0, c.c)((0, o.l)(h, f), n, !0));
            return (0, p.M)(y, m, d);
          },
        });
      },
      70327: (t, e, n) => {
        'use strict';
        n.d(e, { Z: () => d });
        var r = n(28189),
          s = n(45119),
          a = n(27084),
          o = n(9258),
          i = n(70929),
          u = n(90112),
          l = n(45702),
          c = n(77126),
          p = n(69533);
        const d = (0, i.op)({
          hingeLoss_: function (t, e, n, i = a.i.SUM_BY_NONZERO_WEIGHTS) {
            let d = (0, r.YT)(t, 'labels', 'hingeLoss');
            const h = (0, r.YT)(e, 'predictions', 'hingeLoss');
            let f = null;
            null != n && (f = (0, r.YT)(n, 'weights', 'hingeLoss')), (0, s.O3)(d.shape, h.shape, 'Error in hingeLoss: ');
            const m = (0, l.d)(1);
            d = (0, c.j)((0, o.l)((0, l.d)(2), d), m);
            const g = (0, u.V)((0, c.j)(m, (0, o.l)(d, h)));
            return (0, p.M)(g, f, i);
          },
        });
      },
      40718: (t, e, n) => {
        'use strict';
        n.d(e, { c: () => m });
        var r = n(28189),
          s = n(45119),
          a = n(4888),
          o = n(37523),
          i = n(27084),
          u = n(12644),
          l = n(9258),
          c = n(70929),
          p = n(45702),
          d = n(45793),
          h = n(77126),
          f = n(69533);
        const m = (0, c.op)({
          huberLoss_: function (t, e, n, c = 1, m = i.i.SUM_BY_NONZERO_WEIGHTS) {
            const g = (0, r.YT)(t, 'labels', 'huberLoss'),
              y = (0, r.YT)(e, 'predictions', 'huberLoss');
            let b = null;
            null != n && (b = (0, r.YT)(n, 'weights', 'huberLoss')), (0, s.O3)(g.shape, y.shape, 'Error in huberLoss: ');
            const v = (0, p.d)(c),
              w = (0, a.t)((0, h.j)(y, g)),
              T = (0, u.B)(w, v),
              x = (0, h.j)(w, T),
              S = (0, o.W)((0, l.l)((0, p.d)(0.5), (0, d.E)(T)), (0, l.l)(v, x));
            return (0, f.M)(S, b, m);
          },
        });
      },
      21780: (t, e, n) => {
        'use strict';
        n.d(e, { _: () => f });
        var r = n(28189),
          s = n(45119),
          a = n(37523),
          o = n(44010),
          i = n(27084),
          u = n(9258),
          l = n(96522),
          c = n(70929),
          p = n(45702),
          d = n(77126),
          h = n(69533);
        const f = (0, c.op)({
          logLoss_: function (t, e, n, c = 1e-7, f = i.i.SUM_BY_NONZERO_WEIGHTS) {
            const m = (0, r.YT)(t, 'labels', 'logLoss'),
              g = (0, r.YT)(e, 'predictions', 'logLoss');
            let y = null;
            null != n && (y = (0, r.YT)(n, 'weights', 'logLoss')), (0, s.O3)(m.shape, g.shape, 'Error in logLoss: ');
            const b = (0, p.d)(1),
              v = (0, p.d)(c),
              w = (0, l.H)((0, u.l)(m, (0, o.R)((0, a.W)(g, v)))),
              T = (0, u.l)((0, d.j)(b, m), (0, o.R)((0, a.W)((0, d.j)(b, g), v))),
              x = (0, d.j)(w, T);
            return (0, h.M)(x, y, f);
          },
        });
      },
      22150: (t, e, n) => {
        'use strict';
        n.d(e, { b: () => l });
        var r = n(28189),
          s = n(45119),
          a = n(27084),
          o = n(70929),
          i = n(53427),
          u = n(69533);
        const l = (0, o.op)({
          meanSquaredError_: function (t, e, n, o = a.i.SUM_BY_NONZERO_WEIGHTS) {
            const l = (0, r.YT)(t, 'labels', 'meanSquaredError'),
              c = (0, r.YT)(e, 'predictions', 'meanSquaredError');
            let p = null;
            null != n && (p = (0, r.YT)(n, 'weights', 'meanSquaredError')), (0, s.O3)(l.shape, c.shape, 'Error in meanSquaredError: ');
            const d = (0, i.P)(l, c);
            return (0, u.M)(d, p, o);
          },
        });
      },
      58687: (t, e, n) => {
        'use strict';
        n.d(e, { k: () => y });
        var r = n(28189),
          s = n(45119),
          a = n(4888),
          o = n(37523),
          i = n(8631),
          u = n(12015),
          l = n(27084),
          c = n(9258),
          p = n(96522),
          d = n(70929),
          h = n(90112),
          f = n(45702),
          m = n(77126),
          g = n(69533);
        const y = (0, d.op)({
          sigmoidCrossEntropy_: function (t, e, n, d = 0, y = l.i.SUM_BY_NONZERO_WEIGHTS) {
            let b = (0, r.YT)(t, 'multiClassLabels', 'sigmoidCrossEntropy');
            const v = (0, r.YT)(e, 'logits', 'sigmoidCrossEntropy');
            let w = null;
            if ((null != n && (w = (0, r.YT)(n, 'weights', 'sigmoidCrossEntropy')), (0, s.O3)(b.shape, v.shape, 'Error in sigmoidCrossEntropy: '), d > 0)) {
              const t = (0, f.d)(d),
                e = (0, f.d)(1),
                n = (0, f.d)(0.5);
              b = (0, o.W)((0, c.l)(b, (0, m.j)(e, t)), (0, c.l)(n, t));
            }
            const T = (function (t, e) {
              const n = (0, r.YT)(t, 'labels', 'sigmoidCrossEntropyWithLogits'),
                l = (0, r.YT)(e, 'logits', 'sigmoidCrossEntropyWithLogits');
              (0, s.O3)(n.shape, l.shape, 'Error in sigmoidCrossEntropyWithLogits: ');
              const d = (0, h.V)(l),
                f = (0, c.l)(l, n),
                g = (0, u.K)((0, i.o)((0, p.H)((0, a.t)(l))));
              return (0, o.W)((0, m.j)(d, f), g);
            })(b, v);
            return (0, g.M)(T, w, y);
          },
        });
      },
      69881: (t, e, n) => {
        'use strict';
        n.d(e, { C: () => T });
        var r = n(31830),
          s = n(28189),
          a = n(45119),
          o = n(37523),
          i = n(21078),
          u = n(29809),
          l = n(89359),
          c = n(8631),
          p = n(13330),
          d = n(27084),
          h = n(9258),
          f = n(96522),
          m = n(70929),
          g = n(62302),
          y = n(45702),
          b = n(77126),
          v = n(83791),
          w = n(69533);
        const T = (0, m.op)({
          softmaxCrossEntropy_: function (t, e, n, m = 0, T = d.i.SUM_BY_NONZERO_WEIGHTS) {
            let x = (0, s.YT)(t, 'onehotLabels', 'softmaxCrossEntropy');
            const S = (0, s.YT)(e, 'logits', 'softmaxCrossEntropy');
            let N = null;
            if ((null != n && (N = (0, s.YT)(n, 'weights', 'softmaxCrossEntropy')), (0, a.O3)(x.shape, S.shape, 'Error in softmaxCrossEntropy: '), m > 0)) {
              const t = (0, y.d)(m),
                e = (0, y.d)(1),
                n = (0, y.d)(x.shape[1]);
              x = (0, o.W)((0, h.l)(x, (0, b.j)(e, t)), (0, l.y)(t, n));
            }
            const E = (function (t, e, n = -1) {
              if ((-1 === n && (n = e.rank - 1), n !== e.rank - 1))
                throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${n}`);
              const s = (0, r._X)((t, e, r) => {
                const s = (0, p.V)(e, [n], !0),
                  a = (0, b.j)((0, u.w)(e, 'float32'), s);
                r([t, a]);
                const o = (0, f.H)((0, h.l)(a, t));
                return {
                  value: (0, v.c)(o, [n]),
                  gradFunc: (t, e) => {
                    const [r, s] = e,
                      a = (0, i.SM)(t.shape, [n]);
                    return [(0, h.l)((0, g.t)(t, a), (0, b.j)((0, u.w)(r, 'float32'), (0, c.o)(s))), (0, h.l)((0, g.t)(t, a), (0, b.j)((0, c.o)(s), (0, u.w)(r, 'float32')))];
                  },
                };
              });
              return s(t, e);
            })(x, S);
            return (0, w.M)(E, N, T);
          },
        });
      },
      80462: (t, e, n) => {
        'use strict';
        n.d(e, { y: () => s });
        var r = n(79120);
        function s(t, e) {
          return (0, r.s)(t, e, 'left');
        }
      },
      65703: (t, e, n) => {
        'use strict';
        n.d(e, { N: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189);
        const i = (0, n(70929).op)({
          matMul_: function (t, e, n = !1, i = !1) {
            let u = (0, o.YT)(t, 'a', 'matMul'),
              l = (0, o.YT)(e, 'b', 'matMul');
            [u, l] = (0, a.makeTypesMatch)(u, l);
            const c = { a: u, b: l },
              p = { transposeA: n, transposeB: i };
            return r.T2.runKernel(s.jAQ, c, p);
          },
        });
      },
      41938: (t, e, n) => {
        'use strict';
        n.d(e, { T: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          max_: function (t, e = null, n = !1) {
            const o = { x: (0, a.YT)(t, 'x', 'max') },
              i = { reductionIndices: e, keepDims: n };
            return r.T2.runKernel(s.VAI, o, i);
          },
        });
      },
      86999: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => c });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(47195),
          u = n(70929),
          l = n(62302);
        const c = (0, u.op)({
          maxPool_: function (t, e, n, u, c) {
            const p = (0, a.YT)(t, 'x', 'maxPool');
            let d = p,
              h = !1;
            3 === p.rank && ((h = !0), (d = (0, l.t)(p, [1, p.shape[0], p.shape[1], p.shape[2]]))),
              o.vA(4 === d.rank, () => `Error in maxPool: input must be rank 4 but got rank ${d.rank}.`),
              o.vA(i.G0(n, 1), () => `Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`),
              i.s_('maxPool', u, c);
            const f = { x: d },
              m = { filterSize: e, strides: n, pad: u, dimRoundingMode: c },
              g = r.T2.runKernel(s.t3d, f, m);
            return h ? (0, l.t)(g, [g.shape[1], g.shape[2], g.shape[3]]) : g;
          },
        });
      },
      14349: (t, e, n) => {
        'use strict';
        n.d(e, { e: () => c });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(47195),
          u = n(70929),
          l = n(62302);
        const c = (0, u.op)({
          maxPool3d_: function (t, e = [1, 1, 1], n, u, c, p = 'NDHWC') {
            const d = (0, a.YT)(t, 'x', 'maxPool3d');
            let h = d,
              f = !1;
            4 === d.rank && ((f = !0), (h = (0, l.t)(d, [1, d.shape[0], d.shape[1], d.shape[2], d.shape[3]]))),
              o.vA(5 === h.rank, () => `Error in maxPool3d: x must be rank 5 but got rank ${h.rank}.`),
              o.vA('NDHWC' === p, () => `Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${p}`),
              (0, i.s_)('maxPool3d', u, c);
            const m = { x: h },
              g = { filterSize: e, strides: n, pad: u, dimRoundingMode: c, dataFormat: p },
              y = r.T2.runKernel(s.ySp, m, g);
            return f ? (0, l.t)(y, [y.shape[1], y.shape[2], y.shape[3], y.shape[4]]) : y;
          },
        });
      },
      45243: (t, e, n) => {
        'use strict';
        n.d(e, { R: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          maxPoolWithArgmax_: function (t, e, n, o, i = !1) {
            const u = { x: (0, a.YT)(t, 'x', 'maxPoolWithArgmax') },
              l = { filterSize: e, strides: n, pad: o, includeBatchInIndex: i },
              c = r.T2.runKernel(s.TL8, u, l);
            return { result: c[0], indexes: c[1] };
          },
        });
      },
      30178: (t, e, n) => {
        'use strict';
        n.d(e, { P: () => l });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189),
          i = n(62198),
          u = n(29809);
        const l = (0, n(70929).op)({
          maximum_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'maximum'),
              l = (0, o.YT)(e, 'b', 'maximum');
            ([n, l] = (0, a.makeTypesMatch)(n, l)),
              'bool' === n.dtype && ((n = (0, u.w)(n, 'int32')), (l = (0, u.w)(l, 'int32'))),
              (0, i.assertAndGetBroadcastShape)(n.shape, l.shape);
            const c = { a: n, b: l };
            return r.T2.runKernel(s.LDN, c);
          },
        });
      },
      12611: (t, e, n) => {
        'use strict';
        n.d(e, { i: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          mean_: function (t, e = null, n = !1) {
            const o = { x: (0, a.YT)(t, 'x', 'mean') },
              i = { axis: e, keepDims: n };
            return r.T2.runKernel(s.g5A, o, i);
          },
        });
      },
      15027: (t, e, n) => {
        'use strict';
        n.d(e, { O: () => l });
        var r = n(65703),
          s = n(61411),
          a = n(62302),
          o = n(53910),
          i = n(28189),
          u = n(45119);
        function l(t, e, { indexing: n = 'xy' } = {}) {
          if ('xy' !== n && 'ij' !== n) throw new TypeError(`${n} is not a valid third argument to meshgrid`);
          if (void 0 === t) return [];
          let l = (0, i.YT)(t, 'x', 'meshgrid', t instanceof o.qY ? t.dtype : 'float32');
          if (void 0 === e) return [l];
          let c = (0, i.YT)(e, 'y', 'meshgrid', e instanceof o.qY ? e.dtype : 'float32');
          const p = (0, u.Ze)(l.shape),
            d = (0, u.Ze)(c.shape);
          return 'xy' === n
            ? ((l = (0, a.t)(l, [1, -1])), (c = (0, a.t)(c, [-1, 1])), [(0, r.N)((0, s.S)([d, 1], l.dtype), l), (0, r.N)(c, (0, s.S)([1, p], c.dtype))])
            : ((l = (0, a.t)(l, [-1, 1])), (c = (0, a.t)(c, [1, -1])), [(0, r.N)(l, (0, s.S)([1, d], l.dtype)), (0, r.N)((0, s.S)([p, 1], c.dtype), c)]);
        }
      },
      57436: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          min_: function (t, e = null, n = !1) {
            const o = { x: (0, a.YT)(t, 'x', 'min') },
              i = { axis: e, keepDims: n };
            return r.T2.runKernel(s.lNG, o, i);
          },
        });
      },
      12644: (t, e, n) => {
        'use strict';
        n.d(e, { B: () => l });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189),
          i = n(62198),
          u = n(29809);
        const l = (0, n(70929).op)({
          minimum_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'minimum'),
              l = (0, o.YT)(e, 'b', 'minimum');
            ([n, l] = (0, a.makeTypesMatch)(n, l)),
              'bool' === n.dtype && ((n = (0, u.w)(n, 'int32')), (l = (0, u.w)(l, 'int32'))),
              (0, i.assertAndGetBroadcastShape)(n.shape, l.shape);
            const c = { a: n, b: l };
            return r.T2.runKernel(s.LG0, c);
          },
        });
      },
      66567: (t, e, n) => {
        'use strict';
        n.d(e, { F: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          mirrorPad_: function (t, e, n) {
            o.vA('reflect' === n || 'symmetric' === n, () => `Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);
            const i = (0, a.YT)(t, 'x', 'mirrorPad');
            if (0 === i.rank) throw new Error('mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad');
            o.vA(e.length === i.rank, () => `Padding doesn't match input. Must be ${i.rank}. Got ${e.length}.`);
            const u = 'reflect' === n ? 1 : 0;
            for (let t = 0; t < i.rank; t++)
              o.vA(2 === e[t].length, () => 'Invalid number of paddings. Must be length of 2 each.'),
                o.vA(
                  e[t][0] >= 0 && e[t][0] <= i.shape[t] - u && e[t][1] >= 0 && e[t][1] <= i.shape[t] - u,
                  () => `Padding in dimension ${t} cannot be greater than or equal to ${i.shape[t] - u} or less than 0 for input of shape ${i.shape}`,
                );
            const l = { paddings: e, mode: n },
              c = { x: i };
            return r.T2.runKernel(s.x7F, c, l);
          },
        });
      },
      60152: (t, e, n) => {
        'use strict';
        n.d(e, { z: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189);
        const i = (0, n(70929).op)({
          mod_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'mod'),
              i = (0, o.YT)(e, 'b', 'mod');
            [n, i] = (0, a.makeTypesMatch)(n, i);
            const u = { a: n, b: i };
            return r.T2.runKernel(s.BLA, u);
          },
        });
      },
      91413: (t, e, n) => {
        'use strict';
        n.d(e, { C: () => d });
        var r = n(28189),
          s = n(45119),
          a = n(21078),
          o = n(29809),
          i = n(12611),
          u = n(70929),
          l = n(62302),
          c = n(45793),
          p = n(77126);
        const d = (0, u.op)({
          moments_: function (t, e = null, n = !1) {
            t = (0, r.YT)(t, 'x', 'moments');
            const u = (0, s.Y6)(e, t.shape),
              d = (0, i.i)(t, u, n);
            let h = d.shape;
            n || (h = (0, a.SM)(d.shape, u));
            const f = (0, c.E)((0, p.j)((0, o.w)(t, 'float32'), (0, l.t)(d, h)));
            return { mean: d, variance: (0, i.i)(f, u, n) };
          },
        });
      },
      65772: (t, e, n) => {
        'use strict';
        n.d(e, { C: () => h });
        var r = n(30565),
          s = n(28189),
          a = n(45119),
          o = n(37523),
          i = n(89359),
          u = n(9258),
          l = n(70929),
          c = n(98990),
          p = n(45702),
          d = n(77126);
        const h = (0, l.op)({
          movingAverage_: function (t, e, n, l, h = !0) {
            const f = (0, s.YT)(t, 'v', 'movingAverage'),
              m = (0, s.YT)(e, 'x', 'movingAverage'),
              g = (0, s.YT)(n, 'decay', 'movingAverage');
            (0, r.assertTypesMatch)(f, m), a.vA(a.r1(f.shape, m.shape), () => 'Shape mismatch in v and x');
            const y = (0, p.d)(1),
              b = (0, d.j)(y, g);
            let v = (0, u.l)((0, d.j)(m, f), b);
            if (h) {
              a.vA(null != l, () => 'When using zeroDebias: true, step is required.');
              const t = (0, s.YT)(l, 'step', 'movingAverage');
              v = (0, i.y)(v, (0, d.j)(y, (0, c.n)(g, t)));
            }
            return (0, o.W)(f, v);
          },
        });
      },
      9258: (t, e, n) => {
        'use strict';
        n.d(e, { l: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189);
        const i = (0, n(70929).op)({
          mul_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'mul'),
              i = (0, o.YT)(e, 'b', 'mul');
            [n, i] = (0, a.makeTypesMatch)(n, i);
            const u = { a: n, b: i };
            return r.T2.runKernel(s.xu7, u);
          },
        });
      },
      7843: (t, e, n) => {
        'use strict';
        n.d(e, { Y: () => s });
        var r = n(28189);
        const s = (0, n(70929).op)({
          multiRNNCell_: function (t, e, n, s) {
            const a = (0, r.YT)(e, 'data', 'multiRNNCell'),
              o = (0, r.j1)(n, 'c', 'multiRNNCell'),
              i = (0, r.j1)(s, 'h', 'multiRNNCell');
            let u = a;
            const l = [];
            for (let e = 0; e < t.length; e++) {
              const n = t[e](u, o[e], i[e]);
              l.push(n[0]), l.push(n[1]), (u = n[1]);
            }
            const c = [],
              p = [];
            for (let t = 0; t < l.length; t += 2) c.push(l[t]), p.push(l[t + 1]);
            return [c, p];
          },
        });
      },
      71781: (t, e, n) => {
        'use strict';
        n.d(e, { O: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(70929),
          i = n(62302);
        const u = (0, o.op)({
          multinomial_: function (t, e, n, o = !1) {
            const u = (0, a.YT)(t, 'logits', 'multinomial'),
              l = u.size,
              c = u.rank;
            if (l < 2) throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${l}.`);
            if (c > 2) throw new Error(`Rank of probabilities must be 1 or 2, but is ${c}`);
            n = n || Math.random();
            const p = { logits: 1 === c ? (0, i.t)(u, [1, -1]) : u },
              d = { numSamples: e, seed: n, normalized: o },
              h = r.T2.runKernel(s.WT3, p, d);
            return 1 === c ? (0, i.t)(h, [h.size]) : h;
          },
        });
      },
      96522: (t, e, n) => {
        'use strict';
        n.d(e, { H: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          neg_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'neg') };
            return r.T2.runKernel(s.l0G, e);
          },
        });
      },
      68712: (t, e, n) => {
        'use strict';
        n.d(e, { W: () => s });
        var r = n(45119);
        function s(t, e, n, s, a, o) {
          null == s && (s = 0.5), null == a && (a = Number.NEGATIVE_INFINITY), null == o && (o = 0);
          const i = t.shape[0];
          return (
            (n = Math.min(n, i)),
            r.vA(0 <= s && s <= 1, () => `iouThreshold must be in [0, 1], but was '${s}'`),
            r.vA(2 === t.rank, () => `boxes must be a 2D tensor, but was of rank '${t.rank}'`),
            r.vA(4 === t.shape[1], () => `boxes must have 4 columns, but 2nd dimension was ${t.shape[1]}`),
            r.vA(1 === e.rank, () => 'scores must be a 1D tensor'),
            r.vA(e.shape[0] === i, () => `scores has incompatible shape with boxes. Expected ${i}, but was ${e.shape[0]}`),
            r.vA(0 <= o && o <= 1, () => `softNmsSigma must be in [0, 1], but was '${o}'`),
            { maxOutputSize: n, iouThreshold: s, scoreThreshold: a, softNmsSigma: o }
          );
        }
      },
      92596: (t, e, n) => {
        'use strict';
        n.d(e, { x: () => y });
        var r = n(28189),
          s = n(45119),
          a = n(4888),
          o = n(21078),
          i = n(41938),
          u = n(57436),
          l = n(70929),
          c = n(98990),
          p = n(62302),
          d = n(45702),
          h = n(79348),
          f = n(45793),
          m = n(83791);
        function g(t, e, n = null) {
          if (0 === t.rank) return (0, a.t)(t);
          if (1 !== t.rank && null === n) return g((0, p.t)(t, [-1]), e, n);
          if (1 === t.rank || 'number' == typeof n || (Array.isArray(n) && 1 === n.length)) {
            if (1 === e) return (0, m.c)((0, a.t)(t), n);
            if (e === 1 / 0) return (0, i.T)((0, a.t)(t), n);
            if (e === -1 / 0) return (0, u.j)((0, a.t)(t), n);
            if ('euclidean' === e || 2 === e) return (0, h.R)((0, m.c)((0, c.n)((0, a.t)(t), (0, d.d)(2, 'int32')), n));
            throw new Error(`Error in norm: invalid ord value: ${e}`);
          }
          if (Array.isArray(n) && 2 === n.length) {
            if (1 === e) return (0, i.T)((0, m.c)((0, a.t)(t), n[0]), n[1] - 1);
            if (e === 1 / 0) return (0, i.T)((0, m.c)((0, a.t)(t), n[1]), n[0]);
            if (e === -1 / 0) return (0, u.j)((0, m.c)((0, a.t)(t), n[1]), n[0]);
            if ('fro' === e || 'euclidean' === e) return (0, h.R)((0, m.c)((0, f.E)(t), n));
            throw new Error(`Error in norm: invalid ord value: ${e}`);
          }
          throw new Error(`Error in norm: invalid axis: ${n}`);
        }
        const y = (0, l.op)({
          norm_: function (t, e = 'euclidean', n = null, a = !1) {
            const i = g((t = (0, r.YT)(t, 'x', 'norm')), e, n);
            let u = i.shape;
            if (a) {
              const e = (0, s.Y6)(n, t.shape);
              u = o.SM(i.shape, e);
            }
            return (0, p.t)(i, u);
          },
        });
      },
      42118: (t, e, n) => {
        'use strict';
        n.d(e, { E: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189),
          i = n(62198);
        const u = (0, n(70929).op)({
          notEqual_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'notEqual', 'string_or_numeric'),
              u = (0, o.YT)(e, 'b', 'notEqual', 'string_or_numeric');
            ([n, u] = (0, a.makeTypesMatch)(n, u)), (0, i.assertAndGetBroadcastShape)(n.shape, u.shape);
            const l = { a: n, b: u };
            return r.T2.runKernel(s.ylV, l);
          },
        });
      },
      11760: (t, e, n) => {
        'use strict';
        n.d(e, { M: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          oneHot_: function (t, e, n = 1, o = 0, i = 'int32') {
            if (e < 2) throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);
            const u = { indices: (0, a.YT)(t, 'indices', 'oneHot', 'int32') },
              l = { dtype: i, depth: e, onValue: n, offValue: o };
            return r.T2.runKernel(s.urI, u, l);
          },
        });
      },
      61411: (t, e, n) => {
        'use strict';
        n.d(e, { S: () => i });
        var r = n(67897),
          s = n(45119),
          a = n(37148),
          o = n(42855);
        function i(t, e = 'float32') {
          if (((0, s.SA)(t), 'complex64' === e)) {
            const e = i(t, 'float32'),
              n = (0, o.U)(t, 'float32');
            return (0, a.f)(e, n);
          }
          const n = (0, s.FZ)((0, s.Ze)(t), e);
          return r.T2.makeTensor(n, t, e);
        }
      },
      69885: (t, e, n) => {
        'use strict';
        n.d(e, { P: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          onesLike_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'onesLike') };
            return r.T2.runKernel(s.LWX, e);
          },
        });
      },
      70929: (t, e, n) => {
        'use strict';
        n.d(e, { B: () => o, op: () => i });
        var r = n(67897),
          s = n(45119),
          a = n(96763);
        const o = '__op';
        function i(t) {
          const e = Object.keys(t);
          if (1 !== e.length) throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);
          let n = e[0];
          const i = t[n];
          n.endsWith('_') && (n = n.substring(0, n.length - 1)), (n += o);
          const u = (...t) => {
            r.T2.startScope(n);
            try {
              const e = i(...t);
              return (0, s.yL)(e) && a.error('Cannot return a Promise inside of tidy.'), r.T2.endScope(e), e;
            } catch (t) {
              throw (r.T2.endScope(null), t);
            }
          };
          return Object.defineProperty(u, 'name', { value: n, configurable: !0 }), u;
        }
      },
      38960: (t, e, n) => {
        'use strict';
        n.d(e, {
          $_$: () => wn.$,
          $jT: () => y.$,
          $v7: () => T.$,
          AmM: () => _n.A,
          BEg: () => Me.B,
          BFc: () => x.B,
          BTT: () => qn.B,
          BZs: () => ie.B,
          BpO: () => Gt.B,
          CRk: () => Ln.C,
          Clk: () => Ht.C,
          DQN: () => bt.D,
          EN4: () => Tt.E,
          EZY: () => Vn.E,
          Ec: () => ee.E,
          EwI: () => on.E,
          F12: () => ze.F,
          F8e: () => Ue.F,
          FE$: () => Te.F,
          FFZ: () => qt.F,
          FJY: () => Wn.F,
          FLi: () => c.F,
          FPz: () => m.F,
          FqL: () => a.F,
          GSj: () => ht.G,
          GTe: () => w.G,
          Gl3: () => X.G,
          H8d: () => St.H,
          HPB: () => Mt.H,
          HQu: () => s.H,
          HYA: () => Ne.H,
          HZy: () => te.H,
          HbZ: () => E.H,
          I1m: () => B.I,
          I2l: () => Re.I,
          IPL: () => Y.I,
          IYd: () => pt.I,
          InN: () => Et.I,
          JYU: () => Fe.J,
          K$i: () => On.K,
          KGM: () => en.K,
          Kgs: () => kt.K,
          Kko: () => It.K,
          KtR: () => vn.K,
          L0l: () => Ve.L,
          LCg: () => ot.L,
          LIG: () => Be.L,
          LMr: () => De.L,
          Lp0: () => G.L,
          Lpo: () => xn.L,
          M7h: () => Nt.M,
          MIs: () => wt.M,
          Mlm: () => mn.M,
          Mw0: () => ne.M,
          NFr: () => zn.N,
          NNh: () => Nn.N,
          NSZ: () => Rt.N,
          NYV: () => zt.e,
          NoW: () => Zt.N,
          NsG: () => he.N,
          O5O: () => Z.O,
          OEK: () => yn.O,
          OYQ: () => Vt.O,
          OjQ: () => Jt.O,
          Omf: () => nt.O,
          P1l: () => C.P,
          P61: () => se.P,
          PMw: () => pn.P,
          POl: () => Bn.P,
          Pbu: () => un.P,
          PhQ: () => Yt.P,
          Pqc: () => st.P,
          Q$M: () => Ge.Q,
          Q0_: () => be.Q,
          Q7R: () => u.Q,
          QD2: () => $e.Q,
          QP2: () => at.Q,
          QiD: () => i.Q,
          R0O: () => He.R,
          RIf: () => ft.R,
          RO: () => jt.R,
          ROE: () => k.R,
          RPU: () => P.R,
          RZD: () => an.R,
          Rj8: () => H.R,
          Rm2: () => _t.R,
          SY9: () => Un.S,
          SaS: () => re.S,
          Slp: () => Pr,
          T5N: () => N.T,
          T9B: () => Ct.T,
          U4u: () => Gn.U,
          UG6: () => ct.U,
          Ul9: () => Fn.U,
          VOZ: () => ke.V,
          VVh: () => _e.V,
          VZ: () => $t.V,
          Vs9: () => Xe.V,
          Vsq: () => En.V,
          WLX: () => ce.W,
          WQq: () => o.W,
          WfX: () => Ce.W,
          X4o: () => ae.X,
          X7t: () => J.X,
          XHu: () => le.X,
          XRg: () => p.X,
          Xtf: () => z.X,
          Y12: () => it.Y,
          YDF: () => Qt.Y,
          YJN: () => Rn.Y,
          YYh: () => Cr,
          YeY: () => Se.Y,
          YjP: () => zr,
          Ym9: () => dn.Y,
          Z$r: () => Pe.Z,
          Zhr: () => Yn.Z,
          _3C: () => rt._,
          _9M: () => ve._,
          _M9: () => Dn._,
          _SZ: () => Ye._,
          _eU: () => me._,
          _jP: () => Wn._,
          aOp: () => K.a,
          bvq: () => $n.b,
          bzn: () => l.b,
          cZk: () => Kn,
          czq: () => fn.c,
          d_2: () => Ze.d,
          dik: () => We.d,
          dzn: () => pe.d,
          eDJ: () => Je.e,
          eVF: () => oe.e,
          efE: () => kn.e,
          ek5: () => et.e,
          faB: () => R.f,
          ftb: () => Pn.f,
          g9W: () => Tn.g,
          ggX: () => nn.g,
          gnS: () => V.g,
          grY: () => ue.g,
          hOW: () => _.h,
          hVP: () => tn.h,
          i2o: () => Ut.i,
          iyU: () => ye.i,
          jIJ: () => U.j,
          j__: () => Ie.j,
          jbE: () => hn.j,
          jgi: () => Lt.j,
          jkA: () => Wt.j,
          kA9: () => L.k,
          kSi: () => S.k,
          kgh: () => gt.k,
          lDo: () => sn.l,
          lKK: () => Xt.l,
          lMo: () => Lr,
          lOn: () => Fr,
          lZX: () => v.l,
          lw0: () => Qe.l,
          m0H: () => xe.m,
          mPL: () => Zr,
          mT8: () => At.m,
          mgz: () => Zn.m,
          mkO: () => M.m,
          n76: () => Dt.n,
          n7C: () => de.n,
          ngS: () => vt.n,
          nqI: () => Ot.n,
          o8B: () => D.o,
          oNF: () => lt.o,
          op: () => qn.op,
          p4S: () => ut.p,
          pR9: () => we.p,
          qRo: () => d.q,
          r2V: () => ln.r,
          rCv: () => q.r,
          rYl: () => f.r,
          ra8: () => I.r,
          rfv: () => g.r,
          rfw: () => An.r,
          rhj: () => yt.r,
          rni: () => Mn.r,
          rxB: () => Bt.r,
          ry7: () => je.r,
          sZg: () => jn.s,
          smy: () => Q.s,
          sub: () => b.s,
          t$z: () => cn.t,
          tGX: () => bn.t,
          tQQ: () => Oe.t,
          tnl: () => r.t,
          vPA: () => Br,
          vjT: () => A.v,
          wX9: () => j.w,
          wck: () => Ke.w,
          wdz: () => Le.w,
          wgE: () => O.w,
          wh_: () => mt.w,
          whe: () => ge.w,
          xWs: () => F.x,
          xav: () => Ae.x,
          xbf: () => Cn.x,
          y17: () => Ee.y,
          y4m: () => tt.y,
          y5U: () => dt.y,
          yHs: () => h.y,
          yIG: () => W.y,
          ymU: () => gn.y,
          yrW: () => xt.y,
          yxw: () => Sn.y,
          yyV: () => fe.y,
          yzS: () => Pt.y,
          z8$: () => rn.z,
          zAU: () => In.z,
          zAd: () => qe.z,
          zQh: () => $.z,
          ziu: () => Kt.z,
          ztW: () => Ft.z,
        });
        var r = n(4888),
          s = n(12804),
          a = n(37558),
          o = n(37523),
          i = n(16054),
          u = n(12307),
          l = n(89326),
          c = n(10897),
          p = n(54339),
          d = n(66841),
          h = n(50269),
          f = n(29580),
          m = n(21404),
          g = n(63774),
          y = n(53909),
          b = n(53855),
          v = n(69906),
          w = n(69772),
          T = n(7170),
          x = n(13620),
          S = n(76241),
          N = n(27874),
          E = n(40758),
          A = n(75569),
          k = n(17367),
          _ = n(63567),
          I = n(448),
          O = n(29809),
          M = n(30855),
          $ = n(96928),
          D = n(70125),
          R = n(37148),
          F = n(25030),
          B = n(46520),
          P = n(19879),
          Z = n(55530),
          C = n(60569),
          L = n(3701),
          z = n(28794),
          j = n(41106),
          Y = n(90167),
          U = n(41655),
          V = n(99907),
          W = n(27451),
          G = n(10302),
          q = n(76808),
          K = n(77974),
          H = n(31216),
          X = n(10676),
          Q = n(10601),
          J = n(93002),
          tt = n(89359),
          et = n(919),
          nt = n(69759),
          rt = n(79853),
          st = n(83416),
          at = n(48398),
          ot = n(13020),
          it = n(95207),
          ut = n(44881),
          lt = n(8631),
          ct = n(8710),
          pt = n(40517),
          dt = n(53621),
          ht = n(96111),
          ft = n(15606),
          mt = n(88991),
          gt = n(48229),
          yt = n(62058),
          bt = n(13337),
          vt = n(35040),
          wt = n(68318),
          Tt = n(33454),
          xt = n(6300),
          St = n(66919),
          Nt = n(61303),
          Et = n(56508),
          At = n(46545),
          kt = n(93531),
          _t = n(44010),
          It = n(12015),
          Ot = n(95645),
          Mt = n(97991),
          $t = n(13330),
          Dt = n(13789),
          Rt = n(89881),
          Ft = n(9879),
          Bt = n(19925),
          Pt = n(80462),
          Zt = n(65703),
          Ct = n(41938),
          Lt = n(86999),
          zt = n(14349),
          jt = n(45243),
          Yt = n(30178),
          Ut = n(12611),
          Vt = n(15027),
          Wt = n(57436),
          Gt = n(12644),
          qt = n(66567),
          Kt = n(60152),
          Ht = n(91413),
          Xt = n(9258),
          Qt = n(7843),
          Jt = n(71781),
          te = n(96522),
          ee = n(42118),
          ne = n(11760),
          re = n(61411),
          se = n(69885),
          ae = n(35807),
          oe = n(65661),
          ie = n(14020),
          ue = n(53667),
          le = n(18422),
          ce = n(32493),
          pe = n(17872),
          de = n(98990),
          he = n(64394),
          fe = n(75295),
          me = n(67771),
          ge = n(96448),
          ye = n(2),
          be = n(21702),
          ve = n(63041),
          we = n(8019),
          Te = n(25039),
          xe = n(9355),
          Se = n(79546),
          Ne = n(83104),
          Ee = n(44645),
          Ae = n(1902),
          ke = n(19870),
          _e = n(90112),
          Ie = n(83732),
          Oe = n(62302),
          Me = n(53262),
          $e = n(8288),
          De = n(44591),
          Re = n(16562),
          Fe = n(27489),
          Be = n(25912),
          Pe = n(17820),
          Ze = n(45702),
          Ce = n(26325),
          Le = n(89986),
          ze = n(23325),
          je = n(28968),
          Ye = n(51115),
          Ue = n(33726),
          Ve = n(58276),
          We = n(17986),
          Ge = n(50963),
          qe = n(5972),
          Ke = n(36241),
          He = n(62242),
          Xe = n(26346),
          Qe = n(66030),
          Je = n(10776),
          tn = n(41361),
          en = n(13108),
          nn = n(22292),
          rn = n(8775),
          sn = n(66512),
          an = n(79348),
          on = n(45793),
          un = n(53427),
          ln = n(5932),
          cn = n(54268),
          pn = n(10700),
          dn = n(45894),
          hn = n(77126),
          fn = n(83791),
          mn = n(77823),
          gn = n(57311),
          yn = n(74027),
          bn = n(62018),
          vn = n(18941),
          wn = n(42768),
          Tn = n(25107),
          xn = n(35590),
          Sn = n(10385),
          Nn = n(67964),
          En = n(64826),
          An = n(21190),
          kn = n(97858),
          _n = n(73937),
          In = n(97706),
          On = n(67261),
          Mn = n(16319),
          $n = n(66126),
          Dn = n(12151),
          Rn = n(44271),
          Fn = n(42855),
          Bn = n(55537),
          Pn = n(33007),
          Zn = n(7703),
          Cn = n(92596),
          Ln = n(65772),
          zn = n(94791),
          jn = n(79120),
          Yn = n(2924),
          Un = n(55598),
          Vn = n(1087),
          Wn = n(18584),
          Gn = n(5323),
          qn = n(70929),
          Kn = n(42164),
          Hn = n(98777),
          Xn = n(69157),
          Qn = n(15920),
          Jn = n(55732),
          tr = n(31951),
          er = n(73866),
          nr = n(41477),
          rr = n(21557),
          sr = n(64658),
          ar = n(56248),
          or = n(70215),
          ir = n(95634),
          ur = n(7425),
          lr = n(84305),
          cr = n(5902),
          pr = n(44711),
          dr = n(42954),
          hr = n(80525),
          fr = n(1242),
          mr = n(36359),
          gr = n(76304),
          yr = n(1211),
          br = n(89535),
          vr = n(69533),
          wr = n(39417),
          Tr = n(70327),
          xr = n(40718),
          Sr = n(21780),
          Nr = n(22150),
          Er = n(58687),
          Ar = n(69881),
          kr = n(63551),
          _r = n(16112),
          Ir = n(34899),
          Or = n(49119),
          Mr = n(96557),
          $r = n(87984),
          Dr = n(1788),
          Rr = n(7539);
        const Fr = { fft: tn.h, ifft: en.K, rfft: rn.z, irfft: nn.g },
          Br = { hammingWindow: Hn.W, hannWindow: Xn._, frame: Qn.G, stft: Jn.u },
          Pr = {
            flipLeftRight: er.n,
            grayscaleToRGB: nr.C,
            resizeNearestNeighbor: dr.b,
            resizeBilinear: pr.v,
            rgbToGrayscale: rr.S,
            rotateWithOffset: sr.x,
            cropAndResize: tr.C,
            nonMaxSuppression: ar.L,
            nonMaxSuppressionAsync: or.z,
            nonMaxSuppressionWithScore: ir.f,
            nonMaxSuppressionWithScoreAsync: ur.l,
            nonMaxSuppressionPadded: lr.H,
            nonMaxSuppressionPaddedAsync: cr.R,
            threshold: hr.E,
            transform: fr.p,
          },
          Zr = { bandPart: mr.x, gramSchmidt: gr.i, qr: yr.qr },
          Cr = {
            absoluteDifference: br.n,
            computeWeightedLoss: vr.M,
            cosineDistance: wr.l,
            hingeLoss: Tr.Z,
            huberLoss: xr.c,
            logLoss: Sr._,
            meanSquaredError: Nr.b,
            sigmoidCrossEntropy: Er.k,
            softmaxCrossEntropy: Ar.C,
          },
          Lr = { sparseFillEmptyRows: kr.o, sparseReshape: _r.Z, sparseSegmentMean: Ir.t, sparseSegmentSum: Or.F },
          zr = { stringNGrams: Mr.A, stringSplit: $r.c, stringToHashBucketFast: Dr.N, staticRegexReplace: Rr.E };
      },
      9951: (t, e, n) => {
        'use strict';
        n.r(e),
          n.d(e, {
            OP_SCOPE_SUFFIX: () => r.BTT,
            abs: () => r.tnl,
            acos: () => r.HQu,
            acosh: () => r.FqL,
            add: () => r.WQq,
            addN: () => r.QiD,
            all: () => r.Q7R,
            any: () => r.bzn,
            argMax: () => r.FLi,
            argMin: () => r.XRg,
            asin: () => r.qRo,
            asinh: () => r.yHs,
            atan: () => r.rYl,
            atan2: () => r.FPz,
            atanh: () => r.rfv,
            avgPool: () => r.$jT,
            avgPool3d: () => r.sub,
            basicLSTMCell: () => r.lZX,
            batchNorm: () => r.$v7,
            batchNorm2d: () => r.BFc,
            batchNorm3d: () => r.kSi,
            batchNorm4d: () => r.T5N,
            batchToSpaceND: () => r.GTe,
            bincount: () => r.HbZ,
            bitwiseAnd: () => r.vjT,
            booleanMaskAsync: () => r.ftb,
            broadcastArgs: () => r.ROE,
            broadcastTo: () => r.hOW,
            buffer: () => r.ra8,
            cast: () => r.wgE,
            ceil: () => r.mkO,
            clipByValue: () => r.zQh,
            clone: () => r.o8B,
            complex: () => r.faB,
            concat: () => r.xWs,
            concat1d: () => r.I1m,
            concat2d: () => r.RPU,
            concat3d: () => r.O5O,
            concat4d: () => r.P1l,
            conv1d: () => r.kA9,
            conv2d: () => r.Xtf,
            conv2dTranspose: () => r.wX9,
            conv3d: () => r.IPL,
            conv3dTranspose: () => r.jIJ,
            cos: () => r.gnS,
            cosh: () => r.yIG,
            cosineWindow: () => r._jP,
            cumprod: () => r.Lp0,
            cumsum: () => r.rCv,
            denseBincount: () => r.aOp,
            depthToSpace: () => r.Rj8,
            depthwiseConv2d: () => r.Gl3,
            diag: () => r.smy,
            dilation2d: () => r.X7t,
            div: () => r.y4m,
            divNoNan: () => r.ek5,
            dot: () => r.Omf,
            dropout: () => r.EZY,
            einsum: () => r._3C,
            elu: () => r.Pqc,
            enclosingPowerOfTwo: () => r.FJY,
            ensureShape: () => r.QP2,
            equal: () => r.LCg,
            erf: () => r.Y12,
            euclideanNorm: () => r.p4S,
            exp: () => r.oNF,
            expandDims: () => r.UG6,
            expm1: () => r.IYd,
            eye: () => r.y5U,
            fft: () => r.hVP,
            fill: () => r.GSj,
            floor: () => r.RIf,
            floorDiv: () => r.wh_,
            fused: () => r.cZk,
            gather: () => r.kgh,
            gatherND: () => r.SY9,
            greater: () => r.rhj,
            greaterEqual: () => r.DQN,
            ifft: () => r.KGM,
            imag: () => r.ngS,
            image: () => r.Slp,
            inTopKAsync: () => r.U4u,
            irfft: () => r.ggX,
            isFinite: () => r.MIs,
            isInf: () => r.EN4,
            isNaN: () => r.yrW,
            leakyRelu: () => r.H8d,
            less: () => r.M7h,
            lessEqual: () => r.InN,
            linalg: () => r.mPL,
            linspace: () => r.mT8,
            localResponseNormalization: () => r.Kgs,
            log: () => r.Rm2,
            log1p: () => r.Kko,
            logSigmoid: () => r.nqI,
            logSoftmax: () => r.HPB,
            logSumExp: () => r.VZ,
            logicalAnd: () => r.n76,
            logicalNot: () => r.NSZ,
            logicalOr: () => r.ztW,
            logicalXor: () => r.rxB,
            losses: () => r.YYh,
            lowerBound: () => r.yzS,
            matMul: () => r.NoW,
            max: () => r.T9B,
            maxPool: () => r.jgi,
            maxPool3d: () => r.NYV,
            maxPoolWithArgmax: () => r.RO,
            maximum: () => r.PhQ,
            mean: () => r.i2o,
            meshgrid: () => r.OYQ,
            min: () => r.jkA,
            minimum: () => r.BpO,
            mirrorPad: () => r.FFZ,
            mod: () => r.ziu,
            moments: () => r.Clk,
            movingAverage: () => r.CRk,
            mul: () => r.lKK,
            multiRNNCell: () => r.YDF,
            multinomial: () => r.OjQ,
            neg: () => r.HZy,
            norm: () => r.xbf,
            notEqual: () => r.Ec,
            oneHot: () => r.Mw0,
            ones: () => r.SaS,
            onesLike: () => r.P61,
            op: () => r.op,
            outerProduct: () => r.X4o,
            pad: () => r.eVF,
            pad1d: () => r.BZs,
            pad2d: () => r.grY,
            pad3d: () => r.XHu,
            pad4d: () => r.WLX,
            pool: () => r.dzn,
            pow: () => r.n7C,
            prelu: () => r.NsG,
            print: () => r.yyV,
            prod: () => r._eU,
            raggedGather: () => r.whe,
            raggedRange: () => r.iyU,
            raggedTensorToTensor: () => r.Q0_,
            rand: () => r._9M,
            randomGamma: () => r.pR9,
            randomNormal: () => r.FE$,
            randomStandardNormal: () => r.m0H,
            randomUniform: () => r.YeY,
            randomUniformInt: () => r.HYA,
            range: () => r.y17,
            real: () => r.xav,
            reciprocal: () => r.VOZ,
            relu: () => r.VVh,
            relu6: () => r.j__,
            reshape: () => r.tQQ,
            reverse: () => r.BEg,
            reverse1d: () => r.QD2,
            reverse2d: () => r.LMr,
            reverse3d: () => r.I2l,
            reverse4d: () => r.JYU,
            rfft: () => r.z8$,
            round: () => r.LIG,
            rsqrt: () => r.Z$r,
            scalar: () => r.d_2,
            scatterND: () => r.NFr,
            searchSorted: () => r.sZg,
            selu: () => r.WfX,
            separableConv2d: () => r.wdz,
            setdiff1dAsync: () => r.F12,
            sigmoid: () => r.ry7,
            sign: () => r._SZ,
            signal: () => r.vPA,
            sin: () => r.F8e,
            sinh: () => r.L0l,
            slice: () => r.dik,
            slice1d: () => r.Q$M,
            slice2d: () => r.zAd,
            slice3d: () => r.wck,
            slice4d: () => r.R0O,
            softmax: () => r.Vs9,
            softplus: () => r.lw0,
            spaceToBatchND: () => r.eDJ,
            sparse: () => r.lMo,
            sparseToDense: () => r.Zhr,
            spectral: () => r.lOn,
            split: () => r.lDo,
            sqrt: () => r.RZD,
            square: () => r.EwI,
            squaredDifference: () => r.Pbu,
            squeeze: () => r.r2V,
            stack: () => r.t$z,
            step: () => r.PMw,
            stridedSlice: () => r.Ym9,
            string: () => r.YjP,
            sub: () => r.jbE,
            sum: () => r.czq,
            tan: () => r.Mlm,
            tanh: () => r.ymU,
            tensor: () => r.OEK,
            tensor1d: () => r.tGX,
            tensor2d: () => r.KtR,
            tensor3d: () => r.$_$,
            tensor4d: () => r.g9W,
            tensor5d: () => r.Lpo,
            tensor6d: () => r.yxw,
            tensorScatterUpdate: () => r.NNh,
            tile: () => r.Vsq,
            topk: () => r.rfw,
            transpose: () => r.mgz,
            truncatedNormal: () => r.efE,
            unique: () => r.AmM,
            unsortedSegmentSum: () => r.zAU,
            unstack: () => r.K$i,
            upperBound: () => r.rni,
            variable: () => r.bvq,
            where: () => r._M9,
            whereAsync: () => r.YJN,
            zeros: () => r.Ul9,
            zerosLike: () => r.POl,
          });
        var r = n(38960);
      },
      35807: (t, e, n) => {
        'use strict';
        n.d(e, { X: () => u });
        var r = n(28189),
          s = n(45119),
          a = n(65703),
          o = n(70929),
          i = n(62302);
        const u = (0, o.op)({
          outerProduct_: function (t, e) {
            const n = (0, r.YT)(t, 'v1', 'outerProduct'),
              o = (0, r.YT)(e, 'v2', 'outerProduct');
            s.vA(1 === n.rank && 1 === o.rank, () => `Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${o.rank}.`);
            const u = (0, i.t)(n, [-1, 1]),
              l = (0, i.t)(o, [1, -1]);
            return (0, a.N)(u, l);
          },
        });
      },
      65661: (t, e, n) => {
        'use strict';
        n.d(e, { e: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          pad_: function (t, e, n = 0) {
            const o = (0, a.YT)(t, 'x', 'pad');
            if (0 === o.rank) throw new Error('pad(scalar) is not defined. Pass non-scalar to pad');
            const i = { paddings: e, constantValue: n },
              u = { x: o };
            return r.T2.runKernel(s.ODT, u, i);
          },
        });
      },
      14020: (t, e, n) => {
        'use strict';
        n.d(e, { B: () => o });
        var r = n(45119),
          s = n(70929),
          a = n(65661);
        const o = (0, s.op)({
          pad1d_: function (t, e, n = 0) {
            return (0, r.vA)(2 === e.length, () => 'Invalid number of paddings. Must be length of 2.'), (0, a.e)(t, [e], n);
          },
        });
      },
      53667: (t, e, n) => {
        'use strict';
        n.d(e, { g: () => o });
        var r = n(45119),
          s = n(70929),
          a = n(65661);
        const o = (0, s.op)({
          pad2d_: function (t, e, n = 0) {
            return (0, r.vA)(2 === e.length && 2 === e[0].length && 2 === e[1].length, () => 'Invalid number of paddings. Must be length of 2 each.'), (0, a.e)(t, e, n);
          },
        });
      },
      18422: (t, e, n) => {
        'use strict';
        n.d(e, { X: () => o });
        var r = n(45119),
          s = n(70929),
          a = n(65661);
        const o = (0, s.op)({
          pad3d_: function (t, e, n = 0) {
            return (
              (0, r.vA)(3 === e.length && 2 === e[0].length && 2 === e[1].length && 2 === e[2].length, () => 'Invalid number of paddings. Must be length of 2 each.'),
              (0, a.e)(t, e, n)
            );
          },
        });
      },
      32493: (t, e, n) => {
        'use strict';
        n.d(e, { W: () => o });
        var r = n(45119),
          s = n(70929),
          a = n(65661);
        const o = (0, s.op)({
          pad4d_: function (t, e, n = 0) {
            return (
              (0, r.vA)(
                4 === e.length && 2 === e[0].length && 2 === e[1].length && 2 === e[2].length && 2 === e[3].length,
                () => 'Invalid number of paddings. Must be length of 2 each.',
              ),
              (0, a.e)(t, e, n)
            );
          },
        });
      },
      17872: (t, e, n) => {
        'use strict';
        n.d(e, { d: () => d });
        var r = n(28189),
          s = n(45119),
          a = n(53909),
          o = n(69772),
          i = n(47195),
          u = n(86999),
          l = n(70929),
          c = n(62302),
          p = n(10776);
        const d = (0, l.op)({
          pool_: function (t, e, n, l, d, h, f) {
            null == d && (d = [1, 1]), null == h && (h = 1), 0 === l && (l = 'valid');
            const m = (0, r.YT)(t, 'x', 'maxPool');
            let g = m,
              y = !1;
            3 === m.rank && ((y = !0), (g = (0, c.t)(m, [1, m.shape[0], m.shape[1], m.shape[2]]))),
              s.vA(i.G0(h, d), () => `Error in pool: Either strides or dilations must be 1. Got strides ${h} and dilations '${d}'`);
            const b = i.E6(g.shape, e, h, d, l),
              v = [b.dilationHeight, b.dilationWidth];
            let w;
            w =
              'same' === l
                ? (function (t, e) {
                    const n = t.map((t, n) => t + (t - 1) * (e[n] - 1)).map((t) => t - 1),
                      r = n.map((t) => Math.floor(t / 2)),
                      s = n.map((t, e) => t - r[e]);
                    return n.map((t, e) => [r[e], s[e]]);
                  })([b.filterHeight, b.filterWidth], v)
                : [
                    [0, 0],
                    [0, 0],
                  ];
            const T = 1 === v[0] && 1 === v[1],
              [x, S] = (function (t, e, n) {
                const r = n.map((t) => t[0]),
                  s = n.map((t) => t[1]),
                  a = t.concat(r, s),
                  o = e.map((t, e) => (t - (a[e] % t)) % t),
                  i = s.map((t, e) => t + o[e]);
                return [e.map((t, e) => [r[e], i[e]]), e.map((t, e) => [0, o[e]])];
              })([b.inHeight, b.inWidth], v, w),
              N = T ? l : 'valid',
              E = T ? g : (0, p.e)(g, v, x),
              A = ('avg' === n ? () => (0, a.$)(E, e, h, N, f) : () => (0, u.j)(E, e, h, N, f))(),
              k = T ? A : (0, o.G)(A, v, S);
            return y ? (0, c.t)(k, [k.shape[1], k.shape[2], k.shape[3]]) : k;
          },
        });
      },
      98990: (t, e, n) => {
        'use strict';
        n.d(e, { n: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189);
        const i = (0, n(70929).op)({
          pow_: function (t, e) {
            let n = (0, o.YT)(t, 'base', 'pow'),
              i = (0, o.YT)(e, 'exp', 'pow');
            [n, i] = (0, a.makeTypesMatch)(n, i);
            const u = { a: n, b: i };
            return r.T2.runKernel(s.pyJ, u);
          },
        });
      },
      64394: (t, e, n) => {
        'use strict';
        n.d(e, { N: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          prelu_: function (t, e) {
            const n = { x: (0, a.YT)(t, 'x', 'prelu'), alpha: (0, a.YT)(e, 'alpha', 'prelu') };
            return r.T2.runKernel(s.Ncv, n);
          },
        });
      },
      75295: (t, e, n) => {
        'use strict';
        n.d(e, { y: () => s });
        var r = n(96763);
        function s(t, e = !1) {
          r.log(t.toString(e));
        }
      },
      67771: (t, e, n) => {
        'use strict';
        n.d(e, { _: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(29809);
        const i = (0, n(70929).op)({
          prod_: function (t, e = null, n = !1) {
            let i = (0, a.YT)(t, 'x', 'prod');
            'bool' === i.dtype && (i = (0, o.w)(i, 'int32'));
            const u = { x: i },
              l = { axis: e, keepDims: n };
            return r.T2.runKernel(s.kdj, u, l);
          },
        });
      },
      96448: (t, e, n) => {
        'use strict';
        n.d(e, { w: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          raggedGather_: function (t, e, n, o) {
            const i = {
                paramsNestedSplits: t.map((t, e) => (0, a.YT)(t, `tensors${e}`, 'raggedGather', 'int32')),
                paramsDenseValues: (0, a.YT)(e, 'paramsDenseValues', 'raggedGather'),
                indices: (0, a.YT)(n, 'indices', 'raggedGather', 'int32'),
              },
              u = { outputRaggedRank: o },
              l = r.T2.runKernel(s.oJ2, i, u);
            return { outputNestedSplits: l.slice(0, l.length - 1), outputDenseValues: l[l.length - 1] };
          },
        });
      },
      2: (t, e, n) => {
        'use strict';
        n.d(e, { i: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          raggedRange_: function (t, e, n) {
            const o = (0, a.YT)(t, 'starts', 'raggedRange'),
              i = { starts: o, limits: (0, a.YT)(e, 'limits', 'raggedRange', o.dtype), deltas: (0, a.YT)(n, 'deltas', 'raggedRange', o.dtype) },
              u = r.T2.runKernel(s.CQC, i);
            return { rtNestedSplits: u[0], rtDenseValues: u[1] };
          },
        });
      },
      21702: (t, e, n) => {
        'use strict';
        n.d(e, { Q: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          raggedTensorToTensor_: function (t, e, n, o, i) {
            const u = (0, a.YT)(t, 'shape', 'raggedTensorToTensor', 'int32'),
              l = (0, a.YT)(e, 'values', 'raggedTensorToTensor'),
              c = {
                shape: u,
                values: l,
                defaultValue: (0, a.YT)(n, 'defaultValue', 'raggedTensorToTensor', l.dtype),
                rowPartitionTensors: o.map((t, e) => (0, a.YT)(t, `tensors${e}`, 'raggedTensorToTensor', 'int32')),
              },
              p = { rowPartitionTypes: i };
            return r.T2.runKernel(s.mH5, c, p);
          },
        });
      },
      30429: (t, e, n) => {
        'use strict';
        var r;
        function s(t, e, n) {
          let r = new Array();
          if (null == n && null == e) return r;
          if (null == e) for (; r.length < t + n.length; ) r.push(-1);
          else r = e.slice();
          if (null == n) return r;
          if (t + n.length !== r.length) throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${t + n.length}, but shape.rank = ${r.length}`);
          for (let s = 1; s < n.length; ++s) {
            const a = n[s],
              o = r[r.length - n.length + s],
              i = r[o];
            if (a >= 0)
              if (i >= 0) {
                if (i !== a) throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${s + t}] = ${a} but shape[${s + t}] = ${i}`);
              } else r[o] = a;
          }
          return r;
        }
        function a(t) {
          const e = {
              FIRST_DIM_SIZE: r.FIRST_DIM_SIZE,
              VALUE_ROWIDS: r.VALUE_ROWIDS,
              ROW_LENGTHS: r.ROW_LENGTHS,
              ROW_SPLITS: r.ROW_SPLITS,
              ROW_LIMITS: r.ROW_LIMITS,
              ROW_STARTS: r.ROW_STARTS,
            },
            n = [];
          for (const r of t) {
            if (!(r in e)) break;
            n.push(e[r]);
          }
          return n;
        }
        function o(t) {
          return 0 === t.length ? 0 : t[0] === r.FIRST_DIM_SIZE ? t.length - 1 : t.length;
        }
        function i(t, e) {
          if (null == t || null == e) return;
          const n = t.length,
            r = e.length;
          if (n >= r)
            throw new Error(
              `defaultValue.shape=${t} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`,
            );
          for (let s = 0; s < Math.min(n, r - 1); ++s) {
            const n = t[s],
              r = e[s + 1];
            if (n >= 0 && r >= 0 && 1 !== n && n !== r)
              throw new Error(
                `defaultValue.shape=${t}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${s - t.length}] = ${n} but ragged tensor input.flatValues.shape[${s - t.length}] = ${r}`,
              );
          }
        }
        n.d(e, { Dw: () => o, U0: () => a, mP: () => i, tl: () => r, z4: () => s }),
          (function (t) {
            (t[(t.FIRST_DIM_SIZE = 0)] = 'FIRST_DIM_SIZE'),
              (t[(t.VALUE_ROWIDS = 1)] = 'VALUE_ROWIDS'),
              (t[(t.ROW_LENGTHS = 2)] = 'ROW_LENGTHS'),
              (t[(t.ROW_SPLITS = 3)] = 'ROW_SPLITS'),
              (t[(t.ROW_LIMITS = 4)] = 'ROW_LIMITS'),
              (t[(t.ROW_STARTS = 5)] = 'ROW_STARTS');
          })(r || (r = {}));
      },
      63041: (t, e, n) => {
        'use strict';
        n.d(e, { _: () => a });
        var r = n(67897),
          s = n(45119);
        const a = (0, n(70929).op)({
          rand_: function (t, e, n) {
            (0, s.SA)(t);
            const a = (0, s.Ze)(t);
            let o = null;
            if (null == n || 'float32' === n) o = new Float32Array(a);
            else if ('int32' === n) o = new Int32Array(a);
            else {
              if ('bool' !== n) throw new Error(`Unknown data type ${n}`);
              o = new Uint8Array(a);
            }
            for (let t = 0; t < a; t++) o[t] = e();
            return r.T2.makeTensor(o, t, n);
          },
        });
      },
      89748: (t, e, n) => {
        'use strict';
        n.d(e, { XA: () => a, ai: () => s, yU: () => o });
        var r = n(7391);
        class s {
          constructor(t, e, n, s, a) {
            (this.mean = t),
              (this.stdDev = e),
              (this.dtype = n),
              (this.nextVal = NaN),
              (this.truncated = s),
              this.truncated && ((this.upper = this.mean + 2 * this.stdDev), (this.lower = this.mean - 2 * this.stdDev));
            const o = a || Math.random();
            this.random = r.alea(o.toString());
          }
          nextValue() {
            if (!isNaN(this.nextVal)) {
              const t = this.nextVal;
              return (this.nextVal = NaN), t;
            }
            let t,
              e,
              n = !1;
            for (; !n; ) {
              let r, s, a;
              do {
                (r = 2 * this.random() - 1), (s = 2 * this.random() - 1), (a = r * r + s * s);
              } while (a >= 1 || 0 === a);
              const o = Math.sqrt((-2 * Math.log(a)) / a);
              (t = this.mean + this.stdDev * r * o), (e = this.mean + this.stdDev * s * o), (this.truncated && !this.isValidTruncated(t)) || (n = !0);
            }
            return (this.truncated && !this.isValidTruncated(e)) || (this.nextVal = this.convertValue(e)), this.convertValue(t);
          }
          convertValue(t) {
            return null == this.dtype || 'float32' === this.dtype ? t : Math.round(t);
          }
          isValidTruncated(t) {
            return t <= this.upper && t >= this.lower;
          }
        }
        class a {
          constructor(t, e, n, a) {
            (this.alpha = t), (this.beta = 1 / e), (this.dtype = n);
            const o = a || Math.random();
            (this.randu = r.alea(o.toString())), (this.randn = new s(0, 1, n, !1, this.randu())), (this.d = t < 1 ? t + 2 / 3 : t - 1 / 3), (this.c = 1 / Math.sqrt(9 * this.d));
          }
          nextValue() {
            let t, e, n, r, s, a;
            for (;;) {
              do {
                (r = this.randn.nextValue()), (a = 1 + this.c * r);
              } while (a <= 0);
              if (((a *= a * a), (t = r * r), (e = 1 - 0.331 * t * t), (n = 0.5 * t + this.d * (1 - a + Math.log(a))), (s = this.randu()), s < e || Math.log(s) < n)) break;
            }
            return (a = (1 / this.beta) * this.d * a), this.alpha < 1 && (a *= Math.pow(this.randu(), 1 / this.alpha)), this.convertValue(a);
          }
          convertValue(t) {
            return 'float32' === this.dtype ? t : Math.round(t);
          }
        }
        class o {
          constructor(t = 0, e = 1, n, s) {
            if (
              ((this.canReturnFloat = () => null == this.dtype || 'float32' === this.dtype),
              (this.min = t),
              (this.range = e - t),
              (this.dtype = n),
              null == s && (s = Math.random()),
              'number' == typeof s && (s = s.toString()),
              !this.canReturnFloat() && this.range <= 1)
            )
              throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);
            this.random = r.alea(s);
          }
          convertValue(t) {
            return this.canReturnFloat() ? t : Math.round(t);
          }
          nextValue() {
            return this.convertValue(this.min + this.range * this.random());
          }
        }
      },
      8019: (t, e, n) => {
        'use strict';
        n.d(e, { p: () => i });
        var r = n(45119),
          s = n(448),
          a = n(70929),
          o = n(89748);
        const i = (0, a.op)({
          randomGamma_: function (t, e, n = 1, a = 'float32', i) {
            if (((0, r.SA)(t), null == n && (n = 1), null == a && (a = 'float32'), 'float32' !== a && 'int32' !== a)) throw new Error(`Unsupported data type ${a}`);
            const u = new o.XA(e, n, a, i),
              l = (0, s.r)(t, a);
            for (let t = 0; t < l.values.length; t++) l.values[t] = u.nextValue();
            return l.toTensor();
          },
        });
      },
      25039: (t, e, n) => {
        'use strict';
        n.d(e, { F: () => i });
        var r = n(45119),
          s = n(448),
          a = n(70929),
          o = n(89748);
        const i = (0, a.op)({
          randomNormal_: function (t, e = 0, n = 1, a, i) {
            if (((0, r.SA)(t), null != a && 'bool' === a)) throw new Error(`Unsupported data type ${a}`);
            const u = new o.ai(e, n, a, !1, i),
              l = (0, s.r)(t, a);
            for (let t = 0; t < l.values.length; t++) l.values[t] = u.nextValue();
            return l.toTensor();
          },
        });
      },
      9355: (t, e, n) => {
        'use strict';
        n.d(e, { m: () => a });
        var r = n(70929),
          s = n(25039);
        const a = (0, r.op)({
          randomStandardNormal_: function (t, e, n) {
            if (null != e && 'bool' === e) throw new Error(`Unsupported data type ${e}`);
            return (0, s.F)(t, 0, 1, e, n);
          },
        });
      },
      79546: (t, e, n) => {
        'use strict';
        n.d(e, { Y: () => i });
        var r = n(45119),
          s = n(448),
          a = n(70929),
          o = n(89748);
        const i = (0, a.op)({
          randomUniform_: function (t, e = 0, n = 1, a = 'float32', i) {
            (0, r.SA)(t);
            const u = (0, s.r)(t, a),
              l = new o.yU(e, n, null, i);
            for (let t = 0; t < u.values.length; t++) u.values[t] = l.nextValue();
            return u.toTensor();
          },
        });
      },
      83104: (t, e, n) => {
        'use strict';
        n.d(e, { H: () => a });
        var r = n(70929),
          s = n(79546);
        const a = (0, r.op)({
          randomUniformInt_: function (t, e, n, r) {
            return (0, s.Y)(t, e, n, 'int32', r);
          },
        });
      },
      44645: (t, e, n) => {
        'use strict';
        n.d(e, { y: () => a });
        var r = n(67897),
          s = n(15441);
        function a(t, e, n = 1, a = 'float32') {
          if (0 === n) throw new Error('Cannot have a step of zero');
          const o = { start: t, stop: e, step: n, dtype: a };
          return r.T2.runKernel(s.Q6t, {}, o);
        }
      },
      1902: (t, e, n) => {
        'use strict';
        n.d(e, { x: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          real_: function (t) {
            const e = { input: (0, a.YT)(t, 'input', 'real') };
            return r.T2.runKernel(s.LRy, e);
          },
        });
      },
      19870: (t, e, n) => {
        'use strict';
        n.d(e, { V: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          reciprocal_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'reciprocal') };
            return r.T2.runKernel(s.huO, e);
          },
        });
      },
      29827: (t, e, n) => {
        'use strict';
        n.d(e, { m: () => s, x: () => a });
        var r = n(45119);
        const s = 30;
        function a(t) {
          return t <= s ? t : (0, r.lK)(t, Math.floor(Math.sqrt(t)));
        }
      },
      90112: (t, e, n) => {
        'use strict';
        n.d(e, { V: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          relu_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'relu') };
            return r.T2.runKernel(s.fUj, e);
          },
        });
      },
      83732: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          relu6_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'relu6') };
            return r.T2.runKernel(s.P_L, e);
          },
        });
      },
      62302: (t, e, n) => {
        'use strict';
        n.d(e, { t: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          reshape_: function (t, e) {
            const n = { x: (0, a.YT)(t, 'x', 'reshape', 'string_or_numeric') },
              o = { shape: e };
            return r.T2.runKernel(s.R23, n, o);
          },
        });
      },
      53262: (t, e, n) => {
        'use strict';
        n.d(e, { B: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          reverse_: function (t, e) {
            const n = { x: (0, a.YT)(t, 'x', 'reverse') },
              o = { dims: e };
            return r.T2.runKernel(s.D7i, n, o);
          },
        });
      },
      8288: (t, e, n) => {
        'use strict';
        n.d(e, { Q: () => i });
        var r = n(28189),
          s = n(45119),
          a = n(70929),
          o = n(53262);
        const i = (0, a.op)({
          reverse1d_: function (t) {
            const e = (0, r.YT)(t, 'x', 'reverse');
            return s.vA(1 === e.rank, () => `Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`), (0, o.B)(e, 0);
          },
        });
      },
      44591: (t, e, n) => {
        'use strict';
        n.d(e, { L: () => i });
        var r = n(28189),
          s = n(45119),
          a = n(70929),
          o = n(53262);
        const i = (0, a.op)({
          reverse2d_: function (t, e) {
            const n = (0, r.YT)(t, 'x', 'reverse');
            return s.vA(2 === n.rank, () => `Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`), (0, o.B)(n, e);
          },
        });
      },
      16562: (t, e, n) => {
        'use strict';
        n.d(e, { I: () => i });
        var r = n(28189),
          s = n(45119),
          a = n(70929),
          o = n(53262);
        const i = (0, a.op)({
          reverse3d_: function (t, e) {
            const n = (0, r.YT)(t, 'x', 'reverse');
            return s.vA(3 === n.rank, () => `Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`), (0, o.B)(n, e);
          },
        });
      },
      27489: (t, e, n) => {
        'use strict';
        n.d(e, { J: () => i });
        var r = n(28189),
          s = n(45119),
          a = n(70929),
          o = n(53262);
        const i = (0, a.op)({
          reverse4d_: function (t, e) {
            const n = (0, r.YT)(t, 'x', 'reverse');
            return s.vA(4 === n.rank, () => `Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`), (0, o.B)(n, e);
          },
        });
      },
      29192: (t, e, n) => {
        'use strict';
        function r(t, e, n) {
          return [n * ('number' == typeof t ? t : t[0]), e * ('number' == typeof t ? t : t[1])];
        }
        n.d(e, { H: () => r });
      },
      25912: (t, e, n) => {
        'use strict';
        n.d(e, { L: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          round_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'round') };
            return r.T2.runKernel(s.hVg, e);
          },
        });
      },
      17820: (t, e, n) => {
        'use strict';
        n.d(e, { Z: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          rsqrt_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'rsqrt', 'float32') };
            return r.T2.runKernel(s.TOR, e);
          },
        });
      },
      45702: (t, e, n) => {
        'use strict';
        n.d(e, { d: () => a });
        var r = n(89783),
          s = n(19171);
        function a(t, e) {
          if ((((0, r.isTypedArray)(t) && 'string' !== e) || Array.isArray(t)) && 'complex64' !== e)
            throw new Error('Error creating a new Scalar: value must be a primitive (number|boolean|string)');
          if ('string' === e && (0, r.isTypedArray)(t) && !(t instanceof Uint8Array)) throw new Error('When making a scalar from encoded string, the value must be `Uint8Array`.');
          return (0, s.Q)(t, [], [], e);
        }
      },
      94791: (t, e, n) => {
        'use strict';
        n.d(e, { N: () => l });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(70929),
          u = n(26170);
        const l = (0, i.op)({
          scatterND_: function (t, e, n) {
            (0, o.SA)(n);
            const i = (0, a.YT)(t, 'indices', 'scatterND', 'int32'),
              l = (0, a.YT)(e, 'updates', 'scatterND');
            u.validateInput(l, i, n);
            const c = { indices: i, updates: l },
              p = { shape: n };
            return r.T2.runKernel(s.pJc, c, p);
          },
        });
      },
      26170: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { calculateShapes: () => o, validateInput: () => a, validateUpdateShape: () => s });
        var r = n(45119);
        function s(t, e, n) {
          const r = e.rank > 1 ? e.shape[e.rank - 1] : 1,
            s = e.rank > 1 ? e.rank - 1 : 1,
            a = `Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${e.shape}, shape: ${t}, sliceDim: ${r}, and batchDim: ${s}.`;
          if (n.rank < s) throw new Error(a + ` update.rank < ${s}. `);
          if (t.length < r + (n.rank - s)) throw new Error(a + ` Output shape length < ${r + (n.rank - s)}`);
          if (n.rank !== s + t.length - r) throw new Error(a + ' update.rank != ' + (s + t.length - r));
          for (let t = 0; t < s; ++t) if (n.shape[t] !== e.shape[t]) throw new Error(a + ` updates.shape[${t}] (${n.shape[t]}) != indices.shape[${t}] (${e.shape[t]}).`);
          for (let e = 0; e < n.rank - s; ++e)
            if (n.shape[e + s] !== t[e + r]) throw new Error(a + ` updates.shape[${e + s}] (${n.shape[e + s]}) != shape[${e + s}] (${t[e + s]})`);
        }
        function a(t, e, n) {
          if (e.rank < 1) throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);
          if (t.rank < 1) throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);
          if ('int32' !== e.dtype) throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);
          if (n.length < 1) throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);
          if (0 === n.length) {
            if (0 === e.size) throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);
            if (0 === t.size) throw new Error(`Updates specified for empty output. updates shape: ${t.shape}`);
          }
          s(n, e, t);
        }
        function o(t, e, n) {
          const s = e.shape.length,
            a = s > 1 ? e.shape[s - 1] : 1,
            o = n.length;
          let i = 1;
          for (let t = a; t < o; ++t) i *= n[t];
          const u = a < 1 ? 1 : a;
          return { sliceRank: a, numUpdates: (0, r.Ze)(e.shape) / u, sliceSize: i, strides: [...(0, r.Ur)(n.slice(0, a)), 1], outputSize: (0, r.Ze)(n) };
        }
      },
      79120: (t, e, n) => {
        'use strict';
        n.d(e, { s: () => c });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119),
          i = n(70929),
          u = n(62302);
        const l = 2147483648,
          c = (0, i.op)({
            searchSorted_: function (t, e, n = 'left') {
              const i = (0, a.YT)(t, 'sortedSequence', 'searchSorted'),
                c = (0, a.YT)(e, 'values', 'searchSorted'),
                p = i.shape[i.shape.length - 1],
                d = c.shape[c.shape.length - 1],
                h = (0, u.t)(i, [-1, p]),
                f = (0, u.t)(c, [-1, d]);
              if (h.rank < 2) throw new Error('Sorted input argument must be at least 2-dimensional');
              if (h.shape[0] !== f.shape[0]) throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");
              if ((0, o.Ze)(f.shape) >= l) throw new Error('values tensor size must less than 2147483648');
              if (h.shape[1] >= l) throw new Error(`trailing dim_size must less than 2147483648 for int32 output type, was ${h.shape[1]}`);
              const m = { sortedSequence: h, values: f },
                g = { side: n };
              return r.T2.runKernel(s.uWl, m, g);
            },
          });
      },
      47516: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { collectGatherOpShapeInfo: () => i, computeOutShape: () => o, segOpComputeOptimalWindowSize: () => a });
        var r = n(45119),
          s = n(29827);
        function a(t, e) {
          let n,
            a = !1;
          for (t <= s.m ? ((n = t), (a = !0)) : (n = (0, r.lK)(t, Math.floor(Math.sqrt(t)))); !a; ) n > e || n === t ? (a = !0) : (n = (0, r.lK)(t, n + 1));
          return n;
        }
        function o(t, e, n) {
          const r = [],
            s = t.length;
          for (let a = 0; a < s; a++) a !== e ? r.push(t[a]) : r.push(n);
          return r;
        }
        function i(t, e, n, r) {
          const s = e.shape.length,
            a = t.shape.length;
          if (0 !== r && (r < -s || r > s)) throw new Error(`Expect batchDims in the range of [-${s}, ${s}], but got ${r}`);
          if ((r < 0 && (r += s), r > a)) throw new Error(`batchDims (${r}) must be less than rank(x) (\n    ${a}).`);
          if (n < r) throw new Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);
          for (let n = 0; n < r; ++n) if (t.shape[n] !== e.shape[n]) throw new Error(`x.shape[${n}]: ${t.shape[n]} should be equal to indices.shape[${n}]: ${e.shape[n]}.`);
          const o = t.shape[n],
            i = [];
          let u = 1,
            l = 1,
            c = 1;
          for (let e = 0; e < r; ++e) i.push(t.shape[e]), (u *= t.shape[e]);
          for (let e = r; e < n; e++) i.push(t.shape[e]), (l *= t.shape[e]);
          for (let t = r; t < s; t++) i.push(e.shape[t]);
          for (let e = n + 1; e < a; e++) i.push(t.shape[e]), (c *= t.shape[e]);
          return { batchSize: u, sliceSize: c, outerSize: l, dimSize: o, outputShape: i };
        }
      },
      26325: (t, e, n) => {
        'use strict';
        n.d(e, { W: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          selu_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'selu') };
            return r.T2.runKernel(s.u$b, e);
          },
        });
      },
      28576: (t, e, n) => {
        'use strict';
        n.d(e, { X: () => s, j: () => r });
        const r = 1.7580993408473768,
          s = 1.0507009873554805;
      },
      89986: (t, e, n) => {
        'use strict';
        n.d(e, { w: () => l });
        var r = n(28189),
          s = n(45119),
          a = n(28794),
          o = n(10676),
          i = n(70929),
          u = n(62302);
        const l = (0, i.op)({
          separableConv2d_: function (t, e, n, i, l, c = [1, 1], p = 'NHWC') {
            const d = (0, r.YT)(t, 'x', 'separableConv2d'),
              h = (0, r.YT)(e, 'depthwiseFilter', 'separableConv2d'),
              f = (0, r.YT)(n, 'pointwiseFilter', 'separableConv2d');
            let m = d,
              g = !1;
            if ((3 === d.rank && ((g = !0), (m = (0, u.t)(d, [1, d.shape[0], d.shape[1], d.shape[2]]))), 'NCHW' === p))
              throw new Error('separableConv2d currently does not support dataFormat NCHW; only NHWC is supported');
            s.vA(4 === m.rank, () => `Error in separableConv2d: input must be rank 4, but got rank ${m.rank}.`),
              s.vA(4 === h.rank, () => `Error in separableConv2d: depthwise filter must be rank 4, but got rank ${h.rank}.`),
              s.vA(4 === f.rank, () => `Error in separableConv2d: pointwise filter must be rank 4, but got rank ${h.rank}.`),
              s.vA(1 === f.shape[0], () => `Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${f.shape[0]}.`),
              s.vA(1 === f.shape[1], () => `Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${f.shape[1]}.`);
            const y = h.shape[2],
              b = h.shape[3];
            s.vA(f.shape[2] === y * b, () => `Error in separableConv2d: the third dimension of pointwise filter must be ${y * b}, but got ${f.shape[2]}.`);
            const v = (0, o.G)(m, h, i, l, p, c),
              w = (0, a.X)(v, f, 1, 'valid', p);
            return g ? (0, u.t)(w, [w.shape[1], w.shape[2], w.shape[3]]) : w;
          },
        });
      },
      23325: (t, e, n) => {
        'use strict';
        n.d(e, { F: () => o });
        var r = n(53910),
          s = n(28189),
          a = n(45119);
        const o = async function (t, e) {
          const n = (0, s.YT)(t, 'x', 'setdiff1d'),
            o = (0, s.YT)(e, 'y', 'setdiff1d');
          a.vA(n.dtype === o.dtype, () => `x and y should have the same dtype, but got x (${n.dtype}) and y (${o.dtype}).`),
            a.vA(1 === n.rank, () => `x should be 1D tensor, but got x (${n.shape}).`),
            a.vA(1 === o.rank, () => `y should be 1D tensor, but got y (${o.shape}).`);
          const i = await n.data(),
            u = await o.data(),
            l = new Set(u);
          let c = 0;
          for (let t = 0; t < i.length; t++) l.has(i[t]) || c++;
          const p = new r.yl([c], n.dtype),
            d = new r.yl([c], 'int32');
          for (let t = 0, e = 0; t < i.length; t++) l.has(i[t]) || ((p.values[e] = i[t]), (d.values[e] = t), e++);
          return [p.toTensor(), d.toTensor()];
        };
      },
      28968: (t, e, n) => {
        'use strict';
        n.d(e, { r: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          sigmoid_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'sigmoid', 'float32') };
            return r.T2.runKernel(s.vI1, e);
          },
        });
      },
      51115: (t, e, n) => {
        'use strict';
        n.d(e, { _: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          sign_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'sign') };
            return r.T2.runKernel(s.YVe, e);
          },
        });
      },
      15920: (t, e, n) => {
        'use strict';
        n.d(e, { G: () => l });
        var r = n(25030),
          s = n(96111),
          a = n(70929),
          o = n(62302),
          i = n(17986),
          u = n(18941);
        const l = (0, a.op)({
          frame_: function (t, e, n, a = !1, l = 0) {
            let c = 0;
            const p = [];
            for (; c + e <= t.size; ) p.push((0, i.d)(t, c, e)), (c += n);
            if (a)
              for (; c < t.size; ) {
                const a = c + e - t.size,
                  o = (0, r.x)([(0, i.d)(t, c, e - a), (0, s.G)([a], l)]);
                p.push(o), (c += n);
              }
            return 0 === p.length ? (0, u.K)([], [0, e]) : (0, o.t)((0, r.x)(p), [p.length, e]);
          },
        });
      },
      98777: (t, e, n) => {
        'use strict';
        n.d(e, { W: () => a });
        var r = n(70929),
          s = n(18584);
        const a = (0, r.op)({
          hammingWindow_: function (t) {
            return (0, s._)(t, 0.54, 0.46);
          },
        });
      },
      69157: (t, e, n) => {
        'use strict';
        n.d(e, { _: () => a });
        var r = n(70929),
          s = n(18584);
        const a = (0, r.op)({
          hannWindow_: function (t) {
            return (0, s._)(t, 0.5, 0.5);
          },
        });
      },
      55732: (t, e, n) => {
        'use strict';
        n.d(e, { u: () => l });
        var r = n(9258),
          s = n(70929),
          a = n(18584),
          o = n(8775),
          i = n(15920),
          u = n(69157);
        const l = (0, s.op)({
          stft_: function (t, e, n, s, l = u._) {
            null == s && (s = (0, a.F)(e));
            const c = (0, i.G)(t, e, n),
              p = (0, r.l)(c, l(e));
            return (0, o.z)(p, s);
          },
        });
      },
      18584: (t, e, n) => {
        'use strict';
        n.d(e, { F: () => s, _: () => a });
        var r = n(62018);
        function s(t) {
          return Math.floor(Math.pow(2, Math.ceil(Math.log(t) / Math.log(2))));
        }
        function a(t, e, n) {
          const s = 1 - (t % 2),
            a = new Float32Array(t);
          for (let r = 0; r < t; ++r) {
            const o = (2 * Math.PI * r) / (t + s - 1);
            a[r] = e - n * Math.cos(o);
          }
          return (0, r.t)(a, 'float32');
        }
      },
      33726: (t, e, n) => {
        'use strict';
        n.d(e, { F: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          sin_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'sin', 'float32') };
            return r.T2.runKernel(s.hql, e);
          },
        });
      },
      58276: (t, e, n) => {
        'use strict';
        n.d(e, { L: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          sinh_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'sinh') };
            return r.T2.runKernel(s.J3C, e);
          },
        });
      },
      17986: (t, e, n) => {
        'use strict';
        n.d(e, { d: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          slice_: function (t, e, n) {
            const o = (0, a.YT)(t, 'x', 'slice', 'string_or_numeric');
            if (0 === o.rank) throw new Error('Slicing scalar is not possible');
            const i = { x: o },
              u = { begin: e, size: n };
            return r.T2.runKernel(s.JiE, i, u);
          },
        });
      },
      50963: (t, e, n) => {
        'use strict';
        n.d(e, { Q: () => i });
        var r = n(28189),
          s = n(45119),
          a = n(70929),
          o = n(17986);
        const i = (0, a.op)({
          slice1d_: function (t, e, n) {
            const a = (0, r.YT)(t, 'x', 'slice1d');
            return s.vA(1 === a.rank, () => `slice1d expects a rank-1 tensor, but got a rank-${a.rank} tensor`), (0, o.d)(a, [e], [n]);
          },
        });
      },
      5972: (t, e, n) => {
        'use strict';
        n.d(e, { z: () => i });
        var r = n(28189),
          s = n(45119),
          a = n(70929),
          o = n(17986);
        const i = (0, a.op)({
          slice2d_: function (t, e, n) {
            const a = (0, r.YT)(t, 'x', 'slice2d');
            return s.vA(2 === a.rank, () => `slice2d expects a rank-2 tensor, but got a rank-${a.rank} tensor`), (0, o.d)(a, e, n);
          },
        });
      },
      36241: (t, e, n) => {
        'use strict';
        n.d(e, { w: () => i });
        var r = n(28189),
          s = n(45119),
          a = n(70929),
          o = n(17986);
        const i = (0, a.op)({
          slice3d_: function (t, e, n) {
            const a = (0, r.YT)(t, 'x', 'slice3d');
            return s.vA(3 === a.rank, () => `slice3d expects a rank-3 tensor, but got a rank-${a.rank} tensor`), (0, o.d)(a, e, n);
          },
        });
      },
      62242: (t, e, n) => {
        'use strict';
        n.d(e, { R: () => i });
        var r = n(28189),
          s = n(45119),
          a = n(70929),
          o = n(17986);
        const i = (0, a.op)({
          slice4d_: function (t, e, n) {
            const a = (0, r.YT)(t, 'x', 'slice4d');
            return s.vA(4 === a.rank, () => `slice4d expects a rank-4 tensor, but got a rank-${a.rank} tensor`), (0, o.d)(a, e, n);
          },
        });
      },
      34969: (t, e, n) => {
        'use strict';
        n.r(e),
          n.d(e, {
            assertParamsValid: () => o,
            computeFlatOffset: () => v,
            computeOutShape: () => u,
            getNormalizedAxes: () => d,
            isSliceContinous: () => b,
            maskToAxes: () => i,
            parseSliceParams: () => w,
            sliceInfo: () => T,
            startForAxis: () => g,
            startIndicesWithElidedDims: () => h,
            stopForAxis: () => y,
            stopIndicesWithElidedDims: () => f,
            stridesForAxis: () => m,
            stridesWithElidedDims: () => l,
          });
        var r = n(45119);
        const s = -2,
          a = -1;
        function o(t, e, n) {
          const s = t.shape.length;
          r.vA(s === e.length, () => `Error in slice${s}D: Length of begin ${e} must match the rank of the array (${s}).`),
            r.vA(s === n.length, () => `Error in slice${s}D: Length of size ${n} must match the rank of the array (${s}).`);
          for (let a = 0; a < s; ++a)
            r.vA(e[a] + n[a] <= t.shape[a], () => `Error in slice${s}D: begin[${a}] + size[${a}] (${e[a] + n[a]}) would overflow input.shape[${a}] (${t.shape[a]})`);
        }
        function i(t) {
          const e = [];
          let n = 0;
          for (; t > 0; ) 1 & t && e.push(n), (t /= 2), n++;
          return e;
        }
        function u(t, e, n) {
          const r = [];
          for (let s = 0; s < t.length; s++) r[s] = Math.ceil((e[s] - t[s]) / n[s]);
          return r;
        }
        function l(t, e, n, r) {
          const s = [...t];
          for (let t = s.length; t < r.length; t++) s.push(1);
          for (let t = 0; t < n; t++) 0 === t ? (s[e] = 1) : (s.splice(e, 0, 1), s.pop());
          return s;
        }
        function c(t, e, n) {
          return n <= t ? n : n - (e - 1);
        }
        function p(t, e) {
          const n = [];
          for (let r = 0; r < t; r++) n.push(e + r);
          return n;
        }
        function d(t, e, n, r, s, a, o, i, u) {
          const c = t.length;
          let p = new Array(c),
            d = new Array(c),
            b = new Array(c);
          if (e.length && n > 0) {
            const u = e[0],
              c = n + 1;
            (p = h(o, u, c, r, t)), (d = f(i, u, c, s, t)), (b = l(a, u, c, t));
          } else for (let e = 0; e < c; e++) (p[e] = g(o, r, a, t, e, u)), (d[e] = y(i, s, a, t, e, u)), (b[e] = m(a, e, u));
          return { begin: p, end: d, strides: b };
        }
        function h(t, e, n, r, s) {
          const a = [...s],
            o = p(n, e);
          for (let s = 0; s < a.length; s++)
            if (o.indexOf(s) > -1) a[s] = 0;
            else {
              const o = c(e, n, s);
              let i = r[o];
              t & (1 << o) && (i = 0), (a[s] = i);
            }
          return a;
        }
        function f(t, e, n, s, a) {
          const o = [...a],
            i = p(n, e);
          for (let r = 0; r < o.length; r++)
            if (i.indexOf(r) > -1) o[r] = Number.MAX_SAFE_INTEGER;
            else {
              const a = c(e, n, r);
              let i = s[a];
              t & (1 << a) && (i = Number.MAX_SAFE_INTEGER), (o[r] = i);
            }
          for (let t = 0; t < o.length; t++) {
            const e = a[t];
            o[t] < 0 && (o[t] += e), (o[t] = r.qE(0, o[t], a[t]));
          }
          return o;
        }
        function m(t, e, n) {
          let r = t[e];
          return (n & (1 << e) || null == r) && (r = 1), r;
        }
        function g(t, e, n, s, a, o) {
          let i = e[a];
          const u = n[a] || 1;
          (t & (1 << a) || o & (1 << a) || null == i) && (i = u > 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
          const l = s[a];
          return i < 0 && (i += l), (i = r.qE(0, i, l - 1)), i;
        }
        function y(t, e, n, s, a, o) {
          let i = e[a];
          const u = n[a] || 1;
          (t & (1 << a) || o & (1 << a) || null == i) && (i = u > 0 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
          const l = s[a];
          return i < 0 && (i += l), (i = u > 0 ? r.qE(0, i, l) : r.qE(-1, i, l - 1)), i;
        }
        function b(t, e, n) {
          let r = n.length;
          for (let t = 0; t < n.length; t++)
            if (n[t] > 1) {
              r = t;
              break;
            }
          for (let s = r + 1; s < n.length; s++) if (e[s] > 0 || n[s] !== t[s]) return !1;
          return !0;
        }
        function v(t, e) {
          let n = t.length > 0 ? t[t.length - 1] : 1;
          for (let r = 0; r < t.length - 1; r++) n += t[r] * e[r];
          return n;
        }
        function w(t, e, n) {
          let s;
          const a = t.shape.length;
          let o;
          return (
            (s = 'number' == typeof e ? [e, ...new Array(a - 1).fill(0)] : e.length < a ? e.concat(new Array(a - e.length).fill(0)) : e.slice()),
            s.forEach((t) => {
              r.vA(-1 !== t, () => 'slice() does not support negative begin indexing.');
            }),
            (o = null == n ? new Array(a).fill(-1) : 'number' == typeof n ? [n, ...new Array(a - 1).fill(-1)] : n.length < a ? n.concat(new Array(a - n.length).fill(-1)) : n),
            (o = o.map((e, n) =>
              e >= 0 ? e : (r.vA(-1 === e, () => `Negative size values should be exactly -1 but got ${e} for the slice() size at index ${n}.`), t.shape[n] - s[n]),
            )),
            [s, o]
          );
        }
        function T(t, e, n, r, o, i, u, l, c) {
          let p;
          if ((null == r ? ((p = new Array(e.length)), p.fill(1)) : (p = r), null != u && u & (u - 1))) throw new Error('Multiple ellipses in slice is not allowed.');
          let d = !1;
          const h = {
            dims: p.length,
            numAddAxisAfterEllipsis: 0,
            begin: e.slice(),
            end: n.slice(),
            strides: p.slice(),
            beginMask: o,
            endMask: i,
            ellipsisMask: u,
            newAxisMask: l,
            shrinkAxisMask: c,
          };
          for (let t = 0; t < h.dims; t++) d && (1 << t) & l && h.numAddAxisAfterEllipsis++, (1 << t) & u && (d = !0);
          d || ((h.ellipsisMask |= 1 << h.dims), h.dims++);
          const f = { dims: t.length, beginMask: 0, endMask: 0, beginValid: !1, endValid: !1 };
          !(function (t, e) {
            (e.beginMask = 0), (e.endMask = 0), (e.shrinkAxisMask = 0);
            let n = 0;
            (e.beginValid = null != t.begin),
              (e.endValid = null != t.end),
              (e.begin = new Array(e.dims)),
              (e.end = new Array(e.dims)),
              (e.strides = new Array(e.dims)),
              (e.finalShapeGatherIndices = []),
              (e.finalShapeGatherIndicesSparse = []),
              (e.inputShapeGatherIndicesSparse = new Array(e.dims));
            for (let r = 0; r < t.dims; r++)
              if ((1 << r) & t.ellipsisMask) {
                const s = Math.min(e.dims - (t.dims - r) + 1 + t.numAddAxisAfterEllipsis, e.dims);
                for (; n < s; n++)
                  (e.begin[n] = 0),
                    (e.end[n] = 0),
                    (e.strides[n] = 1),
                    (e.beginMask |= 1 << n),
                    (e.endMask |= 1 << n),
                    e.finalShapeGatherIndices.push(n),
                    e.finalShapeGatherIndicesSparse.push(-1),
                    (e.inputShapeGatherIndicesSparse[n] = r);
              } else if ((1 << r) & t.newAxisMask) e.finalShapeGatherIndices.push(s), e.finalShapeGatherIndicesSparse.push(-1);
              else {
                if (n === e.begin.length) throw Error(`Index out of range using input dim ${n}; input has only ${e.dims} dims, ${e.begin.length}.`);
                null != t.begin && (e.begin[n] = t.begin[r]),
                  null != t.end && (e.end[n] = t.end[r]),
                  (e.strides[n] = t.strides[r]),
                  t.beginMask & (1 << r) && (e.beginMask |= 1 << n),
                  t.endMask & (1 << r) && (e.endMask |= 1 << n),
                  t.shrinkAxisMask & (1 << r)
                    ? (e.finalShapeGatherIndices.push(a), e.finalShapeGatherIndicesSparse.push(-1), (e.shrinkAxisMask |= 1 << n))
                    : (e.finalShapeGatherIndices.push(n), e.finalShapeGatherIndicesSparse.push(r)),
                  (e.inputShapeGatherIndicesSparse[n] = r),
                  n++;
              }
          })(h, f);
          let m = !0,
            g = !0,
            y = !0;
          const b = [],
            v = [];
          for (let e = 0; e < t.length; ++e) {
            if (0 === f.strides[e]) throw Error(`strides[${e}] must be non-zero`);
            const n = !!(f.shrinkAxisMask & (1 << e)),
              r = t[e];
            if (-1 === r) {
              b.push(n ? 1 : -1);
              continue;
            }
            const s = [f.beginMask & (1 << e), f.endMask & (1 << e)],
              a = [f.strides[e] > 0 ? 0 : -1, f.strides[e] > 0 ? r : r - 1];
            if (n && f.strides[e] <= 0) throw Error('only stride 1 allowed on non-range indexing.');
            y = y && 1 === f.strides[e];
            const o = !!(f.beginMask & (1 << e) && f.endMask & (1 << e));
            if (f.beginValid && f.endValid) {
              if (n) {
                const t = f.begin[e] < 0 ? r + f.begin[e] : f.begin[e];
                if (((f.begin[e] = t), (f.end[e] = f.begin[e] + 1), t < 0 || t >= r)) throw Error(`slice index ${f.begin[e]} of dimension ${e} out of bounds.`);
              } else (f.begin[e] = x(f.begin[e], 0, f.strides[e], r, s, a)), (f.end[e] = x(f.end[e], 1, f.strides[e], r, s, a));
              const t = 1 === f.strides[e] && 0 === f.begin[e] && f.end[e] === r;
              (m = m && t), (g = g && ((0 === e && 1 === f.strides[e]) || t));
            } else (m = m && 1 === f.strides[e] && o), (g = g && ((0 === e && 1 === f.strides[e]) || o));
            let i,
              u = !1;
            if ((f.beginValid && f.endValid ? ((i = f.end[e] - f.begin[e]), (u = !0)) : n ? ((i = 1), (u = !0)) : o && r >= 0 && ((i = f.strides[e] < 0 ? -r : r), (u = !0)), u)) {
              let t;
              (t = 0 === i || i < 0 != f.strides[e] < 0 ? 0 : Math.trunc(i / f.strides[e]) + (i % f.strides[e] != 0 ? 1 : 0)), b.push(t);
            } else b.push(-1);
          }
          for (let t = 0; t < f.finalShapeGatherIndices.length; ++t) {
            const e = f.finalShapeGatherIndices[t];
            e >= 0 ? v.push(b[e]) : e === s && v.push(1);
          }
          return {
            finalShapeSparse: v.filter((t, e) => f.finalShapeGatherIndices[e] !== s),
            finalShape: v,
            isIdentity: m,
            sliceDim0: g,
            isSimpleSlice: y,
            begin: f.begin,
            end: f.end,
            strides: f.strides,
          };
        }
        function x(t, e, n, r, s, a) {
          if (s[e]) return n > 0 ? a[e] : a[(e + 1) & 1];
          {
            const e = t < 0 ? r + t : t;
            return e < a[0] ? a[0] : e > a[1] ? a[1] : e;
          }
        }
      },
      26346: (t, e, n) => {
        'use strict';
        n.d(e, { V: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          softmax_: function (t, e = -1) {
            const n = (0, a.YT)(t, 'logits', 'softmax', 'float32');
            if ((-1 === e && (e = n.rank - 1), e !== n.rank - 1))
              throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${e}`);
            const o = { logits: n },
              i = { dim: e };
            return r.T2.runKernel(s.rFG, o, i);
          },
        });
      },
      66030: (t, e, n) => {
        'use strict';
        n.d(e, { l: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          softplus_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'softplus') };
            return r.T2.runKernel(s.Fin, e);
          },
        });
      },
      10776: (t, e, n) => {
        'use strict';
        n.d(e, { e: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          spaceToBatchND_: function (t, e, n) {
            const i = (0, a.YT)(t, 'x', 'spaceToBatchND');
            o.vA(i.rank >= 1 + e.length, () => `input rank ${i.rank} should be > than [blockShape] ${e.length}`),
              o.vA(n.length === e.length, () => `paddings.shape[0] ${n.length} must be equal to [blockShape] ${e.length}`),
              o.vA(
                i.shape.reduce((t, r, s) => (s > 0 && s <= e.length ? t && (r + n[s - 1][0] + n[s - 1][1]) % e[s - 1] == 0 : t), !0),
                () => `input spatial dimensions ${i.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${e.toString()}`,
              );
            const u = { x: i },
              l = { blockShape: e, paddings: n };
            return r.T2.runKernel(s.A8B, u, l);
          },
        });
      },
      63551: (t, e, n) => {
        'use strict';
        n.d(e, { o: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          sparseFillEmptyRows_: function (t, e, n, o) {
            const i = (0, a.YT)(t, 'indices', 'sparseFillEmptyRows', 'int32'),
              u = (0, a.YT)(e, 'values', 'sparseFillEmptyRows'),
              l = (0, a.YT)(n, 'denseShape', 'sparseFillEmptyRows', 'int32'),
              c = (0, a.YT)(o, 'defaultValue', 'sparseFillEmptyRows', u.dtype);
            if (2 !== i.rank) throw new Error(`Indices should be Tensor2D but received shape\n        ${i.shape}`);
            if (1 !== u.rank) throw new Error(`Values should be Tensor1D but received shape ${u.shape}`);
            if (1 !== l.rank) throw new Error(`Dense shape should be Tensor1D but received shape ${l.shape}`);
            if (0 !== c.rank) throw new Error(`Default value should be a scalar but received shape ${c.shape}`);
            const p = { indices: i, values: u, denseShape: l, defaultValue: c },
              d = r.T2.runKernel(s.C8s, p);
            return { outputIndices: d[0], outputValues: d[1], emptyRowIndicator: d[2], reverseIndexMap: d[3] };
          },
        });
      },
      77618: (t, e, n) => {
        'use strict';
        function r(t) {
          return `Received SparseTensor with denseShape[0] = 0 but\n  indices.shape[0] = ${t}`;
        }
        function s(t, e) {
          return `indices(${t}, 0) is invalid: ${e} < 0`;
        }
        function a(t, e, n) {
          return `indices(${t}, 0) is invalid: ${e} >= ${n}`;
        }
        n.d(e, { P_: () => r, U8: () => s, zP: () => a });
      },
      16112: (t, e, n) => {
        'use strict';
        n.d(e, { Z: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          sparseReshape_: function (t, e, n) {
            const o = (0, a.YT)(t, 'inputIndices', 'sparseReshape', 'int32'),
              i = (0, a.YT)(e, 'inputShape', 'sparseReshape', 'int32'),
              u = (0, a.YT)(n, 'newShape', 'sparseReshape', 'int32');
            if (2 !== o.rank) throw new Error(`Input indices should be Tensor2D but received shape\n        ${o.shape}`);
            if (1 !== i.rank) throw new Error(`Input shape should be Tensor1D but received shape ${i.shape}`);
            if (1 !== u.rank) throw new Error(`New shape should be Tensor1D but received shape ${u.shape}`);
            const l = { inputIndices: o, inputShape: i, newShape: u },
              c = r.T2.runKernel(s.BoJ, l);
            return { outputIndices: c[0], outputShape: c[1] };
          },
        });
      },
      83255: (t, e, n) => {
        'use strict';
        n.d(e, { M5: () => a, Ni: () => i, Pz: () => o, pC: () => u, yM: () => s });
        var r = n(45119);
        function s(t, e) {
          return `only one output dimension may be -1, not both ${t} and ${e}`;
        }
        function a(t, e) {
          return `size ${t} must be non-negative, not ${e}`;
        }
        function o() {
          return 'reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero';
        }
        function i(t, e) {
          return `Input to reshape is a SparseTensor with ${(0, r.Ze)(t)}\n  dense values, but the requested shape requires a multiple of ${(0, r.Ze)(e)}. inputShape=${t} outputShape= ${e}`;
        }
        function u(t, e) {
          return `Input to reshape is a tensor with ${(0, r.Ze)(t)} dense values, but the requested shape has ${(0, r.Ze)(e)}. inputShape=${t} outputShape=${e}`;
        }
      },
      34899: (t, e, n) => {
        'use strict';
        n.d(e, { t: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          sparseSegmentMean_: function (t, e, n) {
            const o = (0, a.YT)(t, 'data', 'sparseSegmentMean'),
              i = (0, a.YT)(e, 'indices', 'sparseSegmentMean', 'int32'),
              u = (0, a.YT)(n, 'segmentIds', 'sparseSegmentMean', 'int32');
            if (o.rank < 1) throw new Error('Data should be at least 1 dimensional but received scalar');
            if (1 !== i.rank) throw new Error(`Indices should be Tensor1D but received shape\n          ${i.shape}`);
            if (1 !== u.rank) throw new Error(`Segment ids should be Tensor1D but received shape\n          ${u.shape}`);
            const l = { data: o, indices: i, segmentIds: u };
            return r.T2.runKernel(s.L6G, l);
          },
        });
      },
      55880: (t, e, n) => {
        'use strict';
        function r() {
          return 'segment ids must be >= 0';
        }
        function s() {
          return 'segment ids are not increasing';
        }
        function a(t, e) {
          return `Segment id ${t} out of range [0, ${e}), possibly because segmentIds input is not sorted.`;
        }
        function o(t, e, n) {
          return `Bad: indices[${t}] == ${e} out of range [0, ${n})`;
        }
        n.d(e, { AP: () => a, dS: () => o, tb: () => s, u1: () => r });
      },
      49119: (t, e, n) => {
        'use strict';
        n.d(e, { F: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          sparseSegmentSum_: function (t, e, n) {
            const o = (0, a.YT)(t, 'data', 'sparseSegmentSum'),
              i = (0, a.YT)(e, 'indices', 'sparseSegmentSum', 'int32'),
              u = (0, a.YT)(n, 'segmentIds', 'sparseSegmentSum', 'int32');
            if (o.rank < 1) throw new Error('Data should be at least 1 dimensional but received scalar');
            if (1 !== i.rank) throw new Error(`Indices should be Tensor1D but received shape\n         ${i.shape}`);
            if (1 !== u.rank) throw new Error(`Segment ids should be Tensor1D but received shape\n         ${u.shape}`);
            const l = { data: o, indices: i, segmentIds: u };
            return r.T2.runKernel(s.DvZ, l);
          },
        });
      },
      2924: (t, e, n) => {
        'use strict';
        n.d(e, { Z: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(19931),
          o = n(28189),
          i = n(45119);
        const u = (0, n(70929).op)({
          sparseToDense_: function (t, e, n, u = 0) {
            (0, i.SA)(n);
            const l = (0, o.YT)(t, 'sparseIndices', 'sparseToDense', 'int32'),
              c = (0, o.YT)(e, 'sparseValues', 'sparseToDense', 'string_or_numeric'),
              p = (0, o.YT)(u, 'defaultValue', 'sparseToDense', c.dtype);
            a.T(l, c, n, p);
            const d = { sparseIndices: l, sparseValues: c, defaultValue: p },
              h = { outputShape: n };
            return r.T2.runKernel(s.jgd, d, h);
          },
        });
      },
      19931: (t, e, n) => {
        'use strict';
        function r(t, e, n, r) {
          if ('int32' !== t.dtype) throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);
          if (t.rank > 2) throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${t.shape}.`);
          const s = t.rank > 0 ? t.shape[0] : 1,
            a = t.rank > 1 ? t.shape[1] : 1;
          if (n.length !== a) throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${a}.`);
          const o = e.size;
          if (0 !== e.rank && (1 !== e.rank || o !== s)) throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${s}]`);
          if (e.dtype !== r.dtype) throw new Error('sparseValues.dtype must match defaultValues.dtype');
        }
        n.d(e, { T: () => r });
      },
      41361: (t, e, n) => {
        'use strict';
        n.d(e, { h: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(45119);
        const o = (0, n(70929).op)({
          fft_: function (t) {
            (0, a.vA)('complex64' === t.dtype, () => `The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`);
            const e = { input: t };
            return r.T2.runKernel(s.rGP, e);
          },
        });
      },
      13108: (t, e, n) => {
        'use strict';
        n.d(e, { K: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(45119);
        const o = (0, n(70929).op)({
          ifft_: function (t) {
            (0, a.vA)('complex64' === t.dtype, () => `The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`);
            const e = { input: t };
            return r.T2.runKernel(s.OAQ, e);
          },
        });
      },
      22292: (t, e, n) => {
        'use strict';
        n.d(e, { g: () => f });
        var r = n(37148),
          s = n(25030),
          a = n(35040),
          o = n(9258),
          i = n(70929),
          u = n(1902),
          l = n(62302),
          c = n(53262),
          p = n(45702),
          d = n(17986),
          h = n(13108);
        const f = (0, i.op)({
          irfft_: function (t) {
            const e = t.shape[t.shape.length - 1],
              n = t.size / e;
            let i;
            if (e <= 2) {
              const r = (0, l.t)(t, [n, e]);
              i = (0, h.K)(r);
            } else {
              const f = [n, 2 * (e - 1)],
                m = (0, l.t)((0, u.x)(t), [n, e]),
                g = (0, l.t)((0, a.n)(t), [n, e]),
                y = (0, c.B)((0, d.d)(m, [0, 1], [n, e - 2]), 1),
                b = (0, o.l)((0, c.B)((0, d.d)(g, [0, 1], [n, e - 2]), 1), (0, p.d)(-1)),
                v = (0, s.x)([m, y], 1),
                w = (0, s.x)([g, b], 1),
                T = (0, l.t)((0, r.f)(v, w), [f[0], f[1]]);
              i = (0, h.K)(T);
            }
            if (((i = (0, u.x)(i)), 3 === t.rank && 0 !== t.shape[0])) {
              const e = i,
                n = t.shape[0];
              (i = (0, l.t)(i, [n, i.shape[0] / n, i.shape[1]])), e.dispose();
            }
            return i;
          },
        });
      },
      8775: (t, e, n) => {
        'use strict';
        n.d(e, { z: () => m });
        var r = n(45119),
          s = n(37148),
          a = n(25030),
          o = n(35040),
          i = n(70929),
          u = n(1902),
          l = n(62302),
          c = n(17986),
          p = n(66512),
          d = n(42855),
          h = n(55537),
          f = n(41361);
        const m = (0, i.op)({
          rfft_: function (t, e) {
            (0, r.vA)('float32' === t.dtype, () => `The dtype for rfft() must be real value but got ${t.dtype}`);
            let n = t.shape[t.shape.length - 1];
            const i = t.size / n;
            let m;
            if (null != e && e < n) {
              const r = t.shape.map((t) => 0),
                s = t.shape.map((t) => t);
              (s[t.shape.length - 1] = e), (m = (0, c.d)(t, r, s)), (n = e);
            } else if (null != e && e > n) {
              const r = t.shape.map((t) => t);
              (r[t.shape.length - 1] = e - n), (m = (0, a.x)([t, (0, d.U)(r)], t.shape.length - 1)), (n = e);
            } else m = t;
            const g = (0, h.P)(m),
              y = (0, l.t)((0, s.f)(m, g), [i, n]),
              b = (0, f.h)(y),
              v = Math.floor(n / 2) + 1,
              w = (0, u.x)(b),
              T = (0, o.n)(b),
              x = (0, p.l)(w, [v, n - v], w.shape.length - 1),
              S = (0, p.l)(T, [v, n - v], T.shape.length - 1),
              N = m.shape.slice();
            return (N[m.shape.length - 1] = v), (0, l.t)((0, s.f)(x[0], S[0]), N);
          },
        });
      },
      66512: (t, e, n) => {
        'use strict';
        n.d(e, { l: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          split_: function (t, e, n = 0) {
            const o = { x: (0, a.YT)(t, 'x', 'split') },
              i = { numOrSizeSplits: e, axis: n };
            return r.T2.runKernel(s.Blb, o, i);
          },
        });
      },
      57303: (t, e, n) => {
        'use strict';
        n.d(e, { z: () => s });
        var r = n(45119);
        function s(t, e, n = 0) {
          let s = [];
          if ('number' == typeof e) (0, r.vA)(t.shape[n] % e == 0, () => 'Number of splits must evenly divide the axis.'), (s = new Array(e).fill(t.shape[n] / e));
          else {
            const a = e.reduce((t, e) => (-1 === e && (t += 1), t), 0);
            (0, r.vA)(a <= 1, () => 'There should be only one negative value in split array.');
            const o = e.indexOf(-1);
            if (-1 !== o) {
              const r = e.reduce((t, e) => (e > 0 ? t + e : t));
              e[o] = t.shape[n] - r;
            }
            (0, r.vA)(t.shape[n] === e.reduce((t, e) => t + e), () => 'The sum of sizes must match the size of the axis dimension.'), (s = e);
          }
          return s;
        }
      },
      79348: (t, e, n) => {
        'use strict';
        n.d(e, { R: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          sqrt_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'sqrt', 'float32') };
            return r.T2.runKernel(s.dFH, e);
          },
        });
      },
      45793: (t, e, n) => {
        'use strict';
        n.d(e, { E: () => a });
        var r = n(67897),
          s = n(28189);
        const a = (0, n(70929).op)({
          square_: function (t) {
            const e = (0, s.YT)(t, 'x', 'square');
            return r.T2.runKernel('Square', { x: e }, {});
          },
        });
      },
      53427: (t, e, n) => {
        'use strict';
        n.d(e, { P: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189),
          i = n(62198);
        const u = (0, n(70929).op)({
          squaredDifference_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'squaredDifference'),
              u = (0, o.YT)(e, 'b', 'squaredDifference');
            ([n, u] = (0, a.makeTypesMatch)(n, u)), (0, i.assertAndGetBroadcastShape)(n.shape, u.shape);
            const l = { a: n, b: u };
            return r.T2.runKernel(s.Ddj, l, {});
          },
        });
      },
      5932: (t, e, n) => {
        'use strict';
        n.d(e, { r: () => i });
        var r = n(28189),
          s = n(45119),
          a = n(70929),
          o = n(62302);
        const i = (0, a.op)({
          squeeze_: function (t, e) {
            const n = (0, r.YT)(t, 'x', 'squeeze', 'string_or_numeric');
            return (0, o.t)(n, (0, s.gx)(n.shape, e).newShape);
          },
        });
      },
      54268: (t, e, n) => {
        'use strict';
        n.d(e, { t: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          stack_: function (t, e = 0) {
            const n = (0, a.j1)(t, 'tensors', 'stack', 'string_or_numeric');
            o.vA(n.length >= 1, () => 'Pass at least one tensor to tf.stack'), n.length > 0 && o.vA(e <= n[0].rank, () => 'Axis must be <= rank of the tensor');
            const i = n,
              u = { axis: e };
            return r.T2.runKernel(s.mM$, i, u);
          },
        });
      },
      10700: (t, e, n) => {
        'use strict';
        n.d(e, { P: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          step_: function (t, e = 0) {
            const n = { x: (0, a.YT)(t, 'x', 'step') },
              o = { alpha: e };
            return r.T2.runKernel(s.pnw, n, o);
          },
        });
      },
      45894: (t, e, n) => {
        'use strict';
        n.d(e, { Y: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          stridedSlice_: function (t, e, n, o, i = 0, u = 0, l = 0, c = 0, p = 0) {
            const d = { x: (0, a.YT)(t, 'x', 'stridedSlice', 'string_or_numeric') },
              h = { begin: e, end: n, strides: o, beginMask: i, endMask: u, ellipsisMask: l, newAxisMask: c, shrinkAxisMask: p };
            return r.T2.runKernel(s.UcO, d, h);
          },
        });
      },
      7539: (t, e, n) => {
        'use strict';
        n.d(e, { E: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          staticRegexReplace_: function (t, e, n, o = !0) {
            const i = (0, a.YT)(t, 'input', 'staticRegexReplace', 'string'),
              u = { pattern: e, rewrite: n, replaceGlobal: o };
            return r.T2.runKernel(s.GZp, { x: i }, u);
          },
        });
      },
      96557: (t, e, n) => {
        'use strict';
        n.d(e, { A: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          stringNGrams_: function (t, e, n, o, i, u, l, c) {
            const p = (0, a.YT)(t, 'data', 'stringNGrams', 'string');
            if ('string' !== p.dtype) throw new Error('Data must be of datatype string');
            if (1 !== p.shape.length) throw new Error(`Data must be a vector, saw: ${p.shape}`);
            const d = (0, a.YT)(e, 'dataSplits', 'stringNGrams');
            if ('int32' !== d.dtype) throw new Error('Data splits must be of datatype int32');
            const h = { separator: n, nGramWidths: o, leftPad: i, rightPad: u, padWidth: l, preserveShortSequences: c },
              f = { data: p, dataSplits: d },
              m = r.T2.runKernel(s.YAb, f, h);
            return { nGrams: m[0], nGramsSplits: m[1] };
          },
        });
      },
      87984: (t, e, n) => {
        'use strict';
        n.d(e, { c: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          stringSplit_: function (t, e, n = !0) {
            const o = (0, a.YT)(t, 'input', 'stringSplit', 'string'),
              i = (0, a.YT)(e, 'delimiter', 'stringSplit', 'string');
            if (1 !== o.rank) throw new Error(`Input should be Tensor1D but received shape ${o.shape}`);
            if (0 !== i.rank) throw new Error(`Delimiter should be a scalar but received shape ${i.shape}`);
            const u = { skipEmpty: n },
              l = { input: o, delimiter: i },
              c = r.T2.runKernel(s.iW0, l, u);
            return { indices: c[0], values: c[1], shape: c[2] };
          },
        });
      },
      1788: (t, e, n) => {
        'use strict';
        n.d(e, { N: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          stringToHashBucketFast_: function (t, e) {
            const n = (0, a.YT)(t, 'input', 'stringToHashBucketFast', 'string'),
              o = { numBuckets: e };
            if (e <= 0) throw new Error('Number of buckets must be at least 1');
            const i = { input: n };
            return r.T2.runKernel(s.$jE, i, o);
          },
        });
      },
      77126: (t, e, n) => {
        'use strict';
        n.d(e, { j: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(30565),
          o = n(28189);
        const i = (0, n(70929).op)({
          sub_: function (t, e) {
            let n = (0, o.YT)(t, 'a', 'sub'),
              i = (0, o.YT)(e, 'b', 'sub');
            [n, i] = (0, a.makeTypesMatch)(n, i);
            const u = { a: n, b: i };
            return r.T2.runKernel(s.PbM, u);
          },
        });
      },
      83791: (t, e, n) => {
        'use strict';
        n.d(e, { c: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(29809);
        const i = (0, n(70929).op)({
          sum_: function (t, e = null, n = !1) {
            let i = (0, a.YT)(t, 'x', 'sum');
            'bool' === i.dtype && (i = (0, o.w)(i, 'int32'));
            const u = { x: i },
              l = { axis: e, keepDims: n };
            return r.T2.runKernel(s.WuN, u, l);
          },
        });
      },
      77823: (t, e, n) => {
        'use strict';
        n.d(e, { M: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          tan_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'tan', 'float32') };
            return r.T2.runKernel(s.oFs, e);
          },
        });
      },
      57311: (t, e, n) => {
        'use strict';
        n.d(e, { y: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          tanh_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'tanh', 'float32') };
            return r.T2.runKernel(s.iuW, e);
          },
        });
      },
      74027: (t, e, n) => {
        'use strict';
        n.d(e, { O: () => a });
        var r = n(28189),
          s = n(19171);
        function a(t, e, n) {
          const a = (0, r.MZ)(t, n);
          return (0, s.Q)(t, e, a, n);
        }
      },
      62018: (t, e, n) => {
        'use strict';
        n.d(e, { t: () => o });
        var r = n(28189),
          s = n(45119),
          a = n(19171);
        function o(t, e) {
          (0, s.HO)(t);
          const n = (0, r.MZ)(t, e);
          if (1 !== n.length) throw new Error('tensor1d() requires values to be a flat/TypedArray');
          return (0, a.Q)(t, null, n, e);
        }
      },
      18941: (t, e, n) => {
        'use strict';
        n.d(e, { K: () => o });
        var r = n(28189),
          s = n(45119),
          a = n(19171);
        function o(t, e, n) {
          if (((0, s.HO)(t), null != e && 2 !== e.length)) throw new Error('tensor2d() requires shape to have two numbers');
          const o = (0, r.MZ)(t, n);
          if (2 !== o.length && 1 !== o.length) throw new Error('tensor2d() requires values to be number[][] or flat/TypedArray');
          if (1 === o.length && null == e) throw new Error('tensor2d() requires shape to be provided when `values` are a flat/TypedArray');
          return (0, a.Q)(t, e, o, n);
        }
      },
      42768: (t, e, n) => {
        'use strict';
        n.d(e, { $: () => o });
        var r = n(28189),
          s = n(45119),
          a = n(19171);
        function o(t, e, n) {
          if (((0, s.HO)(t), null != e && 3 !== e.length)) throw new Error('tensor3d() requires shape to have three numbers');
          const o = (0, r.MZ)(t, n);
          if (3 !== o.length && 1 !== o.length) throw new Error('tensor3d() requires values to be number[][][] or flat/TypedArray');
          if (1 === o.length && null == e) throw new Error('tensor3d() requires shape to be provided when `values` are a flat array');
          return (0, a.Q)(t, e, o, n);
        }
      },
      25107: (t, e, n) => {
        'use strict';
        n.d(e, { g: () => o });
        var r = n(28189),
          s = n(45119),
          a = n(19171);
        function o(t, e, n) {
          if (((0, s.HO)(t), null != e && 4 !== e.length)) throw new Error('tensor4d() requires shape to have four numbers');
          const o = (0, r.MZ)(t, n);
          if (4 !== o.length && 1 !== o.length) throw new Error('tensor4d() requires values to be number[][][][] or flat/TypedArray');
          if (1 === o.length && null == e) throw new Error('tensor4d() requires shape to be provided when `values` are a flat array');
          return (0, a.Q)(t, e, o, n);
        }
      },
      35590: (t, e, n) => {
        'use strict';
        n.d(e, { L: () => o });
        var r = n(28189),
          s = n(45119),
          a = n(19171);
        function o(t, e, n) {
          if (((0, s.HO)(t), null != e && 5 !== e.length)) throw new Error('tensor5d() requires shape to have five numbers');
          const o = (0, r.MZ)(t, n);
          if (5 !== o.length && 1 !== o.length) throw new Error('tensor5d() requires values to be number[][][][][] or flat/TypedArray');
          if (1 === o.length && null == e) throw new Error('tensor5d() requires shape to be provided when `values` are a flat array');
          return (0, a.Q)(t, e, o, n);
        }
      },
      10385: (t, e, n) => {
        'use strict';
        n.d(e, { y: () => o });
        var r = n(28189),
          s = n(45119),
          a = n(19171);
        function o(t, e, n) {
          if (((0, s.HO)(t), null != e && 6 !== e.length)) throw new Error('tensor6d() requires shape to have six numbers');
          const o = (0, r.MZ)(t, n);
          if (6 !== o.length && 1 !== o.length) throw new Error('tensor6d() requires values to be number[][][][][][] or flat/TypedArray');
          if (1 === o.length && null == e) throw new Error('tensor6d() requires shape to be provided when `values` are a flat array');
          return (e = e || o), (0, a.Q)(t, e, o, n);
        }
      },
      19171: (t, e, n) => {
        'use strict';
        n.d(e, { Q: () => i });
        var r = n(67897),
          s = n(52046),
          a = n(45119),
          o = n(89783);
        function i(t, e, n, i) {
          if (null == i) i = (0, a.X$)(t);
          else if ('complex64' === i) throw new Error('Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).');
          if ((0, s.Nw)(t) || (0, s.Oj)(t)) {
            if ('float32' !== i && 'int32' !== i) throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${i}.`);
            return r.T2.backend.createTensorFromGPUData(t, e || n, i);
          }
          if (!(0, o.isTypedArray)(t) && !Array.isArray(t) && 'number' != typeof t && 'boolean' != typeof t && 'string' != typeof t)
            throw new Error('values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray');
          if (null != e) {
            (0, a.SA)(e);
            const t = (0, a.Ze)(e),
              r = (0, a.Ze)(n);
            (0, a.vA)(t === r, () => `Based on the provided shape, [${e}], the tensor should have ${t} values but has ${r}`);
            for (let t = 0; t < n.length; ++t) {
              const r = n[t],
                s = t !== n.length - 1 || r !== (0, a.Ze)(e.slice(t));
              (0, a.vA)(n[t] === e[t] || !s, () => `Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `);
            }
          }
          return (
            (0, o.isTypedArray)(t) || Array.isArray(t) || (t = [t]),
            (e = e || n),
            (t = 'string' !== i ? (0, o.toTypedArray)(t, i) : (0, o.flatten)(t, [], !0)),
            r.T2.makeTensor(t, e, i)
          );
        }
      },
      67964: (t, e, n) => {
        'use strict';
        n.d(e, { N: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(70929),
          i = n(26170);
        const u = (0, o.op)({
          tensorScatterUpdate_: function (t, e, n) {
            const o = (0, a.YT)(t, 'tensor', 'tensorScatterupdate'),
              u = (0, a.YT)(e, 'indices', 'tensorScatterupdate', 'int32'),
              l = (0, a.YT)(n, 'updates', 'tensorScatterupdate');
            if ((i.validateInput(l, u, o.shape), o.dtype !== l.dtype)) throw new Error(`tensor and updates must have the same dtype, instead they are ${o.dtype} and ${l.dtype}.`);
            const c = { tensor: o, indices: u, updates: l };
            return r.T2.runKernel(s.X4r, c, {});
          },
        });
      },
      64826: (t, e, n) => {
        'use strict';
        n.d(e, { V: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          tile_: function (t, e) {
            const n = (0, a.YT)(t, 'x', 'tile', 'string_or_numeric');
            o.vA(n.rank === e.length, () => `Error in transpose: rank of input ${n.rank} must match length of reps ${e}.`);
            const i = { x: n },
              u = { reps: e };
            return r.T2.runKernel(s.FAs, i, u);
          },
        });
      },
      21190: (t, e, n) => {
        'use strict';
        n.d(e, { r: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          topk_: function (t, e = 1, n = !0) {
            const o = (0, a.YT)(t, 'x', 'topk');
            if (0 === o.rank) throw new Error('topk() expects the input to be of rank 1 or higher');
            const i = o.shape[o.shape.length - 1];
            if (e < 0) throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);
            if (e > i) throw new Error(`'k' passed to topk() must be <= the last dimension (${i}) but got ${e}`);
            const u = { x: o },
              l = { k: e, sorted: n },
              [c, p] = r.T2.runKernel(s.TBb, u, l);
            return { values: c, indices: p };
          },
        });
      },
      7703: (t, e, n) => {
        'use strict';
        n.d(e, { m: () => h });
        var r = n(67897),
          s = n(35287),
          a = n(15441),
          o = n(28189),
          i = n(45119),
          u = n(37148),
          l = n(35040),
          c = n(96522),
          p = n(70929),
          d = n(1902);
        const h = (0, p.op)({
          transpose_: function (t, e, n) {
            const p = (0, o.YT)(t, 'x', 'transpose');
            if (
              (null == e && (e = p.shape.map((t, e) => e).reverse()),
              i.vA(p.rank === e.length, () => `Error in transpose: rank of input ${p.rank} must match length of perm ${e}.`),
              e.forEach((t) => {
                i.vA(t >= 0 && t < p.rank, () => "All entries in 'perm' must be between 0 and " + (p.rank - 1) + ` but got ${e}`);
              }),
              p.rank <= 1)
            )
              return p.clone();
            const h = { x: p },
              f = { perm: e };
            return 'complex64' === p.dtype
              ? (0, s.DZ)(() => {
                  let t = (0, d.x)(p),
                    e = (0, l.n)(p);
                  return (t = r.T2.runKernel(a.wx0, { x: t }, f)), (e = r.T2.runKernel(a.wx0, { x: e }, f)), n && (e = (0, c.H)(e)), (0, u.f)(t, e);
                })
              : r.T2.runKernel(a.wx0, h, f);
          },
        });
      },
      97858: (t, e, n) => {
        'use strict';
        n.d(e, { e: () => i });
        var r = n(45119),
          s = n(448),
          a = n(70929),
          o = n(89748);
        const i = (0, a.op)({
          truncatedNormal_: function (t, e = 0, n = 1, a, i) {
            if (((0, r.SA)(t), null != a && 'bool' === a)) throw new Error('Unsupported data type $ { dtype }');
            const u = new o.ai(e, n, a, !0, i),
              l = (0, s.r)(t, a);
            for (let t = 0; t < l.values.length; t++) l.values[t] = u.nextValue();
            return l.toTensor();
          },
        });
      },
      73937: (t, e, n) => {
        'use strict';
        n.d(e, { A: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          unique_: function (t, e = 0) {
            const n = (0, a.YT)(t, 'x', 'unique', 'string_or_numeric');
            (0, o.vA)(n.rank > 0, () => 'The input tensor must be at least 1D');
            const i = { x: n },
              u = { axis: e },
              [l, c] = r.T2.runKernel(s.EwU, i, u);
            return { values: l, indices: c };
          },
        });
      },
      97706: (t, e, n) => {
        'use strict';
        n.d(e, { z: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          unsortedSegmentSum_: function (t, e, n) {
            const i = (0, a.YT)(t, 'x', 'unsortedSegmentSum'),
              u = (0, a.YT)(e, 'segmentIds', 'unsortedSegmentSum', 'int32');
            (0, o.vA)((0, o.E6)(n), () => 'numSegments must be of dtype int');
            const l = { x: i, segmentIds: u },
              c = { numSegments: n };
            return r.T2.runKernel(s.pPe, l, c);
          },
        });
      },
      67261: (t, e, n) => {
        'use strict';
        n.d(e, { K: () => i });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(45119);
        const i = (0, n(70929).op)({
          unstack_: function (t, e = 0) {
            const n = (0, a.YT)(t, 'x', 'unstack', 'string_or_numeric');
            o.vA(e >= -n.shape.length && e < n.shape.length, () => `Axis = ${e} is not in [-${n.shape.length}, ${n.shape.length})`);
            const i = { value: n },
              u = { axis: e };
            return r.T2.runKernel(s.dXR, i, u);
          },
        });
      },
      16319: (t, e, n) => {
        'use strict';
        n.d(e, { r: () => s });
        var r = n(79120);
        function s(t, e) {
          return (0, r.s)(t, e, 'right');
        }
      },
      66126: (t, e, n) => {
        'use strict';
        n.d(e, { b: () => s });
        var r = n(67897);
        function s(t, e = !0, n, s) {
          return r.T2.makeVariable(t, e, n, s);
        }
      },
      12151: (t, e, n) => {
        'use strict';
        n.d(e, { _: () => u });
        var r = n(67897),
          s = n(15441),
          a = n(28189),
          o = n(63567),
          i = n(62198);
        const u = (0, n(70929).op)({
          where_: function (t, e, n) {
            const u = (0, a.YT)(e, 'a', 'where'),
              l = (0, a.YT)(n, 'b', 'where'),
              c = (0, a.YT)(t, 'condition', 'where', 'bool'),
              p = (0, i.assertAndGetBroadcastShape)((0, i.assertAndGetBroadcastShape)(c.shape, u.shape), l.shape),
              d = { condition: (0, o.h)(c, p), t: (0, o.h)(u, p), e: (0, o.h)(l, p) };
            return r.T2.runKernel(s.l6P, d);
          },
        });
      },
      44271: (t, e, n) => {
        'use strict';
        n.d(e, { Y: () => a });
        var r = n(54411),
          s = n(28189);
        const a = async function (t) {
          const e = (0, s.YT)(t, 'condition', 'whereAsync', 'bool'),
            n = await e.data(),
            a = (0, r.Y)(e.shape, n);
          return t !== e && e.dispose(), a;
        };
      },
      42855: (t, e, n) => {
        'use strict';
        n.d(e, { U: () => o });
        var r = n(67897),
          s = n(45119),
          a = n(37148);
        function o(t, e = 'float32') {
          if (((0, s.SA)(t), 'complex64' === e)) {
            const e = o(t, 'float32'),
              n = o(t, 'float32');
            return (0, a.f)(e, n);
          }
          const n = (0, s.Ty)((0, s.Ze)(t), e);
          return r.T2.makeTensor(n, t, e);
        }
      },
      55537: (t, e, n) => {
        'use strict';
        n.d(e, { P: () => o });
        var r = n(67897),
          s = n(15441),
          a = n(28189);
        const o = (0, n(70929).op)({
          zerosLike_: function (t) {
            const e = { x: (0, a.YT)(t, 'x', 'zerosLike') };
            return r.T2.runKernel(s.xJ3, e);
          },
        });
      },
      99696: (t, e, n) => {
        'use strict';
        n.d(e, { K: () => d });
        var r = n(67897),
          s = n(35287),
          a = n(37523),
          o = n(89359),
          i = n(9258),
          u = n(79348),
          l = n(45793),
          c = n(55537),
          p = n(64403);
        class d extends p.E {
          static get className() {
            return 'Adadelta';
          }
          constructor(t, e, n = null) {
            super(),
              (this.learningRate = t),
              (this.rho = e),
              (this.epsilon = n),
              (this.accumulatedGrads = []),
              (this.accumulatedUpdates = []),
              null == n && (this.epsilon = r.T2.backend.epsilon());
          }
          applyGradients(t) {
            (Array.isArray(t) ? t.map((t) => t.name) : Object.keys(t)).forEach((e, n) => {
              const p = r.T2.registeredVariables[e];
              null == this.accumulatedGrads[n] && (this.accumulatedGrads[n] = { originalName: `${e}/accum_grad`, variable: (0, s.DZ)(() => (0, c.P)(p).variable(!1)) }),
                null == this.accumulatedUpdates[n] && (this.accumulatedUpdates[n] = { originalName: `${e}/accum_var`, variable: (0, s.DZ)(() => (0, c.P)(p).variable(!1)) });
              const d = Array.isArray(t) ? t[n].tensor : t[e];
              if (null == d) return;
              const h = this.accumulatedGrads[n].variable,
                f = this.accumulatedUpdates[n].variable;
              (0, s.DZ)(() => {
                const t = (0, a.W)((0, i.l)(h, this.rho), (0, i.l)((0, l.E)(d), 1 - this.rho)),
                  e = (0, i.l)((0, o.y)((0, u.R)((0, a.W)(f, this.epsilon)), (0, u.R)((0, a.W)(h, this.epsilon))), d),
                  n = (0, a.W)((0, i.l)(f, this.rho), (0, i.l)((0, l.E)(e), 1 - this.rho));
                h.assign(t), f.assign(n);
                const r = (0, a.W)((0, i.l)(e, -this.learningRate), p);
                p.assign(r);
              });
            }),
              this.incrementIterations();
          }
          dispose() {
            null != this.accumulatedUpdates && ((0, s.AS)(this.accumulatedGrads.map((t) => t.variable)), (0, s.AS)(this.accumulatedUpdates.map((t) => t.variable)));
          }
          async getWeights() {
            const t = [...this.accumulatedGrads, ...this.accumulatedUpdates];
            return [await this.saveIterations()].concat(t.map((t) => ({ name: t.originalName, tensor: t.variable })));
          }
          async setWeights(t) {
            const e = (t = await this.extractIterations(t)).length / 2;
            (this.accumulatedGrads = t.slice(0, e).map((t) => ({ originalName: t.name, variable: t.tensor.variable(!1) }))),
              (this.accumulatedUpdates = t.slice(e, 2 * e).map((t) => ({ originalName: t.name, variable: t.tensor.variable(!1) })));
          }
          getConfig() {
            return { learningRate: this.learningRate, rho: this.rho, epsilon: this.epsilon };
          }
          static fromConfig(t, e) {
            return new t(e.learningRate, e.rho, e.epsilon);
          }
        }
      },
      85316: (t, e, n) => {
        'use strict';
        n.d(e, { a: () => d });
        var r = n(67897),
          s = n(35287),
          a = n(37523),
          o = n(89359),
          i = n(96111),
          u = n(9258),
          l = n(79348),
          c = n(45793),
          p = n(64403);
        class d extends p.E {
          static get className() {
            return 'Adagrad';
          }
          constructor(t, e = 0.1) {
            super(), (this.learningRate = t), (this.initialAccumulatorValue = e), (this.accumulatedGrads = []);
          }
          applyGradients(t) {
            (Array.isArray(t) ? t.map((t) => t.name) : Object.keys(t)).forEach((e, n) => {
              const p = r.T2.registeredVariables[e];
              if (null == this.accumulatedGrads[n]) {
                const t = !1;
                this.accumulatedGrads[n] = { originalName: `${e}/accumulator`, variable: (0, s.DZ)(() => (0, i.G)(p.shape, this.initialAccumulatorValue).variable(t)) };
              }
              const d = Array.isArray(t) ? t[n].tensor : t[e];
              if (null == d) return;
              const h = this.accumulatedGrads[n].variable;
              (0, s.DZ)(() => {
                const t = (0, a.W)(h, (0, c.E)(d));
                h.assign(t);
                const e = (0, a.W)((0, u.l)((0, o.y)(d, (0, l.R)((0, a.W)(t, r.T2.backend.epsilon()))), -this.learningRate), p);
                p.assign(e);
              });
            }),
              this.incrementIterations();
          }
          dispose() {
            null != this.accumulatedGrads && (0, s.AS)(this.accumulatedGrads.map((t) => t.variable));
          }
          async getWeights() {
            return [await this.saveIterations()].concat(this.accumulatedGrads.map((t) => ({ name: t.originalName, tensor: t.variable })));
          }
          async setWeights(t) {
            (t = await this.extractIterations(t)), (this.accumulatedGrads = t.map((t) => ({ originalName: t.name, variable: t.tensor.variable(!1) })));
          }
          getConfig() {
            return { learningRate: this.learningRate, initialAccumulatorValue: this.initialAccumulatorValue };
          }
          static fromConfig(t, e) {
            return new t(e.learningRate, e.initialAccumulatorValue);
          }
        }
      },
      81409: (t, e, n) => {
        'use strict';
        n.d(e, { F: () => m });
        var r = n(67897),
          s = n(35287),
          a = n(37523),
          o = n(89359),
          i = n(9258),
          u = n(98990),
          l = n(45702),
          c = n(79348),
          p = n(45793),
          d = n(77126),
          h = n(55537),
          f = n(64403);
        class m extends f.E {
          static get className() {
            return 'Adam';
          }
          constructor(t, e, n, a = null) {
            super(),
              (this.learningRate = t),
              (this.beta1 = e),
              (this.beta2 = n),
              (this.epsilon = a),
              (this.accumulatedFirstMoment = []),
              (this.accumulatedSecondMoment = []),
              (0, s.DZ)(() => {
                (this.accBeta1 = (0, l.d)(e).variable()), (this.accBeta2 = (0, l.d)(n).variable());
              }),
              null == a && (this.epsilon = r.T2.backend.epsilon());
          }
          applyGradients(t) {
            const e = Array.isArray(t) ? t.map((t) => t.name) : Object.keys(t);
            (0, s.DZ)(() => {
              const n = (0, d.j)(1, this.accBeta1),
                u = (0, d.j)(1, this.accBeta2);
              e.forEach((e, l) => {
                const d = r.T2.registeredVariables[e];
                null == this.accumulatedFirstMoment[l] && (this.accumulatedFirstMoment[l] = { originalName: `${e}/m`, variable: (0, s.DZ)(() => (0, h.P)(d).variable(!1)) }),
                  null == this.accumulatedSecondMoment[l] && (this.accumulatedSecondMoment[l] = { originalName: `${e}/v`, variable: (0, s.DZ)(() => (0, h.P)(d).variable(!1)) });
                const f = Array.isArray(t) ? t[l].tensor : t[e];
                if (null == f) return;
                const m = this.accumulatedFirstMoment[l].variable,
                  g = this.accumulatedSecondMoment[l].variable,
                  y = (0, a.W)((0, i.l)(m, this.beta1), (0, i.l)(f, 1 - this.beta1)),
                  b = (0, a.W)((0, i.l)(g, this.beta2), (0, i.l)((0, p.E)(f), 1 - this.beta2)),
                  v = (0, o.y)(y, n),
                  w = (0, o.y)(b, u);
                m.assign(y), g.assign(b);
                const T = (0, a.W)((0, i.l)((0, o.y)(v, (0, a.W)((0, c.R)(w), this.epsilon)), -this.learningRate), d);
                d.assign(T);
              }),
                this.accBeta1.assign((0, i.l)(this.accBeta1, this.beta1)),
                this.accBeta2.assign((0, i.l)(this.accBeta2, this.beta2));
            }),
              this.incrementIterations();
          }
          dispose() {
            this.accBeta1.dispose(),
              this.accBeta2.dispose(),
              null != this.accumulatedFirstMoment && (0, s.AS)(this.accumulatedFirstMoment.map((t) => t.variable)),
              null != this.accumulatedSecondMoment && (0, s.AS)(this.accumulatedSecondMoment.map((t) => t.variable));
          }
          async getWeights() {
            const t = [...this.accumulatedFirstMoment, ...this.accumulatedSecondMoment];
            return [await this.saveIterations()].concat(t.map((t) => ({ name: t.originalName, tensor: t.variable })));
          }
          async setWeights(t) {
            (t = await this.extractIterations(t)),
              (0, s.DZ)(() => {
                this.accBeta1.assign((0, u.n)(this.beta1, this.iterations_ + 1)), this.accBeta2.assign((0, u.n)(this.beta2, this.iterations_ + 1));
              });
            const e = t.length / 2;
            (this.accumulatedFirstMoment = t.slice(0, e).map((t) => ({ originalName: t.name, variable: t.tensor.variable(!1) }))),
              (this.accumulatedSecondMoment = t.slice(e, 2 * e).map((t) => ({ originalName: t.name, variable: t.tensor.variable(!1) })));
          }
          getConfig() {
            return { learningRate: this.learningRate, beta1: this.beta1, beta2: this.beta2, epsilon: this.epsilon };
          }
          static fromConfig(t, e) {
            return new t(e.learningRate, e.beta1, e.beta2, e.epsilon);
          }
        }
      },
      98544: (t, e, n) => {
        'use strict';
        n.d(e, { o: () => f });
        var r = n(67897),
          s = n(35287),
          a = n(4888),
          o = n(37523),
          i = n(89359),
          u = n(30178),
          l = n(9258),
          c = n(45702),
          p = n(77126),
          d = n(55537),
          h = n(64403);
        class f extends h.E {
          static get className() {
            return 'Adamax';
          }
          constructor(t, e, n, a = null, o = 0) {
            super(),
              (this.learningRate = t),
              (this.beta1 = e),
              (this.beta2 = n),
              (this.epsilon = a),
              (this.decay = o),
              (this.accumulatedFirstMoment = []),
              (this.accumulatedWeightedInfNorm = []),
              (0, s.DZ)(() => {
                (this.iteration = (0, c.d)(0).variable()), (this.accBeta1 = (0, c.d)(e).variable());
              }),
              null == a && (this.epsilon = r.T2.backend.epsilon());
          }
          applyGradients(t) {
            const e = Array.isArray(t) ? t.map((t) => t.name) : Object.keys(t);
            (0, s.DZ)(() => {
              const n = (0, p.j)(1, this.accBeta1),
                s = (0, i.y)(-this.learningRate, (0, o.W)((0, l.l)(this.iteration, this.decay), 1));
              e.forEach((e, c) => {
                const p = r.T2.registeredVariables[e];
                null == this.accumulatedFirstMoment[c] && (this.accumulatedFirstMoment[c] = { originalName: `${e}/m`, variable: (0, d.P)(p).variable(!1) }),
                  null == this.accumulatedWeightedInfNorm[c] && (this.accumulatedWeightedInfNorm[c] = { originalName: `${e}/v`, variable: (0, d.P)(p).variable(!1) });
                const h = Array.isArray(t) ? t[c].tensor : t[e];
                if (null == h) return;
                const f = this.accumulatedFirstMoment[c].variable,
                  m = this.accumulatedWeightedInfNorm[c].variable,
                  g = (0, o.W)((0, l.l)(f, this.beta1), (0, l.l)(h, 1 - this.beta1)),
                  y = (0, l.l)(m, this.beta2),
                  b = (0, a.t)(h),
                  v = (0, u.P)(y, b);
                f.assign(g), m.assign(v);
                const w = (0, o.W)((0, l.l)((0, i.y)(s, n), (0, i.y)(g, (0, o.W)(v, this.epsilon))), p);
                p.assign(w);
              }),
                this.iteration.assign((0, o.W)(this.iteration, 1)),
                this.accBeta1.assign((0, l.l)(this.accBeta1, this.beta1));
            }),
              this.incrementIterations();
          }
          dispose() {
            this.accBeta1.dispose(),
              this.iteration.dispose(),
              null != this.accumulatedFirstMoment && (0, s.AS)(this.accumulatedFirstMoment.map((t) => t.variable)),
              null != this.accumulatedWeightedInfNorm && (0, s.AS)(this.accumulatedWeightedInfNorm.map((t) => t.variable));
          }
          async getWeights() {
            throw new Error('getWeights() is not implemented for Adamax yet.');
          }
          async setWeights(t) {
            throw new Error('setWeights() is not implemented for Adamax yet.');
          }
          getConfig() {
            return { learningRate: this.learningRate, beta1: this.beta1, beta2: this.beta2, epsilon: this.epsilon, decay: this.decay };
          }
          static fromConfig(t, e) {
            return new t(e.learningRate, e.beta1, e.beta2, e.epsilon, e.decay);
          }
        }
      },
      5340: (t, e, n) => {
        'use strict';
        n.d(e, { Q: () => c });
        var r = n(67897),
          s = n(35287),
          a = n(37523),
          o = n(9258),
          i = n(45702),
          u = n(55537),
          l = n(37930);
        class c extends l.S {
          static get className() {
            return 'Momentum';
          }
          constructor(t, e, n = !1) {
            super(t), (this.learningRate = t), (this.momentum = e), (this.useNesterov = n), (this.accumulations = []), (this.m = (0, i.d)(this.momentum));
          }
          applyGradients(t) {
            (Array.isArray(t) ? t.map((t) => t.name) : Object.keys(t)).forEach((e, n) => {
              const i = r.T2.registeredVariables[e];
              if (null == this.accumulations[n]) {
                const t = !1;
                this.accumulations[n] = { originalName: `${e}/momentum`, variable: (0, s.DZ)(() => (0, u.P)(i).variable(t)) };
              }
              const l = this.accumulations[n].variable,
                c = Array.isArray(t) ? t[n].tensor : t[e];
              null != c &&
                (0, s.DZ)(() => {
                  let t;
                  const e = (0, a.W)((0, o.l)(this.m, l), c);
                  (t = this.useNesterov ? (0, a.W)((0, o.l)(this.c, (0, a.W)(c, (0, o.l)(e, this.m))), i) : (0, a.W)((0, o.l)(this.c, e), i)), l.assign(e), i.assign(t);
                });
            }),
              this.incrementIterations();
          }
          dispose() {
            this.m.dispose(), null != this.accumulations && (0, s.AS)(this.accumulations.map((t) => t.variable));
          }
          setMomentum(t) {
            this.momentum = t;
          }
          async getWeights() {
            return [await this.saveIterations()].concat(this.accumulations.map((t) => ({ name: t.originalName, tensor: t.variable })));
          }
          async setWeights(t) {
            (t = await this.extractIterations(t)), (this.accumulations = t.map((t) => ({ originalName: t.name, variable: t.tensor.variable(!1) })));
          }
          getConfig() {
            return { learningRate: this.learningRate, momentum: this.momentum, useNesterov: this.useNesterov };
          }
          static fromConfig(t, e) {
            return new t(e.learningRate, e.momentum, e.useNesterov);
          }
        }
      },
      64403: (t, e, n) => {
        'use strict';
        n.d(e, { E: () => i });
        var r = n(35287),
          s = n(31830),
          a = n(45702),
          o = n(79559);
        class i extends o.Serializable {
          minimize(t, e = !1, n) {
            const { value: s, grads: a } = this.computeGradients(t, n);
            if (null != n) {
              const t = n.map((t) => ({ name: t.name, tensor: a[t.name] }));
              this.applyGradients(t);
            } else this.applyGradients(a);
            return (0, r.AS)(a), e ? s : (s.dispose(), null);
          }
          get iterations() {
            return null == this.iterations_ && (this.iterations_ = 0), this.iterations_;
          }
          incrementIterations() {
            this.iterations_ = this.iterations + 1;
          }
          computeGradients(t, e) {
            return (0, s.y7)(t, e);
          }
          dispose() {
            null != this.iterations_ && (0, r.AS)(this.iterations_);
          }
          async saveIterations() {
            return null == this.iterations_ && (this.iterations_ = 0), { name: 'iter', tensor: (0, a.d)(this.iterations_, 'int32') };
          }
          async getWeights() {
            throw new Error('getWeights() is not implemented for this optimizer yet.');
          }
          async setWeights(t) {
            throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`);
          }
          async extractIterations(t) {
            return (this.iterations_ = (await t[0].tensor.data())[0]), t.slice(1);
          }
        }
        Object.defineProperty(i, Symbol.hasInstance, { value: (t) => null != t.minimize && null != t.computeGradients && null != t.applyGradients });
      },
      83335: (t, e, n) => {
        'use strict';
        n.d(e, { L: () => c });
        var r = n(99696),
          s = n(85316),
          a = n(81409),
          o = n(98544),
          i = n(5340),
          u = n(25727),
          l = n(37930);
        class c {
          static sgd(t) {
            return new l.S(t);
          }
          static momentum(t, e, n = !1) {
            return new i.Q(t, e, n);
          }
          static rmsprop(t, e = 0.9, n = 0, r = null, s = !1) {
            return new u.P(t, e, n, r, s);
          }
          static adam(t = 0.001, e = 0.9, n = 0.999, r = null) {
            return new a.F(t, e, n, r);
          }
          static adadelta(t = 0.001, e = 0.95, n = null) {
            return new r.K(t, e, n);
          }
          static adamax(t = 0.002, e = 0.9, n = 0.999, r = null, s = 0) {
            return new o.o(t, e, n, r, s);
          }
          static adagrad(t, e = 0.1) {
            return new s.a(t, e);
          }
        }
      },
      63822: (t, e, n) => {
        'use strict';
        n.d(e, { i: () => d });
        var r = n(99696),
          s = n(85316),
          a = n(81409),
          o = n(98544),
          i = n(5340),
          u = n(25727),
          l = n(37930),
          c = n(79559);
        const p = [r.K, s.a, a.F, o.o, i.Q, u.P, l.S];
        function d() {
          for (const t of p) (0, c.registerClass)(t);
        }
      },
      25727: (t, e, n) => {
        'use strict';
        n.d(e, { P: () => h });
        var r = n(67897),
          s = n(35287),
          a = n(37523),
          o = n(89359),
          i = n(9258),
          u = n(79348),
          l = n(45793),
          c = n(77126),
          p = n(55537),
          d = n(64403);
        class h extends d.E {
          static get className() {
            return 'RMSProp';
          }
          constructor(t, e = 0.9, n = 0, s = null, a = !1) {
            if (
              (super(),
              (this.learningRate = t),
              (this.decay = e),
              (this.momentum = n),
              (this.epsilon = s),
              (this.accumulatedMeanSquares = []),
              (this.accumulatedMoments = []),
              (this.accumulatedMeanGrads = []),
              (this.centered = a),
              null == s && (this.epsilon = r.T2.backend.epsilon()),
              null == t)
            )
              throw new Error('learningRate for RMSPropOptimizer must be defined.');
          }
          applyGradients(t) {
            (Array.isArray(t) ? t.map((t) => t.name) : Object.keys(t)).forEach((e, n) => {
              const d = r.T2.registeredVariables[e],
                h = !1;
              null == this.accumulatedMeanSquares[n] && (this.accumulatedMeanSquares[n] = { originalName: `${e}/rms`, variable: (0, s.DZ)(() => (0, p.P)(d).variable(h)) }),
                null == this.accumulatedMoments[n] && (this.accumulatedMoments[n] = { originalName: `${e}/momentum`, variable: (0, s.DZ)(() => (0, p.P)(d).variable(h)) }),
                null == this.accumulatedMeanGrads[n] &&
                  this.centered &&
                  (this.accumulatedMeanGrads[n] = { originalName: `${e}/mg`, variable: (0, s.DZ)(() => (0, p.P)(d).variable(h)) });
              const f = Array.isArray(t) ? t[n].tensor : t[e];
              if (null == f) return;
              const m = this.accumulatedMeanSquares[n].variable,
                g = this.accumulatedMoments[n].variable;
              (0, s.DZ)(() => {
                const t = (0, a.W)((0, i.l)(m, this.decay), (0, i.l)((0, l.E)(f), 1 - this.decay));
                if (this.centered) {
                  const e = this.accumulatedMeanGrads[n].variable,
                    r = (0, a.W)((0, i.l)(e, this.decay), (0, i.l)(f, 1 - this.decay)),
                    s = (0, o.y)((0, i.l)(f, this.learningRate), (0, u.R)((0, c.j)(t, (0, a.W)((0, l.E)(r), this.epsilon)))),
                    p = (0, a.W)((0, i.l)(g, this.momentum), s);
                  m.assign(t), e.assign(r), g.assign(p);
                  const h = (0, c.j)(d, p);
                  d.assign(h);
                } else {
                  const t = (0, a.W)((0, i.l)(m, this.decay), (0, i.l)((0, l.E)(f), 1 - this.decay)),
                    e = (0, a.W)((0, i.l)(g, this.momentum), (0, o.y)((0, i.l)(f, this.learningRate), (0, u.R)((0, a.W)(t, this.epsilon))));
                  m.assign(t), g.assign(e);
                  const n = (0, c.j)(d, e);
                  d.assign(n);
                }
              });
            }),
              this.incrementIterations();
          }
          dispose() {
            null != this.accumulatedMeanSquares && (0, s.AS)(this.accumulatedMeanSquares.map((t) => t.variable)),
              null != this.accumulatedMeanGrads && this.centered && (0, s.AS)(this.accumulatedMeanGrads.map((t) => t.variable)),
              null != this.accumulatedMoments && (0, s.AS)(this.accumulatedMoments.map((t) => t.variable));
          }
          async getWeights() {
            const t = [...this.accumulatedMeanSquares, ...this.accumulatedMoments];
            return this.centered && t.push(...this.accumulatedMeanGrads), [await this.saveIterations()].concat(t.map((t) => ({ name: t.originalName, tensor: t.variable })));
          }
          async setWeights(t) {
            t = await this.extractIterations(t);
            const e = this.centered ? t.length / 3 : t.length / 2,
              n = !1;
            (this.accumulatedMeanSquares = t.slice(0, e).map((t) => ({ originalName: t.name, variable: t.tensor.variable(n) }))),
              (this.accumulatedMoments = t.slice(e, 2 * e).map((t) => ({ originalName: t.name, variable: t.tensor.variable(n) }))),
              this.centered && (this.accumulatedMeanGrads = t.slice(2 * e, 3 * e).map((t) => ({ originalName: t.name, variable: t.tensor.variable(n) })));
          }
          getConfig() {
            return { learningRate: this.learningRate, decay: this.decay, momentum: this.momentum, epsilon: this.epsilon, centered: this.centered };
          }
          static fromConfig(t, e) {
            return new t(e.learningRate, e.decay, e.momentum, e.epsilon, e.centered);
          }
        }
      },
      37930: (t, e, n) => {
        'use strict';
        n.d(e, { S: () => l });
        var r = n(67897),
          s = n(35287),
          a = n(37523),
          o = n(9258),
          i = n(45702),
          u = n(64403);
        class l extends u.E {
          static get className() {
            return 'SGD';
          }
          constructor(t) {
            super(), (this.learningRate = t), this.setLearningRate(t);
          }
          applyGradients(t) {
            (Array.isArray(t) ? t.map((t) => t.name) : Object.keys(t)).forEach((e, n) => {
              const i = Array.isArray(t) ? t[n].tensor : t[e];
              if (null == i) return;
              const u = r.T2.registeredVariables[e];
              (0, s.DZ)(() => {
                const t = (0, a.W)((0, o.l)(this.c, i), u);
                u.assign(t);
              });
            }),
              this.incrementIterations();
          }
          setLearningRate(t) {
            (this.learningRate = t), null != this.c && this.c.dispose(), (this.c = (0, s.aC)((0, i.d)(-t)));
          }
          dispose() {
            this.c.dispose();
          }
          async getWeights() {
            return [await this.saveIterations()];
          }
          async setWeights(t) {
            if (0 !== (t = await this.extractIterations(t)).length) throw new Error('SGD optimizer does not have settable weights.');
          }
          getConfig() {
            return { learningRate: this.learningRate };
          }
          static fromConfig(t, e) {
            return new t(e.learningRate);
          }
        }
      },
      86448: (t, e, n) => {
        'use strict';
        function r(t) {
          return t instanceof Float32Array || t instanceof Int32Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray;
        }
        n.d(e, { Y: () => r });
      },
      15618: (t, e, n) => {
        'use strict';
        n(66652);
        var r = n(46574),
          s = n(30522),
          a = n(76745),
          o = n(66235),
          i = n(86448);
        class u {
          constructor() {
            (this.messageName = 'setTimeoutCustom'), (this.functionRefs = []), (this.handledMessageCount = 0), (this.hasEventListener = !1);
          }
          fetch(t, e) {
            return fetch(t, e);
          }
          now() {
            return performance.now();
          }
          encode(t, e) {
            if ('utf-8' !== e && 'utf8' !== e) throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);
            return null == this.textEncoder && (this.textEncoder = new TextEncoder()), this.textEncoder.encode(t);
          }
          decode(t, e) {
            return new TextDecoder(e).decode(t);
          }
          setTimeoutCustom(t, e) {
            'undefined' != typeof window && (0, r._K)().getBool('USE_SETTIMEOUTCUSTOM')
              ? (this.functionRefs.push(t),
                setTimeout(() => {
                  window.postMessage({ name: this.messageName, index: this.functionRefs.length - 1 }, '*');
                }, e),
                this.hasEventListener ||
                  ((this.hasEventListener = !0),
                  window.addEventListener(
                    'message',
                    (t) => {
                      t.source === window &&
                        t.data.name === this.messageName &&
                        (t.stopPropagation(),
                        (0, this.functionRefs[t.data.index])(),
                        this.handledMessageCount++,
                        this.handledMessageCount === this.functionRefs.length && ((this.functionRefs = []), (this.handledMessageCount = 0)));
                    },
                    !0,
                  )))
              : setTimeout(t, e);
          }
          isTypedArray(t) {
            return (0, i.Y)(t);
          }
        }
        if ((0, r._K)().get('IS_BROWSER')) {
          (0, r._K)().setPlatform('browser', new u());
          try {
            o.dy.registerManager(a.ZT.URL_SCHEME, new a.Cd());
          } catch (t) {}
          try {
            o.dy.registerManager(s.mn.URL_SCHEME, new s.lQ());
          } catch (t) {}
        }
      },
      83672: (t, e, n) => {
        'use strict';
        var r = n(46574),
          s = n(65606);
        let a;
        (0, r._K)().get('IS_NODE') &&
          !(0, r._K)().get('IS_BROWSER') &&
          (0, r._K)().setPlatform(
            'node',
            new (class {
              constructor() {
                (this.util = n(18590)), (this.textEncoder = new this.util.TextEncoder());
              }
              fetch(t, e) {
                return null != (0, r._K)().global.fetch ? (0, r._K)().global.fetch(t, e) : (null == a && (a = n(85817)), a(t, e));
              }
              now() {
                const t = s.hrtime();
                return 1e3 * t[0] + t[1] / 1e6;
              }
              encode(t, e) {
                if ('utf-8' !== e && 'utf8' !== e) throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);
                return this.textEncoder.encode(t);
              }
              decode(t, e) {
                return 0 === t.length ? '' : new this.util.TextDecoder(e).decode(t);
              }
              isTypedArray(t) {
                return this.util.types.isFloat32Array(t) || this.util.types.isInt32Array(t) || this.util.types.isUint8Array(t) || this.util.types.isUint8ClampedArray(t);
              }
            })(),
          );
      },
      41466: (t, e, n) => {
        'use strict';
        n.d(e, { UD: () => i });
        var r = n(46574),
          s = n(89783),
          a = n(45119),
          o = n(96763);
        class i {
          constructor(t, e) {
            (this.backendTimer = t), (this.logger = e), null == e && (this.logger = new l());
          }
          profileKernel(t, e, n) {
            let a;
            const o = () => {
              a = n();
            };
            let i;
            const l = s.now();
            if (this.backendTimer.timerAvailable()) i = this.backendTimer.time(o);
            else {
              o();
              for (const t of a) t.dataSync();
              i = Promise.resolve({ kernelMs: s.now() - l });
            }
            if ((0, r._K)().getBool('CHECK_COMPUTATION_FOR_ERRORS'))
              for (let e = 0; e < a.length; e++) {
                const n = a[e];
                n.data().then((e) => {
                  u(e, n.dtype, t);
                });
              }
            return {
              kernelName: t,
              outputs: a,
              inputs: e,
              timeMs: i.then((t) => t.kernelMs),
              extraInfo: i.then((t) => (null != t.getExtraProfileInfo ? t.getExtraProfileInfo() : '')),
            };
          }
          logKernelProfile(t) {
            const { kernelName: e, outputs: n, timeMs: r, inputs: s, extraInfo: a } = t;
            n.forEach((t) => {
              Promise.all([t.data(), r, a]).then((n) => {
                this.logger.logKernelProfile(e, t, n[0], n[1], s, n[2]);
              });
            });
          }
        }
        function u(t, e, n) {
          if ('float32' !== e) return !1;
          for (let e = 0; e < t.length; e++) {
            const r = t[e];
            if (isNaN(r) || !isFinite(r)) return o.warn(`Found ${r} in the result of '${n}'`), !0;
          }
          return !1;
        }
        class l {
          logKernelProfile(t, e, n, r, s, i) {
            const u = 'number' == typeof r ? a.av(`${r}ms`, 9) : r.error,
              l = a.av(t, 25),
              c = e.rank,
              p = e.size,
              d = a.av(e.shape.toString(), 14);
            let h = '';
            for (const t in s) {
              const n = s[t];
              if (null != n) {
                const r = n.shape || e.shape,
                  s = r.length;
                h += `${t}: ${s}D ${s > 0 ? r : ''} `;
              }
            }
            o.log(`%c${l}\t%c${u}\t%c${c}D ${d}\t%c${p}\t%c${h}\t%c${i}`, 'font-weight:bold', 'color:red', 'color:blue', 'color: orange', 'color: green', 'color: steelblue');
          }
        }
      },
      79559: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { Serializable: () => o, SerializationMap: () => i, getRegisteredName: () => l, registerClass: () => u });
        var r = n(45119);
        const s = new Map(),
          a = new Map();
        class o {
          getClassName() {
            return this.constructor.className;
          }
          static fromConfig(t, e) {
            return new t(e);
          }
        }
        class i {
          constructor() {
            this.classNameMap = {};
          }
          static getMap() {
            return null == i.instance && (i.instance = new i()), i.instance;
          }
          static register(t) {
            i.getMap().classNameMap[t.className] = [t, t.fromConfig];
          }
        }
        function u(t, e, n) {
          (0, r.vA)(null != t.className, () => 'Class being registered does not have the static className property defined.'),
            (0, r.vA)('string' == typeof t.className, () => 'className is required to be a string, but got type ' + typeof t.className),
            (0, r.vA)(t.className.length > 0, () => 'Class being registered has an empty-string as its className, which is disallowed.'),
            void 0 === e && (e = 'Custom'),
            void 0 === n && (n = t.className);
          const o = e + '>' + n;
          return i.register(t), s.set(o, t), a.set(t, o), t;
        }
        function l(t) {
          return a.has(t) ? a.get(t) : t.className;
        }
      },
      37427: (t, e, n) => {
        'use strict';
        n.d(e, { a: () => a, p: () => s });
        var r = n(45119);
        function s(t, e, n) {
          const r = {},
            s = {};
          for (let t = 0; t < e.length; t++) r[e[t].id] = !0;
          for (let n = 0; n < t.length; n++) {
            const a = t[n],
              o = a.inputs;
            for (const t in o) {
              const n = o[t];
              let i = !1;
              for (let t = 0; t < e.length; t++)
                if (r[n.id]) {
                  a.outputs.forEach((t) => (r[t.id] = !0)), (i = !0), (s[a.id] = !0);
                  break;
                }
              if (i) break;
            }
          }
          const a = {};
          a[n.id] = !0;
          const o = {};
          for (let e = t.length - 1; e >= 0; e--) {
            const n = t[e],
              r = n.inputs;
            for (let t = 0; t < n.outputs.length; t++)
              if (a[n.outputs[t].id]) {
                for (const t in r) (a[r[t].id] = !0), (o[n.id] = !0);
                break;
              }
          }
          const i = [];
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            if (s[n.id] && o[n.id]) {
              const t = {};
              for (const e in n.inputs) {
                const s = n.inputs[e];
                r[s.id] && (t[e] = s);
              }
              const e = Object.assign({}, n);
              (e.inputs = t), (e.outputs = n.outputs), i.push(e);
            }
          }
          return i;
        }
        function a(t, e, n, s) {
          for (let a = e.length - 1; a >= 0; a--) {
            const o = e[a],
              i = [];
            if (
              (o.outputs.forEach((e) => {
                const n = t[e.id];
                null != n ? i.push(n) : i.push(null);
              }),
              null == o.gradient)
            )
              throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);
            const u = o.gradient(i);
            for (const e in o.inputs) {
              if (!(e in u)) throw new Error(`Cannot backprop through input ${e}. Available gradients found: ${Object.keys(u)}.`);
              const a = n(() => u[e]());
              if ('float32' !== a.dtype) throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${e} must have 'float32' dtype, but has '${a.dtype}'`);
              const i = o.inputs[e];
              if (!r.r1(a.shape, i.shape))
                throw new Error(
                  `Error in gradient for op ${o.kernelName}. The gradient of input '${e}' has shape '${a.shape}', which does not match the shape of the input '${i.shape}'`,
                );
              if (null == t[i.id]) t[i.id] = a;
              else {
                const e = t[i.id];
                (t[i.id] = s(e, a)), e.dispose();
              }
            }
          }
        }
      },
      53910: (t, e, n) => {
        'use strict';
        n.d(e, { B4: () => h, Q5: () => d, qP: () => p, qY: () => f, rT: () => g, tp: () => m, yl: () => i });
        var r = n(41743),
          s = n(52366),
          a = n(45119),
          o = n(89783);
        class i {
          constructor(t, e, n) {
            if (((this.dtype = e), (this.shape = t.slice()), (this.size = a.Ze(t)), null != n)) {
              const t = n.length;
              a.vA(t === this.size, () => `Length of values '${t}' does not match the size inferred by the shape '${this.size}'.`);
            }
            if ('complex64' === e)
              throw new Error(
                'complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).',
              );
            (this.values = n || a.Ab(e, this.size)), (this.strides = (0, a.Ur)(t));
          }
          set(t, ...e) {
            0 === e.length && (e = [0]), a.vA(e.length === this.rank, () => `The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);
            const n = this.locToIndex(e);
            this.values[n] = t;
          }
          get(...t) {
            0 === t.length && (t = [0]);
            let e = 0;
            for (const n of t) {
              if (n < 0 || n >= this.shape[e]) {
                const e = `Requested out of range element at ${t}.   Buffer shape=${this.shape}`;
                throw new Error(e);
              }
              e++;
            }
            let n = t[t.length - 1];
            for (let e = 0; e < t.length - 1; ++e) n += this.strides[e] * t[e];
            return this.values[n];
          }
          locToIndex(t) {
            if (0 === this.rank) return 0;
            if (1 === this.rank) return t[0];
            let e = t[t.length - 1];
            for (let n = 0; n < t.length - 1; ++n) e += this.strides[n] * t[n];
            return e;
          }
          indexToLoc(t) {
            if (0 === this.rank) return [];
            if (1 === this.rank) return [t];
            const e = new Array(this.shape.length);
            for (let n = 0; n < e.length - 1; ++n) (e[n] = Math.floor(t / this.strides[n])), (t -= e[n] * this.strides[n]);
            return (e[e.length - 1] = t), e;
          }
          get rank() {
            return this.shape.length;
          }
          toTensor() {
            return u().makeTensor(this.values, this.shape, this.dtype);
          }
        }
        let u = null,
          l = null,
          c = null;
        function p(t) {
          u = t;
        }
        function d(t) {
          l = t;
        }
        function h(t) {
          c = t;
        }
        class f {
          constructor(t, e, n, r) {
            (this.kept = !1),
              (this.isDisposedInternal = !1),
              (this.shape = t.slice()),
              (this.dtype = e || 'float32'),
              (this.size = a.Ze(t)),
              (this.strides = (0, a.Ur)(t)),
              (this.dataId = n),
              (this.id = r),
              (this.rankType = this.rank < 5 ? this.rank.toString() : 'higher');
          }
          get rank() {
            return this.shape.length;
          }
          async buffer() {
            const t = await this.data();
            return l.buffer(this.shape, this.dtype, t);
          }
          bufferSync() {
            return l.buffer(this.shape, this.dtype, this.dataSync());
          }
          async array() {
            const t = await this.data();
            return (0, a.yw)(this.shape, t, 'complex64' === this.dtype);
          }
          arraySync() {
            return (0, a.yw)(this.shape, this.dataSync(), 'complex64' === this.dtype);
          }
          async data() {
            this.throwIfDisposed();
            const t = u().read(this.dataId);
            if ('string' === this.dtype) {
              const e = await t;
              try {
                return e.map((t) => o.decodeString(t));
              } catch (t) {
                throw new Error('Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().');
              }
            }
            return t;
          }
          dataToGPU(t) {
            return this.throwIfDisposed(), u().readToGPU(this.dataId, t);
          }
          dataSync() {
            this.throwIfDisposed();
            const t = u().readSync(this.dataId);
            if ('string' === this.dtype)
              try {
                return t.map((t) => o.decodeString(t));
              } catch (t) {
                throw new Error('Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().');
              }
            return t;
          }
          async bytes() {
            this.throwIfDisposed();
            const t = await u().read(this.dataId);
            return 'string' === this.dtype ? t : new Uint8Array(t.buffer);
          }
          dispose() {
            this.isDisposed || (this.kerasMask && this.kerasMask.dispose(), u().disposeTensor(this), (this.isDisposedInternal = !0));
          }
          get isDisposed() {
            return this.isDisposedInternal;
          }
          throwIfDisposed() {
            if (this.isDisposed) throw new Error('Tensor is disposed.');
          }
          print(t = !1) {
            return l.print(this, t);
          }
          clone() {
            return this.throwIfDisposed(), l.clone(this);
          }
          toString(t = !1) {
            const e = this.dataSync();
            return (0, s.w)(e, this.shape, this.dtype, t);
          }
          cast(t) {
            return this.throwIfDisposed(), l.cast(this, t);
          }
          variable(t = !0, e, n) {
            return this.throwIfDisposed(), u().makeVariable(this, t, e, n);
          }
        }
        function m() {
          return (0, r.m)('Tensor', () => f);
        }
        Object.defineProperty(f, Symbol.hasInstance, { value: (t) => !!t && null != t.data && null != t.dataSync && null != t.throwIfDisposed }), m();
        class g extends f {
          constructor(t, e, n, r) {
            super(t.shape, t.dtype, t.dataId, r), (this.trainable = e), (this.name = n);
          }
          assign(t) {
            if (t.dtype !== this.dtype) throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);
            if (!a.r1(t.shape, this.shape)) throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);
            u().disposeTensor(this), (this.dataId = t.dataId), u().incRef(this, null);
          }
          dispose() {
            u().disposeVariable(this), (this.isDisposedInternal = !0);
          }
        }
        Object.defineProperty(g, Symbol.hasInstance, { value: (t) => t instanceof f && null != t.assign && t.assign instanceof Function });
      },
      52366: (t, e, n) => {
        'use strict';
        n.d(e, { w: () => i });
        var r = n(45119);
        const s = 20,
          a = 3,
          o = 7;
        function i(t, e, n, s) {
          const a = (0, r.Ur)(e),
            o = (function (t, e, n, s) {
              const a = (0, r.Ze)(e),
                o = s[s.length - 1],
                i = new Array(o).fill(0),
                l = e.length,
                c = 'complex64' === n ? p(t) : t;
              if (l > 1)
                for (let t = 0; t < a / o; t++) {
                  const e = t * o;
                  for (let t = 0; t < o; t++) i[t] = Math.max(i[t], u(c[e + t], 0, n).length);
                }
              return i;
            })(t, e, n, a),
            i = e.length,
            l = c(t, e, n, a, o),
            d = ['Tensor'];
          return s && (d.push(`  dtype: ${n}`), d.push(`  rank: ${i}`), d.push(`  shape: [${e}]`), d.push('  values:')), d.push(l.map((t) => '    ' + t).join('\n')), d.join('\n');
        }
        function u(t, e, n) {
          let s;
          return (
            (s = Array.isArray(t)
              ? `${parseFloat(t[0].toFixed(o))} + ${parseFloat(t[1].toFixed(o))}j`
              : (0, r.Kg)(t)
                ? `'${t}'`
                : 'bool' === n
                  ? l(t)
                  : parseFloat(t.toFixed(o)).toString()),
            (0, r.av)(s, e)
          );
        }
        function l(t) {
          return 0 === t ? 'false' : 'true';
        }
        function c(t, e, n, r, o, i = !0) {
          const d = 'complex64' === n ? 2 : 1,
            h = e[0],
            f = e.length;
          if (0 === f) return 'complex64' === n ? [u(p(t)[0], 0, n)] : 'bool' === n ? [l(t[0])] : [t[0].toString()];
          if (1 === f) {
            if (h > s) {
              const e = a * d;
              let r = Array.from(t.slice(0, e)),
                s = Array.from(t.slice((h - a) * d, h * d));
              return (
                'complex64' === n && ((r = p(r)), (s = p(s))),
                ['[' + r.map((t, e) => u(t, o[e], n)).join(', ') + ', ..., ' + s.map((t, e) => u(t, o[h - a + e], n)).join(', ') + ']']
              );
            }
            return ['[' + ('complex64' === n ? p(t) : Array.from(t)).map((t, e) => u(t, o[e], n)).join(', ') + ']'];
          }
          const m = e.slice(1),
            g = r.slice(1),
            y = r[0] * d,
            b = [];
          if (h > s) {
            for (let e = 0; e < a; e++) {
              const r = e * y,
                s = r + y;
              b.push(...c(t.slice(r, s), m, n, g, o, !1));
            }
            b.push('...');
            for (let e = h - a; e < h; e++) {
              const r = e * y,
                s = r + y;
              b.push(...c(t.slice(r, s), m, n, g, o, e === h - 1));
            }
          } else
            for (let e = 0; e < h; e++) {
              const r = e * y,
                s = r + y;
              b.push(...c(t.slice(r, s), m, n, g, o, e === h - 1));
            }
          const v = 2 === f ? ',' : '';
          b[0] = '[' + (h > 0 ? b[0] + v : '');
          for (let t = 1; t < b.length - 1; t++) b[t] = ' ' + b[t] + v;
          let w = ',\n';
          for (let t = 2; t < f; t++) w += '\n';
          return (b[b.length - 1] = ' ' + b[b.length - 1] + ']' + (i ? '' : w)), b;
        }
        function p(t) {
          const e = [];
          for (let n = 0; n < t.length; n += 2) e.push([t[n], t[n + 1]]);
          return e;
        }
      },
      30565: (t, e, n) => {
        'use strict';
        n.r(e), n.d(e, { assertTypesMatch: () => i, getTensorsInContainer: () => l, isTensorInList: () => u, makeTypesMatch: () => o });
        var r = n(53910),
          s = n(52046),
          a = n(45119);
        function o(t, e) {
          if (t.dtype === e.dtype) return [t, e];
          const n = (0, s.Tu)(t.dtype, e.dtype);
          return [t.cast(n), e.cast(n)];
        }
        function i(t, e) {
          (0, a.vA)(t.dtype === e.dtype, () => `The dtypes of the first(${t.dtype}) and second(${e.dtype}) input must match`);
        }
        function u(t, e) {
          return e.some((e) => e.id === t.id);
        }
        function l(t) {
          const e = [];
          return c(t, e, new Set()), e;
        }
        function c(t, e, n) {
          if (null == t) return;
          if (t instanceof r.qY) return void e.push(t);
          if (((s = t), !Array.isArray(s) && 'object' != typeof s)) return;
          var s;
          const a = t;
          for (const t in a) {
            const r = a[t];
            n.has(r) || (n.add(r), c(r, e, n));
          }
        }
      },
      28189: (t, e, n) => {
        'use strict';
        n.d(e, { MZ: () => l, YT: () => d, j1: () => h });
        var r = n(67897),
          s = n(46574),
          a = n(53910),
          o = n(52046),
          i = n(89783),
          u = n(45119);
        function l(t, e) {
          let n = t;
          if ((0, i.isTypedArray)(t)) return 'string' === e ? [] : [t.length];
          if ((0, o.Oj)(t)) {
            const e = t.channels || 'RGBA';
            return [t.height, t.width * e.length];
          }
          if ((0, o.Nw)(t)) return [t.buffer.size / (null == e ? 4 : (0, u.jv)(e))];
          if (!Array.isArray(t)) return [];
          const r = [];
          for (; Array.isArray(n) || ((0, i.isTypedArray)(n) && 'string' !== e); ) r.push(n.length), (n = n[0]);
          return Array.isArray(t) && (0, s._K)().getBool('TENSORLIKE_CHECK_SHAPE_CONSISTENCY') && c(t, r, []), r;
        }
        function c(t, e, n) {
          if (((n = n || []), !Array.isArray(t) && !(0, i.isTypedArray)(t)))
            return void (0, u.vA)(0 === e.length, () => `Element arr[${n.join('][')}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);
          (0, u.vA)(e.length > 0, () => `Element arr[${n.join('][')}] should be a primitive, but is an array of ${t.length} elements`),
            (0, u.vA)(t.length === e[0], () => `Element arr[${n.join('][')}] should have ${e[0]} elements, but has ${t.length} elements`);
          const r = e.slice(1);
          for (let e = 0; e < t.length; ++e) c(t[e], r, n.concat(e));
        }
        function p(t, e, n, r) {
          if ('string_or_numeric' !== t) {
            if (null == t) throw new Error('Expected dtype cannot be null.');
            if (('numeric' !== t && t !== e) || ('numeric' === t && 'string' === e)) throw new Error(`Argument '${n}' passed to '${r}' must be ${t} tensor, but got ${e} tensor`);
          }
        }
        function d(t, e, n, s = 'numeric') {
          if (t instanceof (0, a.tp)()) return p(s, t.dtype, e, n), t;
          let o = (0, u.X$)(t);
          if (
            ('string' !== o && ['bool', 'int32', 'float32'].indexOf(s) >= 0 && (o = s),
            p(s, o, e, n),
            null == t || (!(0, i.isTypedArray)(t) && !Array.isArray(t) && 'number' != typeof t && 'boolean' != typeof t && 'string' != typeof t))
          ) {
            const r = null == t ? 'null' : t.constructor.name;
            throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`);
          }
          const c = l(t, o);
          (0, i.isTypedArray)(t) || Array.isArray(t) || (t = [t]);
          const d = 'string' !== o ? (0, i.toTypedArray)(t, o) : (0, i.flatten)(t, [], !0);
          return r.T2.makeTensor(d, c, o);
        }
        function h(t, e, n, r = 'numeric') {
          if (!Array.isArray(t)) throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);
          return t.map((t, s) => d(t, `${e}[${s}]`, n, r));
        }
      },
      49490: (t, e, n) => {
        'use strict';
        n.r(e),
          n.d(e, {
            TEST_EPSILON_FLOAT16: () => u,
            createVideoElement: () => v,
            encodeStrings: () => b,
            expectArrayBuffersEqual: () => y,
            expectArraysClose: () => l,
            expectArraysEqual: () => h,
            expectNumbersClose: () => f,
            expectPromiseToFail: () => d,
            expectValuesInRange: () => g,
            play: () => w,
            testEpsilon: () => c,
          });
        var r = n(67897),
          s = n(28189),
          a = n(89783),
          o = n(45119);
        const i = 0.001,
          u = 0.1;
        function l(t, e, n) {
          return null == n && (n = c()), p(t, e, (t, e) => m(t, e, n));
        }
        function c() {
          return 32 === r.T2.backend.floatPrecision() ? i : u;
        }
        function p(t, e, n) {
          let r = !0;
          if ((((0, a.isTypedArray)(t) || (0, a.isTypedArray)(e)) && (r = !1), (0, a.isTypedArray)(t) && (0, a.isTypedArray)(e) && (r = !0), r)) {
            const n = t.constructor.name,
              r = e.constructor.name;
            if (n !== r) throw new Error(`Arrays are of different type. Actual: ${n}. Expected: ${r}`);
          }
          if (Array.isArray(t) && Array.isArray(e)) {
            const n = (0, s.MZ)(t),
              r = (0, s.MZ)(e);
            if (!(0, o.r1)(n, r)) throw new Error(`Arrays have different shapes. Actual: [${n}]. Expected: [${r}]`);
          }
          const i = (0, a.isTypedArray)(t) ? t : (0, a.flatten)(t),
            u = (0, a.isTypedArray)(e) ? e : (0, a.flatten)(e);
          if (i.length !== u.length) throw new Error(`Arrays have different lengths actual: ${i.length} vs expected: ${u.length}.\nActual:   ${i}.\nExpected: ${u}.`);
          for (let t = 0; t < u.length; ++t) {
            const e = i[t],
              r = u[t];
            if (!n(e, r)) throw new Error(`Arrays differ: actual[${t}] = ${e}, expected[${t}] = ${r}.\nActual:   ${i}.\nExpected: ${u}.`);
          }
          'undefined' != typeof expect && expect().nothing();
        }
        function d(t, e) {
          t().then(
            () => e.fail(),
            () => e(),
          ),
            'undefined' != typeof expect && expect().nothing();
        }
        function h(t, e) {
          const n = 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e ? [e] : e;
          return (0, o.Kg)(t) || (0, o.Kg)(t[0]) || (0, o.Kg)(e) || (0, o.Kg)(e[0]) ? p(t, n, (t, e) => t == e) : p(t, e, (t, e) => m(t, e, 0));
        }
        function f(t, e, n) {
          if ((null == n && (n = c()), !m(t, e, n))) throw new Error(`Numbers differ: actual === ${t}, expected === ${e}`);
          'undefined' != typeof expect && expect().nothing();
        }
        function m(t, e, n) {
          return (!isFinite(t) && !isFinite(e)) || !(isNaN(t) || isNaN(e) || Math.abs(t - e) > n);
        }
        function g(t, e, n) {
          for (let r = 0; r < t.length; r++) if (t[r] < e || t[r] > n) throw new Error(`Value out of range:${t[r]} low: ${e}, high: ${n}`);
        }
        function y(t, e) {
          const n = new Float32Array(t),
            r = new Float32Array(e);
          if (n.length !== r.length) throw new Error(`Expected ArrayBuffer to be of length ${r.length}, but it was ${n.length}`);
          for (let t = 0; t < r.length; t++) if (n[t] !== r[t]) throw new Error(`Expected ArrayBuffer value at ${t} to be ${r[t]} but got ${n[t]} instead`);
        }
        function b(t) {
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            Array.isArray(n) ? b(n) : (t[e] = (0, a.encodeString)(n));
          }
          return t;
        }
        function v(t) {
          const e = document.createElement('video');
          return (
            'playsInline' in e && (e.playsInline = !0),
            (e.muted = !0),
            (e.loop = !0),
            (e.style.position = 'fixed'),
            (e.style.left = '0px'),
            (e.style.top = '0px'),
            (e.preload = 'auto'),
            e.appendChild(t),
            new Promise((t) => {
              e.addEventListener('loadeddata', (n) => t(e)), e.load();
            })
          );
        }
        async function w(t) {
          await t.play(),
            'requestVideoFrameCallback' in t &&
              (await new Promise((e) => {
                t.requestVideoFrameCallback(e);
              }));
        }
      },
      72633: (t, e, n) => {
        'use strict';
        n.d(e, { B: () => r });
        const r = n(83335).L;
      },
      52046: (t, e, n) => {
        'use strict';
        var r, s, a, o, i;
        n.d(e, { Nw: () => d, Oj: () => p, Tu: () => l, ch: () => c, rg: () => r }),
          (function (t) {
            (t.R0 = 'R0'), (t.R1 = 'R1'), (t.R2 = 'R2'), (t.R3 = 'R3'), (t.R4 = 'R4'), (t.R5 = 'R5'), (t.R6 = 'R6');
          })(r || (r = {})),
          (function (t) {
            (t.float32 = 'float32'), (t.int32 = 'int32'), (t.bool = 'int32'), (t.complex64 = 'complex64');
          })(s || (s = {})),
          (function (t) {
            (t.float32 = 'float32'), (t.int32 = 'int32'), (t.bool = 'bool'), (t.complex64 = 'complex64');
          })(a || (a = {})),
          (function (t) {
            (t.float32 = 'float32'), (t.int32 = 'float32'), (t.bool = 'float32'), (t.complex64 = 'complex64');
          })(o || (o = {})),
          (function (t) {
            (t.float32 = 'complex64'), (t.int32 = 'complex64'), (t.bool = 'complex64'), (t.complex64 = 'complex64');
          })(i || (i = {}));
        const u = { float32: o, int32: s, bool: a, complex64: i };
        function l(t, e) {
          if ('string' === t || 'string' === e) {
            if ('string' === t && 'string' === e) return 'string';
            throw new Error(`Can not upcast ${t} with ${e}`);
          }
          return u[t][e];
        }
        function c(t) {
          return l(t, 'int32');
        }
        function p(t) {
          return null != t && 'object' == typeof t && 'texture' in t && t.texture instanceof WebGLTexture;
        }
        function d(t) {
          return 'undefined' != typeof GPUBuffer && null != t && 'object' == typeof t && 'buffer' in t && t.buffer instanceof GPUBuffer;
        }
      },
      89783: (t, e, n) => {
        'use strict';
        n.r(e),
          n.d(e, {
            arraysEqual: () => a.r1,
            arraysEqualWithNull: () => a.e_,
            assert: () => a.vA,
            assertNonNegativeIntegerDimensions: () => a.SA,
            assertNonNull: () => a.HO,
            assertShapesMatch: () => a.O3,
            bytesFromStringArray: () => a.SL,
            bytesPerElement: () => a.jv,
            checkConversionForErrors: () => a.nd,
            clamp: () => a.qE,
            computeStrides: () => a.Ur,
            convertBackendValuesAndArrayBuffer: () => a.o2,
            createScalarValue: () => i,
            createShuffledIndices: () => a.P8,
            decodeString: () => d,
            distSquared: () => a.oO,
            encodeString: () => p,
            fetch: () => c,
            fingerPrint64: () => o.D,
            flatten: () => f,
            getArrayFromDType: () => a.Ab,
            getTypedArrayFromDType: () => a.ce,
            hasEncodingLoss: () => a.BE,
            hexToLong: () => o.f,
            indexToLoc: () => a._k,
            inferDtype: () => a.X$,
            inferFromImplicitShape: () => a.XT,
            isBoolean: () => a.Lm,
            isFunction: () => a.Tn,
            isInt: () => a.E6,
            isNumber: () => a.Et,
            isPromise: () => a.yL,
            isScalarShape: () => a.Sf,
            isString: () => a.Kg,
            isTypedArray: () => h,
            isValidDtype: () => a.xn,
            locToIndex: () => a.sX,
            makeOnesTypedArray: () => a.FZ,
            makeZerosNestedTypedArray: () => a.c7,
            makeZerosTypedArray: () => a.Ty,
            nearestDivisor: () => a.lK,
            nearestLargerEven: () => a.eV,
            now: () => l,
            parseAxisParam: () => a.Y6,
            randUniform: () => a.so,
            repeatedTry: () => a._q,
            rightPad: () => a.av,
            shuffle: () => a.k4,
            shuffleCombo: () => a.a0,
            sizeFromShape: () => a.Ze,
            sizeToSquarishShape: () => a.gS,
            squeezeShape: () => a.gx,
            sum: () => a.cz,
            swap: () => a.wg,
            tanh: () => a.ym,
            toNestedArray: () => a.yw,
            toTypedArray: () => u,
          });
        var r = n(46574),
          s = n(86448),
          a = n(45119),
          o = n(26286);
        function i(t, e) {
          return 'string' === e ? p(t) : u([t], e);
        }
        function u(t, e) {
          if ('string' === e) throw new Error('Cannot convert a string[] to a TypedArray');
          if (
            (Array.isArray(t) && (t = f(t)),
            (0, r._K)().getBool('DEBUG') && a.nd(t, e),
            (function (t, e) {
              return (t instanceof Float32Array && 'float32' === e) || (t instanceof Int32Array && 'int32' === e) || (t instanceof Uint8Array && 'bool' === e);
            })(t, e))
          )
            return t;
          if (null == e || 'float32' === e || 'complex64' === e) return new Float32Array(t);
          if ('int32' === e) return new Int32Array(t);
          if ('bool' === e) {
            const e = new Uint8Array(t.length);
            for (let n = 0; n < e.length; ++n) 0 !== Math.round(t[n]) && (e[n] = 1);
            return e;
          }
          throw new Error(`Unknown data type ${e}`);
        }
        function l() {
          return (0, r._K)().platform.now();
        }
        function c(t, e) {
          return (0, r._K)().platform.fetch(t, e);
        }
        function p(t, e = 'utf-8') {
          return (e = e || 'utf-8'), (0, r._K)().platform.encode(t, e);
        }
        function d(t, e = 'utf-8') {
          return (e = e || 'utf-8'), (0, r._K)().platform.decode(t, e);
        }
        function h(t) {
          return null != (0, r._K)().platform.isTypedArray ? (0, r._K)().platform.isTypedArray(t) : (0, s.Y)(t);
        }
        function f(t, e = [], n = !1) {
          if ((null == e && (e = []), 'boolean' == typeof t || 'number' == typeof t || 'string' == typeof t || a.yL(t) || null == t || (h(t) && n))) e.push(t);
          else if (Array.isArray(t) || h(t)) for (let r = 0; r < t.length; ++r) f(t[r], e, n);
          else {
            let r = -1;
            for (const e of Object.keys(t)) /^([1-9]+[0-9]*|0)$/.test(e) && (r = Math.max(r, Number(e)));
            for (let s = 0; s <= r; s++) f(t[s], e, n);
          }
          return e;
        }
      },
      45119: (t, e, n) => {
        'use strict';
        function r(t) {
          let e = t.length,
            n = 0;
          for (; e > 0; ) (n = (Math.random() * e) | 0), e--, i(t, e, n);
        }
        function s(t, e) {
          if (t.length !== e.length) throw new Error(`Array sizes must match to be shuffled together First array length was ${t.length}Second array length was ${e.length}`);
          let n = t.length,
            r = 0;
          for (; n > 0; ) (r = (Math.random() * n) | 0), n--, i(t, n, r), i(e, n, r);
        }
        function a(t, e, n) {
          return Math.max(t, Math.min(e, n));
        }
        function o(t) {
          return t % 2 == 0 ? t : t + 1;
        }
        function i(t, e, n) {
          const r = t[e];
          (t[e] = t[n]), (t[n] = r);
        }
        function u(t) {
          let e = 0;
          for (let n = 0; n < t.length; n++) e += t[n];
          return e;
        }
        function l(t, e) {
          const n = Math.random();
          return e * n + (1 - n) * t;
        }
        function c(t, e) {
          let n = 0;
          for (let r = 0; r < t.length; r++) {
            const s = Number(t[r]) - Number(e[r]);
            n += s * s;
          }
          return n;
        }
        function p(t, e) {
          if (!t) throw new Error('string' == typeof e ? e : e());
        }
        function d(t, e, n = '') {
          p(y(t, e), () => n + ` Shapes ${t} and ${e} must match`);
        }
        function h(t) {
          p(null != t, () => 'The input to the tensor constructor must be a non-null value.');
        }
        function f(t) {
          if (0 === t.length) return 1;
          let e = t[0];
          for (let n = 1; n < t.length; n++) e *= t[n];
          return e;
        }
        function m(t) {
          return 0 === t.length;
        }
        function g(t, e) {
          if (t === e) return !0;
          if (null == t || null == e) return !1;
          if (t.length !== e.length) return !1;
          for (let n = 0; n < t.length; n++) if (null !== t[n] && null !== e[n] && t[n] !== e[n]) return !1;
          return !0;
        }
        function y(t, e) {
          if (t === e) return !0;
          if (null == t || null == e) return !1;
          if (t.length !== e.length) return !1;
          for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
          return !0;
        }
        function b(t) {
          return t % 1 == 0;
        }
        function v(t) {
          if (null != Math.tanh) return Math.tanh(t);
          if (t === 1 / 0) return 1;
          if (t === -1 / 0) return -1;
          {
            const e = Math.exp(2 * t);
            return (e - 1) / (e + 1);
          }
        }
        function w(t) {
          const e = Math.ceil(Math.sqrt(t));
          return [e, Math.ceil(t / e)];
        }
        function T(t) {
          const e = new Uint32Array(t);
          for (let n = 0; n < t; ++n) e[n] = n;
          return r(e), e;
        }
        function x(t, e) {
          return e <= t.length ? t : t + ' '.repeat(e - t.length);
        }
        function S(t, e = (t) => 0, n, r) {
          return new Promise((s, a) => {
            let o = 0;
            const i = () => {
              if (t()) return void s();
              o++;
              const u = e(o);
              null != n && o >= n ? a() : null != r ? r(i, u) : setTimeout(i, u);
            };
            i();
          });
        }
        function N(t, e) {
          let n = 1,
            r = -1;
          for (let e = 0; e < t.length; ++e)
            if (t[e] >= 0) n *= t[e];
            else if (-1 === t[e]) {
              if (-1 !== r) throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${e}`);
              r = e;
            } else if (t[e] < 0) throw Error(`Shapes can not be < 0. Found ${t[e]} at dim ${e}`);
          if (-1 === r) {
            if (e > 0 && e !== n) throw Error(`Size(${e}) must match the product of shape ${t}`);
            return t;
          }
          if (0 === n) throw Error(`Cannot infer the missing size in [${t}] when there are 0 elements`);
          if (e % n != 0) throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${n}`);
          const s = t.slice();
          return (s[r] = e / n), s;
        }
        function E(t, e) {
          const n = e.length;
          return (
            p(
              (t = null == t ? e.map((t, e) => e) : [].concat(t)).every((t) => t >= -n && t < n),
              () => `All values in axis param must be in range [-${n}, ${n}) but got axis ${t}`,
            ),
            p(
              t.every((t) => b(t)),
              () => `All values in axis param must be integers but got axis ${t}`,
            ),
            t.map((t) => (t < 0 ? n + t : t))
          );
        }
        function A(t, e) {
          const n = [],
            r = [],
            s = null != e && Array.isArray(e) && 0 === e.length,
            a = null == e || s ? null : E(e, t).sort();
          let o = 0;
          for (let e = 0; e < t.length; ++e) {
            if (null != a) {
              if (a[o] === e && 1 !== t[e]) throw new Error(`Can't squeeze axis ${e} since its dim '${t[e]}' is not 1`);
              (null == a[o] || a[o] > e) && 1 === t[e] && (n.push(t[e]), r.push(e)), a[o] <= e && o++;
            }
            1 !== t[e] && (n.push(t[e]), r.push(e));
          }
          return { newShape: n, keptDims: r };
        }
        function k(t, e) {
          return _(t, e);
        }
        function _(t, e) {
          let n = null;
          if (null == t || 'float32' === t) n = new Float32Array(e);
          else if ('int32' === t) n = new Int32Array(e);
          else if ('bool' === t) n = new Uint8Array(e);
          else {
            if ('string' !== t) throw new Error(`Unknown data type ${t}`);
            n = new Array(e);
          }
          return n;
        }
        function I(t, e) {
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            if (isNaN(r) || !isFinite(r)) throw Error(`A tensor of type ${e} being uploaded contains ${r}.`);
          }
        }
        function O(t) {
          return 'bool' === t || 'complex64' === t || 'float32' === t || 'int32' === t || 'string' === t;
        }
        function M(t, e) {
          return !('complex64' === e || ('float32' === e && 'complex64' !== t) || ('int32' === e && 'float32' !== t && 'complex64' !== t) || ('bool' === e && 'bool' === t));
        }
        function $(t) {
          if ('float32' === t || 'int32' === t) return 4;
          if ('complex64' === t) return 8;
          if ('bool' === t) return 1;
          throw new Error(`Unknown dtype ${t}`);
        }
        function D(t) {
          if (null == t) return 0;
          let e = 0;
          return t.forEach((t) => (e += t.length)), e;
        }
        function R(t) {
          return 'string' == typeof t || t instanceof String;
        }
        function F(t) {
          return 'boolean' == typeof t;
        }
        function B(t) {
          return 'number' == typeof t;
        }
        function P(t) {
          return Array.isArray(t)
            ? P(t[0])
            : t instanceof Float32Array
              ? 'float32'
              : t instanceof Int32Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray
                ? 'int32'
                : B(t)
                  ? 'float32'
                  : R(t)
                    ? 'string'
                    : F(t)
                      ? 'bool'
                      : 'float32';
        }
        function Z(t) {
          return !!(t && t.constructor && t.call && t.apply);
        }
        function C(t, e) {
          for (let n = e; n < t; ++n) if (t % n == 0) return n;
          return t;
        }
        function L(t) {
          const e = t.length;
          if (e < 2) return [];
          const n = new Array(e - 1);
          n[e - 2] = t[e - 1];
          for (let r = e - 3; r >= 0; --r) n[r] = n[r + 1] * t[r + 1];
          return n;
        }
        function z(t, e, n, r = !1) {
          const s = new Array();
          if (1 === e.length) {
            const a = e[0] * (r ? 2 : 1);
            for (let e = 0; e < a; e++) s[e] = n[t + e];
          } else {
            const a = e[0],
              o = e.slice(1),
              i = o.reduce((t, e) => t * e) * (r ? 2 : 1);
            for (let e = 0; e < a; e++) s[e] = z(t + e * i, o, n, r);
          }
          return s;
        }
        function j(t, e, n = !1) {
          if (0 === t.length) return e[0];
          const r = t.reduce((t, e) => t * e) * (n ? 2 : 1);
          if (0 === r) return [];
          if (r !== e.length) throw new Error(`[${t}] does not match the input size ${e.length}${n ? ' for a complex tensor' : ''}.`);
          return z(0, t, e, n);
        }
        function Y(t, e) {
          if (Array.isArray(t)) return t;
          if ('float32' === e) return t instanceof Float32Array ? t : new Float32Array(t);
          if ('int32' === e) return t instanceof Int32Array ? t : new Int32Array(t);
          if ('bool' === e || 'string' === e) return Uint8Array.from(new Int32Array(t));
          throw new Error(`Unknown dtype ${e}`);
        }
        function U(t, e) {
          const n = V(t, e);
          for (let t = 0; t < n.length; t++) n[t] = 1;
          return n;
        }
        function V(t, e) {
          if (null == e || 'float32' === e || 'complex64' === e) return new Float32Array(t);
          if ('int32' === e) return new Int32Array(t);
          if ('bool' === e) return new Uint8Array(t);
          throw new Error(`Unknown data type ${e}`);
        }
        function W(t, e) {
          const n = t.reduce((t, e) => t * e, 1);
          if (null == e || 'float32' === e) return j(t, new Float32Array(n));
          if ('int32' === e) return j(t, new Int32Array(n));
          if ('bool' === e) return j(t, new Uint8Array(n));
          throw new Error(`Unknown data type ${e}`);
        }
        function G(t) {
          t.forEach((e) => {
            p(Number.isInteger(e) && e >= 0, () => `Tensor must have a shape comprised of positive integers but got shape [${t}].`);
          });
        }
        function q(t, e, n) {
          if (0 === e) return 0;
          if (1 === e) return t[0];
          let r = t[t.length - 1];
          for (let e = 0; e < t.length - 1; ++e) r += n[e] * t[e];
          return r;
        }
        function K(t, e, n) {
          if (0 === e) return [];
          if (1 === e) return [t];
          const r = new Array(e);
          for (let e = 0; e < r.length - 1; ++e) (r[e] = Math.floor(t / n[e])), (t -= r[e] * n[e]);
          return (r[r.length - 1] = t), r;
        }
        function H(t) {
          return t && t.then && 'function' == typeof t.then;
        }
        n.d(e, {
          Ab: () => _,
          BE: () => M,
          E6: () => b,
          Et: () => B,
          FZ: () => U,
          HO: () => h,
          Kg: () => R,
          Lm: () => F,
          O3: () => d,
          P8: () => T,
          SA: () => G,
          SL: () => D,
          Sf: () => m,
          Tn: () => Z,
          Ty: () => V,
          Ur: () => L,
          X$: () => P,
          XT: () => N,
          Y6: () => E,
          Ze: () => f,
          _k: () => K,
          _q: () => S,
          a0: () => s,
          av: () => x,
          c7: () => W,
          ce: () => k,
          cz: () => u,
          eV: () => o,
          e_: () => g,
          gS: () => w,
          gx: () => A,
          jv: () => $,
          k4: () => r,
          lK: () => C,
          nd: () => I,
          o2: () => Y,
          oO: () => c,
          qE: () => a,
          r1: () => y,
          sX: () => q,
          so: () => l,
          vA: () => p,
          wg: () => i,
          xn: () => O,
          yL: () => H,
          ym: () => v,
          yw: () => j,
        });
      },
      7175: (t, e, n) => {
        'use strict';
        n.d(e, { r: () => r });
        const r = '4.20.0';
      },
      34529: (t, e, n) => {
        'use strict';
        var r = n(11514)();
        function s(t, e) {
          if (t === e) return 0;
          for (var n = t.length, r = e.length, s = 0, a = Math.min(n, r); s < a; ++s)
            if (t[s] !== e[s]) {
              (n = t[s]), (r = e[s]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }
        function a(t) {
          return n.g.Buffer && 'function' == typeof n.g.Buffer.isBuffer ? n.g.Buffer.isBuffer(t) : !(null == t || !t._isBuffer);
        }
        var o = n(94591),
          i = Object.prototype.hasOwnProperty,
          u = Array.prototype.slice,
          l = 'foo' === function () {}.name;
        function c(t) {
          return Object.prototype.toString.call(t);
        }
        function p(t) {
          return (
            !a(t) &&
            'function' == typeof n.g.ArrayBuffer &&
            ('function' == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer)))
          );
        }
        var d = (t.exports = b),
          h = /\s*function\s+([^\(\s]*)\s*/;
        function f(t) {
          if (o.isFunction(t)) {
            if (l) return t.name;
            var e = t.toString().match(h);
            return e && e[1];
          }
        }
        function m(t, e) {
          return 'string' == typeof t ? (t.length < e ? t : t.slice(0, e)) : t;
        }
        function g(t) {
          if (l || !o.isFunction(t)) return o.inspect(t);
          var e = f(t);
          return '[Function' + (e ? ': ' + e : '') + ']';
        }
        function y(t, e, n, r, s) {
          throw new d.AssertionError({ message: n, actual: t, expected: e, operator: r, stackStartFunction: s });
        }
        function b(t, e) {
          t || y(t, !0, e, '==', d.ok);
        }
        function v(t, e, n, r) {
          if (t === e) return !0;
          if (a(t) && a(e)) return 0 === s(t, e);
          if (o.isDate(t) && o.isDate(e)) return t.getTime() === e.getTime();
          if (o.isRegExp(t) && o.isRegExp(e))
            return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase;
          if ((null !== t && 'object' == typeof t) || (null !== e && 'object' == typeof e)) {
            if (p(t) && p(e) && c(t) === c(e) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === s(new Uint8Array(t.buffer), new Uint8Array(e.buffer));
            if (a(t) !== a(e)) return !1;
            var i = (r = r || { actual: [], expected: [] }).actual.indexOf(t);
            return (
              (-1 !== i && i === r.expected.indexOf(e)) ||
              (r.actual.push(t),
              r.expected.push(e),
              (function (t, e, n, r) {
                if (null == t || null == e) return !1;
                if (o.isPrimitive(t) || o.isPrimitive(e)) return t === e;
                if (n && Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
                var s = w(t),
                  a = w(e);
                if ((s && !a) || (!s && a)) return !1;
                if (s) return v((t = u.call(t)), (e = u.call(e)), n);
                var i,
                  l,
                  c = S(t),
                  p = S(e);
                if (c.length !== p.length) return !1;
                for (c.sort(), p.sort(), l = c.length - 1; l >= 0; l--) if (c[l] !== p[l]) return !1;
                for (l = c.length - 1; l >= 0; l--) if (!v(t[(i = c[l])], e[i], n, r)) return !1;
                return !0;
              })(t, e, n, r))
            );
          }
          return n ? t === e : t == e;
        }
        function w(t) {
          return '[object Arguments]' == Object.prototype.toString.call(t);
        }
        function T(t, e) {
          if (!t || !e) return !1;
          if ('[object RegExp]' == Object.prototype.toString.call(e)) return e.test(t);
          try {
            if (t instanceof e) return !0;
          } catch (t) {}
          return !Error.isPrototypeOf(e) && !0 === e.call({}, t);
        }
        function x(t, e, n, r) {
          var s;
          if ('function' != typeof e) throw new TypeError('"block" argument must be a function');
          'string' == typeof n && ((r = n), (n = null)),
            (s = (function (t) {
              var e;
              try {
                t();
              } catch (t) {
                e = t;
              }
              return e;
            })(e)),
            (r = (n && n.name ? ' (' + n.name + ').' : '.') + (r ? ' ' + r : '.')),
            t && !s && y(s, n, 'Missing expected exception' + r);
          var a = 'string' == typeof r,
            i = !t && s && !n;
          if ((((!t && o.isError(s) && a && T(s, n)) || i) && y(s, n, 'Got unwanted exception' + r), (t && s && n && !T(s, n)) || (!t && s))) throw s;
        }
        (d.AssertionError = function (t) {
          (this.name = 'AssertionError'),
            (this.actual = t.actual),
            (this.expected = t.expected),
            (this.operator = t.operator),
            t.message
              ? ((this.message = t.message), (this.generatedMessage = !1))
              : ((this.message = (function (t) {
                  return m(g(t.actual), 128) + ' ' + t.operator + ' ' + m(g(t.expected), 128);
                })(this)),
                (this.generatedMessage = !0));
          var e = t.stackStartFunction || y;
          if (Error.captureStackTrace) Error.captureStackTrace(this, e);
          else {
            var n = new Error();
            if (n.stack) {
              var r = n.stack,
                s = f(e),
                a = r.indexOf('\n' + s);
              if (a >= 0) {
                var o = r.indexOf('\n', a + 1);
                r = r.substring(o + 1);
              }
              this.stack = r;
            }
          }
        }),
          o.inherits(d.AssertionError, Error),
          (d.fail = y),
          (d.ok = b),
          (d.equal = function (t, e, n) {
            t != e && y(t, e, n, '==', d.equal);
          }),
          (d.notEqual = function (t, e, n) {
            t == e && y(t, e, n, '!=', d.notEqual);
          }),
          (d.deepEqual = function (t, e, n) {
            v(t, e, !1) || y(t, e, n, 'deepEqual', d.deepEqual);
          }),
          (d.deepStrictEqual = function (t, e, n) {
            v(t, e, !0) || y(t, e, n, 'deepStrictEqual', d.deepStrictEqual);
          }),
          (d.notDeepEqual = function (t, e, n) {
            v(t, e, !1) && y(t, e, n, 'notDeepEqual', d.notDeepEqual);
          }),
          (d.notDeepStrictEqual = function t(e, n, r) {
            v(e, n, !0) && y(e, n, r, 'notDeepStrictEqual', t);
          }),
          (d.strictEqual = function (t, e, n) {
            t !== e && y(t, e, n, '===', d.strictEqual);
          }),
          (d.notStrictEqual = function (t, e, n) {
            t === e && y(t, e, n, '!==', d.notStrictEqual);
          }),
          (d.throws = function (t, e, n) {
            x(!0, t, e, n);
          }),
          (d.doesNotThrow = function (t, e, n) {
            x(!1, t, e, n);
          }),
          (d.ifError = function (t) {
            if (t) throw t;
          }),
          (d.strict = r(
            function t(e, n) {
              e || y(e, !0, n, '==', t);
            },
            d,
            { equal: d.strictEqual, deepEqual: d.deepStrictEqual, notEqual: d.notStrictEqual, notDeepEqual: d.notDeepStrictEqual },
          )),
          (d.strict.strict = d.strict);
        var S =
          Object.keys ||
          function (t) {
            var e = [];
            for (var n in t) i.call(t, n) && e.push(n);
            return e;
          };
      },
      26100: (t) => {
        'function' == typeof Object.create
          ? (t.exports = function (t, e) {
              (t.super_ = e), (t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }));
            })
          : (t.exports = function (t, e) {
              t.super_ = e;
              var n = function () {};
              (n.prototype = e.prototype), (t.prototype = new n()), (t.prototype.constructor = t);
            });
      },
      33845: (t) => {
        t.exports = function (t) {
          return t && 'object' == typeof t && 'function' == typeof t.copy && 'function' == typeof t.fill && 'function' == typeof t.readUInt8;
        };
      },
      94591: (t, e, n) => {
        var r = n(65606),
          s = n(96763),
          a = /%[sdj%]/g;
        (e.format = function (t) {
          if (!b(t)) {
            for (var e = [], n = 0; n < arguments.length; n++) e.push(u(arguments[n]));
            return e.join(' ');
          }
          n = 1;
          for (
            var r = arguments,
              s = r.length,
              o = String(t).replace(a, function (t) {
                if ('%%' === t) return '%';
                if (n >= s) return t;
                switch (t) {
                  case '%s':
                    return String(r[n++]);
                  case '%d':
                    return Number(r[n++]);
                  case '%j':
                    try {
                      return JSON.stringify(r[n++]);
                    } catch (t) {
                      return '[Circular]';
                    }
                  default:
                    return t;
                }
              }),
              i = r[n];
            n < s;
            i = r[++n]
          )
            g(i) || !T(i) ? (o += ' ' + i) : (o += ' ' + u(i));
          return o;
        }),
          (e.deprecate = function (t, a) {
            if (v(n.g.process))
              return function () {
                return e.deprecate(t, a).apply(this, arguments);
              };
            if (!0 === r.noDeprecation) return t;
            var o = !1;
            return function () {
              if (!o) {
                if (r.throwDeprecation) throw new Error(a);
                r.traceDeprecation ? s.trace(a) : s.error(a), (o = !0);
              }
              return t.apply(this, arguments);
            };
          });
        var o,
          i = {};
        function u(t, n) {
          var r = { seen: [], stylize: c };
          return (
            arguments.length >= 3 && (r.depth = arguments[2]),
            arguments.length >= 4 && (r.colors = arguments[3]),
            m(n) ? (r.showHidden = n) : n && e._extend(r, n),
            v(r.showHidden) && (r.showHidden = !1),
            v(r.depth) && (r.depth = 2),
            v(r.colors) && (r.colors = !1),
            v(r.customInspect) && (r.customInspect = !0),
            r.colors && (r.stylize = l),
            p(r, t, r.depth)
          );
        }
        function l(t, e) {
          var n = u.styles[e];
          return n ? '[' + u.colors[n][0] + 'm' + t + '[' + u.colors[n][1] + 'm' : t;
        }
        function c(t, e) {
          return t;
        }
        function p(t, n, r) {
          if (t.customInspect && n && N(n.inspect) && n.inspect !== e.inspect && (!n.constructor || n.constructor.prototype !== n)) {
            var s = n.inspect(r, t);
            return b(s) || (s = p(t, s, r)), s;
          }
          var a = (function (t, e) {
            if (v(e)) return t.stylize('undefined', 'undefined');
            if (b(e)) {
              var n = "'" + JSON.stringify(e).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
              return t.stylize(n, 'string');
            }
            return y(e) ? t.stylize('' + e, 'number') : m(e) ? t.stylize('' + e, 'boolean') : g(e) ? t.stylize('null', 'null') : void 0;
          })(t, n);
          if (a) return a;
          var o = Object.keys(n),
            i = (function (t) {
              var e = {};
              return (
                t.forEach(function (t, n) {
                  e[t] = !0;
                }),
                e
              );
            })(o);
          if ((t.showHidden && (o = Object.getOwnPropertyNames(n)), S(n) && (o.indexOf('message') >= 0 || o.indexOf('description') >= 0))) return d(n);
          if (0 === o.length) {
            if (N(n)) {
              var u = n.name ? ': ' + n.name : '';
              return t.stylize('[Function' + u + ']', 'special');
            }
            if (w(n)) return t.stylize(RegExp.prototype.toString.call(n), 'regexp');
            if (x(n)) return t.stylize(Date.prototype.toString.call(n), 'date');
            if (S(n)) return d(n);
          }
          var l,
            c = '',
            T = !1,
            E = ['{', '}'];
          return (
            f(n) && ((T = !0), (E = ['[', ']'])),
            N(n) && (c = ' [Function' + (n.name ? ': ' + n.name : '') + ']'),
            w(n) && (c = ' ' + RegExp.prototype.toString.call(n)),
            x(n) && (c = ' ' + Date.prototype.toUTCString.call(n)),
            S(n) && (c = ' ' + d(n)),
            0 !== o.length || (T && 0 != n.length)
              ? r < 0
                ? w(n)
                  ? t.stylize(RegExp.prototype.toString.call(n), 'regexp')
                  : t.stylize('[Object]', 'special')
                : (t.seen.push(n),
                  (l = T
                    ? (function (t, e, n, r, s) {
                        for (var a = [], o = 0, i = e.length; o < i; ++o) _(e, String(o)) ? a.push(h(t, e, n, r, String(o), !0)) : a.push('');
                        return (
                          s.forEach(function (s) {
                            s.match(/^\d+$/) || a.push(h(t, e, n, r, s, !0));
                          }),
                          a
                        );
                      })(t, n, r, i, o)
                    : o.map(function (e) {
                        return h(t, n, r, i, e, T);
                      })),
                  t.seen.pop(),
                  (function (t, e, n) {
                    return t.reduce(function (t, e) {
                      return e.indexOf('\n'), t + e.replace(/\u001b\[\d\d?m/g, '').length + 1;
                    }, 0) > 60
                      ? n[0] + ('' === e ? '' : e + '\n ') + ' ' + t.join(',\n  ') + ' ' + n[1]
                      : n[0] + e + ' ' + t.join(', ') + ' ' + n[1];
                  })(l, c, E))
              : E[0] + c + E[1]
          );
        }
        function d(t) {
          return '[' + Error.prototype.toString.call(t) + ']';
        }
        function h(t, e, n, r, s, a) {
          var o, i, u;
          if (
            ((u = Object.getOwnPropertyDescriptor(e, s) || { value: e[s] }).get
              ? (i = u.set ? t.stylize('[Getter/Setter]', 'special') : t.stylize('[Getter]', 'special'))
              : u.set && (i = t.stylize('[Setter]', 'special')),
            _(r, s) || (o = '[' + s + ']'),
            i ||
              (t.seen.indexOf(u.value) < 0
                ? (i = g(n) ? p(t, u.value, null) : p(t, u.value, n - 1)).indexOf('\n') > -1 &&
                  (i = a
                    ? i
                        .split('\n')
                        .map(function (t) {
                          return '  ' + t;
                        })
                        .join('\n')
                        .substr(2)
                    : '\n' +
                      i
                        .split('\n')
                        .map(function (t) {
                          return '   ' + t;
                        })
                        .join('\n'))
                : (i = t.stylize('[Circular]', 'special'))),
            v(o))
          ) {
            if (a && s.match(/^\d+$/)) return i;
            (o = JSON.stringify('' + s)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((o = o.substr(1, o.length - 2)), (o = t.stylize(o, 'name')))
              : ((o = o
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (o = t.stylize(o, 'string')));
          }
          return o + ': ' + i;
        }
        function f(t) {
          return Array.isArray(t);
        }
        function m(t) {
          return 'boolean' == typeof t;
        }
        function g(t) {
          return null === t;
        }
        function y(t) {
          return 'number' == typeof t;
        }
        function b(t) {
          return 'string' == typeof t;
        }
        function v(t) {
          return void 0 === t;
        }
        function w(t) {
          return T(t) && '[object RegExp]' === E(t);
        }
        function T(t) {
          return 'object' == typeof t && null !== t;
        }
        function x(t) {
          return T(t) && '[object Date]' === E(t);
        }
        function S(t) {
          return T(t) && ('[object Error]' === E(t) || t instanceof Error);
        }
        function N(t) {
          return 'function' == typeof t;
        }
        function E(t) {
          return Object.prototype.toString.call(t);
        }
        function A(t) {
          return t < 10 ? '0' + t.toString(10) : t.toString(10);
        }
        (e.debuglog = function (t) {
          if ((v(o) && (o = r.env.NODE_DEBUG || ''), (t = t.toUpperCase()), !i[t]))
            if (new RegExp('\\b' + t + '\\b', 'i').test(o)) {
              var n = r.pid;
              i[t] = function () {
                var r = e.format.apply(e, arguments);
                s.error('%s %d: %s', t, n, r);
              };
            } else i[t] = function () {};
          return i[t];
        }),
          (e.inspect = u),
          (u.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39],
          }),
          (u.styles = { special: 'cyan', number: 'yellow', boolean: 'yellow', undefined: 'grey', null: 'bold', string: 'green', date: 'magenta', regexp: 'red' }),
          (e.isArray = f),
          (e.isBoolean = m),
          (e.isNull = g),
          (e.isNullOrUndefined = function (t) {
            return null == t;
          }),
          (e.isNumber = y),
          (e.isString = b),
          (e.isSymbol = function (t) {
            return 'symbol' == typeof t;
          }),
          (e.isUndefined = v),
          (e.isRegExp = w),
          (e.isObject = T),
          (e.isDate = x),
          (e.isError = S),
          (e.isFunction = N),
          (e.isPrimitive = function (t) {
            return null === t || 'boolean' == typeof t || 'number' == typeof t || 'string' == typeof t || 'symbol' == typeof t || void 0 === t;
          }),
          (e.isBuffer = n(33845));
        var k = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        function _(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        (e.log = function () {
          var t, n;
          s.log(
            '%s - %s',
            ((n = [A((t = new Date()).getHours()), A(t.getMinutes()), A(t.getSeconds())].join(':')), [t.getDate(), k[t.getMonth()], n].join(' ')),
            e.format.apply(e, arguments),
          );
        }),
          (e.inherits = n(26100)),
          (e._extend = function (t, e) {
            if (!e || !T(e)) return t;
            for (var n = Object.keys(e), r = n.length; r--; ) t[n[r]] = e[n[r]];
            return t;
          });
      },
      54105: function (t, e, n) {
        var r = n(96763);
        !(function (t, e, n) {
          'use strict';
          function s(t, e, n, r) {
            return new (n || (n = Promise))(function (s, a) {
              function o(t) {
                try {
                  u(r.next(t));
                } catch (t) {
                  a(t);
                }
              }
              function i(t) {
                try {
                  u(r.throw(t));
                } catch (t) {
                  a(t);
                }
              }
              function u(t) {
                var e;
                t.done
                  ? s(t.value)
                  : ((e = t.value),
                    e instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        })).then(o, i);
              }
              u((r = r.apply(t, e || [])).next());
            });
          }
          function a(t, e) {
            var n,
              r,
              s,
              a,
              o = {
                label: 0,
                sent: function () {
                  if (1 & s[0]) throw s[1];
                  return s[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (a = { next: i(0), throw: i(1), return: i(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function () {
                  return this;
                }),
              a
            );
            function i(a) {
              return function (i) {
                return (function (a) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; o; )
                    try {
                      if (((n = 1), r && (s = 2 & a[0] ? r.return : a[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, a[1])).done)) return s;
                      switch (((r = 0), s && (a = [2 & a[0], s.value]), a[0])) {
                        case 0:
                        case 1:
                          s = a;
                          break;
                        case 4:
                          return o.label++, { value: a[1], done: !1 };
                        case 5:
                          o.label++, (r = a[1]), (a = [0]);
                          continue;
                        case 7:
                          (a = o.ops.pop()), o.trys.pop();
                          continue;
                        default:
                          if (!(s = (s = o.trys).length > 0 && s[s.length - 1]) && (6 === a[0] || 2 === a[0])) {
                            o = 0;
                            continue;
                          }
                          if (3 === a[0] && (!s || (a[1] > s[0] && a[1] < s[3]))) {
                            o.label = a[1];
                            break;
                          }
                          if (6 === a[0] && o.label < s[1]) {
                            (o.label = s[1]), (s = a);
                            break;
                          }
                          if (s && o.label < s[2]) {
                            (o.label = s[2]), o.ops.push(a);
                            break;
                          }
                          s[2] && o.ops.pop(), o.trys.pop();
                          continue;
                      }
                      a = e.call(t, o);
                    } catch (t) {
                      (a = [6, t]), (r = 0);
                    } finally {
                      n = s = 0;
                    }
                  if (5 & a[0]) throw a[1];
                  return { value: a[0] ? a[1] : void 0, done: !0 };
                })([a, i]);
              };
            }
          }
          var o = function (t) {
              return { startEndTensor: t, startPoint: e.slice(t, [0, 0], [-1, 2]), endPoint: e.slice(t, [0, 2], [-1, 2]) };
            },
            i = { strides: [8, 16], anchors: [2, 6] };
          function u(t, n) {
            var r, s, a;
            if (t.topLeft instanceof e.Tensor && t.bottomRight instanceof e.Tensor) {
              var o = e.tidy(function () {
                return [
                  e.concat([e.slice(e.sub(n - 1, t.topLeft), 0, 1), e.slice(t.topLeft, 1, 1)]),
                  e.concat([e.sub(n - 1, e.slice(t.bottomRight, 0, 1)), e.slice(t.bottomRight, 1, 1)]),
                ];
              });
              (r = o[0]),
                (s = o[1]),
                null != t.landmarks &&
                  (a = e.tidy(function () {
                    var r = e.sub(e.tensor1d([n - 1, 0]), t.landmarks),
                      s = e.tensor1d([1, -1]);
                    return e.mul(r, s);
                  }));
            } else {
              var i = t.topLeft,
                u = i[0],
                l = i[1],
                c = t.bottomRight,
                p = c[0],
                d = c[1];
              (r = [n - 1 - u, l]),
                (s = [n - 1 - p, d]),
                null != t.landmarks &&
                  (a = t.landmarks.map(function (t) {
                    return [n - 1 - t[0], t[1]];
                  }));
            }
            var h = { topLeft: r, bottomRight: s };
            return null != a && (h.landmarks = a), null != t.probability && (h.probability = t.probability instanceof e.Tensor ? t.probability.clone() : t.probability), h;
          }
          function l(t, n) {
            return e.tidy(function () {
              var r;
              return (
                (r = t.hasOwnProperty('box') ? t.box : t),
                e.squeeze(
                  (function (t, n) {
                    var r = e.mul(t.startPoint, n),
                      s = e.mul(t.endPoint, n),
                      a = e.concat2d([r, s], 1);
                    return o(a);
                  })(r, n).startEndTensor,
                )
              );
            });
          }
          var c = (function () {
            function t(t, n, r, s, a, o) {
              (this.blazeFaceModel = t),
                (this.width = n),
                (this.height = r),
                (this.maxFaces = s),
                (this.anchorsData = (function (t, e, n) {
                  for (var r = [], s = 0; s < n.strides.length; s++)
                    for (var a = n.strides[s], o = Math.floor((e + a - 1) / a), i = Math.floor((t + a - 1) / a), u = n.anchors[s], l = 0; l < o; l++)
                      for (var c = a * (l + 0.5), p = 0; p < i; p++) for (var d = a * (p + 0.5), h = 0; h < u; h++) r.push([d, c]);
                  return r;
                })(n, r, i)),
                (this.anchors = e.tensor2d(this.anchorsData)),
                (this.inputSizeData = [n, r]),
                (this.inputSize = e.tensor1d([n, r])),
                (this.iouThreshold = a),
                (this.scoreThreshold = o);
            }
            return (
              (t.prototype.getBoundingBoxes = function (t, n, i) {
                return (
                  void 0 === i && (i = !0),
                  s(this, void 0, void 0, function () {
                    var u,
                      l,
                      c,
                      p,
                      d,
                      h,
                      f,
                      m,
                      g,
                      y,
                      b,
                      v,
                      w,
                      T,
                      x = this;
                    return a(this, function (S) {
                      switch (S.label) {
                        case 0:
                          return (
                            (u = e.tidy(function () {
                              var n,
                                r,
                                s,
                                a,
                                o,
                                i,
                                u,
                                l,
                                c,
                                p,
                                d,
                                h,
                                f,
                                m = e.image.resizeBilinear(t, [x.width, x.height]),
                                g = e.mul(e.sub(e.div(m, 255), 0.5), 2),
                                y = x.blazeFaceModel.predict(g),
                                b = e.squeeze(y),
                                v =
                                  ((n = b),
                                  (r = x.anchors),
                                  (s = x.inputSize),
                                  (a = e.slice(n, [0, 1], [-1, 2])),
                                  (o = e.add(a, r)),
                                  (i = e.slice(n, [0, 3], [-1, 2])),
                                  (u = e.div(i, s)),
                                  (l = e.div(o, s)),
                                  (c = e.div(u, 2)),
                                  (p = e.sub(l, c)),
                                  (d = e.add(l, c)),
                                  (h = e.mul(p, s)),
                                  (f = e.mul(d, s)),
                                  e.concat2d([h, f], 1)),
                                w = e.slice(b, [0, 0], [-1, 1]);
                              return [b, v, e.squeeze(e.sigmoid(w))];
                            })),
                            (l = u[0]),
                            (c = u[1]),
                            (p = u[2]),
                            (d = r.warn),
                            (r.warn = function () {}),
                            (h = e.image.nonMaxSuppression(c, p, this.maxFaces, this.iouThreshold, this.scoreThreshold)),
                            (r.warn = d),
                            [4, h.array()]
                          );
                        case 1:
                          return (
                            (f = S.sent()),
                            h.dispose(),
                            (m = f.map(function (t) {
                              return e.slice(c, [t, 0], [1, -1]);
                            })),
                            n
                              ? [3, 3]
                              : [
                                  4,
                                  Promise.all(
                                    m.map(function (t) {
                                      return s(x, void 0, void 0, function () {
                                        var e;
                                        return a(this, function (n) {
                                          switch (n.label) {
                                            case 0:
                                              return [4, t.array()];
                                            case 1:
                                              return (e = n.sent()), t.dispose(), [2, e];
                                          }
                                        });
                                      });
                                    }),
                                  ),
                                ]
                          );
                        case 2:
                          (m = S.sent()), (S.label = 3);
                        case 3:
                          for (
                            g = t.shape[1],
                              y = t.shape[2],
                              b = n ? e.div([y, g], this.inputSize) : [y / this.inputSizeData[0], g / this.inputSizeData[1]],
                              v = [],
                              w = function (t) {
                                var r = m[t],
                                  s = e.tidy(function () {
                                    var s = r instanceof e.Tensor ? o(r) : o(e.tensor2d(r));
                                    if (!i) return s;
                                    var a,
                                      u = f[t];
                                    return (
                                      (a = n ? e.slice(x.anchors, [u, 0], [1, 2]) : x.anchorsData[u]),
                                      { box: s, landmarks: e.reshape(e.squeeze(e.slice(l, [u, 5], [1, -1])), [6, -1]), probability: e.slice(p, [u], [1]), anchor: a }
                                    );
                                  });
                                v.push(s);
                              },
                              T = 0;
                            T < m.length;
                            T++
                          )
                            w(T);
                          return c.dispose(), p.dispose(), l.dispose(), [2, { boxes: v, scaleFactor: b }];
                      }
                    });
                  })
                );
              }),
              (t.prototype.estimateFaces = function (t, n, r, o) {
                return (
                  void 0 === n && (n = !1),
                  void 0 === r && (r = !1),
                  void 0 === o && (o = !0),
                  s(this, void 0, void 0, function () {
                    var i,
                      c,
                      p,
                      d,
                      h,
                      f,
                      m = this;
                    return a(this, function (g) {
                      switch (g.label) {
                        case 0:
                          return (
                            (i = (function (t) {
                              return t instanceof e.Tensor ? [t.shape[0], t.shape[1]] : [t.height, t.width];
                            })(t)),
                            (c = i[1]),
                            (p = e.tidy(function () {
                              return t instanceof e.Tensor || (t = e.browser.fromPixels(t)), e.expandDims(e.cast(t, 'float32'), 0);
                            })),
                            [4, this.getBoundingBoxes(p, n, o)]
                          );
                        case 1:
                          return (
                            (d = g.sent()),
                            (h = d.boxes),
                            (f = d.scaleFactor),
                            p.dispose(),
                            n
                              ? [
                                  2,
                                  h.map(function (t) {
                                    var n = l(t, f),
                                      s = { topLeft: e.slice(n, [0], [2]), bottomRight: e.slice(n, [2], [2]) };
                                    if (o) {
                                      var a = t,
                                        i = a.landmarks,
                                        p = a.probability,
                                        d = a.anchor,
                                        h = e.mul(e.add(i, d), f);
                                      (s.landmarks = h), (s.probability = p);
                                    }
                                    return r && (s = u(s, c)), s;
                                  }),
                                ]
                              : [
                                  2,
                                  Promise.all(
                                    h.map(function (t) {
                                      return s(m, void 0, void 0, function () {
                                        var e,
                                          n,
                                          i,
                                          p,
                                          d,
                                          h,
                                          m,
                                          g,
                                          y,
                                          b,
                                          v,
                                          w = this;
                                        return a(this, function (T) {
                                          switch (T.label) {
                                            case 0:
                                              return (e = l(t, f)), o ? [3, 2] : [4, e.array()];
                                            case 1:
                                              return (d = T.sent()), (n = { topLeft: d.slice(0, 2), bottomRight: d.slice(2) }), [3, 4];
                                            case 2:
                                              return [
                                                4,
                                                Promise.all(
                                                  [t.landmarks, e, t.probability].map(function (t) {
                                                    return s(w, void 0, void 0, function () {
                                                      return a(this, function (e) {
                                                        return [2, t.array()];
                                                      });
                                                    });
                                                  }),
                                                ),
                                              ];
                                            case 3:
                                              (i = T.sent()),
                                                (p = i[0]),
                                                (d = i[1]),
                                                (h = i[2]),
                                                (m = t.anchor),
                                                (y = (g = f)[0]),
                                                (b = g[1]),
                                                (v = p.map(function (t) {
                                                  return [(t[0] + m[0]) * y, (t[1] + m[1]) * b];
                                                })),
                                                (n = { topLeft: d.slice(0, 2), bottomRight: d.slice(2), landmarks: v, probability: h }),
                                                (x = t.box).startEndTensor.dispose(),
                                                x.startPoint.dispose(),
                                                x.endPoint.dispose(),
                                                t.landmarks.dispose(),
                                                t.probability.dispose(),
                                                (T.label = 4);
                                            case 4:
                                              return e.dispose(), r && (n = u(n, c)), [2, n];
                                          }
                                          var x;
                                        });
                                      });
                                    }),
                                  ),
                                ]
                          );
                      }
                    });
                  })
                );
              }),
              t
            );
          })();
          (t.load = function (t) {
            var e = void 0 === t ? {} : t,
              r = e.maxFaces,
              o = void 0 === r ? 10 : r,
              i = e.inputWidth,
              u = void 0 === i ? 128 : i,
              l = e.inputHeight,
              p = void 0 === l ? 128 : l,
              d = e.iouThreshold,
              h = void 0 === d ? 0.3 : d,
              f = e.scoreThreshold,
              m = void 0 === f ? 0.75 : f,
              g = e.modelUrl;
            return s(this, void 0, void 0, function () {
              var t;
              return a(this, function (e) {
                switch (e.label) {
                  case 0:
                    return null == g ? [3, 2] : [4, n.loadGraphModel(g)];
                  case 1:
                    return (t = e.sent()), [3, 4];
                  case 2:
                    return [4, n.loadGraphModel('https://tfhub.dev/tensorflow/tfjs-model/blazeface/1/default/1', { fromTFHub: !0 })];
                  case 3:
                    (t = e.sent()), (e.label = 4);
                  case 4:
                    return [2, new c(t, u, p, o, h, m)];
                }
              });
            });
          }),
            (t.BlazeFaceModel = c),
            Object.defineProperty(t, '__esModule', { value: !0 });
        })(e, n(9495), n(83464));
      },
      67526: (t, e) => {
        'use strict';
        (e.byteLength = function (t) {
          var e = i(t),
            n = e[0],
            r = e[1];
          return (3 * (n + r)) / 4 - r;
        }),
          (e.toByteArray = function (t) {
            var e,
              n,
              a = i(t),
              o = a[0],
              u = a[1],
              l = new s(
                (function (t, e, n) {
                  return (3 * (e + n)) / 4 - n;
                })(0, o, u),
              ),
              c = 0,
              p = u > 0 ? o - 4 : o;
            for (n = 0; n < p; n += 4)
              (e = (r[t.charCodeAt(n)] << 18) | (r[t.charCodeAt(n + 1)] << 12) | (r[t.charCodeAt(n + 2)] << 6) | r[t.charCodeAt(n + 3)]),
                (l[c++] = (e >> 16) & 255),
                (l[c++] = (e >> 8) & 255),
                (l[c++] = 255 & e);
            return (
              2 === u && ((e = (r[t.charCodeAt(n)] << 2) | (r[t.charCodeAt(n + 1)] >> 4)), (l[c++] = 255 & e)),
              1 === u && ((e = (r[t.charCodeAt(n)] << 10) | (r[t.charCodeAt(n + 1)] << 4) | (r[t.charCodeAt(n + 2)] >> 2)), (l[c++] = (e >> 8) & 255), (l[c++] = 255 & e)),
              l
            );
          }),
          (e.fromByteArray = function (t) {
            for (var e, r = t.length, s = r % 3, a = [], o = 16383, i = 0, l = r - s; i < l; i += o) a.push(u(t, i, i + o > l ? l : i + o));
            return (
              1 === s
                ? ((e = t[r - 1]), a.push(n[e >> 2] + n[(e << 4) & 63] + '=='))
                : 2 === s && ((e = (t[r - 2] << 8) + t[r - 1]), a.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + '=')),
              a.join('')
            );
          });
        for (
          var n = [], r = [], s = 'undefined' != typeof Uint8Array ? Uint8Array : Array, a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', o = 0;
          o < 64;
          ++o
        )
          (n[o] = a[o]), (r[a.charCodeAt(o)] = o);
        function i(t) {
          var e = t.length;
          if (e % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
          var n = t.indexOf('=');
          return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
        }
        function u(t, e, r) {
          for (var s, a, o = [], i = e; i < r; i += 3)
            (s = ((t[i] << 16) & 16711680) + ((t[i + 1] << 8) & 65280) + (255 & t[i + 2])), o.push(n[((a = s) >> 18) & 63] + n[(a >> 12) & 63] + n[(a >> 6) & 63] + n[63 & a]);
          return o.join('');
        }
        (r['-'.charCodeAt(0)] = 62), (r['_'.charCodeAt(0)] = 63);
      },
      38075: (t, e, n) => {
        'use strict';
        var r = n(70453),
          s = n(10487),
          a = s(r('String.prototype.indexOf'));
        t.exports = function (t, e) {
          var n = r(t, !!e);
          return 'function' == typeof n && a(t, '.prototype.') > -1 ? s(n) : n;
        };
      },
      10487: (t, e, n) => {
        'use strict';
        var r = n(66743),
          s = n(70453),
          a = n(96897),
          o = n(69675),
          i = s('%Function.prototype.apply%'),
          u = s('%Function.prototype.call%'),
          l = s('%Reflect.apply%', !0) || r.call(u, i),
          c = n(30655),
          p = s('%Math.max%');
        t.exports = function (t) {
          if ('function' != typeof t) throw new o('a function is required');
          var e = l(r, u, arguments);
          return a(e, 1 + p(0, t.length - (arguments.length - 1)), !0);
        };
        var d = function () {
          return l(r, i, arguments);
        };
        c ? c(t.exports, 'apply', { value: d }) : (t.exports.apply = d);
      },
      96763: (t, e, n) => {
        var r = n(40537),
          s = n(34529);
        function a() {
          return new Date().getTime();
        }
        var o,
          i = Array.prototype.slice,
          u = {};
        o = void 0 !== n.g && n.g.console ? n.g.console : 'undefined' != typeof window && window.console ? window.console : {};
        for (
          var l = [
              [function () {}, 'log'],
              [
                function () {
                  o.log.apply(o, arguments);
                },
                'info',
              ],
              [
                function () {
                  o.log.apply(o, arguments);
                },
                'warn',
              ],
              [
                function () {
                  o.warn.apply(o, arguments);
                },
                'error',
              ],
              [
                function (t) {
                  u[t] = a();
                },
                'time',
              ],
              [
                function (t) {
                  var e = u[t];
                  if (!e) throw new Error('No such label: ' + t);
                  delete u[t];
                  var n = a() - e;
                  o.log(t + ': ' + n + 'ms');
                },
                'timeEnd',
              ],
              [
                function () {
                  var t = new Error();
                  (t.name = 'Trace'), (t.message = r.format.apply(null, arguments)), o.error(t.stack);
                },
                'trace',
              ],
              [
                function (t) {
                  o.log(r.inspect(t) + '\n');
                },
                'dir',
              ],
              [
                function (t) {
                  if (!t) {
                    var e = i.call(arguments, 1);
                    s.ok(!1, r.format.apply(null, e));
                  }
                },
                'assert',
              ],
            ],
            c = 0;
          c < l.length;
          c++
        ) {
          var p = l[c],
            d = p[0],
            h = p[1];
          o[h] || (o[h] = d);
        }
        t.exports = o;
      },
      30041: (t, e, n) => {
        'use strict';
        var r = n(30655),
          s = n(58068),
          a = n(69675),
          o = n(75795);
        t.exports = function (t, e, n) {
          if (!t || ('object' != typeof t && 'function' != typeof t)) throw new a('`obj` must be an object or a function`');
          if ('string' != typeof e && 'symbol' != typeof e) throw new a('`property` must be a string or a symbol`');
          if (arguments.length > 3 && 'boolean' != typeof arguments[3] && null !== arguments[3]) throw new a('`nonEnumerable`, if provided, must be a boolean or null');
          if (arguments.length > 4 && 'boolean' != typeof arguments[4] && null !== arguments[4]) throw new a('`nonWritable`, if provided, must be a boolean or null');
          if (arguments.length > 5 && 'boolean' != typeof arguments[5] && null !== arguments[5]) throw new a('`nonConfigurable`, if provided, must be a boolean or null');
          if (arguments.length > 6 && 'boolean' != typeof arguments[6]) throw new a('`loose`, if provided, must be a boolean');
          var i = arguments.length > 3 ? arguments[3] : null,
            u = arguments.length > 4 ? arguments[4] : null,
            l = arguments.length > 5 ? arguments[5] : null,
            c = arguments.length > 6 && arguments[6],
            p = !!o && o(t, e);
          if (r)
            r(t, e, {
              configurable: null === l && p ? p.configurable : !l,
              enumerable: null === i && p ? p.enumerable : !i,
              value: n,
              writable: null === u && p ? p.writable : !u,
            });
          else {
            if (!c && (i || u || l)) throw new s('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
            t[e] = n;
          }
        };
      },
      30655: (t, e, n) => {
        'use strict';
        var r = n(70453)('%Object.defineProperty%', !0) || !1;
        if (r)
          try {
            r({}, 'a', { value: 1 });
          } catch (t) {
            r = !1;
          }
        t.exports = r;
      },
      41237: (t) => {
        'use strict';
        t.exports = EvalError;
      },
      69383: (t) => {
        'use strict';
        t.exports = Error;
      },
      79290: (t) => {
        'use strict';
        t.exports = RangeError;
      },
      79538: (t) => {
        'use strict';
        t.exports = ReferenceError;
      },
      58068: (t) => {
        'use strict';
        t.exports = SyntaxError;
      },
      69675: (t) => {
        'use strict';
        t.exports = TypeError;
      },
      35345: (t) => {
        'use strict';
        t.exports = URIError;
      },
      89353: (t) => {
        'use strict';
        var e = Object.prototype.toString,
          n = Math.max,
          r = function (t, e) {
            for (var n = [], r = 0; r < t.length; r += 1) n[r] = t[r];
            for (var s = 0; s < e.length; s += 1) n[s + t.length] = e[s];
            return n;
          };
        t.exports = function (t) {
          var s = this;
          if ('function' != typeof s || '[object Function]' !== e.apply(s)) throw new TypeError('Function.prototype.bind called on incompatible ' + s);
          for (
            var a,
              o = (function (t, e) {
                for (var n = [], r = 1, s = 0; r < t.length; r += 1, s += 1) n[s] = t[r];
                return n;
              })(arguments),
              i = n(0, s.length - o.length),
              u = [],
              l = 0;
            l < i;
            l++
          )
            u[l] = '$' + l;
          if (
            ((a = Function(
              'binder',
              'return function (' +
                (function (t, e) {
                  for (var n = '', r = 0; r < t.length; r += 1) (n += t[r]), r + 1 < t.length && (n += ',');
                  return n;
                })(u) +
                '){ return binder.apply(this,arguments); }',
            )(function () {
              if (this instanceof a) {
                var e = s.apply(this, r(o, arguments));
                return Object(e) === e ? e : this;
              }
              return s.apply(t, r(o, arguments));
            })),
            s.prototype)
          ) {
            var c = function () {};
            (c.prototype = s.prototype), (a.prototype = new c()), (c.prototype = null);
          }
          return a;
        };
      },
      66743: (t, e, n) => {
        'use strict';
        var r = n(89353);
        t.exports = Function.prototype.bind || r;
      },
      70453: (t, e, n) => {
        'use strict';
        var r,
          s = n(69383),
          a = n(41237),
          o = n(79290),
          i = n(79538),
          u = n(58068),
          l = n(69675),
          c = n(35345),
          p = Function,
          d = function (t) {
            try {
              return p('"use strict"; return (' + t + ').constructor;')();
            } catch (t) {}
          },
          h = Object.getOwnPropertyDescriptor;
        if (h)
          try {
            h({}, '');
          } catch (t) {
            h = null;
          }
        var f = function () {
            throw new l();
          },
          m = h
            ? (function () {
                try {
                  return f;
                } catch (t) {
                  try {
                    return h(arguments, 'callee').get;
                  } catch (t) {
                    return f;
                  }
                }
              })()
            : f,
          g = n(64039)(),
          y = n(80024)(),
          b =
            Object.getPrototypeOf ||
            (y
              ? function (t) {
                  return t.__proto__;
                }
              : null),
          v = {},
          w = 'undefined' != typeof Uint8Array && b ? b(Uint8Array) : r,
          T = {
            __proto__: null,
            '%AggregateError%': 'undefined' == typeof AggregateError ? r : AggregateError,
            '%Array%': Array,
            '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? r : ArrayBuffer,
            '%ArrayIteratorPrototype%': g && b ? b([][Symbol.iterator]()) : r,
            '%AsyncFromSyncIteratorPrototype%': r,
            '%AsyncFunction%': v,
            '%AsyncGenerator%': v,
            '%AsyncGeneratorFunction%': v,
            '%AsyncIteratorPrototype%': v,
            '%Atomics%': 'undefined' == typeof Atomics ? r : Atomics,
            '%BigInt%': 'undefined' == typeof BigInt ? r : BigInt,
            '%BigInt64Array%': 'undefined' == typeof BigInt64Array ? r : BigInt64Array,
            '%BigUint64Array%': 'undefined' == typeof BigUint64Array ? r : BigUint64Array,
            '%Boolean%': Boolean,
            '%DataView%': 'undefined' == typeof DataView ? r : DataView,
            '%Date%': Date,
            '%decodeURI%': decodeURI,
            '%decodeURIComponent%': decodeURIComponent,
            '%encodeURI%': encodeURI,
            '%encodeURIComponent%': encodeURIComponent,
            '%Error%': s,
            '%eval%': eval,
            '%EvalError%': a,
            '%Float32Array%': 'undefined' == typeof Float32Array ? r : Float32Array,
            '%Float64Array%': 'undefined' == typeof Float64Array ? r : Float64Array,
            '%FinalizationRegistry%': 'undefined' == typeof FinalizationRegistry ? r : FinalizationRegistry,
            '%Function%': p,
            '%GeneratorFunction%': v,
            '%Int8Array%': 'undefined' == typeof Int8Array ? r : Int8Array,
            '%Int16Array%': 'undefined' == typeof Int16Array ? r : Int16Array,
            '%Int32Array%': 'undefined' == typeof Int32Array ? r : Int32Array,
            '%isFinite%': isFinite,
            '%isNaN%': isNaN,
            '%IteratorPrototype%': g && b ? b(b([][Symbol.iterator]())) : r,
            '%JSON%': 'object' == typeof JSON ? JSON : r,
            '%Map%': 'undefined' == typeof Map ? r : Map,
            '%MapIteratorPrototype%': 'undefined' != typeof Map && g && b ? b(new Map()[Symbol.iterator]()) : r,
            '%Math%': Math,
            '%Number%': Number,
            '%Object%': Object,
            '%parseFloat%': parseFloat,
            '%parseInt%': parseInt,
            '%Promise%': 'undefined' == typeof Promise ? r : Promise,
            '%Proxy%': 'undefined' == typeof Proxy ? r : Proxy,
            '%RangeError%': o,
            '%ReferenceError%': i,
            '%Reflect%': 'undefined' == typeof Reflect ? r : Reflect,
            '%RegExp%': RegExp,
            '%Set%': 'undefined' == typeof Set ? r : Set,
            '%SetIteratorPrototype%': 'undefined' != typeof Set && g && b ? b(new Set()[Symbol.iterator]()) : r,
            '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
            '%String%': String,
            '%StringIteratorPrototype%': g && b ? b(''[Symbol.iterator]()) : r,
            '%Symbol%': g ? Symbol : r,
            '%SyntaxError%': u,
            '%ThrowTypeError%': m,
            '%TypedArray%': w,
            '%TypeError%': l,
            '%Uint8Array%': 'undefined' == typeof Uint8Array ? r : Uint8Array,
            '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
            '%Uint16Array%': 'undefined' == typeof Uint16Array ? r : Uint16Array,
            '%Uint32Array%': 'undefined' == typeof Uint32Array ? r : Uint32Array,
            '%URIError%': c,
            '%WeakMap%': 'undefined' == typeof WeakMap ? r : WeakMap,
            '%WeakRef%': 'undefined' == typeof WeakRef ? r : WeakRef,
            '%WeakSet%': 'undefined' == typeof WeakSet ? r : WeakSet,
          };
        if (b)
          try {
            null.error;
          } catch (t) {
            var x = b(b(t));
            T['%Error.prototype%'] = x;
          }
        var S = function t(e) {
            var n;
            if ('%AsyncFunction%' === e) n = d('async function () {}');
            else if ('%GeneratorFunction%' === e) n = d('function* () {}');
            else if ('%AsyncGeneratorFunction%' === e) n = d('async function* () {}');
            else if ('%AsyncGenerator%' === e) {
              var r = t('%AsyncGeneratorFunction%');
              r && (n = r.prototype);
            } else if ('%AsyncIteratorPrototype%' === e) {
              var s = t('%AsyncGenerator%');
              s && b && (n = b(s.prototype));
            }
            return (T[e] = n), n;
          },
          N = {
            __proto__: null,
            '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
            '%ArrayPrototype%': ['Array', 'prototype'],
            '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
            '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
            '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
            '%ArrayProto_values%': ['Array', 'prototype', 'values'],
            '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
            '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
            '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
            '%BooleanPrototype%': ['Boolean', 'prototype'],
            '%DataViewPrototype%': ['DataView', 'prototype'],
            '%DatePrototype%': ['Date', 'prototype'],
            '%ErrorPrototype%': ['Error', 'prototype'],
            '%EvalErrorPrototype%': ['EvalError', 'prototype'],
            '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
            '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
            '%FunctionPrototype%': ['Function', 'prototype'],
            '%Generator%': ['GeneratorFunction', 'prototype'],
            '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
            '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
            '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
            '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
            '%JSONParse%': ['JSON', 'parse'],
            '%JSONStringify%': ['JSON', 'stringify'],
            '%MapPrototype%': ['Map', 'prototype'],
            '%NumberPrototype%': ['Number', 'prototype'],
            '%ObjectPrototype%': ['Object', 'prototype'],
            '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
            '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
            '%PromisePrototype%': ['Promise', 'prototype'],
            '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
            '%Promise_all%': ['Promise', 'all'],
            '%Promise_reject%': ['Promise', 'reject'],
            '%Promise_resolve%': ['Promise', 'resolve'],
            '%RangeErrorPrototype%': ['RangeError', 'prototype'],
            '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
            '%RegExpPrototype%': ['RegExp', 'prototype'],
            '%SetPrototype%': ['Set', 'prototype'],
            '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
            '%StringPrototype%': ['String', 'prototype'],
            '%SymbolPrototype%': ['Symbol', 'prototype'],
            '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
            '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
            '%TypeErrorPrototype%': ['TypeError', 'prototype'],
            '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
            '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
            '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
            '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
            '%URIErrorPrototype%': ['URIError', 'prototype'],
            '%WeakMapPrototype%': ['WeakMap', 'prototype'],
            '%WeakSetPrototype%': ['WeakSet', 'prototype'],
          },
          E = n(66743),
          A = n(9957),
          k = E.call(Function.call, Array.prototype.concat),
          _ = E.call(Function.apply, Array.prototype.splice),
          I = E.call(Function.call, String.prototype.replace),
          O = E.call(Function.call, String.prototype.slice),
          M = E.call(Function.call, RegExp.prototype.exec),
          $ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          D = /\\(\\)?/g,
          R = function (t, e) {
            var n,
              r = t;
            if ((A(N, r) && (r = '%' + (n = N[r])[0] + '%'), A(T, r))) {
              var s = T[r];
              if ((s === v && (s = S(r)), void 0 === s && !e)) throw new l('intrinsic ' + t + ' exists, but is not available. Please file an issue!');
              return { alias: n, name: r, value: s };
            }
            throw new u('intrinsic ' + t + ' does not exist!');
          };
        t.exports = function (t, e) {
          if ('string' != typeof t || 0 === t.length) throw new l('intrinsic name must be a non-empty string');
          if (arguments.length > 1 && 'boolean' != typeof e) throw new l('"allowMissing" argument must be a boolean');
          if (null === M(/^%?[^%]*%?$/, t)) throw new u('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
          var n = (function (t) {
              var e = O(t, 0, 1),
                n = O(t, -1);
              if ('%' === e && '%' !== n) throw new u('invalid intrinsic syntax, expected closing `%`');
              if ('%' === n && '%' !== e) throw new u('invalid intrinsic syntax, expected opening `%`');
              var r = [];
              return (
                I(t, $, function (t, e, n, s) {
                  r[r.length] = n ? I(s, D, '$1') : e || t;
                }),
                r
              );
            })(t),
            r = n.length > 0 ? n[0] : '',
            s = R('%' + r + '%', e),
            a = s.name,
            o = s.value,
            i = !1,
            c = s.alias;
          c && ((r = c[0]), _(n, k([0, 1], c)));
          for (var p = 1, d = !0; p < n.length; p += 1) {
            var f = n[p],
              m = O(f, 0, 1),
              g = O(f, -1);
            if (('"' === m || "'" === m || '`' === m || '"' === g || "'" === g || '`' === g) && m !== g) throw new u('property names with quotes must have matching quotes');
            if ((('constructor' !== f && d) || (i = !0), A(T, (a = '%' + (r += '.' + f) + '%')))) o = T[a];
            else if (null != o) {
              if (!(f in o)) {
                if (!e) throw new l('base intrinsic for ' + t + ' exists, but the property is not available.');
                return;
              }
              if (h && p + 1 >= n.length) {
                var y = h(o, f);
                o = (d = !!y) && 'get' in y && !('originalValue' in y.get) ? y.get : o[f];
              } else (d = A(o, f)), (o = o[f]);
              d && !i && (T[a] = o);
            }
          }
          return o;
        };
      },
      75795: (t, e, n) => {
        'use strict';
        var r = n(70453)('%Object.getOwnPropertyDescriptor%', !0);
        if (r)
          try {
            r([], 'length');
          } catch (t) {
            r = null;
          }
        t.exports = r;
      },
      30592: (t, e, n) => {
        'use strict';
        var r = n(30655),
          s = function () {
            return !!r;
          };
        (s.hasArrayLengthDefineBug = function () {
          if (!r) return null;
          try {
            return 1 !== r([], 'length', { value: 1 }).length;
          } catch (t) {
            return !0;
          }
        }),
          (t.exports = s);
      },
      80024: (t) => {
        'use strict';
        var e = { __proto__: null, foo: {} },
          n = Object;
        t.exports = function () {
          return { __proto__: e }.foo === e.foo && !(e instanceof n);
        };
      },
      64039: (t, e, n) => {
        'use strict';
        var r = 'undefined' != typeof Symbol && Symbol,
          s = n(41333);
        t.exports = function () {
          return 'function' == typeof r && 'function' == typeof Symbol && 'symbol' == typeof r('foo') && 'symbol' == typeof Symbol('bar') && s();
        };
      },
      41333: (t) => {
        'use strict';
        t.exports = function () {
          if ('function' != typeof Symbol || 'function' != typeof Object.getOwnPropertySymbols) return !1;
          if ('symbol' == typeof Symbol.iterator) return !0;
          var t = {},
            e = Symbol('test'),
            n = Object(e);
          if ('string' == typeof e) return !1;
          if ('[object Symbol]' !== Object.prototype.toString.call(e)) return !1;
          if ('[object Symbol]' !== Object.prototype.toString.call(n)) return !1;
          for (e in ((t[e] = 42), t)) return !1;
          if ('function' == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
          if ('function' == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
          var r = Object.getOwnPropertySymbols(t);
          if (1 !== r.length || r[0] !== e) return !1;
          if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
          if ('function' == typeof Object.getOwnPropertyDescriptor) {
            var s = Object.getOwnPropertyDescriptor(t, e);
            if (42 !== s.value || !0 !== s.enumerable) return !1;
          }
          return !0;
        };
      },
      9957: (t, e, n) => {
        'use strict';
        var r = Function.prototype.call,
          s = Object.prototype.hasOwnProperty,
          a = n(66743);
        t.exports = a.call(r, s);
      },
      251: (t, e) => {
        (e.read = function (t, e, n, r, s) {
          var a,
            o,
            i = 8 * s - r - 1,
            u = (1 << i) - 1,
            l = u >> 1,
            c = -7,
            p = n ? s - 1 : 0,
            d = n ? -1 : 1,
            h = t[e + p];
          for (p += d, a = h & ((1 << -c) - 1), h >>= -c, c += i; c > 0; a = 256 * a + t[e + p], p += d, c -= 8);
          for (o = a & ((1 << -c) - 1), a >>= -c, c += r; c > 0; o = 256 * o + t[e + p], p += d, c -= 8);
          if (0 === a) a = 1 - l;
          else {
            if (a === u) return o ? NaN : (1 / 0) * (h ? -1 : 1);
            (o += Math.pow(2, r)), (a -= l);
          }
          return (h ? -1 : 1) * o * Math.pow(2, a - r);
        }),
          (e.write = function (t, e, n, r, s, a) {
            var o,
              i,
              u,
              l = 8 * a - s - 1,
              c = (1 << l) - 1,
              p = c >> 1,
              d = 23 === s ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              h = r ? 0 : a - 1,
              f = r ? 1 : -1,
              m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
            for (
              e = Math.abs(e),
                isNaN(e) || e === 1 / 0
                  ? ((i = isNaN(e) ? 1 : 0), (o = c))
                  : ((o = Math.floor(Math.log(e) / Math.LN2)),
                    e * (u = Math.pow(2, -o)) < 1 && (o--, (u *= 2)),
                    (e += o + p >= 1 ? d / u : d * Math.pow(2, 1 - p)) * u >= 2 && (o++, (u /= 2)),
                    o + p >= c ? ((i = 0), (o = c)) : o + p >= 1 ? ((i = (e * u - 1) * Math.pow(2, s)), (o += p)) : ((i = e * Math.pow(2, p - 1) * Math.pow(2, s)), (o = 0)));
              s >= 8;
              t[n + h] = 255 & i, h += f, i /= 256, s -= 8
            );
            for (o = (o << s) | i, l += s; l > 0; t[n + h] = 255 & o, h += f, o /= 256, l -= 8);
            t[n + h - f] |= 128 * m;
          });
      },
      28570: (t) => {
        t.exports = n;
        var e = null;
        try {
          e = new WebAssembly.Instance(
            new WebAssembly.Module(
              new Uint8Array([
                0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109,
                117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101,
                116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134,
                132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127,
                34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66,
                32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135,
                167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0,
                32, 4, 167, 11,
              ]),
            ),
            {},
          ).exports;
        } catch (t) {}
        function n(t, e, n) {
          (this.low = 0 | t), (this.high = 0 | e), (this.unsigned = !!n);
        }
        function r(t) {
          return !0 === (t && t.__isLong__);
        }
        n.prototype.__isLong__, Object.defineProperty(n.prototype, '__isLong__', { value: !0 }), (n.isLong = r);
        var s = {},
          a = {};
        function o(t, e) {
          var n, r, o;
          return e
            ? (o = 0 <= (t >>>= 0) && t < 256) && (r = a[t])
              ? r
              : ((n = u(t, (0 | t) < 0 ? -1 : 0, !0)), o && (a[t] = n), n)
            : (o = -128 <= (t |= 0) && t < 128) && (r = s[t])
              ? r
              : ((n = u(t, t < 0 ? -1 : 0, !1)), o && (s[t] = n), n);
        }
        function i(t, e) {
          if (isNaN(t)) return e ? y : g;
          if (e) {
            if (t < 0) return y;
            if (t >= h) return x;
          } else {
            if (t <= -f) return S;
            if (t + 1 >= f) return T;
          }
          return t < 0 ? i(-t, e).neg() : u(t % d | 0, (t / d) | 0, e);
        }
        function u(t, e, r) {
          return new n(t, e, r);
        }
        (n.fromInt = o), (n.fromNumber = i), (n.fromBits = u);
        var l = Math.pow;
        function c(t, e, n) {
          if (0 === t.length) throw Error('empty string');
          if ('NaN' === t || 'Infinity' === t || '+Infinity' === t || '-Infinity' === t) return g;
          if (('number' == typeof e ? ((n = e), (e = !1)) : (e = !!e), (n = n || 10) < 2 || 36 < n)) throw RangeError('radix');
          var r;
          if ((r = t.indexOf('-')) > 0) throw Error('interior hyphen');
          if (0 === r) return c(t.substring(1), e, n).neg();
          for (var s = i(l(n, 8)), a = g, o = 0; o < t.length; o += 8) {
            var u = Math.min(8, t.length - o),
              p = parseInt(t.substring(o, o + u), n);
            if (u < 8) {
              var d = i(l(n, u));
              a = a.mul(d).add(i(p));
            } else a = (a = a.mul(s)).add(i(p));
          }
          return (a.unsigned = e), a;
        }
        function p(t, e) {
          return 'number' == typeof t ? i(t, e) : 'string' == typeof t ? c(t, e) : u(t.low, t.high, 'boolean' == typeof e ? e : t.unsigned);
        }
        (n.fromString = c), (n.fromValue = p);
        var d = 4294967296,
          h = d * d,
          f = h / 2,
          m = o(1 << 24),
          g = o(0);
        n.ZERO = g;
        var y = o(0, !0);
        n.UZERO = y;
        var b = o(1);
        n.ONE = b;
        var v = o(1, !0);
        n.UONE = v;
        var w = o(-1);
        n.NEG_ONE = w;
        var T = u(-1, 2147483647, !1);
        n.MAX_VALUE = T;
        var x = u(-1, -1, !0);
        n.MAX_UNSIGNED_VALUE = x;
        var S = u(0, -2147483648, !1);
        n.MIN_VALUE = S;
        var N = n.prototype;
        (N.toInt = function () {
          return this.unsigned ? this.low >>> 0 : this.low;
        }),
          (N.toNumber = function () {
            return this.unsigned ? (this.high >>> 0) * d + (this.low >>> 0) : this.high * d + (this.low >>> 0);
          }),
          (N.toString = function (t) {
            if ((t = t || 10) < 2 || 36 < t) throw RangeError('radix');
            if (this.isZero()) return '0';
            if (this.isNegative()) {
              if (this.eq(S)) {
                var e = i(t),
                  n = this.div(e),
                  r = n.mul(e).sub(this);
                return n.toString(t) + r.toInt().toString(t);
              }
              return '-' + this.neg().toString(t);
            }
            for (var s = i(l(t, 6), this.unsigned), a = this, o = ''; ; ) {
              var u = a.div(s),
                c = (a.sub(u.mul(s)).toInt() >>> 0).toString(t);
              if ((a = u).isZero()) return c + o;
              for (; c.length < 6; ) c = '0' + c;
              o = '' + c + o;
            }
          }),
          (N.getHighBits = function () {
            return this.high;
          }),
          (N.getHighBitsUnsigned = function () {
            return this.high >>> 0;
          }),
          (N.getLowBits = function () {
            return this.low;
          }),
          (N.getLowBitsUnsigned = function () {
            return this.low >>> 0;
          }),
          (N.getNumBitsAbs = function () {
            if (this.isNegative()) return this.eq(S) ? 64 : this.neg().getNumBitsAbs();
            for (var t = 0 != this.high ? this.high : this.low, e = 31; e > 0 && !(t & (1 << e)); e--);
            return 0 != this.high ? e + 33 : e + 1;
          }),
          (N.isZero = function () {
            return 0 === this.high && 0 === this.low;
          }),
          (N.eqz = N.isZero),
          (N.isNegative = function () {
            return !this.unsigned && this.high < 0;
          }),
          (N.isPositive = function () {
            return this.unsigned || this.high >= 0;
          }),
          (N.isOdd = function () {
            return !(1 & ~this.low);
          }),
          (N.isEven = function () {
            return !(1 & this.low);
          }),
          (N.equals = function (t) {
            return r(t) || (t = p(t)), (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && this.high === t.high && this.low === t.low;
          }),
          (N.eq = N.equals),
          (N.notEquals = function (t) {
            return !this.eq(t);
          }),
          (N.neq = N.notEquals),
          (N.ne = N.notEquals),
          (N.lessThan = function (t) {
            return this.comp(t) < 0;
          }),
          (N.lt = N.lessThan),
          (N.lessThanOrEqual = function (t) {
            return this.comp(t) <= 0;
          }),
          (N.lte = N.lessThanOrEqual),
          (N.le = N.lessThanOrEqual),
          (N.greaterThan = function (t) {
            return this.comp(t) > 0;
          }),
          (N.gt = N.greaterThan),
          (N.greaterThanOrEqual = function (t) {
            return this.comp(t) >= 0;
          }),
          (N.gte = N.greaterThanOrEqual),
          (N.ge = N.greaterThanOrEqual),
          (N.compare = function (t) {
            if ((r(t) || (t = p(t)), this.eq(t))) return 0;
            var e = this.isNegative(),
              n = t.isNegative();
            return e && !n
              ? -1
              : !e && n
                ? 1
                : this.unsigned
                  ? t.high >>> 0 > this.high >>> 0 || (t.high === this.high && t.low >>> 0 > this.low >>> 0)
                    ? -1
                    : 1
                  : this.sub(t).isNegative()
                    ? -1
                    : 1;
          }),
          (N.comp = N.compare),
          (N.negate = function () {
            return !this.unsigned && this.eq(S) ? S : this.not().add(b);
          }),
          (N.neg = N.negate),
          (N.add = function (t) {
            r(t) || (t = p(t));
            var e = this.high >>> 16,
              n = 65535 & this.high,
              s = this.low >>> 16,
              a = 65535 & this.low,
              o = t.high >>> 16,
              i = 65535 & t.high,
              l = t.low >>> 16,
              c = 0,
              d = 0,
              h = 0,
              f = 0;
            return (
              (h += (f += a + (65535 & t.low)) >>> 16),
              (d += (h += s + l) >>> 16),
              (c += (d += n + i) >>> 16),
              (c += e + o),
              u(((h &= 65535) << 16) | (f &= 65535), ((c &= 65535) << 16) | (d &= 65535), this.unsigned)
            );
          }),
          (N.subtract = function (t) {
            return r(t) || (t = p(t)), this.add(t.neg());
          }),
          (N.sub = N.subtract),
          (N.multiply = function (t) {
            if (this.isZero()) return g;
            if ((r(t) || (t = p(t)), e)) return u(e.mul(this.low, this.high, t.low, t.high), e.get_high(), this.unsigned);
            if (t.isZero()) return g;
            if (this.eq(S)) return t.isOdd() ? S : g;
            if (t.eq(S)) return this.isOdd() ? S : g;
            if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
            if (t.isNegative()) return this.mul(t.neg()).neg();
            if (this.lt(m) && t.lt(m)) return i(this.toNumber() * t.toNumber(), this.unsigned);
            var n = this.high >>> 16,
              s = 65535 & this.high,
              a = this.low >>> 16,
              o = 65535 & this.low,
              l = t.high >>> 16,
              c = 65535 & t.high,
              d = t.low >>> 16,
              h = 65535 & t.low,
              f = 0,
              y = 0,
              b = 0,
              v = 0;
            return (
              (b += (v += o * h) >>> 16),
              (y += (b += a * h) >>> 16),
              (b &= 65535),
              (y += (b += o * d) >>> 16),
              (f += (y += s * h) >>> 16),
              (y &= 65535),
              (f += (y += a * d) >>> 16),
              (y &= 65535),
              (f += (y += o * c) >>> 16),
              (f += n * h + s * d + a * c + o * l),
              u(((b &= 65535) << 16) | (v &= 65535), ((f &= 65535) << 16) | (y &= 65535), this.unsigned)
            );
          }),
          (N.mul = N.multiply),
          (N.divide = function (t) {
            if ((r(t) || (t = p(t)), t.isZero())) throw Error('division by zero');
            var n, s, a;
            if (e)
              return this.unsigned || -2147483648 !== this.high || -1 !== t.low || -1 !== t.high
                ? u((this.unsigned ? e.div_u : e.div_s)(this.low, this.high, t.low, t.high), e.get_high(), this.unsigned)
                : this;
            if (this.isZero()) return this.unsigned ? y : g;
            if (this.unsigned) {
              if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return y;
              if (t.gt(this.shru(1))) return v;
              a = y;
            } else {
              if (this.eq(S))
                return t.eq(b) || t.eq(w) ? S : t.eq(S) ? b : (n = this.shr(1).div(t).shl(1)).eq(g) ? (t.isNegative() ? b : w) : ((s = this.sub(t.mul(n))), (a = n.add(s.div(t))));
              if (t.eq(S)) return this.unsigned ? y : g;
              if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
              if (t.isNegative()) return this.div(t.neg()).neg();
              a = g;
            }
            for (s = this; s.gte(t); ) {
              n = Math.max(1, Math.floor(s.toNumber() / t.toNumber()));
              for (var o = Math.ceil(Math.log(n) / Math.LN2), c = o <= 48 ? 1 : l(2, o - 48), d = i(n), h = d.mul(t); h.isNegative() || h.gt(s); )
                h = (d = i((n -= c), this.unsigned)).mul(t);
              d.isZero() && (d = b), (a = a.add(d)), (s = s.sub(h));
            }
            return a;
          }),
          (N.div = N.divide),
          (N.modulo = function (t) {
            return r(t) || (t = p(t)), e ? u((this.unsigned ? e.rem_u : e.rem_s)(this.low, this.high, t.low, t.high), e.get_high(), this.unsigned) : this.sub(this.div(t).mul(t));
          }),
          (N.mod = N.modulo),
          (N.rem = N.modulo),
          (N.not = function () {
            return u(~this.low, ~this.high, this.unsigned);
          }),
          (N.and = function (t) {
            return r(t) || (t = p(t)), u(this.low & t.low, this.high & t.high, this.unsigned);
          }),
          (N.or = function (t) {
            return r(t) || (t = p(t)), u(this.low | t.low, this.high | t.high, this.unsigned);
          }),
          (N.xor = function (t) {
            return r(t) || (t = p(t)), u(this.low ^ t.low, this.high ^ t.high, this.unsigned);
          }),
          (N.shiftLeft = function (t) {
            return (
              r(t) && (t = t.toInt()),
              0 == (t &= 63) ? this : t < 32 ? u(this.low << t, (this.high << t) | (this.low >>> (32 - t)), this.unsigned) : u(0, this.low << (t - 32), this.unsigned)
            );
          }),
          (N.shl = N.shiftLeft),
          (N.shiftRight = function (t) {
            return (
              r(t) && (t = t.toInt()),
              0 == (t &= 63)
                ? this
                : t < 32
                  ? u((this.low >>> t) | (this.high << (32 - t)), this.high >> t, this.unsigned)
                  : u(this.high >> (t - 32), this.high >= 0 ? 0 : -1, this.unsigned)
            );
          }),
          (N.shr = N.shiftRight),
          (N.shiftRightUnsigned = function (t) {
            if ((r(t) && (t = t.toInt()), 0 == (t &= 63))) return this;
            var e = this.high;
            return t < 32 ? u((this.low >>> t) | (e << (32 - t)), e >>> t, this.unsigned) : u(32 === t ? e : e >>> (t - 32), 0, this.unsigned);
          }),
          (N.shru = N.shiftRightUnsigned),
          (N.shr_u = N.shiftRightUnsigned),
          (N.toSigned = function () {
            return this.unsigned ? u(this.low, this.high, !1) : this;
          }),
          (N.toUnsigned = function () {
            return this.unsigned ? this : u(this.low, this.high, !0);
          }),
          (N.toBytes = function (t) {
            return t ? this.toBytesLE() : this.toBytesBE();
          }),
          (N.toBytesLE = function () {
            var t = this.high,
              e = this.low;
            return [255 & e, (e >>> 8) & 255, (e >>> 16) & 255, e >>> 24, 255 & t, (t >>> 8) & 255, (t >>> 16) & 255, t >>> 24];
          }),
          (N.toBytesBE = function () {
            var t = this.high,
              e = this.low;
            return [t >>> 24, (t >>> 16) & 255, (t >>> 8) & 255, 255 & t, e >>> 24, (e >>> 16) & 255, (e >>> 8) & 255, 255 & e];
          }),
          (n.fromBytes = function (t, e, r) {
            return r ? n.fromBytesLE(t, e) : n.fromBytesBE(t, e);
          }),
          (n.fromBytesLE = function (t, e) {
            return new n(t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24), t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24), e);
          }),
          (n.fromBytesBE = function (t, e) {
            return new n((t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7], (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3], e);
          });
      },
      62045: (t, e, n) => {
        'use strict';
        var r = n(96763);
        const s = n(67526),
          a = n(251),
          o = 'function' == typeof Symbol && 'function' == typeof Symbol.for ? Symbol.for('nodejs.util.inspect.custom') : null;
        (e.hp = l), (e.IS = 50);
        const i = 2147483647;
        function u(t) {
          if (t > i) throw new RangeError('The value "' + t + '" is invalid for option "size"');
          const e = new Uint8Array(t);
          return Object.setPrototypeOf(e, l.prototype), e;
        }
        function l(t, e, n) {
          if ('number' == typeof t) {
            if ('string' == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
            return d(t);
          }
          return c(t, e, n);
        }
        function c(t, e, n) {
          if ('string' == typeof t)
            return (function (t, e) {
              if ((('string' == typeof e && '' !== e) || (e = 'utf8'), !l.isEncoding(e))) throw new TypeError('Unknown encoding: ' + e);
              const n = 0 | g(t, e);
              let r = u(n);
              const s = r.write(t, e);
              return s !== n && (r = r.slice(0, s)), r;
            })(t, e);
          if (ArrayBuffer.isView(t))
            return (function (t) {
              if (H(t, Uint8Array)) {
                const e = new Uint8Array(t);
                return f(e.buffer, e.byteOffset, e.byteLength);
              }
              return h(t);
            })(t);
          if (null == t) throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof t);
          if (H(t, ArrayBuffer) || (t && H(t.buffer, ArrayBuffer))) return f(t, e, n);
          if ('undefined' != typeof SharedArrayBuffer && (H(t, SharedArrayBuffer) || (t && H(t.buffer, SharedArrayBuffer)))) return f(t, e, n);
          if ('number' == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
          const r = t.valueOf && t.valueOf();
          if (null != r && r !== t) return l.from(r, e, n);
          const s = (function (t) {
            if (l.isBuffer(t)) {
              const e = 0 | m(t.length),
                n = u(e);
              return 0 === n.length || t.copy(n, 0, 0, e), n;
            }
            return void 0 !== t.length ? ('number' != typeof t.length || X(t.length) ? u(0) : h(t)) : 'Buffer' === t.type && Array.isArray(t.data) ? h(t.data) : void 0;
          })(t);
          if (s) return s;
          if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof t[Symbol.toPrimitive]) return l.from(t[Symbol.toPrimitive]('string'), e, n);
          throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof t);
        }
        function p(t) {
          if ('number' != typeof t) throw new TypeError('"size" argument must be of type number');
          if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
        }
        function d(t) {
          return p(t), u(t < 0 ? 0 : 0 | m(t));
        }
        function h(t) {
          const e = t.length < 0 ? 0 : 0 | m(t.length),
            n = u(e);
          for (let r = 0; r < e; r += 1) n[r] = 255 & t[r];
          return n;
        }
        function f(t, e, n) {
          if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
          if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
          let r;
          return (r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, e) : new Uint8Array(t, e, n)), Object.setPrototypeOf(r, l.prototype), r;
        }
        function m(t) {
          if (t >= i) throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + i.toString(16) + ' bytes');
          return 0 | t;
        }
        function g(t, e) {
          if (l.isBuffer(t)) return t.length;
          if (ArrayBuffer.isView(t) || H(t, ArrayBuffer)) return t.byteLength;
          if ('string' != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
          const n = t.length,
            r = arguments.length > 2 && !0 === arguments[2];
          if (!r && 0 === n) return 0;
          let s = !1;
          for (;;)
            switch (e) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return n;
              case 'utf8':
              case 'utf-8':
                return G(t).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return 2 * n;
              case 'hex':
                return n >>> 1;
              case 'base64':
                return q(t).length;
              default:
                if (s) return r ? -1 : G(t).length;
                (e = ('' + e).toLowerCase()), (s = !0);
            }
        }
        function y(t, e, n) {
          let r = !1;
          if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return '';
          if (((void 0 === n || n > this.length) && (n = this.length), n <= 0)) return '';
          if ((n >>>= 0) <= (e >>>= 0)) return '';
          for (t || (t = 'utf8'); ; )
            switch (t) {
              case 'hex':
                return M(this, e, n);
              case 'utf8':
              case 'utf-8':
                return k(this, e, n);
              case 'ascii':
                return I(this, e, n);
              case 'latin1':
              case 'binary':
                return O(this, e, n);
              case 'base64':
                return A(this, e, n);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return $(this, e, n);
              default:
                if (r) throw new TypeError('Unknown encoding: ' + t);
                (t = (t + '').toLowerCase()), (r = !0);
            }
        }
        function b(t, e, n) {
          const r = t[e];
          (t[e] = t[n]), (t[n] = r);
        }
        function v(t, e, n, r, s) {
          if (0 === t.length) return -1;
          if (
            ('string' == typeof n ? ((r = n), (n = 0)) : n > 2147483647 ? (n = 2147483647) : n < -2147483648 && (n = -2147483648),
            X((n = +n)) && (n = s ? 0 : t.length - 1),
            n < 0 && (n = t.length + n),
            n >= t.length)
          ) {
            if (s) return -1;
            n = t.length - 1;
          } else if (n < 0) {
            if (!s) return -1;
            n = 0;
          }
          if (('string' == typeof e && (e = l.from(e, r)), l.isBuffer(e))) return 0 === e.length ? -1 : w(t, e, n, r, s);
          if ('number' == typeof e)
            return (
              (e &= 255),
              'function' == typeof Uint8Array.prototype.indexOf
                ? s
                  ? Uint8Array.prototype.indexOf.call(t, e, n)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, n)
                : w(t, [e], n, r, s)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function w(t, e, n, r, s) {
          let a,
            o = 1,
            i = t.length,
            u = e.length;
          if (void 0 !== r && ('ucs2' === (r = String(r).toLowerCase()) || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)) {
            if (t.length < 2 || e.length < 2) return -1;
            (o = 2), (i /= 2), (u /= 2), (n /= 2);
          }
          function l(t, e) {
            return 1 === o ? t[e] : t.readUInt16BE(e * o);
          }
          if (s) {
            let r = -1;
            for (a = n; a < i; a++)
              if (l(t, a) === l(e, -1 === r ? 0 : a - r)) {
                if ((-1 === r && (r = a), a - r + 1 === u)) return r * o;
              } else -1 !== r && (a -= a - r), (r = -1);
          } else
            for (n + u > i && (n = i - u), a = n; a >= 0; a--) {
              let n = !0;
              for (let r = 0; r < u; r++)
                if (l(t, a + r) !== l(e, r)) {
                  n = !1;
                  break;
                }
              if (n) return a;
            }
          return -1;
        }
        function T(t, e, n, r) {
          n = Number(n) || 0;
          const s = t.length - n;
          r ? (r = Number(r)) > s && (r = s) : (r = s);
          const a = e.length;
          let o;
          for (r > a / 2 && (r = a / 2), o = 0; o < r; ++o) {
            const r = parseInt(e.substr(2 * o, 2), 16);
            if (X(r)) return o;
            t[n + o] = r;
          }
          return o;
        }
        function x(t, e, n, r) {
          return K(G(e, t.length - n), t, n, r);
        }
        function S(t, e, n, r) {
          return K(
            (function (t) {
              const e = [];
              for (let n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
              return e;
            })(e),
            t,
            n,
            r,
          );
        }
        function N(t, e, n, r) {
          return K(q(e), t, n, r);
        }
        function E(t, e, n, r) {
          return K(
            (function (t, e) {
              let n, r, s;
              const a = [];
              for (let o = 0; o < t.length && !((e -= 2) < 0); ++o) (n = t.charCodeAt(o)), (r = n >> 8), (s = n % 256), a.push(s), a.push(r);
              return a;
            })(e, t.length - n),
            t,
            n,
            r,
          );
        }
        function A(t, e, n) {
          return 0 === e && n === t.length ? s.fromByteArray(t) : s.fromByteArray(t.slice(e, n));
        }
        function k(t, e, n) {
          n = Math.min(t.length, n);
          const r = [];
          let s = e;
          for (; s < n; ) {
            const e = t[s];
            let a = null,
              o = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
            if (s + o <= n) {
              let n, r, i, u;
              switch (o) {
                case 1:
                  e < 128 && (a = e);
                  break;
                case 2:
                  (n = t[s + 1]), 128 == (192 & n) && ((u = ((31 & e) << 6) | (63 & n)), u > 127 && (a = u));
                  break;
                case 3:
                  (n = t[s + 1]),
                    (r = t[s + 2]),
                    128 == (192 & n) && 128 == (192 & r) && ((u = ((15 & e) << 12) | ((63 & n) << 6) | (63 & r)), u > 2047 && (u < 55296 || u > 57343) && (a = u));
                  break;
                case 4:
                  (n = t[s + 1]),
                    (r = t[s + 2]),
                    (i = t[s + 3]),
                    128 == (192 & n) &&
                      128 == (192 & r) &&
                      128 == (192 & i) &&
                      ((u = ((15 & e) << 18) | ((63 & n) << 12) | ((63 & r) << 6) | (63 & i)), u > 65535 && u < 1114112 && (a = u));
              }
            }
            null === a ? ((a = 65533), (o = 1)) : a > 65535 && ((a -= 65536), r.push(((a >>> 10) & 1023) | 55296), (a = 56320 | (1023 & a))), r.push(a), (s += o);
          }
          return (function (t) {
            const e = t.length;
            if (e <= _) return String.fromCharCode.apply(String, t);
            let n = '',
              r = 0;
            for (; r < e; ) n += String.fromCharCode.apply(String, t.slice(r, (r += _)));
            return n;
          })(r);
        }
        (l.TYPED_ARRAY_SUPPORT = (function () {
          try {
            const t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                },
              };
            return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo();
          } catch (t) {
            return !1;
          }
        })()),
          l.TYPED_ARRAY_SUPPORT ||
            void 0 === r ||
            'function' != typeof r.error ||
            r.error('This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'),
          Object.defineProperty(l.prototype, 'parent', {
            enumerable: !0,
            get: function () {
              if (l.isBuffer(this)) return this.buffer;
            },
          }),
          Object.defineProperty(l.prototype, 'offset', {
            enumerable: !0,
            get: function () {
              if (l.isBuffer(this)) return this.byteOffset;
            },
          }),
          (l.poolSize = 8192),
          (l.from = function (t, e, n) {
            return c(t, e, n);
          }),
          Object.setPrototypeOf(l.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(l, Uint8Array),
          (l.alloc = function (t, e, n) {
            return (function (t, e, n) {
              return p(t), t <= 0 ? u(t) : void 0 !== e ? ('string' == typeof n ? u(t).fill(e, n) : u(t).fill(e)) : u(t);
            })(t, e, n);
          }),
          (l.allocUnsafe = function (t) {
            return d(t);
          }),
          (l.allocUnsafeSlow = function (t) {
            return d(t);
          }),
          (l.isBuffer = function (t) {
            return null != t && !0 === t._isBuffer && t !== l.prototype;
          }),
          (l.compare = function (t, e) {
            if ((H(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), H(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), !l.isBuffer(t) || !l.isBuffer(e)))
              throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (t === e) return 0;
            let n = t.length,
              r = e.length;
            for (let s = 0, a = Math.min(n, r); s < a; ++s)
              if (t[s] !== e[s]) {
                (n = t[s]), (r = e[s]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (l.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0;
              default:
                return !1;
            }
          }),
          (l.concat = function (t, e) {
            if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return l.alloc(0);
            let n;
            if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            const r = l.allocUnsafe(e);
            let s = 0;
            for (n = 0; n < t.length; ++n) {
              let e = t[n];
              if (H(e, Uint8Array)) s + e.length > r.length ? (l.isBuffer(e) || (e = l.from(e)), e.copy(r, s)) : Uint8Array.prototype.set.call(r, e, s);
              else {
                if (!l.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                e.copy(r, s);
              }
              s += e.length;
            }
            return r;
          }),
          (l.byteLength = g),
          (l.prototype._isBuffer = !0),
          (l.prototype.swap16 = function () {
            const t = this.length;
            if (t % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
            for (let e = 0; e < t; e += 2) b(this, e, e + 1);
            return this;
          }),
          (l.prototype.swap32 = function () {
            const t = this.length;
            if (t % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (let e = 0; e < t; e += 4) b(this, e, e + 3), b(this, e + 1, e + 2);
            return this;
          }),
          (l.prototype.swap64 = function () {
            const t = this.length;
            if (t % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (let e = 0; e < t; e += 8) b(this, e, e + 7), b(this, e + 1, e + 6), b(this, e + 2, e + 5), b(this, e + 3, e + 4);
            return this;
          }),
          (l.prototype.toString = function () {
            const t = this.length;
            return 0 === t ? '' : 0 === arguments.length ? k(this, 0, t) : y.apply(this, arguments);
          }),
          (l.prototype.toLocaleString = l.prototype.toString),
          (l.prototype.equals = function (t) {
            if (!l.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
            return this === t || 0 === l.compare(this, t);
          }),
          (l.prototype.inspect = function () {
            let t = '';
            const n = e.IS;
            return (
              (t = this.toString('hex', 0, n)
                .replace(/(.{2})/g, '$1 ')
                .trim()),
              this.length > n && (t += ' ... '),
              '<Buffer ' + t + '>'
            );
          }),
          o && (l.prototype[o] = l.prototype.inspect),
          (l.prototype.compare = function (t, e, n, r, s) {
            if ((H(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), !l.isBuffer(t)))
              throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
            if (
              (void 0 === e && (e = 0),
              void 0 === n && (n = t ? t.length : 0),
              void 0 === r && (r = 0),
              void 0 === s && (s = this.length),
              e < 0 || n > t.length || r < 0 || s > this.length)
            )
              throw new RangeError('out of range index');
            if (r >= s && e >= n) return 0;
            if (r >= s) return -1;
            if (e >= n) return 1;
            if (this === t) return 0;
            let a = (s >>>= 0) - (r >>>= 0),
              o = (n >>>= 0) - (e >>>= 0);
            const i = Math.min(a, o),
              u = this.slice(r, s),
              c = t.slice(e, n);
            for (let t = 0; t < i; ++t)
              if (u[t] !== c[t]) {
                (a = u[t]), (o = c[t]);
                break;
              }
            return a < o ? -1 : o < a ? 1 : 0;
          }),
          (l.prototype.includes = function (t, e, n) {
            return -1 !== this.indexOf(t, e, n);
          }),
          (l.prototype.indexOf = function (t, e, n) {
            return v(this, t, e, n, !0);
          }),
          (l.prototype.lastIndexOf = function (t, e, n) {
            return v(this, t, e, n, !1);
          }),
          (l.prototype.write = function (t, e, n, r) {
            if (void 0 === e) (r = 'utf8'), (n = this.length), (e = 0);
            else if (void 0 === n && 'string' == typeof e) (r = e), (n = this.length), (e = 0);
            else {
              if (!isFinite(e)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
              (e >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === r && (r = 'utf8')) : ((r = n), (n = void 0));
            }
            const s = this.length - e;
            if (((void 0 === n || n > s) && (n = s), (t.length > 0 && (n < 0 || e < 0)) || e > this.length)) throw new RangeError('Attempt to write outside buffer bounds');
            r || (r = 'utf8');
            let a = !1;
            for (;;)
              switch (r) {
                case 'hex':
                  return T(this, t, e, n);
                case 'utf8':
                case 'utf-8':
                  return x(this, t, e, n);
                case 'ascii':
                case 'latin1':
                case 'binary':
                  return S(this, t, e, n);
                case 'base64':
                  return N(this, t, e, n);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return E(this, t, e, n);
                default:
                  if (a) throw new TypeError('Unknown encoding: ' + r);
                  (r = ('' + r).toLowerCase()), (a = !0);
              }
          }),
          (l.prototype.toJSON = function () {
            return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
          });
        const _ = 4096;
        function I(t, e, n) {
          let r = '';
          n = Math.min(t.length, n);
          for (let s = e; s < n; ++s) r += String.fromCharCode(127 & t[s]);
          return r;
        }
        function O(t, e, n) {
          let r = '';
          n = Math.min(t.length, n);
          for (let s = e; s < n; ++s) r += String.fromCharCode(t[s]);
          return r;
        }
        function M(t, e, n) {
          const r = t.length;
          (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
          let s = '';
          for (let r = e; r < n; ++r) s += Q[t[r]];
          return s;
        }
        function $(t, e, n) {
          const r = t.slice(e, n);
          let s = '';
          for (let t = 0; t < r.length - 1; t += 2) s += String.fromCharCode(r[t] + 256 * r[t + 1]);
          return s;
        }
        function D(t, e, n) {
          if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
          if (t + e > n) throw new RangeError('Trying to access beyond buffer length');
        }
        function R(t, e, n, r, s, a) {
          if (!l.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > s || e < a) throw new RangeError('"value" argument is out of bounds');
          if (n + r > t.length) throw new RangeError('Index out of range');
        }
        function F(t, e, n, r, s) {
          Y(e, r, s, t, n, 7);
          let a = Number(e & BigInt(4294967295));
          (t[n++] = a), (a >>= 8), (t[n++] = a), (a >>= 8), (t[n++] = a), (a >>= 8), (t[n++] = a);
          let o = Number((e >> BigInt(32)) & BigInt(4294967295));
          return (t[n++] = o), (o >>= 8), (t[n++] = o), (o >>= 8), (t[n++] = o), (o >>= 8), (t[n++] = o), n;
        }
        function B(t, e, n, r, s) {
          Y(e, r, s, t, n, 7);
          let a = Number(e & BigInt(4294967295));
          (t[n + 7] = a), (a >>= 8), (t[n + 6] = a), (a >>= 8), (t[n + 5] = a), (a >>= 8), (t[n + 4] = a);
          let o = Number((e >> BigInt(32)) & BigInt(4294967295));
          return (t[n + 3] = o), (o >>= 8), (t[n + 2] = o), (o >>= 8), (t[n + 1] = o), (o >>= 8), (t[n] = o), n + 8;
        }
        function P(t, e, n, r, s, a) {
          if (n + r > t.length) throw new RangeError('Index out of range');
          if (n < 0) throw new RangeError('Index out of range');
        }
        function Z(t, e, n, r, s) {
          return (e = +e), (n >>>= 0), s || P(t, 0, n, 4), a.write(t, e, n, r, 23, 4), n + 4;
        }
        function C(t, e, n, r, s) {
          return (e = +e), (n >>>= 0), s || P(t, 0, n, 8), a.write(t, e, n, r, 52, 8), n + 8;
        }
        (l.prototype.slice = function (t, e) {
          const n = this.length;
          (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);
          const r = this.subarray(t, e);
          return Object.setPrototypeOf(r, l.prototype), r;
        }),
          (l.prototype.readUintLE = l.prototype.readUIntLE =
            function (t, e, n) {
              (t >>>= 0), (e >>>= 0), n || D(t, e, this.length);
              let r = this[t],
                s = 1,
                a = 0;
              for (; ++a < e && (s *= 256); ) r += this[t + a] * s;
              return r;
            }),
          (l.prototype.readUintBE = l.prototype.readUIntBE =
            function (t, e, n) {
              (t >>>= 0), (e >>>= 0), n || D(t, e, this.length);
              let r = this[t + --e],
                s = 1;
              for (; e > 0 && (s *= 256); ) r += this[t + --e] * s;
              return r;
            }),
          (l.prototype.readUint8 = l.prototype.readUInt8 =
            function (t, e) {
              return (t >>>= 0), e || D(t, 1, this.length), this[t];
            }),
          (l.prototype.readUint16LE = l.prototype.readUInt16LE =
            function (t, e) {
              return (t >>>= 0), e || D(t, 2, this.length), this[t] | (this[t + 1] << 8);
            }),
          (l.prototype.readUint16BE = l.prototype.readUInt16BE =
            function (t, e) {
              return (t >>>= 0), e || D(t, 2, this.length), (this[t] << 8) | this[t + 1];
            }),
          (l.prototype.readUint32LE = l.prototype.readUInt32LE =
            function (t, e) {
              return (t >>>= 0), e || D(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
            }),
          (l.prototype.readUint32BE = l.prototype.readUInt32BE =
            function (t, e) {
              return (t >>>= 0), e || D(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
            }),
          (l.prototype.readBigUInt64LE = J(function (t) {
            U((t >>>= 0), 'offset');
            const e = this[t],
              n = this[t + 7];
            (void 0 !== e && void 0 !== n) || V(t, this.length - 8);
            const r = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
              s = this[++t] + 256 * this[++t] + 65536 * this[++t] + n * 2 ** 24;
            return BigInt(r) + (BigInt(s) << BigInt(32));
          })),
          (l.prototype.readBigUInt64BE = J(function (t) {
            U((t >>>= 0), 'offset');
            const e = this[t],
              n = this[t + 7];
            (void 0 !== e && void 0 !== n) || V(t, this.length - 8);
            const r = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
              s = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n;
            return (BigInt(r) << BigInt(32)) + BigInt(s);
          })),
          (l.prototype.readIntLE = function (t, e, n) {
            (t >>>= 0), (e >>>= 0), n || D(t, e, this.length);
            let r = this[t],
              s = 1,
              a = 0;
            for (; ++a < e && (s *= 256); ) r += this[t + a] * s;
            return (s *= 128), r >= s && (r -= Math.pow(2, 8 * e)), r;
          }),
          (l.prototype.readIntBE = function (t, e, n) {
            (t >>>= 0), (e >>>= 0), n || D(t, e, this.length);
            let r = e,
              s = 1,
              a = this[t + --r];
            for (; r > 0 && (s *= 256); ) a += this[t + --r] * s;
            return (s *= 128), a >= s && (a -= Math.pow(2, 8 * e)), a;
          }),
          (l.prototype.readInt8 = function (t, e) {
            return (t >>>= 0), e || D(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
          }),
          (l.prototype.readInt16LE = function (t, e) {
            (t >>>= 0), e || D(t, 2, this.length);
            const n = this[t] | (this[t + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (l.prototype.readInt16BE = function (t, e) {
            (t >>>= 0), e || D(t, 2, this.length);
            const n = this[t + 1] | (this[t] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (l.prototype.readInt32LE = function (t, e) {
            return (t >>>= 0), e || D(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
          }),
          (l.prototype.readInt32BE = function (t, e) {
            return (t >>>= 0), e || D(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
          }),
          (l.prototype.readBigInt64LE = J(function (t) {
            U((t >>>= 0), 'offset');
            const e = this[t],
              n = this[t + 7];
            (void 0 !== e && void 0 !== n) || V(t, this.length - 8);
            const r = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (n << 24);
            return (BigInt(r) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24);
          })),
          (l.prototype.readBigInt64BE = J(function (t) {
            U((t >>>= 0), 'offset');
            const e = this[t],
              n = this[t + 7];
            (void 0 !== e && void 0 !== n) || V(t, this.length - 8);
            const r = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
            return (BigInt(r) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n);
          })),
          (l.prototype.readFloatLE = function (t, e) {
            return (t >>>= 0), e || D(t, 4, this.length), a.read(this, t, !0, 23, 4);
          }),
          (l.prototype.readFloatBE = function (t, e) {
            return (t >>>= 0), e || D(t, 4, this.length), a.read(this, t, !1, 23, 4);
          }),
          (l.prototype.readDoubleLE = function (t, e) {
            return (t >>>= 0), e || D(t, 8, this.length), a.read(this, t, !0, 52, 8);
          }),
          (l.prototype.readDoubleBE = function (t, e) {
            return (t >>>= 0), e || D(t, 8, this.length), a.read(this, t, !1, 52, 8);
          }),
          (l.prototype.writeUintLE = l.prototype.writeUIntLE =
            function (t, e, n, r) {
              (t = +t), (e >>>= 0), (n >>>= 0), r || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
              let s = 1,
                a = 0;
              for (this[e] = 255 & t; ++a < n && (s *= 256); ) this[e + a] = (t / s) & 255;
              return e + n;
            }),
          (l.prototype.writeUintBE = l.prototype.writeUIntBE =
            function (t, e, n, r) {
              (t = +t), (e >>>= 0), (n >>>= 0), r || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
              let s = n - 1,
                a = 1;
              for (this[e + s] = 255 & t; --s >= 0 && (a *= 256); ) this[e + s] = (t / a) & 255;
              return e + n;
            }),
          (l.prototype.writeUint8 = l.prototype.writeUInt8 =
            function (t, e, n) {
              return (t = +t), (e >>>= 0), n || R(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1;
            }),
          (l.prototype.writeUint16LE = l.prototype.writeUInt16LE =
            function (t, e, n) {
              return (t = +t), (e >>>= 0), n || R(this, t, e, 2, 65535, 0), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
            }),
          (l.prototype.writeUint16BE = l.prototype.writeUInt16BE =
            function (t, e, n) {
              return (t = +t), (e >>>= 0), n || R(this, t, e, 2, 65535, 0), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
            }),
          (l.prototype.writeUint32LE = l.prototype.writeUInt32LE =
            function (t, e, n) {
              return (
                (t = +t), (e >>>= 0), n || R(this, t, e, 4, 4294967295, 0), (this[e + 3] = t >>> 24), (this[e + 2] = t >>> 16), (this[e + 1] = t >>> 8), (this[e] = 255 & t), e + 4
              );
            }),
          (l.prototype.writeUint32BE = l.prototype.writeUInt32BE =
            function (t, e, n) {
              return (
                (t = +t), (e >>>= 0), n || R(this, t, e, 4, 4294967295, 0), (this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t), e + 4
              );
            }),
          (l.prototype.writeBigUInt64LE = J(function (t, e = 0) {
            return F(this, t, e, BigInt(0), BigInt('0xffffffffffffffff'));
          })),
          (l.prototype.writeBigUInt64BE = J(function (t, e = 0) {
            return B(this, t, e, BigInt(0), BigInt('0xffffffffffffffff'));
          })),
          (l.prototype.writeIntLE = function (t, e, n, r) {
            if (((t = +t), (e >>>= 0), !r)) {
              const r = Math.pow(2, 8 * n - 1);
              R(this, t, e, n, r - 1, -r);
            }
            let s = 0,
              a = 1,
              o = 0;
            for (this[e] = 255 & t; ++s < n && (a *= 256); ) t < 0 && 0 === o && 0 !== this[e + s - 1] && (o = 1), (this[e + s] = (((t / a) | 0) - o) & 255);
            return e + n;
          }),
          (l.prototype.writeIntBE = function (t, e, n, r) {
            if (((t = +t), (e >>>= 0), !r)) {
              const r = Math.pow(2, 8 * n - 1);
              R(this, t, e, n, r - 1, -r);
            }
            let s = n - 1,
              a = 1,
              o = 0;
            for (this[e + s] = 255 & t; --s >= 0 && (a *= 256); ) t < 0 && 0 === o && 0 !== this[e + s + 1] && (o = 1), (this[e + s] = (((t / a) | 0) - o) & 255);
            return e + n;
          }),
          (l.prototype.writeInt8 = function (t, e, n) {
            return (t = +t), (e >>>= 0), n || R(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), (this[e] = 255 & t), e + 1;
          }),
          (l.prototype.writeInt16LE = function (t, e, n) {
            return (t = +t), (e >>>= 0), n || R(this, t, e, 2, 32767, -32768), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
          }),
          (l.prototype.writeInt16BE = function (t, e, n) {
            return (t = +t), (e >>>= 0), n || R(this, t, e, 2, 32767, -32768), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
          }),
          (l.prototype.writeInt32LE = function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || R(this, t, e, 4, 2147483647, -2147483648),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              (this[e + 2] = t >>> 16),
              (this[e + 3] = t >>> 24),
              e + 4
            );
          }),
          (l.prototype.writeInt32BE = function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || R(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
          (l.prototype.writeBigInt64LE = J(function (t, e = 0) {
            return F(this, t, e, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
          })),
          (l.prototype.writeBigInt64BE = J(function (t, e = 0) {
            return B(this, t, e, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
          })),
          (l.prototype.writeFloatLE = function (t, e, n) {
            return Z(this, t, e, !0, n);
          }),
          (l.prototype.writeFloatBE = function (t, e, n) {
            return Z(this, t, e, !1, n);
          }),
          (l.prototype.writeDoubleLE = function (t, e, n) {
            return C(this, t, e, !0, n);
          }),
          (l.prototype.writeDoubleBE = function (t, e, n) {
            return C(this, t, e, !1, n);
          }),
          (l.prototype.copy = function (t, e, n, r) {
            if (!l.isBuffer(t)) throw new TypeError('argument should be a Buffer');
            if ((n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n)) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError('targetStart out of bounds');
            if (n < 0 || n >= this.length) throw new RangeError('Index out of range');
            if (r < 0) throw new RangeError('sourceEnd out of bounds');
            r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
            const s = r - n;
            return this === t && 'function' == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, n, r) : Uint8Array.prototype.set.call(t, this.subarray(n, r), e), s;
          }),
          (l.prototype.fill = function (t, e, n, r) {
            if ('string' == typeof t) {
              if (('string' == typeof e ? ((r = e), (e = 0), (n = this.length)) : 'string' == typeof n && ((r = n), (n = this.length)), void 0 !== r && 'string' != typeof r))
                throw new TypeError('encoding must be a string');
              if ('string' == typeof r && !l.isEncoding(r)) throw new TypeError('Unknown encoding: ' + r);
              if (1 === t.length) {
                const e = t.charCodeAt(0);
                (('utf8' === r && e < 128) || 'latin1' === r) && (t = e);
              }
            } else 'number' == typeof t ? (t &= 255) : 'boolean' == typeof t && (t = Number(t));
            if (e < 0 || this.length < e || this.length < n) throw new RangeError('Out of range index');
            if (n <= e) return this;
            let s;
            if (((e >>>= 0), (n = void 0 === n ? this.length : n >>> 0), t || (t = 0), 'number' == typeof t)) for (s = e; s < n; ++s) this[s] = t;
            else {
              const a = l.isBuffer(t) ? t : l.from(t, r),
                o = a.length;
              if (0 === o) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
              for (s = 0; s < n - e; ++s) this[s + e] = a[s % o];
            }
            return this;
          });
        const L = {};
        function z(t, e, n) {
          L[t] = class extends n {
            constructor() {
              super(),
                Object.defineProperty(this, 'message', { value: e.apply(this, arguments), writable: !0, configurable: !0 }),
                (this.name = `${this.name} [${t}]`),
                this.stack,
                delete this.name;
            }
            get code() {
              return t;
            }
            set code(t) {
              Object.defineProperty(this, 'code', { configurable: !0, enumerable: !0, value: t, writable: !0 });
            }
            toString() {
              return `${this.name} [${t}]: ${this.message}`;
            }
          };
        }
        function j(t) {
          let e = '',
            n = t.length;
          const r = '-' === t[0] ? 1 : 0;
          for (; n >= r + 4; n -= 3) e = `_${t.slice(n - 3, n)}${e}`;
          return `${t.slice(0, n)}${e}`;
        }
        function Y(t, e, n, r, s, a) {
          if (t > n || t < e) {
            const r = 'bigint' == typeof e ? 'n' : '';
            let s;
            throw (
              ((s =
                a > 3
                  ? 0 === e || e === BigInt(0)
                    ? `>= 0${r} and < 2${r} ** ${8 * (a + 1)}${r}`
                    : `>= -(2${r} ** ${8 * (a + 1) - 1}${r}) and < 2 ** ${8 * (a + 1) - 1}${r}`
                  : `>= ${e}${r} and <= ${n}${r}`),
              new L.ERR_OUT_OF_RANGE('value', s, t))
            );
          }
          !(function (t, e, n) {
            U(e, 'offset'), (void 0 !== t[e] && void 0 !== t[e + n]) || V(e, t.length - (n + 1));
          })(r, s, a);
        }
        function U(t, e) {
          if ('number' != typeof t) throw new L.ERR_INVALID_ARG_TYPE(e, 'number', t);
        }
        function V(t, e, n) {
          if (Math.floor(t) !== t) throw (U(t, n), new L.ERR_OUT_OF_RANGE(n || 'offset', 'an integer', t));
          if (e < 0) throw new L.ERR_BUFFER_OUT_OF_BOUNDS();
          throw new L.ERR_OUT_OF_RANGE(n || 'offset', `>= ${n ? 1 : 0} and <= ${e}`, t);
        }
        z(
          'ERR_BUFFER_OUT_OF_BOUNDS',
          function (t) {
            return t ? `${t} is outside of buffer bounds` : 'Attempt to access memory outside buffer bounds';
          },
          RangeError,
        ),
          z(
            'ERR_INVALID_ARG_TYPE',
            function (t, e) {
              return `The "${t}" argument must be of type number. Received type ${typeof e}`;
            },
            TypeError,
          ),
          z(
            'ERR_OUT_OF_RANGE',
            function (t, e, n) {
              let r = `The value of "${t}" is out of range.`,
                s = n;
              return (
                Number.isInteger(n) && Math.abs(n) > 2 ** 32
                  ? (s = j(String(n)))
                  : 'bigint' == typeof n && ((s = String(n)), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (s = j(s)), (s += 'n')),
                (r += ` It must be ${e}. Received ${s}`),
                r
              );
            },
            RangeError,
          );
        const W = /[^+/0-9A-Za-z-_]/g;
        function G(t, e) {
          let n;
          e = e || 1 / 0;
          const r = t.length;
          let s = null;
          const a = [];
          for (let o = 0; o < r; ++o) {
            if (((n = t.charCodeAt(o)), n > 55295 && n < 57344)) {
              if (!s) {
                if (n > 56319) {
                  (e -= 3) > -1 && a.push(239, 191, 189);
                  continue;
                }
                if (o + 1 === r) {
                  (e -= 3) > -1 && a.push(239, 191, 189);
                  continue;
                }
                s = n;
                continue;
              }
              if (n < 56320) {
                (e -= 3) > -1 && a.push(239, 191, 189), (s = n);
                continue;
              }
              n = 65536 + (((s - 55296) << 10) | (n - 56320));
            } else s && (e -= 3) > -1 && a.push(239, 191, 189);
            if (((s = null), n < 128)) {
              if ((e -= 1) < 0) break;
              a.push(n);
            } else if (n < 2048) {
              if ((e -= 2) < 0) break;
              a.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((e -= 3) < 0) break;
              a.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error('Invalid code point');
              if ((e -= 4) < 0) break;
              a.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
            }
          }
          return a;
        }
        function q(t) {
          return s.toByteArray(
            (function (t) {
              if ((t = (t = t.split('=')[0]).trim().replace(W, '')).length < 2) return '';
              for (; t.length % 4 != 0; ) t += '=';
              return t;
            })(t),
          );
        }
        function K(t, e, n, r) {
          let s;
          for (s = 0; s < r && !(s + n >= e.length || s >= t.length); ++s) e[s + n] = t[s];
          return s;
        }
        function H(t, e) {
          return t instanceof e || (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name);
        }
        function X(t) {
          return t != t;
        }
        const Q = (function () {
          const t = '0123456789abcdef',
            e = new Array(256);
          for (let n = 0; n < 16; ++n) {
            const r = 16 * n;
            for (let s = 0; s < 16; ++s) e[r + s] = t[n] + t[s];
          }
          return e;
        })();
        function J(t) {
          return 'undefined' == typeof BigInt ? tt : t;
        }
        function tt() {
          throw new Error('BigInt not supported');
        }
      },
      28875: (t, e, n) => {
        'use strict';
        var r;
        if (!Object.keys) {
          var s = Object.prototype.hasOwnProperty,
            a = Object.prototype.toString,
            o = n(1093),
            i = Object.prototype.propertyIsEnumerable,
            u = !i.call({ toString: null }, 'toString'),
            l = i.call(function () {}, 'prototype'),
            c = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
            p = function (t) {
              var e = t.constructor;
              return e && e.prototype === t;
            },
            d = {
              $applicationCache: !0,
              $console: !0,
              $external: !0,
              $frame: !0,
              $frameElement: !0,
              $frames: !0,
              $innerHeight: !0,
              $innerWidth: !0,
              $onmozfullscreenchange: !0,
              $onmozfullscreenerror: !0,
              $outerHeight: !0,
              $outerWidth: !0,
              $pageXOffset: !0,
              $pageYOffset: !0,
              $parent: !0,
              $scrollLeft: !0,
              $scrollTop: !0,
              $scrollX: !0,
              $scrollY: !0,
              $self: !0,
              $webkitIndexedDB: !0,
              $webkitStorageInfo: !0,
              $window: !0,
            },
            h = (function () {
              if ('undefined' == typeof window) return !1;
              for (var t in window)
                try {
                  if (!d['$' + t] && s.call(window, t) && null !== window[t] && 'object' == typeof window[t])
                    try {
                      p(window[t]);
                    } catch (t) {
                      return !0;
                    }
                } catch (t) {
                  return !0;
                }
              return !1;
            })();
          r = function (t) {
            var e = null !== t && 'object' == typeof t,
              n = '[object Function]' === a.call(t),
              r = o(t),
              i = e && '[object String]' === a.call(t),
              d = [];
            if (!e && !n && !r) throw new TypeError('Object.keys called on a non-object');
            var f = l && n;
            if (i && t.length > 0 && !s.call(t, 0)) for (var m = 0; m < t.length; ++m) d.push(String(m));
            if (r && t.length > 0) for (var g = 0; g < t.length; ++g) d.push(String(g));
            else for (var y in t) (f && 'prototype' === y) || !s.call(t, y) || d.push(String(y));
            if (u)
              for (
                var b = (function (t) {
                    if ('undefined' == typeof window || !h) return p(t);
                    try {
                      return p(t);
                    } catch (t) {
                      return !1;
                    }
                  })(t),
                  v = 0;
                v < c.length;
                ++v
              )
                (b && 'constructor' === c[v]) || !s.call(t, c[v]) || d.push(c[v]);
            return d;
          };
        }
        t.exports = r;
      },
      1189: (t, e, n) => {
        'use strict';
        var r = Array.prototype.slice,
          s = n(1093),
          a = Object.keys,
          o = a
            ? function (t) {
                return a(t);
              }
            : n(28875),
          i = Object.keys;
        (o.shim = function () {
          if (Object.keys) {
            var t = (function () {
              var t = Object.keys(arguments);
              return t && t.length === arguments.length;
            })(1, 2);
            t ||
              (Object.keys = function (t) {
                return s(t) ? i(r.call(t)) : i(t);
              });
          } else Object.keys = o;
          return Object.keys || o;
        }),
          (t.exports = o);
      },
      1093: (t) => {
        'use strict';
        var e = Object.prototype.toString;
        t.exports = function (t) {
          var n = e.call(t),
            r = '[object Arguments]' === n;
          return (
            r || (r = '[object Array]' !== n && null !== t && 'object' == typeof t && 'number' == typeof t.length && t.length >= 0 && '[object Function]' === e.call(t.callee)), r
          );
        };
      },
      38403: (t, e, n) => {
        'use strict';
        var r = n(1189),
          s = n(41333)(),
          a = n(38075),
          o = Object,
          i = a('Array.prototype.push'),
          u = a('Object.prototype.propertyIsEnumerable'),
          l = s ? Object.getOwnPropertySymbols : null;
        t.exports = function (t, e) {
          if (null == t) throw new TypeError('target must be an object');
          var n = o(t);
          if (1 === arguments.length) return n;
          for (var a = 1; a < arguments.length; ++a) {
            var c = o(arguments[a]),
              p = r(c),
              d = s && (Object.getOwnPropertySymbols || l);
            if (d)
              for (var h = d(c), f = 0; f < h.length; ++f) {
                var m = h[f];
                u(c, m) && i(p, m);
              }
            for (var g = 0; g < p.length; ++g) {
              var y = p[g];
              if (u(c, y)) {
                var b = c[y];
                n[y] = b;
              }
            }
          }
          return n;
        };
      },
      11514: (t, e, n) => {
        'use strict';
        var r = n(38403);
        t.exports = function () {
          return Object.assign
            ? (function () {
                if (!Object.assign) return !1;
                for (var t = 'abcdefghijklmnopqrst', e = t.split(''), n = {}, r = 0; r < e.length; ++r) n[e[r]] = e[r];
                var s = Object.assign({}, n),
                  a = '';
                for (var o in s) a += o;
                return t !== a;
              })() ||
              (function () {
                if (!Object.assign || !Object.preventExtensions) return !1;
                var t = Object.preventExtensions({ 1: 2 });
                try {
                  Object.assign(t, 'xy');
                } catch (e) {
                  return 'y' === t[1];
                }
                return !1;
              })()
              ? r
              : Object.assign
            : r;
        };
      },
      65606: (t) => {
        var e,
          n,
          r = (t.exports = {});
        function s() {
          throw new Error('setTimeout has not been defined');
        }
        function a() {
          throw new Error('clearTimeout has not been defined');
        }
        function o(t) {
          if (e === setTimeout) return setTimeout(t, 0);
          if ((e === s || !e) && setTimeout) return (e = setTimeout), setTimeout(t, 0);
          try {
            return e(t, 0);
          } catch (n) {
            try {
              return e.call(null, t, 0);
            } catch (n) {
              return e.call(this, t, 0);
            }
          }
        }
        !(function () {
          try {
            e = 'function' == typeof setTimeout ? setTimeout : s;
          } catch (t) {
            e = s;
          }
          try {
            n = 'function' == typeof clearTimeout ? clearTimeout : a;
          } catch (t) {
            n = a;
          }
        })();
        var i,
          u = [],
          l = !1,
          c = -1;
        function p() {
          l && i && ((l = !1), i.length ? (u = i.concat(u)) : (c = -1), u.length && d());
        }
        function d() {
          if (!l) {
            var t = o(p);
            l = !0;
            for (var e = u.length; e; ) {
              for (i = u, u = []; ++c < e; ) i && i[c].run();
              (c = -1), (e = u.length);
            }
            (i = null),
              (l = !1),
              (function (t) {
                if (n === clearTimeout) return clearTimeout(t);
                if ((n === a || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(t);
                try {
                  return n(t);
                } catch (e) {
                  try {
                    return n.call(null, t);
                  } catch (e) {
                    return n.call(this, t);
                  }
                }
              })(t);
          }
        }
        function h(t, e) {
          (this.fun = t), (this.array = e);
        }
        function f() {}
        (r.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          u.push(new h(t, e)), 1 !== u.length || l || o(d);
        }),
          (h.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (r.title = 'browser'),
          (r.browser = !0),
          (r.env = {}),
          (r.argv = []),
          (r.version = ''),
          (r.versions = {}),
          (r.on = f),
          (r.addListener = f),
          (r.once = f),
          (r.off = f),
          (r.removeListener = f),
          (r.removeAllListeners = f),
          (r.emit = f),
          (r.prependListener = f),
          (r.prependOnceListener = f),
          (r.listeners = function (t) {
            return [];
          }),
          (r.binding = function (t) {
            throw new Error('process.binding is not supported');
          }),
          (r.cwd = function () {
            return '/';
          }),
          (r.chdir = function (t) {
            throw new Error('process.chdir is not supported');
          }),
          (r.umask = function () {
            return 0;
          });
      },
      7391: (t, e, n) => {
        var r = n(7180),
          s = n(43181),
          a = n(43031),
          o = n(9067),
          i = n(96833),
          u = n(43717),
          l = n(74801);
        (l.alea = r), (l.xor128 = s), (l.xorwow = a), (l.xorshift7 = o), (l.xor4096 = i), (l.tychei = u), (t.exports = l);
      },
      7180: function (t, e, n) {
        var r;
        !(function (t, s, a) {
          function o(t) {
            var e,
              n = this,
              r =
                ((e = 4022871197),
                function (t) {
                  t = String(t);
                  for (var n = 0; n < t.length; n++) {
                    var r = 0.02519603282416938 * (e += t.charCodeAt(n));
                    (r -= e = r >>> 0), (e = (r *= e) >>> 0), (e += 4294967296 * (r -= e));
                  }
                  return 2.3283064365386963e-10 * (e >>> 0);
                });
            (n.next = function () {
              var t = 2091639 * n.s0 + 2.3283064365386963e-10 * n.c;
              return (n.s0 = n.s1), (n.s1 = n.s2), (n.s2 = t - (n.c = 0 | t));
            }),
              (n.c = 1),
              (n.s0 = r(' ')),
              (n.s1 = r(' ')),
              (n.s2 = r(' ')),
              (n.s0 -= r(t)),
              n.s0 < 0 && (n.s0 += 1),
              (n.s1 -= r(t)),
              n.s1 < 0 && (n.s1 += 1),
              (n.s2 -= r(t)),
              n.s2 < 0 && (n.s2 += 1),
              (r = null);
          }
          function i(t, e) {
            return (e.c = t.c), (e.s0 = t.s0), (e.s1 = t.s1), (e.s2 = t.s2), e;
          }
          function u(t, e) {
            var n = new o(t),
              r = e && e.state,
              s = n.next;
            return (
              (s.int32 = function () {
                return (4294967296 * n.next()) | 0;
              }),
              (s.double = function () {
                return s() + 11102230246251565e-32 * ((2097152 * s()) | 0);
              }),
              (s.quick = s),
              r &&
                ('object' == typeof r && i(r, n),
                (s.state = function () {
                  return i(n, {});
                })),
              s
            );
          }
          s && s.exports
            ? (s.exports = u)
            : n.amdD && n.amdO
              ? void 0 ===
                  (r = function () {
                    return u;
                  }.call(e, n, e, s)) || (s.exports = r)
              : (this.alea = u);
        })(0, (t = n.nmd(t)), n.amdD);
      },
      43717: function (t, e, n) {
        var r;
        !(function (t, s, a) {
          function o(t) {
            var e = this,
              n = '';
            (e.next = function () {
              var t = e.b,
                n = e.c,
                r = e.d,
                s = e.a;
              return (
                (t = (t << 25) ^ (t >>> 7) ^ n),
                (n = (n - r) | 0),
                (r = (r << 24) ^ (r >>> 8) ^ s),
                (s = (s - t) | 0),
                (e.b = t = (t << 20) ^ (t >>> 12) ^ n),
                (e.c = n = (n - r) | 0),
                (e.d = (r << 16) ^ (n >>> 16) ^ s),
                (e.a = (s - t) | 0)
              );
            }),
              (e.a = 0),
              (e.b = 0),
              (e.c = -1640531527),
              (e.d = 1367130551),
              t === Math.floor(t) ? ((e.a = (t / 4294967296) | 0), (e.b = 0 | t)) : (n += t);
            for (var r = 0; r < n.length + 20; r++) (e.b ^= 0 | n.charCodeAt(r)), e.next();
          }
          function i(t, e) {
            return (e.a = t.a), (e.b = t.b), (e.c = t.c), (e.d = t.d), e;
          }
          function u(t, e) {
            var n = new o(t),
              r = e && e.state,
              s = function () {
                return (n.next() >>> 0) / 4294967296;
              };
            return (
              (s.double = function () {
                do {
                  var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
                } while (0 === t);
                return t;
              }),
              (s.int32 = n.next),
              (s.quick = s),
              r &&
                ('object' == typeof r && i(r, n),
                (s.state = function () {
                  return i(n, {});
                })),
              s
            );
          }
          s && s.exports
            ? (s.exports = u)
            : n.amdD && n.amdO
              ? void 0 ===
                  (r = function () {
                    return u;
                  }.call(e, n, e, s)) || (s.exports = r)
              : (this.tychei = u);
        })(0, (t = n.nmd(t)), n.amdD);
      },
      43181: function (t, e, n) {
        var r;
        !(function (t, s, a) {
          function o(t) {
            var e = this,
              n = '';
            (e.x = 0),
              (e.y = 0),
              (e.z = 0),
              (e.w = 0),
              (e.next = function () {
                var t = e.x ^ (e.x << 11);
                return (e.x = e.y), (e.y = e.z), (e.z = e.w), (e.w ^= (e.w >>> 19) ^ t ^ (t >>> 8));
              }),
              t === (0 | t) ? (e.x = t) : (n += t);
            for (var r = 0; r < n.length + 64; r++) (e.x ^= 0 | n.charCodeAt(r)), e.next();
          }
          function i(t, e) {
            return (e.x = t.x), (e.y = t.y), (e.z = t.z), (e.w = t.w), e;
          }
          function u(t, e) {
            var n = new o(t),
              r = e && e.state,
              s = function () {
                return (n.next() >>> 0) / 4294967296;
              };
            return (
              (s.double = function () {
                do {
                  var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
                } while (0 === t);
                return t;
              }),
              (s.int32 = n.next),
              (s.quick = s),
              r &&
                ('object' == typeof r && i(r, n),
                (s.state = function () {
                  return i(n, {});
                })),
              s
            );
          }
          s && s.exports
            ? (s.exports = u)
            : n.amdD && n.amdO
              ? void 0 ===
                  (r = function () {
                    return u;
                  }.call(e, n, e, s)) || (s.exports = r)
              : (this.xor128 = u);
        })(0, (t = n.nmd(t)), n.amdD);
      },
      96833: function (t, e, n) {
        var r;
        !(function (t, s, a) {
          function o(t) {
            var e = this;
            (e.next = function () {
              var t,
                n,
                r = e.w,
                s = e.X,
                a = e.i;
              return (
                (e.w = r = (r + 1640531527) | 0),
                (n = s[(a + 34) & 127]),
                (t = s[(a = (a + 1) & 127)]),
                (n ^= n << 13),
                (t ^= t << 17),
                (n ^= n >>> 15),
                (t ^= t >>> 12),
                (n = s[a] = n ^ t),
                (e.i = a),
                (n + (r ^ (r >>> 16))) | 0
              );
            }),
              (function (t, e) {
                var n,
                  r,
                  s,
                  a,
                  o,
                  i = [],
                  u = 128;
                for (e === (0 | e) ? ((r = e), (e = null)) : ((e += '\0'), (r = 0), (u = Math.max(u, e.length))), s = 0, a = -32; a < u; ++a)
                  e && (r ^= e.charCodeAt((a + 32) % e.length)),
                    0 === a && (o = r),
                    (r ^= r << 10),
                    (r ^= r >>> 15),
                    (r ^= r << 4),
                    (r ^= r >>> 13),
                    a >= 0 && ((o = (o + 1640531527) | 0), (s = 0 == (n = i[127 & a] ^= r + o) ? s + 1 : 0));
                for (s >= 128 && (i[127 & ((e && e.length) || 0)] = -1), s = 127, a = 512; a > 0; --a)
                  (r = i[(s + 34) & 127]), (n = i[(s = (s + 1) & 127)]), (r ^= r << 13), (n ^= n << 17), (r ^= r >>> 15), (n ^= n >>> 12), (i[s] = r ^ n);
                (t.w = o), (t.X = i), (t.i = s);
              })(e, t);
          }
          function i(t, e) {
            return (e.i = t.i), (e.w = t.w), (e.X = t.X.slice()), e;
          }
          function u(t, e) {
            null == t && (t = +new Date());
            var n = new o(t),
              r = e && e.state,
              s = function () {
                return (n.next() >>> 0) / 4294967296;
              };
            return (
              (s.double = function () {
                do {
                  var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
                } while (0 === t);
                return t;
              }),
              (s.int32 = n.next),
              (s.quick = s),
              r &&
                (r.X && i(r, n),
                (s.state = function () {
                  return i(n, {});
                })),
              s
            );
          }
          s && s.exports
            ? (s.exports = u)
            : n.amdD && n.amdO
              ? void 0 ===
                  (r = function () {
                    return u;
                  }.call(e, n, e, s)) || (s.exports = r)
              : (this.xor4096 = u);
        })(0, (t = n.nmd(t)), n.amdD);
      },
      9067: function (t, e, n) {
        var r;
        !(function (t, s, a) {
          function o(t) {
            var e = this;
            (e.next = function () {
              var t,
                n,
                r = e.x,
                s = e.i;
              return (
                (t = r[s]),
                (n = (t ^= t >>> 7) ^ (t << 24)),
                (n ^= (t = r[(s + 1) & 7]) ^ (t >>> 10)),
                (n ^= (t = r[(s + 3) & 7]) ^ (t >>> 3)),
                (n ^= (t = r[(s + 4) & 7]) ^ (t << 7)),
                (t = r[(s + 7) & 7]),
                (n ^= (t ^= t << 13) ^ (t << 9)),
                (r[s] = n),
                (e.i = (s + 1) & 7),
                n
              );
            }),
              (function (t, e) {
                var n,
                  r = [];
                if (e === (0 | e)) r[0] = e;
                else for (e = '' + e, n = 0; n < e.length; ++n) r[7 & n] = (r[7 & n] << 15) ^ ((e.charCodeAt(n) + r[(n + 1) & 7]) << 13);
                for (; r.length < 8; ) r.push(0);
                for (n = 0; n < 8 && 0 === r[n]; ++n);
                for (8 == n ? (r[7] = -1) : r[n], t.x = r, t.i = 0, n = 256; n > 0; --n) t.next();
              })(e, t);
          }
          function i(t, e) {
            return (e.x = t.x.slice()), (e.i = t.i), e;
          }
          function u(t, e) {
            null == t && (t = +new Date());
            var n = new o(t),
              r = e && e.state,
              s = function () {
                return (n.next() >>> 0) / 4294967296;
              };
            return (
              (s.double = function () {
                do {
                  var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
                } while (0 === t);
                return t;
              }),
              (s.int32 = n.next),
              (s.quick = s),
              r &&
                (r.x && i(r, n),
                (s.state = function () {
                  return i(n, {});
                })),
              s
            );
          }
          s && s.exports
            ? (s.exports = u)
            : n.amdD && n.amdO
              ? void 0 ===
                  (r = function () {
                    return u;
                  }.call(e, n, e, s)) || (s.exports = r)
              : (this.xorshift7 = u);
        })(0, (t = n.nmd(t)), n.amdD);
      },
      43031: function (t, e, n) {
        var r;
        !(function (t, s, a) {
          function o(t) {
            var e = this,
              n = '';
            (e.next = function () {
              var t = e.x ^ (e.x >>> 2);
              return (e.x = e.y), (e.y = e.z), (e.z = e.w), (e.w = e.v), ((e.d = (e.d + 362437) | 0) + (e.v = e.v ^ (e.v << 4) ^ t ^ (t << 1))) | 0;
            }),
              (e.x = 0),
              (e.y = 0),
              (e.z = 0),
              (e.w = 0),
              (e.v = 0),
              t === (0 | t) ? (e.x = t) : (n += t);
            for (var r = 0; r < n.length + 64; r++) (e.x ^= 0 | n.charCodeAt(r)), r == n.length && (e.d = (e.x << 10) ^ (e.x >>> 4)), e.next();
          }
          function i(t, e) {
            return (e.x = t.x), (e.y = t.y), (e.z = t.z), (e.w = t.w), (e.v = t.v), (e.d = t.d), e;
          }
          function u(t, e) {
            var n = new o(t),
              r = e && e.state,
              s = function () {
                return (n.next() >>> 0) / 4294967296;
              };
            return (
              (s.double = function () {
                do {
                  var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
                } while (0 === t);
                return t;
              }),
              (s.int32 = n.next),
              (s.quick = s),
              r &&
                ('object' == typeof r && i(r, n),
                (s.state = function () {
                  return i(n, {});
                })),
              s
            );
          }
          s && s.exports
            ? (s.exports = u)
            : n.amdD && n.amdO
              ? void 0 ===
                  (r = function () {
                    return u;
                  }.call(e, n, e, s)) || (s.exports = r)
              : (this.xorwow = u);
        })(0, (t = n.nmd(t)), n.amdD);
      },
      74801: function (t, e, n) {
        var r;
        !(function (s, a, o) {
          var i,
            u = 256,
            l = o.pow(u, 6),
            c = o.pow(2, 52),
            p = 2 * c,
            d = u - 1;
          function h(t, e, n) {
            var r = [],
              d = y(
                g(
                  (e = 1 == e ? { entropy: !0 } : e || {}).entropy
                    ? [t, b(a)]
                    : null == t
                      ? (function () {
                          try {
                            var t;
                            return i && (t = i.randomBytes) ? (t = t(u)) : ((t = new Uint8Array(u)), (s.crypto || s.msCrypto).getRandomValues(t)), b(t);
                          } catch (t) {
                            var e = s.navigator,
                              n = e && e.plugins;
                            return [+new Date(), s, n, s.screen, b(a)];
                          }
                        })()
                      : t,
                  3,
                ),
                r,
              ),
              h = new f(r),
              v = function () {
                for (var t = h.g(6), e = l, n = 0; t < c; ) (t = (t + n) * u), (e *= u), (n = h.g(1));
                for (; t >= p; ) (t /= 2), (e /= 2), (n >>>= 1);
                return (t + n) / e;
              };
            return (
              (v.int32 = function () {
                return 0 | h.g(4);
              }),
              (v.quick = function () {
                return h.g(4) / 4294967296;
              }),
              (v.double = v),
              y(b(h.S), a),
              (
                e.pass ||
                n ||
                function (t, e, n, r) {
                  return (
                    r &&
                      (r.S && m(r, h),
                      (t.state = function () {
                        return m(h, {});
                      })),
                    n ? ((o.random = t), e) : t
                  );
                }
              )(v, d, 'global' in e ? e.global : this == o, e.state)
            );
          }
          function f(t) {
            var e,
              n = t.length,
              r = this,
              s = 0,
              a = (r.i = r.j = 0),
              o = (r.S = []);
            for (n || (t = [n++]); s < u; ) o[s] = s++;
            for (s = 0; s < u; s++) (o[s] = o[(a = d & (a + t[s % n] + (e = o[s])))]), (o[a] = e);
            (r.g = function (t) {
              for (var e, n = 0, s = r.i, a = r.j, o = r.S; t--; ) (e = o[(s = d & (s + 1))]), (n = n * u + o[d & ((o[s] = o[(a = d & (a + e))]) + (o[a] = e))]);
              return (r.i = s), (r.j = a), n;
            })(u);
          }
          function m(t, e) {
            return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
          }
          function g(t, e) {
            var n,
              r = [],
              s = typeof t;
            if (e && 'object' == s)
              for (n in t)
                try {
                  r.push(g(t[n], e - 1));
                } catch (t) {}
            return r.length ? r : 'string' == s ? t : t + '\0';
          }
          function y(t, e) {
            for (var n, r = t + '', s = 0; s < r.length; ) e[d & s] = d & ((n ^= 19 * e[d & s]) + r.charCodeAt(s++));
            return b(e);
          }
          function b(t) {
            return String.fromCharCode.apply(0, t);
          }
          if ((y(o.random(), a), t.exports)) {
            t.exports = h;
            try {
              i = n(41234);
            } catch (t) {}
          } else
            void 0 ===
              (r = function () {
                return h;
              }.call(e, n, e, t)) || (t.exports = r);
        })('undefined' != typeof self ? self : this, [], Math);
      },
      96897: (t, e, n) => {
        'use strict';
        var r = n(70453),
          s = n(30041),
          a = n(30592)(),
          o = n(75795),
          i = n(69675),
          u = r('%Math.floor%');
        t.exports = function (t, e) {
          if ('function' != typeof t) throw new i('`fn` is not a function');
          if ('number' != typeof e || e < 0 || e > 4294967295 || u(e) !== e) throw new i('`length` must be a positive 32-bit integer');
          var n = arguments.length > 2 && !!arguments[2],
            r = !0,
            l = !0;
          if ('length' in t && o) {
            var c = o(t, 'length');
            c && !c.configurable && (r = !1), c && !c.writable && (l = !1);
          }
          return (r || l || !n) && (a ? s(t, 'length', e, !0, !0) : s(t, 'length', e)), t;
        };
      },
      36622: (t) => {
        'function' == typeof Object.create
          ? (t.exports = function (t, e) {
              (t.super_ = e), (t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }));
            })
          : (t.exports = function (t, e) {
              t.super_ = e;
              var n = function () {};
              (n.prototype = e.prototype), (t.prototype = new n()), (t.prototype.constructor = t);
            });
      },
      81135: (t) => {
        t.exports = function (t) {
          return t && 'object' == typeof t && 'function' == typeof t.copy && 'function' == typeof t.fill && 'function' == typeof t.readUInt8;
        };
      },
      40537: (t, e, n) => {
        var r = n(65606),
          s = n(96763),
          a =
            Object.getOwnPropertyDescriptors ||
            function (t) {
              for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) n[e[r]] = Object.getOwnPropertyDescriptor(t, e[r]);
              return n;
            },
          o = /%[sdj%]/g;
        (e.format = function (t) {
          if (!v(t)) {
            for (var e = [], n = 0; n < arguments.length; n++) e.push(l(arguments[n]));
            return e.join(' ');
          }
          n = 1;
          for (
            var r = arguments,
              s = r.length,
              a = String(t).replace(o, function (t) {
                if ('%%' === t) return '%';
                if (n >= s) return t;
                switch (t) {
                  case '%s':
                    return String(r[n++]);
                  case '%d':
                    return Number(r[n++]);
                  case '%j':
                    try {
                      return JSON.stringify(r[n++]);
                    } catch (t) {
                      return '[Circular]';
                    }
                  default:
                    return t;
                }
              }),
              i = r[n];
            n < s;
            i = r[++n]
          )
            y(i) || !x(i) ? (a += ' ' + i) : (a += ' ' + l(i));
          return a;
        }),
          (e.deprecate = function (t, n) {
            if (void 0 !== r && !0 === r.noDeprecation) return t;
            if (void 0 === r)
              return function () {
                return e.deprecate(t, n).apply(this, arguments);
              };
            var a = !1;
            return function () {
              if (!a) {
                if (r.throwDeprecation) throw new Error(n);
                r.traceDeprecation ? s.trace(n) : s.error(n), (a = !0);
              }
              return t.apply(this, arguments);
            };
          });
        var i,
          u = {};
        function l(t, n) {
          var r = { seen: [], stylize: p };
          return (
            arguments.length >= 3 && (r.depth = arguments[2]),
            arguments.length >= 4 && (r.colors = arguments[3]),
            g(n) ? (r.showHidden = n) : n && e._extend(r, n),
            w(r.showHidden) && (r.showHidden = !1),
            w(r.depth) && (r.depth = 2),
            w(r.colors) && (r.colors = !1),
            w(r.customInspect) && (r.customInspect = !0),
            r.colors && (r.stylize = c),
            d(r, t, r.depth)
          );
        }
        function c(t, e) {
          var n = l.styles[e];
          return n ? '[' + l.colors[n][0] + 'm' + t + '[' + l.colors[n][1] + 'm' : t;
        }
        function p(t, e) {
          return t;
        }
        function d(t, n, r) {
          if (t.customInspect && n && E(n.inspect) && n.inspect !== e.inspect && (!n.constructor || n.constructor.prototype !== n)) {
            var s = n.inspect(r, t);
            return v(s) || (s = d(t, s, r)), s;
          }
          var a = (function (t, e) {
            if (w(e)) return t.stylize('undefined', 'undefined');
            if (v(e)) {
              var n = "'" + JSON.stringify(e).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
              return t.stylize(n, 'string');
            }
            return b(e) ? t.stylize('' + e, 'number') : g(e) ? t.stylize('' + e, 'boolean') : y(e) ? t.stylize('null', 'null') : void 0;
          })(t, n);
          if (a) return a;
          var o = Object.keys(n),
            i = (function (t) {
              var e = {};
              return (
                t.forEach(function (t, n) {
                  e[t] = !0;
                }),
                e
              );
            })(o);
          if ((t.showHidden && (o = Object.getOwnPropertyNames(n)), N(n) && (o.indexOf('message') >= 0 || o.indexOf('description') >= 0))) return h(n);
          if (0 === o.length) {
            if (E(n)) {
              var u = n.name ? ': ' + n.name : '';
              return t.stylize('[Function' + u + ']', 'special');
            }
            if (T(n)) return t.stylize(RegExp.prototype.toString.call(n), 'regexp');
            if (S(n)) return t.stylize(Date.prototype.toString.call(n), 'date');
            if (N(n)) return h(n);
          }
          var l,
            c = '',
            p = !1,
            x = ['{', '}'];
          return (
            m(n) && ((p = !0), (x = ['[', ']'])),
            E(n) && (c = ' [Function' + (n.name ? ': ' + n.name : '') + ']'),
            T(n) && (c = ' ' + RegExp.prototype.toString.call(n)),
            S(n) && (c = ' ' + Date.prototype.toUTCString.call(n)),
            N(n) && (c = ' ' + h(n)),
            0 !== o.length || (p && 0 != n.length)
              ? r < 0
                ? T(n)
                  ? t.stylize(RegExp.prototype.toString.call(n), 'regexp')
                  : t.stylize('[Object]', 'special')
                : (t.seen.push(n),
                  (l = p
                    ? (function (t, e, n, r, s) {
                        for (var a = [], o = 0, i = e.length; o < i; ++o) I(e, String(o)) ? a.push(f(t, e, n, r, String(o), !0)) : a.push('');
                        return (
                          s.forEach(function (s) {
                            s.match(/^\d+$/) || a.push(f(t, e, n, r, s, !0));
                          }),
                          a
                        );
                      })(t, n, r, i, o)
                    : o.map(function (e) {
                        return f(t, n, r, i, e, p);
                      })),
                  t.seen.pop(),
                  (function (t, e, n) {
                    return t.reduce(function (t, e) {
                      return e.indexOf('\n'), t + e.replace(/\u001b\[\d\d?m/g, '').length + 1;
                    }, 0) > 60
                      ? n[0] + ('' === e ? '' : e + '\n ') + ' ' + t.join(',\n  ') + ' ' + n[1]
                      : n[0] + e + ' ' + t.join(', ') + ' ' + n[1];
                  })(l, c, x))
              : x[0] + c + x[1]
          );
        }
        function h(t) {
          return '[' + Error.prototype.toString.call(t) + ']';
        }
        function f(t, e, n, r, s, a) {
          var o, i, u;
          if (
            ((u = Object.getOwnPropertyDescriptor(e, s) || { value: e[s] }).get
              ? (i = u.set ? t.stylize('[Getter/Setter]', 'special') : t.stylize('[Getter]', 'special'))
              : u.set && (i = t.stylize('[Setter]', 'special')),
            I(r, s) || (o = '[' + s + ']'),
            i ||
              (t.seen.indexOf(u.value) < 0
                ? (i = y(n) ? d(t, u.value, null) : d(t, u.value, n - 1)).indexOf('\n') > -1 &&
                  (i = a
                    ? i
                        .split('\n')
                        .map(function (t) {
                          return '  ' + t;
                        })
                        .join('\n')
                        .substr(2)
                    : '\n' +
                      i
                        .split('\n')
                        .map(function (t) {
                          return '   ' + t;
                        })
                        .join('\n'))
                : (i = t.stylize('[Circular]', 'special'))),
            w(o))
          ) {
            if (a && s.match(/^\d+$/)) return i;
            (o = JSON.stringify('' + s)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((o = o.substr(1, o.length - 2)), (o = t.stylize(o, 'name')))
              : ((o = o
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (o = t.stylize(o, 'string')));
          }
          return o + ': ' + i;
        }
        function m(t) {
          return Array.isArray(t);
        }
        function g(t) {
          return 'boolean' == typeof t;
        }
        function y(t) {
          return null === t;
        }
        function b(t) {
          return 'number' == typeof t;
        }
        function v(t) {
          return 'string' == typeof t;
        }
        function w(t) {
          return void 0 === t;
        }
        function T(t) {
          return x(t) && '[object RegExp]' === A(t);
        }
        function x(t) {
          return 'object' == typeof t && null !== t;
        }
        function S(t) {
          return x(t) && '[object Date]' === A(t);
        }
        function N(t) {
          return x(t) && ('[object Error]' === A(t) || t instanceof Error);
        }
        function E(t) {
          return 'function' == typeof t;
        }
        function A(t) {
          return Object.prototype.toString.call(t);
        }
        function k(t) {
          return t < 10 ? '0' + t.toString(10) : t.toString(10);
        }
        (e.debuglog = function (t) {
          if ((w(i) && (i = r.env.NODE_DEBUG || ''), (t = t.toUpperCase()), !u[t]))
            if (new RegExp('\\b' + t + '\\b', 'i').test(i)) {
              var n = r.pid;
              u[t] = function () {
                var r = e.format.apply(e, arguments);
                s.error('%s %d: %s', t, n, r);
              };
            } else u[t] = function () {};
          return u[t];
        }),
          (e.inspect = l),
          (l.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39],
          }),
          (l.styles = { special: 'cyan', number: 'yellow', boolean: 'yellow', undefined: 'grey', null: 'bold', string: 'green', date: 'magenta', regexp: 'red' }),
          (e.isArray = m),
          (e.isBoolean = g),
          (e.isNull = y),
          (e.isNullOrUndefined = function (t) {
            return null == t;
          }),
          (e.isNumber = b),
          (e.isString = v),
          (e.isSymbol = function (t) {
            return 'symbol' == typeof t;
          }),
          (e.isUndefined = w),
          (e.isRegExp = T),
          (e.isObject = x),
          (e.isDate = S),
          (e.isError = N),
          (e.isFunction = E),
          (e.isPrimitive = function (t) {
            return null === t || 'boolean' == typeof t || 'number' == typeof t || 'string' == typeof t || 'symbol' == typeof t || void 0 === t;
          }),
          (e.isBuffer = n(81135));
        var _ = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        function I(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        (e.log = function () {
          var t, n;
          s.log(
            '%s - %s',
            ((n = [k((t = new Date()).getHours()), k(t.getMinutes()), k(t.getSeconds())].join(':')), [t.getDate(), _[t.getMonth()], n].join(' ')),
            e.format.apply(e, arguments),
          );
        }),
          (e.inherits = n(36622)),
          (e._extend = function (t, e) {
            if (!e || !x(e)) return t;
            for (var n = Object.keys(e), r = n.length; r--; ) t[n[r]] = e[n[r]];
            return t;
          });
        var O = 'undefined' != typeof Symbol ? Symbol('util.promisify.custom') : void 0;
        function M(t, e) {
          if (!t) {
            var n = new Error('Promise was rejected with a falsy value');
            (n.reason = t), (t = n);
          }
          return e(t);
        }
        (e.promisify = function (t) {
          if ('function' != typeof t) throw new TypeError('The "original" argument must be of type Function');
          if (O && t[O]) {
            var e;
            if ('function' != typeof (e = t[O])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
            return Object.defineProperty(e, O, { value: e, enumerable: !1, writable: !1, configurable: !0 }), e;
          }
          function e() {
            for (
              var e,
                n,
                r = new Promise(function (t, r) {
                  (e = t), (n = r);
                }),
                s = [],
                a = 0;
              a < arguments.length;
              a++
            )
              s.push(arguments[a]);
            s.push(function (t, r) {
              t ? n(t) : e(r);
            });
            try {
              t.apply(this, s);
            } catch (t) {
              n(t);
            }
            return r;
          }
          return (
            Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            O && Object.defineProperty(e, O, { value: e, enumerable: !1, writable: !1, configurable: !0 }),
            Object.defineProperties(e, a(t))
          );
        }),
          (e.promisify.custom = O),
          (e.callbackify = function (t) {
            if ('function' != typeof t) throw new TypeError('The "original" argument must be of type Function');
            function e() {
              for (var e = [], n = 0; n < arguments.length; n++) e.push(arguments[n]);
              var s = e.pop();
              if ('function' != typeof s) throw new TypeError('The last argument must be of type Function');
              var a = this,
                o = function () {
                  return s.apply(a, arguments);
                };
              t.apply(this, e).then(
                function (t) {
                  r.nextTick(o, null, t);
                },
                function (t) {
                  r.nextTick(M, t, o);
                },
              );
            }
            return Object.setPrototypeOf(e, Object.getPrototypeOf(t)), Object.defineProperties(e, a(t)), e;
          });
      },
      85817: () => {},
      18590: () => {},
      41234: () => {},
    },
    e = {};
  function n(r) {
    var s = e[r];
    if (void 0 !== s) return s.exports;
    var a = (e[r] = { id: r, loaded: !1, exports: {} });
    return t[r].call(a.exports, a, a.exports, n), (a.loaded = !0), a.exports;
  }
  (n.amdD = function () {
    throw new Error('define cannot be used indirect');
  }),
    (n.amdO = {}),
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
    (n.d = (t, e) => {
      for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t));
  var r = n(54105);
  blazeface = r;
})();
