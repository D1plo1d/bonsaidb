(function() {var implementors = {};
implementors["pliantdb_core"] = [{"text":"impl&lt;'a, Cn, Cl&gt; Send for Collection&lt;'a, Cn, Cl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Cl: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Cn: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Cn, V&gt; Send for View&lt;'a, Cn, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Cn: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;V as View&gt;::Key: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K&gt; Send for QueryKey&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for AccessPolicy","synthetic":true,"types":[]},{"text":"impl Send for Revision","synthetic":true,"types":[]},{"text":"impl Send for Header","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Document&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Id","synthetic":true,"types":[]},{"text":"impl Send for Schema","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Send for Map&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Serialized","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Send for MappedValue&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for SerializableValue&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Transaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Operation&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Command&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for OperationResult","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Executed&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ChangedDocument","synthetic":true,"types":[]},{"text":"impl Send for Basic","synthetic":true,"types":[]},{"text":"impl Send for BasicCount","synthetic":true,"types":[]},{"text":"impl Send for BasicByParentId","synthetic":true,"types":[]},{"text":"impl Send for BasicByCategory","synthetic":true,"types":[]},{"text":"impl Send for BasicByBrokenParentId","synthetic":true,"types":[]},{"text":"impl Send for BasicDatabase","synthetic":true,"types":[]},{"text":"impl Send for TestDirectory","synthetic":true,"types":[]},{"text":"impl Send for BasicCollectionWithNoViews","synthetic":true,"types":[]},{"text":"impl Send for BasicCollectionWithOnlyBrokenParentId","synthetic":true,"types":[]},{"text":"impl Send for UnassociatedCollection","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]}];
implementors["pliantdb_jobs"] = [{"text":"impl&lt;Key&gt; Send for Manager&lt;Key&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Id","synthetic":true,"types":[]},{"text":"impl&lt;T, Key&gt; Send for Handle&lt;T, Key&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pliantdb_local"] = [{"text":"impl Send for Configuration","synthetic":true,"types":[]},{"text":"impl Send for Tasks","synthetic":true,"types":[]},{"text":"impl Send for Views","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Send for Storage&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Send,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()