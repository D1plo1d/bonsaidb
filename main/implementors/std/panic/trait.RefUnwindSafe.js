(function() {var implementors = {};
implementors["pliantdb_core"] = [{"text":"impl&lt;'a, Cn, Cl&gt; RefUnwindSafe for Collection&lt;'a, Cn, Cl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Cl: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Cn: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Cn, V&gt; RefUnwindSafe for View&lt;'a, Cn, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Cn: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;V as View&gt;::Key: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K&gt; RefUnwindSafe for QueryKey&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AccessPolicy","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Revision","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Header","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for Document&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Id","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Schema","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; RefUnwindSafe for Map&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Serialized","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; RefUnwindSafe for MappedValue&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; RefUnwindSafe for SerializableValue&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for Transaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for Operation&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for Command&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OperationResult","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for Executed&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChangedDocument","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Basic","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BasicCount","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BasicByParentId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BasicByCategory","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BasicByBrokenParentId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BasicDatabase","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TestDirectory","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BasicCollectionWithNoViews","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BasicCollectionWithOnlyBrokenParentId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UnassociatedCollection","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]}];
implementors["pliantdb_jobs"] = [{"text":"impl&lt;Key&nbsp;=&nbsp;()&gt; !RefUnwindSafe for Manager&lt;Key&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Id","synthetic":true,"types":[]},{"text":"impl&lt;T, Key&gt; !RefUnwindSafe for Handle&lt;T, Key&gt;","synthetic":true,"types":[]}];
implementors["pliantdb_local"] = [{"text":"impl RefUnwindSafe for Configuration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Tasks","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Views","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; !RefUnwindSafe for Storage&lt;DB&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()